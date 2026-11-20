import type { Metadata } from 'next';
import Image from 'next/image';
import Reveal from './Components/Reveal';
import HeroSection from './Components/home/HeroSection';
import TrustOverviewSection from './Components/home/TrustOverviewSection';
import CapabilitiesSection from './Components/home/CapabilitiesSection';
import EngineeringCarouselSection from './Components/home/EngineeringCarouselSection';
import ArchitecturePodsSection from './Components/home/ArchitecturePodsSection';
import EngineeringProcessSection from './Components/home/EngineeringProcessSection';
import IndustriesSection from './Components/home/IndustriesSection';
import DeliveryGovernanceSection from './Components/home/DeliveryGovernanceSection';
import WhyChooseSection from './Components/home/WhyChooseSection';
import EngineeringStandardsSection from './Components/home/EngineeringStandardsSection';
import InsightsSection from './Components/home/InsightsSection';
import FaqSection from './Components/home/FaqSection';
import FinalCtaSection from './Components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Enterprise Software & Cloud Engineering Firm | Improx Tech',
  description:
    'Improx Tech engineers custom software, scalable cloud architecture, and data platforms. Delivered through dedicated engineering pods with complete source code ownership.',
  alternates: {
    canonical: 'https://improxtech.com',
  },
};

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Improx Tech',
    url: 'https://improxtech.com',
    description: 'Enterprise Software & Cloud Engineering Consultancy',
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
    <div className="relative min-h-screen bg-[#000022] text-slate-900 selection:bg-[#0033a0] selection:text-white">
      {/* Schema.org WebSite & FAQPage JSON-LD for Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Fixed Atmospheric Homepage Background Image (strictly -z-10 so it never covers the footer) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/backgrounds/homepage-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 filter contrast-125 brightness-90"
        />
        {/* Subtle Ambient Corporate Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000033]/85 via-[#000028]/75 to-[#00001f]/90" />
      </div>

      <div className="relative z-10">
        {/* 1. Hero Section (Includes New Software Engineering Visual & Running Tech Carousel) */}
        <HeroSection />

        {/* 2. Company Overview / Trust Indicators */}
        <Reveal delayMs={40}>
          <TrustOverviewSection />
        </Reveal>

        {/* 3. Engineering Capabilities */}
        <Reveal delayMs={40}>
          <CapabilitiesSection />
        </Reveal>

        {/* 4. Visual Engineering Showcase Carousel */}
        <Reveal delayMs={40}>
          <EngineeringCarouselSection />
        </Reveal>

        {/* 5. Architecture & Specialized Engineering */}
        <Reveal delayMs={40}>
          <ArchitecturePodsSection />
        </Reveal>

        {/* 6. Engineering Process */}
        <Reveal delayMs={40}>
          <EngineeringProcessSection />
        </Reveal>

        {/* 7. Industries We Serve */}
        <Reveal delayMs={40}>
          <IndustriesSection />
        </Reveal>

        {/* 8. Delivery Model and Governance */}
        <Reveal delayMs={40}>
          <DeliveryGovernanceSection />
        </Reveal>

        {/* 9. Why Choose Improx Tech / Security Approach */}
        <Reveal delayMs={40}>
          <WhyChooseSection />
        </Reveal>

        {/* 10. Engineering Commitments & Quality Standards */}
        <Reveal delayMs={40}>
          <EngineeringStandardsSection />
        </Reveal>

        {/* 11. Engineering Insights & Blogs */}
        <Reveal delayMs={40}>
          <InsightsSection />
        </Reveal>

        {/* 14. Frequently Asked Questions (FAQ) */}
        <Reveal delayMs={40}>
          <FaqSection />
        </Reveal>

        {/* 15. Final CTA */}
        <Reveal delayMs={40}>
          <FinalCtaSection />
        </Reveal>
      </div>
    </div>
  );
}
