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
  return (
    <>
      <PlanSalirGoogleClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Plan de Posicionamiento SEO y Estrategia de Contenidos</h1>
        <p>Conquista Google y Atrae Clientes Calificados, Incluso si Odias Escribir. El 93% de las experiencias online comienzan con un motor de búsqueda. Si no estás en la primera página, eres invisible.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Análisis Profundo de hasta 2000 Palabras Clave para identificar los términos exactos que tus clientes usan para comprar</li>
          <li>Lista Organizada y Estratégica de términos clasificados por relevancia, volumen y dificultad</li>
          <li>Lista para usar hoy mismo sin conocimientos técnicos</li>
          <li>Guía de Contenido y Estrategia de Artículos Pilares y Clusters</li>
          <li>Plan para construir autoridad y convertirte en la referencia total de tu sector</li>
        </ul>
        <p>Este plan te da una hoja de ruta clara para dominar tu nicho, atraer tráfico que convierte y dejar de depender de la publicidad pagada. Sin necesidad de gastar miles en anuncios cada mes.</p>
      </div>
    </>
  );
}
