'use client';

import React, { useState, useEffect } from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { RestaurantItem } from '@/types';

interface FeaturedProps {
  initialFeatured: RestaurantItem[];
}

export default function FeaturedRestaurantsClient({ initialFeatured }: FeaturedProps) {
  const [restaurants, setRestaurants] = useState<RestaurantItem[]>(initialFeatured);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('foodguideth_custom_restaurants');
      if (saved) {
        const customList: RestaurantItem[] = JSON.parse(saved);
        if (Array.isArray(customList) && customList.length > 0) {
          const existingSlugs = new Set(customList.map((c) => c.slug));
          const filteredInitial = initialFeatured.filter((r) => !existingSlugs.has(r.slug));
          setRestaurants([...customList, ...filteredInitial]);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [initialFeatured]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {restaurants.slice(0, 6).map((restaurant) => (
        <RestaurantCard key={restaurant.id || restaurant.slug} restaurant={restaurant} />
      ))}
    </div>
  );
}
