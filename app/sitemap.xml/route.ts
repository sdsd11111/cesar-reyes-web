import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cesarreyesjaramillo.com";
const currentDate = new Date().toISOString().split('T')[0];

export async function GET() {
  try {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/api/sitemap</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <!-- Add more sitemaps here as your site grows -->
</sitemapindex>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'X-Robots-Tag': 'noindex, follow',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return new NextResponse('Error generating sitemap index', { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
