import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, Zap, ShieldCheck, Radio } from 'lucide-react';

interface SuccessStory {
  title: string;
  domain: string;
  metric: string;
  metricLabel: string;
  icon: typeof Layers;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
  imageAlt: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: 'Enterprise Multi-Tenant SaaS Platform Architecture',
    domain: 'Enterprise Technology & Cloud SaaS',
    metric: '60% Lower Infra Costs',
    metricLabel: 'Consolidated Schema Isolation',
    icon: Layers,
    challenge: 'Fragmented single-tenant deployments created unsustainable maintenance overhead and slow release cycles across customer tiers.',
    solution: 'Engineered a scalable multi-tenant architecture with automated tenant onboarding, isolated PostgreSQL schemas, and unified telemetry.',
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    image: '/images/projects/enterprise-saas.webp',
    imageAlt: 'Enterprise SaaS architecture and application management dashboard',
  },
  {
    title: 'High-Throughput Financial Transaction & Order Gateway',
    domain: 'Capital Markets & Financial Services',
    metric: '<15ms P99 Latency',
    metricLabel: 'Zero Dropped Orders Under Surge',
    icon: Zap,
    challenge: 'Legacy transaction pipeline choked under volatility surges, lacking automated circuit breaking and distributed failover.',
    solution: 'Constructed an event-driven Go microservices gateway with Kafka streaming buffers, Redis caching, and continuous database replication.',
    technologies: ['Go', 'Python', 'Redis Cluster', 'Kafka', 'Docker', 'AWS'],
    image: '/images/projects/fintech-trading.webp',
    imageAlt: 'Financial transaction telemetry and high-concurrency order dashboard',
  },
  {
    title: 'Healthcare Interoperability & FHIR Cloud Gateway',
    domain: 'Healthcare & Life Sciences',
    metric: '100% Audit Compliance',
    metricLabel: 'HIPAA & FHIR Standardized',
    icon: ShieldCheck,
    challenge: 'Disconnected clinical systems and proprietary EHR silos prevented real-time electronic health records exchange.',
    solution: 'Engineered a secure FHIR API gateway with payload-level encryption, immutable audit logging, and granular patient consent controls.',
    technologies: ['TypeScript', 'Node.js', 'FHIR API', 'PostgreSQL', 'AWS KMS'],
    image: '/images/projects/healthcare-cloud.webp',
    imageAlt: 'Healthcare cloud data integration and FHIR records interface',
  },
  {
    title: 'Industrial IoT & Supply Chain Telemetry Gateway',
    domain: 'Manufacturing & Smart Logistics',
    metric: '500K+ Events / Sec',
    metricLabel: 'Sub-Second Anomaly Detection',
    icon: Radio,
    challenge: 'High-velocity sensory telemetry overwhelmed legacy operational warehouses, resulting in delayed equipment failure alerts.',
    solution: 'Deployed edge MQTT brokers with Kafka stream ingestion and real-time anomaly detection pipelines streaming into operational cockpits.',
    technologies: ['Go', 'Kafka', 'ClickHouse', 'Docker', 'Kubernetes'],
    image: '/images/projects/supplychain-iot.webp',
    imageAlt: 'IoT supply chain telemetry analytics cockpit and fleet monitoring',
  },
];

export default function ProjectShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Tech Mahindra Success Stories styling) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
              <p className="text-xs uppercase tracking-wider font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors cursor-default">
                Success Stories &amp; Case Studies
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Measurable engineering outcomes delivered for enterprise production.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Real-world systems engineered by our pods to solve high-concurrency, security, and scalability bottlenecks with 100% intellectual property handover.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
            >
              <span>Discuss your system architecture</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 2-Column Tech Mahindra Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;

            return (
              <div
                key={story.title}
                className="group flex flex-col bg-white rounded-[8px] border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0033a0]/50 transition-all duration-300 ease-out"
              >
                {/* Media-First Viewport with Floating Metric Callout */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />



                  {/* Prominent High-Impact Metric Badge (Tech Mahindra Success Story signature) */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                    <div className="p-2.5 rounded-[6px] bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{story.metric}</div>
                        <div className="text-[10px] font-medium text-slate-500">{story.metricLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0033a0]">
                      <Icon className="w-3.5 h-3.5 text-[#00a3e0]" />
                      <span>{story.domain}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors duration-200 leading-snug">
                      {story.title}
                    </h3>

                    {/* Challenge vs Solution structured comparison */}
                    <div className="space-y-2 pt-1 text-xs">
                      <div className="p-3 rounded-[6px] bg-slate-50 border border-slate-200/80 space-y-1">
                        <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block">
                          The Challenge:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {story.challenge}
                        </p>
                      </div>

                      <div className="p-3 rounded-[6px] bg-blue-50/50 border border-blue-100 space-y-1">
                        <span className="font-bold text-[#0033a0] uppercase tracking-wider text-[10px] block flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#0033a0]" />
                          <span>Engineering Solution:</span>
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {story.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                        Production Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {story.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-slate-100 text-slate-600 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Action Anchor */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0033a0]">
                    <Link
                      href="/contact"
                      className="hover:underline flex items-center gap-1.5"
                    >
                      <span>Explore Engineering Blueprint</span>
                    </Link>
                    <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-[#0033a0] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
