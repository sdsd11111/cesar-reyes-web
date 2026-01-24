/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com'}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com'}/server-sitemap.xml`,
    ],
  },
  outDir: 'public',
};
