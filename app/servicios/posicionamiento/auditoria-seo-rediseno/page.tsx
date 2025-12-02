import { Metadata } from 'next';
import AuditoriaSeoRedisenoClient from './AuditoriaSeoRedisenoClient';

export const metadata: Metadata = {
  title: 'Auditoría SEO y Rediseño Web - Descubre Por Qué No Vendes | César Reyes',
  description: 'Auditoría SEO completa desde $1,250 USD. Análisis de +200 factores, rediseño UX optimizado, estrategia de contenido. Descubre exactamente qué te impide vender online.',
  keywords: ['auditoría seo', 'rediseño web', 'optimización seo', 'análisis técnico', 'estrategia contenido'],
  openGraph: {
    title: 'Auditoría SEO y Rediseño Web | César Reyes',
    description: 'Descubre por qué tu competencia vende online y tú no. Diagnóstico profesional con plan de acción.',
    images: [{
      url: '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Auditoría SEO y Rediseño',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function AuditoriaSeoRedisenoPage() {
  return <AuditoriaSeoRedisenoClient />;
}
