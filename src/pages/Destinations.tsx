
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const Destinations = () => {
  const destinations = [
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      subtitle: 'Pilgrims Tour & Hill Stations',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sacred temples, serene hill stations, and rich cultural heritage await you in Tamil Nadu.',
      highlights: ['Meenakshi Temple', 'Ooty Hill Station', 'Rameswaram', 'Kodaikanal'],
      duration: '5-12 Days',
      rating: 4.8
    },
    {
      id: 'pondicherry',
      name: 'Pondicherry',
      subtitle: 'French Colonial Charm',
      image: 'https://images.unsplash.com/photo-1588395995225-ce9d1e5cd2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the unique blend of French colonial architecture and Indian culture.',
      highlights: ['French Quarter', 'Auroville', 'Paradise Beach', 'Sri Aurobindo Ashram'],
      duration: '3-5 Days',
      rating: 4.7
    },
    {
      id: 'kerala',
      name: 'Kerala',
      subtitle: 'God\'s Own Country',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Backwaters, spice plantations, and pristine beaches make Kerala a tropical paradise.',
      highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Kochi Fort', 'Thekkady Wildlife'],
      duration: '6-10 Days',
      rating: 4.9
    },
    {
      id: 'south-karnataka',
      name: 'South Karnataka',
      subtitle: 'Heritage & Gardens',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Royal palaces, magnificent gardens, and architectural marvels of the Mysore region.',
      highlights: ['Mysore Palace', 'Coorg Coffee Estates', 'Bandipur National Park', 'Srirangapatna'],
      duration: '4-7 Days',
      rating: 4.6
    },
    {
      id: 'north-karnataka',
      name: 'North Karnataka',
      subtitle: 'Ancient Wonders',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'UNESCO World Heritage sites and architectural marvels from the Vijayanagara Empire.',
      highlights: ['Hampi Ruins', 'Badami Caves', 'Aihole Temples', 'Pattadakal Monuments'],
      duration: '4-6 Days',
      rating: 4.7
    },
    {
      id: 'goa',
      name: 'Goa',
      subtitle: 'Beach Paradise',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sun, sand, and Portuguese heritage create the perfect tropical getaway.',
      highlights: ['Baga Beach', 'Old Goa Churches', 'Spice Plantations', 'Dudhsagar Falls'],
      duration: '4-7 Days',
      rating: 4.8
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      subtitle: 'City of Pearls',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Rich Nizami culture, magnificent monuments, and delectable cuisine.',
      highlights: ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Hussain Sagar Lake'],
      duration: '3-5 Days',
      rating: 4.5
    },
    {
      id: 'golden-triangle',
      name: 'Delhi Golden Triangle',
      subtitle: 'India\'s Cultural Heart',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Explore Delhi, Agra, and Jaipur - the most iconic destinations of India.',
      highlights: ['Taj Mahal', 'Red Fort', 'Hawa Mahal', 'Amber Fort'],
      duration: '6-8 Days',
      rating: 4.9
    },
    {
      id: 'himachal-pradesh',
      name: 'Himachal Pradesh',
      subtitle: 'Manali & Shimla',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Snow-capped mountains, colonial charm, and adventure activities in the Himalayas.',
      highlights: ['Rohtang Pass', 'Mall Road Shimla', 'Solang Valley', 'Hadimba Temple'],
      duration: '6-10 Days',
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover India's most captivating destinations with our expertly crafted tours
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm md:text-base">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
              <span>9+ Destinations</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span>Expert Guides</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-yellow-400 mr-2" />
              <span>5K+ Happy Travelers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-yellow-600 font-medium mb-3">{destination.subtitle}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm">Starting from</span>
                    <button className="bg-yellow-400 text-slate-800 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-200">
                      Explore
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Destinations;
