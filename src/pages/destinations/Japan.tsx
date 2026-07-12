import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Japan = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Japan' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Japan"
          subtitle="Land of the Rising Sun"
          description="Discover high-tech cities, historic temples, breathtaking cherry blossoms, and magnificent Mount Fuji"
          gradientFrom="from-red-900"
          gradientVia="via-rose-800"
          gradientTo="to-rose-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Japan Tour"
          titleAccent="Packages"
          accentColorClass="text-rose-600"
          subtitle="Experience the perfect blend of modern innovation and ancient cultural traditions in Japan"
          accentColor="text-rose-600"
          hoverColor="group-hover:text-rose-600"
          buttonGradient="from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700"
          emptyMessage="Contact us for customized Japan tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Japan;
