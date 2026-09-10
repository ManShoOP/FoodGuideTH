import React from 'react';
import { prisma } from '@/lib/prisma';
import RestaurantCard from '@/components/RestaurantCard';
import RestaurantListClient from '@/components/RestaurantListClient';
import { RestaurantItem } from '@/types';
import { Search, MapPin, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

interface RestaurantsPageProps {
  searchParams: Promise<{
    q?: string;
    zone?: string;
    category?: string;
    price?: string;
  }>;
}

export const revalidate = 60;

export default async function RestaurantsPage({ searchParams }: RestaurantsPageProps) {
  const params = await searchParams;
  const q = params.q?.toLowerCase() || '';
  const selectedZone = params.zone || '';
  const selectedCategory = params.category || '';
  const selectedPrice = params.price || '';

  // Query all restaurants from Prisma Database
  let allRestaurants: any[] = [];
  try {
    allRestaurants = await prisma.restaurant.findMany({
      orderBy: { rating: 'desc' },
    });
  } catch (err) {
    console.error('Error fetching restaurants:', err);
  }

  if (!allRestaurants || allRestaurants.length === 0) {
    const { initialRestaurants } = await import('@/data/seedData');
    allRestaurants = initialRestaurants.map((r, idx) => ({ ...r, id: `seed-${idx}` }));
  }

  // Filter based on parameters
  const filteredRestaurants = allRestaurants.filter((rest) => {
    // Search query matching name, description, category, dishes, zone
    if (q) {
      const matchName = rest.name.toLowerCase().includes(q);
      const matchDesc = rest.description.toLowerCase().includes(q);
      const matchTagline = rest.tagline.toLowerCase().includes(q);
      const matchCat = rest.category.toLowerCase().includes(q);
      const matchZone = rest.zone.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchTagline && !matchCat && !matchZone) {
        return false;
      }
    }

    // Zone filter
    if (selectedZone && rest.zone !== selectedZone) {
      return false;
    }

    // Category filter
    if (selectedCategory && !rest.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }

    // Price filter
    if (selectedPrice && !rest.priceRange.includes(selectedPrice)) {
      return false;
    }

    return true;
  });

  const zones = ['เขื่อนขุนด่าน', 'ริมแม่น้ำนครนายก', 'สาริกา', 'นางรอง', 'บ้านนา'];
  const categories = [
    { label: 'Fine Dining & Wine', value: 'Fine Dining' },
    { label: 'Riverside Luxury', value: 'Riverside' },
    { label: 'Steakhouse & Rooftop', value: 'Steakhouse' },
    { label: 'Royal Thai Chef’s Table', value: 'Royal Thai' },
    { label: 'French Bistro & Tea', value: 'French' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>FoodGuideTH • นครนายก</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          ร้านอาหารหรูทั้งหมดใน <span className="text-amber-400">นครนายก</span>
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          ค้นหาและเลือกสำรองที่นั่งร้านอาหารบรรยากาศพรีเมียม วิวธรรมชาติ และรสชาติระดับเวิลด์คลาส
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 mb-10 shadow-lg">
        
        {/* Search Input */}
        <form method="GET" action="/restaurants" className="mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="ค้นหาชื่อร้าน หรือประเภทอาหาร เช่น สเต็ก, ไวน์, กุ้งแม่น้ำ..."
              className="w-full bg-gray-950 border border-gray-800 rounded-xl py-3 pl-12 pr-28 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {selectedZone && <input type="hidden" name="zone" value={selectedZone} />}
            {selectedCategory && <input type="hidden" name="category" value={selectedCategory} />}
            {selectedPrice && <input type="hidden" name="price" value={selectedPrice} />}
            <button
              type="submit"
              className="absolute right-2 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold text-xs transition-colors"
            >
              ค้นหา
            </button>
          </div>
        </form>

        {/* Filter Pills */}
        <div className="space-y-4">
          
          {/* Zone Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 font-medium mr-2 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>ย่านในนครนายก:</span>
            </span>
            <Link
              href="/restaurants"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !selectedZone
                  ? 'bg-amber-500 text-gray-950 font-semibold'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700'
              }`}
            >
              ทั้งหมด
            </Link>
            {zones.map((zone) => {
              const isActive = selectedZone === zone;
              return (
                <Link
                  key={zone}
                  href={`/restaurants?zone=${encodeURIComponent(zone)}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-gray-950 font-semibold shadow-md'
                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {zone}
                </Link>
              );
            })}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-800/60">
            <span className="text-xs text-gray-400 font-medium mr-2 flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>ประเภทร้าน:</span>
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <Link
                  key={cat.value}
                  href={`/restaurants?category=${encodeURIComponent(cat.value)}${selectedZone ? `&zone=${encodeURIComponent(selectedZone)}` : ''}`}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-500/50'
                      : 'bg-gray-950/60 text-gray-400 hover:text-white border border-gray-800'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>

        </div>

        {/* Reset Filter Button if active */}
        {(q || selectedZone || selectedCategory || selectedPrice) && (
          <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs">
            <span className="text-gray-400">
              กำลังแสดงผลการกรอง: {q && `คำค้น "${q}" `} {selectedZone && `ย่าน "${selectedZone}" `} {selectedCategory && `ประเภท "${selectedCategory}" `}
            </span>
            <Link
              href="/restaurants"
              className="text-amber-400 hover:underline font-medium"
            >
              ล้างตัวกรองทั้งหมด
            </Link>
          </div>
        )}

      </div>

      {/* Dynamic Client List with LocalStorage and Server Sync */}
      <RestaurantListClient
        initialRestaurants={filteredRestaurants as unknown as RestaurantItem[]}
        searchQuery={q}
        selectedZone={selectedZone}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
      />
    </div>
  );
}
