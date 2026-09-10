import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(restaurants);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch restaurants' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      slug,
      tagline,
      description,
      category,
      zone,
      address,
      priceRange,
      rating,
      phone,
      openingHours,
      coverImage,
      images,
      signatureDishes,
      highlights,
      googleMapUrl,
    } = body;

    // Validate required fields
    if (!name || !tagline || !category || !zone) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' }, { status: 400 });
    }

    // Auto-generate slug if empty
    const generatedSlug =
      slug?.trim() ||
      name
        .toLowerCase()
        .replace(/[^a-z0-9ก-๙]+/g, '-')
        .replace(/^-+|-+$/g, '') +
        '-' +
        Date.now().toString().slice(-4);

    // Format arrays
    const formattedImages = Array.isArray(images) ? JSON.stringify(images) : JSON.stringify([coverImage || '']);
    const formattedDishes = Array.isArray(signatureDishes)
      ? JSON.stringify(signatureDishes)
      : typeof signatureDishes === 'string'
      ? JSON.stringify(signatureDishes.split(',').map((s: string) => s.trim()).filter(Boolean))
      : JSON.stringify([]);
    const formattedHighlights = Array.isArray(highlights)
      ? JSON.stringify(highlights)
      : typeof highlights === 'string'
      ? JSON.stringify(highlights.split(',').map((s: string) => s.trim()).filter(Boolean))
      : JSON.stringify([]);

    const newRestaurant = await prisma.restaurant.create({
      data: {
        name,
        slug: generatedSlug,
        tagline,
        description: description || tagline,
        category,
        zone,
        address: address || 'จังหวัดนครนายก',
        priceRange: priceRange || '$$$ (800 - 1,500 บาท/ท่าน)',
        rating: parseFloat(rating) || 4.8,
        reviewCount: 1,
        phone: phone || '037-xxx-xxx',
        openingHours: openingHours || '11:00 - 22:00 น.',
        coverImage:
          coverImage ||
          'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        images: formattedImages,
        signatureDishes: formattedDishes,
        highlights: formattedHighlights,
        googleMapUrl: googleMapUrl || 'https://maps.google.com/?q=Nakhon+Nayok',
        isFeatured: true,
        isLuxury: true,
      },
    });

    return NextResponse.json(newRestaurant, { status: 201 });
  } catch (error: any) {
    console.error('Error creating restaurant:', error);
    return NextResponse.json({ error: error.message || 'Failed to create restaurant' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Restaurant ID is required' }, { status: 400 });
    }

    await prisma.restaurant.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete' }, { status: 500 });
  }
}
