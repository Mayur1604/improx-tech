# Improx Tech — Enterprise Software & Cloud Engineering

The official web platform for **Improx Tech**, a global software engineering and technology consulting firm headquartered in Lewes, Delaware with engineering delivery in Pune, India.

---

## Technical Stack & Architecture

- **Framework**: Next.js (App Router, Server Components by default)
- **Styling**: Tailwind CSS v4 + Design Tokens (`app/styles/tokens.css`, `app/styles/motion.css`)
- **Typography**: Self-hosted `Geist Sans` (`public/fonts/geist-sans.woff2`) loaded via `next/font/local`
- **Icons**: Lucide React
- **Motion**: Tokenized CSS transitions (`--ease: cubic-bezier(0.22, 1, 0.36, 1)`) + IntersectionObserver client `Reveal` component
- **Email Delivery**: Resend API integration with honeypot security, server-side validation, rate limiting, and honest `mailto:` fallback
- **Image Optimization**: Sharp-based asset pipeline (`scripts/optimize-images.mjs`) emitting local WebP assets

---

## Critical Architecture Notes

1. **CSS Compilation (`scripts/build-css.js`)**:
   - `scripts/build-css.js` regenerates `app/globals.css` during dev and build.
   - **Never edit `app/globals.css` directly.**
   - Custom CSS belongs in `app/styles/tokens.css` and `app/styles/motion.css`, which are imported in `app/layout.tsx`.
   - **Do not modify `scripts/patch-next.js`.**

2. **Single Source of Truth (`app/data/company.ts`)**:
   - Every corporate claim, contact point, and address is strictly governed by `company.ts`.
   - Only verified facts are stored (Founding year: 2015, Delaware & Pune addresses, phone, and email). All unverifiable facts are set to `null`.
   - Any missing or pending claims are tracked in `CONTENT_TODO.md`.

3. **Selected Work (`app/data/projectsData.ts`)**:
   - The `selectedProjects` array starts empty (`[]`). The homepage "Selected Work" section conditionally returns `null` and remains hidden until authentic client projects are supplied.

---

## Installation & Local Development

### Prerequisites
- Node.js >= 18.18.0 (Tested on Node.js v22)
- npm >= 9.0.0

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local

# 3. Compile CSS tokens
node scripts/build-css.js

# 4. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Environment Variables

Copy `.env.example` to `.env.local` to configure email delivery and production canonical URLs:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | API Key from Resend for sending contact inquiries | `re_123456789...` |
| `CONTACT_TO_EMAIL` | Destination mailbox for submitted inquiries | `enquiry@improxgroup.com` |
| `CONTACT_FROM_EMAIL` | Verified sending address in Resend | `contact@improxtech.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for metadata, Open Graph, and sitemap | `https://improxtech.com` |

> If `RESEND_API_KEY` is omitted or delivery fails, the contact form fails honestly and provides an instant one-click `mailto:` fallback to `enquiry@improxgroup.com` with the user's prefilled details.

---

## Build & Quality Scripts

```bash
# Build production bundle (pre-renders static pages)
npm run build

# Run ESLint validation
npm run lint

# TypeScript verification
npx tsc --noEmit

# Run image optimization pipeline
node scripts/optimize-images.mjs

# Rebuild Tailwind CSS
node scripts/build-css.js
```

---

## Content Integrity & Compliance

This codebase strictly forbids fabricated testimonials, invented client logos, artificial statistics (e.g. `250+`, `100+ developers`, `99.999%`), and synthetic client names. 

Refer to [`CONTENT_TODO.md`](./CONTENT_TODO.md) for the exact requirements needed to verify and activate future case studies and partnership badges.
