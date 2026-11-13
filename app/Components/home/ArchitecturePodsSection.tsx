'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cloud, Server, Database, CheckCircle2 } from 'lucide-react';

const CAPABILITY_GROUPS = [
  {
    icon: Cloud,
    title: 'Cloud Architecture & Infrastructure Reliability',
    description: 'We design fault-tolerant cloud environments that scale horizontally without manual intervention.',
    focusBadge: 'AWS / Azure / GCP',
    details: [
      'Multi-region AWS, Azure, and Google Cloud setups',
      'Kubernetes orchestration and containerization with Docker',
      'Infrastructure as Code (Terraform) for reproducible deployments',
    ],
  },
  {
    icon: Server,
    title: 'Modern Web & Distributed Microservices',
    description: 'Decoupled application architectures built with clear boundary separation and high throughput.',
    focusBadge: 'TypeScript / Go / Next.js',
    details: [
      'Type-safe Node.js, TypeScript, Go, and Python services',
      'Reactive user interfaces built with React and Next.js',
      'Event-driven communication with Kafka and Redis',
    ],
  },
  {
    icon: Database,
    title: 'Data Systems & Analytical Pipelines',
    description: 'Structured data modeling and high-speed data pipelines that support reliable reporting.',
    focusBadge: 'PostgreSQL / Redis / Kafka',
    details: [
      'Transactional PostgreSQL and MySQL schema design',
      'In-memory caching and session state management with Redis',
      'Data extraction, transformation, and ingestion pipelines',
    ],
  },
];

export default function ArchitecturePodsSection() {
  const [activePod, setActivePod] = useState<number>(0);

  return (
    <section className="py-20 lg:py-24 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Architecture &amp; Engineering Disciplines
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Specialized engineering pods aligned with your technology roadmap.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Rather than generalist development, we allocate focused engineering pods with deep experience in cloud topology, distributed applications, and database reliability.
          </p>
        </div>

        {/* Editorial Layout: Interactive Capability Groups + Dynamic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Pod Cards */}
          <div className="lg:col-span-7 space-y-5">
            {CAPABILITY_GROUPS.map((group, idx) => {
              const Icon = group.icon;
              const isActive = activePod === idx;

              return (
                <div
                  key={group.title}
                  onClick={() => setActivePod(idx)}
                  onMouseEnter={() => setActivePod(idx)}
                  className={`group bg-white p-6 sm:p-7 rounded-[6px] border transition-all duration-300 cursor-pointer space-y-3 relative ${
                    isActive
                      ? 'border-[#0033a0] shadow-md ring-1 ring-[#0033a0]/20 -translate-y-0.5'
                      : 'border-slate-200 hover:border-[#0033a0]/60 hover:shadow-sm hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-[6px] border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-[#0033a0] text-white border-[#0033a0]'
                            : 'bg-slate-50 border-slate-200 text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white group-hover:border-[#0033a0]'
                        }`}
                      >
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? 'text-[#0033a0]' : 'text-slate-900 group-hover:text-[#0033a0]'
                        }`}
                      >
                        {group.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-[4px] border transition-colors shrink-0 ${
                        isActive
                          ? 'bg-blue-50 text-[#0033a0] border-blue-200'
                          : 'bg-slate-50 text-slate-500 border-slate-200 group-hover:border-blue-200 group-hover:text-[#0033a0]'
                      }`}
                    >
                      {group.focusBadge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {group.description}
                  </p>

                  <ul className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    {group.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isActive ? 'bg-[#0033a0]' : 'bg-[#00a3e0] group-hover:bg-[#0033a0]'
                          }`}
                        />
                        <span className={isActive ? 'text-slate-900 font-medium' : 'text-slate-600'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Image Box + Direct Communication Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Clean Visual Box with Hover Zoom & Atmosphere (AI text overlay removed) */}
            <div className="group relative h-[320px] sm:h-[380px] w-full rounded-[6px] overflow-hidden border border-slate-200 hover:border-[#0033a0] shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer">
              <Image
                src="/images/services/cloud-infrastructure.webp"
                alt="Cloud architecture, network topology, and server pods"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent group-hover:opacity-80 transition-opacity" />
              
              {/* Interactive Indicator Pill */}
              <div className="absolute top-4 right-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-black/60 backdrop-blur-xs text-[11px] font-mono text-[#00a3e0] border border-white/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00a3e0]" />
                  <span>Pod {activePod + 1} Selected</span>
                </div>
              </div>
            </div>

            {/* Bottom Card with Hover Lift & Link Slide */}
            <div className="group p-6 bg-white rounded-[6px] border border-slate-200 hover:border-[#0033a0] hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                Direct Engineer-to-Engineer Communication
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our pods collaborate directly with your technical leads through daily standups, pull request reviews, and shared Slack channels to eliminate communication latency.
              </p>
              <Link
                href="/technology-services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors group/link"
              >
                <span>Learn about our cloud &amp; technology services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
