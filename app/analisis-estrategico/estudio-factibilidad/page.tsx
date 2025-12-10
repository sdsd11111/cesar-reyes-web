import { Metadata } from 'next';
import EstudioFactibilidadClient from './EstudioFactibilidadClient';

export const metadata: Metadata = {
  title: 'Estudio de Factibilidad - El Antes de Endeudarte | César Reyes',
  description: 'Valida tu idea de negocio antes de arriesgar tu patrimonio. Estudio de factibilidad con proyecciones financieras y análisis de mercado para decisiones de inversión.',
  keywords: ['estudio factibilidad', 'viabilidad negocio', 'proyecciones financieras', 'análisis inversión', 'pymes ecuador'],
  openGraph: {
    title: 'Estudio de Factibilidad | César Reyes',
    description: 'Valida tu idea con datos reales antes de endeudarte. Protege tu inversión.',
    images: [{
      url: '/images/estudio_de_mercado.webp',
      width: 1200,
      height: 630,
      alt: 'Estudio de Factibilidad',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function EstudioFactibilidadPage() {
  return (
    <>
      <EstudioFactibilidadClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Estudio de Factibilidad y Viabilidad - El Antes de Endeudarte</h1>
        <p>Valida tu Idea de Negocio Antes de Arriesgar Todo tu Patrimonio. No apuestes tu dinero ni el de tu familia a ciegas: validar una idea es cuestión de números, datos de mercado y proyecciones financieras realistas.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Estudio Profundo de Mercado y Competencia para confirmar si existe demanda real</li>
          <li>Análisis de las barreras de entrada en tu sector</li>
          <li>Investigación de Demanda Digital (palabras clave) para validar volumen de búsqueda online</li>
          <li>Análisis Financiero Completo con proyecciones a 3-5 años</li>
          <li>Flujo de caja y análisis del punto de equilibrio (break-even point)</li>
          <li>Documento Profesional con Fundamentos Empresariales listo para presentar a bancos e inversionistas</li>
        </ul>
        <p>Este estudio es tu seguro más valioso, ya que te muestra con certeza si tu proyecto es viable, rentable y sostenible antes de endeudarte. Puede aumentar tus probabilidades de conseguir financiamiento en un 70%.</p>
      </div>
    </>
  );
}
