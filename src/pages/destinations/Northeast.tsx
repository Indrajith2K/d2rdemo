import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Northeast = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Northeast' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Gangtok & Darjeeling"
          subtitle="Tea Gardens"
          description="Experience misty mountains, tea plantations, and panoramic Himalayan views"
          gradientFrom="from-green-900"
          gradientVia="via-teal-800"
          gradientTo="to-emerald-900"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Northeast"
          titleAccent="Packages"
          accentColorClass="text-green-600"
          subtitle="Discover tea gardens, mountain railways, and stunning Himalayan views in Gangtok and Darjeeling"
          accentColor="text-green-600"
          hoverColor="group-hover:text-green-600"
          buttonGradient="from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
          emptyMessage="Contact us for customized Gangtok and Darjeeling tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Northeast;
