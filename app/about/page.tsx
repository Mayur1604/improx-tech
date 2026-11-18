import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Users, 
  ChevronRight,
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Server,
  ShieldCheck,
  Code2
} from 'lucide-react';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';
import { company } from '../data/company';

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

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Editorial Subpage Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0033a0] font-medium">About Improx Tech</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
              Corporate Overview
            </p>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Engineering software with clarity, discipline, and full client ownership.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Improx Tech is a technology consulting and software engineering firm founded in {company.foundingYear}. We work with growing businesses and enterprise teams to design custom applications, modernize cloud infrastructure, and maintain reliable production systems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-xs">
              <div className="bg-white p-4 rounded-[6px] border border-slate-200">
                <div className="text-2xl font-bold text-[#0033a0]">{company.foundingYear}</div>
                <div className="text-slate-500 mt-1 font-medium">Founding Year</div>
              </div>
              <div className="bg-white p-4 rounded-[6px] border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">Dual Hub</div>
                <div className="text-slate-500 mt-1 font-medium">Delaware, USA &amp; Pune, India</div>
              </div>
              <div className="bg-white p-4 rounded-[6px] border border-slate-200 col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-[#0033a0]">100%</div>
                <div className="text-slate-500 mt-1 font-medium">Client Source Code Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Engineering Philosophy */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
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
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-[6px] border border-slate-200 p-8 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Dual-Hub Engineering Collaboration
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-[6px] bg-white border border-slate-200 space-y-1">
                    <div className="text-xs font-semibold text-[#0033a0] uppercase tracking-wider">United States Operations</div>
                    <div className="text-sm font-bold text-slate-900">Delaware Corporate Governance</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our Delaware office provides direct contract governance, US business hours alignment, and architectural strategy.
                    </p>
                  </div>

                  <div className="p-4 rounded-[6px] bg-white border border-slate-200 space-y-1">
                    <div className="text-xs font-semibold text-[#0033a0] uppercase tracking-wider">India Engineering Center</div>
                    <div className="text-sm font-bold text-slate-900">Pune Technology Delivery Hub</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Our Pune engineering center delivers focused sprint execution, continuous integration, and disciplined code quality.
                    </p>
                  </div>

                  <div className="p-4 rounded-[6px] bg-white border border-slate-200 space-y-1">
                    <div className="text-xs font-semibold text-[#0033a0] uppercase tracking-wider">Predictable Cadence</div>
                    <div className="text-sm font-bold text-slate-900">Two-Week Sprint Checkpoints</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Regular sprint reviews, automated test passes, and direct pull requests ensure steady, observable progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Principles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              How we approach technology.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Standard practices we maintain across every software engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[6px] bg-white border border-slate-200 space-y-3 card-hover">
              <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Unconditional Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All source code, infrastructure declarations, and test suites are authored for your repository from the first commit.
              </p>
            </div>

            <div className="p-6 rounded-[6px] bg-white border border-slate-200 space-y-3 card-hover">
              <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Clean, Decoupled Code</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prefer well-defined modular architectures and type safety that your internal developers can comfortably maintain and extend.
              </p>
            </div>

            <div className="p-6 rounded-[6px] bg-white border border-slate-200 space-y-3 card-hover">
              <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Focused Teams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineers stay dedicated to your project context rather than constantly rotating between disconnected accounts.
              </p>
            </div>

            <div className="p-6 rounded-[6px] bg-white border border-slate-200 space-y-3 card-hover">
              <div className="w-10 h-10 rounded-[6px] bg-slate-50 border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Cloud Discipline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Infrastructure defined in code with automated linting, reproducible deployments, and conservative operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defensible Security & Governance */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Security &amp; Hygiene</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Standard engineering security practices.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Security is integrated directly into daily development workflows rather than deferred to an afterthought audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-[6px] p-6 bg-slate-50 space-y-3 card-hover">
              <div className="w-9 h-9 rounded-[6px] bg-white border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Secure Development Lifecycle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated static analysis, dependency scanning in CI pipelines, and peer code reviews for all pull requests.
              </p>
            </div>

            <div className="border border-slate-200 rounded-[6px] p-6 bg-slate-50 space-y-3 card-hover">
              <div className="w-9 h-9 rounded-[6px] bg-white border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Access Reviews &amp; Isolation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Principle of least privilege, short-lived developer credentials, encrypted environment secrets, and isolated staging environments.
              </p>
            </div>

            <div className="border border-slate-200 rounded-[6px] p-6 bg-slate-50 space-y-3 card-hover">
              <div className="w-9 h-9 rounded-[6px] bg-white border border-slate-200 text-[#0033a0] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Data Protection in Transit &amp; at Rest</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard TLS encryption for external and inter-service communications, with encrypted storage volumes and managed keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices & Locations with Neutral Abstract SVG Maps */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Locations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Our delivery hubs.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dual-hub presence providing business governance in Delaware and engineering velocity in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delaware Hub */}
            <div className="group rounded-[6px] bg-white border border-slate-200 overflow-hidden card-hover flex flex-col justify-between">
              {/* Image & Gradient Header */}
              <div className="relative h-52 w-full bg-[#000033] flex items-center justify-center p-6 text-white overflow-hidden">
                <Image
                  src="/images/about/delaware-hq.webp"
                  alt="Delaware Corporate Headquarters"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000033] via-[#000033]/60 to-transparent" />

                <div className="relative z-10 text-center">
                  <p className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00a3e0] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>38.7745° N, 75.1393° W</span>
                  </p>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00a3e0] transition-colors">Delaware, United States</h3>
                  <p className="text-xs text-slate-300">Corporate &amp; Account Governance</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>{company.name}</strong><br />
                  <a
                    href={company.addresses.us.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0033a0] hover:underline transition-colors block"
                  >
                    {company.addresses.us.street}<br />
                    {company.addresses.us.city}, {company.addresses.us.region} {company.addresses.us.postalCode}, {company.addresses.us.country}
                  </a>
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 flex flex-wrap gap-4">
                  {company.formattedPhone && <div>Phone: <strong className="text-slate-900">{company.formattedPhone}</strong></div>}
                  {company.email && <div>Email: <strong className="text-slate-900">{company.email}</strong></div>}
                </div>
              </div>
            </div>

            {/* Pune Hub */}
            <div className="group rounded-[6px] bg-white border border-slate-200 overflow-hidden card-hover flex flex-col justify-between">
              {/* Image & Gradient Header */}
              <div className="relative h-52 w-full bg-[#000033] flex items-center justify-center p-6 text-white overflow-hidden">
                <Image
                  src="/images/about/pune-techcenter.webp"
                  alt="Pune Technology Center"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000033] via-[#000033]/60 to-transparent" />

                <div className="relative z-10 text-center">
                  <p className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00a3e0] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>18.5590° N, 73.7868° E</span>
                  </p>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00a3e0] transition-colors">Pune, India</h3>
                  <p className="text-xs text-slate-300">Engineering &amp; Technology Delivery</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>{company.name} Delivery Center</strong><br />
                  <a
                    href={company.addresses.india.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0033a0] hover:underline transition-colors block"
                  >
                    {company.addresses.india.street}<br />
                    {company.addresses.india.city}, {company.addresses.india.region} {company.addresses.india.postalCode}, {company.addresses.india.country}
                  </a>
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 flex flex-wrap gap-4">
                  {company.email && <div>Inquiries: <strong className="text-slate-900">{company.email}</strong></div>}
                  <div>Founding: <strong className="text-slate-900">{company.foundingYear}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Insights Section */}
      <EngineeringBlogSection 
        title="Engineering Perspectives"
        subtitle="Technical articles on architecture, cloud infrastructure, and software delivery written by our engineering team."
      />

      {/* Final CTA */}
      <section className="bg-[#000033] text-white py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
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
        </div>
      </section>

    </div>
  );
}
