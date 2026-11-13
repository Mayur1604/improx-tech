import { ShieldCheck, GitPullRequest, FileCheck, MessageSquare } from 'lucide-react';

const COMMITMENTS = [
  {
    icon: FileCheck,
    title: '100% Source Code & IP Ownership',
    description: 'Every commit, schema definition, and cloud deployment template is assigned contractually to your company from day one under Delaware law.',
  },
  {
    icon: GitPullRequest,
    title: 'Structured Peer Reviews & CI Automation',
    description: 'All code enters production through audited pull requests with automated test coverage, security dependency scans, and clean linting checks.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Technical Access',
    description: 'Collaborate directly with the engineers writing your code through sprint planning, shared Slack/Teams channels, and weekly working demos.',
  },
  {
    icon: ShieldCheck,
    title: 'No Vendor Lock-In',
    description: 'We build with open, modern standards (TypeScript, Next.js, Go, Docker, standard SQL) so any competent engineer can maintain the system.',
  },
];

export default function EngineeringStandardsSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Quality &amp; Standards
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Our contractual and engineering commitments.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We hold ourselves to rigorous engineering standards designed to protect your intellectual property, system reliability, and long-term codebase health.
          </p>
        </div>

        {/* 4 Core Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMITMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-[6px] p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:border-[#0033a0]/50 hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
