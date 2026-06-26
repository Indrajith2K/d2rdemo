import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Plane, Globe, Compass } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Please wait...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3008bf61-dced-4ad5-a6ea-b6fa1eb17ecf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form submitted successfully! We'll contact you soon.");
      event.currentTarget.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      setResult("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <div className="flex-grow pt-16 md:pt-20">
        
        <section 
          className="pt-16 pb-24 relative bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.95)), url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-yellow-400 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Let's Plan Your Journey</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display">
                Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">More</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                Reach out to our travel experts to craft a spectacular, stress-free itinerary tailored strictly to you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Contact Information */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                  <Compass className="w-64 h-64 text-white" />
                </div>

                <div className="space-y-10 relative z-10">
                  <div className="border-b border-white/10 pb-6">
                    <h3 className="text-3xl font-display font-bold text-white mb-2">Connect With Us</h3>
                    <p className="text-gray-300">Share your dream destination. We'll handle everything else.</p>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-1">Call Us</h4>
                      <p className="text-lg text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer">+91 8300082588</p>
                      <p className="text-lg text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer">+91 6382447297</p>
                      <p className="text-xs text-yellow-400 mt-2 font-medium py-1 px-3 bg-yellow-400/10 rounded-full inline-block">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-1">Email Us</h4>
                      <p className="text-base sm:text-lg text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer">d2rholidays@gmail.com</p>
                      <p className="text-base sm:text-lg text-white font-medium hover:text-yellow-400 transition-colors cursor-pointer break-words">ops.dare2roamholidays@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-1">Visit Us</h4>
                      <p className="text-base text-gray-200 leading-relaxed">
                        3rd floor, Site no. 12, Chaturvedi Nagar,<br/>
                        Senthil Nagar, Ganapathy,<br/>
                        Coimbatore, Tamil Nadu 641006
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-50 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-800 mb-8 flex items-center">
                    Send an Inquiry <Plane className="ml-3 h-6 w-6 text-yellow-500 transform rotate-45" />
                  </h3>
                  
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                        <input type="text" name="first_name" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                        <input type="text" name="last_name" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input type="email" name="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200" placeholder="john@example.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input type="tel" name="phone" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200" placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Travel Preferences</label>
                      <select name="travel_preference" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200 text-slate-700 font-medium" required defaultValue="">
                        <option value="" disabled>Select your preferred experience</option>
                        <option value="tamilnadu">Tamil Nadu Pilgrimage Tours</option>
                        <option value="kerala">Kerala Backwaters</option>
                        <option value="karnataka">Karnataka Heritage Tours</option>
                        <option value="goa">Goa Beach Packages</option>
                        <option value="honeymoon">Honeymoon Packages</option>
                        <option value="group">Group Tours</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Tell Us About Your Trip</label>
                      <textarea rows={4} name="message" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent focus:bg-white transition-all duration-200 resize-none" placeholder="Where do you want to go? How many people? Any special requirements?" required />
                    </div>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                    <button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-1 mt-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Inquiry</span>
                        <Send className="h-5 w-5 ml-2" />
                      </div>
                    </button>
                    {result && (
                      <div className={`text-center p-4 rounded-xl text-sm font-bold mt-4 ${result.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-blue-50 text-slate-700 border border-blue-200'}`}>
                        {result}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Embed Section */}
        <section className="w-full h-[50vh] min-h-[400px] bg-slate-100">
          <iframe
            src="https://maps.google.com/maps?q=D2R%20Dare2Roam%20Holidays,%203rd%20floor,%20Site%20no.%2012,%20Chaturvedi%20Nagar,%20Senthil%20Nagar,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D2R Dare2Roam Holidays Location"
          ></iframe>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 relative bg-emerald-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542662565-7e4b66ae557f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
              <div className="bg-emerald-500/20 p-5 rounded-full inline-block mb-6 relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
                <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-emerald-400 relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Prefer a quick chat?
              </h3>
              <p className="text-base sm:text-lg text-emerald-50 mb-8 max-w-2xl mx-auto font-light">
                Skip the forms. Get instant replies, custom quotes, and complete itineraries directly on WhatsApp from our travel experts.
              </p>
              <a
                href="https://wa.me/918300082588"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-900 px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
