import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { company } from '@/app/data/company';

export default function ContactCtaSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#000033] border border-slate-800 rounded-[6px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-[#00a3e0] font-semibold mb-3">
              Direct Engineering Consultation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Have an upcoming software or cloud initiative?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Speak directly with our technical team to discuss architecture feasibility, scope, timeline, and staffing options.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs sm:text-sm text-slate-300">
              {company.email && (
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00a3e0]" />
                  <span>{company.email}</span>
                </a>
              )}
              {company.phone && (
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00a3e0]" />
                  <span>{company.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-8 py-4 rounded-[6px] text-sm transition-all shadow-lg inline-flex items-center gap-2 group ring-2 ring-[#0033a0]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0]"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
