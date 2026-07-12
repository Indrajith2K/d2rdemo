import React from 'react';
import { Compass, Sparkles, Map, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatsBanner = () => {
  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Subtle light ambient glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Premium Typography & Content */}
          <div className="order-2 lg:order-1 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-white text-amber-500 text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Elevate Your Journey
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.15] tracking-tight text-blue-950">
              Curating Moments,<br />
              <span className="font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Crafting Memories.
              </span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              We transcend standard itineraries to design bespoke expeditions that speak to your soul. As premier travel architects, our obsessive attention to detail ensures that every getaway—from serene coastal retreats to majestic alpine adventures—is absolutely flawless.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                    <Award className="h-6 w-6 text-amber-500" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-950">3+</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold ml-[4rem]">Years of Excellence</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm">
                    <Map className="h-6 w-6 text-amber-500" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-950">1.2K+</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold ml-[4rem]">Bespoke Itineraries</p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/book-now"
                className="group relative inline-flex px-8 py-4 bg-white overflow-hidden rounded-full border border-amber-200 hover:border-amber-400 transition-colors shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <div className="relative flex items-center gap-3 text-amber-500 group-hover:text-white transition-colors duration-500 font-bold uppercase tracking-wider text-sm">
                  <span>Start Your Story</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Premium Imagery Grid */}
          <div className="order-1 lg:order-2 relative">
            {/* The main elegant frame */}
            <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Travel Experience" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-90" />
              
              {/* Floating elegant badge */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 backdrop-blur-xl bg-white/95 border border-white p-6 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-950 font-display text-xl sm:text-2xl font-extrabold tracking-wide">Unparalleled Luxury</p>
                    <p className="text-slate-500 text-sm mt-1.5 font-medium">Discover destinations like never before</p>
                  </div>
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-sm shrink-0 ml-4">
                    <Compass className="h-6 w-6 sm:h-7 sm:w-7 text-amber-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative structural elements */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-full h-full border-2 border-slate-200 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute top-1/2 -left-12 w-64 h-64 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
