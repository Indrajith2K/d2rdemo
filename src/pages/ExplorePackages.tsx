import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const ExplorePackages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Our <span className="text-yellow-400">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your adventure - Domestic or International destinations
            </p>
          </div>
        </section>

        {/* Main Category Selection */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Domestic - Navigate to /domestic-tours */}
              <div 
                onClick={() => navigate('/domestic-tours')}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer h-96"
              >
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" 
                    alt="Domestic" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <MapPin className="h-16 w-16 text-yellow-400 mb-4" />
                  <h2 className="text-4xl font-bold text-white mb-4">Domestic Tours</h2>
                  <p className="text-lg text-gray-200 mb-6">Explore the beauty of India with our curated domestic packages</p>
                  <div className="inline-flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Destinations</span>
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* International */}
              <div 
                onClick={() => navigate('/international-tours')}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer h-96"
              >
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" 
                    alt="International" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <Globe className="h-16 w-16 text-yellow-400 mb-4" />
                  <h2 className="text-4xl font-bold text-white mb-4">International Tours</h2>
                  <p className="text-lg text-gray-200 mb-6">Discover amazing countries around the world with our international packages</p>
                  <div className="inline-flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Destinations</span>
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
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

export default ExplorePackages;
