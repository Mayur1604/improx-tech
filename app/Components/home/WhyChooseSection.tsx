import { CheckCircle2, ShieldCheck, Lock, Code2, Users, Wrench } from 'lucide-react';

const STRENGTHS = [
  {
    number: '01',
    category: 'DOMAIN LOGIC',
    title: 'Business-Focused Engineering',
    description: 'We prioritize clean domain logic that directly solves operational bottlenecks rather than over-engineering unnecessary complexity.',
    standard: 'Domain-Driven Design (DDD)',
    icon: Code2,
  },
  {
    number: '02',
    category: 'SYSTEM DESIGN',
    title: 'Scalable Software Architecture',
    description: 'Modular codebases with clear dependency injection and type contracts designed to evolve gracefully alongside your organization.',
    standard: 'Decoupled Systems & Clean APIs',
    icon: CheckCircle2,
  },
  {
    number: '03',
    category: 'CODE INTEGRITY',
    title: 'Quality-Focused Development',
    description: 'Automated unit test coverage, static linting, end-to-end integration checks, and mandatory peer code reviews before merge.',
    standard: '85%+ Automated Branch Coverage',
    icon: ShieldCheck,
  },
  {
    number: '04',
    category: 'COMPLIANCE & SEC',
    title: 'Secure Development Lifecycle',
    description: 'Standard TLS encryption in transit and at rest, principle of least privilege, automated dependency auditing, and encrypted secret management.',
    standard: 'SOC 2 & ISO 27001 Aligned',
    icon: Lock,
  },
  {
    number: '05',
    category: 'TALENT MODEL',
    title: 'Dedicated Engineering Pods',
    description: 'Engineers who remain with your project context, building deep institutional knowledge rather than rotating constantly across accounts.',
    standard: 'Zero Context-Switch Churn',
    icon: Users,
  },
  {
    number: '06',
    category: 'SITE RELIABILITY',
    title: 'Long-Term Technical Support',
    description: 'Post-launch observability, database tuning, infrastructure patching, and continuous iterative enhancements.',
    standard: 'Production SRE & Runbooks',
    icon: Wrench,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hallmark Head-Split Header */}
        <div className="mb-14 pb-8 border-b border-slate-200/90">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#0033a0] tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0033a0]" />
            <span>ENGINEERING PRINCIPLES {'//'} 06 COMMITMENTS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                Engineering discipline built on transparency and craft.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We focus on software quality, honest scoping, and long-term maintainability so that engineering leaders can build with confidence without vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* Hallmark Horizontal Architectural Record (Strict Zero-Card Structure) */}
        <ol className="divide-y divide-slate-200 border-t-2 border-slate-900 border-b border-slate-200 list-none p-0 m-0">
          {STRENGTHS.map((item) => (
            <li
              key={item.title}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline group hover:bg-slate-50/60 transition-colors duration-200 px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              {/* 1. Large Monospace Index */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 group-hover:text-[#0033a0] transition-colors duration-200 leading-none">
                  {item.number}
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00a3e0] lg:hidden">
                  {item.category}
                </span>
              </div>

              {/* 2. Strength Title & Category Kicker */}
              <div className="lg:col-span-4 space-y-1.5">
                <span className="hidden lg:block text-[10px] font-mono font-semibold uppercase tracking-widest text-[#00a3e0]">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#0033a0] transition-colors duration-200">
                  {item.title}
                </h3>
              </div>

              {/* 3. Deep Architectural Narrative & Verified Standard */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
                  <span className="uppercase text-[11px] font-medium text-slate-400">Standard:</span>
                  <span className="font-semibold text-slate-800 group-hover:text-[#0033a0] transition-colors">
                    {item.standard}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
