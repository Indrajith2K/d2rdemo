import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, MapPin, Calendar, FileText, Bus, Train, X } from 'lucide-react';

interface VoyageService {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  description: string;
  route: string;
}

const services: VoyageService[] = [
  {
    id: 'domestic',
    title: "Domestic",
    icon: MapPin,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvebLrT7AJaInjRxXu3NzAIG1crY1jX60zueCrbCKYzltVnJlIlPpWf8y4kqkvsXoLklsrynYOdCc67VBJC0YoDyqnZCrradgVrHF8J9vYqTLjrD6E7mMD83l89-KDiD674q3AygyvB7UfOrQqfI-qnqqrQHRGLoiOuhCwG5j2LpGpM6n3IC2ZUSj1_JDzGzDzDQtqK93cUUyd6GCuy49vb_u_U71x1zPw1-gKmqittcvbb0eRLnqzG6YVPzu0uycb7op09q5yohI",
    description: "Uncover the timeless tales and hidden gems of your homeland through intimately crafted boutique itineraries.",
    route: '/domestic-tours'
  },
  {
    id: 'international',
    title: "International",
    icon: Plane,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR1She6zCHSfEwO-cLXqv-KlJD2qVS4hgCeresI-pzuf1CfkUCWN0zHYLbFexb1sM0DFJi15qHZFAkDHOEHygG4PxbY0-pJht6nuOczb8Gvs1vCqh7UnJt25Y1m8vWRmzjYC4Wn_XYcRTGPhCV0V0DkBIE2pBV8aJhYuh_TIvc135Ky2SBDZvyUBnKP5pYNkrC98pWZ-IrmUxUfNpye2jf-C1P9ePEwi027xYhTZAI9gDo_9Q8at41UYeVqu_uLqljeQNGCScrz18",
    description: "Let the world unfold before you through bespoke global expeditions designed to become your most treasured memories.",
    route: '/international-tours'
  },
  {
    id: 'visa',
    title: "Visa / Passport",
    icon: FileText,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk7DCrG89dg3O46MTExErzm5rX0XxBUwJfTamJ_LY2qGFxWByKegcKASR0BP_kGF6aAzmC0IyP_ebFd4l13npdCTT1S021fd_3W5htFAzZnRz08DUZ5cGAkcOUc33Ye8XJZM4feI2FxMlvrQK5npMhZhU6s63WMW_HUQCGKF8NUMeNEFMnYlzNpG4HJ81cIQOQiG0xH_R8dIOoMoGjQ5j_eezMpdReVCrLYFbiTjAXg6AUImoR9mZEpbpTp_lxZEeZi8E8ovpH3RI",
    description: "We untangle the complexities of documentation, giving you the freedom to dream while we handle the details.",
    route: '/visa-assistance'
  },
  {
    id: 'booking',
    title: "Booking",
    icon: Calendar,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhat5t6T4SS1pguuaDVUw59qizlZbWPYhg-NE2ACDuHGVWTR2ncLtAOy0VkPK3STO6VeLL7eyIn1KQ2ktcsFQEJCUi3MscUn38rJ46v7xTcdEn8or-YJKcRU0F2SUkLn9_FRbnK1eU84KtZ7wRhgvkrbe2ZMKBRzqzD968b43ohfPLcaAX0cXIjdRS9vWRnqoeaIoskdpsd35v6hMUx8DwQ1v2eEKjqFvX0VAWHrOycUE9omAxQuat-WNnJME2nCDbeMFhb38aMBQ",
    description: "Unlock the doors to secluded luxury, handpicked havens, and the finest hospitality across the globe.",
    route: '/book-now'
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [showVisaOptions, setShowVisaOptions] = useState(false);
  const domestic = services.find(s => s.id === 'domestic')!;
  const international = services.find(s => s.id === 'international')!;
  const visa = services.find(s => s.id === 'visa')!;
  const booking = services.find(s => s.id === 'booking')!;

  return (
    <section className="py-16 md:py-20 bg-white w-full border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header row: left title + right CTA ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            {/* Eyebrow label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-amber-500">
                What We Offer
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight font-bold">
              The Chapters of<br className="hidden sm:block" /> Your Journey
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 shrink-0 pb-1">
            <p className="font-sans text-gray-400 text-sm md:text-base font-light max-w-xs md:text-right">
              Crafted experiences designed to become your most cherished memories.
            </p>
            <Link
              to="/explore-packages"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#16284b] border-b border-[#16284b]/40 pb-0.5 hover:border-amber-500 hover:text-amber-500 transition-all duration-200 mt-1"
            >
              View all packages
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ─── MOBILE: Accordion (hidden on md+) ─── */}
        <div className="flex flex-col md:hidden h-[500px] sm:h-[600px] gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex-1 hover:flex-[6] overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 ease-in-out cursor-pointer shadow-md"
            >
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/80 via-transparent to-transparent transition-all duration-500 group-hover:from-[#0a1428]/95 group-hover:via-[#0a1428]/60 group-hover:to-transparent" />
              <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 md:hidden transition-opacity duration-500 z-0 pointer-events-none" />
              {/* Icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 group-hover:top-4 group-hover:-translate-y-0 w-10 h-10 rounded-full bg-white flex items-center justify-center z-10 transition-all duration-500 shadow-lg">
                <service.icon className="h-5 w-5 text-amber-500" />
              </div>
              {/* Collapsed label */}
              <div className="absolute inset-y-0 left-16 right-4 flex items-center opacity-100 group-hover:opacity-0 md:hidden transition-opacity duration-500 pointer-events-none z-10">
                <span className="font-display text-xl font-bold text-white tracking-wide drop-shadow-md pl-2">{service.title}</span>
              </div>
              {/* Expanded content */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex flex-col justify-end pointer-events-none group-hover:pointer-events-auto">
                <h3 className="font-display text-lg font-bold mb-0 group-hover:mb-2 transition-all duration-500 drop-shadow-md opacity-0 group-hover:opacity-100">{service.title}</h3>
                <div className="max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="font-sans text-white/90 text-xs leading-snug mb-4">{service.description}</p>
                  
                  {service.id === 'booking' ? (
                    <div className="flex gap-2 w-full mt-2 pointer-events-auto">
                      <Link to="/flight-booking" className="flex-1 bg-white text-[#16284b] font-bold py-2 rounded-md text-[11px] text-center shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                        <Plane className="h-3 w-3" /> Flight
                      </Link>
                      <Link to="/bus-booking" className="flex-1 bg-white text-[#16284b] font-bold py-2 rounded-md text-[11px] text-center shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                        <Bus className="h-3 w-3" /> Bus
                      </Link>
                      <Link to="/train-booking" className="flex-1 bg-white text-[#16284b] font-bold py-2 rounded-md text-[11px] text-center shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                        <Train className="h-3 w-3" /> Train
                      </Link>
                    </div>
                  ) : service.id === 'visa' ? (
                    <div className="flex gap-2 w-full mt-2 pointer-events-auto">
                      <Link to="/visa-assistance" className="flex-1 bg-white text-[#16284b] font-bold py-2 rounded-md text-[11px] text-center shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                        <FileText className="h-3 w-3" /> Visa
                      </Link>
                      <Link to="/passport-assistance" className="flex-1 bg-white text-[#16284b] font-bold py-2 rounded-md text-[11px] text-center shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
                        <FileText className="h-3 w-3" /> Passport
                      </Link>
                    </div>
                  ) : (
                    <Link to={service.route} className="inline-block bg-white text-[#16284b] font-semibold px-4 py-2 rounded-md text-xs hover:-translate-y-0.5 transition-transform shadow-md pointer-events-auto">
                      Explore Tours &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── DESKTOP: Premium asymmetric grid (hidden on mobile) ─── */}
        <div className="hidden md:grid grid-cols-12 gap-5 w-full h-[480px]">

          {/* LEFT: Domestic — tall full-height card */}
          <div className="col-span-6 relative rounded-[32px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
            <Link to={domestic.route} className="absolute inset-0 flex flex-col justify-end">
              <img src={domestic.image} alt={domestic.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="relative z-10 p-6">
                <h3 className="font-display text-white text-2xl font-bold drop-shadow">
                  {domestic.title}
                </h3>
              </div>
            </Link>
          </div>

          {/* RIGHT: stacked column */}
          <div className="col-span-6 flex flex-col gap-6">

            {/* International — wide top card */}
            <div className="relative flex-1 rounded-[32px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
              <Link to={international.route} className="absolute inset-0 flex flex-col justify-end">
                <img src={international.image} alt={international.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="relative z-10 p-5">
                  <h3 className="font-display text-white text-xl font-bold drop-shadow">
                    {international.title}
                  </h3>
                </div>
              </Link>
            </div>

            {/* Visa + Booking — side-by-side bottom row */}
            <div className="flex gap-6 flex-1">
              {[visa, booking].map((service) => (
                <div key={service.id} className="relative flex-1 rounded-[32px] overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
                  {service.id === 'booking' || service.id === 'visa' ? (
                    <div 
                      className="absolute inset-0 flex flex-col justify-end"
                      onClick={(e) => {
                        if (service.id === 'booking' && !showBookingOptions) {
                          e.preventDefault();
                          setShowBookingOptions(true);
                        } else if (service.id === 'visa' && !showVisaOptions) {
                          e.preventDefault();
                          setShowVisaOptions(true);
                        }
                      }}
                    >
                      <img src={service.image} alt={service.title} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${(service.id === 'booking' && showBookingOptions) || (service.id === 'visa' && showVisaOptions) ? 'scale-110 blur-sm' : 'group-hover:scale-105'}`} />
                      <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${(service.id === 'booking' && showBookingOptions) || (service.id === 'visa' && showVisaOptions) ? 'from-black/90 via-black/80 to-black/60' : 'from-black/80 via-black/10 to-transparent'}`} />
                      
                      {((service.id === 'booking' && !showBookingOptions) || (service.id === 'visa' && !showVisaOptions)) ? (
                        <div className="relative z-10 p-5 pointer-events-none">
                          <h3 className="font-display text-white text-lg font-bold drop-shadow">
                            {service.title}
                          </h3>
                        </div>
                      ) : (
                        <div className="relative z-20 p-4 h-full flex flex-col items-center justify-center gap-2">
                          <button 
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              if (service.id === 'booking') setShowBookingOptions(false);
                              else setShowVisaOptions(false);
                            }}
                            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-30"
                          >
                            <X className="h-5 w-5" />
                          </button>
                          <h4 className="font-display text-white text-sm font-bold mb-1">Select Option</h4>
                          {service.id === 'booking' ? (
                            <>
                              <Link to="/flight-booking" onClick={(e) => e.stopPropagation()} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#16284b] py-2 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white">
                                <Plane className="h-4 w-4" /> Flight
                              </Link>
                              <Link to="/bus-booking" onClick={(e) => e.stopPropagation()} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#16284b] py-2 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white">
                                <Bus className="h-4 w-4" /> Bus
                              </Link>
                              <Link to="/train-booking" onClick={(e) => e.stopPropagation()} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#16284b] py-2 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white">
                                <Train className="h-4 w-4" /> Train
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to="/visa-assistance" onClick={(e) => e.stopPropagation()} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#16284b] py-2 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white">
                                <FileText className="h-4 w-4" /> Visa
                              </Link>
                              <Link to="/passport-assistance" onClick={(e) => e.stopPropagation()} className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#16284b] py-2 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white">
                                <FileText className="h-4 w-4" /> Passport
                              </Link>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={service.route} className="absolute inset-0 flex flex-col justify-end">
                      <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="relative z-10 p-5">
                        <h3 className="font-display text-white text-lg font-bold drop-shadow">
                          {service.title}
                        </h3>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
