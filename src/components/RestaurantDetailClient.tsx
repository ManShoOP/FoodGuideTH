'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ChevronLeft,
  Sparkles,
  UtensilsCrossed,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import RestaurantCard from '@/components/RestaurantCard';
import { RestaurantItem } from '@/types';

interface DetailClientProps {
  initialRestaurant: any | null;
  slug: string;
  relatedRestaurants?: any[];
}

export default function RestaurantDetailClient({
  initialRestaurant,
  slug,
  relatedRestaurants = [],
}: DetailClientProps) {
  const [restaurant, setRestaurant] = useState<any | null>(initialRestaurant);
  const [loading, setLoading] = useState(!initialRestaurant);

  useEffect(() => {
    if (!initialRestaurant) {
      try {
        const saved = localStorage.getItem('foodguideth_custom_restaurants');
        if (saved) {
          const customList = JSON.parse(saved);
          if (Array.isArray(customList)) {
            // Match by slug or decoded slug
            const decodedSlug = decodeURIComponent(slug);
            const found = customList.find(
              (r: any) => r.slug === slug || r.slug === decodedSlug || encodeURIComponent(r.slug) === slug
            );
            if (found) {
              setRestaurant(found);
            }
          }
        }
      } catch (e) {
        console.error('Error reading custom restaurant:', e);
      } finally {
        setLoading(false);
      }
    }
  }, [initialRestaurant, slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-400">กำลังโหลดรายละเอียดร้านอาหาร...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="p-8 rounded-3xl bg-gray-900/60 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-2">ไม่พบร้านอาหารที่คุณต้องการ</h2>
          <p className="text-sm text-gray-400 mb-6">
            ร้านอาหารนี้อาจถูกลบออก หรือลิงก์ไม่ถูกต้อง
          </p>
          <Link
            href="/restaurants"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 text-gray-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>กลับไปหน้ารวมร้านอาหาร</span>
          </Link>
        </div>
      </div>
    );
  }

  // Parse arrays
  let images: string[] = [];
  try {
    images = typeof restaurant.images === 'string' ? JSON.parse(restaurant.images) : (restaurant.images || []);
  } catch {
    images = [restaurant.coverImage];
  }
  if (!images || images.length === 0) {
    images = [restaurant.coverImage || 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'];
  }

  let signatureDishes: string[] = [];
  try {
    signatureDishes = typeof restaurant.signatureDishes === 'string'
      ? (restaurant.signatureDishes.startsWith('[') ? JSON.parse(restaurant.signatureDishes) : restaurant.signatureDishes.split(','))
      : (restaurant.signatureDishes || []);
  } catch {
    signatureDishes = [];
  }

  let highlights: string[] = [];
  try {
    highlights = typeof restaurant.highlights === 'string'
      ? (restaurant.highlights.startsWith('[') ? JSON.parse(restaurant.highlights) : restaurant.highlights.split(','))
      : (restaurant.highlights || []);
  } catch {
    highlights = [];
  }

  const ratingNumber = Number(restaurant.rating) || 4.8;
  const reviewCount = restaurant.reviewCount || 1;
  const priceDisplay = restaurant.priceRange || '$$$$';
  const openingHours = restaurant.openingHours || 'ทุกวัน 11:00 - 22:00 น.';
  const phone = restaurant.phone || '037-xxx-xxx';
  const address = restaurant.address || 'จังหวัดนครนายก';
  const mapUrl = restaurant.googleMapUrl || `https://maps.google.com/?q=${encodeURIComponent(restaurant.name + ' นครนายก')}`;

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-[#0e1424] border-b border-gray-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            หน้าแรก
          </Link>
          <span>/</span>
          <Link href="/restaurants" className="hover:text-white transition-colors">
            ร้านอาหารทั้งหมด
          </Link>
          <span>/</span>
          <Link
            href={`/restaurants?zone=${encodeURIComponent(restaurant.zone || 'นครนายก')}`}
            className="hover:text-white transition-colors"
          >
            {restaurant.zone || 'นครนายก'}
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-medium truncate max-w-[200px]">
            {restaurant.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Back Link */}
        <Link
          href="/restaurants"
          className="inline-flex items-center space-x-1.5 text-xs text-gray-400 hover:text-amber-400 transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>กลับไปหน้ารวมร้านอาหาร</span>
        </Link>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Luxury Choice</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                {restaurant.category}
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>{restaurant.zone}, นครนายก</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {restaurant.name}
            </h1>

            <p className="text-base sm:text-lg text-amber-200/90 font-medium">
              {restaurant.tagline}
            </p>
          </div>

          {/* Quick Rating & Price Tag */}
          <div className="flex items-center lg:flex-col lg:items-end gap-3 shrink-0">
            <div className="flex items-center space-x-2 bg-gray-900 border border-amber-500/30 px-4 py-2 rounded-2xl shadow-lg">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <div>
                <span className="text-lg font-bold text-white">{ratingNumber.toFixed(1)}</span>
                <span className="text-xs text-gray-400 ml-1">/ 5.0 ({reviewCount} รีวิว)</span>
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
              ช่วงราคา: {priceDisplay}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-3xl overflow-hidden mb-12 shadow-2xl bg-gray-950">
          <div className="md:col-span-2 h-[350px] sm:h-[450px] relative overflow-hidden group">
            <img
              src={images[0] || restaurant.coverImage}
              alt={`${restaurant.name} นครนายก`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white">
              ภาพบรรยากาศหลัก
            </span>
          </div>

          <div className="hidden md:flex flex-col gap-4 h-[450px]">
            <div className="h-1/2 overflow-hidden relative group rounded-xl">
              <img
                src={images[1] || images[0] || restaurant.coverImage}
                alt={`${restaurant.name} เมนูอาหารและบรรยากาศ`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-1/2 overflow-hidden relative group rounded-xl">
              <img
                src={images[2] || images[0] || restaurant.coverImage}
                alt={`${restaurant.name} นครนายก`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Layout (Main + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Description Section */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>เกี่ยวกับ {restaurant.name}</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                {restaurant.description || restaurant.tagline}
              </p>
            </div>

            {/* Signature Dishes */}
            {signatureDishes.length > 0 && (
              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <UtensilsCrossed className="w-5 h-5 text-amber-400" />
                  <span>เมนูซิกเนเจอร์ที่ไม่ควรพลาด</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {signatureDishes.map((dish, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-gray-950/70 border border-amber-500/20 flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{dish}</h4>
                        <p className="text-xs text-gray-400 mt-1">สูตรเฉพาะรังสรรค์โดยเชฟประจำร้าน</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights & Amenities */}
            {highlights.length > 0 && (
              <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <span>จุดเด่นและสิ่งอำนวยความสะดวกระดับพรีเมียม</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-200 bg-gray-950/40 p-3 rounded-xl border border-gray-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar (Booking / Info / Maps) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-amber-500/40 rounded-3xl p-6 shadow-2xl sticky top-28 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">ข้อมูลการติดต่อ & สำรองที่นั่ง</h3>
                <p className="text-xs text-gray-400 mt-1">แนะนำให้โทรสำรองที่นั่งล่วงหน้าสำหรับโต๊ะวิวพิเศษ</p>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                
                {/* Telephone */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gray-950/60 border border-gray-800">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">เบอร์โทรศัพท์สำหรับจองโต๊ะ</span>
                    <a href={`tel:${phone}`} className="text-sm font-bold text-amber-300 hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gray-950/60 border border-gray-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">เวลาเปิดทำการ</span>
                    <span className="text-xs font-medium text-white">{openingHours}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gray-950/60 border border-gray-800">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 block text-[11px]">สถานที่ตั้ง</span>
                    <span className="text-xs text-gray-300 leading-relaxed">{address}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${phone}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-gray-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>โทรจองโต๊ะทันที ({phone})</span>
                </a>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs sm:text-sm border border-gray-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>เปิดแผนที่ Google Maps นำทาง</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>

              <div className="pt-2 border-t border-gray-800/80 text-[11px] text-center text-gray-500">
                ข้อมูลตรวจสอบและรับรองโดย FoodGuideTH นครนายก
              </div>
            </div>

          </div>

        </div>

        {/* Related Restaurants */}
        {relatedRestaurants.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="mb-8">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                ร้านอาหารแนะนำเพิ่มเติม
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                ร้านอาหารหรูในย่าน <span className="text-amber-400">{restaurant.zone}</span> และใกล้เคียง
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedRestaurants.map((rel) => (
                <RestaurantCard key={rel.id} restaurant={rel as unknown as RestaurantItem} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
