import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';

const SHOWCASES = [
  {
    title: 'Enterprise Multi-Tenant SaaS Platform',
    domain: 'Enterprise Technology & Cloud SaaS',
    icon: Layers,
    problem:
      'Fragmented single-tenant instances created high maintenance costs, slow feature release cycles, and inconsistent operational reliability across customer accounts.',
    solution:
      'Engineered a scalable multi-tenant architecture with isolated database schemas, automated tenant provisioning, role-based access control, and centralized observability.',
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    image: '/images/projects/enterprise-saas.webp',
    imageAlt: 'Enterprise SaaS architecture and application management dashboard',
  },
  {
    title: 'High-Throughput Financial Transaction Gateway',
    domain: 'Financial Services & Capital Markets',
    icon: Zap,
    problem:
      'Legacy transaction pipelines experienced execution latency during market surges, lacking automated circuit breaking and horizontal failover.',
    solution:
      'Architected a decoupled microservices gateway with in-memory caching, Kafka event buffering, automated circuit breakers, and low-latency database replication.',
    technologies: ['Go', 'Python', 'Redis Cluster', 'Kafka', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/images/projects/fintech-trading.webp',
    imageAlt: 'Financial transaction telemetry and high-concurrency order dashboard',
  },
  {
    title: 'Healthcare Interoperability & FHIR Cloud Gateway',
    domain: 'Healthcare & Life Sciences',
    icon: ShieldCheck,
    problem:
      'Disconnected clinical systems and proprietary data formats prevented real-time electronic record synchronization between healthcare providers and patient portals.',
    solution:
      'Constructed a standardized FHIR API integration gateway with end-to-end payload encryption, granular consent management, and immutable audit logs.',
    technologies: ['TypeScript', 'Node.js', 'FHIR API', 'PostgreSQL', 'AWS KMS', 'Docker'],
    image: '/images/projects/healthcare-cloud.webp',
    imageAlt: 'Healthcare cloud data integration and FHIR records interface',
  },
];

export default function ProjectShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-3 inline-block">
            Engineering Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Demonstrated engineering across complex business domains.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Illustrative production architectures and technical frameworks developed by our engineering pods to solve challenging enterprise requirements.
          </p>
        </div>

        {/* Alternating Project Showcases */}
        <div className="space-y-16">
          {SHOWCASES.map((project, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={project.title}
                className="bg-white border border-slate-200 rounded-[6px] overflow-hidden card-hover grid grid-cols-1 lg:grid-cols-12 shadow-sm"
              >
                {/* Visual Viewport */}
                <div
                  className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] bg-slate-900 overflow-hidden ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover card-image-zoom opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-[6px] bg-[#000033] text-[#00a3e0] text-xs font-semibold uppercase tracking-wider border border-white/20">
                      Capability Blueprint
                    </span>
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
                      {project.domain}
                    </span>

                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>

                    <div className="space-y-3 pt-2 text-xs sm:text-sm">
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[6px] space-y-1">
                        <span className="font-semibold text-slate-900 text-xs uppercase tracking-wider block">
                          The Challenge:
                        </span>
                        <p className="text-slate-600 leading-relaxed text-xs">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 bg-blue-50/50 border border-blue-100 rounded-[6px] space-y-1">
                        <span className="font-semibold text-[#0033a0] text-xs uppercase tracking-wider block">
                          The Engineering Solution:
                        </span>
                        <p className="text-slate-700 leading-relaxed text-xs">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-slate-500 block mb-2">
                        Production Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-[6px] bg-slate-100 text-slate-700 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
                    >
                      <span>Discuss similar architecture for your stack</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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
