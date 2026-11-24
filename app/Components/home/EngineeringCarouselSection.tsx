'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  Cloud, 
  Zap, 
  BrainCircuit, 
  Code2,
  Building2
} from 'lucide-react';

interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'cloud-infrastructure',
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    title: 'Fault-Tolerant Multi-Cloud Kubernetes Topology',
    subtitle: 'Enterprise Infrastructure as Code & Multi-Region Resilience',
    description: 'Decoupled cloud infrastructure engineered with automated multi-region failover, Kubernetes container orchestration, and reproducible Terraform deployments.',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Go'],
    image: '/images/services/cloud-integration-devsecops.webp',
    imageAlt: 'Enterprise cloud server topology and container orchestration architecture',
    link: '/technology-services/cloud-migration',
    linkText: 'Explore Cloud Architecture',
  },
  {
    id: 'enterprise-saas',
    category: 'Application Services',
    icon: Layers,
    title: 'Multi-Tenant SaaS Application Architecture',
    subtitle: 'Isolated Database Schemas & High-Concurrency APIs',
    description: 'Modern multi-tenant SaaS platforms engineered with schema-level tenant isolation, automated subscription provisioning, role-based access control, and centralized observability.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/services/enterprise-saas-dev.jpg',
    imageAlt: 'Enterprise multi-tenant SaaS platform management interface and architecture',
    link: '/application-services/saas-development',
    linkText: 'Explore SaaS Platforms',
  },
  {
    id: 'fintech-telemetry',
    category: 'FinTech & Capital Markets',
    icon: Zap,
    title: 'High-Throughput Financial Transaction Core',
    subtitle: 'Low-Latency Streaming & Automated Circuit Breaking',
    description: 'Distributed transaction processing gateway utilizing in-memory Redis clustering, Kafka event streaming, and transactional database replication to eliminate execution bottlenecks.',
    technologies: ['Go', 'Kafka', 'Redis Cluster', 'PostgreSQL', 'Docker'],
    image: '/images/services/high-throughput-api.webp',
    imageAlt: 'High-frequency financial telemetry and order processing cockpit',
    link: '/application-services/enterprise-applications',
    linkText: 'Explore Transaction Core',
  },
  {
    id: 'ai-intelligence',
    category: 'AI & Machine Learning',
    icon: BrainCircuit,
    title: 'Deterministic RAG & Machine Learning Cockpits',
    subtitle: 'Enterprise Semantic Search & Decision Intelligence',
    description: 'Practical AI integration, retrieval-augmented generation (RAG), vector embeddings, and real-time operational analytics cockpits engineered with strict privacy guardrails.',
    technologies: ['Python', 'Vector DB', 'PyTorch', 'Next.js', 'FastAPI'],
    image: '/images/services/ai-and-data-integration.webp',
    imageAlt: 'Machine learning intelligence cockpit and automated analytics dashboard',
    link: '/ai-bi/generative-ai',
    linkText: 'Explore AI Engineering',
  },
  {
    id: 'enterprise-applications',
    category: 'Enterprise Applications',
    icon: Building2,
    title: 'Mission-Critical Enterprise Application Platforms',
    subtitle: 'Distributed Microservices & Legacy Core Modernization',
    description: 'High-availability operational platforms connecting enterprise ERPs, legacy data lakes, and transactional databases with resilient message queues and real-time telemetry.',
    technologies: ['Go', 'TypeScript', 'Docker', 'Redis', 'PostgreSQL'],
    image: '/images/services/enterprise-application-development.jpg',
    imageAlt: 'Enterprise application architecture and distributed operational dashboard',
    link: '/application-services/enterprise-applications',
    linkText: 'Explore Enterprise Platforms',
  },
  {
    id: 'custom-software',
    category: 'Product Engineering',
    icon: Code2,
    title: 'High-Performance Custom Web Applications',
    subtitle: 'Decoupled Microfrontends & Type-Safe Engineering',
    description: 'Tailored enterprise platforms and responsive digital products built with clean domain boundary separation, rigorous test automation, and continuous delivery pipelines.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'],
    image: '/images/services/custom-software-dev.jpg',
    imageAlt: 'Custom software engineering workspace and clean application architecture',
    link: '/application-services/custom-software-development',
    linkText: 'Explore Custom Software',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export default function EngineeringCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const totalSlides = CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Autoplay timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalStepMs = 100;
    const progressStep = (intervalStepMs / AUTOPLAY_INTERVAL_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + progressStep;
      });
    }, intervalStepMs);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const activeSlide = CAROUSEL_SLIDES[currentIndex];
  const IconComponent = activeSlide.icon;

  return (
    <section 
      className="py-20 lg:py-28 bg-white/95 backdrop-blur-xs border-b border-slate-200/90 relative z-10"
      aria-roledescription="carousel"
      aria-label="Engineering Visual Showcase Carousel"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Section Kicker: Plain text with hover effect */}
          <p className="text-xs uppercase tracking-wider font-semibold text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default mb-2 inline-block">
            Engineering in Practice
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3">
            Architecting modern software across mission-critical domains.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Explore the production architectures, cloud infrastructure, and data platforms engineered by our dual-hub technical teams.
          </p>
        </div>

        {/* Main Carousel Viewport */}
        <div 
          className="relative rounded-[6px] overflow-hidden border border-slate-200 bg-slate-900 shadow-xl group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Progress Bar (Autoplay Timer) */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
            <div 
              className="h-full bg-[#00a3e0] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Panoramic Image Stage */}
          <div className="relative h-[440px] sm:h-[500px] lg:h-[560px] w-full overflow-hidden select-none">
            {CAROUSEL_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-center transition-all duration-700 ease-out scale-100 group-hover/carousel:scale-105 group-hover/carousel:brightness-105"
                  />
                  {/* Rich Gradient Overlays for High-Contrast Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000028]/95 via-[#000028]/60 to-transparent sm:bg-gradient-to-r sm:from-[#000028]/95 sm:via-[#000028]/70 sm:to-transparent" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              );
            })}

            {/* Slide Content Overlay (Positioned for Maximum Contrast & Craft) */}
            <div className="absolute inset-0 z-20 p-6 sm:p-10 lg:p-14 flex flex-col justify-end sm:justify-center max-w-2xl text-white">
              <div className="space-y-4 animate-fadeIn">
                
                {/* Domain & Capability Text */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00a3e0] drop-shadow-md">
                  <IconComponent className="w-3.5 h-3.5 text-[#00a3e0]" />
                  <span>{activeSlide.category}</span>
                </div>

                {/* Slide Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    {activeSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#00a3e0] mt-1">
                    {activeSlide.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                  {activeSlide.description}
                </p>

                {/* Production Technology Stack Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Production Stack:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeSlide.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[4px] bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-mono text-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <Link
                    href={activeSlide.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#0033a0] hover:bg-[#00287a] px-5 py-2.5 rounded-[6px] transition-all group ring-2 ring-[#0033a0]/40 shadow-md"
                  >
                    <span>{activeSlide.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Quick Arrow Jump Buttons (Inside Viewport for Mobile/Desktop convenience) */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0033a0] text-white border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer shadow-lg"
              title="Previous slide"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0033a0] text-white border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 cursor-pointer shadow-lg"
              title="Next slide"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator inside Viewport */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15">
            {CAROUSEL_SLIDES.map((slide, idx) => (
              <button
                key={`dot-${slide.id}`}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-[#00a3e0]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
                title={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Selector Strip (Clickable Previews of All Slides) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const SlideIcon = slide.icon;

            return (
              <button
                key={`thumb-${slide.id}`}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`group p-3 rounded-[6px] border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 bg-white shadow-xs ${
                  isActive
                    ? 'border-[#0033a0] ring-2 ring-[#0033a0]/30 -translate-y-0.5'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                title={`View ${slide.title}`}
              >
                {/* Mini Image Preview (Clean without overlays) */}
                <div className="relative h-16 w-full rounded-[4px] overflow-hidden bg-slate-900 border border-slate-200/60">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="180px"
                    className={`object-cover transition-transform duration-300 ease-out ${
                      isActive ? 'scale-105 opacity-100' : 'opacity-80 group-hover:opacity-100 group-hover:scale-108'
                    }`}
                  />
                </div>

                {/* Text Info */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#0033a0]">
                    <SlideIcon className="w-3 h-3 shrink-0" />
                    <span className="truncate">{slide.category}</span>
                  </div>
                  <div className={`text-xs font-bold leading-snug line-clamp-1 transition-colors ${
                    isActive ? 'text-[#0033a0]' : 'text-slate-800'
                  }`}>
                    {slide.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
