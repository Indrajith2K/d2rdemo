import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftRight, Info, RefreshCw, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs', flag: '🇱🇰' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼', flag: '🇶🇦' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب', flag: '🇧🇭' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', flag: '🇴🇲' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩' },
  { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', flag: '🇳🇵' },
];

const API_KEY = 'b988416fad484b1f39e629c5';
const BASE_CURRENCY = 'USD';

const LiveExchange = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState('1.00');
  const [convertedAmount, setConvertedAmount] = useState('--');
  const [exchangeRate, setExchangeRate] = useState('--');
  const [lastUpdated, setLastUpdated] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [hasError, setHasError] = useState(false);
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);

  const getFromCurrency = () => currencies.find(c => c.code === fromCurrency);
  const getToCurrency = () => currencies.find(c => c.code === toCurrency);

  // Fetch rates from API
  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${BASE_CURRENCY}`
      );
      const data = await response.json();
      
      if (data.result !== 'success') {
        throw new Error('Failed to fetch exchange rates');
      }
      
      setRates(data.conversion_rates);
      setHasFetchedOnce(true);
      updateTime();
      toast({
        title: "Rates Updated",
        description: "Exchange rates have been refreshed successfully.",
      });
    } catch (error) {
      console.error('Error fetching rates:', error);
      setHasError(true);
      toast({
        title: "Error",
        description: "Failed to fetch exchange rates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Calculate exchange
  const calculateExchange = useCallback(() => {
    if (Object.keys(rates).length === 0) return;
    
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    
    if (!fromRate || !toRate) return;
    
    // Convert from source to USD, then to target
    const numAmount = parseFloat(amount) || 0;
    const amountInUSD = fromCurrency === 'USD' ? numAmount : numAmount / fromRate;
    const converted = toCurrency === 'USD' ? amountInUSD : amountInUSD * toRate;
    
    const rate = toRate / fromRate;
    
    setExchangeRate(rate.toFixed(6));
    setConvertedAmount(converted.toFixed(2));
  }, [fromCurrency, toCurrency, amount, rates]);

  const updateTime = () => {
    const now = new Date();
    setLastUpdated(now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    }));
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  // Handle currency change with validation (same currency can't be on both sides)
  const handleFromCurrencyChange = (value: string) => {
    if (value === toCurrency) {
      // Swap if user selects the same currency
      setToCurrency(fromCurrency);
    }
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value: string) => {
    if (value === fromCurrency) {
      // Swap if user selects the same currency
      setFromCurrency(toCurrency);
    }
    setToCurrency(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  // Recalculate when currencies or amount change (only if rates are available)
  useEffect(() => {
    if (hasFetchedOnce) {
      calculateExchange();
    }
  }, [calculateExchange, hasFetchedOnce]);

  // Get available currencies for "To" dropdown (excluding selected "From" currency)
  const getAvailableToCurrencies = () => currencies.filter(c => c.code !== fromCurrency);
  const getAvailableFromCurrencies = () => currencies.filter(c => c.code !== toCurrency);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <ArrowLeftRight className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Live Currency Converter
          </h1>
          <p className="text-xl text-blue-100">
            Real-time exchange rates powered by live market data
          </p>
        </div>
      </section>

      {/* Converter Card */}
      <section className="relative -mt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 rounded-3xl flex items-center justify-center z-10">
                <div className="flex items-center gap-3">
                  <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                  <span className="text-gray-600 font-medium">Fetching rates...</span>
                </div>
              </div>
            )}

            {/* Converter Row */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
              {/* From Section */}
              <div className="space-y-4">
                <label className="text-gray-500 text-sm font-medium">Amount</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      className="w-full text-3xl md:text-4xl font-bold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0"
                      placeholder="0.00"
                    />
                  </div>
                  <Select value={fromCurrency} onValueChange={handleFromCurrencyChange}>
                    <SelectTrigger className="w-48 h-12 border-gray-200 rounded-xl">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getFromCurrency()?.flag}</span>
                          <span className="font-medium">{fromCurrency}</span>
                          <span className="text-gray-500 text-sm hidden sm:inline">- {getFromCurrency()?.name}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-80">
                      {getAvailableFromCurrencies().map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{currency.flag}</span>
                            <span className="font-medium">{currency.code}</span>
                            <span className="text-gray-500 text-sm">- {currency.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={swapCurrencies}
                  className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center hover:bg-blue-100 hover:border-blue-300 transition-all group shadow-md hover:shadow-lg"
                  aria-label="Swap currencies"
                >
                  <ArrowLeftRight className="h-6 w-6 text-blue-600 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>

              {/* To Section */}
              <div className="space-y-4">
                <label className="text-gray-500 text-sm font-medium">Converted To</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-3xl md:text-4xl font-bold text-green-600">
                      {getToCurrency()?.symbol}{convertedAmount}
                    </div>
                  </div>
                  <Select value={toCurrency} onValueChange={handleToCurrencyChange}>
                    <SelectTrigger className="w-48 h-12 border-gray-200 rounded-xl">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getToCurrency()?.flag}</span>
                          <span className="font-medium">{toCurrency}</span>
                          <span className="text-gray-500 text-sm hidden sm:inline">- {getToCurrency()?.name}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-80">
                      {getAvailableToCurrencies().map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{currency.flag}</span>
                            <span className="font-medium">{currency.code}</span>
                            <span className="text-gray-500 text-sm">- {currency.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Exchange Rate Display */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  {hasFetchedOnce ? (
                    <>
                      <p className="text-2xl font-bold text-gray-900">
                        1.00 {fromCurrency} = <span className="text-blue-600">{parseFloat(exchangeRate).toFixed(2)}</span>
                        <span className="text-gray-400">{exchangeRate.includes('.') ? exchangeRate.slice(exchangeRate.indexOf('.') + 3) : ''}</span> {toCurrency}
                      </p>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${hasError ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></span>
                        {hasError ? 'Offline - using cached rates' : `Live rate at ${lastUpdated}`}
                      </p>
                    </>
                  ) : (
                    <p className="text-xl text-gray-500">
                      Click "Get Live Rates" to fetch current exchange rates
                    </p>
                  )}
                </div>
                <button
                  onClick={fetchRates}
                  disabled={isLoading}
                  className="flex items-center gap-2 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  {hasFetchedOnce ? 'Refresh Rates' : 'Get Live Rates'}
                </button>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-6 bg-gray-50 rounded-2xl p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-sm">
              Exchange rates are fetched live from trusted financial data providers. Rates update automatically and reflect current market conditions. 
              Actual exchange rates may vary slightly during transactions. Contact us for competitive travel currency exchange rates.
            </p>
          </div>

          {/* Popular Conversions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Conversions for Travelers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { from: 'INR', to: 'USD' },
                { from: 'INR', to: 'EUR' },
                { from: 'INR', to: 'GBP' },
                { from: 'INR', to: 'AED' },
                { from: 'INR', to: 'THB' },
                { from: 'INR', to: 'SGD' },
              ].map((pair) => {
                const fromC = currencies.find(c => c.code === pair.from);
                const toC = currencies.find(c => c.code === pair.to);
                return (
                  <button
                    key={`${pair.from}-${pair.to}`}
                    onClick={() => {
                      setFromCurrency(pair.from);
                      setToCurrency(pair.to);
                    }}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group flex items-center justify-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{fromC?.flag}</span>
                        <span className="font-bold text-gray-800 text-lg">{pair.from}</span>
                      </div>
                      <span className="text-gray-300 group-hover:text-blue-500 transition-colors text-xl font-bold px-2">→</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{toC?.flag}</span>
                        <span className="font-bold text-gray-800 text-lg">{pair.to}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Currency Tips for Travelers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Exchange Before You Go</h3>
                  <p className="text-gray-600 text-sm mt-1">Get some local currency before departing to cover initial expenses like transport and tips.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Use Local Currency</h3>
                  <p className="text-gray-600 text-sm mt-1">When given the option, always pay in the local currency to get better exchange rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Avoid Airport Exchanges</h3>
                  <p className="text-gray-600 text-sm mt-1">Airport currency exchanges typically have the worst rates. Plan ahead instead.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact Dare2Roam</h3>
                  <p className="text-gray-600 text-sm mt-1">We can help you get the best currency exchange rates for your destination!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveExchange;
