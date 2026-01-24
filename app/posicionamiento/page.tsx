import { Metadata } from 'next';
import PosicionamientoClient from './PosicionamientoClient';

export const metadata: Metadata = {
  title: 'Posicionamiento Web y SEO en Ecuador | César Reyes',
  description: 'Aparece en la primera página de Google. Auditoría SEO profesional y alianza exclusiva para e-commerce. El 81% de tus clientes buscan en Google antes de comprar.',
  keywords: ['posicionamiento web', 'seo ecuador', 'auditoría seo', 'primera página google', 'marketing digital', 'seo local'],
  openGraph: {
    title: 'Posicionamiento Web - Aparece en Google',
    description: 'Róbale el tráfico a tu competencia. Estrategia SEO que te posiciona en la primera página de Google.',
    images: [
      {
        url: '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Posicionamiento Web y SEO',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function PosicionamientoPage() {
  return (
    <>
      <PosicionamientoClient />

      {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
      <div style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
        aria-hidden="true">
        <h1>¿Tu Competencia Aparece en Google y Tú No? Róbales el Tráfico.</h1>
        <p>El 81% de tus clientes potenciales buscan en Google antes de comprar. Si no estás en la primera página, eres invisible. Con nuestra estrategia SEO, te posicionamos para capturar ese tráfico y convertirlo en ventas reales.</p>

        <h2>Por Qué Estar en Google No Es Opcional (Es Supervivencia)</h2>
        <p>¿Cuántos clientes pierdes cada día porque tu competencia aparece primero en Google y tú no existes? El 81% de compradores buscan en Google antes de comprar. Si no apareces en la primera página, NO existes para el 90% de tu mercado potencial.</p>

        <h2>Soluciones de Posicionamiento</h2>

        <h3>Auditoría SEO y Rediseño Web</h3>
        <p>Inversión Única Desde $1,250 USD</p>
        <p>Para PYMEs con sitio web existente que no genera tráfico ni ventas, necesitan diagnóstico técnico profesional y estrategia de contenido efectiva.</p>
        <p>¿Por qué tu competencia vende online y tú no, aunque tengas mejor producto? Porque ellos aparecen en Google y tú no. Esta auditoría analiza +200 factores técnicos y de contenido que Google evalúa, identificando exactamente qué te impide aparecer en la primera página. Incluye rediseño UX optimizado para conversión. El 81% de compradores buscan en Google: si no estás ahí, no existes.</p>

        <h4>Beneficios Auditoría SEO:</h4>
        <ul>
          <li>Mayor Visibilidad: Aparece en primeros resultados cuando clientes buscan tu servicio</li>
          <li>Tráfico Calificado: Visitantes interesados que buscan exactamente lo que vendes</li>
          <li>Mayor Conversión: Rediseño UX optimizado para que visitantes compren/contacten</li>
          <li>Errores Técnicos Resueltos: Identifica problemas de rastreo, velocidad, indexación</li>
          <li>ROI Medible: Reportes mensuales con posiciones, tráfico y conversiones reales</li>
        </ul>

        <h4>Incluye Análisis Técnico Exhaustivo:</h4>
        <ul>
          <li>Auditoría completa de +200 factores SEO on-page y off-page</li>
          <li>Análisis de velocidad de carga y Core Web Vitals (Google ranking)</li>
          <li>Revisión estructura URLs, metadatos, headers, enlaces internos</li>
          <li>Identificación errores rastreo, indexación y penalizaciones Google</li>
        </ul>

        <h4>Análisis de Contenido y Competencia:</h4>
        <ul>
          <li>Investigación keywords con volumen de búsqueda real (SEMrush)</li>
          <li>Análisis competencia: qué keywords posicionan tus rivales</li>
          <li>Auditoría contenido existente y oportunidades de mejora</li>
          <li>Estrategia contenido: artículos pilares y clusters recomendados</li>
        </ul>

        <h4>Rediseño UX/UI para Conversión:</h4>
        <ul>
          <li>Rediseño de páginas clave orientado a acción del usuario</li>
          <li>Optimización formularios de contacto y CTAs estratégicos</li>
          <li>Mejora navegación y arquitectura de información</li>
          <li>Diseño responsive optimizado para móviles (60% tráfico)</li>
        </ul>

        <h3>Alianza Exclusiva Cero Inversión</h3>
        <p>$500/mes x 24 meses - Inversión Inicial $0</p>
        <p>Para artesanos, independientes y PYMEs que quieren vender online pero no tienen capital inicial para e-commerce profesional ni conocimientos técnicos.</p>
        <p>¿Te frena no tener $5,000-$10,000 USD para invertir en e-commerce profesional? Imagina tener tu tienda online completa, posicionada en Google y generando ventas, sin desembolsar NADA inicial. Asumimos desarrollo valorado en $1,550 USD: sitio e-commerce 30 productos, fotos profesionales, hosting 24 meses, estudio mercado y SEO continuo. Solo pagas $500 mensuales mientras vendemos juntos.</p>

        <h4>Beneficios Alianza Exclusiva:</h4>
        <ul>
          <li>Inversión Inicial Cero: Sin riesgos financieros upfront, comenzamos nosotros</li>
          <li>E-commerce Listo 30 Días: Tienda profesional con 30 productos y fotos incluidas</li>
          <li>Posicionamiento Google Continuo: SEO mensual para aparecer en búsquedas relevantes</li>
          <li>Propiedad Total 24 Meses: Al finalizar, 100% del sitio es tuyo sin restricciones</li>
          <li>Exclusividad Sectorial: No trabajamos con tu competencia directa (contrato)</li>
        </ul>

        <h4>Desarrollo E-commerce Completo (Valorado $1,550):</h4>
        <ul>
          <li>Sitio e-commerce profesional con hasta 30 productos individuales</li>
          <li>Diseño UX/UI responsive optimizado para ventas móviles</li>
          <li>Carrito de compras optimizado para conversión</li>
          <li>Integración pagos: Tarjetas, PayPal, transferencias</li>
          <li>Sistema gestión inventario con capacitación incluida</li>
          <li>Dominio profesional personalizado</li>
          <li>Hosting premium 24 meses incluido sin costo adicional</li>
          <li>Certificado SSL seguridad y protección datos</li>
        </ul>

        <h4>Plan Marketing y Posicionamiento 24 Meses:</h4>
        <ul>
          <li>Estrategia SEO continua con keywords investigadas (SEMrush)</li>
          <li>5 artículos blog mensuales optimizados para Google</li>
          <li>20 posts profesionales redes sociales mensual</li>
          <li>1 campaña publicitaria enfocada por mes</li>
          <li>Optimización SEO técnica continua</li>
          <li>Informes mensuales detallados: tráfico, posiciones, conversiones</li>
        </ul>

        <h2>Preguntas Frecuentes sobre Posicionamiento Web</h2>

        <div>
          <h3>¿Cuánto dinero pierdo cada mes sin aparecer en Google?</h3>
          <p>Si tu sector tiene 1,000 búsquedas mensuales en Google (ej: 'abogado Quito') y no apareces en primera página, pierdes el 90% de esos clientes potenciales. Con tasa conversión promedio 5% y ticket $100, son $4,500 USD mensuales que regalas a la competencia. El costo de NO estar es enorme.</p>
        </div>

        <div>
          <h3>¿Por qué mi competencia aparece primero si yo tengo mejores productos?</h3>
          <p>Porque Google no sabe que tu producto es mejor; lee código, contenido optimizado y velocidad de carga. Tu competencia invirtió en SEO técnico para cumplir con los +200 factores que Google mide, mientras tú dependes de redes sociales donde nadie te busca activamente.</p>
        </div>

        <div>
          <h3>¿Cuánto cuesta posicionamiento vs. seguir pagando anuncios eternamente?</h3>
          <p>Anuncios: $300-$1,000 mensual PARA SIEMPRE. Dejas de pagar, desapareces. SEO: Inversión inicial con beneficio permanente. Sigues apareciendo orgánicamente SIN pagar por clic años después. Los clientes confían más en resultados orgánicos (70%) que en anuncios (30%).</p>
        </div>

        <div>
          <h3>¿Puedo hacer SEO yo mismo con tutoriales de YouTube?</h3>
          <p>Claro, como puedes operarte la apéndice viendo videos. SEO requiere dominar +200 factores, herramientas profesionales ($200-$500/mes), análisis técnico y creación de contenido constante. Tu tiempo vale dinero. ¿Prefieres invertirlo en aprender o en VENDER?</p>
        </div>

        <div>
          <h3>¿En cuánto tiempo veo resultados reales en posiciones y ventas?</h3>
          <p>SEO NO es instantáneo. Realidad: Primeras mejoras técnicas en 2-4 semanas, subidas de posiciones en 1-3 meses, y tráfico significativo en 3-6 meses. Cada día sin empezar es un mes más tarde en ver resultados. Tu competencia ya te lleva meses de ventaja.</p>
        </div>

        <div>
          <h3>¿El SEO funciona para negocios locales pequeños?</h3>
          <p>Funciona MEJOR. Es más fácil y barato competir por 'abogado divorcios Quito' que por 'abogado'. Google prioriza resultados locales, y el 46% de las búsquedas tienen intención local. Con SEO local, compites de igual a igual con las grandes cadenas.</p>
        </div>
      </div>
    </>
  );
}
