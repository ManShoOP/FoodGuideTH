import React from 'react';
import Link from 'next/link';
import { Crown, Heart, MapPin, Search, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070a11] border-t border-gray-800/80 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Crown className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                FoodGuide<span className="text-amber-400">TH</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              แพลตฟอร์มคัดสรรและแนะนำร้านอาหารหรู ดินเนอร์ริมน้ำ คาเฟ่พรีเมียม และ Chef's Table ระดับไฟน์ไดนิ่ง ในจังหวัดนครนายก เพื่อช่วงเวลาสุดพิเศษของคุณ
            </p>
            <div className="flex items-center space-x-2 text-xs text-amber-400/90 pt-1">
              <Sparkles className="w-4 h-4" />
              <span>SEO Optimized for Google Search</span>
            </div>
          </div>

          {/* Col 2: ย่านยอดนิยม นครนายก (SEO Anchors) */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-800 pb-2 flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>ย่านยอดนิยม นครนายก</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/restaurants?zone=เขื่อนขุนด่าน" className="hover:text-amber-400 transition-colors">
                  ร้านอาหารหรู วิวเขื่อนขุนด่านปราการชล
                </Link>
              </li>
              <li>
                <Link href="/restaurants?zone=ริมแม่น้ำนครนายก" className="hover:text-amber-400 transition-colors">
                  ร้านอาหารดินเนอร์ริมแม่น้ำนครนายก
                </Link>
              </li>
              <li>
                <Link href="/restaurants?zone=สาริกา" className="hover:text-amber-400 transition-colors">
                  ร้านอาหาร & คาเฟ่หรู น้ำตกสาริกา
                </Link>
              </li>
              <li>
                <Link href="/restaurants?zone=นางรอง" className="hover:text-amber-400 transition-colors">
                  ร้านอาหารริมธารธรรมชาติน้ำตกนางรอง
                </Link>
              </li>
              <li>
                <Link href="/restaurants?zone=บ้านนา" className="hover:text-amber-400 transition-colors">
                  Private Table & สำรับชาววัง อำเภอบ้านนา
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: หมวดหมู่อาหารหรู (Categories) */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              ประเภทร้านอาหารยอดนิยม
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/restaurants?category=Fine Dining" className="hover:text-amber-400 transition-colors">
                  Fine Dining & Wine Lounge
                </Link>
              </li>
              <li>
                <Link href="/restaurants?category=Riverside Luxury" className="hover:text-amber-400 transition-colors">
                  Riverside Dining บรรยากาศริมน้ำ
                </Link>
              </li>
              <li>
                <Link href="/restaurants?category=Steakhouse" className="hover:text-amber-400 transition-colors">
                  สเต็กเนื้อดรายเอจ & Rooftop Sunset
                </Link>
              </li>
              <li>
                <Link href="/restaurants?category=Royal Thai" className="hover:text-amber-400 transition-colors">
                  อาหารไทยชาววัง & Chef's Table
                </Link>
              </li>
              <li>
                <Link href="/restaurants?category=High Tea" className="hover:text-amber-400 transition-colors">
                  English High Tea & European Bistro
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: ระบบค้นหาบน Google (Google Indexing) */}
          <div className="space-y-3">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4 border-b border-gray-800 pb-2">
              การค้นหาบน Google
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              เมื่อเปิดเว็บออนไลน์จริง สามารถค้นหาคำว่า:
            </p>
            <div className="p-3 bg-gray-900/90 rounded-xl border border-amber-500/20 text-xs text-amber-300 font-mono">
              &quot;FoodGuideTH&quot;
              <br />
              &quot;ร้านอาหารหรู นครนายก FoodGuideTH&quot;
            </div>
            <Link
              href="/seo-guide"
              className="inline-flex items-center space-x-1 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <span>อ่านคู่มือวิธีนำเว็บขึ้นสู่ Google Search</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} FoodGuideTH. All rights reserved. ศูนย์รวมร้านอาหารหรูนครนายก</p>
          <div className="flex items-center space-x-6">
            <Link href="/sitemap.xml" className="hover:text-gray-400" target="_blank">
              Sitemap.xml
            </Link>
            <Link href="/robots.txt" className="hover:text-gray-400" target="_blank">
              Robots.txt
            </Link>
            <Link href="/admin" className="hover:text-amber-400 text-amber-500/80">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
