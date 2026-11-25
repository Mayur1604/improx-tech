'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Clock, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { company } from '@/app/data/company';

interface HubInfo {
  id: 'delaware' | 'pune';
  label: string;
  flag: string;
  headline: string;
  coordinates: string;
  image: string;
  imageAlt: string;
  timezone: string;
  timeOffset: string;
  role: string;
  focus: string[];
  address: {
    street: string;
    cityStateZip: string;
    country: string;
    mapsUrl?: string;
  };
  contact: {
    phone?: string;
    email: string;
  };
}

const HUBS: HubInfo[] = [
  {
    id: 'delaware',
    label: 'Delaware, USA (Corporate HQ)',
    flag: '🇺🇸',
    headline: 'Corporate Governance & Solutions Architecture',
    coordinates: '38.7745° N, 75.1393° W',
    image: '/images/about/delaware-hq.webp',
    imageAlt: 'Improx Tech Delaware Corporate Headquarters',
    timezone: 'America/New_York',
    timeOffset: 'EST / UTC-5',
    role: 'Primary legal jurisdiction, Master Services Agreements (MSAs), US business-hours solutions architecture, and strategic roadmap alignment.',
    focus: [
      'Delaware Title 8 corporate governance and strict IP assignment',
      'Executive technical discovery and architecture roadmap reviews',
      'Direct US business-hours alignment with client engineering teams',
      'Mutual NDA execution and compliance oversight (SOC 2, HIPAA)',
    ],
    address: {
      street: company.addresses.us.street,
      cityStateZip: `${company.addresses.us.city}, ${company.addresses.us.region} ${company.addresses.us.postalCode}`,
      country: company.addresses.us.country,
      mapsUrl: company.addresses.us.mapsUrl,
    },
    contact: {
      phone: company.formattedPhone,
      email: company.email,
    },
  },
  {
    id: 'pune',
    label: 'Pune, India (Technology Center)',
    flag: '🇮🇳',
    headline: 'Continuous Engineering & Technology Delivery',
    coordinates: '18.5590° N, 73.7868° E',
    image: '/images/about/pune-techcenter.webp',
    imageAlt: 'Improx Tech Pune Technology Center',
    timezone: 'Asia/Kolkata',
    timeOffset: 'IST / UTC+5:30',
    role: 'Dedicated cross-functional engineering pods, automated CI/CD pipelines, full-stack microservices delivery, and 24/7 cloud SRE support.',
    focus: [
      'Dedicated engineering pods assigned exclusively to client roadmaps',
      'Two-week agile sprint cadences with runnable staging deployments',
      'Direct developer-to-developer collaboration via Slack & GitHub PRs',
      'Automated test suites, static code analysis, and security scanning',
    ],
    address: {
      street: company.addresses.india.street,
      cityStateZip: `${company.addresses.india.city}, ${company.addresses.india.region} ${company.addresses.india.postalCode}`,
      country: company.addresses.india.country,
      mapsUrl: company.addresses.india.mapsUrl,
    },
    contact: {
      email: company.email,
    },
  },
];

export default function DeliveryHubExplorer() {
  const [activeTab, setActiveTab] = useState<'delaware' | 'pune'>('delaware');
  const [currentTimes, setCurrentTimes] = useState<{ delaware: string; pune: string }>({
    delaware: '',
    pune: '',
  });

  const activeHub = HUBS.find((h) => h.id === activeTab) || HUBS[0];

  useEffect(() => {
    const updateTimes = () => {
      try {
        const now = new Date();
        const delawareTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);

        const puneTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);

        setCurrentTimes({ delaware: delawareTime, pune: puneTime });
      } catch {
        // Fallback gracefully if Intl timeZone is unavailable
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Segmented Tab Controls (Apple Developer Style) */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-slate-200">
        <div 
          role="tablist" 
          aria-label="Delivery Hubs"
          className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold"
        >
          {HUBS.map((hub) => {
            const isSelected = activeTab === hub.id;
            return (
              <button
                key={hub.id}
                role="tab"
                id={`tab-${hub.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${hub.id}`}
                onClick={() => setActiveTab(hub.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{hub.flag}</span>
                <span>{hub.id === 'delaware' ? 'Delaware Corporate HQ' : 'Pune Technology Center'}</span>
              </button>
            );
          })}
        </div>

        {/* Live Local Time Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-[#0033a0]" />
          <span>
            {activeTab === 'delaware' ? 'Delaware' : 'Pune'}:{' '}
            <strong className="text-slate-900">
              {activeTab === 'delaware' ? currentTimes.delaware || 'EST (UTC-5)' : currentTimes.pune || 'IST (UTC+5:30)'}
            </strong>
          </span>
          <span className="text-[10px] text-slate-400">({activeHub.timeOffset})</span>
        </div>
      </div>

      {/* Hub Detail Showcase */}
      <div 
        role="tabpanel"
        id={`panel-${activeHub.id}`}
        aria-labelledby={`tab-${activeHub.id}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Left Visual Card */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 min-h-[340px] flex flex-col justify-between p-6 sm:p-8 text-white shadow-xs group">
          <Image
            src={activeHub.image}
            alt={activeHub.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />

          {/* Coordinates Top */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/40 backdrop-blur-md border border-white/15 text-slate-200">
              <MapPin className="w-3 h-3 text-[#00a3e0]" />
              <span>{activeHub.coordinates}</span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              {activeHub.id === 'delaware' ? 'US Hub' : 'India Hub'}
            </span>
          </div>

          {/* Office Address Bottom */}
          <div className="relative z-10 space-y-3 pt-6">
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                {activeHub.label}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {activeHub.address.street}, {activeHub.address.cityStateZip}, {activeHub.address.country}
              </p>
            </div>

            <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
              {activeHub.address.mapsUrl ? (
                <a
                  href={activeHub.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#00a3e0] hover:text-white font-semibold transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-slate-400">Headquarters</span>
              )}
              <span className="font-mono text-slate-400">{activeHub.contact.email}</span>
            </div>
          </div>
        </div>

        {/* Right Operational Framework Card */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {activeHub.id === 'delaware' ? (
                <ShieldCheck className="w-5 h-5 text-[#0033a0]" />
              ) : (
                <Cpu className="w-5 h-5 text-[#0033a0]" />
              )}
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0033a0]">
                {activeHub.id === 'delaware' ? 'Governance Protocol' : 'Velocity Protocol'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
              {activeHub.headline}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {activeHub.role}
            </p>

            {/* Core Commitments Checklist */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              {activeHub.focus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Cadence Callout */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
            <span>
              <strong>Collaboration Standard:</strong> Synchronous architectural reviews in US Eastern Time with 24/7 continuous engineering delivery.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
