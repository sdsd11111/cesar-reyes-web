import { Metadata } from 'next';
import PromoRestaurantesArtesVivasClient from './PromoRestaurantesArtesVivasClient';

export const metadata: Metadata = {
  title: 'Página Web para Restaurantes - Tecnología Apta para No-Tecnológicos | César Reyes',
  description: 'Si sabes enviar un WhatsApp, sabes administrar tu nuevo Sitio Web. Olvida a los programadores. Actualiza precios en 1 minuto. Tu restaurante abierto 24/7.',
  openGraph: {
    title: 'Página Web para Restaurantes - Tecnología Apta para No-Tecnológicos',
    description: 'Actualiza tu menú y precios en 1 minuto desde tu celular. Sin depender de programadores.',
    images: [
      {
        url: '/images/promo-artes-vivas/promo-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Página Web para Restaurantes',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PromoRestaurantesArtesVivasPage() {
  return (
    <>
      <PromoRestaurantesArtesVivasClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Página Web para Restaurantes - Tecnología Apta para No-Tecnológicos</h1>
        <p>Si sabes enviar un WhatsApp, sabes administrar tu nuevo Sitio Web. Actualiza precios en 1 minuto desde tu celular sin depender de programadores. Tu restaurante abierto 24/7 en internet.</p>
        <ul>
          <li>Actualización de menú y precios en 1 minuto</li>
          <li>Sin necesidad de programadores</li>
          <li>Interfaz simple como WhatsApp</li>
          <li>Tu restaurante visible 24/7</li>
          <li>Dominio propio incluido</li>
          <li>Integración con redes sociales</li>
        </ul>
        <p>Promoción especial para restaurantes. Tecnología simple para dueños que no son tecnológicos.</p>
      </div>
    </>
  );
}
