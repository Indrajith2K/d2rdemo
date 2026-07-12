import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Kazakhstan = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Kazakhstan' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Kazakhstan"
          subtitle="The Heart of Eurasia"
          description="Explore the stunning canyons, alpine lakes, futuristic capital city, and vast valleys of Kazakhstan"
          gradientFrom="from-cyan-900"
          gradientVia="via-blue-800"
          gradientTo="to-sky-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Kazakhstan Tour"
          titleAccent="Packages"
          accentColorClass="text-cyan-600"
          subtitle="Discover natural wonders, futuristic cities, and rich nomadic traditions in Kazakhstan"
          accentColor="text-cyan-600"
          hoverColor="group-hover:text-cyan-600"
          buttonGradient="from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
          emptyMessage="Contact us for customized Kazakhstan tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Kazakhstan;
