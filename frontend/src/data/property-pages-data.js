// Property Pages Data - SEO Content for all pages
// Each entry includes banner, gallery, highlights, amenities, connectivity & FAQ for a rich, attractive page.

const IMG = {
  // Villas / Luxury Houses
  villa1: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  villa2: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
  villa3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  villa4: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
  // Flats / Apartments
  flat1: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
  flat2: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
  flat3: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  flat4: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80',
  // Plots / Land
  plot1: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  plot2: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80',
  plot3: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
  plot4: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1600&q=80',
  // Farmhouses
  farm1: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  farm2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  farm3: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1600&q=80',
  farm4: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
  // Skyline / City
  city1: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  city2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  city3: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
};

const commonAmenities = [
  'Clubhouse & Swimming Pool',
  'Landscaped Gardens',
  'Gymnasium & Yoga Zone',
  '24x7 Security with CCTV',
  'Power Backup',
  'Children’s Play Area',
  'Sports Courts',
  'Jogging & Cycling Track'
];

const plotAmenities = [
  'Wide Internal Roads (9m–18m)',
  'Underground Electrification',
  'Water & Sewerage Lines',
  'Landscaped Green Belts',
  '24x7 Gated Security',
  'Community Clubhouse',
  'Rainwater Harvesting',
  'Street Lighting'
];

const farmAmenities = [
  'Fully Fenced Boundary',
  'Swimming Pool Ready',
  'Organic Farming Zones',
  'Private Lawns & Orchards',
  'Water Bore & Tank',
  'Gated Community Security',
  'Driveway & Car Parking',
  'Landscaped Gardens'
];

export const propertyPagesData = {
  /* ---------------- GENERAL PROPERTY PAGES ---------------- */
  'greater-noida-property': {
    title: 'Buy Residential Plots in Greater Noida | Luxury Villas & Flats in Gaur City | NCR-DreamHomes Realestate',
    metaDescription: 'Unlock opportunities in Greater Noida! Explore authority plots, luxury villas, flats in Gaur City and commercial properties for sale at NCR-DreamHomes.com.',
    keywords: 'Buy Residential Plots Greater Noida, Authority Plots Greater Noida, Luxury Villas Gaur City, Flats Gaur City, Commercial Land Greater Noida',
    breadcrumb: 'Properties in Greater Noida',
    badge: 'Greater Noida • Authority Approved',
    heroTitle: 'Premium Properties in',
    heroLocation: 'Greater Noida',
    heroDescription: 'NCR Dream Homes presents authority-approved residential plots, luxury villas in Gaur City and 2/3/4 BHK flats in Greater Noida — the fastest growing real-estate hub of Delhi-NCR.',
    priceFrom: '₹ 45 Lakh onwards',
    bannerImage: IMG.city1,
    gallery: [IMG.villa1, IMG.flat1, IMG.plot1, IMG.villa2],
    amenities: commonAmenities,
    connectivity: [
      '5 mins from Pari Chowk & Alpha Metro',
      '10 mins from Knowledge Park',
      '20 mins from Noida Sector 18',
      '30 mins from Noida International Airport, Jewar',
      'Direct access to Yamuna & Noida-Greater Noida Expressway'
    ],
    highlights: [
      'GNIDA / YEIDA Authority Approved',
      'Freehold with Clear Title',
      'Registry Ready & Loan Approved',
      'Home-Loan by SBI, HDFC, ICICI, LIC HFL',
      '100% Legal Documentation Support',
      'Best Price Guarantee by NCR Dream Homes'
    ],
    content: {
      intro: 'NCR Dream Homes is your trusted partner to buy residential plots, luxury villas and premium flats in Greater Noida. With rapid infrastructure upgrades, the Aqua Line Metro, Film City at Yamuna Expressway and proximity to the upcoming Noida International Airport at Jewar, Greater Noida is one of the most future-ready real-estate destinations in India. Whether you are looking for authority plots, ready-to-move apartments in Gaur City or farm-land on the Yamuna Expressway, NCR Dream Homes offers hand-picked, verified inventory at the best market price.',
      features: [
        'Authority Approved Plots in Greater Noida',
        'Commercial Property for Sale Greater Noida',
        'Luxury 2/3/4/5 BHK Flats in Gaur City',
        'Premium Farmhouse Land Greater Noida',
        'Independent House/Villa Greater Noida',
        'Best ROI Guaranteed by NCR Dream Homes'
      ]
    },
    faqs: [
      { q: 'Are the plots in Greater Noida authority approved?', a: 'Yes. All plots listed by NCR Dream Homes in Greater Noida are GNIDA / YEIDA authority approved with clear titles and registry-ready documentation.' },
      { q: 'What is the price of a 2 BHK flat in Gaur City?', a: 'Luxury 2 BHK flats in Gaur City and Greater Noida start from ₹ 45 Lakh onwards depending on tower, floor and view.' },
      { q: 'How far is Jewar Airport from Greater Noida?', a: 'Noida International Airport at Jewar is approx. 30–35 minutes from Greater Noida via the Yamuna Expressway.' }
    ]
  },

  'noida-property': {
    title: 'Buy Residential Land in Noida | Premium Villas & Luxury Flats in Noida Extension | NCR-DreamHomes',
    metaDescription: 'Discover luxury apartments, villas and authority plots in Noida & Noida Extension. Buy 2/3/4/5 BHK flats at NCR-DreamHomes.com — your dream home awaits.',
    keywords: 'Residential Land Noida, Residential Plots Noida, Authority Plots Noida, Luxury Villas Noida Extension, 3 BHK Flats Noida',
    breadcrumb: 'Properties in Noida',
    badge: 'Noida • Prime Location',
    heroTitle: 'Luxury Properties in',
    heroLocation: 'Noida',
    heroDescription: 'NCR Dream Homes presents premium residential land, villas and 2/3/4/5 BHK luxury flats in Noida & Noida Extension — with unmatched connectivity to Delhi, Greater Noida and Jewar Airport.',
    priceFrom: '₹ 55 Lakh onwards',
    bannerImage: IMG.flat1,
    gallery: [IMG.flat1, IMG.villa1, IMG.flat2, IMG.plot2],
    amenities: commonAmenities,
    connectivity: [
      'Direct Metro (Blue & Aqua Line)',
      '15 mins from South Delhi',
      '10 mins from DND Flyway',
      '20 mins from Greater Noida',
      '45 mins from Noida International Airport, Jewar'
    ],
    highlights: [
      'Noida Authority & RERA Approved',
      'Ready-to-Move & Under-Construction Options',
      'Clear Title, Registry-Ready',
      'Home Loan Approved Projects',
      'Premium Gated Societies',
      'Best Appreciation in NCR'
    ],
    content: {
      intro: 'NCR Dream Homes offers the widest collection of residential land, authority plots and luxury 2/3/4/5 BHK flats in Noida and Noida Extension. Noida has emerged as the most preferred real-estate destination in NCR thanks to the expressway, metro connectivity, world-class social infrastructure and proximity to upcoming Jewar Airport. Our property specialists help you compare, shortlist and buy verified properties in Noida from reputed developers at transparent prices.',
      features: [
        'Authority Approved Plots in Noida',
        'Luxury 2/3/4/5 BHK Flats Noida Extension',
        'Premium Independent House/Villas Noida',
        'Farmhouse Land Noida Extension',
        'Best Connectivity to Delhi-NCR',
        'Affordable Property Options by NCR Dream Homes'
      ]
    },
    faqs: [
      { q: 'Which sectors are the best to buy property in Noida?', a: 'Sectors 150, 143, 137, 128, 93 and Noida Extension are among the most preferred by NCR Dream Homes customers for ROI and lifestyle.' },
      { q: 'Is RERA registration necessary?', a: 'Yes. Every project listed by NCR Dream Homes in Noida is RERA-registered and legally verified.' }
    ]
  },

  'greater-noida-west-property': {
    title: 'Premium Properties in Greater Noida West | Residential Plots & Flats Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy residential plots, 2/3 BHK flats and luxury villas in Greater Noida West. Invest in Noida Extension premium properties with NCR Dream Homes.',
    keywords: 'Greater Noida West Property, Residential Plots Greater Noida West, Flats Noida Extension, Villas Greater Noida West',
    breadcrumb: 'Properties in Greater Noida West',
    badge: 'Greater Noida West • Metro Connected',
    heroTitle: 'Premium Properties in',
    heroLocation: 'Greater Noida West',
    heroDescription: 'NCR Dream Homes brings you the best residential plots, luxury flats and villas in Greater Noida West (Noida Extension) — perfectly connected by Aqua-line Metro & NH-24.',
    priceFrom: '₹ 38 Lakh onwards',
    bannerImage: IMG.city3,
    gallery: [IMG.flat3, IMG.villa4, IMG.plot2, IMG.flat2],
    amenities: commonAmenities,
    connectivity: [
      'Upcoming Metro Aqua-line Extension',
      '10 mins from Noida Sector 76',
      '20 mins from DND Flyway',
      '15 mins from Pari Chowk',
      '40 mins from Jewar Airport'
    ],
    highlights: [
      'GNIDA Authority Approved',
      'Ready-Possession & Under-Construction',
      'Gated Township Lifestyle',
      'RERA Verified Projects',
      'Affordable Luxury Starts ₹ 38L',
      'Family-Friendly Green Belts'
    ],
    content: {
      intro: 'NCR Dream Homes is the leading real-estate consultant in Greater Noida West (popularly known as Noida Extension) offering hand-picked residential plots, 2/3 BHK flats and luxury villas. Greater Noida West is currently witnessing massive infrastructure upgrades including the Aqua-line Metro extension, making it one of the fastest-appreciating micro-markets of NCR.',
      features: [
        'Residential Plots Greater Noida West',
        'Luxury Flats in Noida Extension',
        'Premium Farmhouse Greater Noida West',
        'Government Approved Projects',
        'Excellent Metro Connectivity',
        'Trust NCR Dream Homes for Best Deals'
      ]
    },
    faqs: [
      { q: 'Is metro available in Greater Noida West?', a: 'Yes. Aqua Line Metro is being extended to Greater Noida West with stations planned at every 1–1.5 km.' }
    ]
  },

  'ghaziabad-property': {
    title: 'Premium Villas & Flats in Indirapuram Ghaziabad | Luxury Apartment / Society | Buy 2/3/4/5 BHK Flats Ghaziabad | NCR-DreamHomes Realestate',
    metaDescription: 'Explore premium independent houses, villas and luxury apartments/societies for sale in Indirapuram Ghaziabad. Your dream property awaits at NCR-DreamHomes.com!',
    keywords: 'Villas Indirapuram Ghaziabad, Luxury Flats Ghaziabad, Independent House Ghaziabad, Premium Society Indirapuram, 2/3/4/5 BHK Flats Ghaziabad',
    breadcrumb: 'Properties in Ghaziabad',
    badge: 'Indirapuram • Premium Society',
    heroTitle: 'Luxury Villas & Flats in',
    heroLocation: 'Indirapuram, Ghaziabad',
    heroDescription: 'NCR Dream Homes offers premium independent villas and luxury 2/3/4/5 BHK apartments in Indirapuram Ghaziabad — the finest gated societies with world-class amenities.',
    priceFrom: '₹ 65 Lakh onwards',
    bannerImage: IMG.flat3,
    gallery: [IMG.villa1, IMG.flat2, IMG.villa4, IMG.flat4],
    amenities: commonAmenities,
    connectivity: [
      '5 mins from NH-24 / NH-9',
      '10 mins from Anand Vihar ISBT & Metro',
      '15 mins from East Delhi',
      '20 mins from Noida Sector 62',
      'Seamless Delhi-Meerut Expressway access'
    ],
    highlights: [
      'Indirapuram Premium Societies',
      'Ready-To-Move 2/3/4/5 BHK Flats',
      'Independent House & Villas',
      'RERA Approved Projects',
      'Gated Community with Clubhouse',
      'Best Price in Ghaziabad'
    ],
    content: {
      intro: 'NCR Dream Homes presents the finest luxury villas and premium 2/3/4/5 BHK apartments in Indirapuram Ghaziabad — a preferred destination for families looking for affordable luxury, green surroundings and world-class amenities. Our handpicked inventory includes ready-to-move flats, independent houses and new-launch societies from India’s leading developers.',
      features: [
        'Premium Villas Indirapuram Ghaziabad',
        'Luxury 2/3/4/5 BHK Apartments',
        'Independent House Ghaziabad',
        'Ready to Move Properties',
        'Best Location in Indirapuram',
        'Trusted by 1500+ Happy Families - NCR Dream Homes'
      ]
    },
    faqs: [
      { q: 'Which is the best society in Indirapuram?', a: 'Ahinsa Khand, Shakti Khand and Niti Khand have the most premium gated societies. NCR Dream Homes has verified inventory in all of them.' },
      { q: 'Are 4 BHK independent villas available in Ghaziabad?', a: 'Yes, NCR Dream Homes has a curated list of 4/5 BHK independent villas in Ghaziabad starting ₹ 1.5 Cr onwards.' }
    ]
  },

  'jewar-airport-property': {
    title: 'Buy Residential Land Near Jewar Airport | Premium Plots & Farmhouse at Yamuna Expressway | NCR-DreamHomes',
    metaDescription: 'Invest in residential land, plots and farmhouses near Jewar Airport at Yamuna Expressway. Premium plots near Noida International Airport — NCR-DreamHomes.com!',
    keywords: 'Jewar Airport Plots, Residential Land Jewar Airport, Farm House Jewar Airport, Yamuna Expressway Plots, Plots Near Noida Airport',
    breadcrumb: 'Properties Near Jewar Airport',
    badge: 'Jewar • Noida International Airport',
    heroTitle: 'Prime Properties Near',
    heroLocation: 'Jewar Airport (Noida International Airport)',
    heroDescription: 'NCR Dream Homes offers authority-approved residential plots, farmhouses and villas near Noida International Airport, Jewar on Yamuna Expressway — India’s highest-ROI real-estate zone.',
    priceFrom: '₹ 25 Lakh onwards',
    bannerImage: IMG.city2,
    gallery: [IMG.plot1, IMG.farm1, IMG.plot3, IMG.villa3],
    amenities: plotAmenities,
    connectivity: [
      '5–10 mins from Jewar Airport Terminal',
      'Direct Yamuna Expressway Access',
      '20 mins from YEIDA Film City',
      '30 mins from Greater Noida Pari Chowk',
      '60 mins from South Delhi'
    ],
    highlights: [
      'YEIDA Authority Approved',
      'Near Noida International Airport',
      'Film City Yamuna Expressway Zone',
      'Highest ROI in NCR',
      'Registry Ready Freehold Plots',
      'Bank-Approved, Loan-Friendly'
    ],
    content: {
      intro: 'NCR Dream Homes is the most trusted name for buying residential land, plots and farmhouses near Jewar Airport on the Yamuna Expressway. With the upcoming Noida International Airport, Film City, Data-Centre Park, Medical Device Park and Film City, the Jewar belt is expected to deliver 3x-5x appreciation over the next 5–7 years. All our plots are YEIDA-approved, freehold and registry-ready.',
      features: [
        'Authority Plots Near Jewar Airport',
        'Premium Farm House Jewar Airport',
        'Residential Land Yamuna Expressway',
        'Best ROI in NCR Region',
        'Airport Connectivity in 10 Minutes',
        'Government Approved by NCR Dream Homes'
      ]
    },
    faqs: [
      { q: 'When will Jewar Airport start operations?', a: 'Noida International Airport at Jewar is expected to be operational in 2026 with an initial capacity of 12 million passengers annually.' },
      { q: 'Why invest in plots near Jewar Airport?', a: 'Proximity to Asia’s largest greenfield airport, Film City, Yamuna Expressway, and YEIDA-approved townships make this the highest-appreciating zone in NCR.' }
    ]
  },

  /* ---------------- RESIDENTIAL PLOTS ---------------- */
  'greater-noida-residential-plots': {
    title: 'Residential Plots in Greater Noida | Buy GNIDA Authority Plots Greater Noida | NCR-DreamHomes Realestate',
    metaDescription: 'Buy GNIDA authority approved residential plots in Greater Noida. Freehold, registry-ready land at best prices with NCR-DreamHomes.com.',
    keywords: 'Residential Plots Greater Noida, Authority Plots Greater Noida, GNIDA Plots, Land Greater Noida, Buy Plots Greater Noida',
    breadcrumb: 'Residential Plots in Greater Noida',
    badge: 'GNIDA Approved • Freehold',
    heroTitle: 'Residential Plots in',
    heroLocation: 'Greater Noida',
    heroDescription: 'NCR Dream Homes offers GNIDA authority-approved residential plots in Greater Noida — freehold, clear-title and registry-ready with flexible payment plans.',
    priceFrom: '₹ 28 Lakh onwards',
    bannerImage: IMG.plot1,
    gallery: [IMG.plot1, IMG.plot2, IMG.plot3, IMG.plot4],
    amenities: plotAmenities,
    connectivity: [
      '5 mins from Pari Chowk',
      '10 mins from Knowledge Park Metro',
      '15 mins from Noida Extension',
      '25 mins from Noida Sector 18',
      '30 mins from Jewar Airport'
    ],
    highlights: [
      'GNIDA / YEIDA Approved Plots',
      'Sizes from 100 sq-yd to 1000 sq-yd',
      'Freehold & Registry Ready',
      'Bank Loan Approved',
      'Gated Plotted Townships',
      'Home Loan by SBI / HDFC / LIC'
    ],
    content: {
      intro: 'Buy authority-approved residential plots in Greater Noida from NCR Dream Homes. We offer GNIDA and YEIDA plots of 100–1000 sq-yd in gated, freehold plotted townships across Alpha, Beta, Gamma, Chi, Delta, Mu, Omega, Xu-II & Xu-III sectors. Every plot listed by NCR Dream Homes comes with clear title, authority approval and bank home-loan eligibility.',
      features: [
        'Government Approved Plots',
        'Clear Title & Registry Ready',
        'Premium Locations Greater Noida',
        'Best Price by NCR Dream Homes',
        'Flexible Payment Options',
        'High ROI Potential'
      ]
    },
    faqs: [
      { q: 'What plot sizes are available in Greater Noida?', a: 'NCR Dream Homes offers plots from 100 sq-yd up to 1000 sq-yd in multiple sectors of Greater Noida.' },
      { q: 'Can I get a home loan on Greater Noida plots?', a: 'Yes. All GNIDA / YEIDA plots listed by NCR Dream Homes are bank-approved for plot-purchase home loans.' }
    ]
  },

  'noida-residential-plots': {
    title: 'Residential Plots in Noida | Authority Plots Noida & Noida Extension | NCR-DreamHomes Realestate',
    metaDescription: 'Buy Noida Authority approved residential plots in Noida & Noida Extension at best prices. Registry-ready plots with NCR Dream Homes.',
    keywords: 'Residential Plots Noida, Authority Plots Noida, Buy Plots Noida, Land Noida Extension',
    breadcrumb: 'Residential Plots in Noida',
    badge: 'Noida Authority • Registry Ready',
    heroTitle: 'Residential Plots in',
    heroLocation: 'Noida',
    heroDescription: 'NCR Dream Homes offers Noida Authority approved residential plots and land in Noida & Noida Extension with excellent metro connectivity and infrastructure.',
    priceFrom: '₹ 85 Lakh onwards',
    bannerImage: IMG.plot2,
    gallery: [IMG.plot2, IMG.plot1, IMG.plot4, IMG.plot3],
    amenities: plotAmenities,
    connectivity: [
      'Direct Metro Blue Line',
      '10 mins from DND Flyway',
      '15 mins from Sector 18 Market',
      '20 mins from Greater Noida',
      '45 mins from Jewar Airport'
    ],
    highlights: [
      'Noida Authority Approved',
      'Premium Freehold Plots',
      'Residential & Group Housing Plots',
      'Clear Title & Registry Ready',
      'Home Loan Approved',
      'Highest Rental & Resale Demand'
    ],
    content: {
      intro: 'NCR Dream Homes is your trusted partner for buying Noida Authority approved residential plots. From 200 sq-yd independent plots to 1000+ sq-yd group housing plots, we help you discover verified inventory in Sector 150, 128, 93, 168 and Noida Extension.',
      features: [
        'Authority Approved Residential Plots',
        'Prime Locations in Noida',
        'Clear Title Documentation',
        'Registry Ready Plots',
        'Metro Connectivity',
        'Trusted by NCR Dream Homes Clients'
      ]
    },
    faqs: [
      { q: 'Are new plots being allotted by Noida Authority?', a: 'Yes — NCR Dream Homes assists clients with both resale and fresh authority allotment residential plots in Noida.' }
    ]
  },

  'greater-noida-west-residential-plots': {
    title: 'Residential Plots Greater Noida West | Authority Plots Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy residential plots in Greater Noida West (Noida Extension). GNIDA authority approved, registry-ready land at best prices with NCR Dream Homes.',
    keywords: 'Residential Plots Greater Noida West, Plots Noida Extension, Land Greater Noida West',
    breadcrumb: 'Residential Plots in Greater Noida West',
    badge: 'Noida Extension • GNIDA Approved',
    heroTitle: 'Residential Plots in',
    heroLocation: 'Greater Noida West',
    heroDescription: 'NCR Dream Homes offers authority-approved residential plots in Greater Noida West (Noida Extension) with metro connectivity and excellent appreciation.',
    priceFrom: '₹ 32 Lakh onwards',
    bannerImage: IMG.plot3,
    gallery: [IMG.plot3, IMG.plot1, IMG.plot2, IMG.plot4],
    amenities: plotAmenities,
    connectivity: [
      'Upcoming Aqua Metro Extension',
      '10 mins from Noida Sector 76',
      '15 mins from FNG Expressway',
      '20 mins from Noida Sector 18',
      '40 mins from Jewar Airport'
    ],
    highlights: [
      'GNIDA Authority Approved',
      'Gated Plotted Townships',
      'Metro Connected Zone',
      'Bank Home-Loan Approved',
      'Freehold & Registry Ready',
      'Fastest Appreciating Micro-Market'
    ],
    content: {
      intro: 'Buy residential plots in Greater Noida West from NCR Dream Homes. With the upcoming metro extension, FNG Expressway and proximity to Noida Sector 76, Greater Noida West plots are delivering strong appreciation. All plots are GNIDA approved, freehold and registry-ready.',
      features: [
        'Metro Connected Plots',
        'Authority Approved Land',
        'Modern Infrastructure',
        'Best Investment Option',
        'Clear Legal Documentation',
        'NCR Dream Homes Assured Quality'
      ]
    },
    faqs: [
      { q: 'What is the size range of plots in Greater Noida West?', a: 'Plots range from 100 sq-yd to 500 sq-yd in most gated townships. NCR Dream Homes has verified options in all sizes.' }
    ]
  },

  'ghaziabad-residential-plots': {
    title: 'Residential Plots in Ghaziabad | Authority Plots Indirapuram & Raj Nagar | NCR-DreamHomes',
    metaDescription: 'Buy GDA authority approved residential plots in Ghaziabad, Indirapuram, Raj Nagar Extension & Vaishali. Freehold, registry-ready plots with NCR Dream Homes.',
    keywords: 'Residential Plots Ghaziabad, Authority Plots Ghaziabad, GDA Plots, Plots Indirapuram, Plots Raj Nagar',
    breadcrumb: 'Residential Plots in Ghaziabad',
    badge: 'GDA Approved • Prime Location',
    heroTitle: 'Residential Plots in',
    heroLocation: 'Ghaziabad',
    heroDescription: 'NCR Dream Homes offers GDA authority approved residential plots in Ghaziabad — Indirapuram, Raj Nagar Extension, Vaishali and Crossings Republik.',
    priceFrom: '₹ 40 Lakh onwards',
    bannerImage: IMG.plot4,
    gallery: [IMG.plot4, IMG.plot2, IMG.plot1, IMG.plot3],
    amenities: plotAmenities,
    connectivity: [
      'Direct NH-9 / NH-24 Access',
      '10 mins from Anand Vihar Metro',
      '15 mins from East Delhi',
      '20 mins from Noida Sector 62',
      'Delhi-Meerut Expressway Connectivity'
    ],
    highlights: [
      'GDA Authority Approved',
      'Premium Locations (Indirapuram, Raj Nagar)',
      'Clear Title & Registry Ready',
      'Bank Home-Loan Eligible',
      'Gated Plotted Communities',
      'Excellent Delhi Connectivity'
    ],
    content: {
      intro: 'NCR Dream Homes offers the best residential plots in Ghaziabad with Ghaziabad Development Authority (GDA) approval, clear documentation and home-loan eligibility. Our featured locations include Indirapuram, Raj Nagar Extension, Vaishali, Crossings Republik and NH-24.',
      features: [
        'Authority Approved Plots Ghaziabad',
        'Excellent Delhi Connectivity',
        'Premium Locations',
        'Registry Ready',
        'Affordable Pricing',
        'NCR Dream Homes Trust & Quality'
      ]
    },
    faqs: [
      { q: 'Are plots available in Raj Nagar Extension?', a: 'Yes — NCR Dream Homes offers GDA-approved freehold plots in Raj Nagar Extension with clear titles.' }
    ]
  },

  'jewar-airport-residential-plots': {
    title: 'Residential Plots Near Jewar Airport | Buy Plots at Yamuna Expressway | NCR-DreamHomes',
    metaDescription: 'Buy YEIDA authority approved residential plots near Noida International Airport, Jewar at Yamuna Expressway. Highest ROI plots with NCR Dream Homes.',
    keywords: 'Residential Plots Jewar Airport, Plots Yamuna Expressway, Jewar Airport Land, Plots Near Noida Airport, Buy Plots Yamuna Expressway',
    breadcrumb: 'Residential Plots Near Jewar Airport',
    badge: 'YEIDA • Airport Zone',
    heroTitle: 'Residential Plots Near',
    heroLocation: 'Jewar Airport',
    heroDescription: 'NCR Dream Homes offers premium YEIDA-approved residential plots near Noida International Airport, Jewar on Yamuna Expressway — the highest-ROI investment in NCR.',
    priceFrom: '₹ 22 Lakh onwards',
    bannerImage: IMG.plot1,
    gallery: [IMG.plot1, IMG.city2, IMG.plot3, IMG.plot4],
    amenities: plotAmenities,
    connectivity: [
      '5–10 mins from Jewar Airport',
      'Direct Yamuna Expressway Access',
      '10 mins from YEIDA Film City',
      '30 mins from Pari Chowk',
      '60 mins from South Delhi'
    ],
    highlights: [
      'YEIDA Authority Approved',
      'Freehold, Registry Ready',
      'Near Film City Yamuna Expressway',
      '3X–5X Appreciation Potential',
      'Bank Home-Loan Eligible',
      'Airport Proximity Premium'
    ],
    content: {
      intro: 'Invest in residential plots near Jewar Airport at Yamuna Expressway with NCR Dream Homes. With India’s largest greenfield airport, Film City, Medical Device Park and Semiconductor Park all coming up in the same zone, these YEIDA-approved plots are delivering the highest ROI in NCR today.',
      features: [
        'Near Noida International Airport',
        'Yamuna Expressway Connectivity',
        'Authority Approved Plots',
        'Maximum ROI Potential',
        'Registry Ready Documentation',
        'NCR Dream Homes Premium Projects'
      ]
    },
    faqs: [
      { q: 'What size plots are available near Jewar Airport?', a: '100, 200, 300, 500 and 1000 sq-yd plots are available in YEIDA sectors. NCR Dream Homes offers all sizes.' },
      { q: 'What is the expected appreciation?', a: 'Analysts expect 3X–5X appreciation over 5–7 years post airport operationalisation in 2026.' }
    ]
  },

  /* ---------------- RESIDENTIAL FLATS ---------------- */
  'greater-noida-residential-flats': {
    title: 'Residential Flats Greater Noida | Luxury 2/3/4 BHK Flats in Gaur City | NCR-DreamHomes',
    metaDescription: 'Buy luxury 2/3/4 BHK residential flats and apartments in Greater Noida and Gaur City. Ready-to-move premium apartments with NCR Dream Homes.',
    keywords: '2BHK Flats Greater Noida, 3BHK Flats Greater Noida, Luxury Flats Gaur City, Apartments Greater Noida, Flats for Sale Gaur City',
    breadcrumb: 'Residential Flats in Greater Noida',
    badge: 'Gaur City • Luxury Apartments',
    heroTitle: 'Luxury Flats in',
    heroLocation: 'Greater Noida',
    heroDescription: 'NCR Dream Homes offers luxury 2/3/4 BHK flats and apartments in Greater Noida & Gaur City with premium amenities, gated security and metro connectivity.',
    priceFrom: '₹ 45 Lakh onwards',
    bannerImage: IMG.flat1,
    gallery: [IMG.flat1, IMG.flat2, IMG.flat3, IMG.flat4],
    amenities: commonAmenities,
    connectivity: [
      '5 mins from Aqua Metro',
      '10 mins from Pari Chowk',
      '15 mins from Knowledge Park',
      '25 mins from Noida Sector 18',
      '30 mins from Jewar Airport'
    ],
    highlights: [
      'Ready-to-Move 2/3/4 BHK Options',
      'Gaur City & Eco Village Projects',
      'RERA Approved Societies',
      'World-Class Amenities',
      'Home-Loan Approved',
      'Best Rental Yield'
    ],
    content: {
      intro: 'NCR Dream Homes presents the finest luxury 2/3/4 BHK flats and apartments in Greater Noida and Gaur City. Our partner projects include Gaur City, Eco Village, Gaursons Hi-Tech and other top developers offering premium amenities, clubhouses and excellent appreciation.',
      features: [
        'Luxury 2/3/4 BHK Flats',
        'Modern Amenities',
        'Metro Connectivity',
        'Ready to Move Options',
        'Gated Community',
        'NCR Dream Homes Premium Quality'
      ]
    },
    faqs: [
      { q: 'What is the price of a 3 BHK flat in Gaur City?', a: '3 BHK flats in Gaur City start from ₹ 75 Lakh onwards based on tower, size and view.' },
      { q: 'Are ready-to-move flats available?', a: 'Yes, NCR Dream Homes has an extensive inventory of ready-to-move flats across Greater Noida.' }
    ]
  },

  'noida-residential-flats': {
    title: 'Residential Flats Noida | Luxury 2/3/4 BHK Apartments Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy luxury 2/3/4 BHK flats and apartments in Noida & Noida Extension. Premium societies, ready-to-move options with NCR Dream Homes.',
    keywords: '2BHK Flats Noida, 3BHK Apartments Noida Extension, Luxury Flats Noida, 4 BHK Flats Noida, Apartments Noida',
    breadcrumb: 'Residential Flats in Noida',
    badge: 'Noida • Luxury Society',
    heroTitle: 'Luxury Flats in',
    heroLocation: 'Noida',
    heroDescription: 'NCR Dream Homes offers luxury 2/3/4 BHK apartments and flats in Noida and Noida Extension with premium amenities, metro connectivity and top developer quality.',
    priceFrom: '₹ 55 Lakh onwards',
    bannerImage: IMG.flat2,
    gallery: [IMG.flat2, IMG.flat1, IMG.flat4, IMG.flat3],
    amenities: commonAmenities,
    connectivity: [
      'Direct Metro Blue & Aqua Line',
      '10 mins from DND Flyway',
      '15 mins from South Delhi',
      '20 mins from Greater Noida',
      '45 mins from Jewar Airport'
    ],
    highlights: [
      'Ready-to-Move 2/3/4 BHK Flats',
      'Top Developer Projects',
      'RERA Registered',
      'Clubhouse & Pool',
      'Bank Home-Loan Approved',
      'Highest Rental Demand in NCR'
    ],
    content: {
      intro: 'Buy luxury flats in Noida from NCR Dream Homes. Our curated list includes 2/3/4 BHK apartments from top developers in Sector 150, 143, 137, 128, 93 and Noida Extension — all with RERA approval and bank-home-loan eligibility.',
      features: [
        '2/3/4 BHK Luxury Apartments',
        'Premium Amenities',
        'Excellent Metro Connectivity',
        'Ready to Move & Under Construction',
        'Best Price in Noida',
        'NCR Dream Homes Trusted Brand'
      ]
    },
    faqs: [
      { q: 'Which is the best sector to buy a flat in Noida?', a: 'Sector 150, 143, 137 and 128 are the most premium sectors for residential flats. NCR Dream Homes has verified inventory in all.' }
    ]
  },

  'greater-noida-west-residential-flats': {
    title: 'Residential Flats Greater Noida West | Affordable 2/3 BHK Flats Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy affordable luxury 2/3 BHK flats and apartments in Greater Noida West (Noida Extension). Metro-connected gated societies with NCR Dream Homes.',
    keywords: '2BHK Flats Greater Noida West, 3BHK Apartments Greater Noida West, Flats Noida Extension, Affordable Flats Noida Extension',
    breadcrumb: 'Residential Flats in Greater Noida West',
    badge: 'Noida Extension • Metro Connected',
    heroTitle: 'Luxury Flats in',
    heroLocation: 'Greater Noida West',
    heroDescription: 'NCR Dream Homes offers affordable luxury 2/3 BHK flats and apartments in Greater Noida West (Noida Extension) — with metro connectivity and family-friendly amenities.',
    priceFrom: '₹ 35 Lakh onwards',
    bannerImage: IMG.flat3,
    gallery: [IMG.flat3, IMG.flat1, IMG.flat2, IMG.villa4],
    amenities: commonAmenities,
    connectivity: [
      'Upcoming Aqua Metro Extension',
      '10 mins from Noida Sector 76',
      '15 mins from Fortis Hospital Noida',
      '20 mins from Sector 18',
      '40 mins from Jewar Airport'
    ],
    highlights: [
      'Affordable 2/3 BHK Starting ₹ 35L',
      'Ready-to-Move Options',
      'Metro Connected',
      'Clubhouse, Pool & Gym',
      'RERA Approved',
      'Best Rental Yield in NCR'
    ],
    content: {
      intro: 'NCR Dream Homes offers the best affordable luxury 2/3 BHK flats in Greater Noida West (Noida Extension). Our partner projects deliver premium amenities at attractive prices with upcoming metro connectivity.',
      features: [
        'Affordable 2/3 BHK Flats',
        'Metro Connected',
        'Modern Architecture',
        'Gated Society',
        'Best Investment Option',
        'NCR Dream Homes Quality Assured'
      ]
    },
    faqs: [
      { q: 'Are ready-to-move flats available in Greater Noida West?', a: 'Yes — NCR Dream Homes has 2/3 BHK ready-to-move flats starting ₹ 35L in Greater Noida West.' }
    ]
  },

  'ghaziabad-residential-flats': {
    title: 'Residential Flats Ghaziabad | Luxury 2/3/4/5 BHK Apartments Indirapuram | NCR-DreamHomes',
    metaDescription: 'Buy luxury 2/3/4/5 BHK flats and apartments in Indirapuram Ghaziabad. Premium societies in Ahinsa Khand, Niti Khand & Shakti Khand — NCR-DreamHomes.com.',
    keywords: 'Flats Indirapuram, Apartments Ghaziabad, 2BHK Flats Ghaziabad, 3 BHK Flats Indirapuram, Luxury Society Ghaziabad',
    breadcrumb: 'Residential Flats in Ghaziabad',
    badge: 'Indirapuram • Premium Society',
    heroTitle: 'Luxury Flats in',
    heroLocation: 'Indirapuram, Ghaziabad',
    heroDescription: 'NCR Dream Homes offers luxury 2/3/4/5 BHK residential flats and apartments in Indirapuram Ghaziabad — premium gated societies with world-class amenities.',
    priceFrom: '₹ 50 Lakh onwards',
    bannerImage: IMG.flat4,
    gallery: [IMG.flat4, IMG.flat2, IMG.flat1, IMG.flat3],
    amenities: commonAmenities,
    connectivity: [
      '5 mins from NH-9 / NH-24',
      '10 mins from Anand Vihar Metro',
      '15 mins from East Delhi',
      '20 mins from Noida Sector 62',
      'Delhi-Meerut Expressway Access'
    ],
    highlights: [
      'Premium Societies (Ahinsa Khand, Niti Khand)',
      'Ready-to-Move 2/3/4/5 BHK',
      'Clubhouse, Pool, Sports Zone',
      'RERA Approved',
      'Bank Home-Loan Eligible',
      'Best Price in Indirapuram'
    ],
    content: {
      intro: 'Buy luxury 2/3/4/5 BHK residential flats and apartments in Indirapuram Ghaziabad from NCR Dream Homes. Our inventory covers premium societies in Ahinsa Khand, Niti Khand, Shakti Khand and Vaibhav Khand — offering the finest gated-community lifestyle in NCR.',
      features: [
        'Luxury 2/3/4/5 BHK Apartments',
        'Premium Location Indirapuram',
        'World-Class Amenities',
        'Excellent Delhi Connectivity',
        'Ready to Move Options',
        'NCR Dream Homes Premium Projects'
      ]
    },
    faqs: [
      { q: 'Which is the best society in Indirapuram Ghaziabad?', a: 'Ahinsa Khand-2, Niti Khand-1 and Shakti Khand-3 have the most premium gated societies in Indirapuram.' }
    ]
  },

  'jewar-airport-residential-flats': {
    title: 'Residential Flats Near Jewar Airport | Apartments at Yamuna Expressway | NCR-DreamHomes',
    metaDescription: 'Buy luxury 2/3/4 BHK flats and apartments near Noida International Airport, Jewar at Yamuna Expressway. High-ROI airport-zone apartments — NCR Dream Homes.',
    keywords: 'Flats Jewar Airport, Apartments Yamuna Expressway, Jewar Airport Flats, 3 BHK Flats Yamuna Expressway',
    breadcrumb: 'Residential Flats Near Jewar Airport',
    badge: 'Yamuna Expressway • Airport Zone',
    heroTitle: 'Luxury Flats Near',
    heroLocation: 'Jewar Airport',
    heroDescription: 'NCR Dream Homes offers luxury 2/3/4 BHK flats and apartments near Noida International Airport, Jewar at Yamuna Expressway — best ROI airport-zone properties.',
    priceFrom: '₹ 42 Lakh onwards',
    bannerImage: IMG.flat4,
    gallery: [IMG.flat4, IMG.flat2, IMG.city2, IMG.flat1],
    amenities: commonAmenities,
    connectivity: [
      '15 mins from Jewar Airport',
      'Direct Yamuna Expressway',
      '20 mins from YEIDA Film City',
      '30 mins from Pari Chowk',
      '60 mins from South Delhi'
    ],
    highlights: [
      'Near Noida International Airport',
      '2/3/4 BHK Luxury Apartments',
      'YEIDA Approved Townships',
      'Highest ROI Airport Zone',
      'Clubhouse, Pool, Sports Zone',
      'Bank Home-Loan Eligible'
    ],
    content: {
      intro: 'Invest in residential flats near Jewar Airport with NCR Dream Homes. Our 2/3/4 BHK apartments at Yamuna Expressway are positioned within 15 mins of India’s upcoming largest greenfield airport, making them the highest appreciating apartments in NCR.',
      features: [
        'Near Noida International Airport',
        '2/3/4 BHK Options Available',
        'Modern Amenities',
        'High ROI Potential',
        'Yamuna Expressway Location',
        'NCR Dream Homes Premium Quality'
      ]
    },
    faqs: [
      { q: 'How far are these flats from Jewar Airport?', a: 'Most partner projects are located within 10–20 minutes of the Jewar Airport terminal via Yamuna Expressway.' }
    ]
  },

  /* ---------------- FARMHOUSES ---------------- */
  'greater-noida-farmhouse': {
    title: 'Farmhouse in Greater Noida | Buy Farm House Land Greater Noida | NCR-DreamHomes',
    metaDescription: 'Buy luxury farmhouses and farm house land in Greater Noida. Freehold, registry-ready farmland with NCR-DreamHomes.com.',
    keywords: 'Farmhouse Greater Noida, Farm House Land Greater Noida, Luxury Farmhouse, Buy Farm House Greater Noida',
    breadcrumb: 'Farmhouses in Greater Noida',
    badge: 'Farmhouse • Freehold Land',
    heroTitle: 'Luxury Farmhouses in',
    heroLocation: 'Greater Noida',
    heroDescription: 'NCR Dream Homes offers premium farmhouses and farm house land in Greater Noida — lush green, freehold and registry-ready plots starting 1000 sq-yd.',
    priceFrom: '₹ 75 Lakh onwards',
    bannerImage: IMG.farm1,
    gallery: [IMG.farm1, IMG.farm2, IMG.farm3, IMG.farm4],
    amenities: farmAmenities,
    connectivity: [
      '20 mins from Pari Chowk',
      '30 mins from Noida Sector 18',
      '30 mins from Jewar Airport',
      'Direct Yamuna Expressway Access',
      '60 mins from South Delhi'
    ],
    highlights: [
      '1000 sq-yd to 5 Acre Farmhouses',
      'Freehold & Registry Ready',
      'Water, Electricity & Boundary',
      'Swimming Pool Ready',
      'Gated Farmhouse Communities',
      'Ideal for Weekend Retreat'
    ],
    content: {
      intro: 'NCR Dream Homes presents luxury farmhouses in Greater Noida. Our farm house land plots of 1000 sq-yd to 5 acres are perfect for weekend homes, private retreats or long-term capital appreciation. Every plot is freehold, registry-ready and located in gated farm-house communities.',
      features: [
        'Luxury Farmhouse Plots',
        'Green Surroundings',
        'Modern Amenities',
        'Clear Legal Documentation',
        'Best Location Greater Noida',
        'NCR Dream Homes Premium Projects'
      ]
    },
    faqs: [
      { q: 'What is the minimum size of farm house land?', a: 'NCR Dream Homes offers farmhouse land starting from 1000 sq-yd in Greater Noida.' }
    ]
  },

  'noida-farmhouse': {
    title: 'Farmhouse in Noida | Buy Farm House Land Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy luxury farmhouses and farm house land in Noida & Noida Extension. Premium farmland with modern amenities — NCR Dream Homes.',
    keywords: 'Farmhouse Noida, Farm House Land Noida Extension, Luxury Farmhouse Noida, Buy Farm House Noida',
    breadcrumb: 'Farmhouses in Noida',
    badge: 'Noida • Luxury Farmland',
    heroTitle: 'Luxury Farmhouses in',
    heroLocation: 'Noida',
    heroDescription: 'NCR Dream Homes offers premium farmhouses and farm house land in Noida & Noida Extension — freehold, registry-ready weekend retreats.',
    priceFrom: '₹ 1.2 Crore onwards',
    bannerImage: IMG.farm2,
    gallery: [IMG.farm2, IMG.farm1, IMG.farm4, IMG.farm3],
    amenities: farmAmenities,
    connectivity: [
      '15 mins from Noida Sector 150',
      '20 mins from DND Flyway',
      '25 mins from South Delhi',
      '30 mins from Greater Noida',
      '45 mins from Jewar Airport'
    ],
    highlights: [
      'Premium Freehold Farmland',
      'Gated Farmhouse Community',
      'Pool, Lawn & Boundary Ready',
      '24x7 Security',
      'Clear Title Documentation',
      'Perfect Weekend Retreat'
    ],
    content: {
      intro: 'Buy luxury farmhouses in Noida from NCR Dream Homes. Our farm house land offers modern amenities, gated security and peaceful surroundings — perfect for weekend retreats and long-term investment in fast-appreciating farmland.',
      features: [
        'Premium Farmhouse Plots Noida',
        'Peaceful Environment',
        'Modern Infrastructure',
        'Excellent Connectivity',
        'Registry Ready',
        'NCR Dream Homes Trusted Quality'
      ]
    },
    faqs: [
      { q: 'Can I build a swimming pool on farmhouse land?', a: 'Yes — all NCR Dream Homes farm house plots are pool-ready with water and power infrastructure.' }
    ]
  },

  'greater-noida-west-farmhouse': {
    title: 'Farmhouse Greater Noida West | Farm House Land Noida Extension | NCR-DreamHomes',
    metaDescription: 'Buy premium farmhouses and farm house land in Greater Noida West (Noida Extension). Gated farmland with NCR Dream Homes.',
    keywords: 'Farmhouse Greater Noida West, Farm House Land Greater Noida West, Farmhouse Noida Extension',
    breadcrumb: 'Farmhouses in Greater Noida West',
    badge: 'Noida Extension • Gated Farmland',
    heroTitle: 'Luxury Farmhouses in',
    heroLocation: 'Greater Noida West',
    heroDescription: 'NCR Dream Homes offers luxury farmhouses and farm house plots in Greater Noida West (Noida Extension) — metro connected, freehold, and registry-ready.',
    priceFrom: '₹ 60 Lakh onwards',
    bannerImage: IMG.farm3,
    gallery: [IMG.farm3, IMG.farm4, IMG.farm1, IMG.farm2],
    amenities: farmAmenities,
    connectivity: [
      'Upcoming Metro Aqua Line',
      '15 mins from FNG Expressway',
      '20 mins from Noida Sector 76',
      '30 mins from Pari Chowk',
      '45 mins from Jewar Airport'
    ],
    highlights: [
      'Metro-Connected Farmhouse Zone',
      'Freehold & Registry Ready',
      'Pool, Lawn & Boundary Ready',
      'Private Gated Community',
      'Perfect Weekend Retreat',
      'High Appreciation Potential'
    ],
    content: {
      intro: 'NCR Dream Homes presents luxury farmhouses in Greater Noida West. Our farm house land combines convenience with tranquility — perfectly connected yet peaceful enough to be your weekend retreat.',
      features: [
        'Premium Farmhouse Plots',
        'Metro Connected Area',
        'Green Surroundings',
        'Modern Amenities',
        'Best Investment Option',
        'NCR Dream Homes Quality Assured'
      ]
    },
    faqs: [
      { q: 'Is there metro near the farmhouse plots?', a: 'Yes — Aqua Line metro extension will make Greater Noida West farmhouses highly accessible.' }
    ]
  },

  'ghaziabad-farmhouse': {
    title: 'Farmhouse in Ghaziabad | Buy Farm House Land Ghaziabad | NCR-DreamHomes',
    metaDescription: 'Buy luxury farmhouses and farm house land in Ghaziabad. Gated, freehold farmland with modern amenities — NCR Dream Homes.',
    keywords: 'Farmhouse Ghaziabad, Farm House Land Ghaziabad, Buy Farm House Ghaziabad',
    breadcrumb: 'Farmhouses in Ghaziabad',
    badge: 'Ghaziabad • Premium Farmland',
    heroTitle: 'Luxury Farmhouses in',
    heroLocation: 'Ghaziabad',
    heroDescription: 'NCR Dream Homes offers premium farmhouses and farm house land in Ghaziabad with excellent Delhi-Meerut Expressway connectivity.',
    priceFrom: '₹ 85 Lakh onwards',
    bannerImage: IMG.farm4,
    gallery: [IMG.farm4, IMG.farm1, IMG.farm3, IMG.farm2],
    amenities: farmAmenities,
    connectivity: [
      'Direct NH-9 / NH-24 Access',
      '15 mins from Anand Vihar',
      '25 mins from East Delhi',
      '30 mins from Noida',
      'Delhi-Meerut Expressway Access'
    ],
    highlights: [
      'Premium Freehold Farmland',
      'Delhi-Meerut Expressway Access',
      'Gated Farmhouse Community',
      'Pool, Lawn, Boundary Ready',
      'Clear Title Documentation',
      'Perfect Weekend Retreat'
    ],
    content: {
      intro: 'Buy luxury farmhouses in Ghaziabad from NCR Dream Homes. Our farm house land offers peaceful living with urban connectivity, thanks to NH-9, NH-24 and Delhi-Meerut Expressway.',
      features: [
        'Luxury Farmhouse Plots Ghaziabad',
        'Excellent Delhi Connectivity',
        'Peaceful Environment',
        'Modern Infrastructure',
        'Clear Legal Titles',
        'NCR Dream Homes Premium Quality'
      ]
    },
    faqs: [
      { q: 'Are Ghaziabad farmhouses good for weekend homes?', a: 'Absolutely — they are just 30 mins from East Delhi and connected via Delhi-Meerut Expressway.' }
    ]
  },

  'jewar-airport-farmhouse': {
    title: 'Farmhouse Near Jewar Airport | Buy Farm House Land at Yamuna Expressway | NCR-DreamHomes',
    metaDescription: 'Buy premium farmhouses and farm house land near Noida International Airport, Jewar at Yamuna Expressway. Highest ROI farmland — NCR Dream Homes.',
    keywords: 'Farmhouse Jewar Airport, Farm House Yamuna Expressway, Jewar Airport Farmhouse, Farm House Land Yamuna Expressway',
    breadcrumb: 'Farmhouses Near Jewar Airport',
    badge: 'Yamuna Expressway • Airport Zone',
    heroTitle: 'Luxury Farmhouses Near',
    heroLocation: 'Jewar Airport',
    heroDescription: 'NCR Dream Homes offers premium farmhouses and farm house land near Noida International Airport, Jewar on Yamuna Expressway — the highest appreciating farmland in NCR.',
    priceFrom: '₹ 50 Lakh onwards',
    bannerImage: IMG.farm2,
    gallery: [IMG.farm2, IMG.farm3, IMG.city2, IMG.farm4],
    amenities: farmAmenities,
    connectivity: [
      '10–15 mins from Jewar Airport',
      'Direct Yamuna Expressway',
      '15 mins from YEIDA Film City',
      '30 mins from Pari Chowk',
      '60 mins from South Delhi'
    ],
    highlights: [
      'Near Noida International Airport',
      'YEIDA-Zone Freehold Farmland',
      'Film City Yamuna Expressway',
      '3X–5X Appreciation Potential',
      'Pool, Lawn & Boundary Ready',
      'Clear Title Documentation'
    ],
    content: {
      intro: 'Invest in luxury farmhouses near Jewar Airport with NCR Dream Homes. Our farm house land on Yamuna Expressway is the most sought-after investment today — with Asia’s largest greenfield airport, Film City and YEIDA townships all coming up in the same zone.',
      features: [
        'Near Noida International Airport',
        'Yamuna Expressway Location',
        'Premium Farmhouse Plots',
        'High ROI Potential',
        'Modern Amenities',
        'NCR Dream Homes Assured Quality'
      ]
    },
    faqs: [
      { q: 'Why are Jewar farmhouses a good investment?', a: 'Proximity to the upcoming Noida International Airport, Film City and Yamuna Expressway makes Jewar farmhouses the highest-ROI farmland in NCR.' },
      { q: 'What size farmhouse land is available?', a: 'NCR Dream Homes offers 1000 sq-yd to 10-acre farmhouse plots near Jewar Airport.' }
    ]
  }
};
