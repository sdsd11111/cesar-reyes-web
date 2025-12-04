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
    return (
        <>
            <ViralidadEstrategicaClient />
            <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                <h1>Viralidad Estratégica - QR de 1 Clic $60 USD</h1>
                <p>Marketing Automático: Convierte la Vanidad de tus Clientes en SEO Estratégico. Un QR personalizado de 1 clic para que tus clientes suban fotos a Google Maps y mejoren tu SEO local automáticamente.</p>
                <h2>Qué incluye:</h2>
                <ul>
                    <li>QR personalizado de 1 clic sin fricción</li>
                    <li>Redirige a Google Maps o Galería Web propia</li>
                    <li>Sin apps que descargar para el cliente</li>
                    <li>Instalación en 72 horas</li>
                    <li>Diseño de póster/señalética incluido</li>
                    <li>Impacto directo en SEO local</li>
                </ul>
                <p>Pago único de $60 USD. Tus clientes generan contenido que mejora tu posicionamiento en Google Maps automáticamente. Ideal para restaurantes, cafeterías, hoteles y negocios físicos.</p>
            </div>
        </>
    );
}