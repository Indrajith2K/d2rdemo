import React from 'react';
import { Link } from 'react-router-dom';
import { usePackages, Package } from '../hooks/usePackages';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { ArrowRight, Sparkles, MapPin, Clock } from 'lucide-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const FeaturedDestinationsCarousels = () => {
  const { packages: domesticPackages, loading: domesticLoading, error: domesticError } = usePackages({
    category: 'domestic',
  });
  const { packages: internationalPackages, loading: internationalLoading, error: internationalError } = usePackages({
    category: 'international',
  });

  // Filter domestic packages to show exactly one package per unique state/place
  const domesticUnique = React.useMemo(() => {
    if (!domesticPackages) return [];
    const map = new Map<string, Package>();
    
    // Since usePackages orders by rating desc, the first one encountered will be the highest rated
    domesticPackages.forEach((pkg) => {
      const state = (pkg.state_or_country || pkg.location || '').trim().toLowerCase();
      if (state && !map.has(state)) {
        map.set(state, pkg);
      }
    });
    return Array.from(map.values());
  }, [domesticPackages]);

  // Filter international packages to show exactly one package per country
  const internationalUnique = React.useMemo(() => {
    if (!internationalPackages) return [];
    const map = new Map<string, Package>();
    
    // First one encountered will be the highest rated
    internationalPackages.forEach((pkg) => {
      const country = (pkg.state_or_country || pkg.location || '').trim().toLowerCase();
      if (country && !map.has(country)) {
        map.set(country, pkg);
      }
    });
    return Array.from(map.values());
  }, [internationalPackages]);

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="bg-slate-100 rounded-3xl h-[400px] animate-pulse flex flex-col justify-between p-6">
          <div className="w-full h-48 bg-slate-200 rounded-2xl mb-4"></div>
          <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
          <div className="h-8 bg-slate-200 rounded w-1/2 mb-6"></div>
          <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
        </div>
      ))}
    </div>
  );

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const chunkArray = (array: Package[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const renderCarouselSection = (
    title: string,
    subtitle: string,
    badgeText: string,
    items: Package[],
    accentColor: string,
    buttonGradient: string
  ) => {
    if (items.length === 0) return null;

    let displayItems = [...items];
    if (displayItems.length > 0 && displayItems.length < 10) {
      const multiplier = Math.ceil(10 / displayItems.length);
      displayItems = Array(multiplier).fill(items).flat();
    }
    
    const itemsWithKeys = displayItems.map((item, index) => ({
      ...item,
      uniqueKey: `${item.id}-${index}`
    }));

    const chunkedItems = chunkArray(itemsWithKeys, 4);

    return (
      <div className="max-w-[1400px] mx-auto">
        {/* Header Row with Title and Navigation Buttons */}
        <div className="flex items-end justify-between mb-8 px-4 sm:px-0">
          <div className="text-left">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${accentColor} bg-opacity-10 uppercase tracking-wider mb-3`}>
              <Sparkles className="h-3 w-3" />
              {badgeText}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-2 font-sans">
              {title}
            </h2>
            <p className="text-sm text-slate-500 font-light max-w-md font-sans">
              {subtitle}
            </p>
            {/* Mobile swipe helper hint */}
            {chunkedItems.length > 1 && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 tracking-wider uppercase mt-3 sm:hidden animate-pulse">
                <span>Scroll right to see more</span>
                <span className="text-xs">→</span>
              </div>
            )}
          </div>
        </div>

        {/* 1. Mobile & Tablet 2x2 Grid Carousel (visible on < sm) */}
        <div className="block sm:hidden px-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 0.25,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 0,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 pb-4">
              {chunkedItems.map((chunk, chunkIdx) => (
                <CarouselItem key={chunkIdx} className="pl-3 basis-full">
                  <div className="grid grid-cols-2 gap-3">
                    {chunk.map((pkg) => {
                      const packageUrl = `/packages/${pkg.slug || pkg.id}`;
                      const displayName = pkg.state_or_country || pkg.location;

                      return (
                        <div key={pkg.uniqueKey} className="flex flex-col bg-white rounded-2xl border border-slate-105 shadow-[0_4px_15px_rgb(0,0,0,0.02)] overflow-hidden">
                          {/* Image Block */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                            <img
                              src={pkg.image_url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
                              alt={pkg.name}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-slate-900/60 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-white/10 shadow-sm">
                              <MapPin className="h-2.5 w-2.5 text-yellow-400" />
                              {displayName}
                            </span>
                          </div>

                          {/* Details Block */}
                          <div className="p-3 flex-grow flex flex-col justify-between">
                            <div>
                              <div className="flex items-center text-slate-500 text-[9px] font-medium mb-1">
                                <Clock className="h-2.5 w-2.5 mr-1 opacity-70" />
                                {pkg.duration_days} Days / {pkg.duration_nights} Nights
                              </div>
                              <h4 className="font-sans text-xs font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] mb-2">
                                {pkg.name}
                              </h4>
                            </div>

                            <div className="border-t border-slate-50 pt-2 mt-auto">
                              <div className="flex flex-col mb-3">
                                <span className="text-[8px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                                  Starting from
                                </span>
                                <span className="text-xs font-black text-slate-900 leading-none">
                                  {formatPrice(pkg.price_per_person)}
                                </span>
                              </div>

                              <Link to={packageUrl} className="block w-full">
                                <button
                                  type="button"
                                  className={`w-full bg-gradient-to-r ${buttonGradient} text-white py-1.5 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1 shadow-sm`}
                                >
                                  <span>View Details</span>
                                  <ArrowRight className="h-3 w-3" />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* 2. Desktop & Tablet Horizontal Carousel (visible on >= sm) */}
        <div className="hidden sm:block">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 0,
              }),
            ]}
            className="w-full"
          >
            {/* Nav Arrows inside Desktop Carousel */}
            <div className="flex justify-end gap-2.5 z-10 -mt-20 mb-8 pr-4 sm:pr-0">
              <CarouselPrevious className="relative left-0 right-0 top-0 bottom-0 translate-y-0 h-10 w-10 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-all" />
              <CarouselNext className="relative left-0 right-0 top-0 bottom-0 translate-y-0 h-10 w-10 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-all" />
            </div>

            <CarouselContent className="-ml-4 pb-4">
              {itemsWithKeys.map((pkg) => {
                const packageUrl = `/packages/${pkg.slug || pkg.id}`;
                const displayName = pkg.state_or_country || pkg.location;

                return (
                  <CarouselItem key={pkg.uniqueKey} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="h-full flex flex-col bg-white rounded-[28px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.06)] transition-all duration-500 group overflow-hidden">
                      
                      {/* Image Block */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <img
                          src={pkg.image_url || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <span className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10 shadow-sm">
                          <MapPin className="h-3 w-3 text-yellow-400" />
                          {displayName}
                        </span>
                      </div>

                      {/* Details Block */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center text-slate-500 text-xs font-medium mb-2">
                            <Clock className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                            {pkg.duration_days} Days / {pkg.duration_nights} Nights
                          </div>
                          <h4 className="font-sans text-lg font-bold text-slate-800 line-clamp-2 min-h-[3.5rem] mb-4 hover:text-blue-600 transition-colors">
                            {pkg.name}
                          </h4>
                        </div>

                        <div className="border-t border-slate-50 pt-4 mt-auto">
                          <div className="flex flex-col mb-5">
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">
                              Starting from
                            </span>
                            <span className="text-xl font-black text-slate-900 leading-none">
                              {formatPrice(pkg.price_per_person)}
                              <span className="text-[10px] text-slate-400 font-normal ml-1">/ traveler</span>
                            </span>
                          </div>

                          <Link to={packageUrl} className="block w-full">
                            <button
                              type="button"
                              className={`w-full bg-gradient-to-r ${buttonGradient} text-white py-3 rounded-2xl font-bold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm hover:shadow-md group/btn`}
                            >
                              <span>View Details</span>
                              <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    );
  };

  const hasData = domesticUnique.length > 0 || internationalUnique.length > 0;
  const isLoading = domesticLoading || internationalLoading;

  if (isLoading) {
    return (
      <section className="py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="h-10 bg-slate-200 rounded w-1/3 mb-10 animate-pulse"></div>
          {renderSkeleton()}
        </div>
      </section>
    );
  }

  if (!hasData) return null;

  return (
    <section className="py-24 bg-white border-y border-slate-100/80 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Domestic Section */}
        {renderCarouselSection(
          'Explore India',
          'Handpicked destinations from all across the states of India. Exactly one top-rated package from each state.',
          'Domestic Packages',
          domesticUnique,
          'text-blue-600 bg-blue-100',
          'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
        )}

        {/* International Section */}
        {renderCarouselSection(
          'Wonders of the World',
          'Discover exotic countries and global bucket-list locations. One premium package from each country.',
          'International Packages',
          internationalUnique,
          'text-indigo-600 bg-indigo-100',
          'from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800'
        )}
      </div>
    </section>
  );
};

export default FeaturedDestinationsCarousels;
