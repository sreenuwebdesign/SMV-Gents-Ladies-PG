import { RoomPricing, AmenityItem, SummaryCardItem, FoodFeatureItem, GalleryItem } from '../types';

export const PG_CONTACT = {
  name: 'SMV Gents & Ladies PG',
  tagline: 'Comfortable, Clean & Secure Living in Kharadi, Pune',
  phone: '+91 84213 20056',
  phoneRaw: '918421320056',
  address: 'Lane No. 5, Near Borate Basti & Rakshak Nagar, Kharadi, Pune, Maharashtra 411014',
  area: 'Kharadi, Pune',
  mapDirectionsUrl: 'https://share.google/tKaV5O7FU9XRLhCq9',
  whatsappMessage: 'Hi, I am interested in SMV Gents & Ladies PG in Kharadi, Pune. Please share room availability, food details and other facilities.',
};

export const ROOMS_DATA: RoomPricing[] = [
  {
    id: 'single-occupancy',
    name: 'Single Occupancy',
    type: 'Private Room',
    monthlyRent: 18000,
    securityDeposit: 7000,
    image: '/images/cupboards-wardrobes.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious private room designed for working professionals seeking privacy, individual marble-finish cupboards, comfortable bedding, and attached washroom with geyser.',
    amenities: ['Cupboard', 'Attached Bathroom', 'Geyser', 'Bedding']
  },
  {
    id: 'double-sharing',
    name: 'Double Sharing',
    type: 'Twin Sharing Room',
    monthlyRent: 9000,
    securityDeposit: 5000,
    image: '/images/double-sharing-beds.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    description: 'Well-ventilated twin sharing room with designer cots, leatherette headboards, individual wardrobes with mirrors, nightstand, and attached bathroom with hot water geyser.',
    amenities: ['Cupboard', 'Attached Bathroom', 'Geyser', 'Bedding']
  }
];

export const COMMON_FACILITIES_LIST: string[] = [
  'Wi-Fi',
  'Room Cleaning Service',
  'Lift',
  'Refrigerator',
  'Water Cooler',
  'RO Water',
  'Food Available',
  'Meals Provided',
  'Veg & Non-Veg Meals',
  'Food Charges Included in Rent'
];

export const AMENITIES_SUMMARY: SummaryCardItem[] = [
  {
    id: 'sum-rooms',
    emoji: '🏠',
    title: 'Comfortable Rooms',
    subtitle: 'Single & Double Sharing'
  },
  {
    id: 'sum-wifi',
    emoji: '📶',
    title: 'Wi-Fi',
    subtitle: 'Stay connected'
  },
  {
    id: 'sum-clean',
    emoji: '🧹',
    title: 'Cleaning',
    subtitle: 'Room cleaning service'
  },
  {
    id: 'sum-lift',
    emoji: '🛗',
    title: 'Lift',
    subtitle: 'Lift facility available'
  },
  {
    id: 'sum-ro',
    emoji: '💧',
    title: 'RO Water',
    subtitle: 'Purified drinking water'
  },
  {
    id: 'sum-fridge',
    emoji: '❄',
    title: 'Refrigerator',
    subtitle: 'Refrigerator facility'
  },
  {
    id: 'sum-meals',
    emoji: '🍽',
    title: 'Meals',
    subtitle: 'Breakfast, Lunch & Dinner'
  },
  {
    id: 'sum-veg-nonveg',
    emoji: '🥗',
    title: 'Veg & Non-Veg',
    subtitle: 'Meal options available'
  },
  {
    id: 'sum-food-inc',
    emoji: '💰',
    title: 'Food Included',
    subtitle: 'Food charges included in rent',
    highlight: true
  }
];

export const COMMON_AREAS_AMENITIES: AmenityItem[] = [
  {
    id: 'wifi',
    name: 'Wi-Fi',
    description: 'Stay connected with reliable Wi-Fi',
    iconName: 'Wifi'
  },
  {
    id: 'cleaning',
    name: 'Room Cleaning Service',
    description: 'Regular room cleaning service',
    iconName: 'Sparkles'
  },
  {
    id: 'lift',
    name: 'Lift',
    description: 'Lift facility available',
    iconName: 'ArrowUpDown'
  },
  {
    id: 'fridge',
    name: 'Refrigerator',
    description: 'Refrigerator facility available',
    iconName: 'Refrigerator'
  },
  {
    id: 'cooler',
    name: 'Water Cooler',
    description: 'Drinking water facility',
    iconName: 'GlassWater'
  },
  {
    id: 'ro-water',
    name: 'RO Water',
    description: 'RO purified drinking water',
    iconName: 'Droplets'
  }
];

export const FOOD_KITCHEN_FEATURES: FoodFeatureItem[] = [
  {
    id: 'food-avail',
    title: 'Food Available',
    subtitle: 'Breakfast, Lunch & Dinner',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'meals-provided',
    title: 'Meals Provided',
    subtitle: 'Veg & Non-Veg Meals',
    iconName: 'Salad'
  },
  {
    id: 'kitchen-refrigerator',
    title: 'Refrigerator',
    subtitle: 'Refrigerator facility available',
    iconName: 'Refrigerator'
  },
  {
    id: 'food-charges',
    title: 'Food Charges',
    subtitle: 'Included in Rent',
    iconName: 'BadgePercent',
    isProminent: true
  }
];

export const EVERYTHING_FACILITIES = [
  { name: 'Single Occupancy', category: 'Room', icon: 'User' },
  { name: 'Double Sharing', category: 'Room', icon: 'Users' },
  { name: 'Attached Bathroom', category: 'Room', icon: 'Bath' },
  { name: 'Cupboard', category: 'Room', icon: 'Archive' },
  { name: 'Bedding', category: 'Room', icon: 'Bed' },
  { name: 'Geyser', category: 'Room', icon: 'Flame' },
  { name: 'Wi-Fi', category: 'Common', icon: 'Wifi' },
  { name: 'Room Cleaning Service', category: 'Common', icon: 'Sparkles' },
  { name: 'Lift', category: 'Common', icon: 'ArrowUpDown' },
  { name: 'Refrigerator', category: 'Common', icon: 'Refrigerator' },
  { name: 'Water Cooler', category: 'Common', icon: 'GlassWater' },
  { name: 'RO Water', category: 'Common', icon: 'Droplets' },
  { name: 'Food Available', category: 'Food', icon: 'Utensils' },
  { name: 'Breakfast', category: 'Food', icon: 'Coffee' },
  { name: 'Lunch', category: 'Food', icon: 'CookingPot' },
  { name: 'Dinner', category: 'Food', icon: 'Soup' },
  { name: 'Veg & Non-Veg Meals', category: 'Food', icon: 'Salad' },
  { name: 'Food Charges Included in Rent', category: 'Food', icon: 'CheckCircle2', isHighlight: true }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-beds',
    title: 'Twin Sharing Room Setup',
    category: 'rooms',
    tag: 'Double Sharing',
    image: '/images/double-sharing-beds.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80',
    description: 'Comfortable cots with marble-finish headboards, quality mattresses, and bedside storage nightstands'
  },
  {
    id: 'gal-wardrobes',
    title: 'Personal Cupboards with Mirrors',
    category: 'rooms',
    tag: 'Wardrobes & Storage',
    image: '/images/cupboards-wardrobes.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
    description: 'Tall multi-door marble-finish cupboards with full-length dressing mirrors and individual secure key locks'
  },
  {
    id: 'gal-room-view',
    title: 'Spacious Bedroom Layout & Natural Light',
    category: 'rooms',
    tag: 'Bedrooms',
    image: '/images/room-overview.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80',
    description: 'Clean vitrified flooring, large windows with privacy curtains, and abundant natural ventilation'
  },
  {
    id: 'gal-bathroom',
    title: 'Attached Bathroom with Faber Geyser',
    category: 'washrooms',
    tag: 'Attached Bathroom',
    image: '/images/bathroom-geyser.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    description: 'Tiled attached bathroom equipped with instant hot water Faber geyser, showerhead, and hygienic fittings'
  },
  {
    id: 'gal-dining',
    title: 'Dining Area & Daily Meals Hall',
    category: 'dining',
    tag: 'Breakfast, Lunch & Dinner',
    image: '/images/dining-hall.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    description: 'Spacious dining space with solid granite table, designer false ceiling lighting, and hygienic meal service'
  },
  {
    id: 'gal-lift',
    title: 'Stainless Steel Passenger Lift',
    category: 'facilities',
    tag: 'Lift Facility',
    image: '/images/lift-elevator.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    description: 'High-speed automatic stainless steel elevator with marble surround serving all residential floors'
  },
  {
    id: 'gal-foyer',
    title: 'Lift Foyer & Chandelier Entrance',
    category: 'facilities',
    tag: 'Common Areas',
    image: '/images/lift-foyer.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    description: 'Elegantly lit entrance foyer featuring ceiling crystal chandelier and polished marble wall cladding'
  },
  {
    id: 'gal-ro-wifi',
    title: 'Aqua RO Purified Water & Wi-Fi Station',
    category: 'facilities',
    tag: 'RO Water & Wi-Fi',
    image: '/images/ro-water-wifi.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=900&q=80',
    description: 'Continuous supply of RO purified drinking water and centralized high-speed Wi-Fi router setup'
  },
  {
    id: 'gal-building',
    title: '5-Storey Modern Building Facade',
    category: 'facilities',
    tag: 'Building Exterior',
    image: '/images/building-exterior.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    description: 'Standalone five-floor residential PG building with security grill balconies and prime neighborhood connectivity'
  },
  {
    id: 'gal-gate',
    title: 'Main Security Entrance Gate',
    category: 'facilities',
    tag: 'Safety & Security',
    image: '/images/entrance-gate.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description: 'Designer ornamental security gate with ramp access for easy two-wheeler parking and secure premises'
  }
];

export const NEARBY_LANDMARKS = [
  { name: 'EON Free Zone / IT Park', distance: '1.2 km (4 mins)', type: 'Tech Park' },
  { name: 'World Trade Center (WTC) Pune', distance: '1.5 km (5 mins)', type: 'Tech Park' },
  { name: 'Zensar Technologies Kharadi', distance: '1.8 km (6 mins)', type: 'IT Hub' },
  { name: 'Kharadi Bypass & Nagar Road', distance: '1.0 km (3 mins)', type: 'Transit' },
  { name: 'Pune International Airport', distance: '8.5 km (20 mins)', type: 'Airport' },
  { name: 'Viman Nagar / Phoenix Marketcity', distance: '4.5 km (12 mins)', type: 'Shopping & Leisure' }
];
