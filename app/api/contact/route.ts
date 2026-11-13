import { NextRequest, NextResponse } from 'next/server';
import { company } from '@/app/data/company';

// Simple in-memory rate limiting by client IP
// Max 5 submissions per 15 minutes per IP
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestHistory = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestHistory.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestHistory.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  ipRequestHistory.set(ip, validTimestamps);
  return false;
}

interface IncomingAttachment {
  name: string;
  size: number;
  type: string;
  base64?: string;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous-client';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions. Please wait a few minutes before trying again.',
          fallbackMailto: `mailto:${company.email}?subject=${encodeURIComponent('Project Inquiry')}`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company: clientCompany, 
      service, 
      timeline, 
      budget, 
      message, 
      honeypot,
      attachments 
    } = body;

    // Honeypot check: If the hidden field has any value, treat as spam bot
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { success: false, error: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Server-side field validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name (2-100 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details between 10 and 5,000 characters.' },
        { status: 400 }
      );
    }

    // Format attachments summary
    const parsedAttachments: IncomingAttachment[] = Array.isArray(attachments) ? attachments : [];
    const attachmentsSummary = parsedAttachments.length > 0
      ? `\n\nAttached Documentation (${parsedAttachments.length} file${parsedAttachments.length > 1 ? 's' : ''}):\n` +
        parsedAttachments.map((a) => `• ${a.name} (${Math.round(a.size / 1024)} KB)`).join('\n')
      : '';

    // Build plain text message payload
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${clientCompany || 'N/A'}${service ? `\nService: ${service}` : ''}${timeline ? `\nTimeline: ${timeline}` : ''}${budget ? `\nBudget: ${budget}` : ''}\n\nProject Scope & Requirements:\n${message}${attachmentsSummary}`
    );
    const fallbackMailto = `mailto:${company.email}?subject=${encodeURIComponent(`Project Scoping Request from ${name}`)}&body=${mailtoBody}`;

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || company.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'website@improxgroup.com';

    // Provider check: Resend API
    if (resendApiKey) {
      try {
        const resendAttachments = parsedAttachments
          .filter((a) => a.name && a.base64)
          .map((a) => {
            const parts = (a.base64 || '').split(',');
            return {
              filename: a.name,
              content: parts.length > 1 ? parts[1] : a.base64,
            };
          });

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email.trim(),
            subject: `[Project Scoping Inquiry] ${name} - ${clientCompany || 'New Prospect'}`,
            text: `New project scoping submission from Improx Tech website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${clientCompany || 'N/A'}\n\nScope & Requirements:\n${message}${attachmentsSummary}`,
            attachments: resendAttachments.length > 0 ? resendAttachments : undefined,
          }),
        });

        if (resendResponse.ok) {
          const resendData = await resendResponse.json();
          return NextResponse.json({
            success: true,
            id: resendData.id,
            message: 'Your inquiry and documentation have been successfully delivered to our engineering leadership.',
          });
        }

        const resendErr = await resendResponse.text();
        console.error('[contact-api] Resend API error response:', resendErr);
        return NextResponse.json(
          {
            success: false,
            error: 'Email delivery failed through the provider. Please send directly using your email client.',
            fallbackMailto,
            mailtoFallback: fallbackMailto,
          },
          { status: 502 }
        );
      } catch (sendErr) {
        console.error('[contact-api] Failed to connect to Resend:', sendErr);
        return NextResponse.json(
          {
            success: false,
            error: 'Network error connecting to email provider. Please email us directly.',
            fallbackMailto,
            mailtoFallback: fallbackMailto,
          },
          { status: 502 }
        );
      }
    }

    // Honest handling when no delivery provider is configured in environment
    console.warn(
      '[contact-api] RESEND_API_KEY is not configured in environment variables. Form cannot send automatically.'
    );

    return NextResponse.json(
      {
        success: false,
        error:
          'Automated email delivery is not configured on this server. Please click below to send your inquiry directly via your email client.',
        fallbackMailto,
        mailtoFallback: fallbackMailto,
        unconfigured: true,
      },
      { status: 503 }
    );
  } catch (error) {
    console.error('[contact-api] Unexpected handler error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please email us directly.',
        fallbackMailto: `mailto:${company.email}?subject=${encodeURIComponent('Project Inquiry')}`,
      },
      { status: 500 }
    );
  }
}
