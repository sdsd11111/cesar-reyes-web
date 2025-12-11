import { Metadata } from 'next';
import MaestroDeLasEstrellasAClient from './MaestroDeLasEstrellasAClient';

export const metadata: Metadata = {
  title: 'El Maestro de las Estrellas - Gestión de Reputación | César Reyes',
  description: 'Instálalo en 48 horas. Protege tu reputación automáticamente. Un sistema de triage que clasifica opiniones y protege tu promedio de Google.',
  openGraph: {
    title: 'El Maestro de las Estrellas - Gestión de Reputación',
    description: 'Sistema automático para gestionar reseñas de Google. Intercepta malas calificaciones y amplifica las buenas.',
    images: [
      {
        url: '/images/hero-bg-stars.webp',
        width: 1200,
        height: 630,
        alt: 'El Maestro de las Estrellas',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function MaestroDeLasEstrellasAPage() {
  return (
    <>
      <MaestroDeLasEstrellasAClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>El Maestro de las Estrellas - Gestión de Reputación</h1>
        <p>Protege tu Reputación Automáticamente. Sistema de triage que clasifica opiniones y protege tu promedio de Google Maps. Instalación en 48 horas.</p>
        <ul>
          <li>Sistema automático de gestión de reseñas</li>
          <li>Intercepta reseñas negativas antes de Google</li>
          <li>Amplifica reseñas positivas automáticamente</li>
          <li>Protege tu promedio de estrellas</li>
          <li>Instalación en 48 horas</li>
          <li>Sin intervención manual constante</li>
        </ul>
        <p>Una mala reseña puede costarte miles de dólares en clientes perdidos. Protege tu reputación automáticamente.</p>
      </div>
    </>
  );
}
