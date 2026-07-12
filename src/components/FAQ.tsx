import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "What types of tour packages do you offer?",
    answer: "We offer a wide variety of tour packages tailored to your preferences, including Domestic and International Tours, specialized Honeymoon Packages, Group Tours, and fully customizable itineraries. Whether you're looking for a peaceful retreat or an adventurous getaway, we have something for everyone."
  },
  {
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! We specialize in creating personalized travel experiences. You can work directly with our travel experts to customize destinations, hotels, activities, and durations to perfectly match your budget and interests."
  },
  {
    question: "Do you provide assistance with Visa and Passport processing?",
    answer: "Yes, we provide end-to-end assistance for Visa and Passport applications. Our dedicated team will guide you through the documentation process, appointment scheduling, and submission to ensure a hassle-free experience for your international travels."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Our cancellation and refund policies vary depending on the specific package, airline, and hotel terms. Generally, cancellations made well in advance incur lower fees. We always provide a detailed breakdown of the cancellation policy before you finalize your booking."
  },
  {
    question: "How do I make a booking and what are the payment options?",
    answer: "You can book directly through our website, contact our customer service team, or visit our office. We accept various payment methods including credit/debit cards, net banking, UPI, and bank transfers. We also offer EMI options on select packages."
  },
  {
    question: "Is there 24/7 support during my trip?",
    answer: "Yes! Your peace of mind is our priority. We provide 24/7 on-trip support. Our local representatives and central support team are always just a call or message away to assist you with any emergencies or queries during your holiday."
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data?: FAQItem[];
  title?: React.ReactNode;
  subtitle?: string;
}

const FAQ = ({ data = faqData, title, subtitle }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqItem = (faq: FAQItem, index: number) => {
    const isOpen = openIndex === index;
    return (
      <div 
        key={index}
        className={`bg-white rounded-2xl transition-all duration-300 border ${isOpen ? 'border-blue-200 shadow-lg shadow-blue-900/5' : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md'}`}
      >
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
        >
          <span className={`text-lg font-bold pr-4 transition-colors duration-200 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
            {faq.question}
          </span>
          <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
            <ChevronDown className="h-5 w-5" />
          </div>
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="px-6 pb-6 text-slate-600 leading-relaxed">
            <div className="pt-2 border-t border-slate-50">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const midPoint = Math.ceil(data.length / 2);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide mb-4">
            <HelpCircle className="h-4 w-4" />
            <span>FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            {title || (
              <>
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
              </>
            )}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {subtitle || "Everything you need to know about booking your dream vacation with Dare2Roam Holidays."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="space-y-4">
            {data.slice(0, midPoint).map((faq, index) => renderFaqItem(faq, index))}
          </div>
          <div className="space-y-4">
            {data.slice(midPoint).map((faq, index) => renderFaqItem(faq, index + midPoint))}
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Our travel experts are ready to help you plan your perfect trip.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
