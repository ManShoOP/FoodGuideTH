export interface RestaurantItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  zone: string;
  address: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  phone: string;
  openingHours: string;
  coverImage: string;
  images: string[];
  signatureDishes: string[];
  highlights: string[];
  googleMapUrl: string;
  isFeatured: boolean;
  isLuxury: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface ZoneItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  restaurantCount?: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}
