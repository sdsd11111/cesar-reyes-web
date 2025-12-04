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
  return (
    <>
      <ZonaGamerClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Zona Gamer Personalizada - El Maestro de las Estrellas</h1>
        <p>Convierte la Espera en Diversión Familiar. Instalada en 48 horas. Sin apps que descargar, sin complicaciones.</p>
        <p>Transforma la experiencia de espera en tu restaurante con una zona de juegos personalizada que entretiene a familias mientras esperan su turno o comida.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Juego "El Maestro de las Estrellas" personalizado con tu marca</li>
          <li>Acceso vía QR - sin apps que descargar</li>
          <li>Instalación y configuración en 48 horas</li>
          <li>Compatible con cualquier dispositivo móvil</li>
          <li>Ranking personalizado con tu branding</li>
          <li>Sin complicaciones técnicas</li>
        </ul>
        <p>Ideal para restaurantes que quieren mejorar la experiencia del cliente durante tiempos de espera. Familias entretenidas = clientes satisfechos.</p>
      </div>
    </>
  );
}
