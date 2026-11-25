'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Clock,
  ShieldCheck,
  Users
} from 'lucide-react';
import { applicationServicesList } from '../data/servicesData';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';

export default function ApplicationServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const applicationFaqs = [
    {
      q: 'How does Improx Tech manage complex data migrations from legacy ERP systems to modern cloud SaaS?',
      a: 'We implement phased data migration pipelines using Change Data Capture (CDC) and event streaming through Apache Kafka. This allows legacy databases and modern PostgreSQL/Aurora clusters to run concurrently with bidirectional synchronization, eliminating cutover downtime and protecting transaction integrity.'
    },
    {
      q: 'What architectural frameworks do you employ for high-concurrency multi-tenant platforms?',
      a: 'We architect multi-tenant SaaS platforms using schema-per-tenant or row-level tenant partitioning in PostgreSQL with Redis cluster caching and distributed rate-limiting. Application logic is decoupled into event-driven microservices running on Kubernetes with automated horizontal pod autoscaling (HPA).'
    },
    {
      q: 'How do you guarantee source code security and IP ownership under Delaware law?',
      a: 'Every client agreement is executed under our US corporate entity in Lewes, Delaware. All intellectual property, patented business logic, schemas, and source code are assigned 100% to your organization from the first sprint commit. We enforce zero vendor lock-in and provide complete Git repositories and deployment manifests.'
    },
    {
      q: 'Can Improx Tech engineers integrate with our internal development squads?',
      a: 'Yes. Our pods can operate as completely autonomous turnkey engineering units or seamlessly embed into your existing engineering organization. We align with your Jira workflows, GitHub pull request standards, and agile sprint ceremonies with daily standups in US Eastern Time.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= FULL-BLEED SVG HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed SVG background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/enterprise-application-services-bg.webp"
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
            <span className="text-[#00a3e0] font-medium">Application Services</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] inline-block">
              Enterprise Software &amp; Digital Solutions
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Application Services
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Architecting custom enterprise platforms, scalable SaaS multi-tenancy, and cloud-native applications with modular architecture and resilient design.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              From bespoke domain automation and high-concurrency microservices to disciplined legacy modernizations and reliable operational support, our engineering teams build software that endures.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Discuss Your Application Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/product-engineering"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-[6px] border border-white/30 text-sm transition-all"
              >
                Explore Product Engineering
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
              <div className="text-2xl font-bold text-[#000033]">Modular</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Resilient System Design</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#0033a0]">Dedicated</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Focused Engineering Pods</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-3xl font-extrabold text-[#00a3e0]">100%</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Client Source Code Ownership</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#000033]">99.99%</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">High Availability SLA</div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= ARCHITECTURAL PILLARS (DEEP DIVE) ================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 space-y-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] mb-3 transition-colors duration-200 cursor-default inline-block">
              Architectural Standard
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] tracking-tight">
              Enterprise Engineering Foundations
            </h2>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              Every system designed by Improx Tech conforms to stringent architectural pillars that ensure horizontal scalability, clean maintainability, and continuous compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#0033a0] pt-6 space-y-3 group">
              <span className="text-xs font-mono font-bold text-[#0033a0] tracking-wider block">
                PILLAR 01
              </span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                Domain-Driven Design (DDD)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Clean separation of core business logic from infrastructural dependencies. Bounded contexts ensure modular microservices that scale independently.
              </p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-6 space-y-3 group">
              <span className="text-xs font-mono font-bold text-[#0033a0] tracking-wider block">
                PILLAR 02
              </span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                Event-Driven Streaming
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Asynchronous event processing using Apache Kafka and Redis. Eliminates point-to-point HTTP bottlenecks and supports scalable transaction throughput.
              </p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-6 space-y-3 group">
              <span className="text-xs font-mono font-bold text-[#0033a0] tracking-wider block">
                PILLAR 03
              </span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                Zero-Trust Security
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Role-based access control (RBAC), end-to-end KMS envelope encryption, mutual TLS between internal services, and continuous SAST/DAST pipeline gates.
              </p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-6 space-y-3 group">
              <span className="text-xs font-mono font-bold text-[#0033a0] tracking-wider block">
                PILLAR 04
              </span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                Automated SRE Observability
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                OpenTelemetry instrumentation with distributed tracing, automated anomaly alerts, Prometheus metrics, and 24/7 Site Reliability monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 10 CORE SERVICES CATALOG (EDITORIAL MINIMALIST ROWS) ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-14 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0033a0] block mb-3">
              Practice Catalog {'//'} 10 Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Specialized engineering <span className="underline decoration-[#0033a0] decoration-2 underline-offset-8">disciplines</span>.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
              Select any discipline below to review dedicated technical architectures, key capabilities, tech stacks, and workflows.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {applicationServicesList.map((service, idx) => {
              return (
                <Link
                  key={service.slug}
                  href={`/application-services/${service.slug}`}
                  className="group block py-8 sm:py-10 transition-colors hover:bg-slate-50/70 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      {/* Index + Title */}
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-xs font-mono font-semibold text-[#0033a0] tracking-wider shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#0033a0] transition-colors leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Pill Badges (Reference Style) */}
                      <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
                        {service.keyCapabilities.slice(0, 4).map((cap) => (
                          <span
                            key={cap.title}
                            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs sm:text-[13px] font-medium text-slate-800 transition-all group-hover:border-slate-500 shadow-2xs"
                          >
                            {cap.title}
                          </span>
                        ))}
                        {service.technologies && service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-medium text-[#0033a0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Arrow / Action button */}
                    <div className="shrink-0 flex items-center gap-3 pt-2 lg:pt-4 self-end lg:self-center">
                      <span className="text-xs font-semibold text-slate-500 group-hover:text-[#0033a0] transition-colors hidden sm:inline">
                        View Specifications
                      </span>
                      <div className="w-10 h-10 rounded-full border border-slate-300 group-hover:border-[#0033a0] group-hover:bg-[#0033a0] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:scale-105">
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= ARCHITECTURAL COMPARISON TABLE ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Evaluation Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Why Custom Enterprise Engineering Wins
            </h2>
            <p className="text-gray-600 text-base mt-2">
              How our dedicated engineering model compares to commercial off-the-shelf software and internal development.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-300">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 font-bold text-gray-900">Evaluation Criteria</th>
                  <th className="py-4 px-6 font-bold text-[#0033a0] bg-blue-50/60">Improx Tech Model</th>
                  <th className="py-4 px-6 font-bold text-gray-600">Off-The-Shelf SaaS</th>
                  <th className="py-4 px-6 font-bold text-gray-600">Internal Hiring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-gray-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Intellectual Property</td>
                  <td className="py-4 px-6 text-[#0033a0] font-bold bg-blue-50/30">100% Client Owned Day One</td>
                  <td className="py-4 px-6 text-gray-500">Zero (Vendor Locked)</td>
                  <td className="py-4 px-6 text-gray-500">Client Owned</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Custom Workflows</td>
                  <td className="py-4 px-6 text-[#0033a0] font-bold bg-blue-50/30">Infinite Customization</td>
                  <td className="py-4 px-6 text-gray-500">Rigid &amp; Restricted</td>
                  <td className="py-4 px-6 text-gray-500">Slow Execution</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Time-to-Production</td>
                  <td className="py-4 px-6 text-[#0033a0] font-bold bg-blue-50/30">4-8 Weeks Initial MVP</td>
                  <td className="py-4 px-6 text-gray-500">Immediate Setup</td>
                  <td className="py-4 px-6 text-gray-500">6-12 Months Recruiting</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-900">Scalability &amp; Licensing</td>
                  <td className="py-4 px-6 text-[#0033a0] font-bold bg-blue-50/30">Zero Per-Seat Fees</td>
                  <td className="py-4 px-6 text-gray-500">Recurring Price Increases</td>
                  <td className="py-4 px-6 text-gray-500">Heavy Payroll Burden</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0033a0] block mb-2">
              Technical Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000033] tracking-tight">
              Frequently Asked Questions: Application Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Common architectural, governance, and delivery questions from engineering directors evaluating Improx Tech.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Interactive Technical Inquiries Accordion */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-3.5">
              {applicationFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-[#0033a0]/40 shadow-sm' 
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0033a0] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start gap-3.5">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-semibold transition-colors ${
                          isOpen ? 'bg-[#0033a0] text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="leading-snug pt-0.5">{faq.q}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 mt-1.5 ${isOpen ? 'rotate-180 text-[#0033a0]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed pl-14 sm:pl-16">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Direct Engineering Scoping & Inquiry Card */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0033a0] via-[#00a3e0] to-[#000033]" />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      Have a specific architectural inquiry?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      Our principal solution architects are available for direct NDA-protected scoping calls and workload reviews.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Clock className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                      <span><strong>Fast Response:</strong> Technical review within 24 business hours.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                      <span><strong>Legal Protection:</strong> Mutual NDA executed under Delaware US law.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Users className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                      <span><strong>Direct Leads:</strong> Speak with technical architects, not salespeople.</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full bg-[#0033a0] hover:bg-[#00287a] text-white text-xs font-semibold py-3 px-4 rounded-lg transition-all shadow-xs hover:shadow group"
                    >
                      <span>Schedule Architecture Call</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <div className="text-center">
                      <a
                        href="mailto:contact@improxtech.com"
                        className="text-[11px] font-mono text-slate-500 hover:text-[#0033a0] transition-colors"
                      >
                        or email contact@improxtech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= ENGINEERING INSIGHTS & KNOWLEDGE HUB SECTION ================= */}
      <EngineeringBlogSection 
        filterCategory="Application Services"
        title="Application Engineering Insights & Architecture Research"
        subtitle="Tactical blueprints on high-concurrency microservices, cloud modernization, and maintainable software development."
      />


      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#000033] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Scope Your Next Enterprise Application?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Consult with our engineering team for a thorough technical review and milestone roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
