import { Metadata } from 'next';
import TvPremiumClient from './TvPremiumClient';

export const metadata: Metadata = {
  title: 'TV Premium Legal - Sin YouTube ni Anuncios | César Reyes',
  description: 'Solo $54 USD al año y tu pantalla trabaja para ti. Sin YouTube, sin anuncios de competencia, sin riesgos legales. Activación en 2 horas.',
  openGraph: {
    title: 'TV Premium Legal - Transforma tu TV en un Activo',
    description: 'Olvídate de YouTube y los anuncios de la competencia. TV legal, profesional y rentable para tu negocio.',
    images: [
      {
        url: '/images/tv-premium-hero.webp',
        width: 1200,
        height: 630,
        alt: 'TV Premium Legal',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TvPremiumPage() {
  return <TvPremiumClient />;
}
