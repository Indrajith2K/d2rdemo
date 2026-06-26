import React, { useState, useEffect } from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';

interface Review {
  id: string | number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Sowmya Subramanian",
    role: "CHENNAI CORPORATE TRAVELER",
    rating: 5,
    text: "Highly recommend their Singapore paradise package. The D2R team handled our passport verification and visa documentation instantly. Absolute stressfree travel planner!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Karthik & Deepika Rajan",
    role: "MADURAI COUPLE",
    rating: 5,
    text: "Our Kerala honeymoon houseboat stay in Alleppey backwaters was absolutely magical! Custom candlelight dinner, private resort, flower decor - D2R made our trip unforgettable.",
    avatar: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Karthikeyan Ramasamy",
    role: "COIMBATORE EXPLORER",
    rating: 5,
    text: "Munnar to Vagamon family hills package was perfectly organized by Dare2Roam! Driver was very professional and hotels were superb. Ops team assisted 24/7. High quality service!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Anitha Murugesan",
    role: "SALEM FAMILY EXPLORER",
    rating: 5,
    text: "Thailand family tour was romba nalla irundhuchu. Pattaya beaches and Bangkok shopping were extremely good. Next year Kashmir snow package kandippa bookings pannuvom. Thanks D2R!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Arun Selvam",
    role: "ERODE ADVENTURE SEEKER",
    rating: 5,
    text: "Andaman islands trip was excellent. Scuba diving, island hopping, luxury beach resort bookings - everything was top class. Best rates provided by operations team.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    name: "Meenakshi Sundaram",
    role: "TRICHY COUPLES GETAWAY",
    rating: 5,
    text: "Bali trip was like a dream come true! Our private pool villa in Ubud was beautiful. Sunrise trek and Balinese spa were perfectly scheduled. D2R ops desk support was top-tier.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    id: 7,
    name: "Praveen Kumar & Priya",
    role: "CHENNAI NEWLYWEDS",
    rating: 4,
    text: "Ooty and Kodaikanal scenic package was very budget friendly with premium luxury stays. Cab driver was very polite and guided us nicely. Excellent travel consultants!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: 8,
    name: "Lakshmi Narayanan",
    role: "TIRUNELVELI FAMILY GROUP",
    rating: 5,
    text: "Dubai family vacation was beyond expectations. Desert safari, Burj Khalifa levels, and Global Village - everything was well organized. Very fast visa processing done in 3 days.",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJKzhygqQzqTsRjO4w1pXkGyo";

  useEffect(() => {
    fetch('https://data.accentapi.com/feed/25689581.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.reviews && data.reviews.length > 0) {
          const liveReviews = data.reviews.map((r: any) => {
            const dateObj = new Date(r.review_date_time);
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            
            let reviewText = r.review_text;
            if (!reviewText || reviewText.trim() === '') {
              reviewText = `Rated ${r.rating} stars on Google.`;
            }
            
            return {
              id: r.id,
              name: r.reviewer_name,
              role: `GOOGLE REVIEW • ${dateStr.toUpperCase()}`,
              rating: r.rating,
              text: reviewText,
              avatar: r.reviewer_photo_link || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            };
          });

          if (liveReviews.length > 0) {
            setReviews(prevReviews => {
              const liveNames = new Set(liveReviews.map((lr: any) => lr.name.toLowerCase()));
              const filteredDefaults = defaultReviews.filter(dr => !liveNames.has(dr.name.toLowerCase()));
              return [...liveReviews, ...filteredDefaults];
            });
          }
        }
      })
      .catch(err => console.error("Error fetching live reviews:", err));
  }, []);

  return (
    <section className="py-24 bg-[#f8f9ff] text-slate-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column (Span 5) - Title and Moss photo card */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full text-rose-500 text-xs font-black uppercase tracking-widest mb-4">
                📖 Traveler Diaries
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Stories from Our
                <br />
                <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Travelers</span>
              </h2>
              <p className="text-slate-500 text-base mt-4 max-w-md font-light">
                Don't just take our word for it. Read the real, unscripted tales of wonder from travelers who trusted us to author their dream escapes.
              </p>
            </div>
            
            {/* Visual moss card */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl flex-grow group">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80" 
                alt="Happy Travelers in Italy" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
              
              {/* Huge '1K+' label in bottom-right */}
              <div className="absolute bottom-6 right-6 text-white text-right">
                <span className="block text-5xl font-black tracking-tighter leading-none font-sans drop-shadow-lg">
                  1,000+
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 block mt-2 drop-shadow-md font-sans">
                  5-Star Reviews
                </span>
              </div>

              {/* Floating Google badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase">Google Rating</span>
                  <span className="block text-sm font-black text-slate-900">4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 7) - SCROLLING TESTIMONIALS */}
          <div className="lg:col-span-7 flex flex-col relative h-[620px] overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            
            {/* Top Fade Mask */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none z-10" />

            {/* Infinite Marquee Wrapper */}
            <div className="absolute inset-0 flex justify-center w-full px-2 md:px-6">
              <div className="flex flex-col gap-6 animate-slide-down-continuous hover:[animation-play-state:paused] py-16 w-full">
                {/* First Loop */}
                {reviews.map((rev) => (
                  <TestimonialCard key={`loop1-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                ))}
                {/* Second Loop for seamless scrolling */}
                {reviews.map((rev) => (
                  <TestimonialCard key={`loop2-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                ))}
              </div>
            </div>

            {/* Bottom Fade-Out Gradient Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />

          </div>

        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ rev, googleReviewUrl }: { rev: Review; googleReviewUrl: string }) => {
  const starsArray = [...Array(5)];
  return (
    <div className="relative p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between w-full bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white group">
      
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-slate-200 group-hover:text-amber-100 transition-colors">
        <Quote className="h-12 w-12 rotate-180" />
      </div>

      <div>
        {/* Rating Stars and Google Logo */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          {/* Stars */}
          <div className="flex gap-1">
            {starsArray.map((_, idx) => (
              <Star 
                key={idx} 
                className={`h-4 w-4 ${
                  idx < rev.rating 
                    ? 'text-amber-400 fill-amber-400' 
                    : 'text-slate-200'
                }`} 
              />
            ))}
          </div>

          {/* Sharp Vector Google Logo */}
          <div className="flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
            <svg className="h-[14px] w-[14px] mr-1.5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.58c-.28 1.48-1.12 2.74-2.38 3.58v2.98h3.84c2.25-2.07 3.7-5.12 3.7-8.41z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.84-2.98c-1.08.72-2.45 1.16-4.09 1.16-3.15 0-5.81-2.13-6.76-5.01H1.4v3.08C3.37 20.3 7.38 24 12 24z"/>
              <path fill="#FBBC05" d="M5.24 14.26c-.25-.72-.39-1.5-.39-2.3s.14-1.58.39-2.3V6.58H1.4C.51 8.2.01 10.04.01 12s.5 3.8 1.39 5.42l3.84-3.16z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.93 1.19 15.22 0 12 0 7.38 0 3.37 3.7 1.4 5.62l3.84 3.08c.95-2.88 3.61-5.01 6.76-5.01z"/>
            </svg>
            <span className="text-[10px] font-black text-slate-500 tracking-wider">
              GOOGLE
            </span>
          </div>
        </div>

        {/* Review text */}
        <p className="font-sans text-[15px] sm:text-base leading-relaxed text-slate-600 mb-8 italic relative z-10">
          "{rev.text}"
        </p>
      </div>

      {/* Profile and Google Review Arrow Trigger */}
      <div className="flex justify-between items-center border-t border-slate-200 pt-5 relative z-10">
        <div className="flex items-center gap-4">
          <img 
            src={rev.avatar} 
            alt={rev.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="text-left">
            <span className="block text-[15px] font-black text-slate-900 leading-tight">{rev.name}</span>
            <span className="block text-[10px] font-bold tracking-widest text-slate-400 mt-1">{rev.role}</span>
          </div>
        </div>

        {/* Floating circular up-right arrow button */}
        <a 
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition-all active:scale-95 shadow-sm"
          title="Write Google Maps Review"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  );
};

export default Testimonials;
