'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Wifi,
  Clock,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO, PACKAGES, Package } from '@/data/company';

interface HeroProps {
  onOpenOrderModal: (packageId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const [selectedSpeedId, setSelectedSpeedId] = useState<string>('pkg-70');

  const activePackage: Package = 
    PACKAGES.find((p) => p.id === selectedSpeedId) || PACKAGES[3];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 border-b border-slate-200/80 pt-12 pb-16 md:pt-16 md:pb-24">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>গাজীপুর শিমুলতলী, বিওএফ ও জয়দেবপুর এলাকার সেরা ব্রডব্যান্ড নেটওয়ার্ক</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              আল্ট্রা-ফাস্ট ফাইবার ইন্টারনেট, <br className="hidden sm:inline" />
              <span className="text-blue-600">বাফারিং ছাড়াই</span> নিরবচ্ছিন্ন গতি
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              <strong className="text-slate-800 font-bold">Fiber Fast Internet</strong> সরাসরি আপনার রাউটার পর্যন্ত পিওর অপটিক্যাল ফাইবার সংযোগ সরবরাহ করে। থাকছে আল্ট্রা-লো লেটেন্সি গেমিং, এইচডি স্ট্রিমিং এবং নিরবচ্ছিন্ন অনলাইন সেবা।
            </p>

            {/* Free installation highlight banner */}
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                ফ্রি
              </div>
              <div className="text-left text-xs sm:text-sm">
                <span className="font-bold text-slate-900">
                  ইন্টারনেট সংযোগ চার্জ সম্পূর্ণ ফ্রি (০ টাকা)!
                </span>
                <p className="text-slate-600 text-xs mt-0.5">
                  সীমিত সময়ের অফারে অপটিক্যাল ফাইবার ড্রপ ওয়্যার ও স্প্লাইসিং সেটআপে কোনো ফি নেই।
                </p>
              </div>
            </div>

            {/* Key benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>১০০% আনলিমিটেড ফাইবার</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>BDIX ১০০+ Mbps ক্যাশ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>২৪/৭ কাস্টমার সাপোর্ট</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer"
              >
                <span>নতুন সংযোগের আবেদন করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-300 shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Hotlines info bar */}
            <div className="pt-2 border-t border-slate-200/80">
              <p className="text-xs text-slate-500 mb-2 font-medium">
                জরুরি হেল্পলাইন নম্বরসমূহ (২৪ ঘণ্টা খোলা):
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <a 
                  href="tel:01314088375" 
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors"
                >
                  01314-088375 (Main)
                </a>
                {COMPANY_INFO.hotlines.map((num, i) => (
                  <a 
                    key={i} 
                    href={`tel:${num.replace(/\s+/g, '')}`} 
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Plan Selector Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-6 sm:p-7 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Package Calculator
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    Speed & Plan Selector
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Free Installation</span>
                </div>
              </div>

              {/* Speed Switcher Buttons */}
              <div className="my-5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide block mb-2">
                  Select Internet Speed:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PACKAGES.map((pkg) => {
                    const isSelected = pkg.id === selectedSpeedId;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedSpeedId(pkg.id)}
                        className={`py-2.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <div className="text-lg font-black leading-tight">
                          {pkg.speedNum}
                        </div>
                        <div className={`text-[10px] font-bold uppercase ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                          MBPS
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Plan Detail View */}
              <div className="bg-slate-50 rounded-xl p-4.5 border border-slate-200/80 space-y-3.5 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-500">Plan Tier:</span>
                    <h4 className="text-base font-bold text-slate-900">{activePackage.name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-500">Monthly Bill:</span>
                    <div className="text-2xl font-black text-blue-600 leading-tight">
                      ৳{activePackage.price} <span className="text-xs font-medium text-slate-500">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200" />

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/60">
                    <span className="text-slate-500 block text-[11px]">BDIX & Cache:</span>
                    <span className="font-bold text-slate-900">{activePackage.bdixSpeed}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/60">
                    <span className="text-slate-500 block text-[11px]">Setup Charge:</span>
                    <span className="font-bold text-emerald-700">0 Tk (Free)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  <strong className="text-slate-800">Ideal For:</strong> {activePackage.idealFor}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenOrderModal(activePackage.id)}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book {activePackage.speed} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center text-[11px] text-slate-500">
                Head Office: Mostan Khan Plaza (3rd Floor), Shimultoli, Gazipur
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
