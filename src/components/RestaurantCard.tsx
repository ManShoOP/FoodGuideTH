import React from 'react';
import Link from 'next/link';
import { Star, MapPin, Sparkles, ArrowRight, Phone, Clock } from 'lucide-react';
import { RestaurantItem } from '@/types';

interface RestaurantCardProps {
  restaurant: RestaurantItem;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  let highlights: string[] = [];
  try {
    highlights = typeof restaurant.highlights === 'string'
      ? JSON.parse(restaurant.highlights)
      : (restaurant.highlights || []);
  } catch {
    highlights = [];
  }

  const ratingNumber = Number(restaurant.rating) || 4.8;
  const reviewCount = restaurant.reviewCount ?? 1;
  const priceDisplay = (restaurant.priceRange || '$$$$').split(' ')[0];
  const openingHoursDisplay = (restaurant.openingHours || '11:00 - 22:00 น.').split(' ')[0];

  return (
    <div className="group rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
      {/* Cover Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-950">
        <img
          src={restaurant.coverImage || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'}
          alt={`ร้านอาหารหรู ${restaurant.name} นครนายก`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-gray-950 shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>Luxury Pick</span>
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
            {restaurant.category}
          </span>
        </div>

        {/* Zone Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-black/70 backdrop-blur-md text-gray-200 border border-gray-700">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{restaurant.zone}</span>
          </span>
        </div>

        {/* Price & Rating Overlay at Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-white">{ratingNumber.toFixed(1)}</span>
            <span className="text-[11px] text-gray-400">({reviewCount})</span>
          </div>

          <div className="text-xs font-semibold text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-gray-700">
            {priceDisplay}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/restaurants/${restaurant.slug}`}>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
              {restaurant.name}
            </h3>
          </Link>
          <p className="mt-1.5 text-xs text-amber-200/80 font-medium line-clamp-1">
            {restaurant.tagline}
          </p>
          <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {restaurant.description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {highlights.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer info & Button */}
        <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span className="truncate max-w-[140px]">{openingHoursDisplay}</span>
          </div>

          <Link
            href={`/restaurants/${restaurant.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
          >
            <span>ดูรายละเอียด</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
