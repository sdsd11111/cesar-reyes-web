import { Metadata } from 'next';
import PromoRestaurantesArtesVivasClient from './PromoRestaurantesArtesVivasClient';

export const metadata: Metadata = {
  title: 'Página Web para Restaurantes - Tecnología Apta para No-Tecnológicos | César Reyes',
  description: 'Si sabes enviar un WhatsApp, sabes administrar tu nuevo Sitio Web. Olvida a los programadores. Actualiza precios en 1 minuto. Tu restaurante abierto 24/7.',
  openGraph: {
    title: 'Página Web para Restaurantes - Tecnología Apta para No-Tecnológicos',
    description: 'Actualiza tu menú y precios en 1 minuto desde tu celular. Sin depender de programadores.',
    images: [
      {
        url: '/images/promo-artes-vivas/promo-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Página Web para Restaurantes',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PromoRestaurantesArtesVivasPage() {
  return <PromoRestaurantesArtesVivasClient />;
}
