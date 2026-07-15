import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { usePackageBySlug } from '../hooks/usePackageBySlug';
import { usePackages } from '../hooks/usePackages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, MapPin, Check, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { pkg, loading, error } = usePackageBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow pt-32 pb-20 px-4 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !pkg) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow pt-32 pb-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Package Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const formatDuration = (days: number, nights: number) => `${days} Days / ${nights} Nights`;

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.name,
    "description": pkg.seo_meta_description || pkg.description || `Book ${pkg.name} with Dare2Roam Holidays`,
    "image": pkg.image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "offers": {
      "@type": "Offer",
      "price": pkg.price_per_person,
      "priceCurrency": "INR"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": (pkg.itinerary || []).map((day: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": day.title || `Day ${day.day}`
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter">
      <Helmet>
        <title>{pkg.name} | Dare2Roam Holidays</title>
        <meta name="description" content={pkg.seo_meta_description || pkg.description || `Explore the amazing ${pkg.name} tour package with Dare2Roam Holidays.`} />
        {pkg.seo_keywords && pkg.seo_keywords.length > 0 && (
          <meta name="keywords" content={pkg.seo_keywords.join(', ')} />
        )}
        <link rel="canonical" href={`https://dare2roamholidays.com/packages/${pkg.slug}`} />
        <meta property="og:title" content={`${pkg.name} | Dare2Roam Holidays`} />
        <meta property="og:description" content={pkg.seo_meta_description || pkg.description || ''} />
        <meta property="og:image" content={pkg.image_url || ''} />
        <meta property="og:url" content={`https://dare2roamholidays.com/packages/${pkg.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-24 lg:pt-32 h-[60vh] min-h-[500px] flex-shrink-0">
        <div className="absolute inset-0">
          <img
            src={pkg.image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-semibold mb-6 transition-colors group bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-blue-600/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center">
                <MapPin className="h-4 w-4 mr-1.5" />
                {pkg.location}
              </span>
              <span className="bg-slate-900/80 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center border border-white/10">
                <Clock className="h-4 w-4 mr-1.5" />
                {formatDuration(pkg.duration_days, pkg.duration_nights)}
              </span>
              {pkg.rating && (
                <span className="bg-[#c8991f]/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center">
                  ★ {pkg.rating} Rating
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl font-playfair">
              {pkg.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 flex-grow bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Facts */}
              {pkg.quick_facts && pkg.quick_facts.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 font-playfair flex items-center">
                    <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">📋</span>
                    Quick Facts
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.quick_facts.map((fact, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Top Attractions */}
              {pkg.top_attractions && pkg.top_attractions.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 font-playfair flex items-center">
                    <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">📸</span>
                    Top Attractions
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {pkg.top_attractions.map((attraction, index) => (
                      <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition-colors">
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Itinerary */}
              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 font-playfair flex items-center">
                    <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">🗺️</span>
                    Day-wise Itinerary
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {pkg.itinerary.map((dayData: any, index: number) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 py-2">
                        <AccordionTrigger className="hover:no-underline px-2 hover:bg-slate-50 rounded-lg transition-all">
                          <div className="flex items-center text-left">
                            <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                              Day {dayData.day || index + 1}
                            </span>
                            <span className="text-lg font-semibold text-slate-800">{dayData.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pt-4 pb-6">
                          <ul className="space-y-3 pl-4 border-l-2 border-slate-100 ml-5">
                            {(dayData.activities || []).map((activity: string, actIndex: number) => (
                              <li key={actIndex} className="relative pl-6 text-slate-600 leading-relaxed">
                                <span className="absolute left-[-5px] top-2.5 w-2 h-2 rounded-full bg-blue-500"></span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* Trip Speciality */}
              {/* Description */}
              {pkg.description && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 font-playfair">About this Tour</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{pkg.description}</p>
                </div>
              )}

            </div>

            {/* Right Sticky Column (Pricing & CTA) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Starting from</div>
                  <div className="flex items-end gap-2 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl lg:text-5xl font-black text-blue-600 font-playfair">{formatPrice(pkg.price_per_person)}</span>
                    <span className="text-slate-500 font-medium pb-1">/ person</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-medium flex items-center gap-2"><Clock className="h-4 w-4 text-slate-400" /> Duration</span>
                      <span className="font-bold">{formatDuration(pkg.duration_days, pkg.duration_nights)}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-medium flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400" /> Location</span>
                      <span className="font-bold">{pkg.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href="https://whatsform.com/4rhIjb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Book via WhatsApp
                    </a>
                    
                    <a 
                      href="tel:8300082588" 
                      className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 hover:bg-slate-200 py-4 px-6 rounded-2xl font-bold text-lg transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      Call to Book
                    </a>
                  </div>
                  
                  <p className="text-center text-xs text-slate-400 mt-6 font-medium">No hidden fees • Instant confirmation</p>
                </div>

                {pkg.trip_speciality && (
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 font-playfair flex items-center gap-2">
                      <span className="text-yellow-500 text-xl">🌟</span> Trip Speciality
                    </h3>
                    <div className="space-y-2.5">
                      {pkg.trip_speciality.split('|').map((item, index) => {
                        const trimmed = item.trim();
                        if (!trimmed) return null;
                        return (
                          <div key={index} className="flex items-start gap-3 bg-slate-50/80 p-3 rounded-xl border border-slate-100/50 hover:bg-slate-100/50 transition-colors">
                            <span className="text-slate-700 text-sm font-medium leading-relaxed">{trimmed}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {pkg.state_or_country && (
        <SuggestedPackages stateOrCountry={pkg.state_or_country} currentPackageId={pkg.id} />
      )}

      <Footer />
    </div>
  );
};

const SuggestedPackages = ({ stateOrCountry, currentPackageId }: { stateOrCountry: string, currentPackageId: string }) => {
  const { packages, loading } = usePackages({ stateOrCountry });
  const similar = packages.filter(p => p.id !== currentPackageId);

  if (loading || similar.length === 0) return null;

  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedSimilar = chunkArray(similar, 4);

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-800 mb-8 font-playfair">
          Suggested Packages in {stateOrCountry}
        </h2>
        
        {/* Mobile View: 2x2 Grid Carousel */}
        <div className="block sm:hidden">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 0,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 pb-4">
              {chunkedSimilar.map((chunk, chunkIdx) => (
                <CarouselItem key={chunkIdx} className="pl-3 basis-full">
                  <div className="grid grid-cols-2 gap-3">
                    {chunk.map((p) => (
                      <div key={p.id} className="flex flex-col bg-white rounded-2xl border border-slate-105 shadow-[0_4px_15px_rgb(0,0,0,0.02)] overflow-hidden">
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                          <img
                            src={p.image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 bg-slate-900/60 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-white/10 shadow-sm">
                            <MapPin className="h-2.5 w-2.5 text-yellow-400" />
                            {p.location}
                          </span>
                        </div>
                        <div className="p-3 flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="font-sans text-xs font-bold text-slate-800 line-clamp-2 min-h-[2rem] mb-2">
                              {p.name}
                            </h4>
                          </div>
                          <div className="border-t border-slate-50 pt-2 mt-auto">
                            <div className="flex flex-col mb-3">
                              <span className="text-[8px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                                Starting from
                              </span>
                              <span className="text-xs font-black text-slate-900 leading-none">
                                ₹{p.price_per_person.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <Link to={`/packages/${p.slug || p.id}`} className="block w-full">
                              <button
                                type="button"
                                className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white py-1.5 rounded-xl font-bold text-[10px] flex items-center justify-center transition-colors shadow-sm"
                              >
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop View: 1-item per slide Carousel */}
        <div className="hidden sm:block">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                startDelay: 0,
              }),
            ]}
            className="w-full"
          >
            <div className="flex justify-end gap-2.5 z-10 -mt-16 mb-6 pr-4 sm:pr-0">
              <CarouselPrevious className="relative left-0 right-0 top-0 bottom-0 translate-y-0 h-10 w-10 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-all" />
              <CarouselNext className="relative left-0 right-0 top-0 bottom-0 translate-y-0 h-10 w-10 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm transition-all" />
            </div>
            <CarouselContent className="-ml-4 pb-4">
              {similar.map((p) => (
                <CarouselItem key={p.id} className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.06)] border border-slate-100 transition-all group flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0 bg-slate-900">
                      <img 
                        src={p.image_url || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"} 
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm flex items-center border border-white/10">
                        <MapPin className="h-3 w-3 mr-1 text-yellow-400" />
                        {p.location}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-sans text-lg font-bold text-slate-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors">{p.name}</h3>
                      <div className="mt-auto border-t border-slate-50 pt-4">
                        <div className="flex flex-col mb-5">
                          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">
                            Starting from
                          </span>
                          <span className="text-xl font-black text-slate-900 leading-none">
                            ₹{p.price_per_person.toLocaleString('en-IN')}
                            <span className="text-[10px] text-slate-400 font-normal ml-1">/ person</span>
                          </span>
                        </div>
                        <Link 
                          to={`/packages/${p.slug || p.id}`}
                          className="inline-flex w-full items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-4 rounded-xl transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PackageDetail;
