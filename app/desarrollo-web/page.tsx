import { Metadata } from 'next';
import DesarrolloWebClient from './DesarrolloWebClient';

export const metadata: Metadata = {
  title: 'Desarrollo Web Profesional - Inversión Única | César Reyes',
  description: 'Páginas web profesionales desde $60 USD. Sin mensualidades. Desde tarjetas digitales hasta e-commerce completo. Inversión única para PYMEs en Ecuador.',
  keywords: ['desarrollo web', 'páginas web ecuador', 'diseño web', 'e-commerce', 'tienda online', 'sitio web profesional', 'inversión única'],
  openGraph: {
    title: 'Desarrollo Web Profesional - Sin Mensualidades',
    description: 'Tu página web profesional con inversión única. Desde $60 hasta $950 USD. Sin costos recurrentes.',
    images: [
      {
        url: '/images/categorias/desarrollo-web/empresa-online-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Desarrollo Web Profesional',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function DesarrolloWebPage() {
  return (
    <>
      <DesarrolloWebClient />

      {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
      <div style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
        aria-hidden="true">
        <h1>Tu Página Web Profesional con Inversión Única, Sin Mensualidades</h1>
        <p>¿Tu competencia vende más online? Es porque tienen una web que genera confianza. Deja de perder clientes por no tener una presencia digital sólida y obtén un sitio web profesional que te pertenece para siempre.</p>

        <h2>¿Por qué tu competencia vende más si tú tienes mejores productos?</h2>
        <p>La respuesta es simple: una página web profesional. Según estadísticas, el 90.8% de micro y pequeñas empresas en Ecuador NO tienen una web, perdiendo el 75% de credibilidad ante clientes potenciales que investigan online antes de comprar.</p>

        <h2>Soluciones de Desarrollo Web: De $60 a $950 USD (Inversión Única)</h2>

        <h3>Tarjeta Digital Simple - $60 USD</h3>
        <p>Para artesanos e independientes que buscan networking sin complicaciones.</p>
        <p>¿Sigues repartiendo tarjetas de papel que tus clientes pierden en 24 horas? Esta solución genera tu primer contacto digital profesional con info de contacto, redes sociales, botón Guardar Contacto y formulario directo. Dominio personalizado incluido: www.mitarjetadigital.me/tunombre</p>
        <ul>
          <li>Info de contacto básica (email, teléfono, WhatsApp)</li>
          <li>Enlaces directos a redes sociales principales</li>
          <li>Botón Guardar Contacto en dispositivos móviles</li>
          <li>Formulario de contacto directo integrado</li>
          <li>Dominio personalizado simple incluido</li>
        </ul>

        <h3>Tarjeta Digital Profesional - $150 USD</h3>
        <p>Para pymes que necesitan impresionar desde el primer contacto.</p>
        <p>¿Tu competencia te supera en imagen profesional? 75% de clientes juzgan tu credibilidad por tu presencia digital. Esta tarjeta minimalista transmite tu marca profesionalmente, con diseño adaptable a móviles, dominio propio personalizado (www.tunombre.com) y formulario que captura leads reales desde el primer contacto.</p>
        <ul>
          <li>Diseño minimalista profesional responsive</li>
          <li>Información de contacto completa organizada</li>
          <li>Enlaces a todas tus redes sociales</li>
          <li>Formulario de contacto optimizado para conversión</li>
          <li>Dominio personalizado profesional (www.tunombre.com)</li>
          <li>Botón Guardar Contacto mejorado</li>
        </ul>

        <h3>Primera Web Estática - $250 USD</h3>
        <p>Para artesanos y pymes iniciando su posicionamiento digital.</p>
        <p>¿Cuántos clientes pierdes porque no apareces en Google cuando buscan tu servicio? Esta web estática profesional posiciona tu marca con diseño UX/UI intuitivo, SEO básico optimizado, dominio propio, hosting primer año incluido y botones WhatsApp para conversión rápida. Sin mensualidades sorpresa.</p>
        <ul>
          <li>Diseño UX/UI intuitivo que guía hacia productos</li>
          <li>Secciones clave: Inicio, Servicios, Productos, Contacto</li>
          <li>SEO básico optimizado para búsquedas locales</li>
          <li>Dominio profesional propio incluido</li>
          <li>Hosting premium primer año sin costo adicional</li>
          <li>Botones WhatsApp para comunicación inmediata</li>
          <li>Integración Google Maps y redes sociales</li>
        </ul>

        <h3>Web Profesional - $500 USD</h3>
        <p>Para profesionales independientes y pymes que buscan crecer.</p>
        <p>¿Te imaginas tener un vendedor trabajando para ti las 24 horas sin pagar salario? Esta web premium trabaja 24/7 atrayendo clientes con diseño que refleja tu marca, hasta 5 secciones personalizadas, blog para autoridad, galería visual, SEO avanzado, SSL seguro y Analytics. Hosting primer año incluido.</p>
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

        <h3>Plataforma Empresarial - $700 USD</h3>
        <p>Para pymes escalando operaciones y expansión internacional.</p>
        <p>¿Pierdes clientes porque no respondes rápido o no hablas inglés? Esta plataforma robusta con chatbot IA responde instantáneamente 24/7, es multilingüe (ES/ENG), tiene hasta 20 páginas estratégicas, CRM básico, SEO avanzado y integraciones empresariales. Automatiza consultas mientras duermes y conquista mercados internacionales.</p>
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

        <h3>E-commerce / Tienda Online - $950 USD</h3>
        <p>Para artesanos y pymes vendiendo productos físicos/digitales.</p>
        <p>¿Cuánto dinero dejas de ganar cada día sin vender online? Esta tienda virtual profesional vende automáticamente 24/7 con hasta 40 productos, chatbot, pagos integrados (tarjetas/PayPal), multilingüe para mercados internacionales, SEO optimizado, Pixel Facebook para campañas, Analytics y gestión de inventario. Multiplica ingresos desde día uno.</p>
        <ul>
          <li>Diseño Premium UX Responsive para ventas móviles</li>
          <li>Hasta 40 productos con descripciones SEO</li>
          <li>Sistema de reseñas y valoraciones integrado</li>
          <li>Multilingüe: Español e Inglés para alcance global</li>
          <li>Carrito de compras optimizado para conversión</li>
          <li>Pagos seguros: Tarjetas, PayPal y más</li>
          <li>Capacitación gestión de inventario incluida</li>
          <li>Pixel Facebook y Google Analytics avanzado</li>
          <li>Seguridad SSL y protección anti-hacking</li>
          <li>SEO básico y aceleración de carga (caching)</li>
          <li>Dominio y hosting primer año incluido</li>
        </ul>

        <h2>Beneficios de Tener Tu Página Web</h2>
        <ul>
          <li>Ahorro de Dinero: Inversión única vs. suscripciones que suman miles en años</li>
          <li>Credibilidad Instantánea: El 75% de los clientes juzgan tu negocio por tu sitio web</li>
          <li>ROI Evidente: Un retorno medible en ventas, no solo en likes sin conversión</li>
          <li>Trabajo 24/7: Tu página web es tu mejor vendedor, trabajando sin descanso</li>
        </ul>

        <h2>Cómo Creamos Tu Página Web en 4 Semanas</h2>
        <ul>
          <li>Semana 1: Descubrimiento - Diagnóstico honesto de tu presencia digital</li>
          <li>Semana 2: Desarrollo - Creación de tu sitio web profesional</li>
          <li>Semana 3: Revisión - Ajustes y perfeccionamiento</li>
          <li>Semana 4: Lanzamiento - Tu web lista para generar ventas</li>
        </ul>
      </div>
    </>
  );
}