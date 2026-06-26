import React, { useState } from 'react';
import { Clock, Users, Star, MapPin, Heart, Compass, Sparkles } from 'lucide-react';
import { domesticPackages, internationalPackages } from '../data/packages';

interface PackageType {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewsCount?: number;
  category: string;
  discountPercentage?: string;
  locationDetails?: string;
}

const FeaturedPackages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  // List of outline icon categories (trxvl style)
  const travelCategories = [
    { id: 'all', label: 'All Packages', icon: '🌎' },
    { id: 'beaches', label: 'Beaches', icon: '🏖️' },
    { id: 'mountains', label: 'Mountains', icon: '🏔️' },
    { id: 'cities', label: 'Cities', icon: '🏙️' },
    { id: 'houseboats', label: 'Houseboats', icon: '🛶' },
    { id: 'camping', label: 'Camping', icon: '🏕️' },
    { id: 'castles', label: 'Castles', icon: '🏰' },
    { id: 'tropical', label: 'Tropical', icon: '🌴' }
  ];

  // Merge packages and generate discounts
  const allDomestic = Object.values(domesticPackages).flat().map((pkg, idx) => {
    const cleanPrice = parseInt(pkg.price.replace(/[^\d]/g, ''));
    const origPriceVal = Math.round(cleanPrice * 1.25);
    const formattedOrigPrice = `₹${origPriceVal.toLocaleString('en-IN')}`;

    // Distribute categories for filtering
    let subCat = 'mountains';
    if (pkg.name.toLowerCase().includes('varkala') || pkg.name.toLowerCase().includes('goa')) {
      subCat = 'beaches';
    } else if (pkg.name.toLowerCase().includes('alleppey')) {
      subCat = 'houseboats';
    } else if (pkg.name.toLowerCase().includes('bangalore') || pkg.name.toLowerCase().includes('mysore')) {
      subCat = 'cities';
    }

    return {
      ...pkg,
      originalPrice: formattedOrigPrice,
      reviewsCount: 120 + (idx * 15),
      discountPercentage: '20% Off',
      locationDetails: pkg.name.includes('Kerala') ? 'Kerala, India' : 'India Destination',
      subCat
    };
  });

  const allInternational = internationalPackages.map((pkg, idx) => {
    const cleanPrice = parseInt(pkg.price.replace(/[^\d]/g, ''));
    const origPriceVal = Math.round(cleanPrice * 1.25);
    const formattedOrigPrice = `₹${origPriceVal.toLocaleString('en-IN')}`;

    let subCat = 'tropical';
    if (pkg.name.toLowerCase().includes('singapore') || pkg.name.toLowerCase().includes('dubai')) {
      subCat = 'cities';
    }

    return {
      ...pkg,
      originalPrice: formattedOrigPrice,
      reviewsCount: 210 + (idx * 24),
      discountPercentage: '20% Off',
      locationDetails: pkg.name.includes('Singapore') ? 'Singapore City' : 'Exotic Destination',
      subCat
    };
  });

  const combinedPackages = [...allDomestic, ...allInternational];

  const filteredPackages = combinedPackages.filter(pkg => {
    if (activeCategory === 'all') return true;
    return pkg.subCat === activeCategory;
  }).slice(0, 4); // Display first 4 items for clean layout

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleBookNow = (pkg: any) => {
    const text = `Hi D2R Holidays, I would like to lock in the Last Minute Deal for *${pkg.name}* at the special price of *${pkg.price}* (${pkg.discountPercentage}). Please confirm availability!`;
    const whatsappUrl = `https://wa.me/918300082588?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================================================
            trxvl STYLE: TOP CATEGORIES OUTLINE BAR
            ============================================================================ */}
        <div className="max-w-5xl mx-auto mb-16 border-b border-slate-100 pb-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 font-sans text-left">
            Top categories
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {travelCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`flex flex-col items-center justify-center p-4 min-w-[100px] rounded-2xl border transition-all duration-300 ${activeCategory === cat.id
                    ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-sm scale-105'
                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800'
                  }`}
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="text-xs font-bold font-sans">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================================
            goexplore STYLE: LAST MINUTE DEALS IN UNIQUE PLACES
            ============================================================================ */}
        <div className="max-w-5xl mx-auto mb-12 text-left">
          <h2 className="text-4xl font-black text-slate-900 leading-tight mb-3 font-sans">
            Last minute deals in unique places
          </h2>
          <p className="text-base text-slate-500 font-light font-sans max-w-xl leading-relaxed">
            Plan, book, and embark on your dream adventure with our expert guidance and tailored experiences.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => {
              const isFav = favorites.includes(pkg.id);
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.04)] overflow-hidden group flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative h-44 overflow-hidden bg-slate-950">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Yellow 20% Off tag */}
                    <span className="absolute top-4 left-4 bg-yellow-400 text-blue-950 text-[9px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      {pkg.discountPercentage}
                    </span>

                    {/* Heart favorite button */}
                    <button
                      onClick={() => toggleFavorite(pkg.id)}
                      type="button"
                      className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2 text-slate-650 hover:text-rose-500 transition-colors shadow-sm"
                    >
                      <Heart className={`h-4 w-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Card Info details */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-sans text-sm font-bold text-slate-900 line-clamp-1 mb-1">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-sans font-medium mb-3 flex items-center gap-0.5">
                        <MapPin className="h-3 w-3 text-blue-600" /> {pkg.locationDetails}
                      </p>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-4 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold text-slate-700">{pkg.rating} stars</span>
                        <span className="text-[10px] text-slate-400 font-sans">({pkg.reviewsCount} Exceptional)</span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex justify-between items-end mb-4">
                        <div>
                          <span className="text-slate-400 line-through text-[11px] font-bold block leading-none mb-1">
                            {pkg.originalPrice}
                          </span>
                          <span className="text-slate-900 text-base font-extrabold flex items-center leading-none">
                            {pkg.price}
                            <span className="text-[10px] text-slate-400 font-normal ml-1">/ traveler</span>
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleBookNow(pkg)}
                        type="button"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm"
                      >
                        Book Deal
                      </button>
                    </div>

                  </div>

                </div>
              );
            })
          ) : (
            <div className="col-span-4 text-center py-12 text-slate-400 font-sans font-light border border-dashed border-slate-200 rounded-3xl">
              No last minute deals available for this category yet.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPackages;
