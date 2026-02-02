import { Metadata } from 'next';
import CarnavalesClient from './CarnavalesClient';

export const metadata: Metadata = {
  title: 'Plan Carnaval Digital 2026 - Captura Clientes en Feriado | César Reyes',
  description: 'Convierte este feriado de carnaval en clientes para todo el año. Sistema simple para capturar datos, calificaciones y fidelizar clientes.',
  keywords: ['Plan Carnaval Digital 2026', 'Captura de clientes feriado', 'Marketing para hoteles carnaval', 'Sistema de datos para restaurantes', 'Fidelización de clientes balnearios', 'César Reyes marketing digital', 'Automatización de WhatsApp', 'Estrategia feriado carnaval'],
  openGraph: {
    title: 'Plan Carnaval Digital 2026 - Captura Clientes en Feriado',
    description: 'Te instalamos un sistema simple para que cada persona que te visite en carnaval deje sus datos y te califique en Google.',
    images: [
      {
        url: '/images/carnavales-2026.webp',
        width: 1200,
        height: 630,
        alt: 'Plan Carnaval Digital 2026 - César Reyes',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Carnaval Digital 2026 - Captura Clientes en Feriado | César Reyes',
    description: 'Te instalamos un sistema simple para que cada persona que te visite en carnaval deje sus datos y te califique en Google.',
    images: ['/images/carnavales-2026.webp'],
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/carnavales-2026'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plan Carnaval Digital 2026',
  description: 'Sistema automático para capturar datos de clientes y obtener reseñas en Google durante el feriado de carnaval.',
  provider: {
    '@type': 'Person',
    name: 'César Reyes',
    url: 'https://www.cesarreyesjaramillo.com'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ecuador'
  },
  offers: {
    '@type': 'Offer',
    price: '250.00',
    priceCurrency: 'USD'
  }
};

export default function CarnavalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CarnavalesClient />
    </>
  );
}
