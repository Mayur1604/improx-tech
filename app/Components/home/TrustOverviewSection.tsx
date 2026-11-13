import { Layers, ShieldCheck, LifeBuoy, MapPin, Calendar, Lock } from 'lucide-react';
import { company } from '@/app/data/company';

const CREDIBILITY_STATEMENTS = [
  {
    title: 'End-to-End Engineering',
    description: 'From initial technical architecture and sprint execution to cloud deployment and ongoing maintenance.',
    icon: Layers,
  },
  {
    title: 'Scalable Software Architecture',
    description: 'Cleanly decoupled microservices, resilient APIs, and data models designed for predictable growth.',
    icon: ShieldCheck,
  },
  {
    title: 'Ongoing Technical Support',
    description: 'Reliable engineering support, performance monitoring, security patching, and system optimizations.',
    icon: LifeBuoy,
  },
];

export default function TrustOverviewSection() {
  return (
    <section className="bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Verified Facts Ribbon with subtle hover states */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-slate-200">
          <div className="flex items-center gap-4 p-3 rounded-[6px] transition-colors hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-slate-200 flex items-center justify-center text-[#0033a0] shrink-0 transition-transform hover:scale-105">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">{company.foundingYear}</div>
              <div className="text-xs text-slate-600 font-medium">Founding Year</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-[6px] transition-colors hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-slate-200 flex items-center justify-center text-[#0033a0] shrink-0 transition-transform hover:scale-105">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">Dual-Hub Presence</div>
              <div className="text-xs text-slate-600 font-medium">Delaware, USA &amp; Pune, India</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-[6px] transition-colors hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-slate-200 flex items-center justify-center text-[#0033a0] shrink-0 transition-transform hover:scale-105">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">100% Client Ownership</div>
              <div className="text-xs text-slate-600 font-medium">Full Source Code &amp; IP Handover</div>
            </div>
          </div>
        </div>

        {/* 3 Core Credibility Statements with clean hover cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {CREDIBILITY_STATEMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-[6px] bg-white border border-slate-200/80 shadow-xs hover:border-[#0033a0]/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                  <div className="w-7 h-7 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
