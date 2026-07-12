import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingContact from '../../components/FloatingContact';
import DestinationHero from '../../components/DestinationHero';
import WhyChooseSection from '../../components/WhyChooseSection';
import PackagesGrid from '../../components/PackagesGrid';
import { usePackages } from '../../hooks/usePackages';

const Seychelles = () => {
  const { packages, loading, error } = usePackages({ stateOrCountry: 'Seychelles' });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <DestinationHero
          title="Seychelles"
          subtitle="Island Sanctuary"
          description="Relax on pristine white-sand beaches, explore lush national parks, and see unique giant tortoises"
          gradientFrom="from-teal-900"
          gradientVia="via-emerald-800"
          gradientTo="to-cyan-950"
        />

        <PackagesGrid
          packages={packages}
          loading={loading}
          error={error}
          title="Seychelles Tour"
          titleAccent="Packages"
          accentColorClass="text-teal-600"
          subtitle="Discover beautiful beaches, lush granite rock formations, and rare wildlife in Seychelles"
          accentColor="text-teal-600"
          hoverColor="group-hover:text-teal-600"
          buttonGradient="from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
          emptyMessage="Contact us for customized Seychelles tour packages"
        />

        <WhyChooseSection />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Seychelles;
