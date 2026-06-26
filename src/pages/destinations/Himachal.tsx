import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Himachal = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Himachal Pradesh' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Himachal Pradesh"
          subtitle="Land of Gods"
          description="Experience snow-capped mountains, pristine valleys, and adventure sports in the Himalayas"
          gradientFrom="from-blue-900"
          gradientVia="via-cyan-800"
          gradientTo="to-teal-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Himachal Pradesh"
          titleAccent="Packages"
          accentColorClass="text-blue-600"
          subtitle="Discover hill stations, adventure activities, and scenic beauty of Himachal Pradesh"
          accentColor="text-blue-600"
          hoverColor="group-hover:text-blue-600"
          buttonGradient="from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          emptyMessage="Contact us for customized Himachal Pradesh tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Himachal;
