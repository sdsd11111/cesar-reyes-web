import { Metadata } from 'next';
import AuditoriaSeoRedisenoClient from './AuditoriaSeoRedisenoClient';

export const metadata: Metadata = {
  title: 'Auditoría SEO y Rediseño Web - Descubre Por Qué No Vendes | César Reyes',
  description: 'Auditoría SEO completa desde $1,250 USD. Análisis de +200 factores, rediseño UX optimizado, estrategia de contenido. Descubre exactamente qué te impide vender online.',
  keywords: ['auditoría seo', 'rediseño web', 'optimización seo', 'análisis técnico', 'estrategia contenido'],
  openGraph: {
    title: 'Auditoría SEO y Rediseño Web | César Reyes',
    description: 'Descubre por qué tu competencia vende online y tú no. Diagnóstico profesional con plan de acción.',
    images: [{
      url: '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Auditoría SEO y Rediseño',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function AuditoriaSeoRedisenoPage() {
  return (
    <>
      <AuditoriaSeoRedisenoClient />
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Auditoría SEO y Rediseño Web - Inversión desde $1,250 USD</h1>
        <p>Descubre Por Qué No Vendes Online. Para PYMEs con sitio web existente que no genera tráfico ni ventas, necesitan diagnóstico técnico profesional y estrategia de contenido efectiva.</p>
        <p>¿Por qué tu competencia vende online y tú no, aunque tengas mejor producto? Porque ellos aparecen en Google y tú no. Esta auditoría analiza +200 factores técnicos y de contenido que Google evalúa, identificando exactamente qué te impide aparecer en la primera página. Incluye rediseño UX optimizado para conversión.</p>
        <h2>Beneficios Clave:</h2>
        <ul>
          <li>Mayor Visibilidad: Aparece en primeros resultados cuando clientes buscan tu servicio</li>
          <li>Tráfico Calificado: Visitantes interesados que buscan exactamente lo que vendes</li>
          <li>Mayor Conversión: Rediseño UX optimizado para que visitantes compren/contacten</li>
          <li>Errores Técnicos Resueltos: Identifica problemas de rastreo, velocidad, indexación</li>
          <li>ROI Medible: Reportes mensuales con posiciones, tráfico y conversiones reales</li>
        </ul>
        <h2>Incluye:</h2>
        <h3>Análisis Técnico Exhaustivo:</h3>
        <ul>
          <li>Auditoría completa de +200 factores SEO on-page y off-page</li>
          <li>Análisis de velocidad de carga y Core Web Vitals</li>
          <li>Revisión estructura URLs, metadatos, headers, enlaces internos</li>
          <li>Identificación errores rastreo, indexación y penalizaciones Google</li>
        </ul>
        <h3>Análisis de Contenido y Competencia:</h3>
        <ul>
          <li>Investigación keywords con volumen de búsqueda real (SEMrush)</li>
          <li>Análisis competencia: qué keywords posicionan tus rivales</li>
          <li>Auditoría contenido existente y oportunidades de mejora</li>
          <li>Estrategia contenido: artículos pilares y clusters recomendados</li>
        </ul>
        <h3>Rediseño UX/UI para Conversión:</h3>
        <ul>
          <li>Rediseño de páginas clave orientado a acción del usuario</li>
          <li>Optimización formularios de contacto y CTAs estratégicos</li>
          <li>Mejora navegación y arquitectura de información</li>
          <li>Diseño responsive optimizado para móviles (60% tráfico)</li>
        </ul>
        <h3>Entregables y Soporte:</h3>
        <ul>
          <li>Documento ejecutivo PDF con hallazgos y plan priorizado</li>
          <li>Roadmap de implementación a 90 días con acciones concretas</li>
          <li>Sesión de presentación y capacitación (2 horas)</li>
          <li>30 días soporte para dudas de implementación</li>
        </ul>
        <p>Deja de adivinar por qué no vendes. Obtén un diagnóstico profesional con plan de acción concreto que te posiciona en Google y multiplica conversiones. ROI promedio: inversión recuperada en 3-6 meses.</p>
      </div>
    </>
  );
}
