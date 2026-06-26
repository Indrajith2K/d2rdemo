import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Andaman = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Andaman' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Andaman Islands"
          subtitle="Tropical Paradise"
          description="Discover pristine beaches, crystal clear waters, and vibrant coral reefs in the Bay of Bengal"
          gradientFrom="from-cyan-900"
          gradientVia="via-blue-800"
          gradientTo="to-teal-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Andaman"
          titleAccent="Packages"
          accentColorClass="text-cyan-600"
          subtitle="Experience pristine beaches, scuba diving, and historical sites in the Andaman Islands"
          accentColor="text-cyan-600"
          hoverColor="group-hover:text-cyan-600"
          buttonGradient="from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
          emptyMessage="Contact us for customized Andaman tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Andaman;
