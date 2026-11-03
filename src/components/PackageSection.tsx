'use client';

import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Phone,
  Wifi,
  Tv,
  Gamepad2,
  Download
} from 'lucide-react';
import { PACKAGES, Package, COMPANY_INFO } from '@/data/company';

interface PackageSectionProps {
  onSelectPackage: (pkg: Package) => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onSelectPackage }) => {
  const [billingTab, setBillingTab] = useState<'home' | 'corporate'>('home');

  // Curated, non-repetitive feature highlights for each package
  const packageHighlights: Record<string, { badge: string; bullets: string[]; bestFor: string }> = {
    'pkg-35': {
      badge: 'Starter',
      bullets: [
        '35 Mbps Dedicated Pure Optical Fiber',
        '100 Mbps BDIX & Local Cache Speed',
        'Buffer-free YouTube & Facebook HD',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        '24/7 Helpline Support'
      ],
      bestFor: 'Browsing, Social Media & Regular Home Usage'
    },
    'pkg-50': {
      badge: 'Basic',
      bullets: [
        '50 Mbps High-Speed Fiber Internet',
        '100 Mbps BDIX Movies & Media Access',
        'Smooth HD Streaming across Multiple Devices',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        'Low Latency Zoom & Video Conferencing'
      ],
      bestFor: 'Small Families, Students & Online Classes'
    },
    'pkg-60': {
      badge: 'Standard',
      bullets: [
        '60 Mbps Blazing Fast Pure Optical Fiber',
        '150 Mbps BDIX & Local Cache Access',
        'Full HD & 2K Streaming Across 4+ Devices',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        'Smooth Gaming Ping (<15ms Local)'
      ],
      bestFor: 'Multi-Device Streaming & Freelancers'
    },
    'pkg-70': {
      badge: 'Turbo Popular',
      bullets: [
        '70 Mbps Pure Optical Fiber Dedicated Speed',
        '150 Mbps Supercharged BDIX & FTP Cache',
        '4K UHD Netflix, Prime Video & YouTube',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        'Ultra-Low Latency for Valorant, PUBG, CS2',
        'Priority Technical Support'
      ],
      bestFor: 'Gamers, Remote Work & Multi-Device Homes'
    },
    'pkg-80': {
      badge: 'Pro Gamer',
      bullets: [
        '80 Mbps High-Throughput Optical Bandwidth',
        '200 Mbps Blazing Fast BDIX Server Access',
        'Zero Packet Loss Dual-Ring Backbone',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        'High Bitrate Live Streaming & Fast Uploads'
      ],
      bestFor: 'Ultra-Low Ping Gaming & Fast Downloads'
    },
    'pkg-100': {
      badge: 'Ultra Pro',
      bullets: [
        '100 Mbps Enterprise-grade High Throughput',
        '200 Mbps Blazing Fast BDIX & FTP Servers',
        'Simultaneous 4K UHD Streaming on 8+ Screens',
        'Free Optical Fiber Connection (০ টাকা সংযোগ ফি)',
        'Dedicated Dual-Ring Redundancy & Zero Loss',
        'VIP Quick Response Technical Hotline'
      ],
      bestFor: 'Heavy Downloaders, Smart Homes & Studios'
    }
  };

  return (
    <section id="packages" className="py-20 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>Official Internet Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select Your Preferred <span className="text-blue-600">Fiber Speed</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            All plans include <strong className="text-emerald-700 font-bold">100% Free Installation (সংযোগ চার্জ সম্পূর্ণ ফ্রি)</strong>, unlimited data with zero buffering, and high-speed BDIX peering.
          </p>

          {/* Plan Category Tabs */}
          <div className="mt-6 inline-flex p-1 bg-slate-200/70 rounded-xl">
            <button
              onClick={() => setBillingTab('home')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                billingTab === 'home'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home Fiber Plans
            </button>
            <button
              onClick={() => setBillingTab('corporate')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                billingTab === 'corporate'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corporate & SME Bandwidth
            </button>
          </div>
        </div>

        {billingTab === 'home' ? (
          /* 6 Clean Pricing Cards in 3x2 Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {PACKAGES.map((pkg) => {
              const isPopular = pkg.isPopular;
              const details = packageHighlights[pkg.id] || {
                badge: pkg.name,
                bullets: pkg.features.slice(0, 5),
                bestFor: pkg.idealFor
              };

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl bg-white flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'border-2 border-blue-600 shadow-lg ring-1 ring-blue-600/20 lg:-translate-y-2'
                      : 'border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                  } p-6 sm:p-7`}
                >
                  {/* Clean Popular Badge that doesn't clip */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-600 text-white font-bold text-[11px] px-3.5 py-1 rounded-full shadow-xs uppercase tracking-wider">
                      Most Popular Plan
                    </div>
                  )}

                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {pkg.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        Free Setup
                      </span>
                    </div>

                    {/* Speed & Price Showcase */}
                    <div className="pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                          {pkg.speedNum}
                        </span>
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                          MBPS
                        </span>
                      </div>

                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-blue-600">
                          ৳{pkg.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          / month
                        </span>
                      </div>
                    </div>

                    {/* Differentiator Specs Box */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-5 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">BDIX Speed:</span>
                        <strong className="text-slate-900">{pkg.bdixSpeed}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Connection Fee:</span>
                        <strong className="text-emerald-700">0 Tk (Free!)</strong>
                      </div>
                    </div>

                    {/* Curated Features Checklist */}
                    <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                      {details.bullets.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                        isPopular
                          ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white'
                      }`}
                    >
                      <span>Choose {pkg.speed}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                      {details.bestFor}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Corporate Solution View */
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Enterprise Solutions
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Dedicated Leased Line & SME Bandwidth
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored high-capacity internet for corporate offices, garments & textile industries, educational institutes, and studios across Gazipur Joydebpur, Shimultoli, and BOF industrial belts.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>1:1 Dedicated Symmetrical Bandwidth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Public IP Allocation & Reverse DNS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Dual-ring Fiber Redundancy with 99.9% SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Dedicated Key Account Manager & 24/7 NOC</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 text-center">
                <h4 className="text-base font-bold text-slate-900">
                  Request a Custom Corporate Proposal
                </h4>
                <p className="text-xs text-slate-500">
                  Our enterprise network engineers will inspect your facility and provide a customized quote within 24 hours.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Corporate Desk: {COMPANY_INFO.primaryPhone}</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  Or email directly: <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 underline">{COMPANY_INFO.email}</a>
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
