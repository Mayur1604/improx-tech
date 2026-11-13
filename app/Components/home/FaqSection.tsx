'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What services does Improx Tech provide?',
    answer:
      'Improx Tech provides end-to-end custom software engineering across four primary practices: Application Services (bespoke web platforms, enterprise systems, SaaS), Product Engineering (from MVP architecture to scalable production systems), Cloud & Technology Services (cloud migration, Kubernetes DevOps, Infrastructure as Code), and AI & Business Intelligence (retrieval-augmented generation, data warehousing, and analytics pipelines).',
  },
  {
    question: 'What types of software can your team develop?',
    answer:
      'We develop custom corporate platforms, multi-tenant SaaS products, internal operations tools, high-throughput financial and clinical transaction gateways, REST/GraphQL APIs, and enterprise cloud infrastructure. Every system is built bespoke according to your domain requirements and technology constraints.',
  },
  {
    question: 'Which technologies do you work with?',
    answer:
      'Our primary engineering stack includes TypeScript, React, Next.js, Node.js, Python, and Go for application development; PostgreSQL, MySQL, and Redis for relational and in-memory data storage; and Docker, Kubernetes, and Terraform for cloud infrastructure across AWS, Microsoft Azure, and Google Cloud Platform.',
  },
  {
    question: 'How does your project development process work?',
    answer:
      'We work in structured two-week agile sprints. An engagement starts with a thorough technical discovery and architecture scoping session. Once scoped, a dedicated engineering pod is allocated. Progress is demonstrated through regular working software demos, open pull requests, and automated continuous integration deployments.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes. In addition to initial development, we provide structured maintenance and support agreements covering system monitoring, vulnerability patching, dependency upgrades, database tuning, and feature extensions with defined response times.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
            Common questions about working with us.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Clear answers to help you understand our engineering capabilities, engagement structure, and technology stacks.
          </p>
        </div>

        {/* Minimal Accessible Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-[6px] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-[#0033a0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0033a0]"
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0033a0]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
