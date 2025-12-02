import { Metadata } from 'next';
import TuContactoProfesionalClient from './TuContactoProfesionalClient';

export const metadata: Metadata = {
  title: 'Tarjeta Digital Profesional - Supera a la Competencia $150 | César Reyes',
  description: 'Tarjeta digital profesional por $150 USD. Diseño responsive, dominio propio, formulario de contacto optimizado. Genera confianza inmediata.',
  keywords: ['tarjeta digital profesional', 'presencia digital', 'imagen profesional', 'pymes ecuador'],
  openGraph: {
    title: 'Tu Contacto Profesional $150 | César Reyes',
    description: 'Impresiona desde el primer contacto con tu tarjeta digital profesional.',
    images: [{
      url: '/images/categorias/desarrollo-web/contacto-profesional-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tarjeta Digital Profesional',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuContactoProfesionalPage() {
  return <TuContactoProfesionalClient />;
}
