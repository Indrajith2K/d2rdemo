import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Azerbaijan = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Azerbaijan' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Azerbaijan"
          subtitle="Land of Fire"
          description="Discover the fascinating blend of ancient history, modern architecture, and scenic mud volcanoes of Azerbaijan"
          gradientFrom="from-cyan-900"
          gradientVia="via-teal-800"
          gradientTo="to-blue-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Azerbaijan Tour"
          titleAccent="Packages"
          accentColorClass="text-teal-600"
          subtitle="Explore the futuristic flame towers of Baku, ancient palaces, and beautiful Caucasus mountains"
          accentColor="text-teal-600"
          hoverColor="group-hover:text-teal-600"
          buttonGradient="from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
          emptyMessage="Contact us for customized Azerbaijan tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Azerbaijan;
