import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Rajasthan = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Rajasthan' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Rajasthan"
          subtitle="Land of Kings"
          description="Explore the majestic forts, grand palaces, and rich cultural heritage of Rajasthan"
          gradientFrom="from-amber-900"
          gradientVia="via-amber-800"
          gradientTo="to-orange-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Rajasthan Tour"
          titleAccent="Packages"
          accentColorClass="text-amber-600"
          subtitle="Experience the royal heritage, golden deserts, and vibrant culture of Rajasthan"
          accentColor="text-amber-600"
          hoverColor="group-hover:text-amber-600"
          buttonGradient="from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
          emptyMessage="Contact us for customized Rajasthan tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Rajasthan;
