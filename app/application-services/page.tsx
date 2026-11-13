import type { Metadata } from 'next';
import ApplicationServices from './applicationservices';

export const metadata: Metadata = {
  title: 'Application Services | Improx Tech',
  description: 'Comprehensive application development, modernization, and cloud solutions.',
};

export default function Page() {
  return <ApplicationServices />;
}
