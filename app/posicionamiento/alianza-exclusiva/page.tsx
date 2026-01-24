import { Metadata } from 'next';
import AlianzaExclusivaClient from './AlianzaExclusivaClient';

export const metadata: Metadata = {
  title: 'Alianza Exclusiva - E-commerce Sin Inversión Inicial | César Reyes',
  description: 'E-commerce completo sin inversión inicial. $500/mes x 24 meses. Incluye desarrollo, fotos profesionales, SEO continuo y marketing. Propiedad 100% tuya al finalizar.',
  keywords: ['ecommerce sin inversión', 'alianza exclusiva', 'tienda online financiada', 'seo continuo', 'marketing digital'],
  openGraph: {
    title: 'Alianza Exclusiva - E-commerce $0 Inicial | César Reyes',
    description: 'Tu tienda online completa sin riesgo financiero. Solo $500/mes x 24 meses.',
    images: [{
      url: '/images/categorias/posicionamiento-web/alianza-exclusiva-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Alianza Exclusiva',
    }],
    locale: 'es_EC', type: 'website',
  },
};

export default function AlianzaExclusivaPage() {
  return (
    <>
      <AlianzaExclusivaClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Alianza Exclusiva - E-commerce Sin Inversión Inicial</h1>
        <p>$500/mes x 24 meses - Inversión Inicial $0. Tu E-commerce Completo Sin Riesgo Financiero.</p>
        <p>Para artesanos, independientes y PYMEs que quieren vender online pero no tienen capital inicial para e-commerce profesional ni conocimientos técnicos.</p>
        <p>¿Te frena no tener $5,000-$10,000 USD para invertir en e-commerce profesional? Imagina tener tu tienda online completa, posicionada en Google y generando ventas, sin desembolsar NADA inicial. Asumimos desarrollo valorado en $1,550 USD: sitio e-commerce 30 productos, fotos profesionales, hosting 24 meses, estudio mercado y SEO continuo. Solo pagas $500 mensuales mientras vendemos juntos.</p>
        <h2>Beneficios Clave:</h2>
        <ul>
          <li>Inversión Inicial Cero: Sin riesgos financieros upfront, comenzamos nosotros</li>
          <li>E-commerce Listo 30 Días: Tienda profesional con 30 productos y fotos incluidas</li>
          <li>Posicionamiento Google Continuo: SEO mensual para aparecer en búsquedas relevantes</li>
          <li>Propiedad Total 24 Meses: Al finalizar, 100% del sitio es tuyo sin restricciones</li>
          <li>Exclusividad Sectorial: No trabajamos con tu competencia directa (contrato)</li>
        </ul>
        <h2>Desarrollo E-commerce Completo (Valorado $1,550):</h2>
        <ul>
          <li>Sitio e-commerce profesional con hasta 30 productos individuales</li>
          <li>Diseño UX/UI responsive optimizado para ventas móviles</li>
          <li>Carrito de compras optimizado para conversión</li>
          <li>Integración pagos: Tarjetas, PayPal, transferencias</li>
          <li>Sistema gestión inventario con capacitación incluida</li>
          <li>Dominio profesional personalizado (www.tunegocio.com)</li>
          <li>Hosting premium 24 meses incluido sin costo adicional</li>
          <li>Certificado SSL seguridad y protección datos</li>
        </ul>
        <h2>Recursos y Contenido Profesional:</h2>
        <ul>
          <li>Sesión fotográfica profesional de productos incluida</li>
          <li>Descripciones SEO optimizadas para cada producto</li>
          <li>Estudio de mercado y análisis competencia inicial</li>
          <li>Logo profesional o adaptación de existente</li>
        </ul>
        <h2>Plan Marketing y Posicionamiento 24 Meses:</h2>
        <ul>
          <li>Estrategia SEO continua con keywords investigadas (SEMrush)</li>
          <li>5 artículos blog mensuales optimizados para Google</li>
          <li>20 posts profesionales redes sociales mensual</li>
          <li>1 campaña publicitaria enfocada por mes</li>
          <li>Optimización SEO técnica continua</li>
          <li>Informes mensuales detallados: tráfico, posiciones, conversiones</li>
          <li>Mantenimiento técnico completo: actualizaciones, seguridad, backups</li>
        </ul>
        <h2>Garantías y Propiedad:</h2>
        <ul>
          <li>Exclusividad sectorial contractual en tu zona geográfica</li>
          <li>Transferencia 100% propiedad tras 24 meses: sitio, dominio, contenido</li>
          <li>Sin restricciones técnicas ni dependencias post-contrato</li>
          <li>Opción renovación hosting económica ($50-80 anuales)</li>
          <li>Opción continuar servicios marketing basado en resultados</li>
        </ul>
        <p>Forma una sociedad real donde asumimos riesgo financiero inicial y trabajamos juntos para generar ventas. Tú enfócate en tu negocio, nosotros en posicionarte en Google y atraer clientes. Al final, todo es tuyo sin ataduras.</p>
      </div>
    </>
  );
}
