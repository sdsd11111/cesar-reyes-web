import { Metadata } from 'next';
import PromoArtesVivasClient from './PromoArtesVivasClient';

export const metadata: Metadata = {
  title: 'Páginas Web para Artesanos - Festival Artes Vivas Loja 2025 | César Reyes',
  description: 'Promoción Exclusiva Solo Para Participantes. Amplía tu visibilidad más allá de las redes sociales. Un sitio web te permite ser encontrado fácilmente por clientes.',
  openGraph: {
    title: 'Páginas Web para Artesanos - Festival Artes Vivas Loja 2025',
    description: 'Tu artesanía merece ser vista por el mundo. Sitio web profesional listo para el festival.',
    images: [
      {
        url: '/images/promo-artes-vivas/hero 1.webp',
        width: 1200,
        height: 630,
        alt: 'Páginas Web para Artesanos',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PromoArtesVivasPage() {
  return <PromoArtesVivasClient />;
}
