import { Metadata } from 'next';
import AlianzaExclusivaClient from './AlianzaExclusivaClient';

export const metadata: Metadata = {
  title: 'Alianza Exclusiva - E-commerce Sin Inversión Inicial | César Reyes',
  description: 'E-commerce completo sin inversión inicial. $500/mes x 24 meses. Incluye desarrollo, fotos profesionales, SEO continuo y marketing. Propiedad 100% tuya al finalizar.',
  keywords: ['ecommerce sin inversión', 'alianza exclusiva', 'tienda online financiada', 'seo continuo', 'marketing digital'],
  openGraph: {
    title: 'Alianza Exclusiva - E-commerce $0 Inicial | César Reyes',
    description: 'Tu tienda online completa sin riesgo financiero. Solo $500/mes x 24 meses.',
    images: [{
      url: '/images/categorias/posicionamiento-web/alianza-exclusiva-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Alianza Exclusiva',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function AlianzaExclusivaPage() {
  return <AlianzaExclusivaClient />;
}
