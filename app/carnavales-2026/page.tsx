import { Metadata } from 'next';
import CarnavalesClient from './CarnavalesClient';

export const metadata: Metadata = {
  title: 'Plan Carnaval Digital 2026 - Captura Clientes en Feriado | César Reyes',
  description: 'Convierte este feriado de carnaval en clientes para todo el año. Sistema simple para capturar datos, calificaciones y fidelizar clientes.',
  openGraph: {
    title: 'Plan Carnaval Digital 2026 - Captura Clientes en Feriado',
    description: 'Te instalamos un sistema simple para que cada persona que te visite en carnaval deje sus datos y te califique en Google.',
    images: [
      {
        url: '/images/promo-artes-vivas/promo-hero.webp', // Keeping existing image or placeholder for now
        width: 1200,
        height: 630,
        alt: 'Plan Carnaval Digital',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function CarnavalesPage() {
  return (
    <>
      <CarnavalesClient />
    </>
  );
}
