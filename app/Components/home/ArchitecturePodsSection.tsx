'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cloud, Server, Database } from 'lucide-react';

const CAPABILITY_GROUPS = [
  {
    icon: Cloud,
    title: 'Cloud Architecture & Infrastructure Reliability',
    description: 'We design fault-tolerant cloud environments that scale horizontally without manual intervention.',
    focusBadge: 'AWS / Azure / GCP',
    image: '/images/services/cloud-infrastructure.webp',
    imageAlt: 'Cloud architecture, Kubernetes orchestration, and infrastructure automation',
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
    image: '/images/services/enterprise-apps.webp',
    imageAlt: 'Modern web applications, distributed microservices, and reactive UI architecture',
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
    image: '/images/services/ai-intelligence.webp',
    imageAlt: 'High-throughput data extraction, real-time ingestion, and analytical pipelines',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive Pod Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5">
            {CAPABILITY_GROUPS.map((group, idx) => {
              const Icon = group.icon;
              const isActive = activePod === idx;

              return (
                <div
                  key={group.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePod(idx)}
                  onMouseEnter={() => setActivePod(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActivePod(idx);
                    }
                  }}
                  className={`group relative bg-white p-6 sm:p-7 rounded-[8px] border transition-all duration-300 cursor-pointer space-y-3.5 flex-1 flex flex-col justify-between overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0033a0] ${
                    isActive
                      ? 'border-[#0033a0] border-l-[5px] border-l-[#0033a0] shadow-md -translate-y-0.5'
                      : 'border-slate-200 border-l-[5px] border-l-transparent hover:border-slate-300 hover:border-l-[#0033a0]/40 hover:shadow-sm hover:-translate-y-0.5'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-[6px] border flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-[#0033a0] text-white border-[#0033a0] shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white group-hover:border-[#0033a0]'
                          }`}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                            isActive ? 'text-[#0033a0]' : 'text-slate-900 group-hover:text-[#0033a0]'
                          }`}
                        >
                          {group.title}
                        </h3>
                      </div>

                      <span
                        className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-[4px] border transition-colors shrink-0 ${
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
                  </div>

                  <ul className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
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

          {/* Right Column: Dynamic Image Box + Direct Communication Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 h-full">
            
            {/* Clean Visual Viewport with Dynamic Image Crossfade (No Eyebrows) */}
            <div className="group relative flex-1 min-h-[320px] lg:min-h-[380px] w-full rounded-[8px] overflow-hidden border border-slate-200 hover:border-[#0033a0]/70 shadow-xs hover:shadow-xl transition-all duration-500 bg-slate-950">
              {CAPABILITY_GROUPS.map((pod, idx) => {
                const isCurrent = activePod === idx;
                return (
                  <div
                    key={pod.title}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isCurrent
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  >
                    <Image
                      src={pod.image}
                      alt={pod.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>

            {/* Bottom Card with Hover Lift & Link Slide */}
            <div className="group p-6 sm:p-7 bg-white rounded-[8px] border border-slate-200 hover:border-[#0033a0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-3">
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
