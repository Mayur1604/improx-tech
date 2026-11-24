'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { company } from '@/app/data/company';

const TYPING_PHRASES = [
  'Architecting resilient distributed systems, modern cloud infrastructure, and mission-critical data pipelines.',
  'Delivering full intellectual property rights and direct GitHub repository ownership from day one.',
  'Providing dedicated senior engineering pods with predictable two-week sprint delivery cadences.',
];

function TypewriterSubtext({ enabled }: { enabled: boolean }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const raf = requestAnimationFrame(() => setDisplayedText(TYPING_PHRASES[0]));
      return () => cancelAnimationFrame(raf);
    }

    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && displayedText === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, 500);
    } else {
      const speed = isDeleting ? 20 : 36;
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, phraseIndex, enabled]);

  return (
    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal min-h-[3.6rem]">
      <span>{displayedText}</span>
      <span className="inline-block w-[2px] h-[1.15em] bg-[#0033a0] ml-1.5 align-middle animate-pulse" />
    </p>
  );
}

function useCounter(target: number, start: number, duration: number, enabled: boolean) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const raf = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf);
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * ease);
      
      setValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, start, duration, enabled]);

  return value;
}

export default function TrustOverviewSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const animatedYear = useCounter(company.foundingYear, 1995, 1100, isInView);
  const animatedOwnership = useCounter(100, 0, 1100, isInView);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#f8f9fa] border-b border-slate-200/90 py-20 sm:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Animated Typing Subtext & About Pill Button */}
          <div 
            className={`lg:col-span-8 space-y-6 transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 leading-[1.18] max-w-2xl">
              Enterprise software engineering built for production scale and mission-critical reliability.
            </h2>

            {/* Subtext with Typing Animation */}
            <TypewriterSubtext enabled={isInView} />

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-900/80 px-6 py-2.5 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group"
              >
                <span>About Improx</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Stats — 100% Client IP Ownership with Founded in 2015 Below */}
          <div className="lg:col-span-4 lg:pl-6 flex flex-col gap-10 sm:gap-12 pt-2">
            
            {/* Stat 1 (Top): 100% Client IP Ownership */}
            <div 
              className={`flex flex-col transition-all duration-700 ease-out delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="w-full border-t border-slate-300 mb-6 sm:mb-8" />
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light sm:font-normal tracking-tight text-slate-900 leading-none">
                {animatedOwnership}%
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-normal mt-3 sm:mt-4">
                Client IP Ownership
              </div>
            </div>

            {/* Stat 2 (Below): Founded in 2015 */}
            <div 
              className={`flex flex-col transition-all duration-700 ease-out delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="w-full border-t border-slate-300 mb-6 sm:mb-8" />
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light sm:font-normal tracking-tight text-slate-900 leading-none">
                {animatedYear}
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-normal mt-3 sm:mt-4">
                Founded in 2015
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
