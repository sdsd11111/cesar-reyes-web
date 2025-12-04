import { Metadata } from 'next';
import TuSucursalOnlineClient from './TuSucursalOnlineClient';

export const metadata: Metadata = {
  title: 'Tu Sucursal Online - E-commerce Completo $950 | César Reyes',
  description: 'Tienda online completa por $950 USD. Hasta 40 productos, pagos integrados, multilingüe, Pixel Facebook, gestión inventario. Tu sucursal digital global.',
  keywords: ['ecommerce ecuador', 'tienda online', 'venta online', 'pagos integrados', 'tienda virtual'],
  openGraph: {
    title: 'Tu Sucursal Online $950 | César Reyes',
    description: 'Vende automáticamente 24/7 a nivel global con tu e-commerce profesional.',
    images: [{
      url: '/images/categorias/desarrollo-web/negocio-24-7-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tu Sucursal Online',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuSucursalOnlinePage() {
  return (
    <>
      <TuSucursalOnlineClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>E-commerce Completo Tu Sucursal Online - $950 USD</h1>
        <p>Tu Sucursal Digital Global. Para artesanos y pymes vendiendo productos físicos/digitales.</p>
        <p>¿Cuánto dinero dejas de ganar cada día sin vender online? Esta tienda virtual profesional vende automáticamente 24/7 con hasta 40 productos, chatbot, pagos integrados (tarjetas/PayPal), multilingüe para mercados internacionales, SEO optimizado, Pixel Facebook para campañas, Analytics y gestión de inventario. Multiplica ingresos desde día uno.</p>
        <h2>Incluye:</h2>
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
          <li>SEO básico y aceleración de carga</li>
          <li>Dominio y hosting primer año incluido</li>
        </ul>
        <p>Automatiza ventas globales 24/7 y rastrea campañas efectivamente para crecimiento digital sólido. Precio: $950 USD inversión única.</p>
      </div>
    </>
  );
}
