import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils-node";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET(req: NextRequest) {
  // Rutas estáticas principales
  const staticRoutes = ["/", "/blog", "/admin"];
  // Artículos del blog
  const articles = getAllArticles();
  const blogRoutes = articles.map((a: any) => `/blog/${a.category}/${a.slug}`);
  // Unir todas las rutas
  const allRoutes = [...staticRoutes, ...blogRoutes];
  // Generar XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
    .map(
      (route) => `  <url><loc>${BASE_URL}${route}</loc></url>`
    )
    .join("\n")}
</urlset>`;
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 