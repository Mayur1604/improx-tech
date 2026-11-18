import type { Metadata } from 'next';
import ApplicationServices from './applicationservices';

export const metadata: Metadata = {
  title: 'Custom Application Services & Enterprise Systems | Improx Tech',
  description:
    'Custom web platforms, enterprise systems, and high-concurrency API engineering. Built using modern TypeScript, Go, and relational data architectures.',
  alternates: {
    canonical: 'https://improxtech.com/application-services',
  },
  openGraph: {
    title: 'Custom Application Services | Improx Tech',
    description:
      'Custom web platforms, enterprise systems, and high-concurrency API engineering with complete source code ownership.',
    url: 'https://improxtech.com/application-services',
    type: 'website',
    images: ['/images/services/custom-software.webp'],
  },
};

export default function Page() {
  return <ApplicationServices />;
}
