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
  return (
    <>
      <AnalisisCompetenciaClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Análisis de Competencia - Levantamiento de Información</h1>
        <p>Descubre qué hace tu competencia para superarlos estratégicamente. Análisis exhaustivo de mercado y competencia (FODA) para entender qué estrategias funcionan en tu industria.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Investigación exhaustiva de tu competencia mediante encuestas, entrevistas y análisis digital</li>
          <li>Análisis FODA completo de tus principales competidores</li>
          <li>Estrategias de tus competidores identificadas y documentadas</li>
          <li>Oportunidades de mercado que estás perdiendo</li>
          <li>Diferenciación real que hace que los clientes te elijan a ti</li>
          <li>Plan listo para implementar con acciones concretas</li>
        </ul>
        <p>Para PYMEs en Ecuador que necesitan entender su mercado y competencia para tomar decisiones estratégicas basadas en datos reales.</p>
      </div>
    </>
  );
}
