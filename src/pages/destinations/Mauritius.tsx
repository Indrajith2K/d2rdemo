import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Mauritius = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Mauritius' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Mauritius"
          subtitle="Sparkling Gem of the Indian Ocean"
          description="Enjoy sandy beaches, multi-colored volcanic earth, scenic waterfalls, and luxurious resorts in Mauritius"
          gradientFrom="from-blue-900"
          gradientVia="via-cyan-800"
          gradientTo="to-blue-955"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Mauritius Tour"
          titleAccent="Packages"
          accentColorClass="text-blue-600"
          subtitle="Unwind on palm-fringed beaches, explore volcanic islands, and enjoy premium watersports in Mauritius"
          accentColor="text-blue-600"
          hoverColor="group-hover:text-blue-600"
          buttonGradient="from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          emptyMessage="Contact us for customized Mauritius tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Mauritius;
