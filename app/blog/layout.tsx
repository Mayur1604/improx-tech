import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Insights & Architecture Research | Improx Tech',
  description:
    'Technical guides, architecture whitepapers, and operational lessons on enterprise SaaS, agentic AI, cloud infrastructure, and data meshes from the Improx Tech engineering team.',
  alternates: {
    canonical: 'https://improxtech.com/blog',
  },
  openGraph: {
    title: 'Improx Tech Engineering Research & Technical Blog',
    description:
      'Architecture patterns, guardrails for agentic AI, and distributed systems lessons from active production client deployments.',
    url: 'https://improxtech.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/blogs/agentic-ai.webp',
        width: 1200,
        height: 630,
        alt: 'Improx Tech Insights & Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Improx Tech Engineering Research & Technical Blog',
    description:
      'Architecture patterns, guardrails for agentic AI, and distributed systems lessons from active production client deployments.',
    images: ['/images/blogs/agentic-ai.webp'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Improx Tech Engineering Insights & Research',
    url: 'https://improxtech.com/blog',
    description: 'Technical articles and architectural research written by engineers for engineers.',
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
        name: 'Insights & Research',
        item: 'https://improxtech.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
