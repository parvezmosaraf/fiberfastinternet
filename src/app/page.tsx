'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PackageSection } from '@/components/PackageSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CoverageSection } from '@/components/CoverageSection';
import { BdixSection } from '@/components/BdixSection';
import { BillPaySection } from '@/components/BillPaySection';
import { SupportTicketSection } from '@/components/SupportTicketSection';
import { Footer } from '@/components/Footer';
import { ConnectionModal } from '@/components/ConnectionModal';
import { Package } from '@/data/company';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-50');

  const handleOpenOrderModal = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    setIsModalOpen(true);
  };

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackageId(pkg.id);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Flyer Badge and Hotlines */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* 4 Packages from brochure with Free Connection badge */}
        <PackageSection onSelectPackage={handleSelectPackage} />

        {/* Why Fiber Fast Internet & Network Stats */}
        <FeaturesSection />

        {/* Gazipur Area Coverage & Offices */}
        <CoverageSection onOpenOrderModal={() => handleOpenOrderModal()} />

        {/* BDIX 100+ Mbps Cache & Media Servers */}
        <BdixSection />

        {/* bKash/Nagad Bill Payment & Submission */}
        <BillPaySection />

        {/* Support, Ticket Complaint Desk & Direct Hotlines */}
        <SupportTicketSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Booking / Connection Request Modal */}
      <ConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPackageId={selectedPackageId}
      />
    </div>
  );
}

