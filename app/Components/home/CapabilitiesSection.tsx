import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';

const SERVICES = [
  {
    name: 'Custom Software Development',
    href: '/application-services/custom-software-development',
    summary: 'Bespoke web platforms and core business logic engineered for specific workflows.',
  },
  {
    name: 'Enterprise Application Development',
    href: '/application-services/enterprise-applications',
    summary: 'High-availability operational platforms connecting legacy systems, ERPs, and databases.',
  },
  {
    name: 'SaaS Development',
    href: '/application-services/saas-development',
    summary: 'Multi-tenant cloud platforms designed with isolated schemas and scalable APIs.',
  },
  {
    name: 'Web & Mobile Applications',
    href: '/application-services/web-applications',
    summary: 'Responsive front-ends and cross-platform applications built with TypeScript and React.',
  },
  {
    name: 'Cloud Application Development',
    href: '/application-services/cloud-applications',
    summary: 'Containerized architectures deployed across AWS, Azure, and Google Cloud environments.',
  },
  {
    name: 'API Development',
    href: '/application-services/api-development',
    summary: 'High-performance REST and GraphQL APIs with automated OpenAPI documentation and rate limiting.',
  },
  {
    name: 'System Integration',
    href: '/application-services/system-integration',
    summary: 'Unified data orchestration connecting third-party SaaS tools, payment gateways, and data warehouses.',
  },
  {
    name: 'Legacy Modernization',
    href: '/application-services/legacy-modernization',
    summary: 'Incremental strangler-fig migrations decomposing legacy monoliths without business disruption.',
  },
  {
    name: 'Maintenance & Support',
    href: '/application-services/maintenance-support',
    summary: 'SLA-backed bug fixes, vulnerability patching, performance audits, and continuous updates.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 lg:py-24 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Split Layout: Intro & Technical Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
              Engineering Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Comprehensive software engineering across the full product lifecycle.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              We partner with businesses to design, engineer, and maintain scalable software. Our engineers combine clean architectural design with disciplined agile delivery to build systems that last.
            </p>
            <div className="pt-2">
              <Link
                href="/application-services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
              >
                <span>View all application services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group relative h-[260px] sm:h-[300px] w-full rounded-[6px] overflow-hidden border border-slate-200 hover:border-[#0033a0] bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src="/images/services/custom-software.webp"
                alt="Software engineering and application architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00a3e0] drop-shadow-md">
                  <Code2 className="w-3.5 h-3.5 text-[#00a3e0]" />
                  <span>Production Code &amp; Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Services as Simple Text Rows with Subtle Hover Transitions */}
        <div className="border-t border-slate-200 divide-y divide-slate-100">
          {SERVICES.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="group py-5 px-3 sm:px-4 rounded-[6px] flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 hover:bg-slate-50/90 hover:shadow-xs border border-transparent hover:border-slate-200/80 transition-all duration-150"
            >
              <div className="flex items-start md:items-center gap-4 md:w-1/3 shrink-0">
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#0033a0] transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-base font-bold text-slate-900 group-hover:text-[#0033a0] transition-colors flex items-center gap-2">
                  <span>{service.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 md:flex-1 line-clamp-1 group-hover:text-slate-800 transition-colors">
                {service.summary}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0033a0] group-hover:translate-x-1.5 transition-transform duration-200 self-end md:self-auto shrink-0">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
