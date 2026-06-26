import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, MapPin } from 'lucide-react';
import { domesticPackages, internationalPackages } from '../data/packages';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Combine packages from different categories
  const allPackages = [...Object.values(domesticPackages).flat(), ...internationalPackages];

  // Filter packages based on active filter
  const getFilteredPackages = () => {
    let filtered = allPackages;

    if (activeFilter === 'domestic') {
      filtered = allPackages.filter(pkg => pkg.category === 'domestic');
    } else if (activeFilter === 'honeymoon') {
      filtered = allPackages.filter(pkg => pkg.category === 'honeymoon');
    }

    return filtered.slice(0, 6); // Show first 6 packages
  };

  const displayedPackages = getFilteredPackages();

  return <section id="packages" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Featured <span className="text-yellow-500">Packages</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Handpicked destinations and carefully crafted itineraries for unforgettable experiences
        </p>
      </div>

      {/* Package Categories */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === 'all'
              ? 'bg-yellow-400 text-slate-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveFilter('domestic')}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === 'domestic'
              ? 'bg-yellow-400 text-slate-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Domestic
          </button>
          <button
            onClick={() => setActiveFilter('honeymoon')}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === 'honeymoon'
              ? 'bg-yellow-400 text-slate-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            Honeymoon
          </button>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPackages.map(pkg => <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
          <div className="relative overflow-hidden">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                {pkg.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {pkg.name}
            </h3>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{pkg.duration}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-800">{pkg.price}</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>
            </div>


            <a href="https://whatsform.com/4rhIjb" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-slate-800 transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
            </a>
          </div>
        </div>)}
      </div>

      <div className="text-center mt-12">
        <Link to="/view-all-packages" className="bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block">
          View All Packages
        </Link>
      </div>
    </div>
  </section>;
};
export default Packages;