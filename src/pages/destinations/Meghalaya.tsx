import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Meghalaya = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Meghalaya' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Meghalaya"
          subtitle="Abode of Clouds"
          description="Discover living root bridges, pristine waterfalls, and sacred forests in the wettest place on earth"
          gradientFrom="from-emerald-900"
          gradientVia="via-green-800"
          gradientTo="to-teal-900"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Meghalaya Tour"
          titleAccent="Packages"
          accentColorClass="text-emerald-600"
          subtitle="Experience living root bridges, crystal clear rivers, and breathtaking waterfalls in Northeast India"
          accentColor="text-emerald-600"
          hoverColor="group-hover:text-emerald-600"
          buttonGradient="from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
          emptyMessage="Contact us for customized Meghalaya tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Meghalaya;
