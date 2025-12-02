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
  return <TuSucursalOnlineClient />;
}
