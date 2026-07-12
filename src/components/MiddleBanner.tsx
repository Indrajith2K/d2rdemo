import React from 'react';

const MiddleBanner = () => {
  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto" data-purpose="custom-adventure">
      <div className="relative h-[500px] rounded-[40px] overflow-hidden group">
        {/* High-impact vibrant travel background */}
        <img
          alt="Vibrant Colorful Travel Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpiyJ5V0ktw67uMXqtlUiPQV6xj5pPeJQ7Oh6RS7uH-lL3emh1v8KdOi361PHC-OoWDDDIHXGfM-nt87MNFhR1VFZ5Z1hZ8-hrYSrmXDIv1oZIoTu_8wGcqhnZ8Dl42UMzK215VLl44N2S-dXAAbR_4jtH-Zv17wvfLPaLzoLnEPs4Jd9grcraELHt3v7cskz3NrHM_K5_WYgRocc6yLF1RVA0usFKb-cmjaNncCuaReQDv9dEEQ_VIMkSUdk9V2FJLZt7TGf7af3x"
        />
        {/* Gradient overlay for premium feel and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
          <div className="px-12 md:px-20 max-w-3xl text-left">
            <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
              Limitless Possibilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-5 leading-tight font-bold">
              Write Your Own Adventure
            </h2>
            <p className="font-sans text-white/70 text-base font-light mb-8 max-w-md">
              Don't see exactly what you're looking for? Let's collaborate to build a bespoke itinerary that reflects your unique spirit of discovery.
            </p>
            <a
              className="inline-flex items-center px-8 py-4 bg-white text-[#1a1a1a] font-medium rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-xl group/btn"
              href="/plan-custom-trip"
            >
              Start Customizing
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
