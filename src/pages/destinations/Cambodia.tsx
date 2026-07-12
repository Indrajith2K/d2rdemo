import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Cambodia = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Cambodia' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Cambodia"
          subtitle="Kingdom of Wonder"
          description="Explore the legendary Angkor Wat temples, rich historical legacy, and scenic landscapes of Cambodia"
          gradientFrom="from-yellow-900"
          gradientVia="via-amber-800"
          gradientTo="to-yellow-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Cambodia Tour"
          titleAccent="Packages"
          accentColorClass="text-amber-600"
          subtitle="Discover ancient temple ruins, royal palaces, and rich cultural history in Cambodia"
          accentColor="text-amber-600"
          hoverColor="group-hover:text-amber-600"
          buttonGradient="from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700"
          emptyMessage="Contact us for customized Cambodia tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Cambodia;
