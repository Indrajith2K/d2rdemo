import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DollarSign, ArrowRight, X } from 'lucide-react';

const CurrencyPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  // Display only on international pages
  const internationalPaths = [
    '/destinations/meghalaya',
    '/destinations/andaman',
    '/destinations/lakshadweep',
    '/destinations/thailand',
    '/destinations/malaysia',
    '/destinations/singapore',
    '/destinations/bali',
    '/destinations/dubai',
    '/destinations/srilanka',
    '/international-tours'
  ];
  const isRelevantPage = internationalPaths.includes(location.pathname);

  // Handle scroll detection for dynamic hiding/showing
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Hide when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 150) {
            setIsScrollingDown(true);
          } else if (currentScrollY < lastScrollY) {
            setIsScrollingDown(false);
          }
          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isRelevantPage && !isDismissed) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname, isRelevantPage, isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-[70] w-[90%] sm:w-auto max-w-sm sm:max-w-md pointer-events-none">
      <div className={`transition-all duration-500 ease-in-out ${isScrollingDown ? 'opacity-0 translate-y-12 pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'}`}>
        <div 
          onClick={() => navigate('/live-exchange')}
        className="bg-slate-900 rounded-full shadow-[0_20px_50px_rgb(0,0,0,0.5)] pr-2 pl-2 py-2 border border-slate-700 flex items-center gap-3 cursor-pointer group hover:bg-slate-800 hover:scale-105 transition-all duration-300 ring-2 ring-yellow-400/50"
      >
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 text-slate-900 p-2.5 rounded-full flex-shrink-0 animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.6)]">
          <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        
        <div className="flex flex-col border-r border-slate-700 pr-4 shrink-0 py-0.5">
          <p className="text-sm sm:text-base text-white font-bold tracking-wide">Need Live Currency Rates?</p>
          <div className="text-xs sm:text-sm text-yellow-400 font-semibold flex items-center group-hover:text-yellow-300 transition-colors">
            Tap here to calculate instantly <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="text-slate-400 hover:text-white p-2 ml-1 rounded-full hover:bg-slate-700 transition-colors shrink-0 outline-none"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default CurrencyPopup;
