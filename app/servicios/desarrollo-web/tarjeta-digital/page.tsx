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
  return <TarjetaDigitalClient />;
}
