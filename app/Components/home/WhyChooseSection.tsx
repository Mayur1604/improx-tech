import { CheckCircle2, ShieldCheck, Lock, Code2, Users, Wrench } from 'lucide-react';

const STRENGTHS = [
  {
    icon: Code2,
    title: 'Business-Focused Engineering',
    description: 'We prioritize clean domain logic that directly solves operational bottlenecks rather than over-engineering unnecessary complexity.',
  },
  {
    icon: CheckCircle2,
    title: 'Scalable Software Architecture',
    description: 'Modular codebases with clear dependency injection and type contracts designed to evolve gracefully alongside your organization.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Focused Development',
    description: 'Automated unit test coverage, static linting, end-to-end integration checks, and mandatory peer code reviews before merge.',
  },
  {
    icon: Lock,
    title: 'Secure Development Lifecycle',
    description: 'Standard TLS encryption in transit and at rest, principle of least privilege, automated dependency auditing, and encrypted secret management.',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Pods',
    description: 'Engineers who remain with your project context, building deep institutional knowledge rather than rotating constantly across accounts.',
  },
  {
    icon: Wrench,
    title: 'Long-Term Technical Support',
    description: 'Post-launch observability, database tuning, infrastructure patching, and continuous iterative enhancements.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Why Choose Improx Tech
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Engineering discipline built on transparency and craft.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We focus on software quality, honest scoping, and long-term maintainability so that our clients can build with confidence.
          </p>
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRENGTHS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-[6px] p-7 shadow-xs hover:-translate-y-1 hover:border-[#0033a0]/50 hover:shadow-md transition-all duration-200 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
