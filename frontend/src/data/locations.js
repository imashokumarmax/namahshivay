// Office locations for NCR Dream Homes

export const offices = [
  {
    id: 1,
    name: 'Noida Office (i-Thum Tower)',
    address: 'C-520, 5th Floor, i-Thum Tower',
    area: 'Sector-62, Noida - 201301',
    state: 'Uttar Pradesh',
    phone: '8287873037',
    email: 'ncr.dreamhomes@gmail.com',
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
    phone: '8287873037',
    email: 'ncr.dreamhomes@gmail.com',
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
    phone: '8287873037',
    email: 'ncr.dreamhomes@gmail.com',
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
  },
  {
    type: 'Residential Flats',
    locations: ['Noida Sector 137', 'Ghaziabad Indirapuram', 'Greater Noida Alpha', 'Noida Extension'],
    priceRange: '₹40 Lacs - ₹2 Cr',
    popular: true
  },
  {
    type: 'Commercial Offices',
    locations: ['Noida Sector 62', 'Noida Sector 132', 'Greater Noida Techzone', 'Ghaziabad Vaishali'],
    priceRange: '₹50 Lacs - ₹5 Cr',
    popular: false
  },
  {
    type: 'Commercial Buildings',
    locations: ['Noida Sector 18', 'Greater Noida Pari Chowk', 'Ghaziabad Crossing Republik'],
    priceRange: '₹10 Cr - ₹50 Cr',
    popular: false
  }
];
