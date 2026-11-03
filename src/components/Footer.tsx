'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Radio, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  FIBER <span className="text-blue-500">FAST</span> INTERNET
                </span>
                <p className="text-xs text-slate-400 font-medium">Gazipur High-Speed Optical Fiber</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              গাজীপুর জয়দেবপুর, শিমুলতলী, বিওএফ এবং মোস্তান খাঁন প্লাজা এলাকার নির্ভরযোগ্য অপটিক্যাল ফাইবার ব্রডব্যান্ড নেটওয়ার্ক। বাফারিং ছাড়া হাই-স্পিড ইন্টারনেট ও তাৎক্ষণিক গ্রাহক সেবায় আমরা বিশ্বস্ত।
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-emerald-400">
                সংযোগ চার্জ ফ্রি
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-blue-400">
                BDIX 100+ Mbps
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                ২৪/৭ হেল্পলাইন
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              ন্যাভিগেশন
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">
                  ইন্টারনেট প্যাকেজসমূহ
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-blue-400 transition-colors">
                  কভারেজ এরিয়া
                </a>
              </li>
              <li>
                <a href="#bdix" className="hover:text-blue-400 transition-colors">
                  BDIX এফটিপি সার্ভার
                </a>
              </li>
              <li>
                <a href="#billpay" className="hover:text-blue-400 transition-colors">
                  বিল পেমেন্ট পদ্ধতি
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-blue-400 transition-colors">
                  অভিযোগ ও কমপ্লেইন
                </a>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-300 transition-colors">
                  অ্যাডমিন ড্যাশবোর্ড
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Numbers */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              যোগাযোগ ও হটলাইন
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="hover:text-white font-bold text-white text-sm">
                  {COMPANY_INFO.primaryPhone} (Main)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500">অন্যান্য হেল্পলাইন নম্বর:</div>
                  <div className="text-slate-300 font-medium space-y-0.5 mt-0.5">
                    {COMPANY_INFO.hotlines.map((h, i) => (
                      <div key={i}>{h}</div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white text-slate-300">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Physical Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              অফিসের ঠিকানা
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">হেড অফিস:</span>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.headOffice}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">লোকাল ব্রাঞ্চ:</span>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500" suppressHydrationWarning>
            © {new Date().getFullYear()} <strong className="text-slate-400 font-semibold">{COMPANY_INFO.name}</strong>. সর্বস্বত্ব সংরক্ষিত।
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors bg-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-800 cursor-pointer"
          >
            <span>উপরে যান</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
