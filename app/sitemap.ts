import { MetadataRoute } from 'next'
import { getAllBlogArticles } from '@/lib/utils-node'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.cesarreyesjaramillo.com'

    // Static routes
    const routes = [
        '',
        '/mensajeria',
        '/motor-reservas-hotel',
        '/servicios',
        '/servicios/analisis-estrategico',
        '/servicios/desarrollo-web',
        '/servicios/posicionamiento',
        '/blog',
        '/contacto',
        '/menu-digital',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog routes
    const articles = await getAllBlogArticles(false);

    const blogRoutes = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.category}/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes]
}
