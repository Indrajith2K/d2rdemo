import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Goa = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Goa' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Goa"
          subtitle="Beach Paradise"
          description="Sun, sand, and Portuguese heritage create the perfect tropical getaway"
          gradientFrom="from-orange-900"
          gradientVia="via-yellow-700"
          gradientTo="to-amber-900"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Goa"
          titleAccent="Packages"
          accentColorClass="text-orange-600"
          subtitle="Relax on golden beaches, explore Portuguese architecture, and enjoy vibrant nightlife"
          accentColor="text-orange-600"
          hoverColor="group-hover:text-orange-600"
          buttonGradient="from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700"
          emptyMessage="Contact us for customized Goa tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Goa;
