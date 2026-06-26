import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

interface PopularDest {
  id: string;
  name: string;
  image: string;
  route: string;
  isTall?: boolean;
}

const popularDests: PopularDest[] = [
  {
    id: 'singapore',
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    route: '/destinations/singapore',
    isTall: true
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f9/f2/d8/malaysia.jpg',
    route: '/destinations/malaysia'
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
            Settings For Your Next Chapter
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

                <div className="p-8 relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-sans text-white leading-tight drop-shadow-sm">
                    {tallCard.name}
                  </h3>
                </div>
              </Link>
            )}
          </div>

          {/* Right Column - Malaysia & Thailand Wide Cards (Span 7) */}
          <div className="md:col-span-7 flex flex-col gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

                <div className="p-8 relative z-10">
                  <h3 className="text-3xl font-extrabold font-sans text-white leading-tight drop-shadow-sm">
                    {dest.name}
                  </h3>
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
