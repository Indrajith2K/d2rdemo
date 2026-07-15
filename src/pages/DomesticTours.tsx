import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const DomesticTours = () => {
  const domesticDestinations = [
    { name: 'Kerala', path: '/destinations/kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800' },
    { name: 'Tamil Nadu', path: '/destinations/tamil-nadu', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' },
    { name: 'Karnataka', path: '/destinations/karnataka', image: 'https://wallpaper.forfun.com/fetch/25/25c01ce5f7cc14e4ceda8a64fc57eb17.jpeg' },
    { name: 'Goa', path: '/destinations/goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' },
    { name: 'Hyderabad', path: '/destinations/hyderabad', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800' },
    { name: 'Delhi - Agra - Jaipur', path: '/destinations/golden-triangle', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800' },
    { name: 'Himachal Pradesh', path: '/destinations/himachal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
    { name: 'Kashmir', path: '/destinations/kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800' },
    { name: 'Northeast', path: '/destinations/northeast', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800' },
    { name: 'Meghalaya', path: '/destinations/meghalaya', image: 'https://t3.ftcdn.net/jpg/16/50/53/62/360_F_1650536232_TCIK3pNWQmDjNtdLZ0MJ6hbsTmhSWjHI.jpg' },
    { name: 'Andaman', path: '/destinations/andaman', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800' },
    { name: 'Lakshadweep', path: '/destinations/lakshadweep', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800' },
    { name: 'Rajasthan', path: '/destinations/rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800' },
    { name: 'Maharashtra', path: '/destinations/maharashtra', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MapPin className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Domestic <span className="text-yellow-400">Tours</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the incredible beauty and diversity of India
            </p>
          </div>
        </section>

        {/* Domestic Destinations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {domesticDestinations.map((destination, index) => (
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
                      <MapPin className="h-8 w-8 text-yellow-400 mb-2" />
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

export default DomesticTours;
