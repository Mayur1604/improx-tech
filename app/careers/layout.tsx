import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Engineering Pod Roles | Improx Tech',
  description:
    'Join Improx Tech. We are hiring software engineers, cloud architects, and data engineers. Work in dedicated pods with modern stacks, direct client repository ownership, and zero bureaucracy.',
  alternates: {
    canonical: 'https://improxtech.com/careers',
  },
  openGraph: {
    title: 'Careers at Improx Tech | Software & Cloud Engineering',
    description:
      'Explore open engineering positions at Improx Tech. Delaware governance, Pune delivery velocity, modern tech stacks, and direct repository ownership.',
    url: 'https://improxtech.com/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Improx Tech',
    description:
      'Join our engineering pods in Pune and hybrid environments. TypeScript, Next.js, Go, Python, AWS, and Kubernetes.',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: 'Careers',
        item: 'https://improxtech.com/careers',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
