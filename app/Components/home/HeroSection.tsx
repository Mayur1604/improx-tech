import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TechCarousel from './TechCarousel';
import BlurIn from '../BlurIn';
import GradualSpacing from '../GradualSpacing';

export default function HeroSection() {
  return (
    <section className="group/hero relative bg-[#000033] text-white overflow-hidden border-b border-white/10 min-h-[calc(100dvh-74px)] lg:min-h-[calc(100dvh-80px)] flex flex-col justify-between">
      
      {/* Full-Bleed Background Image covering the entire screen */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero/hero-software-engineering.webp"
          alt="Modern corporate software engineering environment and cloud technology workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-right-top brightness-90 contrast-110 opacity-75 transition-transform duration-1000 ease-out group-hover/hero:scale-[1.02]"
        />
        {/* Cinematic Gradient Overlays ensuring text readability while letting the visual shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000028]/95 via-[#000033]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000022] via-transparent to-black/25" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0033a0]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Full-Screen Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          
          <BlurIn className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Software Engineering Built for Production Realities.
          </BlurIn>

          <GradualSpacing
            text="We build custom web platforms, modernize cloud architectures, and engineer high-throughput data systems. Work directly with senior engineers in your GitHub repositories with two-week sprint demos and complete source code ownership from day one."
            className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal"
          />

          <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
            <Link
              href="/contact"
              className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-7 py-3.5 rounded-[6px] text-base transition-all inline-flex items-center gap-2.5 group ring-2 ring-[#0033a0]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0] btn-interactive shadow-lg"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 btn-arrow transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#capabilities"
              className="bg-white/10 hover:bg-white/15 text-white font-medium px-7 py-3.5 rounded-[6px] border border-white/20 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-xs"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </div>

      {/* Running Technology Carousel (Vector SVG Logos pinned at bottom of viewport) */}
      <TechCarousel />
    </section>
  );
}
