import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight,
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  GitBranch,
  Terminal
} from 'lucide-react';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';
import FaqSection from '../Components/home/FaqSection';
import Reveal from '../Components/Reveal';
import NumberCounter from '../Components/NumberCounter';
import { company } from '../data/company';
import EngineeringCraftExplorer from '../Components/about/EngineeringCraftExplorer';
import DeliveryHubExplorer from '../Components/about/DeliveryHubExplorer';

export const metadata: Metadata = {
  title: 'About Us | Custom Software & Cloud Consultancy | Improx Tech',
  description:
    'Learn about Improx Tech: our founding, engineering practices, dual-hub delivery in Delaware, USA and Pune, India, and focus on software craft.',
  alternates: {
    canonical: 'https://improxtech.com/about',
  },
  openGraph: {
    title: 'About Improx Tech | Engineering Craft & Dual-Hub Delivery',
    description:
      'Founded in 2015. Software engineering firm delivering custom cloud architectures, enterprise platforms, and 100% client source code ownership.',
    url: 'https://improxtech.com/about',
    type: 'website',
    images: [
      {
        url: '/images/about/delaware-hq.webp',
        width: 1200,
        height: 630,
        alt: 'Improx Tech Dual-Hub Offices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Improx Tech',
    description:
      'Delaware corporate governance with Pune engineering velocity. 100% IP ownership from day one.',
    images: ['/images/about/delaware-hq.webp'],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://improxtech.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://improxtech.com/about',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Improx Tech provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Improx Tech provides custom software engineering across four primary practices: Application Services (custom web platforms, high-throughput enterprise systems, SaaS), Product Engineering (from MVP architecture to scalable production systems), Cloud & Technology Services (cloud migration, Kubernetes DevOps, Infrastructure as Code), and AI & Business Intelligence (retrieval-augmented generation, data warehousing, and analytics pipelines).',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of software can your team develop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We develop custom corporate platforms, multi-tenant SaaS products, internal operations tools, high-throughput financial and clinical transaction gateways, REST/GraphQL APIs, and enterprise cloud infrastructure. Every system is engineered from the ground up according to your domain requirements and technology constraints.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which technologies do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our primary engineering stack includes TypeScript, React, Next.js, Node.js, Python, and Go for application development; PostgreSQL, MySQL, and Redis for relational and in-memory data storage; and Docker, Kubernetes, and Terraform for cloud infrastructure across AWS, Microsoft Azure, and Google Cloud Platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does your project development process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work in structured two-week agile sprints. An engagement starts with a thorough technical discovery and architecture scoping session. Once scoped, a dedicated engineering pod is allocated. Progress is demonstrated through regular working software demos, open pull requests, and automated continuous integration deployments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing maintenance and support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In addition to initial development, we provide structured maintenance and support agreements covering system monitoring, vulnerability patching, dependency upgrades, database tuning, and feature extensions with defined response times.',
        },
      },
    ],
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* ================= FULL-BLEED WEBP HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed WebP background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/about-us-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/95 via-[#000033]/80 to-[#000033]/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#00a3e0] font-medium">About Improx Tech</span>
          </nav>

          <Reveal className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
              Corporate Overview
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering software with clarity, discipline, and full client ownership.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Improx Tech is a technology consulting and software engineering firm founded in {company.foundingYear}. We work with growing businesses and enterprise teams to design custom applications, modernize cloud infrastructure, and maintain reliable production systems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20 text-xs">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20">
                <div className="text-2xl font-bold text-[#00a3e0]">
                  <NumberCounter target={company.foundingYear} startFrom={1995} useGrouping={false} />
                </div>
                <div className="text-slate-300 mt-1 font-medium">Founding Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20">
                <div className="text-2xl font-bold text-white">14-Day</div>
                <div className="text-slate-300 mt-1 font-medium">Sprint Cadence &amp; Demos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20 col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-[#00a3e0]">
                  <NumberCounter target={100} suffix="%" />
                </div>
                <div className="text-slate-300 mt-1 font-medium">Client Source Code Ownership</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Purpose & Engineering Philosophy */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <Reveal className="lg:col-span-6 space-y-6" delayMs={50}>
              <p className="text-xs uppercase tracking-wider text-[#0033a0] font-semibold">
                Our Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Deliberate engineering over superficial complexity.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Many development projects struggle with fragmented ownership, unmaintainable codebases, and vendor lock-in. Improx Tech approaches engineering with clear architecture boundaries, thorough automated testing, and comprehensive documentation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe our clients should always have direct access to code, clear visibility into every sprint, and unconditional intellectual property ownership from the day code is written.
              </p>
              
              <div className="pt-2 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0" />
                  <span><strong>Full IP Ownership:</strong> Complete source code and deployment scripts belong to you.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0" />
                  <span><strong>Dedicated Pods:</strong> Focused engineers who understand your domain and stack.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0033a0] shrink-0" />
                  <span><strong>Direct Communication:</strong> Direct technical collaboration without unnecessary layers.</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6" delayMs={200}>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                    Client Delivery Commitments
                  </h3>
                  <span className="text-[11px] font-mono text-[#0033a0] bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-full font-semibold">
                    STANDARD SLA
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0033a0] uppercase tracking-wider">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>01 / Direct Source Control</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Client-Owned Git Remotes</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Code is committed and pushed directly to your corporate GitHub or GitLab organization from sprint one.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0033a0] uppercase tracking-wider">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>02 / Automated CI Quality</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Strict Gatekeepers on Every PR</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Static TypeScript verification, unit test gates, container security scans, and peer code reviews before merge.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0033a0] uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>03 / Sprint Observability</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">14-Day Working Demos</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Two-week cadences with working software demonstrated in dedicated staging environments, not slide decks.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE ENGINEERING STANDARDS SHOWCASE ================= */}
      <section className="py-20 lg:py-28 bg-[#fafaf9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">
              Engineering Discipline
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-3 tracking-tight">
              How we approach technology &amp; code craft.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our core architectural practices, branch protection gates, and shift-left security protocols across four key engineering pillars.
            </p>
          </Reveal>
          <EngineeringCraftExplorer />
        </div>
      </section>

      {/* ================= GLOBAL DELIVERY HUBS (INTERACTIVE EXPLORER) ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">
              Global Operations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-3 tracking-tight">
              Dual-hub engineering delivery.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Delaware corporate governance paired with continuous engineering velocity in Pune. Switch between delivery centers to review local operations, time zones, and governance standards.
            </p>
          </Reveal>
          <DeliveryHubExplorer />
        </div>
      </section>

      {/* Engineering Insights Section */}
      <EngineeringBlogSection 
        title="Engineering Perspectives"
        subtitle="Technical articles on architecture, cloud infrastructure, and software delivery written by our engineering team."
      />

      {/* Frequently Asked Questions */}
      <Reveal delayMs={40}>
        <FaqSection />
      </Reveal>

      {/* Final CTA */}
      <section className="bg-[#000033] text-white py-20 border-t border-slate-800">
        <Reveal className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#00a3e0]">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Discuss your software or cloud architecture.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule a scoping discussion with our technical team. We will review your requirements and provide honest architectural guidance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0]"
            >
              <span>Contact Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
