'use client';

import { useState } from 'react';
import { Search, Compass, Code, Rocket } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    name: 'Discover',
    icon: Search,
    summary: 'Understand business requirements and technical challenges.',
    details: 'We audit your technical specifications, current bottlenecks, security constraints, and operational goals to produce an actionable scoping document.',
  },
  {
    step: '02',
    name: 'Architect',
    icon: Compass,
    summary: 'Plan the architecture, technology stack and infrastructure.',
    details: 'We model data entities, design clean API contracts, select appropriate cloud providers, and establish development sprint milestones.',
  },
  {
    step: '03',
    name: 'Develop',
    icon: Code,
    summary: 'Build, test and integrate software solutions.',
    details: 'Two-week sprint cadences with automated unit testing, static linting, continuous integration, and demo reviews of working software increments.',
  },
  {
    step: '04',
    name: 'Deploy & Improve',
    icon: Rocket,
    summary: 'Deploy applications and continuously improve them.',
    details: 'Zero-downtime release orchestration, infrastructure observability, performance tuning, and structured knowledge transfer to your team.',
  },
];

export default function EngineeringProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Engineering Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            A disciplined development lifecycle from concept to production.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our structured engineering process ensures clear scope, predictable delivery cadences, and robust software quality at every step.
          </p>
        </div>

        {/* Process Bar: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          
          {/* Thin Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setActiveStage(idx)}
                  onFocus={() => setActiveStage(idx)}
                  tabIndex={0}
                  className={`cursor-pointer transition-all duration-200 rounded-[6px] p-5 text-left border ${
                    isActive
                      ? 'bg-slate-50 border-[#0033a0] shadow-xs'
                      : 'bg-white border-transparent hover:border-slate-300'
                  }`}
                >
                  {/* Step Number & Node Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-[6px] flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#0033a0] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {stage.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {stage.summary}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-200/60 pt-3">
                    {stage.details}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
