import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const TamilNadu = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Tamil Nadu' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Tamil Nadu"
          subtitle="Land of Temples"
          description="Explore ancient temples, pristine beaches, and rich cultural heritage of Tamil Nadu"
          gradientFrom="from-orange-900"
          gradientVia="via-red-800"
          gradientTo="to-pink-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Tamil Nadu Tour"
          titleAccent="Packages"
          accentColorClass="text-orange-600"
          subtitle="Discover temples, hill stations, and coastal beauty with our Tamil Nadu packages"
          accentColor="text-orange-600"
          hoverColor="group-hover:text-orange-600"
          buttonGradient="from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
          emptyMessage="Contact us for customized Tamil Nadu tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default TamilNadu;
