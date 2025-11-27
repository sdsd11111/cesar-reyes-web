import { Metadata } from 'next';
import ViralidadEstrategicaClient from './ViralidadEstrategicaClient';

export const metadata: Metadata = {
    title: 'Viralidad Estratégica - QR de 1 Clic para Marketing Automático | César Reyes',
    description: 'Un QR personalizado de 1 clic para que tus clientes suban fotos a Google Maps y mejoren tu SEO local. Sin apps, sin fricción. Instalación en 72 horas por $60 USD pago único.',
    openGraph: {
        title: 'Viralidad Estratégica - Marketing Automático con QR',
        description: 'Convierte la vanidad de tus clientes en SEO estratégico. QR personalizado que redirige a Google Maps o tu Galería Web.',
        images: [
            {
                url: '/images/viralidad/hero-bg.webp',
                width: 1200,
                height: 630,
                alt: 'Viralidad Estratégica QR',
            },
        ],
        locale: 'es_EC',
        type: 'website',
    },
};

export default function ViralidadEstrategicaPage() {
    return <ViralidadEstrategicaClient />;
}