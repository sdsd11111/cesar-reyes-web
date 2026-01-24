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
  return (
    <>
      <EstrategiaGanarClientesClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Estrategia para Ganar Clientes - Plan de Marketing Probado</h1>
        <p>Ganar clientes no es cuestión de suerte, sino de seguir un plan con fundamentos. Esta estrategia completa te da la ventaja competitiva para atraer exactamente el tipo de clientes que necesitas.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Análisis Exhaustivo de Mercado y Competencia (FODA) para entender qué estrategias funcionan en tu industria</li>
          <li>Diferenciación real que hace que los clientes cualificados te elijan a ti sobre tus rivales</li>
          <li>Plan Listo para Implementar con acciones concretas desde el día uno</li>
          <li>Maximiza tu ROI (Retorno de Inversión) optimizando los recursos</li>
          <li>Garantiza que cada inversión tenga un propósito medible</li>
        </ul>
        <p>Muchas empresas fracasan por no conocer realmente a su competencia y mercado. Este plan te da la ventaja competitiva basada en datos reales del mercado ecuatoriano.</p>
      </div>
    </>
  );
}
