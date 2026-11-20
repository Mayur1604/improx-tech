import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud & Technology Services | AWS, Azure & Kubernetes | Improx Tech',
  description:
    'Enterprise cloud migration, Kubernetes orchestration, Terraform Infrastructure as Code, and DevSecOps pipelines for high-reliability systems.',
  alternates: {
    canonical: 'https://improxtech.com/technology-services',
  },
  openGraph: {
    title: 'Cloud & Technology Services | Improx Tech',
    description:
      'Enterprise cloud migration, Kubernetes containerization, and Terraform Infrastructure as Code.',
    url: 'https://improxtech.com/technology-services',
    type: 'website',
    images: ['/images/backgrounds/technology-services-bg.webp'],
  },
};

export default function TechnologyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
