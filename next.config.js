/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3004',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  // Configuración de exportación estática
  output: 'standalone',
  
  // Mejoras en el rendimiento y manejo de chunks
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configuración de webpack para mejor manejo de chunks
  webpack: (config, { isServer }) => {
    // Evitar problemas con módulos nativos del navegador
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  
  // Configuración de encabezados de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Habilita HSTS para mejorar la seguridad
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  // Configuración de redirecciones
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/servicios/posicionamiento',
        permanent: true, // Añadido el parámetro required 'permanent'
      },
    ]
  },
  // Configuración de compresión
  compress: true,
}

module.exports = nextConfig
