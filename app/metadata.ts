import type { Metadata, Viewport } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bn.webp`;

// Preload configuration for critical resources
export const preloadConfig = {
  fonts: [
    { url: '/fonts/Inter.var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/PoiretOne-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/Montserrat.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/Poppins-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { url: '/fonts/PlayfairDisplay-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  ],
  images: [
    { url: '/images/bn.webp', as: 'image', type: 'image/webp' },
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Motor Reservas Hotel & Menú Digital | 0% Comisión Ecuador",
    template: "%s | César Reyes Jaramillo"
  },
  description: "Solución todo en uno para hoteles y restaurantes en Ecuador. Motor de reservas y menú digital con 0% de comisión. Aumenta tus reservas y ventas sin pagar comisiones altas.",
  keywords: [
    "motor reservas hotel",
    "menú digital restaurante",
    "sistema de reservas sin comisión",
    "restaurantes Ecuador",
    "hoteles Ecuador",
    "reservas en línea",
    "sistema reservas hotel Ecuador",
    "software restaurante Ecuador",
    "booking sin comisiones",
    "menú QR restaurantes",
    "motor de reservas para hoteles",
    "menú digital para restaurantes",
    "app para restaurantes ecuador",
    "carta digital qr"
  ],
  authors: [{ name: "César Reyes Jaramillo" }],
  creator: "César Reyes Jaramillo",
  publisher: "César Reyes Jaramillo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Motor Reservas Hotel & Menú Digital | 0% Comisión Ecuador",
    description: "Solución todo en uno para hoteles y restaurantes en Ecuador. Motor de reservas y menú digital con 0% de comisión. Aumenta tus reservas y ventas sin pagar comisiones altas.",
    url: SITE_URL,
    siteName: "César Reyes Jaramillo",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1080,
        height: 1920,
        alt: 'César Reyes Jaramillo - Consultor Estratégico'
      }
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    description: "Transforma tu negocio con estrategias de automatización y marketing digital. Soluciones personalizadas para hacer crecer tu empresa.",
    images: [DEFAULT_OG_IMAGE],
    creator: '@cesarreyesj',
  },
  // Add preload links to metadata
  other: {
    'preload-1': '<link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-2': '<link rel="preload" href="/fonts/PoiretOne-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-3': '<link rel="preload" href="/fonts/Montserrat.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-4': '<link rel="preload" href="/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-5': '<link rel="preload" href="/fonts/PlayfairDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous" />',
    'preload-6': '<link rel="preload" href="/images/bn.webp" as="image" type="image/webp" />',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplaza con tu código de verificación de Google Search Console
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-EC': '/es-EC',
    },
  },
  metadataBase: new URL(SITE_URL),
  generator: 'Next.js',
  applicationName: 'César Reyes Jaramillo - Consultoría Empresarial',
  referrer: 'origin-when-cross-origin',
  category: 'Consultoría Empresarial',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}
