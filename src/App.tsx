
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import CurrencyPopup from "./components/CurrencyPopup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import TamilNadu from "./pages/TamilNadu";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import DomesticTours from "./pages/DomesticTours";
import GroupTours from "./pages/GroupTours";
import ExplorePackages from "./pages/ExplorePackages";
import InternationalTours from "./pages/InternationalTours";
import PlanCustomTrip from "./pages/PlanCustomTrip";
import BookNow from "./pages/BookNow";
import ViewAllPackages from "./pages/ViewAllPackages";
import PassportAssistance from "./pages/PassportAssistance";
import VisaAssistance from "./pages/VisaAssistance";
import LiveExchange from "./pages/LiveExchange";
import FlightBooking from "./pages/FlightBooking";
import HotelBooking from "./pages/HotelBooking";
import BusBooking from "./pages/BusBooking";
import TrainBooking from "./pages/TrainBooking";

import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import PackageDetail from "./pages/PackageDetail";
// import Admin from "./pages/Admin"; // Disabled for security - admin panel moved to separate site

// Destination Pages
import Kerala from "./pages/destinations/Kerala";
import Thailand from "./pages/destinations/Thailand";
import TamilNaduDest from "./pages/destinations/TamilNadu";
import Karnataka from "./pages/destinations/Karnataka";
import Malaysia from "./pages/destinations/Malaysia";
import Singapore from "./pages/destinations/Singapore";
import Goa from "./pages/destinations/Goa";
import Dubai from "./pages/destinations/Dubai";
import Bali from "./pages/destinations/Bali";
import SriLanka from "./pages/destinations/SriLanka";
import Hyderabad from "./pages/destinations/Hyderabad";
import GoldenTriangle from "./pages/destinations/GoldenTriangle";
import Himachal from "./pages/destinations/Himachal";
import Kashmir from "./pages/destinations/Kashmir";
import Northeast from "./pages/destinations/Northeast";
import Meghalaya from "./pages/destinations/Meghalaya";
import Andaman from "./pages/destinations/Andaman";
import Lakshadweep from "./pages/destinations/Lakshadweep";

const queryClient = new QueryClient();

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(() => {
    // Only show on first visit per session
    if (sessionStorage.getItem('d2r_loaded')) return false;
    return true;
  });

  const handleLoadComplete = () => {
    sessionStorage.setItem('d2r_loaded', '1');
    setLoading(false);
  };

  return (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CurrencyPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/tamil-nadu" element={<TamilNaduDest />} />
          <Route path="/destinations/kerala" element={<Kerala />} />
          <Route path="/destinations/karnataka" element={<Karnataka />} />
          <Route path="/destinations/goa" element={<Goa />} />
          <Route path="/destinations/hyderabad" element={<Hyderabad />} />
          <Route path="/destinations/golden-triangle" element={<GoldenTriangle />} />
          <Route path="/destinations/himachal" element={<Himachal />} />
          <Route path="/destinations/kashmir" element={<Kashmir />} />
          <Route path="/destinations/northeast" element={<Northeast />} />
          <Route path="/destinations/meghalaya" element={<Meghalaya />} />
          <Route path="/destinations/andaman" element={<Andaman />} />
          <Route path="/destinations/lakshadweep" element={<Lakshadweep />} />
          <Route path="/destinations/thailand" element={<Thailand />} />
          <Route path="/destinations/malaysia" element={<Malaysia />} />
          <Route path="/destinations/singapore" element={<Singapore />} />
          <Route path="/destinations/bali" element={<Bali />} />
          <Route path="/destinations/dubai" element={<Dubai />} />
          <Route path="/destinations/srilanka" element={<SriLanka />} />
          <Route path="/packages/honeymoon" element={<HoneymoonPackages />} />
          <Route path="/packages/domestic" element={<DomesticTours />} />
          <Route path="/domestic-tours" element={<DomesticTours />} />
          <Route path="/international-tours" element={<InternationalTours />} />
          <Route path="/packages/group-tours" element={<GroupTours />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/live-exchange" element={<LiveExchange />} />
          <Route path="/explore-packages" element={<ExplorePackages />} />
          <Route path="/plan-custom-trip" element={<PlanCustomTrip />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/view-all-packages" element={<ViewAllPackages />} />
          <Route path="/passport-assistance" element={<PassportAssistance />} />
          <Route path="/visa-assistance" element={<VisaAssistance />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/bus-booking" element={<BusBooking />} />
          <Route path="/train-booking" element={<TrainBooking />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          {/* <Route path="/admin" element={<Admin />} /> */} {/* Disabled - admin panel on separate site */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
  );
};

export default App;
