import React from 'react';
import Link from 'next/link';
import {
  Globe,
  CheckCircle2,
  Search,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Share2,
  FileCode,
  Terminal,
} from 'lucide-react';

export const metadata = {
  title: 'คู่มือการทำให้ชื่อเว็บ FoodGuideTH ค้นหาเจอบน Google ได้ทันที',
  description:
    'ขั้นตอนแบบ Step-by-Step ในการนำเว็บไซต์ขึ้นสู่อินเทอร์เน็ต และลงทะเบียนกับ Google Search Console เพื่อให้ค้นหาชื่อเว็บเจอบนหน้าค้นหาของ Google',
};

export default function SeoGuidePage() {
  const steps = [
    {
      step: '1',
      title: 'จดทะเบียนชื่อโดเมน (Domain Name)',
      desc: 'เพื่อให้ผู้ใช้สามารถพิมพ์ค้นหาชื่อเว็บ เช่น "FoodGuideTH" แล้ว Google ทราบทันทีว่าเป็นเว็บไซต์ทางการ',
      details: [
        'จดชื่อโดเมนที่ตรงกับแบรนด์ เช่น foodguideth.com หรือ foodguideth.in.th ผ่านผู้ให้บริการอย่าง Namecheap, GoDaddy หรือ Porkbun (ราคาเริ่มต้นประมาณ 300 - 450 บาท/ปี)',
        'หรือหากต้องการทดสอบฟรี สามารถใช้โดเมนฟรีของ Vercel เช่น foodguideth.vercel.app ได้ทันที โดย Google ก็สามารถค้นหาและ Index ได้เช่นกัน',
      ],
    },
    {
      step: '2',
      title: 'นำโปรเจกต์ขึ้นโฮสติ้ง (Deploy to Vercel)',
      desc: 'เนื่องจาก Googlebot จะเข้ามาเก็บข้อมูลได้ เว็บไซต์จะต้องออนไลน์อยู่บนอินเทอร์เน็ตตลอด 24 ชั่วโมงพร้อมระบบ HTTPS',
      details: [
        'สมัครสมาชิกที่ vercel.com (ฟรี 100%)',
        'เชื่อมต่อบัญชี GitHub ของคุณ แล้วเลือก Repository ของโปรเจกต์นี้',
        'กดปุ่ม "Deploy" ระบบจะ Build เว็บไซต์ Next.js ให้อัตโนมัติ พร้อมใบรับรองความปลอดภัย SSL (HTTPS) ใน 1 นาที',
      ],
    },
    {
      step: '3',
      title: 'ลงทะเบียนกับ Google Search Console (GSC)',
      desc: 'เครื่องมือทางการของ Google สำหรับส่งเว็บไซต์เข้าสู่สารบบการค้นหา',
      details: [
        'เข้าไปที่ search.google.com/search-console',
        'กด "เพิ่มพร็อพเพอร์ตี้ (Add Property)" แล้วใส่โดเมนหรือ URL ของเว็บไซต์',
        'ยืนยันความเป็นเจ้าของผ่านการใส่ DNS TXT Record หรือ HTML Tag ที่เราเตรียมช่องรองรับไว้ในโปรเจกต์',
      ],
    },
    {
      step: '4',
      title: 'ส่ง Sitemap.xml ให้ Googlebot เข้ามาสแกน',
      desc: 'โปรเจกต์นี้มีระบบสร้าง sitemap.xml อัตโนมัติที่เชื่อมต่อกับฐานข้อมูลร้านอาหารเรียบร้อยแล้ว',
      details: [
        'ในหน้าต่าง Google Search Console ให้ไปที่เมนู "แผนผังไซต์ (Sitemaps)"',
        'พิมพ์คำว่า "sitemap.xml" แล้วกดส่ง (Submit)',
        'Googlebot จะเข้ามาอ่านรายชื่อหน้าร้านอาหารทั้งหมดในนครนายก และนำไปประมวลผลทันที',
      ],
    },
    {
      step: '5',
      title: 'กด "ขอให้ทำดัชนี (Request Indexing)"',
      desc: 'เคล็ดลับเร่งด่วนที่สุดเพื่อให้ Google รู้จักเว็บภายใน 24 - 72 ชั่วโมง',
      details: [
        'ในช่องค้นหาด้านบนของ Google Search Console ให้พิมพ์ URL หน้าแรกของเว็บคุณ',
        'เมื่อระบบตรวจสอบเสร็จ ให้คลิกปุ่ม "ขอให้ทำดัชนี (Request Indexing)"',
        'บอทของ Google จะถูกจัดคิวส่งมาสำรวจเว็บไซต์และเริ่มแสดงผลชื่อ "FoodGuideTH" ในผลการค้นหาทันที',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Globe className="w-4 h-4 text-amber-400" />
          <span>คู่มือพิเศษ: การนำเว็บขึ้นสู่ Google Search</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          วิธีทำให้ค้นหาชื่อ <span className="gold-gradient-text">&quot;FoodGuideTH&quot;</span> <br />
          เจอบน Google ได้ทันที
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
          ในระบบเว็บไซต์นี้ เราได้เตรียมโครงสร้าง Technical SEO, Structured Data Schema.org, SSR, และ Sitemap ไว้อย่างสมบูรณ์แบบแล้ว
          นี่คือ 5 ขั้นตอนในการนำเว็บขึ้นออนไลน์เพื่อให้ทุกคนค้นหาชื่อเว็บเจอบน Google
        </p>
      </div>

      {/* Feature Checklist */}
      <div className="bg-gray-900/70 border border-amber-500/30 rounded-3xl p-6 sm:p-8 mb-14 shadow-2xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>สิ่งที่ตัวเว็บเตรียมพร้อมสำหรับ Google ไว้แล้ว 100%:</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-300">
          <div className="flex items-start space-x-2.5 bg-gray-950/60 p-3 rounded-xl border border-gray-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>SSR / Server Rendering:</strong> บอทอ่านภาษาไทยและชื่อเว็บได้ทันที</span>
          </div>
          <div className="flex items-start space-x-2.5 bg-gray-950/60 p-3 rounded-xl border border-gray-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Schema.org JSON-LD:</strong> แสดงดาวรีวิวและราคาร้านอาหารบน Google</span>
          </div>
          <div className="flex items-start space-x-2.5 bg-gray-950/60 p-3 rounded-xl border border-gray-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Dynamic Sitemap.xml:</strong> เชื่อมต่อฐานข้อมูล สร้างลิงก์อัตโนมัติ</span>
          </div>
          <div className="flex items-start space-x-2.5 bg-gray-950/60 p-3 rounded-xl border border-gray-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>OpenGraph & Meta Tags:</strong> แชร์ลง LINE / Facebook แสดงรูปพรีวิวหรูหรา</span>
          </div>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-8 mb-16">
        {steps.map((item) => (
          <div
            key={item.step}
            className="p-6 sm:p-8 rounded-3xl bg-gray-900/60 border border-gray-800 hover:border-amber-500/40 transition-colors shadow-lg"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
                {item.step}
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-amber-200/80 font-medium">{item.desc}</p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 list-disc list-inside pt-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus Pro Tips */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 to-gray-950 border border-amber-500/30 p-8 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <span>เคล็ดลับทางลัด: ค้นหาเจอบนหน้าแรก Google เร็วขึ้น 3 เท่า!</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
          Google จะจัดอันดับเว็บไซต์ใหม่ได้รวดเร็วอย่างก้าวกระโดด หากมีการค้นหาและคลิกเข้ามาจากแหล่งอื่น:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
          <div className="p-4 rounded-xl bg-gray-950 border border-gray-800">
            <strong className="text-amber-300 block mb-1">1. สร้างเพจ Facebook & TikTok</strong>
            ตั้งชื่อเพจว่า &quot;FoodGuideTH - แนะนำร้านอาหารหรู นครนายก&quot; พร้อมใส่ลิงก์เว็บไซต์ในช่อง Bio
          </div>
          <div className="p-4 rounded-xl bg-gray-950 border border-gray-800">
            <strong className="text-amber-300 block mb-1">2. แชร์ลิงก์หน้าร้านอาหาร</strong>
            นำลิงก์หน้าร้าน เช่น <code className="text-amber-400">/restaurants/the-river-whispers</code> ไปโพสต์แนะนำ
          </div>
          <div className="p-4 rounded-xl bg-gray-950 border border-gray-800">
            <strong className="text-amber-300 block mb-1">3. บอกเพื่อนๆ ค้นหาชื่อเว็บ</strong>
            ให้เพื่อนลองพิมพ์ค้นหา &quot;FoodGuideTH&quot; ใน Google แล้วกดคลิกเข้าชม จะช่วยส่งสัญญาณความนิยมให้บอท
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs sm:text-sm transition-colors"
          >
            <span>กลับสู่หน้าแรก FoodGuideTH</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
