import { Metadata } from 'next';
import ReingenieriaProcesosClient from './ReingenieriaProcesosClient';

export const metadata: Metadata = {
  title: 'Reingeniería de Procesos - Procesos Lentos y Caros | César Reyes',
  description: 'Multiplica tu productividad eliminando procesos lentos. Reingeniería y automatización para reducir costos operativos en 20-30% y aumentar eficiencia.',
  keywords: ['reingeniería procesos', 'automatización', 'optimización procesos', 'reducción costos', 'eficiencia operativa'],
  openGraph: {
    title: 'Reingeniería de Procesos | César Reyes',
    description: 'Deja de perder dinero en procesos lentos. Optimiza y automatiza tu operación.',
    images: [{
      url: '/images/categorias/analisis-estrategico/hero-2.webp',
      width: 1200,
      height: 630,
      alt: 'Reingeniería de Procesos',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function ReingenieriaProcesosPage() {
  return <ReingenieriaProcesosClient />;
}