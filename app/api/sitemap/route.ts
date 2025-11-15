import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils-node";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cesarreyesjaramillo.com";

// Function to format date to ISO string
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export async function GET(req: NextRequest) {
  try {
    // Get all articles
    const articles = await getAllArticles();
    
    // Static pages with their last modified dates and change frequencies
    const staticPages = [
      { url: '/', lastmod: new Date(), changefreq: 'daily', priority: '1.0' },
      { url: '/blog', lastmod: new Date(), changefreq: 'daily', priority: '0.9' },
      { url: '/sobre-mi', lastmod: new Date('2025-01-01'), changefreq: 'monthly', priority: '0.8' },
      { url: '/servicios', lastmod: new Date('2025-01-01'), changefreq: 'weekly', priority: '0.8' },
      { url: '/contacto', lastmod: new Date('2025-01-01'), changefreq: 'monthly', priority: '0.7' },
    ];

    // Generate XML for static pages
    const staticPagesXml = staticPages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${formatDate(page.lastmod)}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

    // Generate XML for blog posts
    const blogPostsXml = articles.map(article => {
      const lastmod = article.updatedAt ? new Date(article.updatedAt) : new Date();
      return `
  <url>
    <loc>${BASE_URL}/blog/${article.category}/${article.slug}</loc>
    <lastmod>${formatDate(lastmod)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }).join('');

    // Combine all URLs
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${staticPagesXml}
  ${blogPostsXml}
</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'X-Robots-Tag': 'noindex, follow',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

// Add this to ensure the route is not statically generated
// and is revalidated on every request
export const dynamic = 'force-dynamic';