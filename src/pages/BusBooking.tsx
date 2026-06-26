import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import FAQ from '../components/FAQ';
import { Bus, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

const busFaqs = [
  { question: "How will I know my exact boarding point?", answer: "Boarding point details and the driver's contact number will be shared via SMS/Email before departure." },
  { question: "Are there AC and Sleeper options available?", answer: "Yes, we offer a wide range of options from premium Volvo sleepers to standard AC seaters." },
  { question: "What is the luggage allowance?", answer: "Generally, 15-20kg is allowed per passenger, but it depends on the specific bus operator." },
  { question: "Can I change my travel date?", answer: "Date changes are subject to the operator's policy. Contact our support team for modifications." }
];

const BusBooking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Bus className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Bus Reservations</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto font-light leading-relaxed">
              Travel comfortably across cities and states with our premium, verified, and safe bus operator network.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 border-b border-gray-100 pb-4">Why Book Buses With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Access to Volvo, AC Sleeper, and Luxury Coaches.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Verified operators ensuring strict safety and hygiene.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Pre-assigned seat confirmations according to your choice.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">24/7 dedicated assistance for boarding support.</p>
                </div>
              </div>

              <div className="bg-orange-50/50 rounded-2xl p-8 sm:p-10 border border-orange-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Required Documents</h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                    <ChevronRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Government ID (Aadhar / Driving License) for boarded passengers</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                    <ChevronRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Digital e-Ticket / M-Ticket (SMS or PDF format)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <a href="https://wa.me/918300082588?text=Hi%2C%20I%20would%20like%20to%20book%20a%20bus%20ticket" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_10px_20px_rgba(250,204,21,0.3)] transform hover:-translate-y-1">
                  Book Your Bus Now <Bus className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ 
          data={busFaqs} 
          title={<>Bus Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">FAQs</span></>} 
          subtitle="Common questions about our bus booking services." 
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default BusBooking;
