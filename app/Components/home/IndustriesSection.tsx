'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartPulse, Landmark, Factory, Cpu, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const INDUSTRIES = [
  {
    id: '01',
    tabName: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    kicker: 'HEALTHCARE & CLINICAL SYSTEMS PRACTICE',
    title: 'Architecting HIPAA-compliant EHR gateways & real-time clinical data platforms.',
    description:
      'We engineer secure health-tech architectures that eliminate data fragmentation between legacy EHR systems, laboratory information managers, and patient care applications.',
    image: '/images/projects/healthcare-clinical-systems.jpg',
    imageAlt: 'Healthcare clinical systems and real-time medical data workstation',
    href: '/application-services/custom-software-development',
    interventions: [
      {
        title: 'FHIR & HL7 Gateways',
        desc: 'Interoperable RESTful endpoints connecting Epic, Cerner, and diagnostic tools.',
      },
      {
        title: 'HIPAA & HITECH Compliance',
        desc: 'Field-level AES-256 encryption, cryptographic audit logging, and BAA governance.',
      },
      {
        title: 'Clinical Data Pipelines',
        desc: 'Sub-second streaming pipelines for diagnostic telemetry and real-time patient charts.',
      },
    ],
    metrics: [
      { label: 'Regulatory', value: 'HIPAA & HITECH' },
      { label: 'Standard', value: 'HL7 / FHIR R4' },
      { label: 'Availability', value: '99.99% Fault-Tolerant' },
    ],
  },
  {
    id: '02',
    tabName: 'Banking & Financial Services',
    icon: Landmark,
    kicker: 'FINANCIAL SERVICES & FINTECH PRACTICE',
    title: 'High-throughput trading engines, automated reconciliation & payment systems.',
    description:
      'From sub-millisecond transaction gateways to multi-currency reconciliation ledgers, we build resilient financial infrastructure designed for high-concurrency enterprise scale.',
    image: '/images/projects/banking-financial-services.jpg',
    imageAlt: 'Financial trading cockpit and real-time market data dashboard',
    href: '/application-services/enterprise-applications',
    interventions: [
      {
        title: 'Transaction Gateways',
        desc: 'High-frequency order matching engines with deterministic ACID transaction integrity.',
      },
      {
        title: 'Multi-Ledger Reconciliation',
        desc: 'Automated settlement pipelines connecting core banking, Stripe, ACH, and SWIFT.',
      },
      {
        title: 'Immutable Audit Trails',
        desc: 'Cryptographically hashed event streams ensuring compliance with SEC, FINRA, and SOX.',
      },
    ],
    metrics: [
      { label: 'Compliance', value: 'PCI-DSS & SOC 2' },
      { label: 'Throughput', value: 'High-Scale Concurrency' },
      { label: 'Latency', value: 'Microsecond P99' },
    ],
  },
  {
    id: '03',
    tabName: 'Manufacturing & Supply Chain',
    icon: Factory,
    kicker: 'CONNECTED INDUSTRY & SUPPLY CHAIN PRACTICE',
    title: 'Smart factory IoT telemetry, inventory optimization & ERP integration hubs.',
    description:
      'We connect physical shop-floor machinery, automated warehouse sensors, and global enterprise ERPs into unified real-time operational command centers.',
    image: '/images/projects/manufacturing-supply-chain.jpg',
    imageAlt: 'Smart factory sensor telemetry and supply chain dispatch cockpit',
    href: '/technology-services/data-engineering',
    interventions: [
      {
        title: 'IoT Sensor Telemetry',
        desc: 'High-velocity MQTT and OPC-UA event ingestion handling thousands of device pings per second.',
      },
      {
        title: 'ERP & Warehouse Connectors',
        desc: 'Real-time synchronization between SAP, Oracle NetSuite, and warehouse robotic systems.',
      },
      {
        title: 'Predictive Dispatch Sync',
        desc: 'Automated inventory rebalancing and logistics dispatch tracking with zero data loss.',
      },
    ],
    metrics: [
      { label: 'Protocols', value: 'MQTT & OPC-UA' },
      { label: 'Integrations', value: 'SAP, Oracle & Custom' },
      { label: 'Ingestion', value: 'Continuous Streaming' },
    ],
  },
  {
    id: '04',
    tabName: 'Enterprise Technology & SaaS',
    icon: Cpu,
    kicker: 'CLOUD-NATIVE & SAAS ENGINEERING PRACTICE',
    title: 'Multi-tenant SaaS architectures, metered billing & distributed microservices.',
    description:
      'We partner with tech enterprises and venture-backed SaaS platforms to architect multi-tenant data isolation, self-serve tenant provisioning, and global edge delivery.',
    image: '/images/projects/enterprise-technology-saas.jpg',
    imageAlt: 'Multi-tenant cloud platform architecture and subscription analytics console',
    href: '/application-services/saas-development',
    interventions: [
      {
        title: 'Tenant Isolation Architecture',
        desc: 'Pooled or schema-per-tenant isolation with PostgreSQL Row-Level Security (RLS).',
      },
      {
        title: 'Metered Subscription Billing',
        desc: 'Turnkey integration with Stripe, Chargebee, and Paddle supporting tier upgrades and usage meters.',
      },
      {
        title: 'Distributed Microservices',
        desc: 'Containerized Kubernetes microservices orchestrated for automated horizontal scaling.',
      },
    ],
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant Isolated' },
      { label: 'Security', value: 'SOC 2 & GDPR' },
      { label: 'Scalability', value: 'Horizontal Kubernetes' },
    ],
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeIndustry = INDUSTRIES[activeTab];

  return (
    <section className="py-10 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Enterprise Section Header (TCS / Wipro Style) */}
        <div className="mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
              Domain Experience &amp; Industry Practices
            </p>
            <span className="text-[11px] font-mono text-slate-500">
              SECTOR {activeIndustry.id} OF 04
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#000033] leading-tight">
                Industries where we engineer mission-critical software solutions.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineering domain-specific platforms with strict regulatory compliance, low latency, and zero vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Industry Navigation Bar (No Cards: Clean Underlined Tabs like TCS & Wipro) */}
        <div className="border-b border-slate-200 mb-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-6 min-w-max" role="tablist">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = ind.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={ind.tabName}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`group pb-3 pt-1 px-1 flex items-center gap-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'border-[#0033a0] text-[#000033]'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-[#0033a0]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{ind.tabName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enterprise Deep-Dive Stage (Two-Column Showcase, Zero Boxed Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Solution Architecture & Technical Interventions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#0033a0]">
                {activeIndustry.kicker}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-[#000033] leading-snug">
                {activeIndustry.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeIndustry.description}
              </p>
            </div>

            {/* 3 Technical Interventions (Clean Keyline List, No Boxed Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              {activeIndustry.interventions.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0033a0] shrink-0" />
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Link to Domain Practice */}
            <div className="pt-2">
              <Link
                href={activeIndustry.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors group/link"
              >
                <span>Explore {activeIndustry.tabName} practice solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: Authentic Industry Visual + Domain Metrics Strip */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
            
            {/* Clean Photographic Stage */}
            <div className="relative flex-1 min-h-[220px] sm:min-h-[240px] w-full rounded-[6px] overflow-hidden border border-slate-200 bg-slate-950 shadow-xs">
              {INDUSTRIES.map((ind, idx) => {
                const isCurrent = activeTab === idx;
                return (
                  <div
                    key={ind.tabName}
                    className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                      isCurrent ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                    }`}
                  >
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                );
              })}
            </div>

            {/* Clean Domain Metrics Strip (Attached below photo, No floating HUD) */}
            <div className="grid grid-cols-3 gap-2 px-3.5 py-2.5 bg-slate-50 rounded-[6px] border border-slate-200 text-center">
              {activeIndustry.metrics.map((m) => (
                <div key={m.label} className="border-r last:border-r-0 border-slate-200 px-1">
                  <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    {m.label}
                  </span>
                  <span className="block text-xs font-semibold text-slate-900 truncate mt-0.5">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Corporate Governance Strip (TCS / Wipro Style) */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-slate-600">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0033a0]" />
              <strong className="text-slate-900 font-semibold">Governance:</strong> Delaware US Law &amp; Full IP Assignment
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <strong className="text-slate-900 font-semibold">Compliance:</strong> HIPAA, SOC 2 Type II, PCI-DSS, ISO 27001
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors"
          >
            <span>Schedule an industry consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
