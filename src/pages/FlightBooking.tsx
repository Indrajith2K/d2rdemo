import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import FAQ from '../components/FAQ';
import { Plane, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

const flightFaqs = [
  { question: "How do I receive my flight tickets after booking?", answer: "E-tickets are emailed to you instantly upon confirmation." },
  { question: "Can I select my preferred seats?", answer: "Yes, we can assist with web check-in and seat selection based on availability." },
  { question: "What is the cancellation policy?", answer: "Cancellations follow airline policies; we provide full support to process refunds and rescheduling." },
  { question: "How early should I arrive at the airport?", answer: "We recommend arriving 2 hours prior for domestic and 3-4 hours prior for international flights." }
];

const FlightBooking = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex-grow pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://i.cdn.newsbytesapp.com/images/l28620250620091656.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Plane className="h-16 w-16 text-yellow-400 mx-auto mb-6 transform -rotate-12" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Flight Booking Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Experience seamless domestic and international flight reservations with absolute peace of mind.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 border-b border-gray-100 pb-4">Why Book Flights With Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Best competitive pricing with exclusive airline deals.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Dedicated 24/7 support for cancellations and rescheduling.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Assistance with web check-in and premium seat selection.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">Transparent fare breakdowns with strictly zero hidden charges.</p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-8 sm:p-10 border border-blue-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Required Documents</h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                    <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Passport (Min. 6 months validity for International flights)</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                    <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Government ID / Aadhar Card (For Domestic flights)</span>
                  </li>
                  <li className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                    <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">Valid Visa (If applicable for your destination country)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <a href="https://wa.me/918300082588?text=Hi%2C%20I%20would%20like%20to%20book%20a%20flight" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-[0_10px_20px_rgba(250,204,21,0.3)] transform hover:-translate-y-1">
                  Book Your Flight Now <Plane className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ 
          data={flightFaqs} 
          title={<>Flight Booking <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">FAQs</span></>} 
          subtitle="Common questions about our flight booking services." 
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default FlightBooking;
