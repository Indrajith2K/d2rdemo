import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Thailand = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Thailand' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Thailand"
          subtitle="Land of Smiles"
          description="Experience Bangkok's vibrant street life and Pattaya's stunning beaches"
          gradientFrom="from-yellow-700"
          gradientVia="via-orange-600"
          gradientTo="to-red-700"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Thailand"
          titleAccent="Packages"
          accentColorClass="text-yellow-600"
          subtitle="Discover temples, floating markets, islands, and world-famous Thai hospitality"
          accentColor="text-yellow-600"
          hoverColor="group-hover:text-yellow-600"
          buttonGradient="from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
          emptyMessage="Contact us for customized Thailand tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Thailand;
