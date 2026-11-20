'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Cpu, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { technologyServicesList } from '../data/servicesData';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';

const iconMap = {
  Cloud,
  ShieldCheck,
  Layers,
  Building2,
  Cpu,
};

export default function TechnologyServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cloudFaqs = [
    {
      q: 'How does Improx Tech guarantee zero customer downtime during monolithic database migrations to AWS Aurora?',
      a: 'We deploy the Strangler Fig pattern paired with bidirectional Change Data Capture (CDC) replication. Real-time data streams are maintained between the on-premise relational database and the AWS Aurora cluster. Once data consistency is verified via automated checksums, we perform canary DNS traffic shifts with automated rollback readiness, ensuring zero service disruption.'
    },
    {
      q: 'What cloud security and compliance benchmarks do your Terraform landing zones adhere to?',
      a: 'All infrastructure-as-code landing zones are architected according to industry security standards and cloud provider best practices. We enforce policy gatekeeper rules, encrypted EBS/S3 storage with AWS KMS customer-managed keys (CMK), and segmented VPC architectures with transit gateway inspection.'
    },
    {
      q: 'How do you measure and reduce multi-cloud spend through FinOps?',
      a: 'We implement automated tagging taxonomies, right-sizing algorithms for container pods, dynamic auto-scaling policies, and database idle-pause configurations to optimize cloud compute usage and eliminate wasted resources.'
    },
    {
      q: 'What does your Site Reliability Engineering (SRE) support include?',
      a: 'Our engineering pods provide telemetry monitoring across modern observability stacks, structured response protocols for critical production incidents, automated backups, routine security patching, cluster upgrades, and disaster recovery drill simulations.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= FULL-BLEED SVG HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed SVG background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/technology-services-bg.webp"
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
            <span className="text-[#00a3e0] font-medium">Technology Services</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] inline-block">
              Cloud Modernization &amp; Infrastructure Architecture
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Technology Services
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Accelerate cloud modernization across AWS and Azure, automate DevSecOps delivery pipelines, architect resilient data lakes, and secure infrastructure with zero-trust protocols.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              We help enterprises modernize legacy hardware, eliminate technical debt, optimize multi-cloud spend through FinOps, and ensure 24/7 high-availability across global operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Schedule Cloud Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ai-bi"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-[6px] border border-white/30 text-sm transition-all"
              >
                <span>Explore AI &amp; BI</span>
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
              <div className="text-2xl font-bold text-[#000033]">Multi-Region</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Fault-Tolerant Topology</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-3xl font-extrabold text-[#0033a0]">Zero</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Downtime Cutover</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#00a3e0]">Optimized</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Resource &amp; Cost Efficiency</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-8">
              <div className="text-2xl font-bold text-[#000033]">Telemetry</div><div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">System Observability</div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= 6 TECHNOLOGY DISCIPLINES (SHARP CARDS) ================= */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Capabilities Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Our 6 Technology Disciplines
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Select any discipline to review specialized technical toolchains, architecture blueprints, and service level agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyServicesList.map((service) => {
              const Icon = iconMap[service.iconName as keyof typeof iconMap] || Cloud;
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
                    href={`/technology-services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full py-3 px-4 rounded-[6px] bg-[#f8fafd] hover:bg-[#0033a0] text-gray-800 hover:text-white text-xs font-semibold transition-all mt-auto border border-slate-200 group"
                  >
                    <span>View Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================= CLOUD MIGRATION FRAMEWORK ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Migration Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              The 4-Pillar Cloud Migration Framework
            </h2>
            <p className="text-gray-600 text-base mt-2">
              How our certified AWS &amp; Azure architects transition complex enterprise workloads with zero data loss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#0033a0] pt-5 space-y-2 group">
              <span className="text-xs font-mono text-[#0033a0] font-bold block">01 / AUDIT &amp; FINOPS</span>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">Workload Profiling</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Inventorying dependencies, network throughput, and establishing TCO cost models.</p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-5 space-y-2 group">
              <span className="text-xs font-mono text-[#0033a0] font-bold block">02 / FOUNDATION</span>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">Landing Zone Setup</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Terraform IaC deployment of VPCs, IAM boundary policies, transit gateways, and KMS keys.</p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-5 space-y-2 group">
              <span className="text-xs font-mono text-[#0033a0] font-bold block">03 / DUAL-WRITE</span>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">Replication &amp; Cutover</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Continuous CDC database synchronization, canary traffic shifting, and verified cutover.</p>
            </div>

            <div className="border-t-2 border-[#0033a0] pt-5 space-y-2 group">
              <span className="text-xs font-mono text-[#0033a0] font-bold block">04 / OPTIMIZATION</span>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors">24/7 Managed SRE</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Datadog/Prometheus monitoring, automated cluster autoscaling, and quarterly FinOps audits.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 bg-[#f8fafd] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0033a0]">
              Cloud Architecture FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000033] mt-2">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Key operational, security, and migration questions answered by our principal cloud architects.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {cloudFaqs.map((faq, idx) => {
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
        filterCategory="Cloud Engineering"
        title="Cloud Architecture & Infrastructure Insights"
        subtitle="Analyses of the Strangler Fig pattern, shift-left DevSecOps security gates, multi-region Kubernetes, and enterprise cloud migration."
      />


      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#000033] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Accelerate Your Cloud Modernization?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Connect with our cloud solutions engineers for an initial workload discovery and architecture review.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md"
            >
              <span>Schedule Cloud Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
