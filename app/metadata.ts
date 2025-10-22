import type { Metadata, Viewport } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bn.webp`;

export const metadata: Metadata = {
  title: {
    default: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    template: "%s | César Reyes Jaramillo"
  },
  description: "Transforma tu negocio con estrategias de automatización, marketing digital y consultoría empresarial. Soluciones personalizadas para hacer crecer tu empresa en el entorno digital.",
  keywords: ["consultor empresarial", "automatización de negocios", "marketing digital", "estrategia de crecimiento", "asesoría empresarial", "transformación digital"],
  authors: [{ name: "César Reyes Jaramillo" }],
  creator: "César Reyes Jaramillo",
  publisher: "César Reyes Jaramillo",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "César Reyes Jaramillo - Consultor Estratégico y Experto en Automatización",
    description: "Transforma tu negocio con estrategias de automatización, marketing digital y consultoría empresarial. Soluciones personalizadas para hacer crecer tu empresa.",
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
