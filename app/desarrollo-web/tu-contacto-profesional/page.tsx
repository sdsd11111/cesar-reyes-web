import { Metadata } from 'next';
import TuContactoProfesionalClient from './TuContactoProfesionalClient';

export const metadata: Metadata = {
  title: 'Tarjeta Digital Profesional - Supera a la Competencia $150 | César Reyes',
  description: 'Tarjeta digital profesional por $150 USD. Diseño responsive, dominio propio, formulario de contacto optimizado. Genera confianza inmediata.',
  keywords: ['tarjeta digital profesional', 'presencia digital', 'imagen profesional', 'pymes ecuador'],
  openGraph: {
    title: 'Tu Contacto Profesional $150 | César Reyes',
    description: 'Impresiona desde el primer contacto con tu tarjeta digital profesional.',
    images: [{
      url: '/images/categorias/desarrollo-web/contacto-profesional-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tarjeta Digital Profesional',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TuContactoProfesionalPage() {
  return (
    <>
      <TuContactoProfesionalClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Tarjeta Digital Profesional - $150 USD</h1>
        <p>Supera a la Competencia - Para pymes que necesitan impresionar desde el primer contacto</p>
        <p>¿Tu competencia te supera en imagen profesional? 75% de clientes juzgan tu credibilidad por tu presencia digital. Esta tarjeta minimalista transmite tu marca profesionalmente, con diseño adaptable a móviles, dominio propio personalizado (www.tunombre.com) y formulario que captura leads reales desde el primer contacto.</p>
        <h2>Incluye:</h2>
        <ul>
          <li>Diseño minimalista profesional responsive</li>
          <li>Información de contacto completa organizada</li>
          <li>Enlaces a todas tus redes sociales</li>
          <li>Formulario de contacto optimizado para conversión</li>
          <li>Dominio personalizado profesional (www.tunombre.com)</li>
          <li>Botón Guardar Contacto mejorado</li>
        </ul>
        <p>Genera confianza inmediata y captura leads sin mantenimiento constante. Precio: $150 USD inversión única.</p>
      </div>
    </>
  );
}
