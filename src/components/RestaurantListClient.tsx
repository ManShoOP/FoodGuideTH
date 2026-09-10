'use client';

import React, { useState, useEffect } from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import { RestaurantItem } from '@/types';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface RestaurantListClientProps {
  initialRestaurants: RestaurantItem[];
  searchQuery?: string;
  selectedZone?: string;
  selectedCategory?: string;
  selectedPrice?: string;
}

export default function RestaurantListClient({
  initialRestaurants,
  searchQuery = '',
  selectedZone = '',
  selectedCategory = '',
  selectedPrice = '',
}: RestaurantListClientProps) {
  const [restaurants, setRestaurants] = useState<RestaurantItem[]>(initialRestaurants);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('foodguideth_custom_restaurants');
      if (saved) {
        const customList: RestaurantItem[] = JSON.parse(saved);
        if (Array.isArray(customList) && customList.length > 0) {
          // Combine custom restaurants (first) and initial ones
          const existingSlugs = new Set(customList.map((c) => c.slug));
          const filteredInitial = initialRestaurants.filter((r) => !existingSlugs.has(r.slug));
          setRestaurants([...customList, ...filteredInitial]);
        }
      }
    } catch (e) {
      console.error('Error reading custom restaurants from localStorage:', e);
    }
  }, [initialRestaurants]);

  // Filter list based on props
  const filtered = restaurants.filter((rest) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = rest.name.toLowerCase().includes(q);
      const matchDesc = rest.description?.toLowerCase().includes(q);
      const matchTagline = rest.tagline?.toLowerCase().includes(q);
      const matchCat = rest.category?.toLowerCase().includes(q);
      const matchZone = rest.zone?.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchTagline && !matchCat && !matchZone) {
        return false;
      }
    }

    if (selectedZone && rest.zone !== selectedZone) {
      return false;
    }

    if (selectedCategory && !rest.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }

    if (selectedPrice && !rest.priceRange.includes(selectedPrice)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between text-sm text-gray-400">
        <p>
          พบร้านอาหารหรู <span className="text-amber-400 font-bold">{filtered.length}</span> ร้าน
        </p>
        <span className="text-xs text-gray-500">เรียงตามคะแนนรีวิวสูงสุด</span>
      </div>

      {/* Grid or Empty State */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id || restaurant.slug} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">ไม่พบร้านอาหารที่ตรงกับเงื่อนไข</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            ลองปรับเปลี่ยนคำค้นหา หรือเลือกย่านและหมวดหมู่อื่นในจังหวัดนครนายก
          </p>
          <Link
            href="/restaurants"
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-gray-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
          >
            ดูร้านอาหารทั้งหมด
          </Link>
        </div>
      )}
    </div>
  );
}
