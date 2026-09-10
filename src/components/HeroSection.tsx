'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, MapPin, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/restaurants?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/restaurants');
    }
  };

  const zones = [
    { label: 'เขื่อนขุนด่าน', query: 'เขื่อนขุนด่าน' },
    { label: 'ริมแม่น้ำนครนายก', query: 'ริมแม่น้ำนครนายก' },
    { label: 'สาริกา', query: 'สาริกา' },
    { label: 'นางรอง', query: 'นางรอง' },
    { label: 'บ้านนา', query: 'บ้านนา' },
  ];

  return (
    <div className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-gray-800/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FoodGuideTH • คัดสรรเฉพาะร้านระดับพรีเมียมในนครนายก</span>
        </div>

        {/* Main H1 Headline for Google SEO */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          แนะนำร้านอาหารหรู <br />
          <span className="gold-gradient-text">บรรยากาศพรีเมียม นครนายก</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          สัมผัสสุนทรีย์แห่งรสชาติ ดินเนอร์สุดโรแมนติกริมสายน้ำ และวิวเขาพาโนรามาเหนือเขื่อนขุนด่าน คัดสรรสำหรับโอกาสพิเศษและการพักผ่อนระดับเวิลด์คลาส
        </p>

        {/* Search Bar Form */}
        <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center bg-gray-900/90 border border-amber-500/30 rounded-2xl p-2 shadow-2xl focus-within:border-amber-400 transition-colors">
            <div className="pl-3 pr-2 text-amber-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาตามชื่อร้าน, ประเภทอาหาร เช่น สเต็ก, ไวน์, ริมน้ำ..."
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none px-2 py-2"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-gray-950 font-semibold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center space-x-1"
            >
              <span>ค้นหา</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </button>
          </div>
        </form>

        {/* Quick Zone Filter Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-gray-400 flex items-center space-x-1 mr-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>ย่านแนะนำ:</span>
          </span>
          {zones.map((zone) => (
            <Link
              key={zone.query}
              href={`/restaurants?zone=${encodeURIComponent(zone.query)}`}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
            >
              {zone.label}
            </Link>
          ))}
        </div>

        {/* Feature Highlights Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-gray-800/80">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Verified Luxury 100%</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-300">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>พิกัดนครนายก คัดเน้นๆ</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-2 text-xs text-gray-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Schema SEO มาตรฐาน Google</span>
          </div>
        </div>

      </div>
    </div>
  );
}
