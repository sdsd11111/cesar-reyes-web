import { Metadata } from 'next';
import SpotCorporativoClient from './SpotCorporativoClient';

export const metadata: Metadata = {
  title: 'Contenido Corporativo Premium - Spot Publicitario | César Reyes',
  description: 'Listo en 5 días. Convierte tu TV en una máquina de ventas 24/7. Contenido profesional que vende tus productos sin que tengas que hacer nada.',
  openGraph: {
    title: 'Contenido Corporativo Premium - Spot Publicitario',
    description: 'Transforma tu TV en un vendedor silencioso. Videos profesionales de tus productos listos en 5 días.',
    images: [
      {
        url: '/images/spot-corporativo.webp',
        width: 1200,
        height: 630,
        alt: 'Spot Corporativo Premium',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function SpotCorporativoPage() {
  return (
    <>
      <SpotCorporativoClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Contenido Corporativo Premium - Spot Publicitario</h1>
        <p>Listo en 5 días. Convierte tu TV en una máquina de ventas 24/7. Videos profesionales que venden tus productos automáticamente.</p>
        <ul>
          <li>Producción profesional de videos de productos</li>
          <li>Listo en 5 días</li>
          <li>Contenido optimizado para ventas</li>
          <li>Rotación automática en tu TV</li>
          <li>Sin que tengas que estar vendiendo constantemente</li>
          <li>Tu vendedor silencioso 24/7</li>
        </ul>
        <p>Ideal para restaurantes, tiendas, showrooms y negocios que quieren que sus pantallas vendan por ellos.</p>
      </div>
    </>
  );
}
