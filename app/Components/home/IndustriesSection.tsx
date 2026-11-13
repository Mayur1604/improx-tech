import { HeartPulse, Landmark, Factory, Cpu } from 'lucide-react';

const INDUSTRIES = [
  {
    name: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    focus: 'EHR integration, FHIR gateways, HIPAA security compliance, and clinical patient workflows.',
    capabilities: ['HIPAA-conscious data pipelines', 'Interoperable FHIR endpoints', 'Encrypted patient portal backends'],
  },
  {
    name: 'Financial Services & FinTech',
    icon: Landmark,
    focus: 'Low-latency trading gateways, payment orchestrations, reconciliation engines, and audit logging.',
    capabilities: ['Transaction processing gateways', 'Automated reconciliation workflows', 'Immutable regulatory audit trails'],
  },
  {
    name: 'Manufacturing & Supply Chain',
    icon: Factory,
    focus: 'Inventory optimization, IoT device data ingestion, ERP integrations, and warehouse telemetry.',
    capabilities: ['Real-time sensor telemetry', 'ERP & warehouse system connectors', 'Automated dispatch tracking'],
  },
  {
    name: 'Enterprise Technology & SaaS',
    icon: Cpu,
    focus: 'Multi-tenant SaaS architectures, billing integration, high-concurrency APIs, and microservices.',
    capabilities: ['Multi-tenant schema design', 'Subscription & billing gateways', 'High-throughput microservices'],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Domain Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Industries where we engineer software solutions.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every sector brings unique operational constraints, regulatory demands, and integration challenges. We bring deep technical familiarity to our core client industries.
          </p>
        </div>

        {/* Clean Editorial List / Row Layout (NOT a generic card grid) */}
        <div className="border-t border-slate-200 divide-y divide-slate-200">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="py-8 px-4 -mx-4 rounded-[6px] grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-slate-50 transition-colors duration-150 group"
              >
                <div className="md:col-span-4 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors duration-200 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                    {ind.name}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    {ind.focus}
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                  {ind.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs px-2.5 py-1 rounded-[6px] bg-slate-100 text-slate-700 font-medium group-hover:bg-white group-hover:border group-hover:border-slate-200 transition-all"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
