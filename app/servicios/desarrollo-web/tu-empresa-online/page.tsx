import { Metadata } from 'next';
import TuEmpresaOnlineClient from './TuEmpresaOnlineClient';

export const metadata: Metadata = {
  title: 'Tu Empresa Online - Plataforma Empresarial $700 | César Reyes',
  description: 'Plataforma empresarial completa por $700 USD. Multilingüe (ES/ENG), chatbot IA, hasta 20 páginas, CRM básico. Automatiza y escala globalmente.',
  keywords: ['plataforma empresarial', 'web multilingüe', 'chatbot ia', 'crm básico', 'escalamiento global'],
  openGraph: {
    title: 'Tu Empresa Online $700 | César Reyes',
    description: 'Automatiza consultas 24/7 y conquista mercados internacionales.',
    images: [{
      url: '/images/categorias/desarrollo-web/empresa-online-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tu Empresa Online',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuEmpresaOnlinePage() {
  return <TuEmpresaOnlineClient />;
}
