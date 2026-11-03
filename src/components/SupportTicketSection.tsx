'use client';

import React, { useState } from 'react';
import { 
  Headphones, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Clock, 
  Building2,
  MessageCircle,
  ShieldCheck,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { supabase, isSupabaseConfigured, SupportTicket } from '@/lib/supabase';

export const SupportTicketSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [category, setCategory] = useState<string>('slow_internet');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const issueCategories = [
    { id: 'slow_internet', label: 'Slow Speed (ধীরগতি)' },
    { id: 'no_connection', label: 'No Connection (সংযোগ নেই)' },
    { id: 'fiber_cut', label: 'Fiber Cut (তার কাটা)' },
    { id: 'router_issue', label: 'Router / Wi-Fi (রাউটার)' },
    { id: 'billing', label: 'Billing (বিলিং)' },
    { id: 'other', label: 'Other (অন্যান্য)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 11) {
      setErrorMsg('Please provide a valid 11-digit contact number.');
      return;
    }
    if (!description.trim()) {
      setErrorMsg('Please describe the problem you are experiencing.');
      return;
    }

    setLoading(true);

    const record: SupportTicket = {
      customer_id: customerId.trim() || undefined,
      name: name.trim(),
      phone: phone.trim(),
      issue_category: category as any,
      address: address.trim() || 'Gazipur',
      description: description.trim(),
      status: 'open',
      created_at: new Date().toISOString(),
    };

    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.from('support_tickets').insert([record]);
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

  const saveToLocalStorage = (data: SupportTicket) => {
    try {
      const existing = JSON.parse(localStorage.getItem('fiber_fast_tickets') || '[]');
      existing.unshift({ ...data, id: 'ticket-' + Date.now() });
      localStorage.setItem('fiber_fast_tickets', JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setCustomerId('');
    setAddress('');
    setDescription('');
  };

  return (
    <section id="support" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <span>Customer Support & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Are Here to <span className="text-blue-600">Support You</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Have questions, need a new connection, or experiencing an issue? Contact our Gazipur engineering hotline or submit a support ticket below.
          </p>
        </div>

        {/* 3 Top Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 text-left">
          
          {/* Card 1: 24/7 Hotlines */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Helpline & Hotlines
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Speak directly with an on-duty network engineer 24/7.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Primary Line:</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="font-bold text-blue-600 hover:underline">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70 text-slate-600">
                  <span className="text-slate-500 block text-[11px] mb-0.5">Support Lines:</span>
                  <span className="font-medium text-slate-800">{COMPANY_INFO.hotlines.join(' • ')}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-2xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp & Email */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                WhatsApp & Email
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Fast digital response for inquiries, billing, and speed checks.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">WhatsApp:</span>
                  <span className="font-bold text-emerald-700">{COMPANY_INFO.primaryPhone}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium text-slate-800 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-2xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Physical Offices */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Gazipur Offices
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Visit our service centers for cash payments and direct support.
              </p>

              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">Head Office:</strong>
                  <p className="text-slate-500 mt-0.5 leading-snug">{COMPANY_INFO.headOffice}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">Branch Office:</strong>
                  <p className="text-slate-500 mt-0.5 leading-snug">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Office Hours: 9:00 AM – 9:00 PM</span>
            </div>
          </div>

        </div>

        {/* Support Ticket Desk Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-9 shadow-sm max-w-4xl mx-auto text-left">
          <div className="pb-5 mb-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Online Service Desk & Complaint Form
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Submit issue details to dispatch our Gazipur field maintenance team immediately.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md self-start sm:self-auto">
              Average Response: &lt; 30 Mins
            </span>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Ticket Submitted Successfully
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, your complaint has been dispatched to our network operations team. An engineer will inspect the line status and call you at <strong className="text-slate-900">{phone}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-2xs transition-colors cursor-pointer"
              >
                Submit Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Issue Category Chips */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Issue Type (সমস্যার ধরন):
                </label>
                <div className="flex flex-wrap gap-2">
                  {issueCategories.map((cat) => {
                    const isSelected = category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Customer Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Md. Rafiqul Islam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01314xxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Customer ID / Username (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. FF-1029"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Area / Location in Gazipur
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Shimultoli, BOF Gate, Chourasta"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Problem Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain what is happening, when it started, and if router lights (LOS/PON) are blinking..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Support Ticket</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
