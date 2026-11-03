'use client';

import React from 'react';
import { 
  Wifi, 
  ShieldCheck, 
  Tv, 
  Headphones, 
  Award, 
  Gamepad2,
  CheckCircle2,
  Server
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '১০০% পিওর অপটিক্যাল ফাইবার',
      desc: 'সরাসরি আপনার রাউটার পর্যন্ত অপটিক্যাল ফাইবার ড্রপ ওয়্যার। ঝড়-বৃষ্টিতেও সিগন্যাল থাকবে সম্পূর্ণ নিরবচ্ছিন্ন।',
      badge: 'Zero Drop',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: Award,
      title: 'সংযোগ চার্জ সম্পূর্ণ ফ্রি',
      desc: 'ফাইবার অপটিক কেবল, ড্রপ ওয়্যার এবং স্প্লাইসিং ইনস্টলেশনে কোনো গোপন বা বাড়তি চার্জ নেই।',
      badge: 'Free Setup',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Tv,
      title: 'BDIX ও লোকাল ক্যাশ ১০০+ Mbps',
      desc: 'ইউটিউব, ফেসবুক, নেটফ্লিক্স এবং জনপ্রিয় বিডিআইএক্স মুভি এফটিপি সার্ভারগুলো চলবে কোনো বাফারিং ছাড়া।',
      badge: 'Buffer-Free',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      icon: Gamepad2,
      title: 'আল্ট্রা-লো পিং অনলাইন গেমিং',
      desc: 'Valorant, CS2, PUBG, Free Fire খেলুন সর্বনিম্ন পিং ও শূন্য প্যাকেট লস সহ নির্ভরযোগ্য সংযোগে।',
      badge: '<15ms Ping',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      icon: ShieldCheck,
      title: '৯৯.৯% আপটাইম গ্যারান্টি',
      desc: 'মাল্টিপল ব্যাকবোন ও ডুয়াল-রিং অপটিক্যাল ব্যাকআপ সিস্টেম দিয়ে নিরবচ্ছিন্ন ইন্টারনেট নিশ্চিত।',
      badge: 'High Reliability',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    },
    {
      icon: Headphones,
      title: '২৪/৭ লোকাল টেকনিক্যাল সাপোর্ট',
      desc: 'গাজীপুর শিমুলতলী ও মোস্তান খাঁন প্লাজায় আমাদের নিজস্ব দক্ষ টেকনিশিয়ান টিম সবসময় প্রস্তুত।',
      badge: '24/7 Hotline',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Why Choose Fiber Fast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Speed Reliability for <span className="text-blue-600">Home & Business</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We deliver direct fiber-to-the-home (FTTH) infrastructure with zero packet loss, free installation, and 24/7 dedicated local field support in Gazipur.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 transition-all duration-200 hover:bg-white hover:shadow-md hover:border-slate-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Network Infrastructure Summary */}
        <div className="mt-14 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Network Performance
              </span>
              <h3 className="text-2xl font-bold text-white">
                লোকাল OLT নোড ও ডাইরেক্ট BDIX রাউটিং
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                গাজীপুর সদরে আমাদের সেন্ট্রাল OLT ও অপটিক্যাল ফাইবার রিং সংযোগ থাকায় ঢাকায় অবস্থিত ন্যাশনাল ইন্টারনেট এক্সচেঞ্জের (BDIX) সাথে সর্বনিম্ন পিং পাওয়া যায়।
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> BDIX Ping: 2–8 ms
                </span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" /> Singapore Ping: ~38 ms
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <CheckCircle2 className="w-4 h-4" /> Packet Loss: 0.00%
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                <span className="text-slate-400 font-medium">সার্ভিস নোড স্ট্যাটাস</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Nodes Operational
                </span>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Shimultoli Main Node:</span>
                  <span className="text-emerald-400 font-bold">100% Online</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[99.9%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>BOF Gate & Joydebpur Ring:</span>
                  <span className="text-emerald-400 font-bold">100% Online</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Mostan Khan Plaza Hub:</span>
                  <span className="text-blue-400 font-bold">Active Primary</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
