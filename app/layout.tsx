import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './styles/tokens.css';
import './styles/motion.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { company } from './data/company';

const fontSans = localFont({
  src: '../public/fonts/geist-sans.woff2',
  variable: '--font-sans',
  display: 'swap',
  weight: '400 500 600 700',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://improxtech.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: `${company.name} | Enterprise Software & Cloud Engineering`,
    template: `%s | ${company.name}`,
  },
  description:
    'Improx Tech engineers custom software, scalable cloud architecture, and data platforms for growing and established businesses. Delaware governance with engineering velocity in Pune.',
  keywords: [
    'Custom Software Development',
    'Enterprise Software Engineering',
    'Cloud Migration & DevSecOps',
    'Kubernetes Consulting',
    'Full-Stack Web Development',
    'Product Engineering Services',
    'TypeScript & Go Development',
    'Data Engineering & RAG Pipelines',
    'Software Consulting Delaware',
    'Software Development Company Pune',
    'Improx Tech',
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.parentGroup,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://improxtech.com',
    siteName: company.name,
    title: `${company.name} | Enterprise Software & Cloud Engineering`,
    description:
      'Improx Tech engineers custom software, scalable cloud architecture, and data platforms for growing and established businesses. Delaware governance with engineering velocity in Pune.',
    images: [
      {
        url: '/images/hero/hero-software-engineering.webp',
        width: 1200,
        height: 630,
        alt: 'Improx Tech Enterprise Software & Cloud Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | Enterprise Software & Cloud Engineering`,
    description:
      'Custom software engineering, cloud architecture, and modern data platforms with full client source code ownership.',
    images: ['/images/hero/hero-software-engineering.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#000033',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const verifiedSocials = Object.values(company.socialLinks).filter(
    (url): url is string => Boolean(url)
  );

  // Organization JSON-LD generated strictly from verified company data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: company.name,
    legalName: company.legalName,
    url: 'https://improxtech.com',
    logo: 'https://improxtech.com/images/hero/hero-software-engineering.webp',
    sameAs: verifiedSocials,
    knowsAbout: [
      'Custom Software Development',
      'Cloud Architecture',
      'Kubernetes & Docker Containerization',
      'Microservices Architecture',
      'TypeScript & Go Systems',
      'PostgreSQL & Distributed Databases',
      'Data Engineering & ETL Pipelines',
      'Agentic AI & Retrieval-Augmented Generation',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: company.parentGroup,
    },
    foundingDate: `${company.foundingYear}`,
    email: company.email,
    telephone: company.phone,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: company.addresses.us.street,
        addressLocality: company.addresses.us.city,
        addressRegion: company.addresses.us.region,
        postalCode: company.addresses.us.postalCode,
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: company.addresses.india.street,
        addressLocality: company.addresses.india.city,
        addressRegion: company.addresses.india.region,
        postalCode: company.addresses.india.postalCode,
        addressCountry: 'IN',
      },
    ],
  };

  return (
    <html lang="en" className={`h-full antialiased scroll-smooth scroll-pt-20 ${fontSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#000033] font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 relative z-10 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
