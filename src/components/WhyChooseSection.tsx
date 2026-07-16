import React from 'react';
import { Phone, Shield, Award } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose D2R Holidays?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">3+ years of experience in crafting memorable journeys</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center md:flex-col md:text-center text-left gap-4 md:gap-0">
            <div className="bg-blue-600 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center md:mx-auto md:mb-4">
              <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <h3 className="text-base md:text-xl font-semibold text-slate-800 mb-0.5 md:mb-2">3+ Years Experience</h3>
              <p className="text-xs md:text-base text-gray-600">Trusted by thousands of happy travelers</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center md:flex-col md:text-center text-left gap-4 md:gap-0">
            <div className="bg-green-600 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center md:mx-auto md:mb-4">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <h3 className="text-base md:text-xl font-semibold text-slate-800 mb-0.5 md:mb-2">Best Price Guarantee</h3>
              <p className="text-xs md:text-base text-gray-600">Competitive rates with no hidden charges</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center md:flex-col md:text-center text-left gap-4 md:gap-0">
            <div className="bg-orange-600 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center md:mx-auto md:mb-4">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <h3 className="text-base md:text-xl font-semibold text-slate-800 mb-0.5 md:mb-2">24/7 Support</h3>
              <p className="text-xs md:text-base text-gray-600">Round-the-clock assistance during your trip</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
