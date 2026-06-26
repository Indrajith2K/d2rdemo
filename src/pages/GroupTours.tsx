
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { MapPin, Clock, Users, Star, Bus, Shield, Calendar, Gift } from 'lucide-react';

const GroupTours = () => {
  const groupPackages = [
    {
      id: 1,
      title: 'South India Grand Circuit',
      location: 'Chennai • Madurai • Kochi • Mysore • Bangalore',
      duration: '12 Days / 11 Nights',
      price: '₹52,999',
      groupSize: '15-25 People',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Guided Tours', 'Group Activities', 'Cultural Shows', 'Local Cuisine'],
      inclusions: ['AC Bus Transport', 'Hotel Stay', 'All Meals', 'Tour Guide']
    },
    {
      id: 2,
      title: 'Kerala Family Special',
      location: 'Kochi • Munnar • Thekkady • Alleppey',
      duration: '8 Days / 7 Nights',
      price: '₹38,999',
      groupSize: '20-30 People',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Family Friendly', 'Houseboat Stay', 'Wildlife Safari', 'Tea Gardens'],
      inclusions: ['Luxury Bus', 'Family Rooms', 'All Activities', 'Photography']
    },
    {
      id: 3,
      title: 'Senior Citizens Special',
      location: 'Ooty • Mysore • Coorg • Bangalore',
      duration: '7 Days / 6 Nights',
      price: '₹42,999',
      groupSize: '12-18 People',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Comfortable Pace', 'Medical Support', 'Easy Accessibility', 'Cultural Tours'],
      inclusions: ['Medical Kit', 'Comfortable Seats', 'Special Meals', 'Assistance']
    },
    {
      id: 4,
      title: 'Youth Adventure Group',
      location: 'Goa • Hampi • Chikmagalur • Bangalore',
      duration: '9 Days / 8 Nights',
      price: '₹35,999',
      groupSize: '25-35 People',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Adventure Sports', 'Beach Activities', 'Trekking', 'Music & Dance'],
      inclusions: ['Adventure Gear', 'Beach Resort', 'Activity Guide', 'Group Games']
    },
    {
      id: 5,
      title: 'Corporate Team Building',
      location: 'Munnar • Thekkady • Kumily • Kochi',
      duration: '5 Days / 4 Nights',
      price: '₹32,999',
      groupSize: '20-40 People',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Team Activities', 'Conference Facilities', 'Outdoor Games', 'Networking'],
      inclusions: ['Meeting Rooms', 'Team Building', 'Breakfast & Lunch', 'Transport']
    },
    {
      id: 6,
      title: 'Pilgrimage Group Tour',
      location: 'Madurai • Rameswaram • Kanyakumari • Trivandrum',
      duration: '10 Days / 9 Nights',
      price: '₹45,999',
      groupSize: '30-50 People',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Sacred Temples', 'Spiritual Guidance', 'Prayer Sessions', 'Holy Dips'],
      inclusions: ['Temple Entries', 'Spiritual Guide', 'Prasadam', 'Religious Activities']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Group <span className="text-blue-600">Tours</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join like-minded travelers and explore South India with our specially curated group tour packages
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Bus className="h-4 w-4" />
                <span>Comfortable Transport</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Travel Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Fixed Departures</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4" />
                <span>Group Discounts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Why Choose Group Tours?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Meet New People</h3>
                <p className="text-gray-600 text-sm">Connect with fellow travelers and make lifelong friendships</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Safe & Secure</h3>
                <p className="text-gray-600 text-sm">Travel with confidence with our experienced guides and support</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Cost Effective</h3>
                <p className="text-gray-600 text-sm">Enjoy group discounts and shared costs for better value</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fixed Schedule</h3>
                <p className="text-gray-600 text-sm">No planning hassles with pre-planned itineraries and dates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Group Tour
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
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((highlight, index) => (
                          <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
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
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                        Join Group Tour
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

export default GroupTours;
