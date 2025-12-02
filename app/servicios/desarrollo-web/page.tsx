import { Metadata } from 'next';
import DesarrolloWebClient from './DesarrolloWebClient';

export const metadata: Metadata = {
  title: 'Desarrollo Web Profesional - Inversión Única | César Reyes',
  description: 'Páginas web profesionales desde $60 USD. Sin mensualidades. Desde tarjetas digitales hasta e-commerce completo. Inversión única para PYMEs en Ecuador.',
  keywords: ['desarrollo web', 'páginas web ecuador', 'diseño web', 'e-commerce', 'tienda online', 'sitio web profesional', 'inversión única'],
  openGraph: {
    title: 'Desarrollo Web Profesional - Sin Mensualidades',
    description: 'Tu página web profesional con inversión única. Desde $60 hasta $950 USD. Sin costos recurrentes.',
    images: [
      {
        url: '/images/categorias/desarrollo-web/empresa-online-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Desarrollo Web Profesional',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function DesarrolloWebPage() {
  return <DesarrolloWebClient />;
}