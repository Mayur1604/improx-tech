'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cloud, Server, Database, Check } from 'lucide-react';

const CAPABILITY_GROUPS = [
  {
    icon: Cloud,
    title: 'Cloud Architecture & Infrastructure Reliability',
    description: 'Fault-tolerant cloud environments that scale horizontally without manual intervention.',
    focusBadge: 'AWS / Azure / GCP',
    image: '/images/services/cloud-infrastructure.webp',
    imageAlt: 'Cloud architecture and infrastructure automation workbench',
    details: [
      'Multi-region AWS, Azure, & GCP',
      'Kubernetes & Docker orchestration',
      'Terraform IaC deployments',
    ],
  },
  {
    icon: Server,
    title: 'Modern Web & Distributed Microservices',
    description: 'Decoupled application architectures built with clear boundary separation and high throughput.',
    focusBadge: 'TypeScript / Go / Next.js',
    image: '/images/services/enterprise-apps.webp',
    imageAlt: 'Modern web applications and distributed microservices dashboard',
    details: [
      'Type-safe Node, Go, & Python',
      'Reactive React & Next.js SSR',
      'Event streaming with Kafka & Redis',
    ],
  },
  {
    icon: Database,
    title: 'Data Systems & Analytical Pipelines',
    description: 'Structured data modeling and high-speed data pipelines that support reliable reporting.',
    focusBadge: 'PostgreSQL / Redis / Kafka',
    image: '/images/services/ai-intelligence.webp',
    imageAlt: 'Data extraction, real-time ingestion, and analytical pipelines',
    details: [
      'PostgreSQL & MySQL schema design',
      'In-memory caching with Redis',
      'Real-time CDC ingestion pipelines',
    ],
  },
];

export default function ArchitecturePodsSection() {
  const [activePod, setActivePod] = useState<number>(0);

  return (
    <section className="py-8 lg:py-10 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Compact Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] mb-1.5">
            Architecture &amp; Engineering Disciplines
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000033] leading-tight mb-1.5">
            Specialized engineering pods aligned with your technology roadmap.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Rather than generalist development, we allocate focused engineering pods with deep experience in cloud topology, distributed applications, and database reliability.
          </p>
        </div>

        {/* Viewport-Fitted Layout: Compact Cards + Matched Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Interactive Capability Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-2.5">
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
                  className={`group relative p-3 sm:p-3.5 rounded-[6px] border transition-all duration-150 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0033a0] ${
                    isActive
                      ? 'bg-white border-[#0033a0] shadow-xs ring-1 ring-[#0033a0]/20'
                      : 'bg-white/75 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Card Header: Icon + Title + Stack Tag */}
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-[4px] border flex items-center justify-center transition-colors shrink-0 ${
                          isActive
                            ? 'bg-[#000033] text-white border-[#000033]'
                            : 'bg-slate-50 border-slate-200 text-slate-700 group-hover:border-slate-300'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-bold truncate transition-colors ${
                          isActive ? 'text-[#000033]' : 'text-slate-900 group-hover:text-[#0033a0]'
                        }`}
                      >
                        {group.title}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-[3px] border transition-colors shrink-0 ${
                        isActive
                          ? 'bg-blue-50 text-[#0033a0] border-blue-200 font-semibold'
                          : 'bg-slate-50 text-slate-500 border-slate-200'
                      }`}
                    >
                      {group.focusBadge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-2 pl-9">
                    {group.description}
                  </p>

                  {/* Bullet Details (Compact Inline Row) */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pl-9 pt-2 border-t border-slate-100">
                    {group.details.map((detail) => (
                      <span key={detail} className="inline-flex items-center gap-1.5 shrink-0">
                        <Check
                          className={`w-3 h-3 ${
                            isActive ? 'text-[#0033a0]' : 'text-slate-400'
                          }`}
                        />
                        <span className={isActive ? 'text-slate-900 font-medium' : 'text-slate-600'}>
                          {detail}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0033a0] rounded-t-[6px]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Photograph + Minimal Handoff Bar */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full">
            
            {/* Clean Visual Container (Pure Photography with Smooth Crossfade) */}
            <div className="relative flex-1 min-h-[220px] sm:min-h-[240px] w-full rounded-[6px] overflow-hidden border border-slate-200 bg-slate-900 shadow-xs">
              {CAPABILITY_GROUPS.map((pod, idx) => {
                const isCurrent = activePod === idx;
                return (
                  <div
                    key={pod.title}
                    className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                      isCurrent ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <Image
                      src={pod.image}
                      alt={pod.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                );
              })}
            </div>

            {/* Compact Direct Communication Bar */}
            <div className="px-4 py-2.5 bg-white rounded-[6px] border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
              <span className="text-xs text-slate-600 truncate">
                <strong className="text-slate-900 font-semibold">Direct Collaboration:</strong> Daily standups with technical leads.
              </span>
              <Link
                href="/technology-services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0033a0] hover:text-[#00287a] shrink-0 transition-colors group/link"
              >
                <span>Services</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
