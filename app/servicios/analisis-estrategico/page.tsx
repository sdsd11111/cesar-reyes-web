import { Metadata } from 'next';
import AnalisisEstrategicoClient from './AnalisisEstrategicoClient';

export const metadata: Metadata = {
  title: 'Análisis Estratégico para PYMEs en Ecuador | César Reyes',
  description: 'Toma decisiones inteligentes con análisis estratégico basado en datos. Estudios de mercado, consultoría empresarial y reingeniería de procesos para PYMEs en Ecuador.',
  keywords: ['análisis estratégico', 'consultoría empresarial', 'estudio de mercado', 'pymes ecuador', 'reingeniería de procesos', 'plan de posicionamiento'],
  openGraph: {
    title: 'Análisis Estratégico para PYMEs | César Reyes',
    description: 'Deja de adivinar el siguiente paso. Obtén una hoja de ruta clara basada en datos para superar a tu competencia.',
    images: [
      {
        url: '/images/categorias/analisis-estrategico/hero-1.webp',
        width: 1200,
        height: 630,
        alt: 'Análisis Estratégico para PYMEs',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function AnalisisEstrategicoPage() {
  return <AnalisisEstrategicoClient />;
}