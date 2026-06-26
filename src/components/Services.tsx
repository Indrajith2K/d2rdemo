import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, MapPin, Calendar, DollarSign, FileText } from 'lucide-react';

interface VoyageService {
  id: string;
  title: string;
  icon: React.ElementType;
  image: string;
  description: string;
  route: string;
}

const services: VoyageService[] = [
  {
    id: 'domestic',
    title: "Domestic",
    icon: MapPin,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvebLrT7AJaInjRxXu3NzAIG1crY1jX60zueCrbCKYzltVnJlIlPpWf8y4kqkvsXoLklsrynYOdCc67VBJC0YoDyqnZCrradgVrHF8J9vYqTLjrD6E7mMD83l89-KDiD674q3AygyvB7UfOrQqfI-qnqqrQHRGLoiOuhCwG5j2LpGpM6n3IC2ZUSj1_JDzGzDzDQtqK93cUUyd6GCuy49vb_u_U71x1zPw1-gKmqittcvbb0eRLnqzG6YVPzu0uycb7op09q5yohI",
    description: "Uncover the timeless tales and hidden gems of your homeland through intimately crafted boutique itineraries.",
    route: '/domestic-tours'
  },
  {
    id: 'international',
    title: "International",
    icon: Plane,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR1She6zCHSfEwO-cLXqv-KlJD2qVS4hgCeresI-pzuf1CfkUCWN0zHYLbFexb1sM0DFJi15qHZFAkDHOEHygG4PxbY0-pJht6nuOczb8Gvs1vCqh7UnJt25Y1m8vWRmzjYC4Wn_XYcRTGPhCV0V0DkBIE2pBV8aJhYuh_TIvc135Ky2SBDZvyUBnKP5pYNkrC98pWZ-IrmUxUfNpye2jf-C1P9ePEwi027xYhTZAI9gDo_9Q8at41UYeVqu_uLqljeQNGCScrz18",
    description: "Let the world unfold before you through bespoke global expeditions designed to become your most treasured memories.",
    route: '/international-tours'
  },
  {
    id: 'visa',
    title: "Visa",
    icon: FileText,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk7DCrG89dg3O46MTExErzm5rX0XxBUwJfTamJ_LY2qGFxWByKegcKASR0BP_kGF6aAzmC0IyP_ebFd4l13npdCTT1S021fd_3W5htFAzZnRz08DUZ5cGAkcOUc33Ye8XJZM4feI2FxMlvrQK5npMhZhU6s63WMW_HUQCGKF8NUMeNEFMnYlzNpG4HJ81cIQOQiG0xH_R8dIOoMoGjQ5j_eezMpdReVCrLYFbiTjAXg6AUImoR9mZEpbpTp_lxZEeZi8E8ovpH3RI",
    description: "We untangle the complexities of documentation, giving you the freedom to dream while we handle the details.",
    route: '/visa-assistance'
  },
  {
    id: 'booking',
    title: "Booking",
    icon: Calendar,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhat5t6T4SS1pguuaDVUw59qizlZbWPYhg-NE2ACDuHGVWTR2ncLtAOy0VkPK3STO6VeLL7eyIn1KQ2ktcsFQEJCUi3MscUn38rJ46v7xTcdEn8or-YJKcRU0F2SUkLn9_FRbnK1eU84KtZ7wRhgvkrbe2ZMKBRzqzD968b43ohfPLcaAX0cXIjdRS9vWRnqoeaIoskdpsd35v6hMUx8DwQ1v2eEKjqFvX0VAWHrOycUE9omAxQuat-WNnJME2nCDbeMFhb38aMBQ",
    description: "Unlock the doors to secluded luxury, handpicked havens, and the finest hospitality across the globe.",
    route: '/book-now'
  },
  {
    id: 'currency',
    title: "Currency",
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    description: "Seamless financial transitions that ensure your focus remains entirely on the journey ahead.",
    route: '/live-exchange'
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-24 bg-[#eef0fa] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#16284b] m-0">
            The Chapters of Your Journey
          </h2>
          <p className="font-sans text-lg md:text-xl text-slate-600 mt-4">
            Meticulously crafted experiences designed to become your most cherished memories.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row h-[500px] sm:h-[600px] md:h-[520px] w-full gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                if (window.innerWidth >= 768) {
                  navigate(service.route);
                }
              }}
              className="group relative flex-1 hover:flex-[6] md:hover:flex-[4] h-full overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] transition-all duration-500 ease-in-out cursor-pointer shadow-md"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/80 via-transparent to-transparent transition-all duration-500 group-hover:from-[#0a1428]/95 group-hover:via-[#0a1428]/60 group-hover:to-transparent" />

              {/* Mobile Unexpanded Dark Overlay to make text pop */}
              <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 md:hidden transition-opacity duration-500 z-0 pointer-events-none" />

              {/* Icon Circle */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 group-hover:top-4 group-hover:-translate-y-0 md:top-4 md:left-1/2 md:-translate-x-1/2 md:-translate-y-0 md:group-hover:left-6 md:group-hover:translate-x-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center z-10 transition-all duration-500 shadow-lg">
                <service.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
              </div>

              {/* Horizontal Text for Mobile Unexpanded State */}
              <div className="absolute inset-y-0 left-16 right-4 flex items-center justify-start opacity-100 group-hover:opacity-0 md:hidden transition-opacity duration-500 pointer-events-none z-10">
                <span className="font-display text-xl font-bold text-white tracking-wide whitespace-nowrap drop-shadow-md pl-2">
                  {service.title}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white z-10 flex flex-col justify-end pointer-events-none group-hover:pointer-events-auto">
                <h3 className="font-display text-lg md:text-3xl font-bold mb-0 group-hover:mb-2 md:group-hover:mb-4 transition-all duration-500 drop-shadow-md opacity-0 md:opacity-100 group-hover:opacity-100 whitespace-nowrap overflow-hidden md:whitespace-normal">
                  {service.title}
                </h3>

                {/* Description & Button - Hidden completely until hovered */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-white/90 text-xs md:text-sm leading-snug md:leading-relaxed mb-4 font-sans whitespace-normal w-full min-w-[150px]">
                    {service.description}
                  </p>

                  <Link
                    to={service.route}
                    className="inline-block bg-white text-[#16284b] font-semibold px-4 py-2 md:px-6 md:py-2.5 rounded-md text-xs md:text-sm hover:-translate-y-0.5 transition-transform shadow-md pointer-events-auto"
                  >
                    Explore Tours &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
