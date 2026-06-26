import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Karnataka = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Karnataka' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Karnataka"
          subtitle="Heritage & Gardens"
          description="Explore the royal heritage of Mysore, lush coffee plantations of Coorg, and vibrant culture of Bangalore"
          gradientFrom="from-purple-900"
          gradientVia="via-indigo-800"
          gradientTo="to-violet-900"
        />

        <WhyChooseSection />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Karnataka Tour"
          titleAccent="Packages"
          accentColorClass="text-purple-600"
          subtitle="Discover the royal heritage of Mysore, lush coffee plantations of Coorg, and vibrant culture of Bangalore"
          accentColor="text-purple-600"
          hoverColor="group-hover:text-purple-600"
          buttonGradient="from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          emptyMessage="Contact us for customized Karnataka tour packages"
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Karnataka;
