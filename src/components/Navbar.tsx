'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Menu, 
  X, 
  MapPin, 
  CreditCard, 
  Headphones, 
  Layers,
  ArrowRight,
  Radio
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface NavbarProps {
  onOpenOrderModal: (packageId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Bar (English Only) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Special Offer
              </span>
              <span className="text-slate-200 font-medium">
                Free Connection Charge <strong className="text-white">(0 Tk. Installation)</strong>
              </span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Head Office: Mostan Khan Plaza (3rd Floor), Shimultoli, Gazipur</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-slate-400">Service Helpline:</span>
              <a 
                href={`tel:${COMPANY_INFO.primaryPhone}`} 
                className="font-bold text-white hover:text-blue-400 transition-colors"
              >
                {COMPANY_INFO.primaryPhone}
              </a>
            </div>
            <span className="text-slate-600">|</span>
            <Link 
              href="/admin" 
              className="text-[11px] text-slate-400 hover:text-white transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  FIBER <span className="text-blue-600">FAST</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200/80 px-1.5 py-0.5 rounded">
                  Internet
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items (English Only) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a 
              href="#packages" 
              className="hover:text-blue-600 transition-colors py-1"
            >
              Internet Packages
            </a>
            <a 
              href="#coverage" 
              className="hover:text-blue-600 transition-colors py-1"
            >
              Coverage Area
            </a>
            <a 
              href="#bdix" 
              className="hover:text-blue-600 transition-colors py-1"
            >
              BDIX & FTP
            </a>
            <a 
              href="#billpay" 
              className="hover:text-blue-600 transition-colors py-1"
            >
              Pay Bill
            </a>
            <a 
              href="#support" 
              className="hover:text-blue-600 transition-colors py-1"
            >
              Support & Complaint
            </a>
          </nav>

          {/* Right Header CTAs (English Only) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>

            <button
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>Get Connection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (English Only) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <div className="space-y-1">
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Internet Packages & Pricing</span>
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Coverage Area (Gazipur, BOF, Shimultoli)</span>
            </a>
            <a
              href="#bdix"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <Radio className="w-4 h-4 text-indigo-600" />
              <span>BDIX & Movie FTP Servers</span>
            </a>
            <a
              href="#billpay"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <CreditCard className="w-4 h-4 text-purple-600" />
              <span>Bill Payment (bKash / Nagad)</span>
            </a>
            <a
              href="#support"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <Headphones className="w-4 h-4 text-rose-600" />
              <span>Support & Complaint Tickets</span>
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50"
            >
              <span>Admin Dashboard</span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm cursor-pointer"
            >
              <span>Get New Connection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Hotline: {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
