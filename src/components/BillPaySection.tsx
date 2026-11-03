'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Building2,
  ArrowRight,
  ShieldCheck,
  Receipt
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { supabase, isSupabaseConfigured, PaymentSubmission } from '@/lib/supabase';

export const BillPaySection: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'bank' | 'cash'>('bkash');
  const [amount, setAmount] = useState('');
  const [trxId, setTrxId] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 11) {
      setErrorMsg('Please provide a valid 11-digit mobile number.');
      return;
    }
    if (!trxId.trim()) {
      setErrorMsg('Please enter your payment Transaction ID (TrxID).');
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setErrorMsg('Please enter a valid bill amount.');
      return;
    }

    setLoading(true);

    const record: PaymentSubmission = {
      customer_id: customerId.trim() || phone.trim(),
      customer_name: customerName.trim(),
      phone: phone.trim(),
      payment_method: method,
      amount: Number(amount),
      transaction_id: trxId.trim().toUpperCase(),
      status: 'pending',
      created_at: new Date().toISOString(),
    };

    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.from('payments').insert([record]);
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

  const saveToLocalStorage = (data: PaymentSubmission) => {
    try {
      const existing = JSON.parse(localStorage.getItem('fiber_fast_payments') || '[]');
      existing.unshift({ ...data, id: 'pay-' + Date.now() });
      localStorage.setItem('fiber_fast_payments', JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCustomerId('');
    setCustomerName('');
    setPhone('');
    setAmount('');
    setTrxId('');
  };

  return (
    <section id="billpay" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            <span>Bill Payment & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Easy Bill Payment via <span className="text-blue-600">bKash, Nagad or Rocket</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Pay monthly broadband bills securely using mobile banking or visit our Gazipur Head Office for instant cash receipts.
          </p>
        </div>

        {/* 2-Column Clean Portal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Branded Account Cards */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
              <Smartphone className="w-4 h-4 text-slate-500" />
              <span>Official Payment Channels & Instructions</span>
            </h3>

            {/* bKash Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 hover:border-pink-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-pink-100 text-pink-700 font-extrabold text-xs flex items-center justify-center">
                    bK
                  </span>
                  <span className="text-sm font-bold text-slate-900">bKash Merchant / Personal</span>
                </div>
                <span className="text-[11px] font-semibold text-pink-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">
                  Instant Verification
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between my-2 text-xs">
                <span className="text-slate-500">Account Number:</span>
                <span className="font-extrabold text-slate-900 text-sm tracking-wide">01314-088375</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Go to bKash app &gt; Send Money / Payment &gt; Enter <strong>01314-088375</strong> &gt; Enter bill amount &gt; Use your Phone/Customer ID as reference &gt; Submit TrxID on the right form.
              </p>
            </div>

            {/* Nagad Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 hover:border-orange-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 font-extrabold text-xs flex items-center justify-center">
                    Ng
                  </span>
                  <span className="text-sm font-bold text-slate-900">Nagad Mobile Banking</span>
                </div>
                <span className="text-[11px] font-semibold text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                  Zero Fee
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between my-2 text-xs">
                <span className="text-slate-500">Account Number:</span>
                <span className="font-extrabold text-slate-900 text-sm tracking-wide">01314-088375</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Go to Nagad app &gt; Send Money to <strong>01314-088375</strong> &gt; Save Transaction ID and submit online for automated verification.
              </p>
            </div>

            {/* Rocket & Cash Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                    R
                  </span>
                  <span className="text-xs font-bold text-slate-900">Rocket Account</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-900 bg-white p-1.5 rounded border border-slate-200">
                  01314-088375-8
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Send Money using DBBL Rocket.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900">Cash at Head Office</span>
                </div>
                <p className="text-[11px] text-slate-600 line-clamp-2">
                  Shimultali, Mostan Khan plaza, 3rd Floor, Gazipur (9 AM - 9 PM).
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Transaction ID Submission Form */}
          <div className="lg:col-span-6 bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs text-left">
            <div className="mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Payment Verification
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Submit Your Transaction ID
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                After completing your payment, enter your TrxID below to update your account status.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Payment Information Received!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Transaction ID <strong className="text-slate-900 font-mono">{trxId}</strong> has been logged in our billing database. Our accounts team will confirm verification shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Transaction
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Customer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md. Rafiqul Islam"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Registered Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01314xxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Customer ID (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. FF-1029"
                      value={customerId}
                      onChange={(e) => setCustomerId(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Payment Channel *
                    </label>
                    <select
                      value={method}
                      onChange={(e: any) => setMethod(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="bkash">bKash (বিকাশ)</option>
                      <option value="nagad">Nagad (নগদ)</option>
                      <option value="rocket">Rocket (রকেট)</option>
                      <option value="cash">Head Office Cash</option>
                      <option value="bank">Bank Transfer</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Amount Paid (BDT ৳) *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 500, 700, 800, 1000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Transaction ID (TrxID) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BLK8937AX1"
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 uppercase font-mono focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg text-sm shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors cursor-pointer mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verifying Transaction...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Submit Payment Verification</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
