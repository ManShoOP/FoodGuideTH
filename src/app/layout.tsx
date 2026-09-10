import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd, { generateWebSiteSchema } from '@/components/JsonLd';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://foodguideth.com';
const SITE_NAME = 'FoodGuideTH';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FoodGuideTH - แนะนำร้านอาหารหรู ดินเนอร์พรีเมียม นครนายก',
    template: '%s | FoodGuideTH นครนายก',
  },
  description:
    'FoodGuideTH คัดสรรร้านอาหารหรู บรรยากาศพรีเมียม วิวริมน้ำและขุนเขาในจังหวัดนครนายก เขื่อนขุนด่าน สาริกา นางรอง สำรับชาววัง และ Fine Dining ระดับเวิลด์คลาส',
  keywords: [
    'FoodGuideTH',
    'ร้านอาหารหรู นครนายก',
    'ร้านอาหารพรีเมียม นครนายก',
    'ดินเนอร์ นครนายก',
    'ร้านอาหารริมน้ำ นครนายก',
    'ร้านอาหารเขื่อนขุนด่าน',
    'fine dining นครนายก',
    'ร้านอาหารสาริกา',
    'ร้านอาหารนางรอง',
    'สเต็กเฮ้าส์ นครนายก',
    'คาเฟ่หรู นครนายก',
  ],
  authors: [{ name: 'FoodGuideTH Editorial Team' }],
  creator: 'FoodGuideTH',
  publisher: 'FoodGuideTH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'FoodGuideTH - คู่มือร้านอาหารหรู & บรรยากาศพรีเมียม นครนายก',
    description:
      'สัมผัสสุนทรีย์แห่งรสชาติและธรรมชาติที่งดงามที่สุดในนครนายก รวมร้านอาหารระดับ 5 ดาว ริมน้ำ เขื่อนขุนด่าน และหุบเขาสาริกา',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FoodGuideTH - รวมร้านอาหารหรู นครนายก',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FoodGuideTH - แนะนำร้านอาหารหรู ดินเนอร์พรีเมียม นครนายก',
    description:
      'คัดสรรร้านอาหารหรู ริมแม่น้ำนครนายก เขื่อนขุนด่าน และหุบเขาสาริกา',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebSiteSchema(SITE_URL, SITE_NAME);

  return (
    <html lang="th" className="dark">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-[#0b0f19] text-gray-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
