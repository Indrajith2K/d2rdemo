import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Singapore = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Singapore' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Singapore"
          subtitle="Garden City"
          description="Futuristic architecture, world-class shopping, and diverse culinary scene"
          gradientFrom="from-red-800"
          gradientVia="via-red-700"
          gradientTo="to-rose-800"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Singapore"
          titleAccent="Packages"
          accentColorClass="text-red-600"
          subtitle="Experience Gardens by the Bay, Universal Studios, Sentosa Island, and more"
          accentColor="text-red-600"
          hoverColor="group-hover:text-red-600"
          buttonGradient="from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
          emptyMessage="Contact us for customized Singapore tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Singapore;
