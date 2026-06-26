import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Check, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { usePackages } from '../hooks/usePackages';

const BookNow = () => {
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
          // Format keys for better email readability (e.g., stateOrCountry -> State Or Country)
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
        setStep(4); // Go to confirmation step
      } else {
        setSubmitError("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Book Your <span className="text-yellow-400">Adventure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete your booking in just a few simple steps
            </p>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div>
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
                <div>
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
                <div>
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
                <div className="text-center">
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
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default BookNow;