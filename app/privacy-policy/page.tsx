import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Improx Tech',
  description: 'Privacy policy and data governance practices of Improx Tech.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <section className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0073e6] font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p className="text-xs text-gray-500 mt-2">Last Updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-6 space-y-8 text-sm leading-relaxed text-gray-700">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Overview</h2>
          <p>
            Improx Tech (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an Improx Group entity, values your privacy and is dedicated to protecting client confidential data, personal information, and proprietary software intellectual property.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information Collection</h2>
          <p>
            We collect information provided directly through project inquiries, discovery sessions, email correspondence, and commercial contracts. This may include names, business email addresses, telephone numbers, and technical requirements.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Enterprise Confidentiality &amp; IP Protection</h2>
          <p>
            All client proprietary codebase architectures, database schemas, credentials, and strategic software concepts shared under Non-Disclosure Agreements (NDAs) are protected under enterprise-grade cryptographic controls and access segregation.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Contact Channels</h2>
          <p>
            For privacy inquiries or data governance questions, please email <a href="mailto:enquiry@improxgroup.com" className="text-[#0073e6] underline">enquiry@improxgroup.com</a> or mail us at:
            <br />
            <strong>Improx Tech</strong>, 16192 Coastal Highway, Lewes, DE 19958, United States.
          </p>
        </div>
      </section>
    </div>
  );
}
