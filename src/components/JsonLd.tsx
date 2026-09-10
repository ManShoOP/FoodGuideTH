import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function generateWebSiteSchema(siteUrl: string, siteName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: ['Food Guide Thailand', 'FoodGuideTH นครนายก', 'คู่มือร้านอาหารหรูนครนายก'],
    url: siteUrl,
    description: 'FoodGuideTH เว็บแนะนำร้านอาหารหรู บรรยากาศพรีเมียม วิวริมน้ำและขุนเขา ในจังหวัดนครนายก',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/restaurants?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateRestaurantSchema(restaurant: any, siteUrl: string) {
  let images: string[] = [];
  try {
    images = typeof restaurant.images === 'string' ? JSON.parse(restaurant.images) : restaurant.images;
  } catch {
    images = [restaurant.coverImage];
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteUrl}/restaurants/${restaurant.slug}`,
    name: restaurant.name,
    image: images.length > 0 ? images : [restaurant.coverImage],
    telephone: restaurant.phone,
    priceRange: restaurant.priceRange,
    servesCuisine: restaurant.category,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address,
      addressLocality: 'นครนายก',
      addressRegion: 'นครนายก',
      postalCode: '26000',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '14.2862',
      longitude: '101.3204',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating.toString(),
      reviewCount: restaurant.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    url: `${siteUrl}/restaurants/${restaurant.slug}`,
  };
}
