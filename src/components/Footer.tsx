import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-yellow-400">Dare2Roam</span> Holidays
            </h3>
            <p className="text-gray-300 leading-relaxed">
              WE TAKE CARE OF YOUR TRIP - Dare2Roam Holidays offers custom tours and event services for families, groups, and professionals. From local getaways to global adventures, we craft comfortable and culturally rich experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/d2r.holidays" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/d2r.holidays" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/explore-packages" className="text-gray-300 hover:text-white transition-colors duration-200">Tour Packages</a></li>
              <li><a href="/domestic-tours" className="text-gray-300 hover:text-white transition-colors duration-200">Domestic Tours</a></li>
              <li><a href="/packages/honeymoon" className="text-gray-300 hover:text-white transition-colors duration-200">Honeymoon</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/domestic-tours" className="text-gray-300 hover:text-white transition-colors duration-200">Domestic And International Tours</a></li>
              <li><a href="/group-tours" className="text-gray-300 hover:text-white transition-colors duration-200">School and College Tours</a></li>
              <li><a href="/flight-booking" className="text-gray-300 hover:text-white transition-colors duration-200">Flight, Train, Bus tickets</a></li>
              <li><a href="/passport-assistance" className="text-gray-300 hover:text-white transition-colors duration-200">Passport</a></li>
              <li><a href="/visa-assistance" className="text-gray-300 hover:text-white transition-colors duration-200">Visa</a></li>
              <li><a href="/live-exchange" className="text-gray-300 hover:text-white transition-colors duration-200">Currency Exchange</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>+91 8300082588</p>
                  <p>+91 6382447297</p>
                  <p>+91 6382722325</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>d2rholidays@gmail.com</p>
                  <p>ops.dare2roamholidays@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  3rd floor, Site no. 12, Chaturvedi Nagar,<br />
                  Senthil Nagar, Ganapathy, Coimbatore,<br />
                  Tamil Nadu 641006
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2026 Dare2Roam. All rights reserved. | Privacy Policy | Terms & Conditions
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                Made with ❤️ by <a href="https://skittex.in" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium">Skittex Studio</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
