import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

interface PopularDest {
  id: string;
  name: string;
  image: string;
  route: string;
  isTall?: boolean;
}

const popularDests: PopularDest[] = [
  {
    id: 'mauritius',
    name: 'Mauritius',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/71/7e/1f/drone-aerial-views-of.jpg',
    route: '/destinations/mauritius',
    isTall: true
  },
  {
    id: 'srilanka',
    name: 'Sri Lanka',
    image: 'https://wallpapercat.com/w/full/b/b/8/639861-2880x1920-desktop-hd-sri-lanka-background.jpg',
    route: '/destinations/srilanka'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    route: '/destinations/maldives'
  },
  {
    id: 'bali',
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    route: '/destinations/bali'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    route: '/destinations/thailand'
  }
];

const TrendingDestinations = () => {
  const tallCard = popularDests.find(d => d.isTall);
  const wideCards = popularDests.filter(d => !d.isTall);

  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-left max-w-5xl mx-auto mb-12">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 font-sans">
            THE CANVAS AWAITS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-950 leading-tight mb-4 font-sans">
            Visa Free Countries
          </h2>
          <p className="text-base text-slate-500 font-light font-sans max-w-2xl leading-relaxed">
            Discover handpicked destinations where ancient traditions meet modern luxury—the perfect backdrops for an unforgettable story.
          </p>
        </div>

        {/* goexplore exact Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">

          {/* Left Column - Singapore Tall Card (Span 5) */}
          <div className="md:col-span-5 flex">
            {tallCard && (
              <Link
                to={tallCard.route}
                className="group relative w-full h-full min-h-[440px] rounded-[32px] overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-end text-left"
              >
                <img
                  src={tallCard.image}
                  alt={tallCard.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                <div className="p-8 relative z-10 h-full flex flex-col justify-end group-hover:pb-12 transition-all duration-300">
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-sans text-white leading-tight drop-shadow-sm mb-0 group-hover:mb-3 transition-all duration-300">
                    {tallCard.name}
                  </h3>
                  <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 text-white font-bold text-sm">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Right Column - (Span 7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {wideCards.map((dest) => (
              <Link
                key={dest.id}
                to={dest.route}
                className="group relative h-[210px] rounded-[32px] overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-end text-left"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                <div className="p-6 relative z-10 h-full flex flex-col justify-end group-hover:pb-10 transition-all duration-300">
                  <h3 className="text-2xl font-extrabold font-sans text-white leading-tight drop-shadow-sm mb-0 group-hover:mb-3 transition-all duration-300">
                    {dest.name}
                  </h3>
                  <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 text-white font-bold text-xs">
                    Explore <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrendingDestinations;
