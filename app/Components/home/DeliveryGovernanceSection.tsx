import { ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { company } from '@/app/data/company';

export default function DeliveryGovernanceSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Model Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
              Delivery Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Global Standards. Engineering Delivered from Pune.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We combine the contractual security and legal protections of a United States corporate entity with the disciplined technical velocity of our dedicated engineering delivery center in Pune, India.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0 mt-0.5" />
                <div>
                  <strong>United States Contract Governance:</strong> Every Master Services Agreement (MSA) and Statement of Work (SOW) is executed under US legal jurisdiction in Lewes, Delaware.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0 mt-0.5" />
                <div>
                  <strong>Dedicated Pune Engineering Center:</strong> In-house full-time engineers, architects, and QA professionals dedicated to your product roadmap.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0 mt-0.5" />
                <div>
                  <strong>Timezone Alignment:</strong> Direct daily overlap with US and European business hours for agile planning, sprint demos, and real-time coordination.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hub Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="p-6 sm:p-7 bg-white rounded-[6px] border border-slate-200 shadow-xs hover:-translate-y-1 hover:border-[#0033a0]/60 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
                  <MapPin className="w-4 h-4" />
                  <span>United States Corporate Office</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Legal &amp; Governance</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Delaware Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <a
                  href={company.addresses.us.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0033a0] hover:underline transition-colors"
                >
                  {company.addresses.us.fullAddress}
                </a>
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex flex-wrap gap-4">
                <span>Direct Phone: <strong className="text-slate-800">{company.formattedPhone}</strong></span>
                <span>Jurisdiction: <strong className="text-slate-800">Delaware, USA</strong></span>
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-white rounded-[6px] border border-slate-200 shadow-xs hover:-translate-y-1 hover:border-[#0033a0]/60 hover:shadow-md transition-all duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>India Delivery Center</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Engineering &amp; R&amp;D</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Pune Technology Center
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <a
                  href={company.addresses.india.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0033a0] hover:underline transition-colors"
                >
                  {company.addresses.india.fullAddress}
                </a>
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex flex-wrap gap-4">
                <span>Email: <strong className="text-slate-800">{company.email}</strong></span>
                <span>Delivery: <strong className="text-slate-800">Sprint Cadences &amp; CI/CD</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
