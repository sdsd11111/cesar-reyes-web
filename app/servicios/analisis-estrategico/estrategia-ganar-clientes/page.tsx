import { Metadata } from 'next';
import EstrategiaGanarClientesClient from './EstrategiaGanarClientesClient';

export const metadata: Metadata = {
  title: 'Estrategia para Ganar Clientes - Plan de Marketing Digital | César Reyes',
  description: 'Plan de marketing digital probado para PYMEs. Análisis de mercado, competencia y estrategia completa para atraer clientes cualificados en Ecuador.',
  keywords: ['estrategia marketing', 'ganar clientes', 'plan marketing digital', 'análisis competencia', 'pymes ecuador'],
  openGraph: {
    title: 'Estrategia para Ganar Clientes | César Reyes',
    description: 'Plan de Marketing Digital que convierte visitantes en ventas reales para tu PYME.',
    images: [{
      url: '/images/negocio_resultados.webp',
      width: 1200,
      height: 630,
      alt: 'Estrategia para Ganar Clientes',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function EstrategiaGanarClientesPage() {
  return <EstrategiaGanarClientesClient />;
}
