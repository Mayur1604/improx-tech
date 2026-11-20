'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

interface CapabilityCard {
  name: string; 
  href: string;
  summary: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  filterTag: 'web-saas' | 'cloud-devops' | 'api-integration';
}

const CAPABILITIES: CapabilityCard[] = [
  {
    name: 'Custom Software Development',
    href: '/application-services/custom-software-development',
    summary: 'Core business platforms and custom workflow engines engineered for specific operational requirements.',
    image: '/images/services/custom-software.webp',
    imageAlt: 'Custom software development code review and architecture workbench',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Node.js'],
    filterTag: 'web-saas',
  },
  {
    name: 'Enterprise Application Development',
    href: '/application-services/enterprise-applications',
    summary: 'Mission-critical operational platforms connecting enterprise ERPs, legacy data lakes, and transactional databases.',
    image: '/images/services/enterprise-apps.webp',
    imageAlt: 'Enterprise application architecture and distributed microservices dashboard',
    technologies: ['Go', 'TypeScript', 'Docker', 'Redis'],
    filterTag: 'web-saas',
  },
  {
    name: 'SaaS Platform Development',
    href: '/application-services/saas-development',
    summary: 'Scalable multi-tenant cloud products engineered with strict schema isolation, metering, and tenant provisioning.',
    image: '/images/services/saas-architecture.webp',
    imageAlt: 'SaaS multi-tenant architecture management and analytics cockpit',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe API', 'AWS'],
    filterTag: 'web-saas',
  },
  {
    name: 'Cloud Application & DevSecOps',
    href: '/application-services/cloud-applications',
    summary: 'Containerized microservices and automated infrastructure deployed across AWS, Azure, and Google Cloud.',
    image: '/images/services/cloud-infrastructure.webp',
    imageAlt: 'Cloud infrastructure deployment and Kubernetes telemetry monitor',
    technologies: ['Kubernetes', 'Terraform', 'AWS', 'Docker'],
    filterTag: 'cloud-devops',
  },
  {
    name: 'High-Throughput API Development',
    href: '/application-services/api-development',
    summary: 'Low-latency REST and GraphQL APIs with automated contract testing, rate limiting, and OpenAPI specifications.',
    image: '/images/projects/fintech-trading.webp',
    imageAlt: 'High-throughput API development telemetry and latency cockpit',
    technologies: ['Node.js', 'GraphQL', 'Kafka', 'Redis'],
    filterTag: 'api-integration',
  },
  {
    name: 'AI & Data Integration Systems',
    href: '/ai-bi',
    summary: 'Deterministic SLM pipelines, retrieval-augmented generation (RAG), and unified data lake orchestration.',
    image: '/images/services/ai-intelligence.webp',
    imageAlt: 'AI intelligence pipeline and semantic data processing interface',
    technologies: ['Python', 'Vector DB', 'Kafka', 'PostgreSQL'],
    filterTag: 'api-integration',
  },
];

const ALL_SERVICES_LIST = [
  { name: 'Custom Software Development', href: '/application-services/custom-software-development' },
  { name: 'Enterprise Applications', href: '/application-services/enterprise-applications' },
  { name: 'SaaS Development', href: '/application-services/saas-development' },
  { name: 'Web Applications', href: '/application-services/web-applications' },
  { name: 'Mobile App Development', href: '/application-services/mobile-app-development' },
  { name: 'Cloud Applications', href: '/application-services/cloud-applications' },
  { name: 'API Development', href: '/application-services/api-development' },
  { name: 'System Integration', href: '/application-services/system-integration' },
  { name: 'Legacy Modernization', href: '/application-services/legacy-modernization' },
  { name: 'Maintenance & Support', href: '/application-services/maintenance-support' },
];

const FILTER_TABS = [
  { label: 'All Capabilities', value: 'all' },
  { label: 'Web & SaaS Platforms', value: 'web-saas' },
  { label: 'Cloud & Infrastructure', value: 'cloud-devops' },
  { label: 'APIs & Systems Integration', value: 'api-integration' },
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCapabilities = activeTab === 'all'
    ? CAPABILITIES
    : CAPABILITIES.filter((cap) => cap.filterTag === activeTab);

  return (
    <section id="capabilities" className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Tech Mahindra Latest Thinking editorial structure) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Comprehensive software engineering across the full product lifecycle.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We design, engineer, and maintain scalable software. Our engineers combine clean architectural design with disciplined agile delivery to build systems that scale at speed.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/application-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
            >
              <span>View all services directory</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Filter Navigation Tabs (Tech Mahindra clean horizontal filter pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-100 no-scrollbar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.value
                  ? 'bg-[#0033a0] text-white shadow-sm'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column HCLTech-Style Resources Card Grid with Slide-Up White Hover Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCapabilities.map((capability) => (
            <Link
              key={capability.name}
              href={capability.href}
              className="group relative h-[460px] sm:h-[480px] bg-slate-900 rounded-none border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-end"
            >
              {/* 1. Full-Bleed Background Visual with subtle zoom on hover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={capability.image}
                  alt={capability.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Atmospheric Dark Gradient for Default State Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-500" />
              </div>

              {/* 2. Default Visible Overlay (Visible on image, fades out smoothly when white panel slides in) */}
              <div className="relative z-10 p-6 sm:p-7 flex items-end justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                <div className="space-y-2 pr-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                    {capability.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* 3. The Sliding White Panel (Clean sharp edges, no curvyness) */}
              <div className="absolute inset-x-0 bottom-0 z-20 bg-white p-6 sm:p-7 rounded-none shadow-2xl transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0 min-h-[78%] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#0033a0] transition-colors">
                    {capability.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {capability.summary}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {capability.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-none bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0033a0]">
                  <span>Explore Capability</span>
                  <div className="w-8 h-8 rounded-full bg-[#0033a0] text-white flex items-center justify-center group-hover:bg-[#00287a] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Directory Strip: Full Catalog Quick Links */}
        <div className="p-6 rounded-[8px] bg-slate-50 border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0033a0]" />
              <span>Full Services Matrix</span>
            </span>
            <span className="text-xs text-slate-500">10 production practices delivered by dedicated pods</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
            {ALL_SERVICES_LIST.map((srv) => (
              <Link
                key={srv.name}
                href={srv.href}
                className="group/item flex items-center justify-between p-2.5 rounded-[6px] bg-white border border-slate-200 hover:border-[#0033a0] hover:shadow-xs transition-all text-xs font-medium text-slate-700 hover:text-[#0033a0]"
              >
                <span className="line-clamp-1">{srv.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#0033a0] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
