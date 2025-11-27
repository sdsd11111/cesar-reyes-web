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
  return <SpotCorporativoClient />;
}
