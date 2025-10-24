/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  productionBrowserSourceMaps: true,
  outputFileTracingRoot: path.join(__dirname, '../../'),
  
  // Image optimization
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

  // Performance configuration
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@heroicons/react',
    ],
    scrollRestoration: true,
  },
  
  // Deshabilitar la verificación de tipos en tiempo de compilación
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Deshabilitar la verificación de ESLint en tiempo de compilación
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configuración de webpack
  webpack: (config, { isServer, dev }) => {
    // Solo en producción
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

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
  
  // Configuración de rutas de API
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
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
