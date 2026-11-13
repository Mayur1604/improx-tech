import { CheckCircle2, Search, Users, GitBranch, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Technical Discovery & Scoping',
    icon: Search,
    description: 'We audit your technical requirements, existing infrastructure, security requirements, and data models to produce a realistic architecture plan and sprint roadmap.'
  },
  {
    number: '02',
    title: 'Dedicated Engineering Pod',
    icon: Users,
    description: 'We assign dedicated front-end, back-end, and cloud engineers aligned with your technology stack and operating timezone for seamless collaboration.'
  },
  {
    number: '03',
    title: 'Iterative Sprint Delivery',
    icon: GitBranch,
    description: 'Two-week sprint cadences with automated CI/CD pipelines, code reviews, and regular demo checkpoints so you have full visibility into working software.'
  },
  {
    number: '04',
    title: 'Complete Code & IP Handover',
    icon: ShieldCheck,
    description: 'All repository commits, infrastructure scripts, and architecture documentation belong 100% to your organization from day one.'
  }
];

export default function HowWeWorkSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-wider text-[#0033a0] font-semibold mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              How an engagement works.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              A structured, transparent engineering process designed to eliminate guesswork, control scope, and deliver production-ready software.
            </p>
            <div className="p-5 bg-white border border-slate-200 rounded-[6px] text-xs text-slate-700 space-y-2">
              <div className="font-semibold text-slate-900 text-sm mb-2">
                Engineering Commitments:
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0] shrink-0" />
                <span>Direct engineer-to-engineer communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0] shrink-0" />
                <span>Pull request reviews and automated testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0] shrink-0" />
                <span>Full source code and IP ownership</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white border border-slate-200 rounded-[6px] p-6 sm:p-8 card-hover flex flex-col sm:flex-row items-start gap-6"
                >
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-2xl font-bold text-slate-300">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
