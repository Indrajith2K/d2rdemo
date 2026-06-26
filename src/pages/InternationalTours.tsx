import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const InternationalTours = () => {
  const internationalDestinations = [
    { name: 'Thailand', path: '/destinations/thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500' },
    { name: 'Malaysia', path: '/destinations/malaysia', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500' },
    { name: 'Singapore', path: '/destinations/singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500' },
    { name: 'Bali', path: '/destinations/bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500' },
    { name: 'United Arab Emirates (Dubai)', path: '/destinations/dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500' },
    { name: 'Sri Lanka', path: '/destinations/srilanka', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Globe className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              International <span className="text-yellow-400">Tours</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing countries and cultures around the world
            </p>
          </div>
        </section>

        {/* International Destinations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalDestinations.map((destination, index) => (
                <Link 
                  key={index}
                  to={destination.path}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-80">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Plane className="h-8 w-8 text-yellow-400 mb-2" />
                      <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                      <div className="inline-flex items-center text-yellow-400 font-semibold">
                        <span>Explore Packages</span>
                        <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default InternationalTours;
