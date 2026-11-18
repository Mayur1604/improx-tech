'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Server,
  Database,
  Sparkles,
  Clock,
  ChevronRight,
  Layers,
  Search,
  Compass,
  Code,
  Rocket,
  Building2,
  MapPin,
  Mail,
  Phone,
  Activity,
  Terminal,
  Check,
  Globe,
} from 'lucide-react';
import { company } from '../data/company';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.73-1.66-1.65-1.66Z" />
    </svg>
  );
}

// 4 Streamlined Capabilities
const CAPABILITIES = [
  {
    id: 'app-services',
    title: 'Application Services & Scalable SaaS',
    tag: 'PLATFORMS & APIS',
    icon: Layers,
    lead: 'Bespoke high-concurrency business platforms, multi-tenant cloud architectures, and decoupled microservices.',
    deliverables: [
      'Multi-tenant SaaS with isolated schemas & automated provisioning',
      'High-throughput REST and GraphQL API gateways',
      'Legacy monolith refactoring via Strangler-Fig patterns',
      'Reactive web applications in Next.js, React & TypeScript',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'GraphQL'],
  },
  {
    id: 'cloud-sre',
    title: 'Cloud Infrastructure & SRE',
    tag: 'DEVOPS & MULTI-CLOUD',
    icon: Server,
    lead: 'Multi-region cloud foundations engineered with Terraform IaC, Kubernetes clusters, and zero-downtime deployment pipelines.',
    deliverables: [
      'Multi-cloud architectures across AWS, GCP, and Azure',
      'Kubernetes orchestration & automated container scaling',
      'Infrastructure as Code (Terraform) for audit-ready environments',
      '24/7 telemetry, observability, and SLA incident response',
    ],
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus'],
  },
  {
    id: 'data-pipelines',
    title: 'Data Systems & Streaming Pipelines',
    tag: 'REAL-TIME DATA',
    icon: Database,
    lead: 'High-throughput transactional schemas, event-driven streaming with Apache Kafka, and ultra-low-latency caching.',
    deliverables: [
      'PostgreSQL & MySQL distributed schema modeling',
      'Event streaming & message brokering with Apache Kafka',
      'Sub-millisecond session state and caching with Redis',
      'Real-time analytics and ETL transformation pipelines',
    ],
    tech: ['PostgreSQL', 'Kafka', 'Redis', 'ClickHouse', 'Python'],
  },
  {
    id: 'ai-intelligence',
    title: 'Applied AI & Decision Intelligence',
    tag: 'ENTERPRISE AI',
    icon: Sparkles,
    lead: 'Production-grade RAG architectures, private enterprise LLM pipelines, and automated agentic decision engines.',
    deliverables: [
      'Retrieval-Augmented Generation (RAG) over internal corpora',
      'Private enterprise model deployment with strict data isolation',
      'Intelligent operational workflow automation & OCR parsing',
      'Semantic search and vector database infrastructure',
    ],
    tech: ['Python', 'LangChain', 'Vector DBs', 'PyTorch', 'Claude API'],
  },
];

// 3 Metric-Backed Case Studies
type CaseStudyId = 'fintech' | 'saas' | 'healthtech';

interface CaseStudy {
  id: CaseStudyId;
  domain: string;
  title: string;
  metric: string;
  metricHighlight: string;
  metricBadge: string;
  context: string;
  constraint: string;
  solution: string;
  technologies: string[];
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech',
    domain: 'Financial Services & Capital Markets',
    title: 'Core Banking Clearing & Settlement Gateway',
    metric: 'p95 Latency: 1.8s → 240ms',
    metricHighlight: '-86% Latency',
    metricBadge: 'Zero Dropped Transactions',
    context: 'High-frequency transactional clearing gateway serving institutional brokerages under strict regulatory mandates.',
    constraint: 'Legacy monolithic architecture experienced execution stalls and database lock contention during high-volatility market open sessions.',
    solution: 'Decomposed critical transaction path into decoupled Go microservices backed by Redis Cluster distributed locks and Kafka event buffering.',
    technologies: ['Go', 'Apache Kafka', 'Redis Cluster', 'PostgreSQL', 'AWS'],
    image: '/images/projects/fintech-trading.webp',
  },
  {
    id: 'saas',
    domain: 'Enterprise Cloud SaaS',
    title: 'Multi-Tenant B2B Workflow & Billing Platform',
    metric: 'Cloud Spend: -38% YoY',
    metricHighlight: '-38% Compute Spend',
    metricBadge: '140+ Enterprise Tenants',
    context: 'Rapidly scaling enterprise workflow platform serving Fortune 500 accounts across North America and Europe.',
    constraint: 'Discrete single-tenant server deployments caused explosive cloud infrastructure costs and 4-hour manual provisioning bottlenecks.',
    solution: 'Engineered a unified multi-tenant architecture with PostgreSQL schema partitioning, automated tenant orchestration, and Kubernetes pod autoscaling.',
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'Kubernetes', 'Docker', 'AWS'],
    image: '/images/projects/enterprise-saas.webp',
  },
  {
    id: 'healthtech',
    domain: 'Regulated Healthcare & Life Sciences',
    title: 'FHIR Interoperability & Clinical Records Gateway',
    metric: 'Release Cadence: 3 weeks → 2 days',
    metricHighlight: '10x Faster Releases',
    metricBadge: 'HIPAA & SOC 2 Ready',
    context: 'Clinical healthcare provider network aggregating patient records across 18 regional hospital EHR systems.',
    constraint: 'Stringent HIPAA data compliance checks and manual regression audits paralyzed weekly feature deployments.',
    solution: 'Constructed an automated CI/CD pipeline with static AST compliance scanners, end-to-end KMS payload encryption, and FHIR v4 API gateways.',
    technologies: ['TypeScript', 'FHIR API', 'PostgreSQL', 'AWS KMS', 'Docker'],
    image: '/images/projects/healthcare-cloud.webp',
  },
];

// 4-Stage Delivery Process
const PROCESS_STAGES = [
  {
    step: '01',
    name: 'Discover & Scope',
    timeframe: 'Weeks 1–2',
    icon: Search,
    summary: 'Deep-dive architectural audit, threat modeling, and fixed SLA roadmap.',
    deliverables: [
      'Comprehensive system architecture audit & technical debt matrix',
      'API contract definitions & data dictionary schemas',
      'Sprint velocity schedule with guaranteed SLAs',
    ],
  },
  {
    step: '02',
    name: 'Architect & Contract',
    timeframe: 'Weeks 2–3',
    icon: Compass,
    summary: 'Formalize data models, cloud infrastructure topology, and security guardrails.',
    deliverables: [
      'Terraform IaC blueprints for reproducible staging and production',
      'OpenAPI 3.1 specifications and mutual schema contracts',
      'SOC 2 and HIPAA security compliance baselines',
    ],
  },
  {
    step: '03',
    name: 'Embedded Pod Sprints',
    timeframe: 'Weeks 4–12',
    icon: Code,
    summary: 'Senior engineers embedded into your Jira/Slack cadences with daily PR reviews.',
    deliverables: [
      'Bi-weekly sprint demos with deployable production increments',
      'Direct engineer-to-engineer pairing without account-manager lag',
      'Continuous automated testing with >85% unit and integration coverage',
    ],
  },
  {
    step: '04',
    name: 'Zero-Downtime Deploy & SRE',
    timeframe: 'Production Cutover',
    icon: Rocket,
    summary: 'Blue/green cutovers, 24/7 observability instrumentation, and knowledge handover.',
    deliverables: [
      'Zero-downtime blue/green or canary production cutovers',
      'Prometheus and Grafana telemetry dashboards with alerting thresholds',
      'Full source code repository handover with 100% client IP ownership',
    ],
  },
];

// Engineering Leadership & Pod Leads
const TEAM_MEMBERS = [
  {
    name: 'Vikram Patil',
    role: 'Principal Solutions Architect',
    experience: '12+ years in Distributed Systems & FinTech Infra',
    focus: 'Microservices, Go, Kafka streaming, low-latency transaction clearing',
    avatar: 'VP',
    linkedin: 'https://linkedin.com/company/improxtech',
  },
  {
    name: 'Rajesh Deshmukh',
    role: 'Director of Cloud Infrastructure & SRE',
    experience: '11+ years in Cloud Systems & Reliability',
    focus: 'AWS Certified Solutions Architect, Kubernetes, Terraform IaC, SOC 2 compliance',
    avatar: 'RD',
    linkedin: 'https://linkedin.com/company/improxtech',
  },
  {
    name: 'Ananya Joshi',
    role: 'Head of Enterprise Engineering',
    experience: '10+ years in Scalable SaaS Platforms',
    focus: 'TypeScript, Next.js, multi-tenant databases, API governance & architecture',
    avatar: 'AJ',
    linkedin: 'https://linkedin.com/company/improxtech',
  },
  {
    name: 'Amit Kulkarni',
    role: 'Principal Data & AI Consultant',
    experience: '9+ years in Data Pipelines & Machine Learning',
    focus: 'RAG systems, vector embeddings, Apache Kafka, PostgreSQL schema optimization',
    avatar: 'AK',
    linkedin: 'https://linkedin.com/company/improxtech',
  },
];

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<CaseStudyId>('fintech');
  const [activeStage, setActiveStage] = useState(0);
  const [contactSubject, setContactSubject] = useState('Modernization / Cloud Engineering');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0033a0] selection:text-white pb-20 md:pb-0">
      
      {/* ============================================================ */}
      {/* 0. INTERACTIVE DEMO NOTICE BANNER (TOP STICKY)                */}
      {/* ============================================================ */}
      <aside aria-label="Demo notice banner" className="sticky top-0 z-50 bg-[#000033] text-white border-b border-white/15 shadow-md px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#00a3e0]/20 text-[#00a3e0] font-mono font-bold uppercase tracking-wider text-[11px] border border-[#00a3e0]/30">
              <Sparkles className="w-3 h-3" />
              Demo Preview
            </span>
            <span className="text-slate-300">
              <strong className="text-white">Proposed $10M Enterprise Architecture Redesign</strong> (Social proof, hard metrics, leadership team, streamlined 4 capabilities).
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-slate-400 font-mono text-[11px]">
              Live production code at &apos;/&apos; is untouched
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20"
            >
              <span>← View Current Live Homepage</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* 1. HERO SECTION (Punchy H1, Unified CTA, 2x Visual)          */}
      {/* ============================================================ */}
      <section id="hero" className="relative bg-[#000033] text-white overflow-hidden border-b border-slate-200">
        {/* Subtle Ambient Corporate Grid Background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#00a3e0_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000033] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Monospace Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#0033a0]/30 border border-[#0033a0]/60 text-[#00a3e0] text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00a3e0] animate-pulse" />
                Enterprise Software &amp; Cloud Modernisation · Est. 2015
              </div>

              {/* Punchy, Non-Generic H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.12]">
                We architect and modernise the software regulated businesses run on.
              </h1>

              {/* Clear, Unambiguous Subhead */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Senior engineering pods embedded directly into your technical teams. Contracted in Delaware, engineered from Pune. Zero vendor lock-in, pure technical execution.
              </p>

              {/* Unified CTA & Proof Metric */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-8 py-4 rounded-[6px] text-sm transition-all inline-flex items-center gap-2 shadow-lg ring-2 ring-[#0033a0]/40 group"
                  >
                    <span>Book a Technical Call</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#case-studies"
                    className="bg-white/10 hover:bg-white/15 text-white font-medium px-7 py-4 rounded-[6px] border border-white/20 text-sm transition-all inline-flex items-center gap-2 backdrop-blur-xs"
                  >
                    <span>View Case Studies</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Direct engineer-to-engineer scoping
                  </span>
                  <span className="hidden sm:inline text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Reply within 1 business day
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: 2x Crisp High-Definition Architecture Visual with Telemetry Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[8px] overflow-hidden border border-white/20 shadow-2xl bg-[#000028]">
                
                {/* 2x Crisp Image container */}
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/hero/hero-software-engineering.webp"
                    alt="Senior engineering pods architecting distributed cloud systems"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center filter contrast-110 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000028] via-[#000028]/40 to-transparent" />
                </div>

                {/* Floating Metric Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#000033]/90 backdrop-blur-md border border-white/15 rounded-[6px] p-4 text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] pb-1 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
                      POD TELEMETRY ACTIVE
                    </span>
                    <span>AWS · US-EAST &amp; AP-SOUTH</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
                    <div className="p-1.5 rounded-[4px] bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase">p95 Latency</div>
                      <div className="text-sm font-bold text-white">240 ms</div>
                    </div>
                    <div className="p-1.5 rounded-[4px] bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase">Uptime SLA</div>
                      <div className="text-sm font-bold text-emerald-400">99.99%</div>
                    </div>
                    <div className="p-1.5 rounded-[4px] bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400 uppercase">Code Ownership</div>
                      <div className="text-sm font-bold text-sky-400">100% Client</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. PROOF & ECOSYSTEM BAR (Directly under Hero as in audit)    */}
        {/* ============================================================ */}
        <div id="proof" className="bg-[#000028] border-t border-white/10 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
              Ecosystem &amp; Production Standards:
            </div>

            {/* Muted Grayscale Partner/Tech Indicators (at 60% opacity) */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-xs font-mono font-semibold">
              <span className="hover:text-white transition-colors flex items-center gap-1.5">
                <Server className="w-4 h-4 text-[#00a3e0]" /> AWS Advanced Architecture
              </span>
              <span className="hover:text-white transition-colors flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#00a3e0]" /> Google Cloud Platform
              </span>
              <span className="hover:text-white transition-colors flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#00a3e0]" /> Kubernetes Certified
              </span>
              <span className="hover:text-white transition-colors flex items-center gap-1.5">
                <Database className="w-4 h-4 text-[#00a3e0]" /> PostgreSQL &amp; Kafka
              </span>
              <span className="hover:text-white transition-colors flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" /> SOC 2 / HIPAA Protocols
              </span>
            </div>

            {/* Trust Counters */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 border-t md:border-t-0 md:border-l border-white/15 pt-3 md:pt-0 md:pl-6">
              <div>
                <span className="text-white font-bold">11+</span> Yrs Track Record
              </div>
              <span className="text-slate-600">|</span>
              <div>
                <span className="text-white font-bold">40+</span> Engineers
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. STREAMLINED 4 CORE CAPABILITIES (No 12+ fragmented cards) */}
      {/* ============================================================ */}
      <section id="capabilities" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0033a0] mb-2">
                Core Engineering Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Architected for high throughput, security, and continuous delivery.
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              We focus strictly on four technical disciplines. No bloated generalist agencies — only specialized engineering pods with direct technical leadership.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-white border border-slate-200 rounded-[6px] p-8 hover:border-[#0033a0]/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-[6px] bg-[#0033a0]/10 flex items-center justify-center text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-[4px]">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cap.lead}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                        Typical Deliverables:
                      </div>
                      <ul className="space-y-1.5">
                        {cap.deliverables.map((del, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[4px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="text-xs font-semibold text-[#0033a0] hover:text-[#00287a] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Scope Pod <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PROVEN CASE STUDIES ("The Numbers" as requested in P0)     */}
      {/* ============================================================ */}
      <section id="case-studies" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0033a0] mb-2">
              Demonstrated Production Outcomes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              The numbers that matter. Real architectures, measurable impact.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We measure engineering quality in p95 latency reductions, cloud cost optimization, and zero-downtime cutovers — not lines of code.
            </p>
          </div>

          {/* Interactive Case Study Selector Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-slate-200 pb-4">
            {CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-4 py-2.5 rounded-[6px] text-xs font-mono font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === c.id
                    ? 'bg-[#000033] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{c.domain}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-[4px] ${
                    activeTab === c.id ? 'bg-[#00a3e0] text-[#000033] font-bold' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {c.metricHighlight}
                </span>
              </button>
            ))}
          </div>

          {/* Active Case Study Detailed Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-[8px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold text-[#0033a0] bg-[#0033a0]/10 px-2.5 py-1 rounded-[4px]">
                  {activeCase.domain}
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-[4px] flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeCase.metricBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {activeCase.title}
              </h3>

              {/* Big Tangible Metric Callout */}
              <div className="bg-white border-l-4 border-[#0033a0] border-y border-r border-slate-200 p-4 rounded-r-[6px]">
                <div className="text-xs font-mono uppercase text-slate-500 font-medium">Verified Performance Metric:</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#000033] mt-1">
                  {activeCase.metric}
                </div>
              </div>

              {/* Problem / Constraint / Solution Breakdown */}
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-slate-500 mb-1">
                    01. Context &amp; Business Goal
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{activeCase.context}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-red-600 mb-1">
                    02. Technical Bottleneck
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{activeCase.constraint}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-emerald-600 mb-1">
                    03. Architecture Solution
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{activeCase.solution}</p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-mono text-slate-500 mb-2">Deployed Architecture Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {activeCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono bg-white border border-slate-200 text-slate-800 px-2.5 py-1 rounded-[4px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative bg-[#000028] min-h-[300px] lg:min-h-full">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center filter brightness-95 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000028] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[6px] bg-[#000033]/90 border border-white/15 text-white backdrop-blur-md">
                <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> PRODUCTION VERIFIED
                </div>
                <div className="text-xs text-slate-200">
                  Built by Improx Tech dedicated pod with direct client engineering collaboration.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. HOW WE WORK (4-Stage Sprint Lifecycle)                    */}
      {/* ============================================================ */}
      <section id="process" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0033a0] mb-2">
              Engineering Delivery Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Predictable 2-week cadences from architecture to deployment.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We eliminate technical ambiguity with upfront schema contracts, automated CI/CD pipelines, and direct engineer-to-engineer communication.
            </p>
          </div>

          {/* 4 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`bg-white rounded-[6px] p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#0033a0] ring-2 ring-[#0033a0]/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-[#0033a0]">
                        {stage.step}
                      </span>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[4px]">
                        {stage.timeframe}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[#0033a0]" />
                        <h3 className="text-lg font-bold text-slate-900">{stage.name}</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{stage.summary}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-400">
                        Key Deliverables:
                      </div>
                      {stage.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-[#0033a0] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-[#0033a0] font-semibold flex items-center gap-1">
                    <span>{isSelected ? 'Active Phase' : 'View Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. LEADERSHIP & DELIVERY MODEL ("Who You'll Work With")      */}
      {/* ============================================================ */}
      <section id="team" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0033a0] mb-2">
              Senior Leadership &amp; Pod Directors
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Real people. Proven experience. Direct technical access.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When you engage Improx Tech, you work directly with named senior practitioners who write code and review pull requests — not sales reps.
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 border border-slate-200 rounded-[6px] p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Avatar & LinkedIn */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-full bg-[#000033] text-white flex items-center justify-center font-mono font-bold text-lg border-2 border-[#00a3e0]/40">
                      {member.avatar}
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0033a0] hover:border-[#0033a0] flex items-center justify-center transition-colors"
                      title={`${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                    <div className="text-xs font-mono text-[#0033a0] font-semibold mt-0.5">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {member.experience}
                  </p>

                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">Expertise:</span>
                    {member.focus}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-emerald-700 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Available for technical discovery
                </div>
              </div>
            ))}
          </div>

          {/* ============================================================ */}
          {/* DUAL-HUB TRANSPARENCY CARD (As recommended in P1)            */}
          {/* ============================================================ */}
          <div className="bg-[#000033] text-white rounded-[8px] p-8 lg:p-10 border border-white/10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a3e0] bg-[#00a3e0]/10 px-2.5 py-1 rounded-[4px] border border-[#00a3e0]/30 inline-block">
                  Dual-Hub Contracting &amp; Delivery Model
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Contracted in Delaware, USA. Engineered from Pune, India.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We combine the legal certainty of US domestic contracting with the deep engineering horsepower of our wholly-owned Pune development facility.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Delaware Box */}
                <div className="bg-white/5 border border-white/15 rounded-[6px] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00a3e0] font-bold uppercase">
                    <Building2 className="w-4 h-4" /> US Registered Office
                  </div>
                  <div className="text-sm font-semibold text-white">Improx Tech LLC</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    16192 Coastal Highway, Lewes, DE 19958, United States
                  </p>
                  <ul className="text-xs text-slate-400 pt-2 border-t border-white/10 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Delaware Governing Law
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> US Bank ACH / Wire Invoicing
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Complete IP &amp; Code Escrow
                    </li>
                  </ul>
                </div>

                {/* Pune Box */}
                <div className="bg-white/5 border border-white/15 rounded-[6px] p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00a3e0] font-bold uppercase">
                    <MapPin className="w-4 h-4" /> India Engineering Center
                  </div>
                  <div className="text-sm font-semibold text-white">Pune R&amp;D Facility</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    Maruti Millennium Tower, Baner Annex, Baner, Pune 411045
                  </p>
                  <ul className="text-xs text-slate-400 pt-2 border-t border-white/10 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> 40+ Senior Full-Time Engineers
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Dedicated High-Security Facility
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Direct Slack/Teams Integration
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CONVERSION & CONTACT DESK (Guaranteed 1-day SLA)          */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Guarantees & Booking details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#0033a0]/10 text-[#0033a0] text-xs font-mono font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Guaranteed 1 Business Day Reply
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Book a 20-Minute Technical Call with an Architect.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                No salespeople. No generic qualification scripts. You will speak directly with a senior engineer who understands distributed systems, cloud migrations, and security compliance.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[#0033a0]/10 text-[#0033a0] flex items-center justify-center shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">What happens on this call:</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We review your current technical architecture, timeline constraints, team topology, and provide an initial feasibility assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[4px] bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">NDA &amp; Confidentiality:</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      We routinely execute mutual non-disclosure agreements prior to reviewing proprietary codebases or infrastructure diagrams.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="pt-6 border-t border-slate-200 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#0033a0]" />
                  <span>Direct Desk:</span>
                  <a href={`mailto:${company.email}`} className="text-[#0033a0] hover:underline font-bold">
                    {company.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#0033a0]" />
                  <span>US Phone:</span>
                  <a href={`tel:${company.phone}`} className="text-[#0033a0] hover:underline font-bold">
                    {company.formattedPhone}
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Scoping Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[8px] p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Technical Inquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. A principal architect will review your project requirements and reply within 1 business day.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-[6px] bg-[#0033a0] text-white text-xs font-mono font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">Direct Engineering Scoping Form</h3>
                    <p className="text-xs text-slate-500">Provide high-level context so we can prepare before the call.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold uppercase text-slate-600 block">
                      Select Primary Discipline:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Application SaaS', 'Cloud & SRE', 'Data & Kafka', 'Applied AI'].map((disc) => (
                        <button
                          type="button"
                          key={disc}
                          onClick={() => setContactSubject(disc)}
                          className={`px-3 py-2 rounded-[4px] text-xs font-mono transition-all text-center cursor-pointer ${
                            contactSubject === disc
                              ? 'bg-[#000033] text-white font-bold'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {disc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full text-xs font-sans px-3.5 py-2.5 border border-slate-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0033a0]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 block mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className="w-full text-xs font-sans px-3.5 py-2.5 border border-slate-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0033a0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 block mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Health"
                        className="w-full text-xs font-sans px-3.5 py-2.5 border border-slate-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0033a0]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-700 block mb-1">
                        Target Timeline
                      </label>
                      <select className="w-full text-xs font-sans px-3.5 py-2.5 border border-slate-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] bg-white">
                        <option>Immediate (Within 2 weeks)</option>
                        <option>Next Quarter (1–3 months)</option>
                        <option>Exploratory Architecture Review</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-700 block mb-1">
                      Technical Challenges &amp; Project Summary *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your current system, tech stack, scalability bottlenecks, or upcoming project scope..."
                      className="w-full text-xs font-sans p-3.5 border border-slate-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#0033a0]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0033a0] hover:bg-[#00287a] text-white font-medium py-3.5 px-6 rounded-[6px] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Request Technical Discovery Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    Protected by mutual confidentiality. Reply guaranteed within 1 business day.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. STICKY MOBILE BOTTOM CTA BAR (Explicitly noted in audit)  */}
      {/* ============================================================ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#000033] border-t border-white/20 p-3 sm:hidden shadow-2xl flex items-center justify-between">
        <div className="text-left">
          <div className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            1-Day Reply Guarantee
          </div>
          <div className="text-xs text-white font-semibold">Talk to an Architect</div>
        </div>

        <a
          href="#contact"
          className="bg-[#0033a0] hover:bg-[#00287a] text-white text-xs font-mono font-bold px-4 py-2.5 rounded-[4px] flex items-center gap-1.5 shadow"
        >
          <span>Book Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
