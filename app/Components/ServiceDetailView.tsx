'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
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
  Lightbulb, 
  Palette, 
  Zap, 
  CheckCircle2, 
  GitMerge, 
  Terminal, 
  ArrowRight, 
  ChevronRight,
  ArrowLeft,
  Lock,
  FileCode,
  Server,
  HelpCircle,
  ChevronDown,
  LucideIcon
} from 'lucide-react';
import { ServiceDetail } from '../data/servicesData';
import EngineeringBlogSection from './EngineeringBlogSection';

const serviceSlugImageMap: Record<string, string> = {
  // 1. Custom Software Development
  'custom-software-development': '/images/services/custom-software-development.svg',

  // 2. Enterprise Application Development
  'enterprise-applications': '/images/services/enterprise-application-development.svg',

  // 3. SaaS Platform Development
  'saas-development': '/images/services/saas-platform-development.svg',

  // 4. Cloud Application & DevSecOps
  'cloud-applications': '/images/services/cloud-application-devsecops.svg',
  'devsecops': '/images/services/cloud-application-devsecops.svg',
  'cloud-migration': '/images/services/cloud-migration.webp',

  // 5. High-Throughput API Development
  'api-development': '/images/services/high-throughput-api-development.svg',

  // 6. AI & Data Integration Systems
  'data-engineering': '/images/services/ai-data-integration-systems.svg',
  'system-integration': '/images/services/ai-data-integration-systems.svg',
  'generative-ai': '/images/services/ai-data-integration-systems.svg',
  'machine-learning': '/images/services/ai-data-integration-systems.svg',
  'business-intelligence': '/images/services/ai-data-integration-systems.svg',
  'nlp-automation': '/images/services/ai-data-integration-systems.svg',
  'data-visualization': '/images/services/ai-data-integration-systems.svg',
  'predictive-analysis': '/images/services/ai-data-integration-systems.svg',
};

const categoryImageMap: Record<string, string> = {
  'Application Services': '/images/backgrounds/enterprise-application-services-bg.svg',
  'Product Engineering': '/images/backgrounds/product-engineering-bg.svg',
  'Technology Services': '/images/backgrounds/technology-services-bg.svg',
  'AI & Business Intelligence': '/images/backgrounds/ai-business-intelligence-bg.svg',
};

const iconMap: Record<string, LucideIcon> = {
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
  Lightbulb,
  Palette,
  Zap,
  CheckCircle2,
  GitMerge,
  Terminal,
};

interface ServiceDetailViewProps {
  service: ServiceDetail;
  siblingServices: { title: string; href: string }[];
}

export default function ServiceDetailView({ service, siblingServices }: ServiceDetailViewProps) {
  const IconComponent = iconMap[service.iconName] || Code2;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroImage = serviceSlugImageMap[service.slug] || categoryImageMap[service.category] || '/images/backgrounds/enterprise-application-services-bg.webp';

  const faqs = [
    {
      q: `How does Improx Tech guarantee 100% intellectual property ownership for ${service.title}?`,
      a: `All source code, database schemas, architectural models, and infrastructure-as-code scripts developed by Improx Tech remain your exclusive intellectual property from day one. Our Master Services Agreement (MSA) is governed by Delaware US law with explicit full-assignment clauses, ensuring zero proprietary vendor lock-in or recurring runtime licensing.`
    },
    {
      q: `What is the operational cadence between your Delaware HQ and Pune engineering pods?`,
      a: `Our dual-hub delivery framework provides executive solutions architecture and account governance in Eastern Time (Delaware, USA), while our Pune innovation center provides 24/7 continuous engineering velocity. Sprints are organized in 2-week agile cycles with daily asynchronous updates, live staging deployments, and direct Slack/Teams integration with your core team.`
    },
    {
      q: `How do you handle zero-downtime cutover and migration from legacy systems?`,
      a: `We leverage production-tested patterns such as the Strangler Fig pattern, dual-write event streaming with Apache Kafka, and blue/green Kubernetes cutovers. Production deployments are gated by automated canary routing, allowing us to shift live transaction traffic incrementally while observing error rates and latency SLAs before decommissioning legacy workloads.`
    },
    {
      q: `What automated testing and compliance gates are required before code reaches production?`,
      a: `Every pull request must pass automated SAST/DAST static security analysis, container vulnerability scans, dependency SBOM generation, and end-to-end Playwright regression test suites with a minimum 85% branch coverage. Code merges require peer sign-off and cryptographic commit signing under SOC 2 Type II and ISO 27001 guidelines.`
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= FULL-BLEED HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover object-right"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/95 via-[#000033]/80 to-[#000033]/40" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link href={service.categoryHref} className="hover:text-white transition-colors">
              {service.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#00a3e0] font-medium">{service.title}</span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a3e0] cursor-default">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{service.category} Practice</span>
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule Architectural Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={service.categoryHref}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-[6px] border border-white/30 text-sm transition-all backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4 text-white/80" />
                <span>All {service.category} Disciplines</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ================= KEY STATS BAR ================= */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {service.stats.map((stat) => (
              <div key={stat.label} className="pt-3 sm:pt-0 sm:pl-4 first:pl-0">
                <div className="text-3xl font-extrabold text-[#000033]">{stat.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= MAIN CONTENT & SIDEBAR ================= */}
      <section className="py-20 lg:py-24 max-w-[1440px] mx-auto px-6 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* Architecture & Delivery Approach */}
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-200 text-[11px] font-bold text-[#0033a0] uppercase tracking-wider">
                Engineering Approach
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000033] tracking-tight">
                Architecture, Domain Modeling &amp; Delivery Strategy
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Key Capabilities (Clean Open Architectural List — No Box Fatigue) */}
            <div className="space-y-6 pt-4 border-t border-slate-200">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0] block mb-1">
                  Core Capabilities
                </span>
                <h3 className="text-2xl font-bold text-[#000033]">
                  Technical Specifications &amp; Deliverables
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 pt-2">
                {service.keyCapabilities.map((cap, i) => (
                  <div key={cap.title} className="space-y-2 group">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#0033a0] bg-blue-50/80 border border-blue-200/60 px-2 py-0.5 rounded-[4px] shrink-0">
                        0{i + 1}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                        {cap.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-10">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Lifecycle (Horizontal Connected Stepper — No Box Cards) */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0] block mb-1">
                  Execution Framework
                </span>
                <h3 className="text-2xl font-bold text-[#000033]">
                  Sprint Cadence &amp; Quality Milestones
                </h3>
              </div>

              <div className="relative pt-4">
                {/* Desktop Connecting Flow Line */}
                <div className="hidden md:block absolute top-10 left-6 right-6 h-0.5 bg-slate-200 z-0" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                  {service.workflow.map((item) => (
                    <div key={item.step} className="space-y-3 group">
                      <div className="w-12 h-12 rounded-[6px] bg-[#000033] text-[#00a3e0] flex items-center justify-center font-mono font-bold text-base shadow-xs group-hover:bg-[#0033a0] group-hover:text-white transition-colors">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-gray-900 text-sm group-hover:text-[#0033a0] transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TANGIBLE DELIVERABLES (Clean Divided Spec Matrix — No Floating Boxes) */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0] block mb-1">
                  Tangible Outputs
                </span>
                <h3 className="text-2xl font-bold text-[#000033]">
                  Client Handovers &amp; Production Code Artifacts
                </h3>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-4 group hover:bg-slate-50/70 transition-colors px-3 rounded-[4px]">
                  <div className="w-9 h-9 rounded-[6px] bg-blue-50 text-[#0033a0] flex items-center justify-center shrink-0">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                      Full Source Code &amp; CI/CD Pipelines
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Clean TypeScript / Go / Python codebases with automated GitHub Actions/GitLab CI pipelines, unit test suites, and 100% IP assignment.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-4 group hover:bg-slate-50/70 transition-colors px-3 rounded-[4px]">
                  <div className="w-9 h-9 rounded-[6px] bg-blue-50 text-[#0033a0] flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                      Infrastructure as Code (IaC)
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Reproducible Terraform modules, Kubernetes manifests, and Helm charts configured for multi-region failover on AWS, Azure, or GCP.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-4 group hover:bg-slate-50/70 transition-colors px-3 rounded-[4px]">
                  <div className="w-9 h-9 rounded-[6px] bg-blue-50 text-[#0033a0] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                      Security Audit &amp; SBOM Reports
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Comprehensive static analysis (SAST/DAST) reports, third-party dependency Software Bill of Materials (SBOM), and SOC 2 audit readiness evidence.
                    </p>
                  </div>
                </div>

                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-4 group hover:bg-slate-50/70 transition-colors px-3 rounded-[4px]">
                  <div className="w-9 h-9 rounded-[6px] bg-blue-50 text-[#0033a0] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">
                      SRE Runbooks &amp; Architecture Decision Records
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Exhaustive operational incident runbooks, disaster recovery playbooks, and Architecture Decision Records (ADRs) documenting every design choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FREQUENTLY ASKED TECHNICAL QUESTIONS (Clean Seamless Accordion) */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0] block mb-1">
                  Architecture FAQ
                </span>
                <h3 className="text-2xl font-bold text-[#000033]">
                  Frequently Asked Technical Questions
                </h3>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full py-2 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#000033] hover:text-[#0033a0] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <HelpCircle className="w-4 h-4 text-[#0033a0] shrink-0" />
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-[#0033a0]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="pt-2 pb-3 pl-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sidebar (Streamlined Cohesive Console) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Unified Architectural Console Panel */}
            <div className="rounded-[6px] border border-slate-200 bg-white p-6 space-y-6 shadow-xs divide-y divide-slate-100">
              
              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-bold text-xs tracking-wider uppercase text-[#0033a0]">
                  Technologies &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-[4px] bg-slate-100 text-slate-800 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measurable Benefits */}
              <div className="space-y-3 pt-6">
                <h4 className="font-bold text-xs tracking-wider uppercase text-[#0033a0]">
                  Measurable Business Outcomes
                </h4>
                <ul className="space-y-2.5">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sibling Services Navigation */}
              <div className="space-y-3 pt-6">
                <h4 className="font-bold text-xs tracking-wider uppercase text-slate-500">
                  Related {service.category} Disciplines
                </h4>
                <ul className="space-y-2">
                  {siblingServices.map((sibling) => (
                    <li key={sibling.title}>
                      <Link
                        href={sibling.href}
                        className="flex items-center justify-between text-xs text-slate-700 hover:text-[#0033a0] py-1 transition-colors group"
                      >
                        <span className="truncate">{sibling.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0033a0] group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contractual Guarantee */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#0033a0]" />
                  <span>Delaware Corporate Governance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  US MSA governance, Delaware legal protection, and 100% intellectual property ownership assignment.
                </p>
              </div>

            </div>

            {/* Direct Action Card */}
            <div className="p-7 rounded-[6px] bg-[#000033] text-white space-y-3">
              <h4 className="text-base font-bold text-white">Need Architectural Scoping?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our senior technical leads to review your requirements and receive a structured delivery roadmap.
              </p>
              <Link
                href="/contact"
                className="block text-center w-full bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold py-3 rounded-[6px] text-xs transition-colors shadow-sm"
              >
                Schedule Architecture Call
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ================= ENGINEERING INSIGHTS & KNOWLEDGE HUB SECTION ================= */}
      <EngineeringBlogSection 
        filterCategory={service.category} 
        title={`Related ${service.category} Research & Whitepapers`}
        subtitle={`Production case studies, technical teardowns, and engineering insights curated for ${service.title} leaders.`}
      />

    </div>
  );
}
