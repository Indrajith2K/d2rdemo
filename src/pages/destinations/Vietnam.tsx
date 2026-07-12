import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Vietnam = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Vietnam' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Vietnam"
          subtitle="The Land of the Blue Dragon"
          description="Discover natural beauty, bustling cities, ancient landmarks, and rich culinary history of Vietnam"
          gradientFrom="from-red-900"
          gradientVia="via-orange-800"
          gradientTo="to-red-955"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Vietnam Tour"
          titleAccent="Packages"
          accentColorClass="text-red-600"
          subtitle="Explore the stunning landscapes of Halong Bay, historic cities, and delicious street food of Vietnam"
          accentColor="text-red-600"
          hoverColor="group-hover:text-red-600"
          buttonGradient="from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
          emptyMessage="Contact us for customized Vietnam tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Vietnam;
