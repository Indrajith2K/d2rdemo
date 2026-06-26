import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import FAQ from '../components/FAQ';
import { Train, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

const trainFaqs = [
  { question: "How far in advance can I book train tickets?", answer: "Generally, train bookings open 120 days in advance." },
  { question: "Can I choose my preferred berth?", answer: "We will select your preferred berth during booking, subject to IRCTC availability." },
  { question: "Do I need to carry a printed ticket?", answer: "No, an SMS or e-ticket on your phone along with a valid ID is sufficient." },
  { question: "Can you book Tatkal train tickets?", answer: "Yes, we provide assistance with Tatkal bookings on a best-effort basis." }
];

const TrainBooking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Train className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Train Ticket Bookings</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-light leading-relaxed">
              Enjoy hassle-free railway reservations, tracking, and itinerary planning for a scenic journey across India.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 border-b border-gray-100 pb-4">Why Book Trains With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Instant IRCTC ticket reservations and PNR tracking.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Expert assistance in planning multi-city railway routes.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Tatkal and premium tatkal ticket assistance when urgently needed.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Support for cancellation and refund processing.</p>
                </div>
              </div>

              <div className="bg-emerald-50/50 rounded-2xl p-8 sm:p-10 border border-emerald-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Required Documents For Booking/Travel</h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-emerald-50">
                    <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Passenger Names, Ages, and Gender required precisely for reservation.</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-emerald-50">
                    <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Original Government ID (Aadhar / Voter ID / Passport) to be carried physically during travel.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <a href="https://wa.me/918300082588?text=Hi%2C%20I%20would%20like%20to%20book%20a%20train%20ticket" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_10px_20px_rgba(250,204,21,0.3)] transform hover:-translate-y-1">
                  Book Your Train Now <Train className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ 
          data={trainFaqs} 
          title={<>Train Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FAQs</span></>} 
          subtitle="Common questions about our train ticket booking services." 
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default TrainBooking;
