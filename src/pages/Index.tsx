import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import MiddleBanner from "../components/MiddleBanner";
import StatsBanner from "../components/StatsBanner";
import Testimonials from "../components/Testimonials";
import TrendingDestinations from "../components/TrendingDestinations";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16 md:pt-0">
        <Hero />
        <Services />
        <MiddleBanner />
        <StatsBanner />
        <TrendingDestinations />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <FloatingContact />
    </div>
  );
};

export default Index;
