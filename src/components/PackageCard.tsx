import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, ChevronRight, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Package } from '@/hooks/usePackages';

interface PackageCardProps {
  pkg: Package;
  accentColor?: string;
  hoverColor?: string;
  buttonGradient?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  accentColor = 'text-blue-600',
  hoverColor = 'group-hover:text-blue-600',
  buttonGradient = 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
}) => {
  const [showQuickFacts, setShowQuickFacts] = useState(false);
  const [showSpeciality, setShowSpeciality] = useState(false);

  useEffect(() => {
    if (showQuickFacts || showSpeciality) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showQuickFacts, showSpeciality]);

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const formatDuration = (days: number, nights: number) => `${days} Days / ${nights} Nights`;
  const packageUrl = `/packages/${pkg.slug || pkg.id}`;

  return (
    <>
      <div className="h-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-100 group overflow-hidden">
        <Link to={packageUrl} className="relative overflow-hidden aspect-[4/3] sm:h-60 sm:aspect-auto block">
          <img
            src={pkg.image_url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
            alt={pkg.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />


        </Link>

        <div className="p-5 sm:p-6 flex flex-col flex-grow relative">
          <div className="flex items-center text-slate-500 text-xs sm:text-sm font-medium mb-3">
            <Clock className="h-4 w-4 mr-1.5 text-slate-400" />
            {formatDuration(pkg.duration_days, pkg.duration_nights)}
          </div>

          <Link to={packageUrl}>
            <h3 className={`text-xl sm:text-2xl font-bold text-slate-800 mb-2 line-clamp-2 ${hoverColor} transition-colors duration-300 min-h-[3.5rem]`}>
              {pkg.name}
            </h3>
          </Link>
          
          <div className="flex items-center text-slate-500 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-1.5 text-slate-400 shrink-0" />
            <span className="truncate">{pkg.location || pkg.state_or_country}</span>
          </div>

          <div className="flex items-end justify-between mb-6 pb-6 border-b border-gray-100">
            <div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Starting from</div>
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl sm:text-3xl font-black ${accentColor}`}>{formatPrice(pkg.price_per_person)}</span>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">/ person</span>
              </div>
            </div>
          </div>

          <Link to={packageUrl} className="block mt-auto">
            <button className={`w-full bg-gradient-to-r ${buttonGradient} text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center space-x-2 group/btn`}>
              <span>View Details & Book</span>
              <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Facts Modal */}
      {showQuickFacts && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowQuickFacts(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span>📋</span> Quick Facts - {pkg.name}
              </h4>
              <button 
                onClick={() => setShowQuickFacts(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <ul className="space-y-4">
                {pkg.quick_facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <span className="mr-3 text-blue-500 flex-shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Trip Speciality Modal */}
      {showSpeciality && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowSpeciality(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-orange-50 to-white">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span>🌟</span> Trip Speciality
              </h4>
              <button 
                onClick={() => setShowSpeciality(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <p className="text-slate-700 leading-relaxed text-lg">{pkg.trip_speciality}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageCard;
