import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Bali = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Bali' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Bali"
          subtitle="Island of Gods"
          description="Hindu temples, volcano tours, beautiful beaches, and traditional Balinese culture"
          gradientFrom="from-emerald-900"
          gradientVia="via-teal-800"
          gradientTo="to-cyan-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Bali"
          titleAccent="Packages"
          accentColorClass="text-emerald-600"
          subtitle="Experience rice terraces, temples, beaches, and traditional Balinese culture"
          accentColor="text-emerald-600"
          hoverColor="group-hover:text-emerald-600"
          buttonGradient="from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
          emptyMessage="Contact us for customized Bali tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Bali;
