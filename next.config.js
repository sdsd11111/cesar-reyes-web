/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  outputFileTracingRoot: __dirname,
  
  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'cesarweb.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'cesarreyesjaramillo.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },

  // Configuración de rendimiento
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@heroicons/react',
    ],
    scrollRestoration: true,
  },

  // Configuración de webpack
  webpack: (config, { isServer }) => {
    // Configuración de fallbacks
    config.resolve.fallback = {   
      ...config.resolve.fallback,  
      fs: false,  
      net: false,  
      tls: false,  
    };  
    
    // Asegurar que React se resuelva correctamente tanto en cliente como servidor
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'react',
      'react/jsx-runtime': 'react/jsx-runtime',
      'react-dom': 'react-dom',
      // Deshabilitar Preact
      'preact/compat': false,
      'preact': false
    };

    // Evitar problemas con módulos nativos
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Optimización de moment.js
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^moment-locales$/,
      })
    );

    return config;
  },

  // Encabezados de seguridad
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // Redirecciones
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/servicios/posicionamiento',
        permanent: true,
      },
    ];
  },

  // Configuración de compresión
  compress: true,
  
  // Configuración de caché
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60, // 1 hora
    pagesBufferLength: 5,
  },

  // Configuración de caché para rutas estáticas
  generateEtags: true,
};

// Análisis de paquetes
if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
