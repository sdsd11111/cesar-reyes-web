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
  return (
    <>
      <TuEmpresaOnlineClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Plataforma Empresarial Tu Empresa Online - $700 USD</h1>
        <p>Automatiza y Escala Globalmente - Para pymes escalando operaciones y expansión internacional</p>
        <p>¿Pierdes clientes porque no respondes rápido o no hablas inglés? Esta plataforma robusta con chatbot IA responde instantáneamente 24/7, es multilingüe (ES/ENG), tiene hasta 20 páginas estratégicas, CRM básico, SEO avanzado y integraciones empresariales. Automatiza consultas mientras duermes y conquista mercados internacionales.</p>
        <h2>Incluye:</h2>
        <ul>
          <li>Diseño Corporativo Premium escalable</li>
          <li>Hasta 20 páginas estratégicas (Productos, Blog, Políticas)</li>
          <li>Capacidad Multilingüe: Español e Inglés</li>
          <li>Chatbot IA para respuesta automática 24/7</li>
          <li>Formularios avanzados con validación</li>
          <li>Integración Google Maps empresarial</li>
          <li>Google Analytics avanzado y CRM básico</li>
          <li>SEO Avanzado con keywords estratégicas</li>
          <li>Seguridad SSL empresarial incluida</li>
          <li>Dominio y hosting primer año incluido</li>
        </ul>
        <p>Automatiza interacciones y escala internacionalmente con presencia moderna y robusta. Precio: $700 USD inversión única.</p>
      </div>
    </>
  );
}
