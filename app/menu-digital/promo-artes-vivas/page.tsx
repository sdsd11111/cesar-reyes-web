import { Metadata } from 'next';
import PromoArtesVivasClient from './PromoArtesVivasClient';

export const metadata: Metadata = {
  title: 'Páginas Web para Artesanos - Festival Artes Vivas Loja 2025 | César Reyes',
  description: 'Promoción Exclusiva Solo Para Participantes. Amplía tu visibilidad más allá de las redes sociales. Un sitio web te permite ser encontrado fácilmente por clientes.',
  openGraph: {
    title: 'Páginas Web para Artesanos - Festival Artes Vivas Loja 2025',
    description: 'Tu artesanía merece ser vista por el mundo. Sitio web profesional listo para el festival.',
    images: [
      {
        url: '/images/promo-artes-vivas/hero 1.webp',
        width: 1200,
        height: 630,
        alt: 'Páginas Web para Artesanos',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PromoArtesVivasPage() {
  return (
    <>
      <PromoArtesVivasClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Páginas Web para Artesanos - Festival Artes Vivas Loja 2025</h1>
        <p>Promoción Exclusiva para Participantes del Festival. Tu artesanía merece ser vista por el mundo entero, no solo por quienes pasan por tu stand.</p>
        <p>Amplía tu visibilidad más allá de las redes sociales. Un sitio web te permite ser encontrado fácilmente por clientes potenciales que buscan exactamente lo que ofreces.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Página web profesional para mostrar tu artesanía</li>
          <li>Galería de productos con descripciones</li>
          <li>Formulario de contacto directo</li>
          <li>Integración con redes sociales</li>
          <li>Dominio personalizado incluido</li>
          <li>Optimización para búsquedas locales</li>
        </ul>
        <p>Promoción especial para artesanos participantes del Festival Artes Vivas Loja 2025. Tu trabajo merece una vitrina digital profesional.</p>
      </div>
    </>
  );
}
