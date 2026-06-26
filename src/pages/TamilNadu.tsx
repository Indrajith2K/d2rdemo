
import React from 'react';
import { MapPin, Clock, Users, Star, Camera, Mountain, Heart, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const TamilNadu = () => {
  const packages = [
    {
      name: 'Tamil Nadu Pilgrimage Tour',
      duration: '7 Days / 6 Nights',
      price: '₹18,999',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      highlights: ['Meenakshi Temple', 'Rameswaram', 'Kanyakumari', 'Thanjavur']
    },
    {
      name: 'Hill Stations Special',
      duration: '5 Days / 4 Nights',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ooty', 'Kodaikanal', 'Yercaud', 'Coonoor']
    },
    {
      name: 'Complete Tamil Nadu',
      duration: '12 Days / 11 Nights',
      price: '₹35,999',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      highlights: ['All Major Temples', 'Hill Stations', 'Coastal Areas', 'Cultural Sites']
    }
  ];

  const attractions = [
    {
      name: 'Meenakshi Amman Temple',
      location: 'Madurai',
      description: 'Marvel at the intricate architecture of this ancient temple dedicated to Goddess Meenakshi.',
      icon: Heart
    },
    {
      name: 'Ooty Hill Station',
      location: 'Nilgiris',
      description: 'Experience the cool climate and scenic beauty of the Queen of Hill Stations.',
      icon: Mountain
    },
    {
      name: 'Rameswaram Temple',
      location: 'Rameswaram',
      description: 'Visit one of the twelve Jyotirlinga temples, a major pilgrimage destination.',
      icon: Heart
    },
    {
      name: 'Kodaikanal Lake',
      location: 'Kodaikanal',
      description: 'Enjoy boating and scenic walks around this beautiful man-made lake.',
      icon: Camera
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.8)), url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-400">Tamil Nadu</span>
              <br />
              Pilgrims & Hills
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Discover the spiritual heart of South India with our expertly crafted pilgrimage tours 
              and refreshing hill station getaways in Tamil Nadu.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                <span>20+ Sacred Sites</span>
              </div>
              <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Mountain className="h-5 w-5 text-yellow-400 mr-2" />
                <span>5 Hill Stations</span>
              </div>
              <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.8/5 Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Book Tamil Nadu Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Sacred Sites & <span className="text-yellow-500">Hill Stations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ancient temples to serene hill stations, Tamil Nadu offers a perfect blend of spirituality and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <attraction.icon className="h-6 w-6 text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{attraction.name}</h3>
                    <p className="text-yellow-600 font-medium mb-3">{attraction.location}</p>
                    <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Tamil Nadu <span className="text-yellow-500">Packages</span>
            </h2>
            <p className="text-lg text-gray-600">Choose from our carefully curated tour packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                  
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

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="https://whatsform.com/4rhIjb" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-slate-800 transition-all duration-300">
                      Book Now
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
  );
};

export default TamilNadu;
