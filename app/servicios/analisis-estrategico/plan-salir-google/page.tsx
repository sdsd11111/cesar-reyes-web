import { Metadata } from 'next';
import PlanSalirGoogleClient from './PlanSalirGoogleClient';

export const metadata: Metadata = {
  title: 'Plan para Salir en Google - Posicionamiento SEO | César Reyes',
  description: 'Aparece en Google sin gastar miles en publicidad. Análisis de hasta 2000 palabras clave + estrategia de contenido completa para dominar tu nicho.',
  keywords: ['posicionamiento google', 'palabras clave', 'seo ecuador', 'salir en google', 'estrategia contenido'],
  openGraph: {
    title: 'Plan para Salir en Google | César Reyes',
    description: 'Descubre las palabras exactas que tus clientes usan para buscarte y posiciona tu negocio en primera página.',
    images: [{
      url: '/images/categorias/analisis-estrategico/analisis-competencia-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Plan para Salir en Google',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PlanSalirGooglePage() {
  return <PlanSalirGoogleClient />;
}
