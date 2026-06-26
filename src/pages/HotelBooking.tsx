import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { Building, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

const HotelBooking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-700 to-rose-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Building className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Hotel Accommodations</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto font-light leading-relaxed">
              From luxury suites to cozy boutique stays, we handpick the finest accommodations tailored perfectly for your trip.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 border-b border-gray-100 pb-4">Why Book Hotels With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Curated properties ensuring top-tier hygiene & comfort.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Exclusive B2B tariffs saving you up to 30%.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Complimentary breakfast inclusions on select bookings.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Flexible cancellation policies to safeguard your money.</p>
                </div>
              </div>

              <div className="bg-pink-50/50 rounded-2xl p-8 sm:p-10 border border-pink-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-pink-100 p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Required Documents at Check-in</h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-pink-50">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Original Government ID (Aadhar / Driving License / Voter ID)</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-pink-50">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Original Passport & Valid Visa (For International Guests)</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-pink-50">
                    <ChevronRight className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Hotel Booking Confirmation Voucher (Digital or Printed)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <a href="https://wa.me/918300082588?text=Hi%2C%20I%20would%20like%20to%20book%20a%20hotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_10px_20px_rgba(250,204,21,0.3)] transform hover:-translate-y-1">
                  Book Your Hotel Now <Building className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default HotelBooking;
