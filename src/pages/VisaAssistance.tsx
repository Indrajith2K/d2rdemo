import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import FAQ from '../components/FAQ';
import { Globe, CheckCircle, FileSearch } from 'lucide-react';

const visaFaqs = [
  { question: "How long does the visa process take?", answer: "Processing times vary by country. E-visas can take 2-5 days, while standard visas can take 10-15 working days." },
  { question: "Do you guarantee visa approval?", answer: "Visa approval is strictly at the discretion of the embassy. However, we ensure your documentation is flawless to maximize approval chances." },
  { question: "What documents are commonly required?", answer: "Valid passport, recent photographs, bank statements, and flight/hotel itineraries are generally required." },
  { question: "Do I need to book flights before applying?", answer: "Many embassies require flight itineraries. We can provide dummy tickets or hold reservations for visa purposes." }
];

const VisaAssistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 md:pt-28 flex-grow">
        <section className="bg-gradient-to-br from-cyan-800 to-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://static.toiimg.com/thumb/msid-122028859,width-1280,height-720,resizemode-4/122028859.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Globe className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Visa Assistance
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              We provide expert Visa processing assistance for <strong className="text-white font-bold">ALL COUNTRIES</strong> globally. Enjoy a high success rate and seamless experience.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">How to Apply for a Visa?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-cyan-100 text-cyan-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Free Consultation</h3>
                      <p className="text-gray-600">Tell us your destination country and purpose of visit. We'll advise you on the exact visa type required.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-cyan-100 text-cyan-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Document Collection</h3>
                      <p className="text-gray-600">We provide you with a customized, specific checklist of required documents based on the embassy's rules.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-cyan-100 text-cyan-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Form Filing & Verification</h3>
                      <p className="text-gray-600">Our experts carefully verify your documents and completely fill the complex destination country's forms.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-cyan-100 text-cyan-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Submission & Approval</h3>
                      <p className="text-gray-600">We assist you in scheduling an embassy appointment or submit e-visa requests. Await your stamped visa!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <FileSearch className="h-6 w-6 text-cyan-600" />
                  General Required Documents
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Documents vary heavily by destination. We arrange Visas for <span className="font-semibold text-slate-800">ALL</span> countries. General requirements include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Original Passport:</strong> Must have at least 6 months validity from travel date and 2 blank pages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Photographs:</strong> Recent passport-size photographs with specific backgrounds (per embassy rules).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Financial Proof:</strong> Last 6 months bank statements with bank seal and signature, and ITRs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Occupational Proof:</strong> Leave approval letter/NOC, salary slips, or business registration documents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Travel Documents:</strong> We can assist with dummy/confirmed flight and hotel booking documents.</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <a href="https://wa.me/918300082588?text=Hi%2C%20I%20need%20assistance%20with%20my%20visa" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                    Apply For Visa Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ 
          data={visaFaqs} 
          title={<>Visa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">FAQs</span></>} 
          subtitle="Common questions about our visa processing services." 
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default VisaAssistance;
