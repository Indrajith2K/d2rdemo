import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false);
  const [mobileInternationalOpen, setMobileInternationalOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBookingsOpen, setMobileBookingsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // { name: 'Blogs', href: '/blogs' },
    // { name: 'Live Exchange', href: '/live-exchange' }
  ];

  const domesticItems = [
    { name: 'Kerala', href: '/destinations/kerala' },
    // { name: 'Tamil Nadu', href: '/destinations/tamil-nadu' },
    { name: 'Karnataka', href: '/destinations/karnataka' },
    { name: 'Goa', href: '/destinations/goa' },
    { name: 'Hyderabad', href: '/destinations/hyderabad' },
    { name: 'Delhi - Agra - Jaipur', href: '/destinations/golden-triangle' },
    { name: 'Himachal Pradesh', href: '/destinations/himachal' },
    { name: 'Kashmir', href: '/destinations/kashmir' },
    { name: 'Northeast', href: '/destinations/northeast' },
    { name: 'Meghalaya', href: '/destinations/meghalaya' },
    { name: 'Andaman', href: '/destinations/andaman' },
    { name: 'Lakshadweep', href: '/destinations/lakshadweep' },
    { name: 'Rajasthan', href: '/destinations/rajasthan' },
    { name: 'Maharashtra', href: '/destinations/maharashtra' }
  ];

  const internationalItems = [
    { name: 'Thailand', href: '/destinations/thailand' },
    { name: 'Malaysia', href: '/destinations/malaysia' },
    { name: 'Singapore', href: '/destinations/singapore' },
    { name: 'Bali', href: '/destinations/bali' },
    { name: 'Dubai', href: '/destinations/dubai' },
    { name: 'Sri Lanka', href: '/destinations/srilanka' },
    { name: 'Vietnam', href: '/destinations/vietnam' },
    { name: 'Cambodia', href: '/destinations/cambodia' },
    { name: 'Azerbaijan', href: '/destinations/azerbaijan' },
    { name: 'Maldives', href: '/destinations/maldives' },
    { name: 'Seychelles', href: '/destinations/seychelles' },
    { name: 'Japan', href: '/destinations/japan' },
    { name: 'Mauritius', href: '/destinations/mauritius' },
    { name: 'Kazakhstan', href: '/destinations/kazakhstan' }
  ];

  const packageItems = [
    { name: 'Honeymoon Packages', href: '/packages/honeymoon' },
    { name: 'Group Tours', href: '/packages/group-tours' },
    { name: 'View All Packages', href: '/view-all-packages' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Centered Floating Pill Navbar - Mockup Design Replication (h-20 light grey capsule) */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1350px] h-20 transition-all duration-500 ${
          isScrolled 
            ? 'top-4 bg-white border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)]' 
            : 'top-6 bg-white border-slate-200/70 shadow-[0_15px_35px_rgba(15,23,42,0.08)]'
        } border rounded-[28px] flex items-center justify-between px-6`}
      >
        
        {/* Left Side: Original D2R Logo Image rendered directly on background */}
        <RouterLink to="/" className="flex items-center flex-shrink-0 transition-transform active:scale-95 hover:scale-102 duration-300">
          <img 
            src="/D2R_Logo_Final.png" 
            alt="Dare2Roam Holidays" 
            className="h-14 sm:h-16 w-auto object-contain" 
          />
        </RouterLink>

        {/* Center: Desktop Menu Navigation links (exactly Home, About Us, Live Exchange, Contact, Domestic, International, Packages) */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.slice(0, 2).map((item) => (
            <RouterLink 
              key={item.name} 
              to={item.href} 
              className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 transition-all duration-200 font-sans whitespace-nowrap"
            >
              {item.name}
            </RouterLink>
          ))}

          {/* Services Dropdown */}
          <div className="relative group/services">
            <button className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 flex items-center gap-0.5 transition-colors font-sans whitespace-nowrap">
              <span>Services</span>
              <ChevronDown className="h-4 w-4 group-hover/services:rotate-180 transition-transform duration-300 text-blue-950/70" />
            </button>
            
            {/* Light Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white border border-slate-150 shadow-[0_15px_40px_rgba(15,23,42,0.1)] rounded-[20px] opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 z-50 py-2.5">
              <RouterLink to="/visa-assistance" className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors">Visa</RouterLink>
              <RouterLink to="/passport-assistance" className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors">Passport</RouterLink>
              
              {/* Nested Dropdown for Bookings */}
              <div className="relative group/bookings">
                <button className="w-full text-left px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans flex items-center justify-between transition-colors">
                  <span>Bookings</span>
                  <ChevronDown className="h-4 w-4 -rotate-90 group-hover/bookings:rotate-0 transition-transform duration-300 text-slate-400" />
                </button>
                <div className="absolute top-0 left-[95%] w-44 bg-white border border-slate-150 shadow-[0_15px_40px_rgba(15,23,42,0.1)] rounded-[20px] opacity-0 invisible group-hover/bookings:opacity-100 group-hover/bookings:visible transition-all duration-300 z-50 py-2.5">
                  <RouterLink to="/flight-booking" className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors">Flight</RouterLink>
                  <RouterLink to="/bus-booking" className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors">Bus</RouterLink>
                  <RouterLink to="/train-booking" className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors">Train</RouterLink>
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <RouterLink 
              key={item.name} 
              to={item.href} 
              className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 transition-all duration-200 font-sans whitespace-nowrap"
            >
              {item.name}
            </RouterLink>
          ))}

          {/* Domestic Dropdown */}
          <div className="relative group">
            <button className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 flex items-center gap-0.5 transition-colors font-sans whitespace-nowrap">
              <span>Domestic</span>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300 text-blue-950/70" />
            </button>
            
            {/* Light Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-slate-150 shadow-[0_15px_40px_rgba(15,23,42,0.1)] rounded-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2.5">
              {domesticItems.map(item => (
                <RouterLink 
                  key={item.name} 
                  to={item.href} 
                  className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors"
                >
                  {item.name}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* International Dropdown */}
          <div className="relative group">
            <button className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 flex items-center gap-0.5 transition-colors font-sans whitespace-nowrap">
              <span>International</span>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300 text-blue-950/70" />
            </button>
            
            {/* Light Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-slate-150 shadow-[0_15px_40px_rgba(15,23,42,0.1)] rounded-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2.5">
              {internationalItems.map(item => (
                <RouterLink 
                  key={item.name} 
                  to={item.href} 
                  className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors"
                >
                  {item.name}
                </RouterLink>
              ))}
            </div>
          </div>

          {/* Packages Dropdown
          <div className="relative group">
            <button className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 flex items-center gap-0.5 transition-colors font-sans whitespace-nowrap">
              <span>Packages</span>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300 text-blue-950/70" />
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-slate-150 shadow-[0_15px_40px_rgba(15,23,42,0.1)] rounded-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2.5">
              {packageItems.map(item => (
                <RouterLink 
                  key={item.name} 
                  to={item.href} 
                  className="block px-4 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-50 hover:text-blue-600 font-bold font-sans transition-colors"
                >
                  {item.name}
                </RouterLink>
              ))}
            </div>
          </div>
          */}

          <RouterLink 
            to="/contact" 
            className="text-blue-955 text-blue-950 hover:text-blue-600 font-bold text-[14.5px] px-3 py-2 transition-all duration-200 font-sans whitespace-nowrap"
          >
            Contact
          </RouterLink>
        </div>

        {/* Right Side: Clean Premium Get Quote Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <RouterLink 
            to="/book-now" 
            className="inline-flex items-center justify-center h-11 px-8 text-[14.5px] font-bold text-white transition-all duration-200 bg-[#4F46E5] rounded-full shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-[#4338CA] active:scale-[0.96] tracking-wide"
          >
            Get Quote
          </RouterLink>
        </div>

        {/* Mobile Hamburger menu toggle button */}
        <div className="lg:hidden flex items-center pr-1">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-800 hover:text-blue-600 focus:outline-none p-2 rounded-full hover:bg-slate-200/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>

      </nav>

      {/* Mobile responsive overlay dropdown list - Light themed matching mockup */}
      {isOpen && (
        <div className="lg:hidden fixed top-[102px] left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-white border border-slate-200 shadow-2xl rounded-[32px] p-5 space-y-2 backdrop-blur-md max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-thin">
            {navItems.slice(0, 2).map(item => (
              <RouterLink 
                key={item.name} 
                to={item.href} 
                className="block text-slate-700 hover:text-blue-600 px-4 py-3 font-semibold text-sm rounded-2xl hover:bg-slate-50 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </RouterLink>
            ))}

            {/* Mobile Dropdown Dropdowns: Services */}
            <div className="border-t border-slate-100 my-2 pt-2">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors font-sans"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  <RouterLink to="/visa-assistance" className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Visa</RouterLink>
                  <RouterLink to="/passport-assistance" className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Passport</RouterLink>
                  
                  {/* Nested Mobile Bookings */}
                  <div className="pl-4 py-1">
                    <button 
                      onClick={() => setMobileBookingsOpen(!mobileBookingsOpen)} 
                      className="w-full flex items-center justify-between px-4 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors font-sans"
                    >
                      <span>Bookings</span>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${mobileBookingsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {mobileBookingsOpen && (
                      <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        <RouterLink to="/flight-booking" className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-[11px] rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Flight</RouterLink>
                        <RouterLink to="/bus-booking" className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-[11px] rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Bus</RouterLink>
                        <RouterLink to="/train-booking" className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-[11px] rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>Train</RouterLink>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(2).map(item => (
              <RouterLink 
                key={item.name} 
                to={item.href} 
                className="block text-slate-700 hover:text-blue-600 px-4 py-3 font-semibold text-sm rounded-2xl hover:bg-slate-50 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </RouterLink>
            ))}
            
            {/* Mobile Dropdown Dropdowns: Domestic Tours */}
            <div className="border-t border-slate-100 my-2 pt-2">
              <button 
                onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)} 
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors font-sans"
              >
                <span>Domestic Tours</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileDomesticOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              {mobileDomesticOpen && (
                <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {domesticItems.map(item => (
                    <RouterLink key={item.name} to={item.href} className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Dropdown Dropdowns: International Tours */}
            <div className="border-t border-slate-100 my-2 pt-2">
              <button 
                onClick={() => setMobileInternationalOpen(!mobileInternationalOpen)} 
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors font-sans"
              >
                <span>International Tours</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileInternationalOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              {mobileInternationalOpen && (
                <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {internationalItems.map(item => (
                    <RouterLink key={item.name} to={item.href} className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown Dropdowns: Packages
            <div className="border-t border-slate-100 my-2 pt-2">
              <button 
                onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)} 
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors font-sans"
              >
                <span>Packages</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobilePackagesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
              {mobilePackagesOpen && (
                <div className="mt-1 pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {packageItems.map(item => (
                    <RouterLink key={item.name} to={item.href} className="block text-slate-600 hover:text-blue-600 px-4 py-2 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </RouterLink>
                  ))}
                </div>
              )}
            </div>
            */}

            <RouterLink 
              to="/contact" 
              className="block text-slate-700 hover:text-blue-600 px-4 py-3 font-semibold text-sm rounded-2xl hover:bg-slate-50 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </RouterLink>
            
            <div className="border-t border-slate-100 my-2 pt-2">
              <RouterLink 
                to="/book-now" 
                className="flex w-full items-center justify-center py-3.5 text-[14.5px] font-bold text-white transition-all duration-200 bg-[#4F46E5] rounded-2xl shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-[#4338CA] active:scale-[0.98] tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
