'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  GitBranch, 
  Cpu, 
  Globe, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Mail,
  ShieldCheck,
  Layers,
  Terminal,
  Search,
  RotateCcw,
  X,
  SlidersHorizontal,
  Tag
} from 'lucide-react';
import { OPEN_POSITIONS, CULTURE_PILLARS, HIRING_STEPS, JobPosition } from '@/app/data/careersData';
import ApplyModal from '../Components/ApplyModal';
import Reveal from '../Components/Reveal';

const DEPARTMENTS = [
  'All Positions',
  'Application Engineering',
  'Cloud & DevOps',
  'Data & AI',
  'Quality Engineering',
] as const;

const LOCATIONS = [
  'All Locations',
  'Hybrid',
  'Remote Available',
] as const;

const EXPERIENCES = [
  'All Experience',
  '3+ Years',
  '4+ Years',
] as const;

const POPULAR_SKILLS = [
  'TypeScript',
  'Next.js',
  'Python',
  'AWS',
  'Kubernetes',
  'Terraform',
  'Apache Kafka',
  'Playwright',
  'Docker',
  'PostgreSQL',
] as const;

const CULTURE_ICONS = [GitBranch, Cpu, Globe, Sparkles];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All Positions');
  const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
  const [selectedExp, setSelectedExp] = useState<string>('All Experience');
  const [expandedJobId, setExpandedJobId] = useState<string | null>('senior-fullstack-engineer');
  const [applyingPosition, setApplyingPosition] = useState<JobPosition | null>(null);

  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Positions': OPEN_POSITIONS.length };
    OPEN_POSITIONS.forEach((pos) => {
      counts[pos.department] = (counts[pos.department] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredPositions = useMemo(() => {
    return OPEN_POSITIONS.filter((pos) => {
      // Department Filter
      if (selectedDept !== 'All Positions' && pos.department !== selectedDept) {
        return false;
      }
      // Location Filter
      if (selectedLocation !== 'All Locations') {
        if (!pos.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }
      // Experience Filter
      if (selectedExp !== 'All Experience' && pos.experience !== selectedExp) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = pos.title.toLowerCase().includes(q);
        const inSummary = pos.summary.toLowerCase().includes(q);
        const inDept = pos.department.toLowerCase().includes(q);
        const inLocation = pos.location.toLowerCase().includes(q);
        const inTech = pos.techStack.some((t) => t.toLowerCase().includes(q));
        const inResp = pos.responsibilities.some((r) => r.toLowerCase().includes(q));
        const inReq = pos.requirements.some((r) => r.toLowerCase().includes(q));
        if (!inTitle && !inSummary && !inDept && !inLocation && !inTech && !inResp && !inReq) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedDept, selectedLocation, selectedExp]);

  const hasActiveFilters = 
    searchQuery.trim() !== '' || 
    selectedDept !== 'All Positions' || 
    selectedLocation !== 'All Locations' || 
    selectedExp !== 'All Experience';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDept('All Positions');
    setSelectedLocation('All Locations');
    setSelectedExp('All Experience');
  };

  const handleSkillClick = (skill: string) => {
    if (searchQuery.toLowerCase() === skill.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(skill);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* ================= FULL-BLEED WEBP HERO HEADER ================= */}
      <section className="relative border-b border-slate-700 py-16 lg:py-24 overflow-hidden bg-[#000033]">
        {/* Full-bleed WebP background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/careers-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/95 via-[#000033]/80 to-[#000033]/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#00a3e0] font-medium">Careers</span>
          </nav>

          <Reveal className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00a3e0]">
              Careers at Improx Tech
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering craft, high agency, and direct production ownership.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              We build dedicated engineering pods that work directly inside client repositories. If you enjoy building clean, type-safe architectures, automating testing, and shipping working software in predictable two-week sprints, we would love to build with you.
            </p>

            {/* Verified Facts Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20 text-xs">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20">
                <div className="text-2xl font-bold text-[#00a3e0]">100%</div>
                <div className="text-slate-300 mt-1 font-medium">Direct Repo &amp; Code Access</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20">
                <div className="text-2xl font-bold text-white">2-Week</div>
                <div className="text-slate-300 mt-1 font-medium">Sprint Delivery Cadence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-[6px] border border-white/20 col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-[#00a3e0]">Dual Hub</div>
                <div className="text-slate-300 mt-1 font-medium">Delaware, USA &bull; Pune, India</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OPEN POSITIONS & SEARCH/FILTER SECTION (Immediately After Hero) ================= */}
      <section id="open-roles" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
                  <span>Opportunities Directory</span>
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-2 tracking-tight">
                  Open Engineering Positions
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Explore current engineering openings across our Pune Technology Delivery Center and hybrid pods.
                </p>
              </div>

              {/* Live Count Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 self-start md:self-auto shrink-0 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  Showing <strong className="text-slate-900">{filteredPositions.length}</strong> of {OPEN_POSITIONS.length} positions
                </span>
              </div>
            </div>

            {/* ================= SEARCHING TAB WITH FILTERS ================= */}
            <div className="bg-white rounded-[10px] border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Searching Tabs Header: Department / Practice Navigation */}
              <div className="bg-slate-50/90 border-b border-slate-200 px-4 sm:px-6 pt-3 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-2 flex items-center gap-1.5 hidden md:flex">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#0033a0]" />
                  <span>Practice:</span>
                </span>
                {DEPARTMENTS.map((dept) => {
                  const isActive = selectedDept === dept;
                  const count = deptCounts[dept] || 0;

                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`relative pb-3 px-3 sm:px-4 text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                        isActive
                          ? 'text-[#0033a0] font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>{dept}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-[#0033a0] text-white'
                            : 'bg-slate-200/70 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0033a0] rounded-t-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Main Search Tab & Filter Controls */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Search Bar + Location + Experience + Primary Action Button */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                  {/* Search Query Input */}
                  <div className="md:col-span-6 relative flex items-center">
                    <Search className="w-4 h-4 text-[#0033a0] absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search title, skills (e.g. Next.js, Python, AWS), keywords..."
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 rounded-[6px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0033a0] focus:ring-1 focus:ring-[#0033a0] transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search input"
                        className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Location Selector */}
                  <div className="md:col-span-3 relative flex items-center">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      aria-label="Filter by Location"
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-50/80 border border-slate-200 rounded-[6px] pl-9 pr-8 py-2.5 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:border-[#0033a0] transition-colors cursor-pointer"
                    >
                      {LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Experience Selector */}
                  <div className="md:col-span-3 relative flex items-center">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                    <select
                      value={selectedExp}
                      onChange={(e) => setSelectedExp(e.target.value)}
                      aria-label="Filter by Experience"
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-50/80 border border-slate-200 rounded-[6px] pl-9 pr-8 py-2.5 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:border-[#0033a0] transition-colors cursor-pointer"
                    >
                      {EXPERIENCES.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Popular Skill Tags / Quick-Search Pills */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0">
                    <Tag className="w-3 h-3 text-[#0033a0]" />
                    <span>Popular Skills:</span>
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {POPULAR_SKILLS.map((skill) => {
                      const isSkillActive = searchQuery.toLowerCase() === skill.toLowerCase();

                      return (
                        <button
                          key={skill}
                          onClick={() => handleSkillClick(skill)}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-[4px] border transition-all flex items-center gap-1 ${
                            isSkillActive
                              ? 'bg-[#0033a0] text-white border-[#0033a0] shadow-2xs font-semibold'
                              : 'bg-slate-100/70 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                          }`}
                        >
                          <span>{skill}</span>
                          {isSkillActive && <X className="w-3 h-3" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Filter Chips & Reset Bar (Visible when any filter is active) */}
                {hasActiveFilters && (
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap bg-blue-50/40 p-2.5 rounded-[6px]">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="text-[11px] font-semibold text-slate-600">Active Filters:</span>
                      {selectedDept !== 'All Positions' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-blue-200 text-[#0033a0] text-[11px] font-medium">
                          <span>Practice: {selectedDept}</span>
                          <button onClick={() => setSelectedDept('All Positions')} className="hover:text-rose-600">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {searchQuery && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-blue-200 text-[#0033a0] text-[11px] font-medium">
                          <span>Keyword: &quot;{searchQuery}&quot;</span>
                          <button onClick={() => setSearchQuery('')} className="hover:text-rose-600">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedLocation !== 'All Locations' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-blue-200 text-[#0033a0] text-[11px] font-medium">
                          <span>Location: {selectedLocation}</span>
                          <button onClick={() => setSelectedLocation('All Locations')} className="hover:text-rose-600">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedExp !== 'All Experience' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-blue-200 text-[#0033a0] text-[11px] font-medium">
                          <span>Exp: {selectedExp}</span>
                          <button onClick={() => setSelectedExp('All Experience')} className="hover:text-rose-600">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                    </div>

                    <button
                      onClick={resetFilters}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors ml-auto"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Positions List */}
          {filteredPositions.length > 0 ? (
            <div className="space-y-4">
              {filteredPositions.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <div
                    key={job.id}
                    className="rounded-[6px] border border-slate-200 bg-white hover:border-[#0033a0]/40 transition-all duration-200 shadow-2xs overflow-hidden"
                  >
                    <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-blue-50 text-[#0033a0] border border-blue-100">
                            {job.department}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.location}</span>
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.experience}</span>
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                            <span>{job.type}</span>
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 hover:text-[#0033a0] transition-colors">
                          {job.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                          {job.summary}
                        </p>

                        <div className="flex items-center gap-1.5 flex-wrap pt-1">
                          {job.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-[3px] bg-slate-100 text-slate-600 border border-slate-200/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-start lg:self-center pt-2 lg:pt-0">
                        <button
                          onClick={() => toggleExpand(job.id)}
                          className="text-xs font-semibold text-slate-600 hover:text-[#0033a0] px-3.5 py-2 rounded-[4px] border border-slate-200 hover:border-slate-300 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => setApplyingPosition(job)}
                          className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-5 py-2 rounded-[4px] text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>Apply for Role</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-slate-100 bg-slate-50/70 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed animate-fadeIn">
                        <div className="space-y-3">
                          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-[#0033a0] flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Core Responsibilities</span>
                          </h4>
                          <ul className="space-y-2 text-slate-600">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0033a0] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-[#0033a0] flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Technical Requirements</span>
                          </h4>
                          <ul className="space-y-2 text-slate-600">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State when no jobs match */
            <div className="p-12 text-center bg-white rounded-[8px] border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-[#0033a0] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6 text-[#0033a0]" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  No matching engineering positions found
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We couldn&apos;t find any roles matching your current search or filter combination. Try clearing some filters or searching for different keywords.
                </p>
              </div>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 bg-[#0033a0] hover:bg-[#00287a] text-white text-xs font-semibold px-4 py-2 rounded-[4px] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

          {/* Speculative Application Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-[6px] bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0033a0]" />
                <h4 className="text-sm font-bold text-slate-900">Don&apos;t see an exact match for your specialty?</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                We are always excited to connect with exceptional backend engineers, DevOps specialists, and data engineers. Send your GitHub, portfolio, or resume directly to our engineering leadership.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:enquiry@improxgroup.com?subject=Speculative%20Engineering%20Application%20-%20Improx%20Tech"
                className="bg-[#000033] hover:bg-[#000022] text-white font-medium px-5 py-2.5 rounded-[4px] text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Email Engineering Leads</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ENGINEERING CULTURE PILLARS ================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Culture &amp; Pod Model</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              How we work every day.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We cultivate an environment where engineers can do their best technical work without unnecessary bureaucracy.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PILLARS.map((pillar, idx) => {
              const Icon = CULTURE_ICONS[idx % CULTURE_ICONS.length];
              return (
                <Reveal key={pillar.title} delayMs={idx * 80}>
                  <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-3 card-hover h-full">
                    <div className="w-10 h-10 rounded-[6px] bg-white border border-slate-200 text-[#0033a0] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Transparent Hiring Process */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Fast, respectful, and technical hiring.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              No endless take-home tests or algorithmic trivia. We respect your time with a structured, transparent process.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRING_STEPS.map((step, idx) => (
              <Reveal key={step.step} delayMs={idx * 80}>
                <div className="p-6 rounded-[6px] bg-white border border-slate-200 space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold font-mono text-[#0033a0]">{step.step}</span>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                        {step.timeEstimate}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Perks & Pod Benefits */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#0033a0]">Benefits</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Engineered for sustained craft and growth.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive compensation and practical support so you can do your best engineering work.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-2 card-hover">
              <div className="w-9 h-9 rounded-[4px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0033a0] mb-2">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Top-Tier Hardware</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern Apple Silicon MacBooks or high-performance Linux workstations, external displays, and noise-canceling accessories.
              </p>
            </div>

            <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-2 card-hover">
              <div className="w-9 h-9 rounded-[4px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0033a0] mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Learning &amp; Cloud Stipends</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full reimbursement for AWS, GCP, Azure, and CKA certifications, technical conference tickets, and an annual technical book budget.
              </p>
            </div>

            <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-2 card-hover">
              <div className="w-9 h-9 rounded-[4px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0033a0] mb-2">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Comprehensive Healthcare</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Premium medical, surgical, and dental insurance covering you and your dependents with dedicated claims assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Banner */}
      <section className="bg-[#000033] text-white py-20">
        <Reveal className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#00a3e0]">
            Ready to Build With Us?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Take the next step in your software engineering career.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Review our open roles above or reach out directly to start a conversation with our engineering leaders.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-8 py-3.5 rounded-[6px] text-sm transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0]"
            >
              <span>View Open Roles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-8 py-3.5 rounded-[6px] border border-white/20 text-sm transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Quick Application Modal */}
      <ApplyModal
        position={applyingPosition}
        isOpen={Boolean(applyingPosition)}
        onClose={() => setApplyingPosition(null)}
      />
    </div>
  );
}
