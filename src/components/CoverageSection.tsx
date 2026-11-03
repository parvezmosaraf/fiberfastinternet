'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface CoverageSectionProps {
  onOpenOrderModal: () => void;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({ onOpenOrderModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = COMPANY_INFO.areasCovered.filter(area => 
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ((area as any).en && (area as any).en.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="coverage" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-200/70 text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Network Coverage Area</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Speed Fiber Grid Across <span className="text-blue-600">Gazipur</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated pure optical fiber infrastructure active across Joydebpur Sadar, Shimultoli, BOF Gate, Mostan Khan Plaza, Rajbari, and surrounding industrial hubs.
          </p>
        </div>

        {/* Office Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                হেড অফিস (Head Office)
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {COMPANY_INFO.headOffice}
              </h3>
              <p className="text-xs text-slate-500">
                সরাসরি গ্রাহক সেবা, ক্যাশ বিল পরিশোধ ও নতুন সংযোগ পরামর্শের জন্য ভিজিট করুন।
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                অপারেশনাল ব্রাঞ্চ (Operational Center)
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {COMPANY_INFO.address}
              </h3>
              <p className="text-xs text-slate-500">
                শিমুলতলে বিওএফ এরিয়া সার্বক্ষণিক অন-ফিল্ড টেকনিশিয়ান টিম নিয়োজিত।
              </p>
            </div>
          </div>

        </div>

        {/* Coverage Finder Container */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="এলাকা দিয়ে অনুসন্ধান করুন (যেমনঃ শিমুলতলী, ডুয়েট, চৌরাস্তা, সালনা)..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
            <span>সক্রিয় কভারেজ জোন: <strong>{filteredAreas.length}টি স্থান</strong></span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ১০০% অপটিক্যাল ফাইবার
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filteredAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 hover:border-blue-500/50 hover:bg-white p-3 rounded-xl flex items-center justify-between gap-2 transition-all shadow-2xs"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 truncate" title={area.name}>
                    {area.name}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded shrink-0">
                  সক্রিয়
                </span>
              </div>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <div className="text-center py-6 text-slate-500 text-sm">
              <p>আপনার অনুসন্ধানকৃত এলাকার নাম সরাসরি তালিকায় পাওয়া যায়নি।</p>
              <p className="text-xs text-slate-400 mt-1">গাজীপুর সদর ও আশেপাশের যেকোনো এলাকায় দ্রুত সংযোগ পেতে আমাদের হটলাইনে যোগাযোগ করুন।</p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              💡 আপনার এলাকায় দ্রুত ফাইবার সংযোগ পেতে মাত্র ১ মিনিটে অনলাইনে আবেদন করুন।
            </div>

            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <span>আমার এলাকায় সংযোগ চাই</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
