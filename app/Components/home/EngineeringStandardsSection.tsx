'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Copy, Check } from 'lucide-react';

interface StandardPillar {
  id: string;
  tabLabel: string;
  badge: string;
  specId: string;
  title: string;
  description: string;
  deliverables: string[];
  specRows: { label: string; value: string; isMono?: boolean }[];
  checksum: string;
  actionText: string;
}

const STANDARDS: StandardPillar[] = [
  {
    id: 'ip-sovereignty',
    tabLabel: '01 / IP Sovereignty',
    badge: 'DELAWARE TITLE 8',
    specId: 'SPECIFICATION-ID: #GOV-01',
    title: '100% Client Source Code & IP Sovereignty',
    description: 'Every commit, schema definition, and cloud deployment template is assigned contractually to your company from day one under Delaware law.',
    deliverables: [
      'Complete IP assignment executed on every sprint commit',
      'All code written directly in your corporate GitHub / GitLab organization',
      'Zero proprietary framework lock-in or recurring runtime licensing fees',
    ],
    specRows: [
      { label: 'Legal Jurisdiction', value: 'State of Delaware, USA (Title 8, Sec. 101)' },
      { label: 'Repository Ownership', value: 'Client-Owned Corporate GitHub Remote' },
      { label: 'Runtime Licensing Fee', value: '$0.00 (Pure Open-Source Standards)' },
      { label: 'Codebase Portability', value: '100% Sovereign (Transferable Anytime)' },
      { label: 'Verification Digest', value: 'sha256:8f4a1c99b82142e88a38d9f109be374c4019', isMono: true },
    ],
    checksum: 'sha256:8f4a1c99b82142e88a38d9f109be374c4019',
    actionText: 'Review Sample Delaware IP Assignment Rider',
  },
  {
    id: 'cicd-automation',
    tabLabel: '02 / CI/CD Automation',
    badge: 'MANDATORY GATEKEEPER',
    specId: 'SPECIFICATION-ID: #GOV-02',
    title: 'Audited Peer Reviews & Static Linting CI',
    description: 'All code enters production through audited pull requests with automated test coverage, security dependency scans, and clean linting checks.',
    deliverables: [
      'Automated unit and integration test passes enforced in CI pipelines',
      'SAST/DAST container vulnerability scans prior to main branch merge',
      'Mandatory peer review signed off by senior pod leads',
    ],
    specRows: [
      { label: 'Static Analysis', value: 'ESLint Strict + TS 5.4 Check (0 Errors)' },
      { label: 'Security Vulnerability Gate', value: 'Trivy + Snyk Scans (0 High/Critical CVEs)' },
      { label: 'Automated Test Standard', value: '85%+ Enforced Branch Test Coverage' },
      { label: 'Branch Protection', value: 'Dual Peer Sign-off Required Before Merge' },
      { label: 'Verification Digest', value: 'sha256:d41d8cd98f00b204e9800998ecf8427e192a', isMono: true },
    ],
    checksum: 'sha256:d41d8cd98f00b204e9800998ecf8427e192a',
    actionText: 'Inspect CI/CD Quality Gate Pipeline Specs',
  },
  {
    id: 'pod-access',
    tabLabel: '03 / Direct Pod Access',
    badge: 'DIRECT ACCESS',
    specId: 'SPECIFICATION-ID: #GOV-03',
    title: 'Direct Technical Access Without Account Layers',
    description: 'Collaborate directly with the senior engineers writing your software through shared Slack/Teams channels, bi-weekly sprint demos, and open backlog planning.',
    deliverables: [
      'Dedicated engineering pods that stay on your roadmap institutional context',
      'Two-week sprint cadences with runnable staging environment demos',
      'Direct communication without project coordinator or account manager filtering',
    ],
    specRows: [
      { label: 'Sprint Cycle', value: '14-Day Iterative Cadence with Working Demos' },
      { label: 'Communication Channel', value: 'Direct Shared Slack / Teams (Engineers Only)' },
      { label: 'Account Manager Overhead', value: '0 Hours (No Intermediary Game of Telephone)' },
      { label: 'PR Review SLA', value: '< 4 Hours on Client Repository Pull Requests' },
      { label: 'Verification Digest', value: 'sha256:2b9e14a1c5d8e7b301f2984180d1e2f7596a', isMono: true },
    ],
    checksum: 'sha256:2b9e14a1c5d8e7b301f2984180d1e2f7596a',
    actionText: 'Review Engineering Pod Staffing Model',
  },
  {
    id: 'open-standards',
    tabLabel: '04 / Open Standards',
    badge: 'OPEN STANDARDS',
    specId: 'SPECIFICATION-ID: #GOV-04',
    title: 'Open-Source & Cloud-Native Reliability',
    description: 'We build with open, modern standards (TypeScript, Next.js, Go, Docker, standard SQL) so any competent engineer can maintain and scale your platform.',
    deliverables: [
      'Self-contained, containerized Docker and Kubernetes Helm deployments',
      'Modular TypeScript, Go, and PostgreSQL architectures with clean migrations',
      'Comprehensive OpenAPI 3.1 specifications, typed contracts, and architectural runbooks',
    ],
    specRows: [
      { label: 'Primary Language Stack', value: 'TypeScript, Go, Node.js LTS, Next.js' },
      { label: 'Database & In-Memory', value: 'PostgreSQL 16 (Standard SQL) & Redis' },
      { label: 'Containerization', value: 'OCI Docker & Kubernetes Helm Orchestration' },
      { label: 'Cloud Portability', value: '100% Agnostic (AWS, GCP, Azure, Bare Metal)' },
      { label: 'Verification Digest', value: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d', isMono: true },
    ],
    checksum: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d',
    actionText: 'Review Stack Architecture Manifest & Runbooks',
  },
];

export default function EngineeringStandardsSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeStandard = STANDARDS[activeIdx];

  const handleCopyChecksum = () => {
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      navigator.clipboard.writeText(activeStandard.checksum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fafaf9] text-slate-900 border-b border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header (Apple / Stripe High-End Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#0033a0] tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0033a0]" />
              <span>ENGINEERING GOVERNANCE {'//'} CONTRACTUAL COMMITMENTS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Rigorous contractual and technical governance.
            </h2>
          </div>

          <div className="shrink-0 self-start md:self-auto">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-900 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200 group"
            >
              <span>Review Legal Terms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Segmented Pill Switcher (Apple Developer Style) */}
        <div 
          role="tablist" 
          aria-label="Engineering Governance Standards" 
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-6 border-b border-slate-200 text-xs font-medium no-scrollbar"
        >
          {STANDARDS.map((std, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={std.id}
                type="button"
                role="tab"
                id={`tab-gov-${std.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-gov-${std.id}`}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {std.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Active Standard Presentation: Split Showcase */}
        <div 
          role="tabpanel" 
          id={`panel-gov-${activeStandard.id}`} 
          aria-labelledby={`tab-gov-${activeStandard.id}`}
          className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          
          {/* Left Column: Standard Title & Deliverables */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2 border-t border-slate-300 pt-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0033a0]">
                {activeStandard.tabLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                {activeStandard.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {activeStandard.description}
            </p>

            {/* Contractual Deliverables List */}
            <div className="space-y-3 pt-2">
              {activeStandard.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{del}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Apple / Stripe Enterprise Specification Sheet */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            
            {/* Spec Sheet Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-2">
              <span className="text-xs font-mono text-slate-500 font-medium">
                {activeStandard.specId}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0033a0] border border-blue-200/70 font-mono text-[11px] font-semibold">
                {activeStandard.badge}
              </span>
            </div>

            {/* Spec Detail Rows */}
            <div className="space-y-3 text-xs sm:text-sm">
              {activeStandard.specRows.map((row, rIdx) => (
                <div 
                  key={rIdx} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 ${
                    rIdx < activeStandard.specRows.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <span className="text-slate-500 font-normal shrink-0">{row.label}:</span>
                  <span className={`text-slate-900 font-medium text-right ${
                    row.isMono ? 'font-mono text-xs text-[#0033a0] truncate max-w-[240px]' : ''
                  }`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors duration-150"
              >
                <span>{activeStandard.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={handleCopyChecksum}
                title="Copy Verification Checksum"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-mono font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Checksum Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy SHA-256</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
