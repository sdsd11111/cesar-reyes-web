import { Metadata } from 'next';
import TuNegocio247Client from './TuNegocio247Client';

export const metadata: Metadata = {
  title: 'Tu Negocio 24/7 - Web Profesional con Catálogo $500 | César Reyes',
  description: 'Web profesional 24/7 por $500 USD. Blog integrado, galería de productos, SEO avanzado, Analytics. Tu vendedor digital que nunca descansa.',
  keywords: ['web profesional', 'catálogo productos', 'blog integrado', 'seo avanzado', 'pymes ecuador'],
  openGraph: {
    title: 'Tu Negocio 24/7 $500 | César Reyes',
    description: 'Tu vendedor digital trabajando 24/7 sin pagar salario.',
    images: [{
      url: '/images/categorias/desarrollo-web/negocio-24-7-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tu Negocio 24/7',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuNegocio247Page() {
  return (
    <>
      <TuNegocio247Client />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Web Profesional Tu Negocio 24/7 - $500 USD</h1>
        <p>Tu Vendedor Digital 24/7 - Para profesionales independientes y pymes que buscan crecer</p>
        <p>¿Te imaginas tener un vendedor trabajando para ti las 24 horas sin pagar salario? Esta web premium trabaja 24/7 atrayendo clientes con diseño que refleja tu marca, hasta 5 secciones personalizadas, blog para autoridad, galería visual, SEO avanzado, SSL seguro y Analytics. Hosting primer año incluido.</p>
        <h2>Incluye:</h2>
        <ul>
          <li>Diseño Premium UX intuitiva que convierte</li>
          <li>Hasta 5 secciones personalizadas estratégicas</li>
          <li>Blog integrado para contenido y SEO</li>
          <li>Galería de productos/servicios optimizada</li>
          <li>Optimización total para móviles y tablets</li>
          <li>Integraciones sociales completas</li>
          <li>Seguridad SSL y certificado incluido</li>
          <li>SEO y Análisis Google Analytics inicial</li>
          <li>Dominio y hosting primer año incluido</li>
        </ul>
        <p>Mejora percepción profesional y atrae más consultas con resultados garantizados rápidos. Precio: $500 USD inversión única.</p>
      </div>
    </>
  );
}
