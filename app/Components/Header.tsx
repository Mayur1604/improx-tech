'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  Code2,
  Building2,
  Layers,
  Smartphone,
  Globe,
  Cloud,
  Terminal,
  GitMerge,
  RefreshCw,
  LifeBuoy,
  Compass,
  Palette,
  Zap,
  CheckSquare,
  GitBranch,
  Cpu,
  CloudUpload,
  ShieldCheck,
  Database,
  Lock,
  Server,
  Radio,
  Sparkles,
  BrainCircuit,
  BarChart3,
  MessageSquareCode,
  PieChart,
  LineChart,
  LucideIcon,
} from 'lucide-react';
import { company } from '@/app/data/company';

interface SubService {
  name: string;
  href: string;
  icon: LucideIcon;
  desc: string;
}

interface NavCategory {
  title: string;
  href: string;
  featuredTitle?: string;
  featuredDesc?: string;
  dropdown?: SubService[];
}

const NAV_ITEMS: NavCategory[] = [
  {
    title: 'Application Services',
    href: '/application-services',
    featuredTitle: 'Enterprise Application Scoping',
    featuredDesc: 'Bespoke custom software and SaaS platforms engineered with clean domain boundaries.',
    dropdown: [
      { name: 'Custom Software Development', href: '/application-services/custom-software-development', icon: Code2, desc: 'Bespoke business platforms & workflow automation' },
      { name: 'Enterprise Applications', href: '/application-services/enterprise-applications', icon: Building2, desc: 'High-availability operational systems connecting ERPs' },
      { name: 'SaaS Development', href: '/application-services/saas-development', icon: Layers, desc: 'Multi-tenant cloud platforms with isolated schemas' },
      { name: 'Web Applications', href: '/application-services/web-applications', icon: Globe, desc: 'Fast, responsive web applications with Next.js & React' },
      { name: 'Mobile App Development', href: '/application-services/mobile-app-development', icon: Smartphone, desc: 'Cross-platform iOS and Android apps with React Native' },
      { name: 'Cloud Applications', href: '/application-services/cloud-applications', icon: Cloud, desc: 'Cloud-native microservices and container deployments' },
      { name: 'API Development', href: '/application-services/api-development', icon: Terminal, desc: 'High-throughput REST and GraphQL API gateways' },
      { name: 'System Integration', href: '/application-services/system-integration', icon: GitMerge, desc: 'Data orchestration across ERPs, CRMs, and payment tools' },
      { name: 'Legacy Modernization', href: '/application-services/legacy-modernization', icon: RefreshCw, desc: 'Strangler-fig migration decomposing legacy monoliths' },
      { name: 'Maintenance & Support', href: '/application-services/maintenance-support', icon: LifeBuoy, desc: 'Continuous SLA patching, audits, and performance tuning' },
    ],
  },
  {
    title: 'Product Engineering',
    href: '/product-engineering',
    featuredTitle: 'Sprint Delivery Velocity',
    featuredDesc: 'From validated UX prototypes to scalable market-ready production codebases.',
    dropdown: [
      { name: 'Product Strategy', href: '/product-engineering/product-strategy', icon: Compass, desc: 'Technical roadmapping, MVP scoping, and architecture' },
      { name: 'UI/UX Design', href: '/product-engineering/ui-ux-design', icon: Palette, desc: 'Enterprise design systems and responsive user journeys' },
      { name: 'Rapid Prototyping', href: '/product-engineering/rapid-prototyping', icon: Zap, desc: 'Working proof-of-concept builds with rapid feedback' },
      { name: 'QA & Testing', href: '/product-engineering/qa-testing', icon: CheckSquare, desc: 'Automated unit, integration, stress, and regression suites' },
      { name: 'DevOps & CI/CD', href: '/product-engineering/devops-cicd', icon: GitBranch, desc: 'Automated build, test, and release deployment pipelines' },
      { name: 'Opensource Engineering', href: '/product-engineering/opensource-engineering', icon: Cpu, desc: 'Open-source frameworks and community-backed tools' },
    ],
  },
  {
    title: 'Technology Services',
    href: '/technology-services',
    featuredTitle: 'Cloud & SRE Operations',
    featuredDesc: 'Terraform infrastructure-as-code, multi-cloud migrations, and continuous monitoring.',
    dropdown: [
      { name: 'Cloud Migration', href: '/technology-services/cloud-migration', icon: CloudUpload, desc: 'Workload discovery, refactoring, and cloud cutover' },
      { name: 'DevSecOps', href: '/technology-services/devsecops', icon: ShieldCheck, desc: 'Security-integrated CI/CD pipelines and vulnerability scans' },
      { name: 'Data Engineering', href: '/technology-services/data-engineering', icon: Database, desc: 'Data warehouses, ETL pipelines, and streaming lakes' },
      { name: 'Cyber Security', href: '/technology-services/cyber-security', icon: Lock, desc: 'Role-based access, encryption, and security audits' },
      { name: 'Infrastructure Mgmt', href: '/technology-services/infrastructure-mgmt', icon: Server, desc: 'Multi-cloud Kubernetes cluster management and monitoring' },
      { name: 'IoT Solutions', href: '/technology-services/iot-solutions', icon: Radio, desc: 'Edge device telemetry, MQTT brokers, and IoT gateways' },
    ],
  },
  {
    title: 'AI & Business Intelligence',
    href: '/ai-bi',
    featuredTitle: 'Enterprise Machine Intelligence',
    featuredDesc: 'Deterministic LLM guardrails, executive analytics cockpits, and real-time pipelines.',
    dropdown: [
      { name: 'Generative AI', href: '/ai-bi/generative-ai', icon: Sparkles, desc: 'Enterprise SLM integration and semantic search' },
      { name: 'Machine Learning', href: '/ai-bi/machine-learning', icon: BrainCircuit, desc: 'Predictive modeling, classification, and scoring engines' },
      { name: 'Business Intelligence', href: '/ai-bi/business-intelligence', icon: BarChart3, desc: 'Executive reporting cockpits and self-service analytics' },
      { name: 'NLP & Automation', href: '/ai-bi/nlp-automation', icon: MessageSquareCode, desc: 'Natural language classification and document extraction' },
      { name: 'Data Visualization', href: '/ai-bi/data-visualization', icon: PieChart, desc: 'Interactive operational dashboards and metric tracking' },
      { name: 'Predictive Analysis', href: '/ai-bi/predictive-analysis', icon: LineChart, desc: 'Time-series forecasting, churn prediction, and anomaly detection' },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close all menus immediately and apply a short cooldown so re-hovering during page transition won't re-trigger
  const closeAllMenus = useCallback(() => {
    setHoveredCategory(null);
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    // Set cooldown so re-hover doesn't immediately open menu during transition
    setIsCooldownActive(true);
    setTimeout(() => {
      setIsCooldownActive(false);
    }, 350);
  }, []);

  // Automatically reset menu state if pathname changes (React recommended pattern for state adjustment)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setHoveredCategory(null);
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllMenus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeAllMenus]);

  // Close desktop dropdown on click outside header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setHoveredCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  const isRouteActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 transition-all duration-300">
      
      {/* Top Contact & Location Bar with live dual-hub status */}
      <div className="bg-[#000033] text-white text-xs py-2 px-6 border-b border-white/10 select-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-300">
            {company.phone && (
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors group"
                title="Direct Corporate Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#00a3e0] group-hover:scale-110 transition-transform" />
                <span className="font-mono">{company.formattedPhone}</span>
              </a>
            )}
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors group"
                title="Engineering Inquiries"
              >
                <Mail className="w-3.5 h-3.5 text-[#00a3e0] group-hover:scale-110 transition-transform" />
                <span>{company.email}</span>
              </a>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-white/10 border border-white/10 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dual-Hub Active</span>
            </span>
            <span>Delaware, USA &bull; Pune, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with dynamic scroll elevation & glassmorphism */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-sm py-2'
            : 'bg-white border-slate-100 py-3'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with clean hover opacity */}
          <div className="shrink-0">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="flex items-center group"
              aria-label="Improx Tech Home"
            >
              <Image
                src="/images/improx-logo.png"
                alt="Improx Tech"
                width={150}
                height={38}
                priority
                className="h-9 w-auto transition-transform duration-200 group-hover:scale-102"
              />
            </Link>
          </div>

          {/* Desktop Navigation with Interactive Mega-Dropdowns */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {NAV_ITEMS.map((item) => {
                const active = isRouteActive(item.href);
                const hasDropdown = Boolean(item.dropdown);

                return (
                  <li
                    key={item.title}
                    className="relative py-2 flex items-center"
                    onMouseEnter={() => {
                      if (!isCooldownActive && hasDropdown) {
                        setHoveredCategory(item.title);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        setHoveredCategory(null);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`relative flex items-center gap-1.5 py-1 transition-colors ${
                        active
                          ? 'text-[#0033a0] font-semibold'
                          : 'hover:text-[#0033a0] text-slate-700'
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                            hoveredCategory === item.title ? 'rotate-180 text-[#0033a0]' : ''
                          }`}
                        />
                      )}
                      
                      {/* Active Route Indicator underline */}
                      {active && (
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0033a0] rounded-full" />
                      )}
                    </Link>

                    {/* Interactive Mega-Dropdown Menu */}
                    {hasDropdown && item.dropdown && hoveredCategory === item.title && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fadeIn">
                        <div
                          className={`bg-white border border-slate-200 rounded-[6px] shadow-2xl p-6 grid grid-cols-12 gap-6 ${
                            item.dropdown.length > 6 ? 'w-[780px] lg:w-[860px]' : 'w-[680px] lg:w-[760px]'
                          }`}
                        >
                          {/* Left Columns: Interactive Service List */}
                          <div
                            className={`grid gap-2.5 ${
                              item.dropdown.length > 6 ? 'col-span-8 grid-cols-2' : 'col-span-8 grid-cols-2'
                            }`}
                          >
                            {item.dropdown.map((sub) => {
                              const SubIcon = sub.icon;
                              const isSubActive = pathname === sub.href;

                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={closeAllMenus}
                                  className={`group/sub flex items-start gap-3 p-2.5 rounded-[6px] transition-all duration-150 border ${
                                    isSubActive
                                      ? 'bg-blue-50/80 border-blue-200 shadow-2xs'
                                      : 'border-transparent hover:bg-slate-50 hover:border-slate-200'
                                  }`}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${
                                      isSubActive
                                        ? 'bg-[#0033a0] text-white border-[#0033a0]'
                                        : 'bg-slate-50 border-slate-200 text-[#0033a0] group-hover/sub:bg-[#0033a0] group-hover/sub:text-white group-hover/sub:border-[#0033a0]'
                                    }`}
                                  >
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="space-y-0.5">
                                    <div
                                      className={`text-xs font-bold leading-snug transition-colors ${
                                        isSubActive
                                          ? 'text-[#0033a0]'
                                          : 'text-slate-900 group-hover/sub:text-[#0033a0]'
                                      }`}
                                    >
                                      {sub.name}
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-tight line-clamp-1">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Right Column: Featured Callout Card */}
                          <div className="col-span-4 bg-slate-50 border border-slate-200 rounded-[6px] p-5 flex flex-col justify-between space-y-4">
                            <div className="space-y-2">
                              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0033a0] px-2 py-0.5 rounded-[4px] bg-white border border-slate-200 inline-block">
                                Engineering Practice
                              </span>
                              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                                {item.featuredTitle || item.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {item.featuredDesc || 'Engineered by dedicated pods under strict US legal governance.'}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-200 space-y-2">
                              <Link
                                href={item.href}
                                onClick={closeAllMenus}
                                className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#0033a0] hover:text-[#00287a] group/cta"
                              >
                                <span>Explore Overview</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1" />
                              </Link>
                              <Link
                                href="/contact"
                                onClick={closeAllMenus}
                                className="inline-flex items-center justify-center w-full bg-[#0033a0] hover:bg-[#00287a] text-white text-[11px] font-semibold py-2 px-3 rounded-[4px] transition-colors"
                              >
                                Talk to an Architect
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Direct CTA Button */}
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="btn-interactive inline-flex items-center gap-2 bg-[#0033a0] hover:bg-[#00287a] text-white text-xs font-semibold px-5 py-2.5 rounded-[6px] shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-[6px] transition-colors border border-transparent hover:border-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Interactive Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto animate-fadeIn">
            <div className="px-6 py-5 space-y-4">
              <ul className="flex flex-col divide-y divide-slate-100">
                {NAV_ITEMS.map((item) => {
                  const active = isRouteActive(item.href);

                  return (
                    <li key={item.title} className="py-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`font-medium text-sm py-1 transition-colors ${
                            active ? 'text-[#0033a0] font-bold' : 'text-slate-900 hover:text-[#0033a0]'
                          }`}
                          onClick={closeAllMenus}
                        >
                          {item.title}
                        </Link>

                        {item.dropdown && (
                          <button
                            onClick={() => toggleMobileDropdown(item.title)}
                            aria-label={`Toggle ${item.title} submenu`}
                            className="p-2 text-slate-500 hover:text-slate-900"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeMobileDropdown === item.title ? 'rotate-180 text-[#0033a0]' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {item.dropdown && activeMobileDropdown === item.title && (
                        <ul className="pl-3 pb-2 pt-2 grid grid-cols-1 gap-1.5 border-l-2 border-[#0033a0]/30 ml-2 mt-1">
                          {item.dropdown.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="flex items-center gap-2 text-xs text-slate-600 hover:text-[#0033a0] py-1.5 px-2 rounded-[4px] hover:bg-slate-50 transition-colors"
                                  onClick={closeAllMenus}
                                >
                                  <SubIcon className="w-3.5 h-3.5 text-[#00a3e0]" />
                                  <span>{sub.name}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <Link
                  href="/contact"
                  className="btn-interactive flex items-center justify-center w-full bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-4 py-3 rounded-[6px] text-xs transition-colors shadow-xs"
                  onClick={closeAllMenus}
                >
                  <span>Start an Architectural Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 btn-arrow" />
                </Link>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                  <span>Delaware, USA</span>
                  <span>&bull;</span>
                  <span>Pune, India</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
