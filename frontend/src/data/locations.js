// Office locations for NCR Dream Homes

export const offices = [
  {
    id: 1,
    name: 'Noida Office (i-Thum Tower)',
    address: 'C-520, 5th Floor, i-Thum Tower',
    area: 'Sector-62, Noida - 201301',
    state: 'Uttar Pradesh',
    phone: '8287673037',
    email: 'ashokumarmax@gmail.com',
    timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
    mapLink: 'https://maps.google.com/?q=i-Thum+Tower+Noida',
    isPrimary: true
  },
  {
    id: 2,
    name: 'Ghaziabad Office',
    address: '324, Ahinsha Khand 2, Indirapuram',
    area: 'Ghaziabad - 201012',
    state: 'Uttar Pradesh',
    phone: '8287673037',
    email: 'ashokumarmax@gmail.com',
    timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
    mapLink: 'https://maps.google.com/?q=Indirapuram+Ghaziabad',
    isPrimary: false
  },
  {
    id: 3,
    name: 'Noida Office (Logix Technova)',
    address: 'B-333, 3rd Floor, B-Block, Logix Technova Park',
    area: 'Sector 132, Noida',
    state: 'Uttar Pradesh',
    phone: '8287673037',
    email: 'ashokumarmax@gmail.com',
    timings: 'Mon-Sat: 9:00 AM - 7:00 PM',
    mapLink: 'https://maps.google.com/?q=Logix+Technova+Noida',
    isPrimary: false
  }
];

// Focus property locations with specific areas
export const focusLocations = {
  'Ghaziabad': [
    'Indirapuram',
    'Vaishali',
    'Vasundhara',
    'Crossings Republik',
    'Raj Nagar Extension',
    'Kaushambi',
    'Ahinsa Khand'
  ],
  'Noida': [
    'Sector 62',
    'Sector 137',
    'Sector 150',
    'Sector 18',
    'Sector 132',
    'Sector 52',
    'Sector 168'
  ],
  'Greater Noida': [
    'Alpha Sector',
    'Beta Sector',
    'Gamma Sector',
    'Pari Chowk',
    'Knowledge Park',
    'Techzone',
    'Sector 18',
    'Sector 24'
  ],
  'Greater Noida West': [
    'Sector 1',
    'Sector 16B',
    'Sector 16C',
    'Gaur City',
    'Sector 15-C (YEIDA)',
    'Sector 18 (YEIDA)',
    'Sector 24 (YEIDA)'
  ],
  'Jewar Airport': [
    'Yamuna Expressway',
    'Sector 15-C',
    'Sector 18',
    'Sector 24',
    'Dankaur',
    'Jewar',
    'Near Airport Terminal'
  ],
  'Noida Extension': [
    'Sector 1',
    'Sector 4',
    'Sector 10',
    'Gaur City 1',
    'Gaur City 2'
  ],
  'Yamuna Expressway': [
    'Sector 15',
    'Sector 18',
    'Sector 22D',
    'Near Film City',
    'Near Sports City'
  ]
};

// Property type focus areas
export const propertyTypeFocus = [
  {
    type: 'Residential Plots',
    locations: ['Jewar Airport', 'Greater Noida West', 'Yamuna Expressway', 'Noida Extension'],
    priceRange: '₹35,000 - ₹1,00,000 per sqft',
    popular: true
  },
  {
    type: 'Farmhouses',
    locations: ['Jewar Airport', 'Yamuna Expressway', 'Greater Noida', 'Dankaur'],
    priceRange: '₹2 Cr - ₹10 Cr',
    popular: true
  },
  {
    type: 'Villas',
    locations: ['Greater Noida', 'Noida Extension', 'Ghaziabad Indirapuram', 'Noida Sector 150'],
    priceRange: '₹1.5 Cr - ₹5 Cr',
    popular: true
  }
];

// Location-based property data for landing pages
export const locationProperties = {
  'noida': {
    displayName: 'Noida Properties',
    areas: ['Sector 62', 'Sector 137', 'Sector 150', 'Sector 132', 'Sector 18', 'Film City'],
    mainKeywords: [
      'Plots in Noida',
      'Residential Flats Noida',
      'Commercial Offices Noida',
      'Villas in Noida',
      'Farmhouse in Noida'
    ],
    description: 'Premium properties in Noida with metro connectivity, IT parks, and modern infrastructure'
  },
  'ghaziabad': {
    displayName: 'Ghaziabad Properties',
    areas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Crossings Republik', 'Raj Nagar Extension'],
    mainKeywords: [
      'Plots in Ghaziabad',
      'Residential Flats Ghaziabad',
      'Villas in Ghaziabad Indirapuram',
      'Builder Floor Indirapuram',
      'Commercial Property Ghaziabad'
    ],
    description: 'Affordable and premium properties in Ghaziabad with excellent connectivity'
  },
  'greater-noida': {
    displayName: 'Greater Noida Properties',
    areas: ['Alpha Sector', 'Beta Sector', 'Pari Chowk', 'Knowledge Park', 'Techzone'],
    mainKeywords: [
      'Plots in Greater Noida',
      'Residential Land Greater Noida',
      'Farmhouse Greater Noida',
      'Villas Greater Noida',
      'Authority Plots Greater Noida'
    ],
    description: 'YEIDA approved plots and premium properties in planned Greater Noida city'
  },
  'greater-noida-west': {
    displayName: 'Greater Noida West Properties',
    areas: ['Sector 1', 'Sector 16B', 'Gaur City', 'YEIDA Sector 15-C', 'YEIDA Sector 18'],
    mainKeywords: [
      'Plots Greater Noida West',
      'YEIDA Plots',
      'Affordable Flats Greater Noida West',
      'Residential Plots Greater Noida West',
      'Investment Property Greater Noida West'
    ],
    description: 'YEIDA approved plots and affordable housing in emerging Greater Noida West'
  },
  'jewar-airport': {
    displayName: 'Jewar Airport Properties',
    areas: ['Yamuna Expressway', 'Sector 18', 'Sector 24', 'Dankaur', 'Near Airport Terminal'],
    mainKeywords: [
      'Plots Near Jewar Airport',
      'Farmhouse Near Jewar Airport',
      'Investment Property Jewar Airport',
      'Authority Land Near Jewar Airport',
      'Residential Plots Near Airport',
      'Luxury Farmhouse Yamuna Expressway'
    ],
    description: 'High ROI investment properties near Noida International Airport Jewar'
  }
};
