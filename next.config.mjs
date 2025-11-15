/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de autenticación
  experimental: {
    serverActions: true,
  },
  // Configuración de imágenes
  images: {
    domains: ['cesarreyesjaramillo.com', 'topdentcuenca.com', 'cesarweb.b-cdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cesarreyesjaramillo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'topdentcuenca.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cesarweb.b-cdn.net',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
