import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { Users, Award, Globe, Heart, MapPin, Clock, Compass } from 'lucide-react';

// Custom IntersectionObserver based animation component
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', duration = 0.8 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // triggers slightly before coming fully into viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return '';
    }
  };

  return (
    <div
      ref={ref}
      className="transition-all ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getDirectionClass(),
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <div className="pt-16">
        {/* Immersive Hero Section */}
        <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=85"
              alt="Misty tea gardens of Munnar"
              className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/40 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <FadeIn direction="up" delay={0.1} duration={0.8}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                <Compass className="h-4 w-4 animate-spin-slow" />
                Our Story & Vision
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3} duration={1.0}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight">
                Every Journey Tells a Story. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Here is Ours.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.5} duration={1.0}>
              <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                We believe travel isn't just about checking off destinations—it's about the stories we write, the cultures we touch, and the moments that change us forever.
              </p>
            </FadeIn>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
        </section>

        {/* Section divider with narrative quote */}
        <section className="py-16 bg-slate-50 text-center max-w-4xl mx-auto px-4">
          <FadeIn direction="up" delay={0.1}>
            <div className="w-12 h-1 bg-orange-500 mx-auto mb-6 rounded" />
            <p className="text-xl md:text-3xl text-slate-500 italic font-display leading-relaxed">
              "To travel is to discover that everyone is wrong about other countries."
            </p>
            <p className="text-sm uppercase tracking-widest text-slate-400 mt-3 font-semibold">— Aldous Huxley</p>
          </FadeIn>
        </section>

        {/* Storytelling Chapter 1: The Spark */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <FadeIn direction="left" delay={0.1}>
                  <span className="text-xs md:text-sm font-bold tracking-widest text-orange-500 uppercase block mb-1">
                    Chapter I / The Spark
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                    Born on the Winding Trails of South India
                  </h2>
                  <div className="h-1 w-20 bg-orange-500 rounded my-4" />
                </FadeIn>
                
                <FadeIn direction="left" delay={0.3}>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
                    Dare2Roam was not conceived in a corporate boardroom, but on the misty ridges of the Western Ghats and the quiet morning backwaters of Kerala. It began as a small group of wanderers who fell deeply in love with the kaleidoscope of cultures, flavors, and landscapes of the Indian subcontinent.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    We noticed that standard tours often skimmed the surface, leaving the true heartbeat of a destination unseen. We wanted to build something different: a bridge to genuine discovery, where itineraries aren't just lists of monuments, but carefully choreographed stories.
                  </p>
                </FadeIn>
                
                <FadeIn direction="up" delay={0.5}>
                  <div className="pt-4 flex items-center gap-8">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <span className="block text-4xl font-extrabold text-slate-900">3+</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years of Excellence</span>
                    </div>
                    <div className="border-l-4 border-blue-900 pl-4">
                      <span className="block text-4xl font-extrabold text-slate-900">10k+</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Happy Adventurers</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-5 relative">
                <FadeIn direction="right" delay={0.3}>
                  <div className="absolute -inset-4 bg-orange-100 rounded-3xl -rotate-3 scale-95" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-rotate-1">
                    <img 
                      src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85"
                      alt="Serene Kerala Houseboat representing the spark of travel"
                      className="w-full h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <p className="text-sm font-semibold tracking-wide uppercase text-orange-400 mb-1">Where it all started</p>
                      <p className="text-xs text-slate-300">Cruising Vembanad Lake, dreaming of Dare2Roam.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Chapter 2: The Journey */}
        <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 lg:order-2 space-y-6">
                <FadeIn direction="right" delay={0.1}>
                  <span className="text-xs md:text-sm font-bold tracking-widest text-orange-500 uppercase block mb-1">
                    Chapter II / The Journey
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                    Mapping Trails, Forging Connections
                  </h2>
                  <div className="h-1 w-20 bg-orange-500 rounded my-4" />
                </FadeIn>
                
                <FadeIn direction="right" delay={0.3}>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
                    From custom family retreats to thrilling high-altitude treks, we spent years exploring, researching, and selecting every local partner. We handpicked home stays where families invite you to share meals, found hidden forest tracks known only to tribal guides, and tested every boat house and coach to ensure safety and comfort.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Today, Dare2Roam spans from the heritage circuits of Tamil Nadu and Rajasthan to the modern shores of Goa and curated international getaways. Yet, our promise remains unchanged: to bring you closer to the authentic essence of every terrain.
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 lg:order-1 relative">
                <FadeIn direction="left" delay={0.3}>
                  <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-2 scale-95" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:rotate-1">
                    <img 
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                      alt="Mountaineers trekking at sunset representing our expansion and journey"
                      className="w-full h-[400px] md:h-[480px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <p className="text-sm font-semibold tracking-wide uppercase text-orange-400 mb-1">Expanding Horizons</p>
                      <p className="text-xs text-slate-300">Conquering heights, defining paths, and building lasting client memories.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Anchors of Our Journey (Core Values) */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <FadeIn direction="up" delay={0.1}>
                <span className="text-xs md:text-sm font-bold tracking-widest text-orange-500 uppercase block mb-3">
                  Our Anchors
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                  The Values That Guide Our Ship
                </h2>
                <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 mb-6 rounded" />
                <p className="text-lg text-slate-500 max-w-3xl mx-auto font-light">
                  We design with heart, execute with precision, and support with unyielding devotion. Here is what we stand for on every mile.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                        alt="Expert Explorers" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        01
                      </div>
                    </div>
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Expert Explorers</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      Our travel planners are passionate explorers who have walked the trails, tasted the local food, and vetted the stays personally.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Value 2 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
                        alt="Uncompromising Quality" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        02
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <Award className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Uncompromising Quality</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      From carefully selected hotels to clean, modern transport and premium itineraries, comfort is woven into every segment.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Value 3 */}
              <FadeIn direction="up" delay={0.3}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" 
                        alt="Authentic Connections" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        03
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <Globe className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Authentic Connections</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      We aim to connect you directly to local life, allowing you to learn from artisans, farmers, guides, and everyday hosts.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Value 4 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" 
                        alt="Tailored Adventures" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        04
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <Heart className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Tailored Adventures</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      No rigid templates. We adapt itineraries to your pace, group size, and desires so that the vacation is completely yours.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Value 5 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80" 
                        alt="Local Preservation" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        05
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">Local Preservation</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      We support sustainable travel initiatives, ensuring that the ecosystems and cultures we visit are preserved and respected.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Value 6 */}
              <FadeIn direction="up" delay={0.3}>
                <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="relative">
                    <div className="h-56 sm:h-64 overflow-hidden bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                        alt="24/7 Travel Guardian" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest text-slate-800 shadow-sm">
                        06
                      </div>
                    </div>
                    <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 group-hover:-translate-y-1 transition-transform duration-300 z-10">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="p-8 pt-10 flex-1 flex flex-col bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">24/7 Travel Guardian</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm">
                      Wander with confidence. Our dedicated team is monitoring your journey round-the-clock, ready to assist whenever you call.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Dynamic Mission & Vision Statement */}
        <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
          {/* Subtle glowing mesh blobs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Immersive visual card */}
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] group">
                  <img 
                    src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1000&q=85" 
                    alt="Wanderer looking out over mountain ranges" 
                    className="w-full h-full object-cover brightness-75 filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-orange-400 font-bold uppercase tracking-wider text-xs mb-2">Our Ultimate Goal</p>
                    <p className="text-2xl font-display font-semibold leading-tight text-white">To spark curiosity and inspire discovery in every traveler we serve.</p>
                  </div>
                </div>
              </FadeIn>

              {/* Text content split into Mission & Vision */}
              <div className="space-y-12">
                <FadeIn direction="right" delay={0.2}>
                  <div className="space-y-4">
                    <span className="text-orange-400 text-xs md:text-sm font-bold uppercase tracking-widest block">The Compass</span>
                    <h3 className="text-3xl font-display font-extrabold text-white">Our Mission</h3>
                    <div className="h-0.5 w-16 bg-orange-500 rounded" />
                    <p className="text-slate-300 font-light leading-relaxed text-base">
                      To make exploration accessible, inspiring, and deeply personal. We connect curious minds with local cultures and nature, crafting journeys that leave positive footprints and lasting stories.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={0.4}>
                  <div className="space-y-4">
                    <span className="text-orange-400 text-xs md:text-sm font-bold uppercase tracking-widest block">The Horizon</span>
                    <h3 className="text-3xl font-display font-extrabold text-white">Our Vision</h3>
                    <div className="h-0.5 w-16 bg-orange-500 rounded" />
                    <p className="text-slate-300 font-light leading-relaxed text-base">
                      To become the global touchstone for immersive and responsible travel, known for our innovative itineraries, deep local alliances, and an unwavering promise to exceed expectation.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;
