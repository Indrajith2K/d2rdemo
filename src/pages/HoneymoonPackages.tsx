
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { MapPin, Clock, Users, Star, Heart, Camera, Utensils, Bed } from 'lucide-react';

const HoneymoonPackages = () => {
  const honeymoonPackages = [
    {
      id: 1,
      title: 'Kerala Backwater Romance',
      location: 'Alleppey • Munnar • Kochi',
      duration: '6 Days / 5 Nights',
      price: '₹45,999',
      originalPrice: '₹55,999',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Houseboat Stay', 'Couple Spa', 'Tea Garden Visit', 'Candlelight Dinner'],
      inclusions: ['Private Transportation', 'Luxury Accommodation', 'All Meals', 'Sightseeing'],
    },
    {
      id: 2,
      title: 'Goa Beach Honeymoon',
      location: 'North Goa • South Goa',
      duration: '5 Days / 4 Nights',
      price: '₹38,999',
      originalPrice: '₹48,999',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Beach Resort', 'Water Sports', 'Sunset Cruise', 'Romantic Dinner'],
      inclusions: ['Beach Resort Stay', 'Daily Breakfast', 'Airport Transfer', 'Activities'],
    },
    {
      id: 3,
      title: 'Coorg Hill Station Romance',
      location: 'Coorg • Chikmagalur',
      duration: '4 Days / 3 Nights',
      price: '₹32,999',
      originalPrice: '₹42,999',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Coffee Plantation', 'Nature Walks', 'Couples Photography', 'Cozy Stay'],
      inclusions: ['Homestay Experience', 'All Meals', 'Local Guide', 'Photography'],
    },
    {
      id: 4,
      title: 'Pondicherry French Romance',
      location: 'Pondicherry • Auroville',
      duration: '4 Days / 3 Nights',
      price: '₹29,999',
      originalPrice: '₹39,999',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['French Quarter Walk', 'Beach Time', 'Auroville Visit', 'Romantic Cafes'],
      inclusions: ['Heritage Hotel', 'Breakfast & Dinner', 'City Tour', 'Beach Activities'],
    },
    {
      id: 5,
      title: 'Mysore Palace Honeymoon',
      location: 'Mysore • Ooty • Bangalore',
      duration: '7 Days / 6 Nights',
      price: '₹52,999',
      originalPrice: '₹62,999',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Palace Visit', 'Toy Train Ride', 'Garden Walks', 'Royal Experience'],
      inclusions: ['Luxury Hotels', 'All Transportation', 'Guide Services', 'Special Dinners'],
    },
    {
      id: 6,
      title: 'Hampi Heritage Romance',
      location: 'Hampi • Badami • Hospet',
      duration: '5 Days / 4 Nights',
      price: '₹35,999',
      originalPrice: '₹45,999',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1609138574023-2c1b2986cb10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Ancient Ruins', 'Sunset Points', 'Cultural Tours', 'Photography'],
      inclusions: ['Heritage Resort', 'Cultural Guide', 'All Meals', 'Monument Entry'],
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-red-50 to-yellow-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Honeymoon <span className="text-red-500">Packages</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create magical memories with our romantic honeymoon packages across South India's most enchanting destinations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span>Couple Photography</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                <span>Romantic Dinners</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                <span>Luxury Stays</span>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {honeymoonPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        Honeymoon Special
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
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Package Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((highlight, index) => (
                          <span key={index} className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Inclusions:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.inclusions.map((inclusion, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {inclusion}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href="https://whatsform.com/4rhIjb" target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                        Book Honeymoon Package
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
};

export default HoneymoonPackages;
