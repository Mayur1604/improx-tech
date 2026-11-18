'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Code2, 
  Building2, 
  Cloud, 
  Smartphone, 
  Globe, 
  Layers, 
  Cpu, 
  RefreshCw, 
  Wrench, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { applicationServicesList } from '../data/servicesData';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';

const iconMap = {
  Code2,
  Building2,
  Layers,
  Smartphone,
  Globe,
  Cloud,
  Cpu,
  ShieldCheck,
  RefreshCw,
  Wrench,
};

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
      
      {/* ================= LIGHT EDITORIAL SUBPAGE HEADER ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0033a0] font-medium">Application Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
                Enterprise Software &amp; Digital Solutions
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000033] leading-tight">
                Enterprise Application Services
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Architecting custom enterprise platforms, scalable SaaS multi-tenancy, and cloud-native applications with modular architecture and resilient design.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
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
                  className="bg-white hover:bg-slate-100 text-gray-800 font-semibold px-6 py-3.5 rounded-[6px] border border-slate-300 text-sm transition-all"
                >
                  Explore Product Engineering
                </Link>
              </div>
            </div>

            <div className="group lg:col-span-5 relative h-64 sm:h-80 w-full rounded-[6px] overflow-hidden shadow-sm hover:shadow-md border border-slate-300 hover:border-[#0033a0] bg-slate-900 transition-all duration-300">
              <Image
                src="/images/services/custom-software.webp"
                alt="Application Services"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000033]/90 via-[#000033]/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold text-[#00a3e0] uppercase tracking-wider drop-shadow-md block">
                  PRODUCTION CAPABILITY
                </span>
                <div className="text-sm font-bold text-white mt-1 drop-shadow-md">Multi-Tenant Cloud SaaS &amp; High-Concurrency APIs</div>
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
              <div className="text-2xl font-bold text-[#000033]">Modular</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Resilient System Design</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#0033a0]">100%</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Client Source Code Ownership</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#00a3e0]">Dedicated</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Focused Engineering Pods</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#000033]">Dual-Hub</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Delaware &amp; Pune Delivery</div>
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


      {/* ================= 10 CORE SERVICES CATALOG (SHARP RECTANGULAR CARDS) ================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Full Practice Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Our 10 Core Application Disciplines
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Select any discipline below to review dedicated technical architectures, key capabilities, tech stacks, and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationServicesList.map((service) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || Building2;
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
                    href={`/application-services/${service.slug}`}
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
      <section className="py-20 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Technical Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Frequently Asked Questions: Application Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Common architectural and governance questions from engineering directors evaluating Improx Tech.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {applicationFaqs.map((faq, idx) => {
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
