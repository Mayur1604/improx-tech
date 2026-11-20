import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findServiceBySlug, applicationServicesList } from '../../data/servicesData';
import ServiceDetailView from '../../Components/ServiceDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return applicationServicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Improx Tech',
    };
  }

  const pageUrl = `https://improxtech.com/application-services/${slug}`;

  return {
    title: `${service.title} | Application Services | Improx Tech`,
    description: service.tagline,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${service.title} | Improx Tech`,
      description: service.description,
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: '/images/backgrounds/enterprise-application-services-bg.svg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.tagline,
      images: ['/images/backgrounds/enterprise-application-services-bg.svg'],
    },
  };
}

export default async function ApplicationServiceSubpage({ params }: PageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://improxtech.com/application-services/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.category,
    description: service.description,
    url: pageUrl,
    provider: {
      '@type': 'Corporation',
      name: 'Improx Tech',
      url: 'https://improxtech.com',
    },
    areaServed: ['US', 'IN', 'Global'],
  };

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
        name: 'Application Services',
        item: 'https://improxtech.com/application-services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  const siblings = applicationServicesList
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ title: s.title, href: `/application-services/${s.slug}` }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailView service={service} siblingServices={siblings} />
    </>
  );
}
