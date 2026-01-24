import { Metadata } from 'next';
import ContabilidadClient from './ContabilidadClient';

export const metadata: Metadata = {
    title: 'Control Financiero para Hosterías | César Reyes Jaramillo',
    description: 'Recupera 12 horas de tu mes y olvida las facturas perdidas. Sistema financiero local para pequeñas hosterías y hoteles en Ecuador.',
    openGraph: {
        title: 'Control Financiero para Hosterías - Olvida las facturas perdidas',
        description: 'Sistema diseñado para Hosterías, Hostales y Pequeños Hoteles que buscan control total sin mensualidades.',
        images: [
            {
                url: '/images/sistema-contabilidad/hero-dashboard.jpeg',
                width: 1200,
                height: 630,
                alt: 'Control Financiero para Hosterías',
            },
        ],
        locale: 'es_EC',
        type: 'website',
    },
};

export default function ContabilidadPage() {
    return (
        <>
            <ContabilidadClient />
        </>
    );
}
