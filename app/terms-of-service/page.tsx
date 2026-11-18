import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Improx Tech',
  description: 'Terms of service and commercial agreement standards for Improx Tech.',
  alternates: {
    canonical: 'https://improxtech.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <section className="bg-slate-50 border-b border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0073e6] font-medium">Terms of Service</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Terms of Service</h1>
          <p className="text-xs text-gray-500 mt-2">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-6 space-y-8 text-sm leading-relaxed text-gray-700">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Agreement to Terms</h2>
          <p>
            By accessing or engaging Improx Tech for professional engineering, cloud architecture, or consulting services, you agree to be bound by these Terms of Service and any associated Master Services Agreements (MSAs) or Statements of Work (SOWs).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Scope of Services</h2>
          <p>
            Improx Tech provides custom software development, product engineering, cloud infrastructure migration, and AI intelligence services as described in mutually executed project scopes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Intellectual Property Rights</h2>
          <p>
            Upon settlement of milestone invoices, all custom deliverables, source code repositories, and documentation created specifically for the client transfer in full to the client without recurring licensing fees.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
          </p>
        </div>
      </section>
    </div>
  );
}
