import { Metadata } from 'next';
import SobremiClientWrapper from './components/SobremiClientWrapper';

export const metadata: Metadata = {
  title: 'Sobre Mí - César Reyes',
  description: 'Conoce más sobre César Reyes, estratega de negocios y posicionamiento web con más de 24 años de experiencia ayudando a emprendedores y empresarios a hacer crecer sus negocios de manera sostenible.',
  openGraph: {
    title: 'Sobre Mí - César Reyes',
    description: 'Estratega de negocios y posicionamiento web con más de 24 años de experiencia ayudando a emprendedores y empresarios a crecer de manera sostenible.',
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
