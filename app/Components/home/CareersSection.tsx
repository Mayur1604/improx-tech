'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  GitBranch, 
  Cpu, 
  Globe, 
  Sparkles,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { OPEN_POSITIONS, CULTURE_PILLARS, JobPosition } from '@/app/data/careersData';
import ApplyModal from '../ApplyModal';

const DEPARTMENTS = [
  'All Positions',
  'Application Engineering',
  'Cloud & DevOps',
  'Data & AI',
  'Quality Engineering',
] as const;

const CULTURE_ICONS = [GitBranch, Cpu, Globe, Sparkles];

export default function CareersSection() {
  const [selectedDept, setSelectedDept] = useState<string>('All Positions');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [applyingPosition, setApplyingPosition] = useState<JobPosition | null>(null);

  const filteredPositions = selectedDept === 'All Positions'
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter((pos) => pos.department === selectedDept);

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <section id="careers" className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
              Careers at Improx Tech
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Build scalable production software alongside senior engineers.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We hire disciplined engineers who value clean architecture, automated testing, and direct client impact. Work in dedicated engineering pods with modern tooling and zero bureaucratic friction.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
            >
              <span>Explore full careers page &amp; culture</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Culture & Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CULTURE_PILLARS.map((pillar, idx) => {
            const Icon = CULTURE_ICONS[idx % CULTURE_ICONS.length];
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-[6px] bg-slate-50/80 border border-slate-200 hover:border-[#0033a0]/50 hover:bg-white hover:shadow-xs transition-all duration-200 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-[6px] bg-white border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white group-hover:border-[#0033a0] transition-colors">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Roles Sub-Header & Filters */}
        <div className="border-t border-slate-200 pt-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Open Engineering Positions</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Currently hiring across our Pune technology center and hybrid engineering pods.
              </p>
            </div>

            {/* Department Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-medium transition-all ${
                    selectedDept === dept
                      ? 'bg-[#0033a0] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid / Cards */}
          <div className="space-y-4">
            {filteredPositions.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className="rounded-[6px] border border-slate-200 bg-white hover:border-[#0033a0]/40 transition-all duration-200 shadow-2xs overflow-hidden"
                >
                  {/* Card Header Row */}
                  <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-blue-50 text-[#0033a0] border border-blue-100">
                          {job.department}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.experience}</span>
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.type}</span>
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 hover:text-[#0033a0] transition-colors">
                        {job.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {job.summary}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {job.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-slate-100 text-slate-600 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0 self-start lg:self-center pt-2 lg:pt-0">
                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0033a0] px-3 py-2 rounded-[4px] border border-slate-200 hover:border-slate-300 transition-colors inline-flex items-center gap-1"
                      >
                        <span>{isExpanded ? 'Less Details' : 'View Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => setApplyingPosition(job)}
                        className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-5 py-2 rounded-[4px] text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Accordion */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/70 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed animate-fadeIn">
                      <div className="space-y-2">
                        <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-[#0033a0]">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-1.5 text-slate-600">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-[#0033a0]">
                          Requirements &amp; Stack:
                        </h5>
                        <ul className="space-y-1.5 text-slate-600">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Speculative / General Application Banner */}
          <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0033a0]" />
                <h4 className="text-sm font-bold text-slate-900">Don&apos;t see your specific stack or role?</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                We are always excited to connect with talented developers, distributed systems architects, and engineering leaders. Send your GitHub, portfolio, or CV directly to our engineering leads.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="mailto:enquiry@improxgroup.com?subject=Speculative%20Engineering%20Application%20-%20Improx%20Tech"
                className="bg-[#000033] hover:bg-[#000022] text-white font-medium px-5 py-2.5 rounded-[4px] text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Email Engineering Leads</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Quick Application Modal */}
      <ApplyModal
        position={applyingPosition}
        isOpen={Boolean(applyingPosition)}
        onClose={() => setApplyingPosition(null)}
      />
    </section>
  );
}
