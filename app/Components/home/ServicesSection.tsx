import Link from 'next/link';
import { ArrowRight, Code2, Layers, Cloud, Sparkles } from 'lucide-react';

const PRACTICES = [
  {
    title: 'Application Services',
    href: '/application-services',
    icon: Code2,
    description: 'We build tailored business software, multi-tenant SaaS platforms, and secure APIs engineered for your specific business requirements.',
    capabilities: ['Custom Web & Desktop Applications', 'Enterprise Platform Integration', 'Modular Microservices Architecture', 'Database & API Modernization']
  },
  {
    title: 'Product Engineering',
    href: '/product-engineering',
    icon: Layers,
    description: 'From validated prototype to market-ready product, we engineer scalable digital products with disciplined sprint execution and continuous delivery.',
    capabilities: ['MVP Strategy & Build', 'Full-Lifecycle Product Architecture', 'Performance Optimization', 'UX & Front-End Systems']
  },
  {
    title: 'Cloud & Technology Services',
    href: '/technology-services',
    icon: Cloud,
    description: 'Cloud migration, Kubernetes orchestration, CI/CD automation, and infrastructure reliability designed to keep your systems resilient.',
    capabilities: ['Cloud Architecture & Migration', 'Container Orchestration & DevOps', 'Infrastructure as Code (Terraform)', 'System Observability & Monitoring']
  },
  {
    title: 'AI & Business Intelligence',
    href: '/ai-bi',
    icon: Sparkles,
    description: 'Practical AI integration, retrieval-augmented generation (RAG), and data analytics pipelines that turn unstructured data into actionable operational insights.',
    capabilities: ['Enterprise RAG & Search Systems', 'Data Pipelines & Warehousing', 'Predictive Modeling & Analytics', 'Automated Workflow Pipelines']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-wider text-[#0033a0] font-semibold mb-2">
            Engineering Practices
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Specialized engineering for modern technology stacks.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We partner with product teams and engineering leaders to deliver reliable software solutions with clean architecture and predictable delivery cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <div
                key={practice.title}
                className="bg-white border border-slate-200 rounded-[6px] p-8 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[6px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0033a0] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {practice.description}
                  </p>
                  <ul className="space-y-2 mb-8 border-t border-slate-100 pt-6">
                    {practice.capabilities.map((cap) => (
                      <li key={cap} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={practice.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
                  >
                    <span>Learn about {practice.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
