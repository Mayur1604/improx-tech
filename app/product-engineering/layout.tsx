import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Engineering Services | SaaS & Platform Architecture | Improx Tech',
  description:
    'From MVP architecture to production scale: full-lifecycle SaaS product engineering, cross-platform mobile apps, and automated CI/CD deployment.',
  alternates: {
    canonical: 'https://improxtech.com/product-engineering',
  },
  openGraph: {
    title: 'Product Engineering Services | Improx Tech',
    description:
      'Full-lifecycle product engineering: UX design systems, multi-tenant cloud backends, and rapid feature iteration.',
    url: 'https://improxtech.com/product-engineering',
    type: 'website',
    images: ['/images/backgrounds/product-engineering-bg.webp'],
  },
};

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
