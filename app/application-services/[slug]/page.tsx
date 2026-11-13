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

  return {
    title: `${service.title} | Application Services | Improx Tech`,
    description: service.tagline,
  };
}

export default async function ApplicationServiceSubpage({ params }: PageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const siblings = applicationServicesList
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ title: s.title, href: `/application-services/${s.slug}` }));

  return <ServiceDetailView service={service} siblingServices={siblings} />;
}
