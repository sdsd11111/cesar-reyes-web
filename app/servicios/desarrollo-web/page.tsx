'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, DollarSign, Award, TrendingUp, Clock, Map, Compass, Route, Telescope } from 'lucide-react'
import { ExpandableText } from '@/components/ui/expandable-text'

// --- DATA --- //
const heroImages = [
  '/images/categorias/desarrollo-web/tarjeta-digital-hero.webp',
  '/images/categorias/desarrollo-web/contacto-profesional-hero.webp',
  '/images/categorias/desarrollo-web/empresa-online-hero.webp',
  '/images/categorias/desarrollo-web/negocio-24-7-hero.webp'
];

const tabData = [
  {
    id: "tarjeta-digital",
    title: "Tarjeta Digital Simple",
    price: "$60",
    h3: "Tarjeta Digital Simple: Tu Primer Impacto Profesional",
    subtitle: "Para artesanos e independientes que buscan networking sin complicaciones",
    description: "¿Sigues repartiendo tarjetas de papel que tus clientes pierden en 24 horas? Esta solución genera tu primer contacto digital profesional con info de contacto, redes sociales, botón Guardar Contacto y formulario directo. Dominio personalizado incluido: www.mitarjetadigital.me/tunombre",
    bullets: [
      "Info de contacto básica (email, teléfono, WhatsApp)",
      "Enlaces directos a redes sociales principales",
      "Botón Guardar Contacto en dispositivos móviles",
      "Formulario de contacto directo integrado",
      "Dominio personalizado simple incluido"
    ],
    benefit: "Primer paso digital sin costos ocultos ni mantenimiento complejo",
    cta: "Solicitar Mi Tarjeta Digital"
  },
  {
    id: "tu-contacto-profesional",
    title: "Tarjeta Digital Profesional",
    price: "$150",
    h3: "Tarjeta Digital Profesional: Supera a la Competencia",
    subtitle: "Para pymes que necesitan impresionar desde el primer contacto",
    description: "¿Tu competencia te supera en imagen profesional? 75% de clientes juzgan tu credibilidad por tu presencia digital. Esta tarjeta minimalista transmite tu marca profesionalmente, con diseño adaptable a móviles, dominio propio personalizado (www.tunombre.com) y formulario que captura leads reales desde el primer contacto.",
    bullets: [
      "Diseño minimalista profesional responsive",
      "Información de contacto completa organizada",
      "Enlaces a todas tus redes sociales",
      "Formulario de contacto optimizado para conversión",
      "Dominio personalizado profesional (www.tunombre.com)",
      "Botón Guardar Contacto mejorado"
    ],
    benefit: "Genera confianza inmediata y captura leads sin mantenimiento constante",
    cta: "Quiero Impresionar Profesionalmente"
  },
  {
    id: "go-2025",
    title: "Primera Web Estática",
    price: "$250",
    h3: "Primera Web Estática: Tu Presencia Sólida en Google",
    subtitle: "Para artesanos y pymes iniciando su posicionamiento digital",
    description: "¿Cuántos clientes pierdes porque no apareces en Google cuando buscan tu servicio? Esta web estática profesional posiciona tu marca con diseño UX/UI intuitivo, SEO básico optimizado, dominio propio, hosting primer año incluido y botones WhatsApp para conversión rápida. Sin mensualidades sorpresa.",
    bullets: [
      "Diseño UX/UI intuitivo que guía hacia productos",
      "Secciones clave: Inicio, Servicios, Productos, Contacto",
      "SEO básico optimizado para búsquedas locales",
      "Dominio profesional propio incluido",
      "Hosting premium primer año sin costo adicional",
      "Botones WhatsApp para comunicación inmediata",
      "Integración Google Maps y redes sociales"
    ],
    benefit: "Conversión de visitas en clientes sin complicaciones técnicas ni costos recurrentes",
    cta: "Iniciar Mi Presencia Digital"
  },
  {
    id: "tu-negocio-24-7",
    title: "Web Profesional",
    price: "$500",
    h3: "Web Profesional: Tu Vendedor Digital 24/7",
    subtitle: "Para profesionales independientes y pymes que buscan crecer",
    description: "¿Te imaginas tener un vendedor trabajando para ti las 24 horas sin pagar salario? Esta web premium trabaja 24/7 atrayendo clientes con diseño que refleja tu marca, hasta 5 secciones personalizadas, blog para autoridad, galería visual, SEO avanzado, SSL seguro y Analytics. Hosting primer año incluido.",
    bullets: [
      "Diseño Premium UX intuitiva que convierte",
      "Hasta 5 secciones personalizadas estratégicas",
      "Blog integrado para contenido y SEO",
      "Galería de productos/servicios optimizada",
      "Optimización total para móviles y tablets",
      "Integraciones sociales completas",
      "Seguridad SSL y certificado incluido",
      "SEO y Análisis Google Analytics inicial",
      "Dominio y hosting primer año incluido"
    ],
    benefit: "Mejora percepción profesional y atrae más consultas con resultados garantizados rápidos",
    cta: "Quiero Mi Vendedor Digital 24/7"
  },
  {
    id: "tu-empresa-online",
    title: "Plataforma Empresarial",
    price: "$700",
    h3: "Plataforma Empresarial: Automatiza y Escala Globalmente",
    subtitle: "Para pymes escalando operaciones y expansión internacional",
    description: "¿Pierdes clientes porque no respondes rápido o no hablas inglés? Esta plataforma robusta con chatbot IA responde instantáneamente 24/7, es multilingüe (ES/ENG), tiene hasta 20 páginas estratégicas, CRM básico, SEO avanzado y integraciones empresariales. Automatiza consultas mientras duermes y conquista mercados internacionales.",
    bullets: [
      "Diseño Corporativo Premium escalable",
      "Hasta 20 páginas estratégicas (Productos, Blog, Políticas)",
      "Capacidad Multilingüe: Español e Inglés",
      "Chatbot IA para respuesta automática 24/7",
      "Formularios avanzados con validación",
      "Integración Google Maps empresarial",
      "Google Analytics avanzado y CRM básico",
      "SEO Avanzado con keywords estratégicas",
      "Seguridad SSL empresarial incluida",
      "Dominio y hosting primer año incluido"
    ],
    benefit: "Automatiza interacciones y escala internacionalmente con presencia moderna y robusta",
    cta: "Transformar Mi Negocio Ahora"
  },
  {
    id: "tu-sucursal-online",
    title: "E-commerce / Tienda Online",
    price: "$950",
    h3: "E-commerce Completo: Tu Sucursal Digital Global",
    subtitle: "Para artesanos y pymes vendiendo productos físicos/digitales",
    description: "¿Cuánto dinero dejas de ganar cada día sin vender online? Esta tienda virtual profesional vende automáticamente 24/7 con hasta 40 productos, chatbot, pagos integrados (tarjetas/PayPal), multilingüe para mercados internacionales, SEO optimizado, Pixel Facebook para campañas, Analytics y gestión de inventario. Multiplica ingresos desde día uno.",
    bullets: [
      "Diseño Premium UX Responsive para ventas móviles",
      "Hasta 40 productos con descripciones SEO",
      "Sistema de reseñas y valoraciones integrado",
      "Multilingüe: Español e Inglés para alcance global",
      "Carrito de compras optimizado para conversión",
      "Pagos seguros: Tarjetas, PayPal y más",
      "Capacitación gestión de inventario incluida",
      "Pixel Facebook y Google Analytics avanzado",
      "Seguridad SSL y protección anti-hacking",
      "SEO básico y aceleración de carga (caching)",
      "Dominio y hosting primer año incluido"
    ],
    benefit: "Automatiza ventas globales 24/7 y rastrea campañas efectivamente para crecimiento digital sólido",
    cta: "Lanzar Mi Tienda Online Ya"
  }
];

// --- COMPONENTS --- //

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
          alt={`Imagen de desarrollo web ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const activeContent = tabData.find(t => t.id === activeTab);

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4 scrollbar-hide">
                    {tabData.map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 min-h-[70px] flex-shrink-0 text-left ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                            <span className="font-medium text-sm md:text-base">{tab.title}</span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${activeTab === tab.id ? 'bg-white/20' : 'bg-blue-100 text-blue-800'}`}>
                                {tab.price}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="md:w-3/4 w-full min-w-0">
                    {activeContent && (
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="font-bold text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Inversión Única</span>
                                <span className="font-bold text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{activeContent.price} USD</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeContent.h3}</h3>
                            <p className="text-blue-400 font-medium mb-4 italic">{activeContent.subtitle}</p>
                            <p className="text-gray-300 mb-6">{activeContent.description}</p>
                            <h4 className="font-bold text-lg mb-3 text-white">✅ Incluye:</h4>
                            <ul className="space-y-2 mb-6 pl-5 list-disc text-gray-300">
                                {activeContent.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="bg-blue-900/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <h4 className="font-bold text-white">💎 Beneficio Central:</h4>
                                <p className="text-blue-300">{activeContent.benefit}</p>
                            </div>
                            <Link href={`/servicios/desarrollo-web/${activeContent.id}`} className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors">
                                {activeContent.cta}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function DesarrolloWebPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* 1. HERO SECTION */}
      <section className="relative text-white h-screen">
        <HeroSlider />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
                <p className="text-sm font-bold tracking-wider uppercase text-gray-300">Inicio &gt; Servicios &gt; Desarrollo Web</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight shadow-text">Tu Página Web Profesional con Inversión Única, Sin Mensualidades.</h1>
                <ExpandableText 
                    className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
                    fullText="¿Tu competencia vende más online? Es porque tienen una web que genera confianza. Deja de perder clientes por no tener una presencia digital sólida y obtén un sitio web profesional que te pertenece para siempre."
                    shortText="¿Tu competencia vende más online? Es porque tienen una web que genera confianza..."
                />
                <a href="#servicios" className="mt-8 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Ver Soluciones Web
                </a>
                <p className="mt-4 text-sm font-semibold text-gray-300">Inversión Única · Sin Costos Recurrentes · +200 PYMEs en Ecuador</p>
            </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN ESTRATÉGICA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Por qué tu competencia vende más si tú tienes mejores productos?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              La respuesta es simple: una página web profesional. Según estadísticas, el <span className="font-bold">90.8%</span> de micro y pequeñas empresas en Ecuador NO tienen una web, perdiendo el <span className="font-bold">75%</span> de credibilidad ante clientes potenciales que investigan online antes de comprar.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Map className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">1. Dónde Estás</h3>
                  <p className="text-gray-600 text-sm mt-1">Un diagnóstico honesto de tu presencia digital (o la falta de ella).</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Telescope className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">2. Dónde Quieres Ir</h3>
                  <p className="text-gray-600 text-sm mt-1">Definimos metas claras: más ventas, más leads, más autoridad.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Compass className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">3. Cuál es el Camino</h3>
                  <p className="text-gray-600 text-sm mt-1">Elegimos la solución web exacta que necesitas, sin gastar de más.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md text-center">
                  <Route className="h-10 w-10 text-blue-600 mb-3 mx-auto"/>
                  <h3 className="font-bold text-lg">4. Cómo Llegar</h3>
                  <p className="text-gray-600 text-sm mt-1">Una hoja de ruta en 4 semanas para tener tu web funcionando.</p>
              </div>
          </div>
        </div>
      </section>

      {/* 3. HUB DE SERVICIOS (TABS) */}
      <section id="servicios" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Soluciones de Desarrollo Web: De $60 a $950 USD (Inversión Única)</h2>
          <ServicesTabs />
        </div>
      </section>

      {/* 4. SECCIÓN BENEFICIOS + VIDEO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Qué Logras con Tu Página Web (No Solo "Estar en Internet")</h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 bg-gray-900 aspect-video rounded-xl shadow-2xl flex items-center justify-center">
                <p className="text-white text-xl">[Video Placeholder 16:9]</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <DollarSign className="h-10 w-10 mx-auto text-green-600"/>
                    <h4 className="mt-2 font-bold">Ahorro de Dinero</h4>
                    <p className="text-sm text-gray-600 mt-1">Inversión única vs. suscripciones que suman miles en años.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <Award className="h-10 w-10 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Credibilidad Instantánea</h4>
                    <p className="text-sm text-gray-600 mt-1">El 75% de los clientes juzgan tu negocio por tu sitio web.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <TrendingUp className="h-10 w-10 mx-auto text-green-600"/>
                    <h4 className="mt-2 font-bold">ROI Evidente</h4>
                    <p className="text-sm text-gray-600 mt-1">Un retorno medible en ventas, no solo en likes sin conversión.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <Clock className="h-10 w-10 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Trabajo 24/7</h4>
                    <p className="text-sm text-gray-600 mt-1">Tu página web es tu mejor vendedor, trabajando sin descanso.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN METODOLOGÍA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cómo Creamos Tu Página Web en 4 Semanas (Sin Sorpresas)</h2>
          <div className="mt-12 relative flex justify-between w-full max-w-3xl mx-auto">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
              <div className="relative flex-1 text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">🎯</div>
                  <p className="mt-2 font-bold">Semana 1 <br/> Descubrimiento</p>
              </div>
              <div className="relative flex-1 text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">🔨</div>
                  <p className="mt-2 font-bold">Semana 2 <br/> Desarrollo</p>
              </div>
              <div className="relative flex-1 text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">✨</div>
                  <p className="mt-2 font-bold">Semana 3: Revisión</p>
              </div>
              <div className="relative flex-1 text-center">
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">🚀</div>
                  <p className="mt-2 font-bold">Semana 4 <br/> Lanzamiento</p>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
}