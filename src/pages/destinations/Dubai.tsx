import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Dubai = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Dubai' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Dubai"
          subtitle="City of Gold"
          description="Desert safari, Burj Khalifa, luxury shopping, and world-class entertainment"
          gradientFrom="from-amber-800"
          gradientVia="via-orange-700"
          gradientTo="to-yellow-800"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Dubai"
          titleAccent="Packages"
          accentColorClass="text-amber-600"
          subtitle="Experience desert safari, Burj Khalifa, Miracle Garden, and Ferrari World"
          accentColor="text-amber-600"
          hoverColor="group-hover:text-amber-600"
          buttonGradient="from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
          emptyMessage="Contact us for customized Dubai tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Dubai;
