import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Plane, Globe, Compass, User, Calendar, MessageSquare, Sparkles, Check, Loader2, CreditCard, Users } from 'lucide-react';
import { usePackages } from '../hooks/usePackages';

const Contact = () => {
  const { packages, loading } = usePackages();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [bookingData, setBookingData] = useState({
    tourType: '',
    stateOrCountry: '',
    customDestination: '',
    package: '',
    travelers: '',
    startDate: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'tourType') {
      setBookingData({ ...bookingData, tourType: value, stateOrCountry: '', package: '', customDestination: '' });
    } else if (name === 'stateOrCountry') {
      setBookingData({ ...bookingData, stateOrCountry: value, package: '' });
    } else {
      setBookingData({ ...bookingData, [name]: value });
    }
  };

  // Dynamic Options derived from Supabase packages
  const uniqueStates = Array.from(new Set(packages.filter(p => p.category === 'domestic').map(p => p.state_or_country)));
  const uniqueCountries = Array.from(new Set(packages.filter(p => p.category === 'international').map(p => p.state_or_country)));

  let destinationOptions: string[] = [];
  if (bookingData.tourType === 'domestic') {
    destinationOptions = uniqueStates;
  } else if (bookingData.tourType === 'international') {
    destinationOptions = uniqueCountries;
  }

  const availablePackages = packages.filter(
    p => p.category === bookingData.tourType && p.state_or_country === bookingData.stateOrCountry
  );

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData();
      formData.append("access_key", "9155ac03-c03a-4e10-9132-71dcb6a5e617");
      formData.append("subject", "New Booking Request from D2R Website");
      formData.append("from_name", "D2R Booking System");

      // Append all valid booking data
      Object.entries(bookingData).forEach(([key, value]) => {
        if (value) {
          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          formData.append(formattedKey, value);
        }
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStep(4);
      } else {
        setSubmitError("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hangingPhotos = [
    { id: 1, img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=400&q=80', label: 'Venice Gondola' },
    { id: 2, img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80', label: 'Mountain Lake' },
    { id: 3, img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80', label: 'Beach Picnic' },
    { id: 4, img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80', label: 'Wildflower Valley' }
  ];

  return (
    <div className="bg-white text-slate-800 relative">
      
      {/* ============================================================================
          PREMIUM REDESIGN: ADVENTURE SHOWCASE
          ============================================================================ */}
      <section className="relative pt-16 pb-32 overflow-hidden bg-white select-none">
        {/* Background ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-[64px] opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-[64px] opacity-70"></div>
        </div>

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-blue-950 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-blue-900/50">
            {/* Textured background overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-blue-950/95"></div>
            
            {/* Giant watermark text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
              <span className="text-[18vw] md:text-[14vw] font-black text-white/[0.03] uppercase tracking-[0.2em] font-sans whitespace-nowrap">
                Adventure
              </span>
            </div>

            <div className="relative z-10 px-6 pt-16 pb-24 md:pt-24 md:pb-36 flex flex-col items-center">
              {/* Floating Header */}
              <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                <span className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Premium Getaways
                </span>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-[1.15]">
                  Explore Destinations <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
                    Across The Globe
                  </span>
                </h3>
                <p className="text-base md:text-lg text-blue-100/80 font-light font-sans leading-relaxed max-w-2xl mx-auto">
                  Discover your dream destinations with Dare2Roam Holidays. Custom curated trips designed for unforgettable global memories.
                </p>
              </div>

              {/* Staggered Premium Image Gallery */}
              <div className="w-full max-w-6xl mx-auto px-2 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {hangingPhotos.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`group relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-blue-900/50 border border-white/10 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/30 ${
                        index % 2 === 0 ? 'md:translate-y-12' : 'md:-translate-y-4'
                      }`}
                    >
                      {/* Image container with fixed aspect ratio */}
                      <div className="aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden">
                        <img 
                          src={item.img} 
                          alt={item.label} 
                          className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-110 transition-transform duration-700 ease-out" 
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                          <span className="text-white font-bold text-base md:text-xl drop-shadow-md tracking-wide">{item.label}</span>
                        </div>
                        <div className="w-8 h-1 md:w-10 md:h-1.5 bg-amber-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================
          BOOK NOW FORM CONTAINER
          ============================================================================ */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= number ? 'bg-yellow-400 text-slate-800' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step > number ? <Check className="w-5 h-5" /> : number}
                  </div>
                  {number < 3 && (
                    <div className={`w-16 h-1 mx-4 ${
                      step > number ? 'bg-yellow-400' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Select Package & Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tour Type
                    </label>
                    <select
                      name="tourType"
                      value={bookingData.tourType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">Select Tour Type</option>
                      <option value="domestic">Domestic Tours</option>
                      <option value="international">International Tours</option>
                      <option value="custom">Custom Tour</option>
                    </select>
                  </div>

                  {(bookingData.tourType === 'domestic' || bookingData.tourType === 'international') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Destination ({bookingData.tourType === 'domestic' ? 'State' : 'Country'})
                      </label>
                      <select
                        name="stateOrCountry"
                        value={bookingData.stateOrCountry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400"
                        disabled={loading}
                      >
                        <option value="">{loading ? 'Loading destinations...' : 'Select Destination'}</option>
                        {destinationOptions.map(dest => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {(bookingData.tourType === 'domestic' || bookingData.tourType === 'international') && bookingData.stateOrCountry && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Package
                      </label>
                      <select
                        name="package"
                        value={bookingData.package}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Choose a package</option>
                        {availablePackages.map(pkg => (
                          <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {bookingData.tourType === 'custom' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Where do you want to go?
                      </label>
                      <input
                        type="text"
                        name="customDestination"
                        value={bookingData.customDestination}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="e.g., Paris, Maldives, or a multi-city tour"
                      />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={bookingData.travelers}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Select travelers</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5+">5+ People</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={bookingData.startDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={nextStep}
                    className="w-full bg-yellow-400 text-slate-800 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setBookingData({ ...bookingData, phone: val });
                        }}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={bookingData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                    <textarea
                      name="requirements"
                      value={bookingData.requirements}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Any special requirements or preferences..."
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300"
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-1 bg-yellow-400 text-slate-800 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Confirm & Submit</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Tour Type:</span>
                        <span className="font-medium capitalize">{bookingData.tourType || 'Not selected'}</span>
                      </div>
                      {bookingData.tourType === 'custom' && (
                        <div className="flex justify-between">
                          <span>Destination:</span>
                          <span className="font-medium">{bookingData.customDestination || 'N/A'}</span>
                        </div>
                      )}
                      {bookingData.tourType !== 'custom' && (
                        <>
                          <div className="flex justify-between">
                            <span>Destination:</span>
                            <span className="font-medium">{bookingData.stateOrCountry || 'N/A'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Package:</span>
                            <span className="font-medium">{bookingData.package || 'N/A'}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between">
                        <span>Travelers:</span>
                        <span className="font-medium">{bookingData.travelers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span className="font-medium">{bookingData.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="font-medium">{bookingData.name}</span>
                      </div>
                    </div>
                  </div>
                  {submitError && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center font-medium">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Confirm Booking'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center animate-fade-in">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your booking. We'll contact you shortly to confirm details.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2">What's Next?</h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>• Our team will contact you within 24 hours</li>
                    <li>• We'll send you a detailed itinerary</li>
                    <li>• Payment instructions will be provided</li>
                    <li>• Travel documents will be prepared</li>
                  </ul>
                </div>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
