'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, DollarSign, Award, TrendingUp, Clock, Map, Compass, Route, Telescope, Search, BarChart, Crown, Settings, Building, HelpCircle, Download, Target, ChevronDown } from 'lucide-react'
import { ExpandableText } from '@/components/ui/expandable-text'

const heroImages = [
  '/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
  '/images/categorias/posicionamiento-web/alianza-exclusiva-hero.webp'
];

const tabData = [
  {
    id: 'auditoria',
    slug: 'auditoria-seo-rediseno',
    title: 'Auditoría SEO y Rediseño Web',
    price: 'Desde $1,250',
    badge1: 'Inversión Única Desde',
    badge2: '$1,250 USD',
    h3: 'Auditoría SEO y Rediseño Web: Descubre Por Qué No Vendes Online',
    subtitle: 'Para PYMEs con sitio web existente que no genera tráfico ni ventas, necesitan diagnóstico técnico profesional y estrategia de contenido efectiva.',
    description: '¿Por qué tu competencia vende online y tú no, aunque tengas mejor producto? Porque ellos aparecen en Google y tú no. Esta auditoría analiza +200 factores técnicos y de contenido que Google evalúa, identificando exactamente qué te impide aparecer en la primera página. Incluye rediseño UX optimizado para conversión. El 81% de compradores buscan en Google: si no estás ahí, no existes.',
    benefits: [
      { text: 'Mayor Visibilidad: Aparece en primeros resultados cuando clientes buscan tu servicio' },
      { text: 'Tráfico Calificado: Visitantes interesados que buscan exactamente lo que vendes' },
      { text: 'Mayor Conversión: Rediseño UX optimizado para que visitantes compren/contacten' },
      { text: 'Errores Técnicos Resueltos: Identifica problemas de rastreo, velocidad, indexación' },
      { text: 'ROI Medible: Reportes mensuales con posiciones, tráfico y conversiones reales' },
    ],
    includes: {
        'Análisis Técnico Exhaustivo': [
            'Auditoría completa de +200 factores SEO on-page y off-page',
            'Análisis de velocidad de carga y Core Web Vitals (Google ranking)',
            'Revisión estructura URLs, metadatos, headers, enlaces internos',
            'Identificación errores rastreo, indexación y penalizaciones Google'
        ],
        'Análisis de Contenido y Competencia': [
            'Investigación keywords con volumen de búsqueda real (SEMrush)',
            'Análisis competencia: qué keywords posicionan tus rivales',
            'Auditoría contenido existente y oportunidades de mejora',
            'Estrategia contenido: artículos pilares y clusters recomendados'
        ],
        'Rediseño UX/UI para Conversión': [
            'Rediseño de páginas clave orientado a acción del usuario',
            'Optimización formularios de contacto y CTAs estratégicos',
            'Mejora navegación y arquitectura de información',
            'Diseño responsive optimizado para móviles (60% tráfico)'
        ],
        'Entregables y Soporte': [
            'Documento ejecutivo PDF con hallazgos y plan priorizado',
            'Roadmap de implementación a 90 días con acciones concretas',
            'Sesión de presentación y capacitación (2 horas)',
            '30 días soporte para dudas de implementación'
        ]
    },
    centralBenefit: 'Deja de adivinar por qué no vendes. Obtén un diagnóstico profesional con plan de acción concreto que te posiciona en Google y multiplica conversiones. ROI promedio: inversión recuperada en 3-6 meses.',
    cta: 'Solicitar Auditoría SEO Gratuita',
    ctaSub: 'Sin compromiso · Sin tarjeta de crédito · Diagnóstico inicial en 48 horas'
  },
  {
    id: 'alianza',
    slug: 'alianza-exclusiva',
    title: 'Alianza Exclusiva Cero Inversión',
    price: '$500/mes x 24',
    badge1: 'Inversión Inicial $0',
    badge2: '$500 USD/mes x 24 meses',
    h3: 'Alianza Exclusiva: Tu E-commerce Completo Sin Riesgo Financiero',
    subtitle: 'Para artesanos, independientes y PYMEs que quieren vender online pero no tienen capital inicial para e-commerce profesional ni conocimientos técnicos.',
    description: '¿Te frena no tener $5,000-$10,000 USD para invertir en e-commerce profesional? Imagina tener tu tienda online completa, posicionada en Google y generando ventas, sin desembolsar NADA inicial. Asumimos desarrollo valorado en $1,550 USD: sitio e-commerce 30 productos, fotos profesionales, hosting 24 meses, estudio mercado y SEO continuo. Solo pagas $500 mensuales mientras vendemos juntos. ¿Mereces menos que las grandes empresas?',
    benefits: [
      { text: 'Inversión Inicial Cero: Sin riesgos financieros upfront, comenzamos nosotros' },
      { text: 'E-commerce Listo 30 Días: Tienda profesional con 30 productos y fotos incluidas' },
      { text: 'Posicionamiento Google Continuo: SEO mensual para aparecer en búsquedas relevantes' },
      { text: 'Propiedad Total 24 Meses: Al finalizar, 100% del sitio es tuyo sin restricciones' },
      { text: 'Exclusividad Sectorial: No trabajamos con tu competencia directa (contrato)' },
    ],
    includes: {
        'Desarrollo E-commerce Completo (Valorado $1,550)': [
            'Sitio e-commerce profesional con hasta 30 productos individuales',
            'Diseño UX/UI responsive optimizado para ventas móviles',
            'Carrito de compras optimizado para conversión',
            'Integración pagos: Tarjetas, PayPal, transferencias',
            'Sistema gestión inventario con capacitación incluida',
            'Dominio profesional personalizado (www.tunegocio.com)',
            'Hosting premium 24 meses incluido sin costo adicional',
            'Certificado SSL seguridad y protección datos'
        ],
        'Recursos y Contenido Profesional': [
            'Sesión fotográfica profesional de productos incluida',
            'Descripciones SEO optimizadas para cada producto',
            'Estudio de mercado y análisis competencia inicial',
            'Logo profesional o adaptación de existente',
            'Sesión video productos/negocio (opcional según caso)'
        ],
        'Plan Marketing y Posicionamiento 24 Meses': [
            'Estrategia SEO continua con keywords investigadas (SEMrush)',
            '5 artículos blog mensuales optimizados para Google',
            '20 posts profesionales redes sociales (Facebook/Instagram) mensual',
            '1 campaña publicitaria enfocada por mes (Facebook Ads/Google Ads)',
            'Página nueva por cada producto adicional que agregues',
            'Optimización SEO técnica continua (velocidad, estructura, enlaces)',
            'Informes mensuales detallados: tráfico, posiciones, conversiones',
            'Mantenimiento técnico completo: actualizaciones, seguridad, backups'
        ],
        'Garantías y Propiedad': [
            'Exclusividad sectorial contractual en tu zona geográfica',
            'Transferencia 100% propiedad tras 24 meses: sitio, dominio, contenido',
            'Sin restricciones técnicas ni dependencias post-contrato',
            'Opción renovación hosting económica ($50-80 anuales)',
            'Opción continuar servicios marketing basado en resultados'
        ]
    },
    centralBenefit: 'Forma una sociedad real donde asumimos riesgo financiero inicial y trabajamos juntos para generar ventas. Tú enfócate en tu negocio, nosotros en posicionarte en Google y atraer clientes. Al final, todo es tuyo sin ataduras.',
    cta: 'Agenda Llamada de Alianza Gratuita',
    ctaSub: 'Validemos viabilidad juntos · Sin compromiso · Cupos limitados por exclusividad sectorial'
  }
];

const faqData = [
    { q: '¿Cuánto dinero pierdo cada mes sin aparecer en Google?', a: 'Si tu sector tiene 1,000 búsquedas mensuales en Google (ej: \'abogado Quito\') y no apareces en primera página, pierdes el 90% de esos clientes potenciales. Con tasa conversión promedio 5% y ticket $100, son $4,500 USD mensuales que regalas a la competencia. El costo de NO estar es enorme.' },
    { q: '¿Por qué mi competencia aparece primero si yo tengo mejores productos?', a: 'Porque Google no sabe que tu producto es mejor; lee código, contenido optimizado y velocidad de carga. Tu competencia invirtió en SEO técnico para cumplir con los +200 factores que Google mide, mientras tú dependes de redes sociales donde nadie te busca activamente.' },
    { q: '¿Cuánto cuesta posicionamiento vs. seguir pagando anuncios eternamente?', a: 'Anuncios: $300-$1,000 mensual PARA SIEMPRE. Dejas de pagar, desapareces. SEO: Inversión inicial con beneficio permanente. Sigues apareciendo orgánicamente SIN pagar por clic años después. Los clientes confían más en resultados orgánicos (70%) que en anuncios (30%).' },
    { q: '¿Puedo hacer SEO yo mismo con tutoriales de YouTube?', a: 'Claro, como puedes operarte la apéndice viendo videos. SEO requiere dominar +200 factores, herramientas profesionales ($200-$500/mes), análisis técnico y creación de contenido constante. Tu tiempo vale dinero. ¿Prefieres invertirlo en aprender o en VENDER?' },
    { q: '¿En cuánto tiempo veo resultados reales en posiciones y ventas?', a: 'SEO NO es instantáneo. Realidad: Primeras mejoras técnicas en 2-4 semanas, subidas de posiciones en 1-3 meses, y tráfico significativo en 3-6 meses. Cada día sin empezar es un mes más tarde en ver resultados. Tu competencia ya te lleva meses de ventaja.' },
    { q: '¿El SEO funciona para negocios locales pequeños?', a: 'Funciona MEJOR. Es más fácil y barato competir por \'abogado divorcios Quito\' que por \'abogado\'. Google prioriza resultados locales, y el 46% de las búsquedas tienen intención local. Con SEO local, compites de igual a igual con las grandes cadenas.' },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen de posicionamiento web ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const activeContent = tabData.find(t => t.id === activeTab);

    useEffect(() => {
        setOpenAccordion(null); // Reset accordion on tab change
    }, [activeTab]);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4 scrollbar-hide">
                    {tabData.map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 text-left ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                            <span className="font-medium text-sm md:text-base flex-grow">{tab.title}</span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0 ${activeTab === tab.id ? 'bg-white/20' : 'bg-blue-100 text-blue-800'}`}>
                                {tab.price}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="md:w-3/4 w-full min-w-0">
                    {activeContent && (
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
                            <div className="flex items-center gap-4 mb-4 flex-wrap">
                                <span className="font-bold text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{activeContent.badge1}</span>
                                <span className="font-bold text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{activeContent.badge2}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeContent.h3}</h3>
                            <p className="text-blue-400 font-medium mb-4 italic">{activeContent.subtitle}</p>
                            <p className="text-gray-300 mb-6">{activeContent.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-white">🎯 Beneficios Clave:</h4>
                                    <ul className="space-y-2 mb-6 text-gray-300">
                                        {activeContent.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0"/><span>{benefit.text}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-3 text-white">📦 Incluye:</h4>
                                    <div className="space-y-2">
                                        {Object.entries(activeContent.includes).map(([category, items]) => (
                                            <div key={category} className="border-b border-gray-700 last:border-b-0 pb-2 mb-2">
                                                <button onClick={() => setOpenAccordion(openAccordion === category ? null : category)} className="w-full flex justify-between items-center text-left font-semibold text-blue-400 text-sm">
                                                    <span>{category}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === category ? 'rotate-180' : ''}`} />
                                                </button>
                                                {openAccordion === category && (
                                                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-400">
                                                        {(items as string[]).map((item, i) => <li key={i}>{item}</li>)}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900/50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                                <h4 className="font-bold text-white">💎 Beneficio Central:</h4>
                                <p className="text-blue-300 italic">{activeContent.centralBenefit}</p>
                            </div>

                            <div className="text-center mt-8">
                                <Link href={`/servicios/posicionamiento/${activeContent.slug}`} className={`inline-block text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 ${activeContent.id === 'alianza' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                                    {activeContent.cta}
                                </Link>
                                <p className="text-xs text-gray-400 mt-2">{activeContent.ctaSub}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center text-left">
                        <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                        <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}><ArrowRight /></span>
                    </button>
                    {openIndex === index && (
                        <div className="mt-4 text-gray-600">
                            <p>{faq.a}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function PosicionamientoPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative text-white h-screen">
        <HeroSlider />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
                <p className="text-sm font-bold tracking-wider uppercase text-gray-300">Inicio &gt; Servicios &gt; Posicionamiento Web</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight shadow-text">¿Tu Competencia Aparece en Google y Tú No? Róbales el Tráfico.</h1>
                <ExpandableText
                    className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
                    fullText="El 81% de tus clientes potenciales buscan en Google antes de comprar. Si no estás en la primera página, eres invisible. Con nuestra estrategia SEO, te posicionamos para capturar ese tráfico y convertirlo en ventas reales."
                    shortText="El 81% de tus clientes potenciales buscan en Google antes de comprar..."
                />
                <a href="#servicios" className="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Descubre Cómo
                </a>
                <p className="mt-4 text-sm font-semibold text-gray-300">81% Compradores Usan Google · Resultados Medibles · PYMEs Ecuador</p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por Qué Estar en Google No Es Opcional (Es Supervivencia)</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              ¿Cuántos clientes pierdes cada día porque tu competencia aparece primero en Google y tú no existes? El 81% de compradores buscan en Google antes de comprar. Si no apareces en la primera página, NO existes para el 90% de tu mercado potencial.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Search className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Diagnóstico</h3>
                  <p className="text-gray-600 text-sm mt-1">Auditoría de +200 factores que afectan tu posición en Google hoy.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Target className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Objetivo</h3>
                  <p className="text-gray-600 text-sm mt-1">Primera página para keywords que generan ventas, no solo visitas.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <BarChart className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Estrategia</h3>
                  <p className="text-gray-600 text-sm mt-1">Plan técnico y de contenido para superar a tu competencia directa.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Route className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">Ejecución</h3>
                  <p className="text-gray-600 text-sm mt-1">Implementación continua con reportes mensuales de progreso medible.</p>
              </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Soluciones de Posicionamiento: Desde Auditoría hasta Alianza Completa</h2>
          <ServicesTabs />
        </div>
      </section>

    </div>
  );
}
