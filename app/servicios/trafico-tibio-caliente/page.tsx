import { Metadata } from 'next';
import TraficoTibioCalienteClient from './TraficoTibioCalienteClient';

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

export default function TraficoTibioCalientePage() {
  return <TraficoTibioCalienteClient />;
}
