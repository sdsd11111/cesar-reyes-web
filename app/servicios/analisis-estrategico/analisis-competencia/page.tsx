import { Metadata } from 'next';
import AnalisisCompetenciaClient from './AnalisisCompetenciaClient';

export const metadata: Metadata = {
  title: 'Análisis de Competencia - Levantamiento de Información | César Reyes',
  description: 'Análisis detallado de competidores para PYMEs. Descubre qué hace tu competencia, sus fortalezas y debilidades para superarlos estratégicamente.',
  keywords: ['análisis competencia', 'estudio competidores', 'investigación mercado', 'estrategia competitiva', 'pymes ecuador'],
  openGraph: {
    title: 'Análisis de Competencia | César Reyes',
    description: 'Levantamiento detallado de información de competidores para tomar decisiones estratégicas.',
    images: [{
      url: '/images/categorias/analisis-estrategico/analisis-competencia-seo.webp',
      width: 1200,
      height: 630,
      alt: 'Análisis de Competencia',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function AnalisisCompetenciaPage() {
  return <AnalisisCompetenciaClient />;
}
