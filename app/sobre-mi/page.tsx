import { Metadata } from 'next';
import SobremiClientWrapper from './components/SobremiClientWrapper';

export const metadata: Metadata = {
  title: 'Sobre Mí - César Reyes Jaramillo',
  description: 'Conoce más sobre César Reyes Jaramillo, estratega de negocios y posicionamiento web con más de 23 años de experiencia ayudando a emprendedores, profesionales y pymes a convertir su propósito en crecimiento real.',
  openGraph: {
    title: 'Sobre Mí - César Reyes Jaramillo',
    description: 'Estratega de negocios y posicionamiento web con más de 23 años de experiencia ayudando a emprendedores a crecer.',
    images: [
      {
        url: '/images/cesar-reyes-perfil.webp',
        width: 1200,
        height: 630,
        alt: 'César Reyes Jaramillo',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function SobremiPage() {
  return <SobremiClientWrapper />;
}
