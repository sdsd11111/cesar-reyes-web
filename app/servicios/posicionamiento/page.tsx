import { Metadata } from 'next';
import PosicionamientoClient from './PosicionamientoClient';

export const metadata: Metadata = {
  title: 'Posicionamiento Web y SEO en Ecuador | César Reyes',
  description: 'Aparece en la primera página de Google. Auditoría SEO profesional y alianza exclusiva para e-commerce. El 81% de tus clientes buscan en Google antes de comprar.',
  keywords: ['posicionamiento web', 'seo ecuador', 'auditoría seo', 'primera página google', 'marketing digital', 'seo local'],
  openGraph: {
    title: 'Posicionamiento Web - Aparece en Google',
    description: 'Róbale el tráfico a tu competencia. Estrategia SEO que te posiciona en la primera página de Google.',
    images: [
      {
        url: '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Posicionamiento Web y SEO',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PosicionamientoPage() {
  return <PosicionamientoClient />;
}
