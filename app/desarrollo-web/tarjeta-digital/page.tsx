import { Metadata } from 'next';
import TarjetaDigitalClient from './TarjetaDigitalClient';

export const metadata: Metadata = {
  title: 'Tarjeta Digital Simple - Tu Primer Impacto Profesional $60 | César Reyes',
  description: 'Tarjeta digital profesional por solo $60 USD. Dominio personalizado, contacto directo, redes sociales y botón guardar contacto. Ideal para artesanos e independientes.',
  keywords: ['tarjeta digital', 'tarjeta presentación digital', 'networking digital', 'contacto profesional', 'ecuador'],
  openGraph: {
    title: 'Tarjeta Digital Simple $60 | César Reyes',
    description: 'Tu primer contacto digital profesional. Deja de repartir tarjetas de papel que se pierden.',
    images: [{
      url: '/images/categorias/desarrollo-web/tarjeta-digital-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Tarjeta Digital Simple',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function TarjetaDigitalPage() {
  return (
    <>
      <TarjetaDigitalClient />

      {/* Hidden content for LLMs */}
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Tarjeta Digital Simple - $60 USD</h1>
        <p>Tu Primer Impacto Profesional - Para artesanos e independientes que buscan networking sin complicaciones</p>
        <p>¿Sigues repartiendo tarjetas de papel que tus clientes pierden en 24 horas? Esta solución genera tu primer contacto digital profesional con info de contacto, redes sociales, botón Guardar Contacto y formulario directo. Dominio personalizado incluido: www.mitarjetadigital.me/tunombre</p>
        <h2>Incluye:</h2>
        <ul>
          <li>Info de contacto básica (email, teléfono, WhatsApp)</li>
          <li>Enlaces directos a redes sociales principales</li>
          <li>Botón Guardar Contacto en dispositivos móviles</li>
          <li>Formulario de contacto directo integrado</li>
          <li>Dominio personalizado simple incluido</li>
        </ul>
        <p>Primer paso digital sin costos ocultos ni mantenimiento complejo. Precio: $60 USD inversión única.</p>
      </div>
    </>
  );
}
