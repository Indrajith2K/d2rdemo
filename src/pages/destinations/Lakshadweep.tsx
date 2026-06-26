import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Lakshadweep = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Lakshadweep' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Lakshadweep"
          subtitle="Coral Paradise"
          description="Discover untouched coral atolls, turquoise lagoons, and pristine beaches in the Arabian Sea"
          gradientFrom="from-teal-900"
          gradientVia="via-cyan-800"
          gradientTo="to-blue-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Lakshadweep"
          titleAccent="Packages"
          accentColorClass="text-teal-600"
          subtitle="Experience pristine coral islands, water sports, and marine life in India's smallest union territory"
          accentColor="text-teal-600"
          hoverColor="group-hover:text-teal-600"
          buttonGradient="from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
          emptyMessage="Contact us for customized Lakshadweep tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Lakshadweep;
