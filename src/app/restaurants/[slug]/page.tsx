import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import JsonLd, { generateRestaurantSchema } from '@/components/JsonLd';
import RestaurantDetailClient from '@/components/RestaurantDetailClient';
import { initialRestaurants } from '@/data/seedData';

interface RestaurantDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://foodguideth.com';

export async function generateStaticParams() {
  try {
    const restaurants = await prisma.restaurant.findMany({ select: { slug: true } });
    if (restaurants.length > 0) return restaurants.map((r) => ({ slug: r.slug }));
  } catch (err) {
    // fallback
  }
  return initialRestaurants.map((r) => ({ slug: r.slug }));
}

// Generate Dynamic Metadata for Google Search & Social Media
export async function generateMetadata({
  params,
}: RestaurantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let restaurant: any = null;
  try {
    restaurant = await prisma.restaurant.findUnique({
      where: { slug },
    });
  } catch (err) {
    // fallback
  }

  if (!restaurant) {
    restaurant = initialRestaurants.find((r) => r.slug === slug || r.slug === decodedSlug);
  }

  if (!restaurant) {
    return {
      title: `${decodedSlug} | FoodGuideTH นครนายก`,
      description: 'รายละเอียดร้านอาหารหรูในจังหวัดนครนายก คัดสรรโดย FoodGuideTH',
    };
  }

  const title = `${restaurant.name} นครนายก - ร้านอาหารหรู ${restaurant.zone}`;
  const description = `${restaurant.tagline} บรรยากาศพรีเมียมในจังหวัดนครนายก เมนูแนะนำ ข้อมูลการจองโต๊ะ และแผนที่การเดินทาง คัดสรรโดย FoodGuideTH`;

  return {
    title,
    description,
    keywords: [
      restaurant.name,
      `${restaurant.name} นครนายก`,
      `ร้านอาหารหรู ${restaurant.zone}`,
      restaurant.category,
      'ร้านอาหารแนะนำนครนายก',
      'FoodGuideTH',
    ],
    openGraph: {
      title: `${restaurant.name} | FoodGuideTH นครนายก`,
      description,
      url: `${SITE_URL}/restaurants/${restaurant.slug}`,
      siteName: 'FoodGuideTH',
      images: [
        {
          url: restaurant.coverImage,
          width: 1200,
          height: 630,
          alt: restaurant.name,
        },
      ],
      type: 'article',
    },
    alternates: {
      canonical: `${SITE_URL}/restaurants/${restaurant.slug}`,
    },
  };
}

export const revalidate = 60;

export default async function RestaurantDetailPage({
  params,
}: RestaurantDetailPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let restaurant: any = null;
  try {
    restaurant = await prisma.restaurant.findUnique({
      where: { slug },
    });
  } catch (err) {
    // fallback
  }

  if (!restaurant) {
    restaurant = initialRestaurants.find((r) => r.slug === slug || r.slug === decodedSlug);
  }

  let relatedRestaurants: any[] = [];
  if (restaurant) {
    try {
      relatedRestaurants = await prisma.restaurant.findMany({
        where: {
          id: { not: restaurant.id },
          OR: [{ zone: restaurant.zone }, { category: restaurant.category }],
        },
        take: 3,
      });
    } catch (e) {}
  }

  return (
    <div className="pb-24">
      {/* Inject Google Schema.org Rich Snippet JSON-LD for server-side restaurants */}
      {restaurant && <JsonLd data={generateRestaurantSchema(restaurant, SITE_URL)} />}

      {/* Render detail client view (supports server & local-added restaurants) */}
      <RestaurantDetailClient
        initialRestaurant={restaurant}
        slug={slug}
        relatedRestaurants={relatedRestaurants}
      />
    </div>
  );
}
