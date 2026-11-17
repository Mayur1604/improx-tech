import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { company } from '@/app/data/company';

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
                className="h-9 w-auto brightness-110 drop-shadow-sm hover:opacity-95 transition-opacity"
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
