import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Malaysia = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Malaysia' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Malaysia"
          subtitle="Truly Asia"
          description="Experience the perfect blend of modern cities, ancient traditions, and tropical paradise"
          gradientFrom="from-red-900"
          gradientVia="via-yellow-600"
          gradientTo="to-blue-800"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Malaysia Tour"
          titleAccent="Packages"
          accentColorClass="text-red-600"
          subtitle="Discover the multicultural heritage and modern attractions of Malaysia"
          accentColor="text-red-600"
          hoverColor="group-hover:text-red-600"
          buttonGradient="from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700"
          emptyMessage="Contact us for customized Malaysia tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Malaysia;
