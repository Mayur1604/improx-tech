import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findServiceBySlug, productEngineeringList } from '../../data/servicesData';
import ServiceDetailView from '../../Components/ServiceDetailView';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productEngineeringList.map((service) => ({
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

  const pageUrl = `https://improxtech.com/product-engineering/${slug}`;

  return {
    title: `${service.title} | Product Engineering | Improx Tech`,
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
          url: '/images/backgrounds/product-engineering-bg.svg',
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
      images: ['/images/backgrounds/product-engineering-bg.svg'],
    },
  };
}

export default async function ProductEngineeringSubpage({ params }: PageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://improxtech.com/product-engineering/${slug}`;

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
        name: 'Product Engineering',
        item: 'https://improxtech.com/product-engineering',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  const siblings = productEngineeringList
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ title: s.title, href: `/product-engineering/${s.slug}` }));

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
