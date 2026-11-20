import Link from 'next/link';
import { ShieldCheck, GitPullRequest, FileCheck, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const COMMITMENTS = [
  {
    icon: FileCheck,
    tag: 'Contractual Standard',
    statusBadge: 'Delaware Law Governance',
    title: '100% Client Source Code & IP Ownership',
    description: 'Every commit, schema definition, and cloud deployment template is assigned contractually to your company from day one under Delaware law.',
    deliverables: [
      'Complete IP assignment executed on sprint commits',
      'All code written directly in your corporate Git repositories',
      'No proprietary framework lock-in or licensing fees',
    ],
  },
  {
    icon: GitPullRequest,
    tag: 'CI/CD Automation Policy',
    statusBadge: 'Mandatory Gatekeeper',
    title: 'Audited Peer Reviews & Static Linting CI',
    description: 'All code enters production through audited pull requests with automated test coverage, security dependency scans, and clean linting checks.',
    deliverables: [
      'Automated unit and integration test passes in CI',
      'SAST/DAST vulnerability scans prior to main merge',
      'Peer review signed off by senior pod leads',
    ],
  },
  {
    icon: MessageSquare,
    tag: 'Collaboration Cadence',
    statusBadge: 'Direct Pod Access',
    title: 'Direct Technical Access Without Account Layers',
    description: 'Collaborate directly with the engineers writing your code through sprint planning, shared Slack/Teams channels, and weekly working demos.',
    deliverables: [
      'Dedicated engineering pods that stay on your roadmap',
      'Two-week sprint cadences with runnable software demos',
      'Direct communication without project coordinator filtering',
    ],
  },
  {
    icon: ShieldCheck,
    tag: 'Architecture Standard',
    statusBadge: 'Open Standards',
    title: 'Open-Source & Cloud-Native Reliability',
    description: 'We build with open, modern standards (TypeScript, Next.js, Go, Docker, standard SQL) so any competent engineer can maintain and extend the system.',
    deliverables: [
      'Self-contained, containerized Docker & K8s workloads',
      'Modular TypeScript, Go, and PostgreSQL architectures',
      'Comprehensive OpenAPI documentation and runbooks',
    ],
  },
];

export default function EngineeringStandardsSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Tech Mahindra What's New styling) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors cursor-default">
                Engineering Governance &amp; Standards
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Our contractual and engineering commitments.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We hold ourselves to rigorous engineering standards designed to protect your intellectual property, system reliability, and long-term codebase health.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
            >
              <span>Read engineering philosophy</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Core Commitments as Tech Mahindra "What's New" Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMITMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white border border-slate-200 rounded-[8px] p-6 sm:p-8 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0033a0]/50 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
              >
                {/* Tech Mahindra Top Accent Highlight Bar on Hover */}
                <div 
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0033a0] to-[#00a3e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="space-y-4">
                  {/* Category & Status Metadata Row */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-[4px] bg-blue-50 text-[#0033a0] border border-blue-100">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {item.statusBadge}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-start gap-3.5 pt-1">
                    <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    {item.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-semibold text-[#0033a0]">
                  <Link href="/contact" className="hover:underline">
                    <span>Review contractual terms</span>
                  </Link>
                  <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#0033a0] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
