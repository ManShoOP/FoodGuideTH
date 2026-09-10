import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import HeroSection from '@/components/HeroSection';
import RestaurantCard from '@/components/RestaurantCard';
import { Sparkles, MapPin, Compass, Utensils, ArrowRight, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import { RestaurantItem } from '@/types';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  let restaurants: any[] = [];
  try {
    restaurants = await prisma.restaurant.findMany({
      orderBy: { rating: 'desc' },
    });
  } catch (error) {
    console.error('Database query error on homepage:', error);
  }

  const featured = restaurants.filter((r) => r.isFeatured).slice(0, 6);

  const zones = [
    {
      name: 'เขื่อนขุนด่านปราการชล',
      query: 'เขื่อนขุนด่าน',
      desc: 'วิวพาโนรามาเหนือสันเขื่อน พระอาทิตย์ตกดิน และอากาศบริสุทธิ์',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'ริมแม่น้ำนครนายก',
      query: 'ริมแม่น้ำนครนายก',
      desc: 'ดื่มด่ำดินเนอร์ใต้แสงเทียน สัมผัสไอเย็นของสายน้ำธรรมชาติ',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'สาริกา',
      query: 'สาริกา',
      desc: 'วิลล่าหรูและคาเฟ่สไตล์ยุโรป ท่ามกลางหุบเขาน้ำตกสาริกา',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'นางรอง',
      query: 'นางรอง',
      desc: 'ศาลาส่วนตัวติดธารน้ำใสธรรมชาติ สุนทรียภาพแห่งความสงบ',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'บ้านนา',
      query: 'บ้านนา',
      desc: 'สำรับชาววังโบราณในเรือนไทยประยุกต์ แบบ Private Dining',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Luxury Dining Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-800">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Editor's Luxury Picks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              ร้านอาหารหรูคัดสรรพิเศษ <span className="text-amber-400">นครนายก</span>
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              คัดเลือกโดย FoodGuideTH การันตีบรรยากาศ วัตถุดิบพรีเมียม และบริการระดับยอดเยี่ยม
            </p>
          </div>

          <Link
            href="/restaurants"
            className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>ดูร้านทั้งหมด ({restaurants.length} ร้าน)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant as unknown as RestaurantItem} />
          ))}
        </div>
      </section>

      {/* 3. Browse by Nakhon Nayok Zones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>ค้นหาตามทำเลยอดนิยม</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            สำรวจร้านอาหารหรู <span className="text-amber-400">ทุกมุมเมืองนครนายก</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            เลือกดื่มด่ำบรรยากาศในแบบที่คุณหลงรัก จากวิวเขื่อนตระการตาไปจนถึงสายน้ำตกอันร่มรื่น
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <Link
              key={zone.name}
              href={`/restaurants?zone=${encodeURIComponent(zone.query)}`}
              className="group relative h-64 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 shadow-xl transition-all duration-300"
            >
              <img
                src={zone.image}
                alt={`ร้านอาหารหรู โซน ${zone.name} นครนายก`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="text-[11px] font-semibold text-amber-300 tracking-wider uppercase">
                  นครนายก
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {zone.name}
                </h3>
                <p className="mt-1 text-xs text-gray-300 line-clamp-1 font-light">
                  {zone.desc}
                </p>
                <div className="mt-3 flex items-center text-xs text-amber-400 font-medium">
                  <span>สำรวจร้านในย่านนี้</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SEO Content & Brand Authority Section (Google Crawler Booster) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-gray-950 border border-amber-500/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold border border-amber-400/30">
                <Award className="w-4 h-4" />
                <span>FoodGuideTH นครนายก • The Definitive Luxury Guide</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                ยกระดับประสบการณ์ดินเนอร์ <br />
                <span className="gold-gradient-text">กับร้านอาหารระดับพรีเมียมในนครนายก</span>
              </h2>

              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  <strong>จังหวัดนครนายก</strong> ไม่ได้มีเพียงแหล่งท่องเที่ยวธรรมชาติ แต่ยังเป็นศูนย์รวมของห้องอาหารหรู (Fine Dining), ร้านสเต็กระดับเวิลด์คลาส, ร้านอาหารริมแม่น้ำนครนายกสุดโรแมนติก, รวมถึง Private Chef's Table ตำรับชาววังโบราณที่ต้องจองล่วงหน้า
                </p>
                <p>
                  <strong>FoodGuideTH</strong> ได้รับการพัฒนาขึ้นมาเพื่อตอบโจทย์ผู้ที่มองหาร้านอาหารสำหรับโอกาสพิเศษ เช่น วันครบรอบ ดินเนอร์ขอแต่งงาน งานเลี้ยงฉลองครอบครัว หรือการต้อนรับแขกคนสำคัญ ด้วยการคัดสรรร้านที่มีทั้งคุณภาพอาหาร การตกแต่งที่ประณีต และทัศนียภาพที่งดงามที่สุดในนครนายก
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/restaurants"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-gray-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all inline-flex items-center space-x-2"
                >
                  <span>สำรวจร้านอาหารหรูทั้งหมด</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/seo-guide"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-gray-800/80 hover:bg-gray-800 text-amber-300 border border-amber-500/30 transition-all inline-flex items-center space-x-2"
                >
                  <span>วิธีค้นหาชื่อ FoodGuideTH บน Google</span>
                </Link>
              </div>
            </div>

            {/* Right Feature Badges */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gray-950/80 border border-gray-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <h3 className="text-white text-sm font-bold">เรตติ้ง 4.7+ เท่านั้น</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  คัดเฉพาะร้านที่มีรีวิวยอดเยี่ยมจากนักชิมและสื่อชั้นนำ
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/80 border border-gray-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-white text-sm font-bold">วิวธรรมชาติระดับ Top</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  ริมน้ำตก ริมแม่น้ำ และจุดชมวิวเหนือเขื่อนขุนด่าน
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/80 border border-gray-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-white text-sm font-bold">วัตถุดิบชั้นสูง</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  เนื้อวากิวพรีเมียม ซีฟู้ดสดใหม่ และผักอินทรีย์ท้องถิ่น
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-950/80 border border-gray-800/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-white text-sm font-bold">ข้อมูลอัปเดตตลอดเวลา</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  เชื่อมต่อ Database SQLite/PostgreSQL เรียลไทม์
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
