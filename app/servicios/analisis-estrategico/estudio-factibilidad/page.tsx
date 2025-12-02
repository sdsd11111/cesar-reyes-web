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
  return <EstudioFactibilidadClient />;
}
