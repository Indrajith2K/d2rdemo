import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import StatsBanner from "../components/StatsBanner";
import Testimonials from "../components/Testimonials";
import CardsCarousel from "../components/CardsCarousel";
import TrendingDestinations from "../components/TrendingDestinations";
import FeaturedDestinationsCarousels from "../components/FeaturedDestinationsCarousels";
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
        <TrendingDestinations />
        <FeaturedDestinationsCarousels />
        <CardsCarousel />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
      </div>
      <FloatingContact />
    </div>
  );
};

export default Index;
