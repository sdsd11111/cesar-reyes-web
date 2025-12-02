import { Metadata } from 'next';
import TuNegocio247Client from './TuNegocio247Client';

export const metadata: Metadata = {
  title: 'Tu Negocio 24/7 - Web Profesional con Catálogo $500 | César Reyes',
  description: 'Web profesional 24/7 por $500 USD. Blog integrado, galería de productos, SEO avanzado, Analytics. Tu vendedor digital que nunca descansa.',
  keywords: ['web profesional', 'catálogo productos', 'blog integrado', 'seo avanzado', 'pymes ecuador'],
  openGraph: {
    title: 'Tu Negocio 24/7 $500 | César Reyes',
    description: 'Tu vendedor digital trabajando 24/7 sin pagar salario.',
    images: [{
      url: '/images/categorias/desarrollo-web/negocio-24-7-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tu Negocio 24/7',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuNegocio247Page() {
  return <TuNegocio247Client />;
}
