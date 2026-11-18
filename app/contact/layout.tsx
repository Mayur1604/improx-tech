import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Engineering | Delaware HQ & Pune Tech Center | Improx Tech',
  description:
    'Start an engineering engagement with Improx Tech. Speak directly with senior architects for custom software, cloud migration, and dedicated pod scoping.',
  alternates: {
    canonical: 'https://improxtech.com/contact',
  },
  openGraph: {
    title: 'Contact Improx Tech Engineering',
    description:
      'Direct technical consultation for enterprise software, cloud infrastructure, and dedicated pods. Response within 24 business hours.',
    url: 'https://improxtech.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Improx Tech Engineering',
    description:
      'Direct technical consultation for enterprise software, cloud infrastructure, and dedicated pods.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Improx Tech',
    url: 'https://improxtech.com/contact',
    description: 'Get in touch with Improx Tech for software engineering and cloud consulting.',
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
        name: 'Contact',
        item: 'https://improxtech.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
