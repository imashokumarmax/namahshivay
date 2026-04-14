// Mock data for NCR Dream Homes property listings

export const propertyCategories = [
  { id: 'residential-plots', name: 'Residential Plots', icon: 'MapPin' },
  { id: 'villas', name: 'Villas', icon: 'Home' },
  { id: 'farmhouses', name: 'Farmhouses', icon: 'Trees' },
  { id: 'flats', name: 'Residential Flats', icon: 'Building2' },
  { id: 'commercial-offices', name: 'Commercial Offices', icon: 'Briefcase' },
  { id: 'commercial-buildings', name: 'Commercial Buildings', icon: 'Building' }
];

export const locations = [
  'Noida',
  'Greater Noida',
  'Greater Noida West',
  'Ghaziabad',
  'Jewar Airport',
  'Yamuna Expressway',
  'Noida Extension'
];

export const mockProperties = [
  {
    id: 1,
    title: 'Premium Residential Plot in Sector 150',
    category: 'residential-plots',
    location: 'Noida',
    price: '₹85 Lacs',
    pricePerSqft: '₹42,500',
    area: '200 Sq. Yards',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1773215023063-e662ea91a69c',
    features: ['Corner Plot', 'Gated Society', 'Park Facing'],
    description: 'Prime residential plot in upcoming sector with all modern amenities'
  },
  {
    id: 2,
    title: 'Luxury 4BHK Villa in Greater Noida',
    category: 'villas',
    location: 'Greater Noida',
    price: '₹2.5 Cr',
    area: '3500 Sq. Ft.',
    bedrooms: 4,
    bathrooms: 4,
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff',
    features: ['Private Garden', 'Modular Kitchen', 'Swimming Pool'],
    description: 'Spacious luxury villa with modern architecture and premium fittings'
  },
  {
    id: 3,
    title: 'Exclusive Farmhouse in Chattarpur',
    category: 'farmhouses',
    location: 'Delhi',
    price: '₹8.5 Cr',
    area: '1 Acre',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1775686419026-d8fa900b67dd',
    features: ['Landscaped Garden', 'Servant Quarters', 'Borewell'],
    description: 'Sprawling farmhouse with lush greenery and peaceful surroundings'
  },
  {
    id: 4,
    title: '3BHK Ready to Move Flat in Sector 137',
    category: 'flats',
    location: 'Noida',
    price: '₹95 Lacs',
    area: '1450 Sq. Ft.',
    bedrooms: 3,
    bathrooms: 2,
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1564834552305-aea63611ff08',
    features: ['Metro Connectivity', 'Club House', 'Power Backup'],
    description: 'Fully furnished 3BHK apartment in prime location with metro access'
  },
  {
    id: 5,
    title: 'Commercial Office Space in Sector 62',
    category: 'commercial-offices',
    location: 'Noida',
    price: '₹1.2 Cr',
    area: '2000 Sq. Ft.',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a',
    features: ['IT Park', 'Cafeteria', '24x7 Security'],
    description: 'Premium office space in Grade A commercial building'
  },
  {
    id: 6,
    title: 'Spacious Villa for Rent in DLF Phase 3',
    category: 'villas',
    location: 'Gurugram',
    price: '₹1.5 Lac/month',
    area: '4000 Sq. Ft.',
    bedrooms: 5,
    bathrooms: 5,
    type: 'rent',
    image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5',
    features: ['Fully Furnished', 'Private Parking', 'Gym Access'],
    description: 'Luxurious 5BHK villa available for rent in premium location'
  },
  {
    id: 7,
    title: 'Commercial Plot in Sector 18',
    category: 'residential-plots',
    location: 'Noida',
    price: '₹15 Cr',
    pricePerSqft: '₹1.2 Lac',
    area: '1250 Sq. Yards',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1774697443203-0f54409d1613',
    features: ['Main Road', 'Commercial Zone', 'High ROI'],
    description: 'Prime commercial plot on main road with high footfall area'
  },
  {
    id: 8,
    title: 'Modern 2BHK Flat for Rent',
    category: 'flats',
    location: 'Greater Noida',
    price: '₹18,000/month',
    area: '1050 Sq. Ft.',
    bedrooms: 2,
    bathrooms: 2,
    type: 'rent',
    image: 'https://images.unsplash.com/photo-1565600444930-9761b1d1fc01',
    features: ['Semi Furnished', 'Parking', 'Lift'],
    description: 'Well-maintained 2BHK apartment in family-friendly society'
  },
  {
    id: 9,
    title: 'Heritage Farmhouse in Faridabad',
    category: 'farmhouses',
    location: 'Faridabad',
    price: '₹5.5 Cr',
    area: '8000 Sq. Yards',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1772126710017-94bb442ff549',
    features: ['Fruit Orchard', 'Water Body', 'Vintage Architecture'],
    description: 'Beautiful heritage farmhouse with traditional charm and modern amenities'
  },
  {
    id: 10,
    title: 'Premium Commercial Building',
    category: 'commercial-buildings',
    location: 'Noida',
    price: '₹25 Cr',
    area: '15000 Sq. Ft.',
    type: 'sale',
    image: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9',
    features: ['Multi Floor', 'Basement Parking', 'Prime Location'],
    description: 'Entire commercial building with multiple floors and premium location'
  },
  {
    id: 11,
    title: 'Designer Villa in Noida Extension',
    category: 'villas',
    location: 'Noida Extension',
    price: '₹1.8 Cr',
    area: '2800 Sq. Ft.',
    bedrooms: 4,
    bathrooms: 3,
    type: 'sale',
    image: 'https://images.pexels.com/photos/36466231/pexels-photo-36466231.jpeg',
    features: ['Contemporary Design', 'Smart Home', 'Terrace Garden'],
    description: 'Contemporary designed villa with smart home features'
  },
  {
    id: 12,
    title: 'Office Space for Rent in Cyber City',
    category: 'commercial-offices',
    location: 'Gurugram',
    price: '₹2.5 Lac/month',
    area: '3500 Sq. Ft.',
    type: 'rent',
    image: 'https://images.unsplash.com/photo-1580741753044-b3f303ad361b',
    features: ['Furnished', 'Conference Room', 'Parking'],
    description: 'Fully furnished office space in premium Cyber City location'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    location: 'Noida Sector 137',
    rating: 5,
    text: 'Found my dream home through NCR Dream Homes. The team was very professional and helped throughout the process.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 2,
    name: 'Priya Malhotra',
    location: 'Greater Noida',
    rating: 5,
    text: 'Excellent service! They helped me find the perfect plot for my villa. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 3,
    name: 'Amit Verma',
    location: 'Gurugram',
    rating: 5,
    text: 'Best real estate service in NCR. Professional team and genuine property listings.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  }
];

export const stats = [
  { label: 'Properties Listed', value: '500+' },
  { label: 'Happy Customers', value: '1200+' },
  { label: 'Cities Covered', value: '6' },
  { label: 'Years Experience', value: '10+' }
];
