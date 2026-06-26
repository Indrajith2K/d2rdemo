import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import FAQ from '../components/FAQ';
import { Book, CheckCircle, FileText } from 'lucide-react';

const passportFaqs = [
  { question: "How long does it take to get a new passport?", answer: "Standard processing takes 30-45 days, while Tatkaal processing takes 3-7 days." },
  { question: "What documents do I need for a new passport?", answer: "Generally, you need Proof of Address (like Aadhar) and Proof of Date of Birth (like a Birth Certificate or Marksheet)." },
  { question: "Do I need to visit the passport office in person?", answer: "Yes, your physical presence is mandatory for biometric verification at the PSK." },
  { question: "Can you assist with passport renewals and address changes?", answer: "Absolutely, we handle all types of applications including renewals, lost passports, and address updates." }
];

const PassportAssistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 md:pt-28 flex-grow">
        <section className="bg-gradient-to-br from-teal-800 to-cyan-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3Nwb3J0fGVufDB8fDB8fHww')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Book className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Passport Assistance
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Complete guidance and fast-track processing for your Indian Passport applications. We make the entire process effortless and hassle-free.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">How to Apply?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Contact Us</h3>
                      <p className="text-gray-600">Reach out to our experts via WhatsApp or phone call. We'll understand your requirement (Fresh/Renewal/Tatkal).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Document Verification</h3>
                      <p className="text-gray-600">Share soft copies of your documents. Our team will verify them to ensure they meet the passport office requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Application Processing</h3>
                      <p className="text-gray-600">We will fill out your application accurately and schedule an appointment at your nearest Passport Seva Kendra (PSK).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-teal-100 text-teal-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Visit PSK</h3>
                      <p className="text-gray-600">Visit the PSK on your slotted date with original documents. We’ll guide you on exact protocols to follow there.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-teal-600" />
                  Required Documents
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Please ensure you have valid originals and copies of the following documents:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Proof of Address:</strong> Aadhaar Card, Voter ID, Utility Bill (Electricity/Water/Gas), or Bank Passbook.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Date of Birth Proof:</strong> Birth Certificate, School Leaving Certificate, PAN Card, etc.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Identity Proof:</strong> Aadhaar Card or PAN Card.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Educational Proof:</strong> 10th or 12th Marksheet (for Non-ECR category).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>If Renewal:</strong> Old Passport (first and last two pages).</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <a href="https://wa.me/918300082588?text=Hi%2C%20I%20need%20assistance%20with%20my%20passport" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                    Get Expert Assistance Instantly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQ 
          data={passportFaqs} 
          title={<>Passport <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">FAQs</span></>} 
          subtitle="Common questions about our passport assistance services." 
        />
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default PassportAssistance;
