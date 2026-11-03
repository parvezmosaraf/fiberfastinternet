'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Users, 
  Headphones, 
  CreditCard, 
  RefreshCw, 
  Database,
  Phone,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { supabase, isSupabaseConfigured, ConnectionRequest, SupportTicket, PaymentSubmission } from '@/lib/supabase';
import { COMPANY_INFO } from '@/data/company';

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'connections' | 'tickets' | 'payments' | 'supabase_setup'>('connections');
  const [loading, setLoading] = useState(false);

  const [connectionList, setConnectionList] = useState<ConnectionRequest[]>([]);
  const [ticketList, setTicketList] = useState<SupportTicket[]>([]);
  const [paymentList, setPaymentList] = useState<PaymentSubmission[]>([]);

  const loadData = async () => {
    setLoading(true);

    try {
      if (isSupabaseConfigured && supabase) {
        const { data: conns } = await supabase.from('connection_requests').select('*').order('created_at', { ascending: false });
        if (conns) setConnectionList(conns);

        const { data: tix } = await supabase.from('support_tickets').select('*').order('created_at', { ascending: false });
        if (tix) setTicketList(tix);

        const { data: pays } = await supabase.from('payments').select('*').order('created_at', { ascending: false });
        if (pays) setPaymentList(pays);
      } else {
        const localConns = JSON.parse(localStorage.getItem('fiber_fast_connections') || '[]');
        const localTix = JSON.parse(localStorage.getItem('fiber_fast_tickets') || '[]');
        const localPays = JSON.parse(localStorage.getItem('fiber_fast_payments') || '[]');

        if (localConns.length === 0) {
          const sampleConns: ConnectionRequest[] = [
            {
              id: 'sample-1',
              name: 'Md. Tariqul Islam',
              phone: '01712-345678',
              area: 'Shimultali / Mostan Khan Plaza',
              address: 'House 14, Road 2, Near Mostan Khan Plaza 3rd Floor',
              package_name: 'Turbo Fiber (70 MBPS)',
              speed: '70 MBPS',
              price: '800 Tk.',
              status: 'pending',
              created_at: new Date(Date.now() - 3600000).toISOString(),
            },
            {
              id: 'sample-2',
              name: 'Tanvir Ahmed',
              phone: '01855-998877',
              area: 'Joydebpur Shimultole BOF',
              address: 'BOF Gate Area, Shimultole, Gazipur',
              package_name: 'Standard Fiber (60 MBPS)',
              speed: '60 MBPS',
              price: '700 Tk.',
              status: 'contacted',
              created_at: new Date(Date.now() - 86400000).toISOString(),
            },
          ];
          setConnectionList(sampleConns);
        } else {
          setConnectionList(localConns);
        }

        if (localTix.length === 0) {
          const sampleTix: SupportTicket[] = [
            {
              id: 'sample-t1',
              name: 'Kabir Hossain',
              phone: '01911-223344',
              issue_category: 'slow_internet',
              address: 'Shimultoli Market, Gazipur',
              description: 'YouTube loading buffer problem since this morning.',
              status: 'open',
              created_at: new Date(Date.now() - 7200000).toISOString(),
            },
          ];
          setTicketList(sampleTix);
        } else {
          setTicketList(localTix);
        }

        if (localPays.length === 0) {
          const samplePays: PaymentSubmission[] = [
            {
              id: 'sample-p1',
              customer_id: '01712-345678',
              customer_name: 'Md. Tariqul Islam',
              phone: '01712-345678',
              payment_method: 'bkash',
              amount: 800,
              transaction_id: 'BK902XJ721',
              status: 'pending',
              created_at: new Date(Date.now() - 1800000).toISOString(),
            },
          ];
          setPaymentList(samplePays);
        } else {
          setPaymentList(localPays);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    loadData();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5 animate-spin text-blue-600" />
          <span>ড্যাশবোর্ড লোড হচ্ছে...</span>
        </div>
      </div>
    );
  }

  const updateConnectionStatus = async (id?: string, newStatus?: any) => {
    if (!id) return;
    if (isSupabaseConfigured && supabase) {
      await supabase.from('connection_requests').update({ status: newStatus }).eq('id', id);
    }
    setConnectionList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const updateTicketStatus = async (id?: string, newStatus?: any) => {
    if (!id) return;
    if (isSupabaseConfigured && supabase) {
      await supabase.from('support_tickets').update({ status: newStatus }).eq('id', id);
    }
    setTicketList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const updatePaymentStatus = async (id?: string, newStatus?: any) => {
    if (!id) return;
    if (isSupabaseConfigured && supabase) {
      await supabase.from('payments').update({ status: newStatus }).eq('id', id);
    }
    setPaymentList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Site</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg">
                FIBER FAST <span className="text-blue-600">ADMIN</span>
              </span>
              <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200 font-bold">
                Gazipur Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline text-slate-500">Database:</span>
              <span className={isSupabaseConfigured ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                {isSupabaseConfigured ? 'Supabase Live' : 'Local / Demo Mode'}
              </span>
            </div>

            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('connections')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'connections'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>নতুন সংযোগ আবেদন ({connectionList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('tickets')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'tickets'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>সাপোর্ট ও কমপ্লেইন ({ticketList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('payments')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'payments'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>পেমেন্ট ভেরিফিকেশন ({paymentList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('supabase_setup')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
              activeTab === 'supabase_setup'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Supabase Setup & SQL Schema</span>
          </button>
        </div>

        {/* Tab 1: Connection Requests */}
        {activeTab === 'connections' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                নতুন সংযোগের আবেদন তালিকা (New Connection Requests)
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                মোট আবেদন: {connectionList.length}
              </span>
            </div>

            {connectionList.length === 0 ? (
              <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
                কোনো নতুন আবেদন নেই।
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {connectionList.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {item.name}
                        </h3>
                        <a
                          href={`tel:${item.phone}`}
                          className="text-blue-600 text-xs font-semibold flex items-center gap-1 mt-0.5"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{item.phone}</span>
                        </a>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          item.status === 'connected'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.status || 'pending'}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1 text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">প্যাকেজ:</span>
                        <strong className="text-slate-900">{item.package_name || item.speed} ({item.price})</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">এলাকা:</span>
                        <span className="font-medium text-slate-800">{item.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">ঠিকানা:</span>
                        <span className="font-medium text-slate-800">{item.address}</span>
                      </div>
                      {item.notes && (
                        <div className="pt-1 text-slate-500 italic">
                          "{item.notes}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-[11px] text-slate-400">
                        {item.created_at ? new Date(item.created_at).toLocaleString() : 'Just now'}
                      </span>

                      <div className="flex gap-1.5">
                        <button
                          onClick={() => updateConnectionStatus(item.id, 'contacted')}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold transition-colors cursor-pointer"
                        >
                          যোগাযোগ হয়েছে
                        </button>
                        <button
                          onClick={() => updateConnectionStatus(item.id, 'connected')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold transition-colors cursor-pointer"
                        >
                          সংযোগ সম্পন্ন
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Support Tickets */}
        {activeTab === 'tickets' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                কাস্টমার কমপ্লেইন ও সাপোর্ট টিকিট
              </h2>
              <span className="text-xs text-slate-500">
                মোট টিকিট: {ticketList.length}
              </span>
            </div>

            {ticketList.length === 0 ? (
              <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
                কোনো অভিযোগ জমা নেই।
              </div>
            ) : (
              <div className="space-y-3">
                {ticketList.map((t, idx) => (
                  <div
                    key={t.id || idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                          <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded font-mono">
                            {t.issue_category}
                          </span>
                        </div>
                        <a href={`tel:${t.phone}`} className="text-blue-600 text-xs font-semibold">
                          {t.phone} {t.customer_id ? `(ID: ${t.customer_id})` : ''}
                        </a>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                          t.status === 'resolved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : t.status === 'in_progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {t.status || 'open'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      {t.description}
                    </p>

                    <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                      <span>ঠিকানা: {t.address}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateTicketStatus(t.id, 'in_progress')}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold cursor-pointer"
                        >
                          কাজ চলছে
                        </button>
                        <button
                          onClick={() => updateTicketStatus(t.id, 'resolved')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold cursor-pointer"
                        >
                          সমাধান হয়েছে
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Payments */}
        {activeTab === 'payments' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                বিকাশ/নগদ পেমেন্ট ভেরিফিকেশন
              </h2>
              <span className="text-xs text-slate-500">
                মোট পেমেন্ট: {paymentList.length}
              </span>
            </div>

            {paymentList.length === 0 ? (
              <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
                কোনো পেমেন্ট সাবমিশন নেই।
              </div>
            ) : (
              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-xs text-left text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">গ্রাহক</th>
                      <th className="p-3.5">মাধ্যম</th>
                      <th className="p-3.5">পরিমাণ</th>
                      <th className="p-3.5">TrxID</th>
                      <th className="p-3.5">স্ট্যাটাস</th>
                      <th className="p-3.5">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {paymentList.map((p, idx) => (
                      <tr key={p.id || idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-medium text-slate-900">
                          <div>{p.customer_name}</div>
                          <div className="text-[11px] text-slate-500">{p.phone}</div>
                        </td>
                        <td className="p-3.5 uppercase font-bold text-purple-700">
                          {p.payment_method}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900">
                          ৳{p.amount}
                        </td>
                        <td className="p-3.5 font-mono text-blue-600 font-bold">
                          {p.transaction_id}
                        </td>
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                              p.status === 'verified'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {p.status || 'pending'}
                          </span>
                        </td>
                        <td className="p-3.5">
                          <button
                            onClick={() => updatePaymentStatus(p.id, 'verified')}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            যাচাই করুন
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Supabase Setup Guide */}
        {activeTab === 'supabase_setup' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Database Integration
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Supabase কনফিগারেশন গাইড
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Fiber Fast Internet ওয়েবসাইটটি স্বয়ংক্রিয়ভাবে Supabase এর সাথে ডেটা সংরক্ষণ করতে সম্পূর্ণ প্রস্তুত।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">1</span>
                <h4 className="font-bold text-slate-900">Supabase প্রজেক্ট তৈরি করুন</h4>
                <p className="text-slate-600">
                  <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">supabase.com</a> এ গিয়ে একটি নতুন প্রজেক্ট খুলুন।
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">2</span>
                <h4 className="font-bold text-slate-900">SQL Schema রান করুন</h4>
                <p className="text-slate-600">
                  প্রজেক্টের SQL Editor এ গিয়ে <code className="text-blue-700 font-mono">supabase/schema.sql</code> ফাইলের কোডগুলো পেস্ট করে Run বাটনে ক্লিক করুন।
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">3</span>
                <h4 className="font-bold text-slate-900">API Keys .env.local এ বসান</h4>
                <p className="text-slate-600">
                  Project Settings &gt; API থেকে URL এবং anon public key নিয়ে আপনার <code className="text-blue-700 font-mono">.env.local</code> এ সেভ করুন।
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">supabase/schema.sql (Summary)</span>
                <span className="text-xs text-emerald-700 font-semibold">Ready to deploy</span>
              </div>
              <pre className="text-xs font-mono text-slate-800 bg-white p-4 rounded-lg border border-slate-200 overflow-x-auto max-h-48">
{`-- Tables Included in schema.sql:
1. connection_requests (name, phone, address, area, package_name, price, status)
2. support_tickets (name, phone, customer_id, issue_category, description, status)
3. payments (customer_id, phone, payment_method, amount, transaction_id, status)
4. contact_messages (name, email, phone, subject, message)
-- Full RLS policies are pre-configured!`}
              </pre>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
