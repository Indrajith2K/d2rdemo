import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Maharashtra = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Maharashtra' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Maharashtra"
          subtitle="Gateway to the Heart of India"
          description="Explore beautiful beaches, historic caves, scenic hill stations, and vibrant cities of Maharashtra"
          gradientFrom="from-indigo-900"
          gradientVia="via-purple-800"
          gradientTo="to-indigo-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Maharashtra Tour"
          titleAccent="Packages"
          accentColorClass="text-indigo-600"
          subtitle="Discover beautiful beaches, historic caves, scenic hill stations, and vibrant cities of Maharashtra"
          accentColor="text-indigo-600"
          hoverColor="group-hover:text-indigo-600"
          buttonGradient="from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          emptyMessage="Contact us for customized Maharashtra tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Maharashtra;
