import React, { useState } from 'react';
import { MapPin, Calendar, Users, Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const PlanCustomTrip = () => {
  // Redirect to WhatsApp form immediately
  React.useEffect(() => {
    window.location.href = "https://whatsform.com/4rhIjb";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Redirecting to <span className="text-yellow-400">Custom Trip Planner</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please wait while we redirect you to our custom trip planning form...
            </p>
            <div className="mt-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
            </div>
          </div>
        </section>

        {/* Form Section - Remove all form content since redirecting */}
        </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PlanCustomTrip;