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
  return (
    <>
      <ReingenieriaProcesosClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Reingeniería y Automatización de Procesos</h1>
        <p>Multiplica tu Productividad: Deja de Perder Dinero en Procesos Lentos. Los procesos ineficientes son el costo oculto que nadie ve pero todos pagan.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Mapeo Completo de tu Operación para documentar procesos y medir tiempos</li>
          <li>Identificación de Cuellos de Botella y desperdicios</li>
          <li>Diseño de Procesos Optimizados que eliminan pasos innecesarios</li>
          <li>Automatización estratégica con herramientas no-code</li>
          <li>Rediseño de flujos de trabajo para mayor rapidez y menos errores</li>
        </ul>
        <p>Reduce los costos operativos en un 20-30% al eliminar pasos innecesarios y tareas repetitivas. Identifica el 30% del tiempo de trabajo desperdiciado en tareas sin valor.</p>
      </div>
    </>
  );
}