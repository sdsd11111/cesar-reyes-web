import { Metadata } from 'next';
import ZonaGamerClient from './ZonaGamerClient';

export const metadata: Metadata = {
  title: 'Zona Gamer Personalizada - El Maestro de las Estrellas | César Reyes',
  description: 'Instalada en 48 horas. Convierte la espera en diversión familiar. Sin apps que descargar. Sin complicaciones.',
  openGraph: {
    title: 'Zona Gamer Personalizada - El Maestro de las Estrellas',
    description: 'Transforma la experiencia de espera en tu restaurante con juegos personalizados.',
    images: [
      {
        url: '/images/zona-gamer/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Zona Gamer Personalizada',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function ZonaGamerPage() {
  return <ZonaGamerClient />;
}
