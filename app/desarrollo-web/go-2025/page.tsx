import { Metadata } from 'next';
import Go2025Client from './Go2025Client';

export const metadata: Metadata = {
  title: 'Páginas Web GO 2025 - Tu Primera Web Profesional $250 | César Reyes',
  description: 'Primera web estática profesional por $250 USD. SEO básico, dominio propio, hosting incluido. Posiciona tu marca en Google sin mensualidades.',
  keywords: ['página web profesional', 'sitio web ecuador', 'web estática', 'seo básico', 'hosting incluido'],
  openGraph: {
    title: 'GO 2025 - Primera Web $250 | César Reyes',
    description: 'Tu presencia sólida en Google. Web profesional sin costos recurrentes.',
    images: [{
      url: '/images/categorias/desarrollo-web/empresa-online-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Páginas Web GO 2025',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function Go2025Page() {
  return (
    <>
      <Go2025Client />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Primera Web Estática GO 2025 - $250 USD</h1>
        <p>Tu Presencia Sólida en Google - Para artesanos y pymes iniciando su posicionamiento digital</p>
        <p>¿Cuántos clientes pierdes porque no apareces en Google cuando buscan tu servicio? Esta web estática profesional posiciona tu marca con diseño UX/UI intuitivo, SEO básico optimizado, dominio propio, hosting primer año incluido y botones WhatsApp para conversión rápida. Sin mensualidades sorpresa.</p>
        <h2>Incluye:</h2>
        <ul>
          <li>Diseño UX/UI intuitivo que guía hacia productos</li>
          <li>Secciones clave: Inicio, Servicios, Productos, Contacto</li>
          <li>SEO básico optimizado para búsquedas locales</li>
          <li>Dominio profesional propio incluido</li>
          <li>Hosting premium primer año sin costo adicional</li>
          <li>Botones WhatsApp para comunicación inmediata</li>
          <li>Integración Google Maps y redes sociales</li>
        </ul>
        <p>Conversión de visitas en clientes sin complicaciones técnicas ni costos recurrentes. Precio: $250 USD inversión única.</p>
      </div>
    </>
  );
}
