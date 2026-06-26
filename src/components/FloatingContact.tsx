
import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918300082588?text=Hi%20D2R%20Holidays,%20I%20would%20like%20to%20know%20more%20about%20your%20travel%20packages"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/d2r.holidays"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
        title="Follow us on Instagram"
      >
        <Instagram className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Instagram
        </span>
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 rounded-full animate-ping opacity-20"></div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918300082588"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
        title="Call us now"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </span>
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
      </a>
    </div>
  );
};

export default FloatingContact;