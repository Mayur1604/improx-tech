import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { company } from '@/app/data/company';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.73-1.66-1.65-1.66Z" />
    </svg>
  );
}

function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XTwitterIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-gradient-to-b from-[#00002c] via-[#000022] to-[#000018] text-slate-300 pt-16 pb-12 border-t-2 border-[#0033a0]/50 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Column 1: Company & Contact Information */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Improx Tech Home"
            >
              <Image
                src="/images/improx-logo-white.png"
                alt="Improx Tech"
                width={150}
                height={38}
                priority
                className="h-9 w-auto brightness-110 drop-shadow-sm hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Custom software engineering, cloud infrastructure modernization, and product development services.
              Part of {company.parentGroup}.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#00a3e0] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{company.formattedPhone}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#00a3e0] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{company.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#00a3e0] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  <strong className="text-white block font-semibold">{company.addresses.us.label}:</strong>
                  <a
                    href={company.addresses.us.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {company.addresses.us.fullAddress}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#00a3e0] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  <strong className="text-white block font-semibold">{company.addresses.india.label}:</strong>
                  <a
                    href={company.addresses.india.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {company.addresses.india.fullAddress}
                  </a>
                </span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {company.socialLinks.linkedin && (
                  <a
                    href={company.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[6px] bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-[#00a3e0] hover:bg-[#0033a0]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                    title="Improx Tech on LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                )}
                {company.socialLinks.github && (
                  <a
                    href={company.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[6px] bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-[#00a3e0] hover:bg-[#0033a0]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                    title="Improx Tech on GitHub"
                    aria-label="GitHub"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                )}
                {company.socialLinks.instagram && (
                  <a
                    href={company.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[6px] bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-[#00a3e0] hover:bg-[#0033a0]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                    title="Improx Tech on Instagram"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {company.socialLinks.twitter && (
                  <a
                    href={company.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[6px] bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-[#00a3e0] hover:bg-[#0033a0]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xs"
                    title="Improx Tech on X"
                    aria-label="X (formerly Twitter)"
                  >
                    <XTwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Application Services */}
          <div>
            <h3 className="text-white font-bold text-xs mb-4 tracking-wider uppercase">
              Application Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/application-services/custom-software-development" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/application-services/enterprise-applications" className="hover:text-white transition-colors">
                  Enterprise Applications
                </Link>
              </li>
              <li>
                <Link href="/application-services/saas-development" className="hover:text-white transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/application-services/mobile-app-development" className="hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/application-services/cloud-applications" className="hover:text-white transition-colors">
                  Cloud Applications
                </Link>
              </li>
              <li>
                <Link href="/application-services/legacy-modernization" className="hover:text-white transition-colors">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/application-services" className="text-[#00a3e0] hover:text-sky-300 transition-colors font-semibold inline-flex items-center gap-1 pt-1">
                  <span>All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Engineering */}
          <div>
            <h3 className="text-white font-bold text-xs mb-4 tracking-wider uppercase">
              Product Engineering
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/product-engineering/product-strategy" className="hover:text-white transition-colors">
                  Product Strategy
                </Link>
              </li>
              <li>
                <Link href="/product-engineering/ui-ux-design" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/product-engineering/rapid-prototyping" className="hover:text-white transition-colors">
                  Rapid Prototyping
                </Link>
              </li>
              <li>
                <Link href="/product-engineering/qa-testing" className="hover:text-white transition-colors">
                  QA &amp; Testing
                </Link>
              </li>
              <li>
                <Link href="/product-engineering/devops-cicd" className="hover:text-white transition-colors">
                  DevOps &amp; CI/CD
                </Link>
              </li>
              <li>
                <Link href="/product-engineering" className="text-[#00a3e0] hover:text-sky-300 transition-colors font-semibold inline-flex items-center gap-1 pt-1">
                  <span>All Disciplines</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Technology & AI */}
          <div>
            <h3 className="text-white font-bold text-xs mb-4 tracking-wider uppercase">
              Technology &amp; Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/technology-services/cloud-migration" className="hover:text-white transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/technology-services/cyber-security" className="hover:text-white transition-colors">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/ai-bi/generative-ai" className="hover:text-white transition-colors">
                  Generative AI
                </Link>
              </li>
              <li>
                <Link href="/ai-bi/business-intelligence" className="hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Improx
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© {currentYear} {company.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-slate-400">Delaware, USA • Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
