import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://foodguideth.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let restaurants: { slug: string; updatedAt: Date }[] = [];
  try {
    restaurants = await prisma.restaurant.findMany({
      select: { slug: true, updatedAt: true },
    });
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }

  const restaurantUrls: MetadataRoute.Sitemap = restaurants.map((rest) => ({
    url: `${SITE_URL}/restaurants/${rest.slug}`,
    lastModified: rest.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/restaurants`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/restaurants?zone=เขื่อนขุนด่าน`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/restaurants?zone=ริมแม่น้ำนครนายก`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/restaurants?zone=สาริกา`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/restaurants?zone=นางรอง`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/restaurants?zone=บ้านนา`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/seo-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...restaurantUrls];
}
