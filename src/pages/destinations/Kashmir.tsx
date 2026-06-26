import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Kashmir = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Kashmir' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Kashmir"
          subtitle="Paradise on Earth"
          description="Experience pristine valleys, stunning lakes, and snow-capped peaks in Heaven on Earth"
          gradientFrom="from-slate-900"
          gradientVia="via-blue-800"
          gradientTo="to-indigo-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Kashmir Tour"
          titleAccent="Packages"
          accentColorClass="text-slate-600"
          subtitle="Discover the breathtaking beauty of Kashmir valley, houseboats, and alpine meadows"
          accentColor="text-slate-600"
          hoverColor="group-hover:text-slate-600"
          buttonGradient="from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700"
          emptyMessage="Contact us for customized Kashmir tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Kashmir;
