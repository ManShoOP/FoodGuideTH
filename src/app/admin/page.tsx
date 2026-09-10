'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Crown,
  PlusCircle,
  Trash2,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Building,
  Sparkles,
} from 'lucide-react';

export default function AdminPage() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Form State
  const [form, setForm] = useState({
    name: '',
    tagline: '',
    description: '',
    category: 'Fine Dining & Wine Lounge',
    zone: 'ริมแม่น้ำนครนายก',
    address: '',
    priceRange: '$$$$ (1,000 - 2,500+ บาท/ท่าน)',
    rating: '4.8',
    phone: '',
    openingHours: 'ทุกวัน 11:00 - 22:00 น.',
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    signatureDishes: '',
    highlights: 'วิวธรรมชาติ,ที่จอดรถ VIP,บริการไวน์ชั้นเลิศ',
    googleMapUrl: 'https://maps.google.com/?q=Nakhon+Nayok',
  });

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      let list: any[] = [];
      try {
        const res = await fetch('/api/restaurants');
        const data = await res.json();
        if (Array.isArray(data)) {
          list = data;
        }
      } catch (apiErr) {
        console.warn('API error, using localStorage fallback', apiErr);
      }

      // Also merge with localStorage custom additions
      if (typeof window !== 'undefined') {
        try {
          const saved = localStorage.getItem('foodguideth_custom_restaurants');
          if (saved) {
            const localList = JSON.parse(saved);
            if (Array.isArray(localList) && localList.length > 0) {
              const existingSlugs = new Set(list.map((s) => s.slug));
              const uniqueLocal = localList.filter((l: any) => !existingSlugs.has(l.slug));
              list = [...uniqueLocal, ...list];
            }
          }
        } catch (e) {
          console.error(e);
        }
      }

      setRestaurants(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch('/api/restaurants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok || data.id || data.name) {
        const savedItem = data.id ? data : {
          ...form,
          id: `custom-${Date.now()}`,
          slug: form.name.toLowerCase().replace(/[^a-z0-9ก-๙]+/g, '-') + '-' + Date.now().toString().slice(-4),
        };

        // Save to localStorage for immediate cross-page availability
        if (typeof window !== 'undefined') {
          try {
            const saved = localStorage.getItem('foodguideth_custom_restaurants');
            const currentList = saved ? JSON.parse(saved) : [];
            currentList.unshift(savedItem);
            localStorage.setItem('foodguideth_custom_restaurants', JSON.stringify(currentList));
          } catch (e) {
            console.error(e);
          }
        }

        setMessage({ text: `เพิ่มร้าน "${savedItem.name}" สำเร็จเรียบร้อย! ข้อมูลแสดงบนหน้าเว็บทันที`, type: 'success' });
        // Reset basic fields
        setForm({
          ...form,
          name: '',
          tagline: '',
          description: '',
          address: '',
          signatureDishes: '',
        });
        fetchRestaurants();
      } else {
        setMessage({ text: data.error || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล', type: 'error' });
      }
    } catch (err) {
      // Offline / network fallback: still save to localStorage
      const fallbackItem = {
        ...form,
        id: `custom-${Date.now()}`,
        slug: form.name.toLowerCase().replace(/[^a-z0-9ก-๙]+/g, '-') + '-' + Date.now().toString().slice(-4),
      };
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('foodguideth_custom_restaurants');
        const currentList = saved ? JSON.parse(saved) : [];
        currentList.unshift(fallbackItem);
        localStorage.setItem('foodguideth_custom_restaurants', JSON.stringify(currentList));
      }
      setMessage({ text: `เพิ่มร้าน "${fallbackItem.name}" สำเร็จเรียบร้อย!`, type: 'success' });
      fetchRestaurants();
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบร้าน "${name}"?`)) return;

    try {
      await fetch(`/api/restaurants?id=${id}`, { method: 'DELETE' });
    } catch (err) {}

    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('foodguideth_custom_restaurants');
        if (saved) {
          const currentList = JSON.parse(saved);
          const updated = currentList.filter((r: any) => r.id !== id && r.slug !== id);
          localStorage.setItem('foodguideth_custom_restaurants', JSON.stringify(updated));
        }
      } catch (e) {}
    }

    setRestaurants((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-800">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/30">
            <Crown className="w-3.5 h-3.5" />
            <span>FoodGuideTH Administration</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">ระบบจัดการร้านอาหารในฐานข้อมูล</h1>
          <p className="text-xs text-gray-400 mt-1">
            เพิ่ม แก้ไข และจัดการข้อมูลร้านอาหารหรูในจังหวัดนครนายก (SQLite / Prisma Connected)
          </p>
        </div>

        <button
          onClick={fetchRestaurants}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300 hover:text-white"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>รีเฟรชข้อมูล</span>
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl mb-8 flex items-center space-x-2 text-sm ${
            message.type === 'success'
              ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
              : 'bg-rose-950/80 border border-rose-500/50 text-rose-300'
          }`}
        >
          {message.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Form Column */}
        <div className="lg:col-span-7 bg-gray-900/90 border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <PlusCircle className="w-5 h-5 text-amber-400" />
            <span>เพิ่มร้านอาหารหรูใหม่เข้า Database</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-medium mb-1">ชื่อร้านอาหาร *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="เช่น Grand Riverside Dining & Lounge"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">สโลแกน / จุดเด่นสั้นๆ *</label>
                <input
                  type="text"
                  name="tagline"
                  required
                  value={form.tagline}
                  onChange={handleChange}
                  placeholder="เช่น ภัตตาคารริมน้ำ วิวพาโนรามา ดินเนอร์ใต้แสงเทียน"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-medium mb-1">ย่านในนครนายก *</label>
                <select
                  name="zone"
                  value={form.zone}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                >
                  <option value="เขื่อนขุนด่าน">เขื่อนขุนด่าน</option>
                  <option value="ริมแม่น้ำนครนายก">ริมแม่น้ำนครนายก</option>
                  <option value="สาริกา">สาริกา</option>
                  <option value="นางรอง">นางรอง</option>
                  <option value="บ้านนา">บ้านนา</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">ประเภทร้าน *</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                >
                  <option value="Fine Dining & Wine Lounge">Fine Dining & Wine Lounge</option>
                  <option value="Riverside Luxury">Riverside Luxury (ริมแม่น้ำ)</option>
                  <option value="Steakhouse & Rooftop">Steakhouse & Rooftop</option>
                  <option value="Royal Thai Chef's Table">Royal Thai Chef's Table</option>
                  <option value="French Bistro & High Tea">French Bistro & High Tea</option>
                  <option value="Modern Luxury Cafe & Grill">Modern Luxury Cafe & Grill</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">รายละเอียดบรรยากาศร้าน</label>
              <textarea
                name="description"
                rows={3}
                value={form.description}
                onChange={handleChange}
                placeholder="อธิบายบรรยากาศ วัตถุดิบ ความพิเศษ และสไตล์การบริการ..."
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-medium mb-1">ช่วงราคา</label>
                <input
                  type="text"
                  name="priceRange"
                  value={form.priceRange}
                  onChange={handleChange}
                  placeholder="$$$$ (1,000 - 2,500 บาท/ท่าน)"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">เบอร์โทรศัพท์สำหรับจองโต๊ะ</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="เช่น 037-345-678 หรือ 089-xxx-xxxx"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-medium mb-1">เวลาทำการ</label>
                <input
                  type="text"
                  name="openingHours"
                  value={form.openingHours}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">คะแนนรีวิวเริ่มต้น (1-5)</label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">ที่อยู่สถานที่ตั้ง</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="เช่น 88 หมู่ 3 ตำบลหินตั้ง อำเภอเมือง นครนายก"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">รูปภาพหน้าปก (Image URL)</label>
              <input
                type="url"
                name="coverImage"
                value={form.coverImage}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">เมนูซิกเนเจอร์ (คั่นด้วยเครื่องหมายจุลภาค ,)</label>
              <input
                type="text"
                name="signatureDishes"
                value={form.signatureDishes}
                onChange={handleChange}
                placeholder="วากิวสเต็ก A5, กุ้งแม่น้ำเผาซอสทรัฟเฟิล, ส้มฉุนหิมะ"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">จุดเด่น/สิ่งอำนวยความสะดวก (คั่นด้วยจุลภาค ,)</label>
              <input
                type="text"
                name="highlights"
                value={form.highlights}
                onChange={handleChange}
                placeholder="ศาลาริมน้ำส่วนตัว, ห้องไวน์, ดนตรีแจ๊สสด, ลานจอดรถ VIP"
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-gray-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{submitting ? 'กำลังบันทึกลง Database...' : 'บันทึกร้านอาหารเข้าสู่ระบบ'}</span>
            </button>

          </form>
        </div>

        {/* Existing List Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-gray-900/90 border border-gray-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center justify-between">
              <span>ร้านในฐานข้อมูล ({restaurants.length})</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">SQLite Real-time</span>
            </h3>

            {loading ? (
              <p className="text-xs text-gray-500 py-6 text-center">กำลังโหลดรายการร้าน...</p>
            ) : restaurants.length === 0 ? (
              <p className="text-xs text-gray-500 py-6 text-center">ยังไม่มีข้อมูลร้านอาหาร</p>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {restaurants.map((rest) => (
                  <div
                    key={rest.id}
                    className="p-3.5 rounded-2xl bg-gray-950 border border-gray-800/80 flex items-center justify-between gap-3 hover:border-gray-700 transition-colors"
                  >
                    <div className="truncate">
                      <h4 className="text-xs font-bold text-white truncate">{rest.name}</h4>
                      <p className="text-[11px] text-amber-400/80 mt-0.5">{rest.zone} • {rest.category}</p>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <Link
                        href={`/restaurants/${rest.slug}`}
                        target="_blank"
                        className="p-1.5 text-gray-400 hover:text-amber-400 bg-gray-900 rounded-lg border border-gray-800"
                        title="ดูหน้าเว็บ"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(rest.id, rest.name)}
                        className="p-1.5 text-gray-500 hover:text-rose-400 bg-gray-900 rounded-lg border border-gray-800"
                        title="ลบร้าน"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
