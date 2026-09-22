export interface RoomPricing {
  id: string;
  name: string;
  type: string;
  monthlyRent: number;
  securityDeposit: number;
  image: string;
  fallbackImage?: string;
  description: string;
  amenities: string[];
}

export interface AmenityItem {
  id: string;
  name: string;
  description?: string;
  iconName: string;
  badge?: string;
}

export interface SummaryCardItem {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
}

export interface FoodFeatureItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  isProminent?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'dining' | 'facilities' | 'washrooms';
  image: string;
  fallbackImage?: string;
  tag?: string;
  description: string;
}
