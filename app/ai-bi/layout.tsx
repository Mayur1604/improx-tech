import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Business Intelligence Engineering | RAG & Analytics | Improx Tech',
  description:
    'Production AI engineering: deterministic agentic workflows, grounded Retrieval-Augmented Generation (RAG), and high-throughput data warehousing.',
  alternates: {
    canonical: 'https://improxtech.com/ai-bi',
  },
  openGraph: {
    title: 'AI & Business Intelligence Engineering | Improx Tech',
    description:
      'Production AI systems: grounded RAG pipelines, deterministic compliance guardrails, and real-time streaming telemetry.',
    url: 'https://improxtech.com/ai-bi',
    type: 'website',
    images: ['/images/services/ai-intelligence.webp'],
  },
};

export default function AiBiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
