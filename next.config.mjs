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
  // Excluir archivos backup de la compilación
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'].map(ext => {
    // No incluir archivos que contengan .backup en su nombre
    return ext;
  }),
  webpack: (config, { isServer }) => {
    // Ignorar archivos backup durante la compilación
    config.module.rules.push({
      test: /\.backup.*\.(tsx?|jsx?)$/,
      loader: 'ignore-loader',
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
