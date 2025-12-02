import { Metadata } from 'next';
import ConsultoriaEmpresarialClient from './ConsultoriaEmpresarialClient';

export const metadata: Metadata = {
  title: 'Consultoría Empresarial - Mentoría para Iniciar tu Proyecto | César Reyes',
  description: 'Mentoría empresarial para iniciar y consolidar tu proyecto. Transforma tu idea en un negocio próspero con bases sólidas y estrategia clara.',
  keywords: ['consultoría empresarial', 'mentoría negocios', 'asesoría pymes', 'iniciar negocio', 'estrategia empresarial ecuador'],
  openGraph: {
    title: 'Consultoría Empresarial | César Reyes',
    description: 'Mentoría para iniciar y consolidar tu proyecto empresarial con bases sólidas.',
    images: [{
      url: '/images/categorias/analisis-estrategico/hero-1.webp',
      width: 1200,
      height: 630,
      alt: 'Consultoría Empresarial',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function ConsultoriaEmpresarialPage() {
  return <ConsultoriaEmpresarialClient />;
}
