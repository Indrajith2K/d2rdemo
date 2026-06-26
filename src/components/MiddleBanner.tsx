import React from 'react';

const MiddleBanner = () => {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[480px] md:h-[600px] flex items-center justify-start overflow-hidden bg-white"
    >
      {/* Background visual image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right md:bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/6589bdd22569ba630cb2cba1/1747155304609-9F521RLP1YEAEPPEMQGD/image-asset.jpeg")',
        }}
      />

      {/* Subtle dark gradient on the left to ensure text readability without ruining image quality */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent w-full z-0" />

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-xl bg-black/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Write Your Own Adventure
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-light drop-shadow-sm">
            You are the author of your journey; we are simply the scribes. At D2R Holidays, a premier <strong className="font-bold text-amber-400">travel agency in Coimbatore</strong>, we curate deeply personal travel narratives. Share your vision, and our experts will compose a flawless itinerary. From secluded boutique havens to culturally immersive encounters, we handle the logistics so you can live the story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
