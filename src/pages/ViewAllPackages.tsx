import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, MapPin, Filter, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { domesticPackages, internationalPackages } from '../data/packages';

const ViewAllPackages = () => {
  const allPackages = [...Object.values(domesticPackages).flat(), ...internationalPackages];
  const [filteredPackages, setFilteredPackages] = useState(allPackages);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    filterPackages(filter, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterPackages(activeFilter, term);
  };

  const filterPackages = (filter: string, search: string) => {
    let filtered = allPackages;

    // Apply category filter
    if (filter !== 'all') {
      filtered = filtered.filter(pkg => pkg.category === filter);
    }

    // Apply search filter
    if (search) {
      filtered = filtered.filter(pkg =>
        pkg.name.toLowerCase().includes(search.toLowerCase()) ||
        pkg.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        const priceA = parseInt(a.price.replace(/[₹,]/g, ''));
        const priceB = parseInt(b.price.replace(/[₹,]/g, ''));
        return priceA - priceB;
      } else if (sortBy === 'rating') {
        return parseFloat(b.rating.toString()) - parseFloat(a.rating.toString());
      }
      return 0;
    });

    setFilteredPackages(filtered);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    filterPackages(activeFilter, searchTerm);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">{/* Fixed navbar collision */}
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              All Travel <span className="text-yellow-400">Packages</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through our complete collection of carefully curated travel experiences
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {['all', 'domestic', 'honeymoon', 'international'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                      activeFilter === filter
                        ? 'bg-yellow-400 text-slate-800'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredPackages.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No packages found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                    setFilteredPackages(allPackages);
                  }}
                  className="bg-yellow-400 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
                >
                  Show All Packages
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map(pkg => (
                  <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {pkg.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{pkg.rating}</span>
                        </div>
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ViewAllPackages;