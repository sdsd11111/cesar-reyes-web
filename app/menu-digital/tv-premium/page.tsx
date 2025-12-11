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
  return (
    <>
      <TvPremiumClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>TV Premium Legal - $54 USD al año</h1>
        <p>Transforma tu TV en un Activo. Sin YouTube, sin anuncios de la competencia, sin riesgos legales. Activación en 2 horas.</p>
        <ul>
          <li>TV legal y profesional para tu negocio</li>
          <li>Sin anuncios de competencia</li>
          <li>Sin YouTube que distrae clientes</li>
          <li>Contenido controlado por ti</li>
          <li>Activ ación rápida en 2 horas</li>
          <li>Solo $54 USD al año</li>
        </ul>
        <p>Ideal para restaurantes, cafeterías, salas de espera y negocios que quieren controlar qué ven sus clientes en sus pantallas.</p>
      </div>
    </>
  );
}
