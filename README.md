# FoodGuideTH - คู่มือแนะนำร้านอาหารหรู & บรรยากาศพรีเมียม นครนายก

เว็บไซต์แนะนำร้านอาหารหรู ดินเนอร์ริมน้ำ และ Chef's Table ในจังหวัดนครนายก ที่ออกแบบมาเพื่อการทำ **SEO สำหรับค้นหาบน Google** โดยเฉพาะ และเชื่อมต่อกับระบบฐานข้อมูลจริง (SQLite via Prisma ORM)

---

## 🌟 ฟีเจอร์หลัก (Features)

1. **SEO-First Architecture (Google Discovery Ready)**
   - **Server-Side Rendering (SSR) & SSG:** Next.js 15 App Router ทำให้ Googlebot อ่านเนื้อหาภาษาไทยและชื่อร้านได้ทันที 100%
   - **JSON-LD Schema Markup:** รองรับ Schema.org สำหรับ `WebSite`, `Restaurant`, `AggregateRating`, `OpeningHours` แสดงผลคะแนนดาวและราคาเป็น Rich Snippets บน Google
   - **Dynamic Sitemap & Robots:** ระบบสร้าง `/sitemap.xml` และ `/robots.txt` อัตโนมัติจากฐานข้อมูลแบบเรียลไทม์
   - **OpenGraph & Twitter Card:** ภาพพรีวิวขนาดใหญ่ สวยงาม หรูหรา เมื่อแชร์ลง LINE, Facebook หรือ X

2. **ระบบฐานข้อมูลจริง (Prisma ORM + SQLite)**
   - จัดเก็บข้อมูลร้านอาหาร พิกัด ย่าน เมนูซิกเนเจอร์ และรีวิวอย่างเป็นระบบ
   - พร้อมเปลี่ยนไปใช้ Cloud Database (PostgreSQL / Supabase) ได้ทันทีเพียงเปลี่ยน URL ใน `.env`

3. **ระบบค้นหาและตัวกรองอัจฉริยะ (Search & Filter)**
   - ค้นหาตามชื่อร้าน หรือคีย์เวิร์ดประเภทอาหาร (เช่น สเต็ก, ไวน์, กุ้งแม่น้ำ)
   - กรองตามย่านยอดนิยมในนครนายก: เขื่อนขุนด่าน, ริมแม่น้ำนครนายก, สาริกา, นางรอง, บ้านนา
   - กรองตามประเภทร้านอาหาร: Fine Dining, Riverside Luxury, Steakhouse & Rooftop, Royal Thai, High Tea

4. **หน้ารายละเอียดร้านอาหารระดับพรีเมียม**
   - แกลเลอรีรูปภาพความละเอียดสูง
   - รายการเมนูซิกเนเจอร์แนะนำ
   - จุดเด่นและสิ่งอำนวยความสะดวก (เช่น ที่นั่งริมน้ำส่วนตัว, ห้องไวน์, ลานจอด VIP)
   - ปุ่มโทรจองโต๊ะทันที (`tel:`) และปุ่มเปิด Google Maps นำทาง

5. **ระบบหลังบ้าน Admin Portal (`/admin`)**
   - ฟอร์มสำหรับเพิ่มร้านอาหารใหม่เข้าสู่ Database พร้อมระบบตรวจสอบข้อมูล
   - รายการร้านอาหารในระบบ พร้อมปุ่มลบหรือเปิดดูหน้าร้านแบบเรียลไทม์

6. **คู่มือพิเศษการนำเว็บขึ้นสู่ Google Search (`/seo-guide`)**
   - แนะนำขั้นตอน 5 สเต็ปอย่างละเอียด ตั้งแต่การจดโดเมน การนำขึ้น Vercel ไปจนถึงการกด Request Indexing ใน Google Search Console เพื่อให้ค้นหาชื่อ "FoodGuideTH" เจอ

---

## 🚀 วิธีการติดตั้งและรันบนเครื่องคอมพิวเตอร์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. อัปเดตโครงสร้างฐานข้อมูลและโหลดข้อมูลตัวอย่าง (Seed Data)
```bash
npm run db:push
npm run db:seed
```

### 3. รัน Development Server
```bash
npm run dev
```
เปิดบราวเซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### 4. บิวด์สำหรับ Production
```bash
npm run build
npm run start
```

---

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)
```
foodguideth/
├── prisma/
│   ├── schema.prisma      # กำหนดโครงสร้างตารางข้อมูล Restaurant, Category, Zone
│   └── seed.js            # ข้อมูลร้านอาหารหรูตัวอย่างในนครนายก
├── src/
│   ├── app/
│   │   ├── admin/         # หน้า Admin จัดการร้านอาหาร
│   │   ├── api/           # API Route สำหรับร้านอาหาร (/api/restaurants)
│   │   ├── restaurants/   # หน้ารวมร้านและหน้ารายละเอียด [slug]
│   │   ├── seo-guide/     # คู่มือการนำเว็บขึ้น Google Search Console
│   │   ├── layout.tsx     # Base Layout + SEO Schema + OpenGraph
│   │   ├── page.tsx       # หน้าแรก (Hero, Featured, Zones, SEO Content)
│   │   ├── sitemap.ts     # Dynamic Sitemap generator
│   │   └── robots.ts      # Robots.txt generator
│   ├── components/        # Navbar, Footer, RestaurantCard, HeroSection, JsonLd
│   ├── lib/               # Prisma Client Singleton
│   └── types/             # TypeScript definitions
```
