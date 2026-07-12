import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Maldives = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Maldives' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Maldives"
          subtitle="Tropical Ocean Paradise"
          description="Experience world-class luxury overwater villas, crystal clear turquoise lagoons, and beautiful coral reefs"
          gradientFrom="from-cyan-800"
          gradientVia="via-teal-700"
          gradientTo="to-sky-900"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Maldives Tour"
          titleAccent="Packages"
          accentColorClass="text-cyan-600"
          subtitle="Enjoy absolute luxury, crystal clear lagoons, white sands, and breathtaking marine life in Maldives"
          accentColor="text-cyan-600"
          hoverColor="group-hover:text-cyan-600"
          buttonGradient="from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700"
          emptyMessage="Contact us for customized Maldives tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Maldives;
