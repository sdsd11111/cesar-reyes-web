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
  return (
    <>
      <ConsultoriaEmpresarialClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Consultoría Empresarial - Inicio y Fundamentos</h1>
        <p>Transforma tu Gran Idea en un Negocio Próspero con Bases Sólidas. La diferencia entre un sueño y un negocio próspero está en una estrategia sólida desde el inicio.</p>
        <h2>Qué incluye:</h2>
        <ul>
          <li>Sesión de Descubrimiento y Análisis FODA para identificar honestamente tus fortalezas, debilidades, oportunidades y amenazas</li>
          <li>Define tu Propuesta de Valor Única (PVU) para que te elijan a ti en 10 segundos</li>
          <li>Define la Misión, Visión y Propósito de tu negocio</li>
          <li>Desarrolla una Estrategia de Marketing Digital realista con cálculo de ROI</li>
          <li>Acciones concretas para atraer clientes desde el primer día</li>
        </ul>
        <p>Evita que tu idea se convierta en un hobby caro y protege tu inversión de los errores más comunes que matan negocios, como la falta de diferenciación o apuntar al público equivocado.</p>
      </div>
    </>
  );
}
