'use client';

import React, { useState } from 'react';
import { ShieldCheck, Code2, Users, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CraftPillar {
  id: string;
  tabLabel: string;
  tagline: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  standards: {
    label: string;
    description: string;
  }[];
  contractualPromise: string;
}

const PILLARS: CraftPillar[] = [
  {
    id: 'sovereignty',
    tabLabel: '01 / IP Sovereignty',
    tagline: '100% Client Ownership',
    title: 'Unconditional Client Source Code Ownership',
    icon: Lock,
    description: 'Every commit, schema migration, and cloud infrastructure template is authored directly into your corporate GitHub or GitLab organization under Delaware law.',
    standards: [
      {
        label: 'Client-Owned Repositories',
        description: 'Code is written directly in your Git remotes from the very first sprint commit.',
      },
      {
        label: 'Delaware Law Assignment',
        description: 'Explicit intellectual property assignment rider executed with every contractual milestone.',
      },
      {
        label: 'Zero Runtime Lock-In',
        description: 'No proprietary SDKs, black-box libraries, or recurring developer seat licensing fees.',
      },
      {
        label: 'Clean Portability',
        description: 'Any competent in-house team can clone, run, and extend the system without our involvement.',
      },
    ],
    contractualPromise: '100% exclusive intellectual property assignment assigned to your corporation on every merge.',
  },
  {
    id: 'craft',
    tabLabel: '02 / Code Craft',
    tagline: 'Maintainable Systems',
    title: 'Type-Safe, Modular & Decoupled Architecture',
    icon: Code2,
    description: 'We avoid superficial shortcuts and brittle architectures. Every platform is built with clear domain boundaries, strict static type systems, and comprehensive automated test suites.',
    standards: [
      {
        label: 'Type-Safe Contracts',
        description: 'Strict TypeScript, Go, and OpenAPI 3.1 definitions eliminating runtime signature mismatches.',
      },
      {
        label: 'Automated CI Quality Gates',
        description: '85%+ branch coverage enforcement, static linting, and automated unit/integration test passes.',
      },
      {
        label: 'Database Schema Integrity',
        description: 'Reproducible PostgreSQL migrations with relational foreign keys and transaction boundaries.',
      },
      {
        label: 'Containerized Parity',
        description: 'OCI Docker images and Helm charts guaranteeing local development mirrors staging and production.',
      },
    ],
    contractualPromise: 'Automated CI/CD pipelines prevent any unreviewed or failing code from entering production branches.',
  },
  {
    id: 'pods',
    tabLabel: '03 / Dedicated Pods',
    tagline: 'Zero Account Layers',
    title: 'Focused Engineering Pods with Direct Access',
    icon: Users,
    description: 'Collaborate directly with the engineers authoring your software. We allocate dedicated pods who retain your domain context, eliminating account-manager telephone games.',
    standards: [
      {
        label: 'Institutional Context',
        description: 'Engineers remain dedicated to your roadmap rather than rotating randomly between client accounts.',
      },
      {
        label: 'Direct Slack / Teams Huddles',
        description: 'Instant communication with technical leads and senior developers writing your pull requests.',
      },
      {
        label: '14-Day Sprint Cadence',
        description: 'Predictable sprint planning, backlog grooming, and live working demos deployed to staging.',
      },
      {
        label: 'Transparent Pull Requests',
        description: 'Every pull request includes clear acceptance criteria, test evidence, and architectural notes.',
      },
    ],
    contractualPromise: 'Direct communication channels with senior pod leads without project coordinator buffering.',
  },
  {
    id: 'security',
    tabLabel: '04 / Security & Hygiene',
    tagline: 'Shift-Left Protection',
    title: 'Continuous Security, RBAC & Data Privacy',
    icon: ShieldCheck,
    description: 'Security is not an afterthought audit. We integrate vulnerability scans, role-based access control (RBAC), and encryption into our daily development lifecycle.',
    standards: [
      {
        label: 'Automated CVE Scanning',
        description: 'Trivy and Snyk scanners block images or dependencies with unresolved high/critical CVEs.',
      },
      {
        label: 'Least-Privilege RBAC',
        description: 'Short-lived IAM credentials, isolated staging VPCs, and zero permanent production access.',
      },
      {
        label: 'Encryption Standard',
        description: 'TLS 1.3 in transit and AES-256 for all stored data, database volumes, and object storage.',
      },
      {
        label: 'Compliance Benchmarks',
        description: 'Audited development workflows adhering to SOC 2 Type II, HIPAA, and ISO 27001 requirements.',
      },
    ],
    contractualPromise: 'Zero-data-retention and strict enterprise isolation enforced across all development environments.',
  },
];

export default function EngineeringCraftExplorer() {
  const [activeId, setActiveId] = useState<string>('sovereignty');

  const activePillar = PILLARS.find((p) => p.id === activeId) || PILLARS[0];
  const Icon = activePillar.icon;

  return (
    <div className="space-y-8">
      {/* 4-Pillar Segmented Switcher (Apple Style) */}
      <div 
        role="tablist"
        aria-label="Engineering Principles & Standards"
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold"
      >
        {PILLARS.map((p) => {
          const isSelected = activeId === p.id;
          const PIcon = p.icon;
          return (
            <button
              key={p.id}
              role="tab"
              id={`tab-craft-${p.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-craft-${p.id}`}
              onClick={() => setActiveId(p.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <PIcon className={`w-4 h-4 shrink-0 transition-colors ${isSelected ? 'text-[#0033a0]' : 'text-slate-400'}`} />
              <div className="truncate">
                <span className="block truncate">{p.tabLabel}</span>
                <span className="text-[10px] font-normal text-slate-500 block truncate">{p.tagline}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Showcase Panel */}
      <div 
        role="tabpanel"
        id={`panel-craft-${activePillar.id}`}
        aria-labelledby={`tab-craft-${activePillar.id}`}
        className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        {/* Left Column: Heading, Description & Promise */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#0033a0]">
              <Icon className="w-4 h-4 text-[#0033a0]" />
              <span>{activePillar.tagline}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
              {activePillar.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {activePillar.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#0033a0] block">
              Contractual Guarantee
            </span>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              {activePillar.contractualPromise}
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors group"
            >
              <span>Consult our engineering leads on this standard</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Concrete Operational Standards */}
        <div className="lg:col-span-7 divide-y divide-slate-100 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8">
          {activePillar.standards.map((std, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{std.label}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {std.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
