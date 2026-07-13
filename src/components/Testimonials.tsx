import React, { useState, useEffect } from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';

interface Review {
  id: string | number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
  initials: string;
}

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Mathi Sankar",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "This journey was one of the best experiences we've had, and the adventure was completely new and exciting for all our friends. The guide was warm, friendly, and very supportive. The trip was absolutely worth the cost. Choose Best Travellers D2R Private Limited for a fantastic travel experience.",
    avatarColor: "#4285F4",
    initials: "MS"
  },
  {
    id: 2,
    name: "Lakkiya Selvakumar",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Great experience, well planned, frendly and supportive, truly made the journey enjoy a well",
    avatarColor: "#34A853",
    initials: "LS"
  },
  {
    id: 3,
    name: "Vaishali Balaji",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Thanks to D2R Holidays for giving us a wonderful experience. Truly a great trip, we have covered so many places and activities within 3 days.",
    avatarColor: "#EA4335",
    initials: "VB"
  },
  {
    id: 4,
    name: "Danisha",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "The trip we had was so good and the guide (Bala Anna) we had was such a friendly one who matched with our vibe and had lots of fun there. Overall food, resort, adventures and travels all are worth the price!!",
    avatarColor: "#FBBC05",
    initials: "D"
  },
  {
    id: 5,
    name: "Divya Prabha B.B",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "The bus arrangements, crackers, and cake cutting were very good. The guidelines provided were also clear and helpful. The adventure park and food were nice. We also had access to the swimming pool, and there was a separate property arranged for us. Mr. Bala helped us a lot throughout the trip. Overall, it was a very good experience.",
    avatarColor: "#9C27B0",
    initials: "DP"
  },
  {
    id: 6,
    name: "S L T",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Our trip was well organised by D2R Holidays, they provided a proper itinerary and were open to changes based on our constraints. They took care of almost everything — accommodation and travel was comfortable. Food exceeded our expectations. Overall this was a really nice experience.",
    avatarColor: "#00BCD4",
    initials: "SLT"
  },
  {
    id: 7,
    name: "Mithra Kumar",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "It was really a good experience. A well planned trip with good food.",
    avatarColor: "#FF5722",
    initials: "MK"
  },
  {
    id: 8,
    name: "Indrajith K.U",
    role: "GOOGLE REVIEW",
    rating: 5,
    text: "They assisted me properly with my trip. Every thing was properly pre-planned and executed properly. Worth the wait for my trip.",
    avatarColor: "#607D8B",
    initials: "IK"
  },
  {
    id: 9,
    name: "Keerthana Chandrasekar",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "The trip service was honestly such a delightful experience! Everything felt so smooth and well-organized, from the booking process to the actual journey. They were super friendly and made sure we were comfortable at every step, which made the whole trip feel extra special. It wasn’t just about reaching the destination—it was about enjoying every little moment along the way. Definitely one of those experiences that leaves you smiling even after it’s over .",
    avatarColor: "#E91E63",
    initials: "KC"
  },
  {
    id: 10,
    name: "mohammed hathim",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "Best trip planner so far we went as a group 💥💥👹",
    avatarColor: "#3F51B5",
    initials: "MH"
  },
  {
    id: 11,
    name: "Sarika T",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had an amazing trip to Gokarna with D2R Dare2Roam Holidays. Everything was perfectly organized, and we really enjoyed the whole experience. The guide(Bala Bro) was super friendly and helpful, which made the trip even more fun. Would definitely recommend!",
    avatarColor: "#009688",
    initials: "ST"
  },
  {
    id: 12,
    name: "vajjala vishwak narayan",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "I had a really great experience in this trip. The planning was well organized, the itinerary was smooth, and everything was managed on time. The team was friendly, supportive, and made sure the trip was enjoyable and stress-free. Overall, it was a memorable journey and I would definitely recommend them to others. 😊",
    avatarColor: "#8BC34A",
    initials: "VV"
  },
  {
    id: 13,
    name: "iva Ranjani",
    role: "GOOGLE REVIEW • 2 MONTHS AGO",
    rating: 5,
    text: "Had a very good trip with friends. They organized our trip very good and we made a lot of good memories.",
    avatarColor: "#FFC107",
    initials: "IR"
  },
  {
    id: 14,
    name: "Iyyappan lovely",
    role: "GOOGLE REVIEW • 7 MONTHS AGO",
    rating: 5,
    text: "The trip experience was amazing. well co-ordination Mr.Bala. All arrangements like hotel and car and itinerary was superb. My family was so happy. Jeep Safari in Gir was amazing. Overall good.Thanks to D2RHolidays",
    avatarColor: "#FF9800",
    initials: "IL"
  },
  {
    id: 15,
    name: "sanjeeth",
    role: "GOOGLE REVIEW • 6 MONTHS AGO",
    rating: 5,
    text: "The trip turned out to be a wonderful experience and a memorable adventure for our entire group. The guide was very kind, cooperative, and made us feel comfortable at all times. Truly worth every penny",
    avatarColor: "#795548",
    initials: "S"
  },
  {
    id: 16,
    name: "Mona",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Well planned trip with friendly team and good food",
    avatarColor: "#673AB7",
    initials: "M"
  },
  {
    id: 17,
    name: "Santhosh A",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "The best agency. D2r agency took care of everything from start to end and provided us a very good experience.Loved it!!",
    avatarColor: "#F44336",
    initials: "SA"
  },
  {
    id: 18,
    name: "kishor Official",
    role: "GOOGLE REVIEW • A WEEK AGO",
    rating: 5,
    text: "Good Travel...✨",
    avatarColor: "#4285F4",
    initials: "KO"
  }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJKzhygqQzqTsRjO4w1pXkGyo";

  // Removed the live API fetch to ensure ONLY the hardcoded authentic reviews are shown
  // without being mixed with or overwritten by the external feed.

  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden">
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
              <div className="absolute bottom-6 right-6 text-white text-right max-w-[240px]">
                <span className="block text-3xl font-black tracking-tight leading-tight font-sans drop-shadow-lg">
                  Loved by Travelers
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
                  <span className="block text-sm font-black text-slate-900">5.0/5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 7) - SCROLLING TESTIMONIALS: shows 3 at a time, loops all reviews */}
          <div className="lg:col-span-7 flex flex-col relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" style={{ height: '660px' }}>
            
            {/* Top Fade Mask */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

            {/* Infinite Marquee — renders 2 copies so -50% seamlessly loops */}
            <div className="absolute inset-0 flex justify-center w-full px-3 md:px-6 overflow-hidden">
              <div className="flex flex-col gap-5 animate-slide-down-continuous hover:[animation-play-state:paused] pt-8 pb-8 w-full">
                {/* Copy 1 */}
                {reviews.map((rev) => (
                  <TestimonialCard key={`loop1-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                ))}
                {/* Copy 2 — identical, makes the loop seamless */}
                {reviews.map((rev) => (
                  <TestimonialCard key={`loop2-${rev.id}`} rev={rev} googleReviewUrl={googleReviewUrl} />
                ))}
              </div>
            </div>

            {/* Bottom Fade Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

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
          <div className="flex items-center px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
            <svg className="h-[14px] w-[14px] mr-1.5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.58c-.28 1.48-1.12 2.74-2.38 3.58v2.98h3.84c2.25-2.07 3.7-5.12 3.7-8.41z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.84-2.98c-1.08.72-2.45 1.16-4.09 1.16-3.15 0-5.81-2.13-6.76-5.01H1.4v3.08C3.37 20.3 7.38 24 12 24z"/>
              <path fill="#FBBC05" d="M5.24 14.26c-.25-.72-.39-1.5-.39-2.3s.14-1.58.39-2.3V6.58H1.4C.51 8.2.01 10.04.01 12s.5 3.8 1.39 5.42l3.84-3.16z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.93 1.19 15.22 0 12 0 7.38 0 3.37 3.7 1.4 5.62l3.84 3.08c.95-2.88 3.61-5.01 6.76-5.01z"/>
            </svg>
            <span className="text-[10px] font-black text-slate-500 tracking-wider">GOOGLE</span>
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
          {/* Google-style initial avatar */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-sm shrink-0 select-none"
            style={{ backgroundColor: rev.avatarColor }}
          >
            <span className="text-white font-bold text-sm tracking-wide">{rev.initials}</span>
          </div>
          <div className="text-left">
            <span className="block text-[15px] font-black text-slate-900 leading-tight">{rev.name}</span>
            <span className="block text-[10px] font-bold tracking-widest text-slate-400 mt-1">{rev.role}</span>
          </div>
        </div>

        <a 
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition-all active:scale-95 shadow-sm"
          title="Write a Google Review"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

    </div>
  );
};

export default Testimonials;
