import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const SriLanka = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Sri Lanka' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Sri Lanka"
          subtitle="Pearl of Indian Ocean"
          description="Discover ancient temples, tea plantations, and pristine beaches in the island nation"
          gradientFrom="from-green-900"
          gradientVia="via-emerald-800"
          gradientTo="to-teal-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Sri Lanka Tour"
          titleAccent="Packages"
          accentColorClass="text-green-600"
          subtitle="Experience ancient heritage, lush landscapes, and pristine beaches of Sri Lanka"
          accentColor="text-green-600"
          hoverColor="group-hover:text-green-600"
          buttonGradient="from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          emptyMessage="Contact us for customized Sri Lanka tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default SriLanka;
