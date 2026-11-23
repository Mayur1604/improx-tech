'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const STAGES = [
  {
    step: '01',
    name: 'Discover',
    deliverable: 'Technical Audit & Scope Blueprint',
    summary: 'We audit your technical specifications, current bottlenecks, security constraints, and operational goals to produce an actionable scoping document.',
    points: [
      'Architecture & legacy systems audit',
      'Security & regulatory compliance review',
      'Resource sizing & velocity roadmap',
    ],
  },
  {
    step: '02',
    name: 'Architect',
    deliverable: 'API Contracts & Cloud Topology',
    summary: 'We model data entities, design clean API contracts, select appropriate cloud providers, and establish development sprint milestones.',
    points: [
      'Relational data models & schema design',
      'Decoupled microservices topology',
      'Terraform IaC infrastructure templates',
    ],
  },
  {
    step: '03',
    name: 'Develop',
    deliverable: '2-Week Sprint Working Increments',
    summary: 'Two-week sprint cadences with automated unit testing, static linting, continuous integration, and demo reviews of working software increments.',
    points: [
      'Daily asynchronous standups in EST',
      'Automated SAST scans & Playwright tests',
      'Direct Slack/Teams integration with pods',
    ],
  },
  {
    step: '04',
    name: 'Deploy & Improve',
    deliverable: 'Zero-Downtime Release & SRE',
    summary: 'Zero-downtime release orchestration, infrastructure observability, performance tuning, and structured knowledge transfer to your team.',
    points: [
      'Canary & blue/green zero-downtime releases',
      'Distributed OpenTelemetry tracing',
      '24/7 SLO tracking & incident runbooks',
    ],
  },
];

export default function EngineeringProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-14 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Hallmark Head-Split */}
        <div className="mb-12 pb-6 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#0033a0] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0033a0]" />
              <span>DELIVERY LIFECYCLE // 04 DISCIPLINES</span>
            </div>

            <div className="text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-[3px]">
              CURRENT: <strong className="text-[#000033]">PHASE {STAGES[activeStep].step} — {STAGES[activeStep].name}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#000033] leading-tight">
                A disciplined development lifecycle from concept to production.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our structured engineering process ensures clear scope, predictable delivery cadences, and robust software quality at every step without proprietary vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Architectural Pipeline (Zero Cards) */}
        <div className="relative">
          
          {/* 4 Architectural Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={stage.step}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  className={`group flex flex-col justify-between text-left cursor-pointer transition-all duration-200 focus:outline-none ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  
                  {/* Interactive Node & Step Marker */}
                  <div>
                    {/* Phase Header Text Above */}
                    <div className="mb-2">
                      <span
                        className={`font-mono text-xs font-bold tracking-wider uppercase transition-colors ${
                          isActive ? 'text-[#0033a0]' : 'text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        PHASE {stage.step}
                      </span>
                    </div>

                    {/* Circle Node with Perfectly Centered Connector Line Below Phase Text */}
                    <div className="relative flex items-center mb-4">
                      {/* Inter-node connector line (centered on the circle's vertical midpoint) */}
                      {idx < STAGES.length - 1 && (
                        <div 
                          className="hidden lg:block absolute left-[8px] w-[calc(100%+2rem)] top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 z-0 pointer-events-none"
                        >
                          <div
                            className="h-full bg-[#0033a0] transition-all duration-500 ease-out"
                            style={{ width: idx < activeStep ? '100%' : '0%' }}
                          />
                        </div>
                      )}

                      {/* Circle Node */}
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center shrink-0 relative z-10 ${
                          isActive
                            ? 'bg-[#0033a0] border-white ring-4 ring-[#0033a0]/25 scale-110 shadow-xs'
                            : isPast
                            ? 'bg-[#000033] border-white ring-1 ring-slate-300'
                            : 'bg-white border-slate-300 group-hover:border-[#0033a0]'
                        }`}
                      >
                        {isPast && <Check className="w-2.5 h-2.5 text-white" />}
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    {/* Stage Name & Summary Below Circle & Line */}
                    <h3
                      className={`text-lg sm:text-xl font-bold mb-2 transition-colors ${
                        isActive ? 'text-[#000033]' : 'text-slate-800 group-hover:text-[#000033]'
                      }`}
                    >
                      {stage.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {stage.summary}
                    </p>
                  </div>

                  {/* Technical Deliverable & Checkpoints */}
                  <div
                    className={`space-y-3 pt-3.5 border-t transition-colors ${
                      isActive ? 'border-[#0033a0]/30' : 'border-slate-100'
                    }`}
                  >
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {stage.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span
                            className={`w-1 h-1 rounded-full mt-1.5 shrink-0 transition-colors ${
                              isActive ? 'bg-[#0033a0]' : 'bg-slate-300 group-hover:bg-slate-400'
                            }`}
                          />
                          <span className={isActive ? 'text-slate-900 font-medium' : 'text-slate-600'}>
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`pt-2.5 border-t transition-colors ${
                        isActive ? 'border-[#0033a0]/20' : 'border-slate-200/70'
                      }`}
                    >
                      <span className="block text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                        Key Deliverable
                      </span>
                      <span
                        className={`block text-xs font-semibold mt-0.5 transition-colors ${
                          isActive ? 'text-[#0033a0]' : 'text-slate-800'
                        }`}
                      >
                        {stage.deliverable}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Architectural Cadence Strip */}
        <div className="mt-12 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <strong className="text-slate-900 font-semibold">Governance:</strong> Delaware US Law &amp; Full IP Assignment
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <strong className="text-slate-900 font-semibold">Cadence:</strong> 2-Week Production Sprint Cycles
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <strong className="text-slate-900 font-semibold">Delivery:</strong> Delaware Solutions Architecture + Pune Pod Velocity
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors"
          >
            <span>Schedule an architectural consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
