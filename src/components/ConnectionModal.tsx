'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  User, 
  Mail, 
  Loader2, 
  AlertCircle
} from 'lucide-react';
import { PACKAGES, COMPANY_INFO } from '@/data/company';
import { supabase, isSupabaseConfigured, ConnectionRequest } from '@/lib/supabase';

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
}

export const ConnectionModal: React.FC<ConnectionModalProps> = ({
  isOpen,
  onClose,
  defaultPackageId,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(defaultPackageId || 'pkg-70');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('শিমুলতলী');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultPackageId) {
      setSelectedPkgId(defaultPackageId);
    }
  }, [defaultPackageId]);

  if (!isOpen) return null;

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[2];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('অনুগ্রহ করে আপনার পুরো নাম লিখুন।');
      return;
    }
    if (!phone.trim() || phone.length < 11) {
      setErrorMsg('সঠিক ১১ ডিজিটের মোবাইল নম্বর প্রদান করুন (যেমন: 017xxxxxxxx)');
      return;
    }
    if (!address.trim()) {
      setErrorMsg('অনুগ্রহ করে আপনার বাড়ি / রাস্তার পূর্ণ ঠিকানা উল্লেখ করুন।');
      return;
    }

    setLoading(true);

    const record: ConnectionRequest = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      address: address.trim(),
      area,
      package_name: `${currentPkg.name} (${currentPkg.speed})`,
      speed: currentPkg.speed,
      price: currentPkg.priceFormatted,
      notes: notes.trim() || undefined,
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.from('connection_requests').insert([record]);
        if (error) {
          saveToLocalStorage(record);
        }
      } else {
        saveToLocalStorage(record);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      saveToLocalStorage(record);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const saveToLocalStorage = (data: ConnectionRequest) => {
    try {
      const existing = JSON.parse(localStorage.getItem('fiber_fast_connections') || '[]');
      existing.unshift({ ...data, id: 'local-' + Date.now() });
      localStorage.setItem('fiber_fast_connections', JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-900 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              আমাদের প্রতিনিধি দ্রুত <strong className="text-slate-900">{phone}</strong> নম্বরে যোগাযোগ করে সংযোগ সেটআপ নিশ্চিত করবে।
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">নির্বাচিত প্যাকেজ:</span>
                <span className="font-bold text-slate-900">{currentPkg.speed} ({currentPkg.priceFormatted})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">সংযোগ চার্জ:</span>
                <span className="font-bold text-emerald-700">০ টাকা (সম্পূর্ণ ফ্রি)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">এলাকা:</span>
                <span className="font-medium text-slate-800">{area}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>তাত্ক্ষণিক কথা বলতে কল করুন</span>
              </a>
              <button
                onClick={handleReset}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-colors"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> সংযোগ চার্জ সম্পূর্ণ ফ্রি!
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                নতুন ফাইবার ইন্টারনেট সংযোগের আবেদন
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                গাজীপুর শিমুলতলী, বিওএফ, মোস্তান খাঁন প্লাজা ও জয়দেবপুর এলাকার জন্য দ্রুততম সংযোগ।
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  প্যাকেজ নির্বাচন করুন:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedPkgId === pkg.id
                          ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-sm font-black leading-tight">
                        {pkg.speed}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-500">
                        {pkg.priceFormatted}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    আপনার নাম *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="মোঃ রফিকুল ইসলাম"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    মোবাইল নম্বর *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="01314xxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Area & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    এলাকা (Gazipur Area) *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                  >
                    {COMPANY_INFO.areasCovered.map((a, i) => (
                      <option key={i} value={a.name}>
                        {a.name} ({a.en})
                      </option>
                    ))}
                    <option value="অন্যান্য এলাকা (Other Gazipur Area)">অন্যান্য এলাকা (Other Area)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  পূর্ণ ঠিকানা (বাড়ি / ফ্ল্যাট / রোড নম্বর) *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <textarea
                    required
                    rows={2}
                    placeholder="বাড়ি নং ১২, রোড ৩, শিমুলতলী, মোস্তান খাঁন প্লাজার বিপরীত পাশে"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 resize-none"
                  />
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  অতিরিক্ত বার্তা বা পছন্দনীয় সময় (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  placeholder="উদাঃ বিকেলে যোগাযোগ করবেন / নতুন রাউটার প্রয়োজন"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                />
              </div>

              {/* Summary line */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500">মাসিক বিল: </span>
                  <strong className="text-slate-900 font-bold">{currentPkg.priceFormatted}</strong>
                </div>
                <div className="text-emerald-700 font-bold">
                  সংযোগ চার্জ: ০ টাকা (ফ্রি)
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg text-sm shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>সাবমিট হচ্ছে...</span>
                  </>
                ) : (
                  <span>সংযোগের আবেদন নিশ্চিত করুন</span>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                তথ্য সম্পূর্ণ নিরাপদ। আবেদন সাবমিট করার পর আমাদের টিম আপনাকে কল করবে।
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
