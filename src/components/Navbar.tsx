'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Compass, PlusCircle, Search, Menu, X, Sparkles, Globe } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Luxury Accent */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[2px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0d121f] rounded-[10px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-2xl font-bold tracking-tight text-white font-sans">
                  FoodGuide<span className="text-amber-400">TH</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30 font-medium">
                  LUXURY
                </span>
              </div>
              <p className="text-xs text-gray-400 hidden sm:block tracking-wide">
                คู่มือร้านอาหารหรู & บรรยากาศพรีเมียม นครนายก
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors"
            >
              หน้าแรก
            </Link>
            <Link
              href="/restaurants"
              className="px-3 py-2 text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors flex items-center space-x-1"
            >
              <Compass className="w-4 h-4" />
              <span>ร้านทั้งหมด</span>
            </Link>
            <Link
              href="/restaurants?zone=เขื่อนขุนด่าน"
              className="px-3 py-2 text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors"
            >
              เขื่อนขุนด่าน
            </Link>
            <Link
              href="/restaurants?zone=ริมแม่น้ำนครนายก"
              className="px-3 py-2 text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors"
            >
              ริมแม่น้ำ
            </Link>
            <Link
              href="/restaurants?zone=สาริกา"
              className="px-3 py-2 text-sm text-gray-300 hover:text-amber-400 font-medium transition-colors"
            >
              สาริกา
            </Link>
            <Link
              href="/seo-guide"
              className="px-3 py-2 text-sm text-amber-300/90 hover:text-amber-300 font-medium transition-colors flex items-center space-x-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>วิธีขึ้น Google</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/restaurants"
              className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-gray-900 border border-gray-800 hover:border-amber-500/40 transition-colors"
              title="ค้นหาร้านอาหาร"
            >
              <Search className="w-4 h-4" />
            </Link>

            <Link
              href="/admin"
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-gray-950" />
              <span>+ เพิ่มร้านอาหาร</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/admin"
              className="p-2 rounded-lg text-amber-400 bg-amber-400/10 border border-amber-400/30"
              title="เพิ่มร้านอาหาร"
            >
              <PlusCircle className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="เปิดเมนูนำทาง"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1424] border-b border-gray-800 px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-amber-400"
          >
            หน้าแรก
          </Link>
          <Link
            href="/restaurants"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-amber-400"
          >
            ร้านอาหารหรูทั้งหมด (นครนายก)
          </Link>
          <div className="pt-2 pb-1 border-t border-gray-800/80">
            <p className="px-3 text-xs uppercase tracking-wider text-amber-400/80 font-semibold mb-1">
              ย่านยอดนิยมในนครนายก
            </p>
            <Link
              href="/restaurants?zone=เขื่อนขุนด่าน"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
            >
              • วิวเขื่อนขุนด่านปราการชล
            </Link>
            <Link
              href="/restaurants?zone=ริมแม่น้ำนครนายก"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
            >
              • ดินเนอร์ริมแม่น้ำนครนายก
            </Link>
            <Link
              href="/restaurants?zone=สาริกา"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
            >
              • หุบเขาน้ำตกสาริกา
            </Link>
            <Link
              href="/restaurants?zone=นางรอง"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
            >
              • ลำธารธรรมชาติน้ำตกนางรอง
            </Link>
            <Link
              href="/restaurants?zone=บ้านนา"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
            >
              • เรือนไทย & Chef's Table บ้านนา
            </Link>
          </div>
          <div className="pt-2 border-t border-gray-800/80 flex flex-col space-y-2">
            <Link
              href="/seo-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-sm font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30"
            >
              <Globe className="w-4 h-4" />
              <span>วิธีทำให้ค้นหา FoodGuideTH บน Google เจอ</span>
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-sm font-semibold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ เพิ่มร้านอาหารใหม่เข้าสู่ Database</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
