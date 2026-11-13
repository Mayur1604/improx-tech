import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { company } from '@/app/data/company';

export default function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-b from-[#000028] to-[#000022] text-white py-20 lg:py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        
        <p className="text-xs uppercase tracking-wider font-semibold text-[#00a3e0] hover:text-white transition-colors duration-200 cursor-default inline-block">
          Get in Touch
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Have a Technology Challenge? Let&apos;s Talk.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us about your requirements and explore how Improx Tech can help build your next software solution.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-8 py-4 rounded-[6px] text-sm transition-all shadow-lg inline-flex items-center gap-2 group ring-2 ring-[#0033a0]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0]"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#capabilities"
            className="bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-4 rounded-[6px] border border-white/20 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Direct Phone & Email Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
          {company.formattedPhone && (
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00a3e0]" />
              <span>{company.formattedPhone}</span>
            </a>
          )}
          {company.email && (
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#00a3e0]" />
              <span>{company.email}</span>
            </a>
          )}
          <span className="text-slate-400">
            Delaware, USA &bull; Pune, India
          </span>
        </div>

      </div>
    </section>
  );
}
