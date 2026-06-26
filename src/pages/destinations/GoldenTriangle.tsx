import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const GoldenTriangle = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Golden Triangle' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Golden Triangle"
          subtitle="Delhi-Agra-Jaipur"
          description="Experience India's most iconic destinations - Mughal grandeur, Rajputana heritage, and modern capital"
          gradientFrom="from-amber-900"
          gradientVia="via-yellow-800"
          gradientTo="to-orange-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Golden Triangle"
          titleAccent="Packages"
          accentColorClass="text-amber-600"
          subtitle="Journey through India's most famous tourist circuit covering Delhi, Agra, and Jaipur"
          accentColor="text-amber-600"
          hoverColor="group-hover:text-amber-600"
          buttonGradient="from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
          emptyMessage="Contact us for customized Golden Triangle tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GoldenTriangle;
