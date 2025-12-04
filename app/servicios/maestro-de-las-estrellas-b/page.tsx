import { Metadata } from 'next';
import MaestroDeLasEstrellasBClient from './MaestroDeLasEstrellasBClient';

export const metadata: Metadata = {
  title: 'Protección de Reputación en Google - El Maestro de las Estrellas | César Reyes',
  description: '¿Cuánto te cuesta una reseña de 1 estrella? Protege tu reputación con un sistema de triage que intercepta quejas y amplifica reseñas positivas.',
  openGraph: {
    title: 'Protección de Reputación en Google - El Maestro de las Estrellas',
    description: 'Sistema automático para gestionar reseñas de Google. Intercepta malas calificaciones y amplifica las buenas.',
    images: [
      {
        url: '/images/trafico-frio.webp',
        width: 1200,
        height: 630,
        alt: 'Protección de Reputación',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function MaestroDeLasEstrellasBPage() {
  return (
    <>
      <MaestroDeLasEstrellasBClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Protección de Reputación en Google - El Maestro de las Estrellas</h1>
        <p>¿Cuánto te cuesta una reseña de 1 estrella? Sistema de triage automático que protege tu promedio de Google Maps interceptando quejas antes de que lleguen a Google y amplificando reseñas positivas.</p>
        <ul>
          <li>Protección automática de reputación</li>
          <li>Triage inteligente de opiniones</li>
          <li>Intercepta quejas antes de Google</li>
          <li>Amplifica automáticamente reseñas 5 estrellas</li>
          <li>Protege tu inversión en reputación</li>
          <li>Sistema automatizado 24/7</li>
        </ul>
        <p>Una sola reseña negativa puede alejar a decenas de clientes potenciales. Protege tu negocio automáticamente.</p>
      </div>
    </>
  );
}
