'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  Cpu, 
  Globe, 
  Terminal, 
  Palette, 
  Lightbulb, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { aiBiList } from '../data/servicesData';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';

const iconMap = {
  Zap,
  Cpu,
  Globe,
  Terminal,
  Palette,
  Lightbulb,
};

export default function AiBiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const aiFaqs = [
    {
      q: 'How does Improx Tech guarantee that proprietary corporate data will not leak to public LLM models?',
      a: 'We architect enterprise RAG and LLM integrations using private VPC endpoints, self-hosted open-weights models (e.g. Llama 3 / Mistral), and dedicated enterprise cloud agreements with zero-data-retention guarantees. Customer data is encrypted in transit and at rest, and never utilized for foundation model training.'
    },
    {
      q: 'What is vector chunk-level RBAC and why is it critical for enterprise search?',
      a: 'Standard RAG pipelines can inadvertently retrieve confidential documents for unauthorized employees. At Improx Tech, our vector search index attaches cryptographic user permission claims to every text embedding chunk. Similarity search queries perform deterministic pre-filtering against active session tokens before returning context to the model.'
    },
    {
      q: 'How do you transition an enterprise from delayed monthly PDF reports to real-time telemetry?',
      a: 'We implement event-driven Change Data Capture (CDC) with Apache Kafka streaming directly into cloud data warehouses like Snowflake and Databricks. Business logic is formalized into a centralized semantic data layer, powering live executive dashboards with sub-second SQL performance.'
    },
    {
      q: 'How do you handle nondeterminism and hallucination risks in autonomous business logic?',
      a: 'We decouple reasoning from execution using deterministic guardrails. AI agents output structured JSON action proposals that must pass programmatic schema validation, RBAC checks, and executive spending approval gates before any database mutation or external API transaction is committed.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= FULL-BLEED SVG HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed SVG background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/ai-business-intelligence-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/95 via-[#000033]/75 to-[#000033]/30" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#00a3e0] font-medium">AI &amp; Business Intelligence</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] inline-block">
              Executive Data Intelligence &amp; Autonomous AI
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              AI &amp; Business Intelligence
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Transform unstructured enterprise data into unified corporate data meshes, grounded RAG applications, predictive machine learning models, and real-time executive decision cockpits.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Our data architects and AI engineers build production-grade intelligence pipelines with strict enterprise vector access controls, ISO/SOC governance, and sub-second SQL telemetry.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule AI &amp; BI Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/technology-services"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-[6px] border border-white/30 text-sm transition-all"
              >
                <span>Explore Cloud Infrastructure</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS TICKER ================= */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-3 sm:pt-0 sm:pl-4 first:pl-0">
              <div className="text-3xl font-extrabold text-[#000033]">100%</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Data Privacy &amp; Zero Retention</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#0033a0]">Fast</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Hybrid Retrieval &amp; RAG</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#00a3e0]">Modern</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Data Warehouse Stacks</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-3xl font-extrabold text-[#000033]">Real-Time</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Executive Dashboard Telemetry</div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 6 AI & BI DISCIPLINES (SHARP CARDS) ================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Intelligence Practice
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Our 6 AI &amp; Business Intelligence Offerings
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Select any discipline to view dedicated technical architectures, ML algorithms, BI frameworks, and governance protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiBiList.map((service) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || Cpu;
              return (
                <div 
                  key={service.slug}
                  className="bg-white rounded-[6px] border border-slate-300 p-7 flex flex-col justify-between hover:border-[#0033a0] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[6px] bg-[#000033] text-[#00a3e0] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#000033] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.keyCapabilities.slice(0, 3).map((cap) => (
                        <div key={cap.title} className="text-xs text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/ai-bi/${service.slug}`}
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-[6px] bg-[#f8fafd] hover:bg-[#0033a0] text-gray-800 hover:text-white text-xs font-semibold transition-all mt-auto border border-slate-200 group"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= ARCHITECTURAL ANALYSIS: MODERN BI vs BATCH REPORTING ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Improx Architectural Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              The Evolution of Enterprise Business Intelligence
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Why leading enterprises are transitioning from legacy monthly spreadsheets to real-time decision intelligence cockpits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[6px] border border-red-300 bg-red-50/30 space-y-4">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider">Legacy Reporting (Pre-2026)</div>
              <h3 className="text-lg font-bold text-gray-900">Fragmented Data Silos &amp; Delayed PDFs</h3>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li>• Overnight batch ETL jobs that regularly fail silently without alert.</li>
                <li>• Conflicting spreadsheet versions between finance and sales departments.</li>
                <li>• Delayed monthly executive reports that show problems weeks after they occur.</li>
                <li>• Uncontrolled data exports causing severe compliance and security breaches.</li>
              </ul>
            </div>

            <div className="p-8 rounded-[6px] border border-emerald-300 bg-emerald-50/30 space-y-4">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Improx Modern BI Architecture</div>
              <h3 className="text-lg font-bold text-gray-900">Unified Real-Time Decision Intelligence</h3>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li>• Event-driven Change Data Capture (CDC) streaming into modern warehouses.</li>
                <li>• Single Source of Truth semantic layer across all business units.</li>
                <li>• Live executive cockpits tracking customer churn risks and ARR in real time.</li>
                <li>• Strict role-based row and column level security with audit tracking.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              AI &amp; BI Technical FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Key inquiries from Chief Data Officers and AI leaders on enterprise privacy, governance, and architecture.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {aiFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-300 rounded-[6px] bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#000033] hover:text-[#0033a0] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0033a0] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= ENGINEERING INSIGHTS & KNOWLEDGE HUB SECTION ================= */}
      <EngineeringBlogSection 
        filterCategory="Data & Analytics"
        title="AI, Data Meshes & Business Intelligence Insights"
        subtitle="Analyses of agentic enterprise workflows, corporate data meshes, enterprise RAG security, and streaming data warehouses."
      />


      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#000033] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Build Production AI &amp; BI Dashboards?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Collaborate with our chief data strategists and AI systems architects. We will conduct an architectural review and deliver a concrete proof-of-concept roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md"
            >
              <span>Schedule AI &amp; BI Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
