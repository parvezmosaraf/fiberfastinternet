'use client';

import React from 'react';
import { 
  Server, 
  Film, 
  ArrowRight,
  Tv
} from 'lucide-react';
import { BDIX_SERVERS, COMPANY_INFO } from '@/data/company';

export const BdixSection: React.FC = () => {
  return (
    <section id="bdix" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5 text-blue-600" />
            <span>BDIX & Entertainment Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Buffer-Free Entertainment with <span className="text-blue-600">100+ Mbps BDIX</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Enjoy instant bufferless streaming, direct local FTP movie servers, and live TV channels powered by our low-latency peering infrastructure.
          </p>
        </div>

        {/* Server Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BDIX_SERVERS.map((server, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/90 hover:border-slate-300 rounded-2xl p-5 flex flex-col justify-between transition-all hover:bg-white hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                      <Film className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                      {server.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {server.status}
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">ক্যাটাগরি:</span>
                    <span className="text-slate-800 font-medium">{server.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ক্যাশ স্পিড:</span>
                    <span className="text-amber-700 font-bold">{server.speed}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">লোকাল ক্যাশ কানেক্টেড</span>
                <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Direct Access →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BDIX Tip Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <Server className="w-5 h-5 text-amber-700 shrink-0 hidden sm:block" />
            <div>
              <h4 className="text-slate-900 font-bold text-sm">
                বিডিআইএক্স সংযোগের বিশেষ সুবিধা
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                আপনার মূল প্যাকেজের স্পিড যাই হোক না কেন, BDIX এফটিপি সার্ভার ও ক্যাশ ডাউনলোড সবসময় ১০০ Mbps পর্যন্ত গতিতে চলবে!
              </p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="shrink-0 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            সার্ভার আইপি জানতে কল করুন
          </a>
        </div>

      </div>
    </section>
  );
};
