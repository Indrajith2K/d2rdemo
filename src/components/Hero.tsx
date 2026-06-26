import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Compass, Search, Users, Star, Award, Target, CheckCircle2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    bgImage: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=80',
    badgeText: "A New Chapter Awaits",
    subText: "Your Story Begins Here",
    heading: "Every Great Journey Begins With A Story",
    description: "We don't just book trips; we craft chapters in your life's greatest adventures. From intimate escapes to grand family sagas, your next beautiful story starts now.",
    polaroids: [
      { img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=200&h=200&fit=crop', name: 'Maldives', rotate: 'rotate-6', top: 'top-4', right: 'right-10' },
      { img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=200&fit=crop', name: 'Kerala', rotate: '-rotate-12', top: 'top-28', right: 'right-36' },
      { img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=200&h=200&fit=crop', name: 'Singapore', rotate: 'rotate-12', top: 'top-48', right: 'right-8' },
    ]
  },
  {
    id: 2,
    bgImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80',
    badgeText: "Tropical Escapes",
    subText: "Unwind & Relax",
    heading: "Write Your Next Beautiful Chapter",
    description: "Discover the world with our master storytellers. We curate bespoke vacations and luxury holidays where you are the protagonist of an unforgettable escape.",
    polaroids: [
      { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=200&fit=crop', name: 'Bali', rotate: 'rotate-6', top: 'top-4', right: 'right-10' },
      { img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=200&h=200&fit=crop', name: 'Seychelles', rotate: '-rotate-12', top: 'top-28', right: 'right-36' },
      { img: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=200&h=200&fit=crop', name: 'Hawaii', rotate: 'rotate-12', top: 'top-48', right: 'right-8' },
    ]
  },
  {
    id: 3,
    bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
    badgeText: "Majestic Peaks",
    subText: "Peak Experiences",
    heading: "Curating Masterpieces of Travel",
    description: "Immerse yourself in flawlessly designed honeymoon, family, and luxury narratives. Experience premium stays and moments that linger long after the journey ends.",
    polaroids: [
      { img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=200&h=200&fit=crop', name: 'Swiss Alps', rotate: 'rotate-6', top: 'top-4', right: 'right-10' },
      { img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=200&fit=crop', name: 'Himalayas', rotate: '-rotate-12', top: 'top-28', right: 'right-36' },
      { img: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=200&h=200&fit=crop', name: 'Rockies', rotate: 'rotate-12', top: 'top-48', right: 'right-8' },
    ]
  },
  {
    id: 4,
    bgImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80',
    badgeText: "Cultural Journeys",
    subText: "Heritage & History",
    heading: "Let Us Author Your Dream Escape",
    description: "Venture into the extraordinary with expert travel composers. We blend luxury experiences and seamless itineraries into a symphony of perfect moments.",
    polaroids: [
      { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&h=200&fit=crop', name: 'Paris', rotate: 'rotate-6', top: 'top-4', right: 'right-10' },
      { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200&h=200&fit=crop', name: 'Kyoto', rotate: '-rotate-12', top: 'top-28', right: 'right-36' },
      { img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&h=200&fit=crop', name: 'Rome', rotate: 'rotate-12', top: 'top-48', right: 'right-8' },
    ]
  }
];

const Hero = () => {
  const [location, setLocation] = useState('');
  const [dest, setDest] = useState('');
  const [duration, setDuration] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi D2R Holidays, I am interested in planning an Adventure trip to *${location || 'Anywhere'}* (Destination category: *${dest || 'All'}*, Duration: *${duration || 'Any'}*). Please recommend customized tours.`;
    const whatsappUrl = `https://wa.me/918300082588?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full flex flex-col overflow-hidden bg-slate-950 pb-16 md:pb-24">

      {/* Background Images Layer (covers entire section including padding) */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={`bg-${slide.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(11, 34, 56, 0.4), rgba(11, 34, 56, 0.5)), url("${slide.bgImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Content Slides */}
      <div className="grid grid-cols-1 grid-rows-1 w-full relative z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`col-start-1 row-start-1 w-full h-full flex flex-col justify-center pt-28 pb-72 md:pb-48 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">

                {/* Left Text content */}
                <div className="lg:col-span-8 text-left text-white max-w-2xl">
                  {/* Custom Yellow Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-400 text-blue-950 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-md">
                    <Compass className="h-4.5 w-4.5 text-blue-950 animate-spin-slow" />
                    <span>{slide.badgeText}</span>
                  </div>

                  {/* Script Text */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[2px] w-8 bg-yellow-400"></div>
                    <p className="text-yellow-400 font-sans text-sm sm:text-base font-bold uppercase tracking-[0.2em] drop-shadow-md">
                      {slide.subText}
                    </p>
                  </div>

                  {/* Main Header */}
                  <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                    {slide.heading}
                  </h1>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base md:text-lg text-slate-150 font-light mb-6 max-w-xl leading-relaxed drop-shadow">
                    {slide.description}
                  </p>

                  {/* Trust Highlights */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      100% Customized Packages
                    </span>
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                      Experienced Travel Advisers
                    </span>
                  </div>

                  {/* Horizontal Stats Banner - persistent in styling but attached to slide for sliding effect */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 mb-4 max-w-2xl">
                    {[
                      { id: 1, icon: Users, value: '10000+', label: 'Happy Travelers' },
                      { id: 2, icon: Target, value: '100%', label: 'Success Rate' },
                      { id: 3, icon: Star, value: '4.9', label: 'Rating' },
                      { id: 4, icon: Award, value: '3+', label: 'Years Experience' }
                    ].map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-slate-800/40 backdrop-blur-md border border-white/10 hover:bg-slate-800/60 transition-all duration-300"
                      >
                        <stat.icon className="h-6 w-6 text-yellow-400 mb-2" strokeWidth={1.5} />
                        <h3 className="text-2xl font-display font-bold text-white mb-1 tracking-wide drop-shadow-md">
                          {stat.value}
                        </h3>
                        <p className="text-[11px] font-sans font-semibold text-slate-300 text-center uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Hanging polaroids - hidden on mobile */}
                <div className="lg:col-span-4 hidden lg:flex justify-end relative h-[400px]">
                  {slide.polaroids.map((polaroid, pIndex) => (
                    <div
                      key={pIndex}
                      className={`absolute ${polaroid.top} ${polaroid.right} bg-white p-3 rounded-xl shadow-2xl transform ${polaroid.rotate} w-32 border border-slate-150 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-${pIndex * 10}`}
                    >
                      <img src={polaroid.img} alt={polaroid.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                      <p className="text-[10px] font-bold text-slate-800 text-center font-sans">{polaroid.name}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Slider Indicators (Right side) */}
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 shadow-md ${currentSlide === index ? 'bg-yellow-400' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ============================================================================
          FLOATING WIDGET (STATIC OVERLAY)
          ============================================================================ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-64 md:-mt-24 pointer-events-auto">
        <div className="max-w-5xl ml-auto bg-white rounded-2xl p-5 shadow-[0_15px_35px_rgba(11,34,56,0.15)] border border-slate-100 flex flex-col md:flex-row items-stretch gap-4 md:gap-0">

          {/* Field 1: Location */}
          <div className="flex-1 text-left md:border-r border-slate-100 md:pr-4 md:pl-2 py-1">
            <label className="block text-[11px] font-extrabold text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-500" /> Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where to next?"
              className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          {/* Field 2: Destinations */}
          <div className="flex-1 text-left md:border-r border-slate-100 md:px-4 py-1">
            <label className="block text-[11px] font-extrabold text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Compass className="h-3.5 w-3.5 text-amber-500" /> Destinations
            </label>
            <select
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-700 focus:outline-none"
            >
              <option value="">All Destination</option>
              <option value="domestic">Domestic Packages</option>
              <option value="international">International Packages</option>
              <option value="honeymoon">Honeymoon Specials</option>
              <option value="pilgrimage">Pilgrimage / Temple Tours</option>
            </select>
          </div>

          {/* Field 3: Duration */}
          <div className="flex-1 text-left md:px-4 py-1">
            <label className="block text-[11px] font-extrabold text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-amber-500" /> Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-slate-700 focus:outline-none"
            >
              <option value="">All Duration</option>
              <option value="2-3 Days">2-3 Days</option>
              <option value="4-5 Days">4-5 Days</option>
              <option value="1 Week">1 Week</option>
              <option value="2+ Weeks">2+ Weeks</option>
            </select>
          </div>

          {/* Yellow Search Action Button */}
          <button
            onClick={handleSearch}
            type="button"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-extrabold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow"
          >
            <Search className="h-5 w-5 text-blue-950" />
            <span className="md:hidden">Search Tours</span>
          </button>

        </div>
      </div>

      {/* ============================================================================
          WHITE TORN-PAPER BRUSH SVG Dividers
          ============================================================================ */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-15 pointer-events-none overflow-hidden h-12">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-[#eef0fa] fill-current"
        >
          <path d="M0,0 C150,90 350,110 500,80 C650,50 800,10 950,50 C1100,90 1150,110 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
