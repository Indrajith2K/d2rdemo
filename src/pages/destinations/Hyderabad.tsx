import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Hyderabad = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Hyderabad' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Hyderabad"
          subtitle="City of Nizams"
          description="Discover the rich heritage, magnificent palaces, and famous biryani in the Pearl City"
          gradientFrom="from-red-900"
          gradientVia="via-pink-800"
          gradientTo="to-purple-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Hyderabad Tour"
          titleAccent="Packages"
          accentColorClass="text-red-600"
          subtitle="Experience royal heritage, historic monuments, and culinary delights of Hyderabad"
          accentColor="text-red-600"
          hoverColor="group-hover:text-red-600"
          buttonGradient="from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
          emptyMessage="Contact us for customized Hyderabad tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Hyderabad;
