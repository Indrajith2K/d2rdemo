import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Kerala = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Kerala' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Kerala"
          subtitle="God's Own Country"
          description="Discover the enchanting backwaters, lush hill stations, and pristine beaches of Kerala with our specially curated packages"
          gradientFrom="from-green-900"
          gradientVia="via-green-800"
          gradientTo="to-emerald-900"
        />



        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Kerala Tour"
          titleAccent="Packages"
          accentColorClass="text-green-600"
          subtitle="Explore our handpicked Kerala packages offering the best of backwaters, hill stations, and cultural experiences"
          accentColor="text-green-600"
          hoverColor="group-hover:text-green-600"
          buttonGradient="from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          emptyMessage="Contact us for customized Kerala tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Kerala;
