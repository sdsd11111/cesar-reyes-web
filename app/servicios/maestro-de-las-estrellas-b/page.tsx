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
  return <MaestroDeLasEstrellasBClient />;
}
