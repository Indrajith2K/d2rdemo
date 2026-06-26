import { domesticImages, internationalImages } from './images';

export const domesticPackages = {
  kerala: [
    {
      id: 'kerala-wayanad',
      name: 'Wayanad Adventure',
      duration: '2 Days / 1 Night',
      price: '₹4,000',
      image: domesticImages.kerala.wayanad,
      itinerary: [
        'Pookode Lake', 'Kurva Island', 'Soochipara Water Falls',
        'Muthunga Wildlife Sanctuary', 'Heritage Museum', 'Chian Tree',
        'Valley View', 'Chembara Peak', 'Jain Temple', 'Edakkal Caves',
        'Banasura Sagar Dam', 'Meenmutty Water Falls'
      ],
      rating: 4.7,
      category: 'domestic'
    },
    {
      id: 'kerala-vagamon-varkala',
      name: 'Vagamon - Varkala',
      duration: '2 Days / 1 Night',
      price: '₹5,000',
      image: domesticImages.kerala.varkala,
      itinerary: [
        'Kurishumala', 'Murugan Mala', 'Thangalpara', 'Vagamon Pine Forest',
        'Vagamon Lake', 'Uluppuni Tunnel & Waterfalls', 'Green Meadows',
        'Suicide Point', 'Varkala Cliff & Beach', 'Kappil Beach',
        'Anchuthengu Fort & Light House'
      ],
      rating: 4.6,
      category: 'domestic'
    },
    {
      id: 'kerala-cochin-munnar',
      name: 'Cochin - Munnar',
      duration: '2 Days / 1 Night',
      price: '₹5,000',
      image: domesticImages.kerala.munnar,
      itinerary: [
        'Marine Drive', 'Dutch Palace', 'Chinese Fishing nets', 'Cherai Beach',
        'Photo Point', 'Echo Point', 'Mattuppetty Dam', 'Kundala Lake', 'Munnar Top Station'
      ],
      rating: 4.8,
      category: 'domestic'
    },
    {
      id: 'kerala-package-5days',
      name: 'Kerala Package',
      duration: '5 Days / 4 Nights',
      price: '₹15,000',
      image: domesticImages.kerala.alleppey,
      itinerary: [
        'Munnar Hill Station', 'Tea Gardens', 'Alleppey Backwaters',
        'Houseboat Stay', 'Cochin Sightseeing', 'Spice Plantation Tours'
      ],
      rating: 4.9,
      category: 'domestic'
    },
    {
      id: 'kerala-alleppey-houseboat',
      name: 'Alleppey Houseboat',
      duration: '2 Days / 1 Night',
      price: '₹15,000',
      image: domesticImages.kerala.alleppey,
      itinerary: [
        'Backwater Cruise', 'Sunset Views', 'Traditional Kerala Meals', 'Overnight Houseboat Stay'
      ],
      rating: 4.8,
      category: 'domestic'
    },
    {
      id: 'kerala-varkala-trivandrum',
      name: 'Varkala to Thiruvananthapuram',
      duration: '2 Days / 1 Night',
      price: '₹7,000',
      image: domesticImages.kerala.varkala,
      itinerary: [
        'Varkala Cliff & Beach', 'Kappil Beach', 'Lighthouse Beach Kovalam', 'Padmanabhaswamy Temple'
      ],
      rating: 4.6,
      category: 'domestic'
    },
    {
      id: 'kerala-kanthalur-marayoor',
      name: 'Kanthalur to Marayoor',
      duration: '2 Days / 1 Night',
      price: '₹4,000',
      image: domesticImages.kerala.munnar,
      itinerary: [
        'Kanthalur Farms', 'Sandalwood Forests', 'Marayoor Dolmens', 'Sugarcane Fields'
      ],
      rating: 4.5,
      category: 'domestic'
    },
    {
      id: 'kerala-kolukkumalai-kanthalur',
      name: 'Kolukkumalai to Kanthalur',
      duration: '2 Days / 1 Night',
      price: '₹5,000',
      image: domesticImages.kerala.munnar,
      itinerary: [
        'Kolukkumalai Sunrise', 'Jeep Safari', 'Tea Estate Visit', 'Kanthalur Fruit Farms'
      ],
      rating: 4.6,
      category: 'domestic'
    },
    {
      id: 'kerala-cochin-wonderla',
      name: 'Cochin Wonderla',
      duration: '2 Days / 1 Night',
      price: '₹5,000',
      image: domesticImages.kerala.munnar,
      itinerary: [
        'Kochi City Highlights', 'Wonderla Theme Park Full Day', 'Marine Drive'
      ],
      rating: 4.5,
      category: 'domestic'
    },
    {
      id: 'kerala-grand-tour-6d5n',
      name: 'Kerala Tour (Cochin → Vagamon → Munnar → Alleppey → Varkala)',
      duration: '6 Days / 5 Nights',
      price: '₹20,000',
      image: domesticImages.kerala.alleppey,
      itinerary: [
        'Cochin City Tour', 'Vagamon Meadows', 'Munnar Tea Gardens',
        'Alleppey Backwaters', 'Varkala Cliff & Beach'
      ],
      rating: 4.7,
      category: 'domestic'
    }
  ],
  karnataka: [
    {
      id: 'karnataka-bangalore-mysore',
      name: 'Bangalore - Mysore',
      duration: '2 Days / 1 Night',
      price: '₹12,500',
      image: domesticImages.karnataka.mysore,
      itinerary: [
        'Lalbagh Garden', 'Iskcon Temple', 'Visvesvaraya Museum',
        'Mysore Palace', 'Zoo', 'KRS Dam and Brindhavan Garden'
      ],
      rating: 4.5,
      category: 'domestic'
    },
    {
      id: 'karnataka-coorg-mysore',
      name: 'Coorg - Mysore - Bangalore',
      duration: '4 Days / 3 Nights',
      price: '₹21,500',
      image: domesticImages.karnataka.coorg,
      itinerary: [
        'Golden Temple', 'Dubare Forest', 'Kaveri Nisargadhama',
        'Mysore Palace', 'Zoo', 'KRS Dam', 'Lalbagh', 'Iskcon Temple',
        'Visvesvaraya Museum', 'Wonderla Theme Park'
      ],
      rating: 4.7,
      category: 'domestic'
    }
  ],
  tamilnadu: [
    {
      id: 'tamilnadu-ooty',
      name: 'Ooty Hill Station',
      duration: '2 Days / 1 Night',
      price: '₹15,000',
      image: domesticImages.tamilnadu.ooty,
      itinerary: [
        'Rose Garden', 'Botanical Garden', 'Dottabetta Peak',
        'Lake Boating', 'Pykara Falls', 'Pine Forest'
      ],
      rating: 4.6,
      category: 'domestic'
    },
    {
      id: 'tamilnadu-kodaikanal-madurai',
      name: 'Kodaikanal - Madurai',
      duration: '2 Days / 1 Night',
      price: '₹15,100',
      image: domesticImages.tamilnadu.kodaikanal,
      itinerary: [
        'Silver Cascade', 'Kurinji Andavar Temple', 'Green Valley View Point',
        'Guna Cave', 'Pillar Rock', 'Kodai Lake', 'Pine Forest',
        'Madurai Meenakshi Amman Temple', 'Thirumalai Nayakar Mahal'
      ],
      rating: 4.7,
      category: 'domestic'
    }
  ],
  goa: [
    {
      id: 'goa-package',
      name: 'Goa Beach Paradise',
      duration: '5 Days / 4 Nights',
      price: '₹20,000',
      image: domesticImages.goa.beach,
      itinerary: [
        'Aguada Fort', 'Baga Beach', 'Anjuna Beach', 'Chapora Fort',
        'Vagator Beach', 'St. Francis Xavier Church', 'Miramar',
        'Calangute Beach', 'Dona Paula', 'Colva Beach', 'River Cruise'
      ],
      rating: 4.8,
      category: 'domestic'
    }
  ],
  hyderabad: [
    {
      id: 'hyderabad-package',
      name: 'Hyderabad Heritage Tour',
      duration: '6 Days / 5 Nights',
      price: '₹28,000',
      image: domesticImages.hyderabad.charminar,
      itinerary: [
        'Golconda Fort', 'Birla Temple', 'Lumbini Park', 'Hussain Sagar Lake',
        'Charminar', 'Salarjung Museum', 'Nehru Zoological Park', 'Mecca Masjid',
        'NTR Gardens', 'Ramoji Rao Film City', 'Snow World', 'Wonderla Theme Park'
      ],
      rating: 4.6,
      category: 'domestic'
    }
  ],
  goldenTriangle: [
    {
      id: 'golden-triangle',
      name: 'Delhi - Agra - Jaipur',
      duration: '8 Days / 7 Nights',
      price: '₹45,000',
      image: domesticImages.goldenTriangle.tajMahal,
      itinerary: [
        'Tajmahal', 'Agra Fort', 'Fatehpur Sikri', 'Mathura',
        'Amber Fort', 'Jantar Mantar', 'City Palace', 'Jal Mahal',
        'Hawa Mahal', 'Red Fort', 'Birla Mandir', 'Lotus Temple',
        'Qutub Minar', 'Akshardham Temple', 'India Gate'
      ],
      rating: 4.9,
      category: 'domestic'
    }
  ]
};

export const internationalPackages = [
  {
    id: 'singapore',
    name: 'Singapore Paradise',
    duration: '5 Days / 4 Nights',
    price: '₹85,000',
    image: internationalImages.singapore,
    highlights: [
      'Gardens by the Bay', 'Jurong Bird Park', 'Night Safari',
      'Universal Studios', 'Sentosa Island', 'Merlion Park',
      'Singapore Flyer', 'City Tour'
    ],
    rating: 4.8,
    category: 'international'
  },
  {
    id: 'thailand',
    name: 'Thailand Adventure',
    duration: '7 Days / 6 Nights',
    price: '₹65,000',
    image: internationalImages.thailand,
    highlights: [
      'Bangkok City Tour', 'Safari World & Marine Park', 'Floating Market',
      'Pattaya Coral Island', 'Alcazar Cabaret Show', 'James Bond Island',
      'Phi Phi Island', 'Fantasea Show'
    ],
    rating: 4.7,
    category: 'international'
  },
  {
    id: 'dubai',
    name: 'Dubai Luxury',
    duration: '6 Days / 5 Nights',
    price: '₹75,000',
    image: internationalImages.dubai,
    highlights: [
      'Desert Safari', 'Dhow Cruise', 'Burj Khalifa', 'Miracle Garden',
      'Aquaventure Waterpark', 'Abu Dhabi City Tour', 'Ferrari World',
      'Dubai Aquarium & Underwater Zoo'
    ],
    rating: 4.9,
    category: 'international'
  },
  {
    id: 'malaysia',
    name: 'Malaysia Discovery',
    duration: '6 Days / 5 Nights',
    price: '₹55,000',
    image: internationalImages.malaysia,
    highlights: [
      'Petronas Towers', 'Kuala Lumpur Tower', 'Genting Highlands',
      'Batu Caves', 'Sunway Lagoon Theme Park', 'Putrajaya City Tour',
      'Langkawi Island'
    ],
    rating: 4.6,
    category: 'international'
  },
  {
    id: 'bali',
    name: 'Bali Romance',
    duration: '6 Days / 5 Nights',
    price: '₹70,000',
    image: internationalImages.bali,
    highlights: [
      'Ubud Monkey Forest', 'Tegallalang Rice Terraces', 'Ayung River Rafting',
      'Water Sport Activities', 'Tanah Lot Temple', 'Pandawa Beach',
      'Kecak and Fire Dance', 'Balinese Massage'
    ],
    rating: 4.8,
    category: 'honeymoon'
  }
];
