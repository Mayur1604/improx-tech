'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Lightbulb, 
  Palette, 
  Zap, 
  CheckCircle2, 
  GitMerge, 
  Terminal, 
  ArrowRight, 
  ChevronRight,
  Layers,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { productEngineeringList } from '../data/servicesData';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';

const iconMap = {
  Lightbulb,
  Palette,
  Zap,
  CheckCircle2,
  GitMerge,
  Terminal,
};

export default function ProductEngineeringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const productFaqs = [
    {
      q: 'How fast can Improx Tech deliver an interactive click-through MVP prototype?',
      a: 'We deliver working, interactive clickable prototypes within 1 to 2 weeks using modern design tokens and React/Next.js component scaffolds. This enables enterprise product leaders to run usability testing with real customers and secure executive budget before committing to full-scale production engineering.'
    },
    {
      q: 'How do you bridge the handoff gap between UI/UX design and production code?',
      a: 'We eliminate the traditional design-to-development handoff friction by maintaining code-synchronized design systems. Our designers build atomic token libraries in Figma that map directly to Tailwind CSS and React component variants, guaranteeing pixel-perfect fidelity, accessibility compliance (WCAG 2.1 AA), and zero redesign cycles.'
    },
    {
      q: 'What automated QA testing standards are enforced across product sprints?',
      a: 'We enforce an automated testing pyramid consisting of Jest/Vitest unit tests, Playwright end-to-end user journey flows, and visual regression testing with Percy/Chromatic. Every pull request must pass automated test runs in CI with a minimum 85% branch coverage before deployment to staging.'
    },
    {
      q: 'Who retains the intellectual property and design assets created during the project?',
      a: 'Your company retains 100% ownership of all Figma workspaces, design tokens, icons, typography licenses, source code repositories, and user research transcripts under binding Delaware US contractual terms. We provide complete Git repositories and design archives upon every milestone completion.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= LIGHT EDITORIAL SUBPAGE HEADER ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0033a0] font-medium">Product Engineering</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
                Full-Lifecycle Digital Product Innovation
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000033] leading-tight">
                Enterprise Product Engineering
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Transforming ambitious technical hypotheses into validated, market-ready digital software products. From design systems to automated QA pipelines and CI/CD release cadences.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Building standout digital products requires more than raw code; it demands product-market fit, accessible interfaces, automated regression suites, and cloud-native velocity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Start Product Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/application-services"
                  className="bg-white hover:bg-slate-100 text-gray-800 font-semibold px-6 py-3.5 rounded-[6px] border border-slate-300 text-sm transition-all"
                >
                  <span>Explore Application Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-[6px] overflow-hidden shadow-sm border border-slate-300 bg-slate-900">
              <Image
                src="/images/services/saas-architecture.webp"
                alt="Product Engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000033]/90 via-[#000033]/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-[6px] bg-[#000033]/90 text-[11px] font-bold text-[#00a3e0] border border-white/20 uppercase tracking-wider">
                  DESIGN TO PRODUCTION
                </span>
                <div className="text-sm font-bold text-white mt-1">Figma Systems, Rapid Prototyping &amp; Automated CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS TICKER ================= */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-3 sm:pt-0 sm:pl-4 first:pl-0">
              <div className="text-2xl font-bold text-[#000033]">Iterative</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Sprint Milestones</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#0033a0]">Continuous</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Automated Testing &amp; CI</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-3xl font-extrabold text-[#00a3e0]">100%</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">IP &amp; Codebase Ownership</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#000033]">Modern</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Clean Software Architecture</div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 6 PRODUCT DISCIPLINES (SHARP CARDS) ================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Product Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Our 6 Product Engineering Disciplines
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Select any discipline to review specialized technical toolchains, deliverable artifacts, and sprint workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productEngineeringList.map((service) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || Layers;
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
                    href={`/product-engineering/${service.slug}`}
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-[6px] bg-[#f8fafd] hover:bg-[#0033a0] text-gray-800 hover:text-white text-xs font-semibold transition-all mt-auto border border-slate-200 group"
                  >
                    <span>View Discipline Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= PRODUCT DELIVERY LIFECYCLE ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Lifecycle Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              From Concept to Scaled Production
            </h2>
            <p className="text-gray-600 text-base mt-2">
              How our dedicated engineering pods transition technical requirements through five structured stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-[6px] border border-slate-300 bg-[#f8fafd] space-y-2 hover:border-[#0033a0] transition-colors">
              <div className="text-xs font-mono text-[#0033a0] font-bold">01 / DISCOVERY</div>
              <h4 className="text-sm font-bold text-gray-900">User Research &amp; PRD</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Hypothesis validation, competitive benchmarking, and technical specification.</p>
            </div>

            <div className="p-6 rounded-[6px] border border-slate-300 bg-[#f8fafd] space-y-2 hover:border-[#0033a0] transition-colors">
              <div className="text-xs font-mono text-[#0033a0] font-bold">02 / UI/UX DESIGN</div>
              <h4 className="text-sm font-bold text-gray-900">Design Systems</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Figma component libraries, design tokens, responsive mockups, and accessibility checks.</p>
            </div>

            <div className="p-6 rounded-[6px] border border-slate-300 bg-[#f8fafd] space-y-2 hover:border-[#0033a0] transition-colors">
              <div className="text-xs font-mono text-[#0033a0] font-bold">03 / PROTOTYPE</div>
              <h4 className="text-sm font-bold text-gray-900">Interactive MVP</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Working click-through software increment tested with core enterprise stakeholders.</p>
            </div>

            <div className="p-6 rounded-[6px] border border-slate-300 bg-[#f8fafd] space-y-2 hover:border-[#0033a0] transition-colors">
              <div className="text-xs font-mono text-[#0033a0] font-bold">04 / QA AUTOMATION</div>
              <h4 className="text-sm font-bold text-gray-900">Zero-Defect Gates</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Automated Cypress/Playwright regression testing, load testing, and security scanning.</p>
            </div>

            <div className="p-6 rounded-[6px] border border-slate-300 bg-[#f8fafd] space-y-2 hover:border-[#0033a0] transition-colors">
              <div className="text-xs font-mono text-[#0033a0] font-bold">05 / RELEASE</div>
              <h4 className="text-sm font-bold text-gray-900">Continuous CI/CD</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Automated multi-stage deployment pipelines with automated rollback safety.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Product Engineering FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Technical &amp; Delivery Inquiries
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Key questions asked by Chief Product Officers and Engineering Directors before partnering with Improx.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {productFaqs.map((faq, idx) => {
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
        filterCategory="Product Engineering"
        title="Product Engineering Insights & Architecture Research"
        subtitle="Analyses of design systems, rapid prototyping ROI, micro-frontends vs modular monoliths, and enterprise SaaS UX."
      />


      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#000033] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Engineer Your Digital Product?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Collaborate with our product directors and senior engineers. We will analyze your roadmap and formulate an actionable sprint plan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md"
            >
              <span>Schedule Product Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
