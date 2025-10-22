'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Monitor, Smartphone, Share2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function TuEmpresaOnline() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Diseño Corporativo',
      subtitle: 'Eleva Tu Imagen con Diseño Corporativo y UX/UI',
      image: '/images/categorias/desarrollo-web/empresa-online-informativa.webp',
      content: {
        intro: '¿Sabías lo crucial de un diseño que capture la esencia corporativa y haga que los clientes naveguen sin esfuerzo?',
        description: 'Un desarrollo web premium enfocado en UX/UI crea una plataforma intuitiva y atractiva para pymes y independientes, reflejando tu misión mientras resuelve objeciones de profesionalismo. Esto retiene visitantes, facilita mostrar productos con reseñas y características, y convierte exploraciones en ventas al mejorar la percepción de tu negocio en búsquedas como "cómo ganar clientes".',
        listTitle: 'Beneficios Clave del Diseño UX/UI',
        items: [
          'Navegación fluida que guía a usuarios hacia productos y servicios destacados.',
          'Diseño corporativo que genera confianza y diferencia tu marca inmediatamente.',
          'Enfoque en usuario para reducir abandonos y aumentar conversiones.',
          'Adaptación a tu identidad para un sitio que vende automáticamente.'
        ],
        ctaTitle: '¿Listo para elevar tu imagen corporativa?',
        ctaDescription: 'Crea una plataforma profesional que inspire confianza',
        cta: 'Quiero Mi Diseño Corporativo'
      }
    },
    {
      id: 1,
      title: 'Páginas Estratégicas',
      subtitle: 'Expande con Páginas Estratégicas Multilingüe',
      image: '/images/categorias/desarrollo-web/empresa-online-blog.webp',
      content: {
        intro: '¿Imaginas llegar a más clientes con páginas detalladas en dos idiomas que muestren cada producto individualmente?',
        description: 'Con hasta 20 páginas como Servicios con reseñas, Blog y sección de equipo/valores, plus multilingüe ES/ENG, tu web escala para pymes y artesanos. Esto resuelve accesibilidad global, optimiza para búsquedas como "cómo mostrar mis productos" y atrae leads al destacar misión, políticas y ofertas detalladas sin limitaciones de idioma o dispositivo.',
        listTitle: 'Ventajas de Páginas Estratégicas',
        items: [
          'Páginas individuales para productos con frases clave y reseñas que venden.',
          'Multilingüe para captar mercados internacionales y expandir clientes.',
          'Sección de valores que humaniza tu negocio y genera lealtad.',
          'Estructura escalable para crecer sin rediseños costosos.'
        ],
        ctaTitle: '¿Quieres expandir tu alcance globalmente?',
        ctaDescription: 'Llega a más mercados con páginas multilingüe y estratégicas',
        cta: 'Quiero Expandir Mi Alcance'
      }
    },
    {
      id: 2,
      title: 'Integraciones Empresariales',
      subtitle: 'Automatiza con Integraciones y Contenido Dinámico',
      image: '/images/categorias/desarrollo-web/empresa-online-formularios.webp',
      content: {
        intro: '¿Qué si tu web interactúa en tiempo real, capturando leads con herramientas como chatbot y actualizaciones constantes?',
        description: 'Integra formulario anti-SPAM personalizado, blog corporativo, Google Maps/Analytics/CRM, redes sociales y botón WhatsApp opcional para pymes e independientes. Esto dinamiza interacciones, mantiene audiencia informada, resuelve consultas instantáneas y genera tráfico orgánico, ideal para estrategias de "ganar clientes" al automatizar ventas y mostrar productos de forma engaging.',
        listTitle: 'Impacto de las Integraciones',
        items: [
          'Formulario avanzado que captura datos seguros y personalizados.',
          'Blog para contenido que atrae búsquedas y educa clientes.',
          'Herramientas como CRM para rastrear leads y optimizar ventas.',
          'WhatsApp flotante para respuestas rápidas y conversiones inmediatas.'
        ],
        ctaTitle: '¿Listo para automatizar tu negocio?',
        ctaDescription: 'Integra herramientas empresariales que trabajan por ti 24/7',
        cta: 'Quiero Automatizar Mi Empresa'
      }
    },
    {
      id: 3,
      title: 'Seguridad y SEO Avanzado',
      subtitle: 'Fortalece con Seguridad y Optimización SEO',
      image: '/images/categorias/desarrollo-web/empresa-online-seo.webp',
      content: {
        intro: '¿Estás preparado para que tu sitio sea seguro, visible en Google y analice datos para decisiones estratégicas?',
        description: 'Incluye SSL para protección, SEO avanzado con palabras clave e indexación, diseño responsive y dominio/hosting primer año. Para artesanos y pymes, esto construye confianza, mejora posiciones en búsquedas como "planificación para conseguir más clientes" y permite medir tráfico, asegurando un crecimiento sostenido sin riesgos ni costos ocultos iniciales.',
        listTitle: 'Elementos para Crecimiento Seguro',
        items: [
          'SSL que protege datos y eleva credibilidad en transacciones.',
          'SEO que posiciona en resultados relevantes para atraer leads.',
          'Analytics para insights en comportamiento y ajustes rápidos.',
          'Responsive total que maximiza accesos desde cualquier dispositivo.'
        ],
        ctaTitle: '¿Quieres dominar Google con seguridad total?',
        ctaDescription: 'Obtén SEO avanzado y protección empresarial desde el inicio',
        cta: 'Quiero SEO Avanzado'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/empresa-online-hero.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Empresa Siempre Online Sin Inversiones Recurrentes Altas</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Transforma tu negocio con una página web profesional más chatbot que opera 24/7, captando leads y mostrando productos sin costos mensuales elevados. Por solo 700 USD en pago único, obtén una plataforma escalable, multilingüe y optimizada que atrae clientes, resuelve consultas instantáneas y posiciona tu marca para crecer en el digital.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda Tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$700</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Crear la Estrategia para Ganar Clientes con Tu Web Empresarial</h2>
            <p className="text-gray-700 mb-4 text-center">Para pymes, artesanos y profesionales independientes, ganar clientes implica una web sólida que muestre productos, capture leads y escale con tu negocio, automatizando interacciones para ventas constantes.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La estrategia clave radica en un sitio que convierta visitas en clientes mediante diseño corporativo, secciones detalladas para productos, integraciones como chatbot y optimizaciones SEO para búsquedas como "cómo ganar clientes" o "mostrar mis productos".</p>
                <p className="text-gray-700">Desglosémoslo en cuatro pasos esenciales de nuestro paquete, para que implementes una estrategia efectiva y veas un aumento rápido en leads y visibilidad digital.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Una Plataforma Empresarial Completa</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Descubre cómo cada componente de tu plataforma web está diseñado para escalar, automatizar y hacer crecer tu empresa.</p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Botones laterales */}
              <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4 scrollbar-hide">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center px-4 md:px-6 py-4 md:py-5 rounded-xl transition-all duration-300 whitespace-nowrap min-h-[70px] md:min-h-[80px] flex-shrink-0 ${
                      activeTab === index
                        ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full mr-2 md:mr-3 text-xs md:text-sm font-bold flex-shrink-0 bg-blue-500 text-white`}>
                      {index + 1}
                    </span>
                    <span className="font-medium text-sm md:text-base">{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Contenido del tab activo */}
              <div className="md:w-3/4 w-full min-w-0">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700 transition-all duration-300 hover:border-blue-500/30">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 break-words">{activeTab + 1}. {tabs[activeTab].subtitle}</h3>
                    <p className="text-blue-400 font-medium mb-3 italic">{tabs[activeTab].content.intro}</p>
                    <p className="text-gray-300 mb-4">{tabs[activeTab].content.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
                    <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
                      <Image
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-4">{tabs[activeTab].content.listTitle}</h4>
                      <ul className="space-y-2 md:space-y-3">
                        {tabs[activeTab].content.items.map((item, idx) => (
                          <li key={idx} className="flex items-start group">
                            <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-2 md:mr-3 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                              <Check className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            </span>
                            <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6 mt-6">
                    <h4 className="text-xl font-bold text-white mb-2">{tabs[activeTab].content.ctaTitle}</h4>
                    <p className="text-gray-300 mb-4">{tabs[activeTab].content.ctaDescription}</p>
                    <Button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors">
                      {tabs[activeTab].content.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Navegación inferior */}
                <div className="flex justify-between items-center mt-6 gap-2">
                  <button
                    onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                    disabled={activeTab === 0}
                    className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base ${
                      activeTab === 0
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                    }`}
                  >
                    <ChevronLeft className="mr-1 md:mr-2" width={16} height={16} />
                    <span className="hidden sm:inline">Anterior</span>
                    <span className="sm:hidden">Ant</span>
                  </button>

                  <div className="flex space-x-2">
                    {tabs.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                          activeTab === idx ? 'bg-blue-500 w-4 md:w-6' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        aria-label={`Ir al paso ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
                    disabled={activeTab === tabs.length - 1}
                    className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition-colors text-sm md:text-base ${
                      activeTab === tabs.length - 1
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                    }`}
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <span className="sm:hidden">Sig</span>
                    <ChevronRight className="ml-1 md:ml-2" width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA intermedio */}
          <div className="max-w-3xl mx-auto text-center mt-16 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Escalar Tu Empresa Digitalmente?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">No pierdas oportunidades; obtén una web que gana clientes automáticamente. Agenda ahora y adaptemos tu paquete.</p>
            <Button className="mt-8 font-bold bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base">
              Agenda Tu Llamada Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lanza Tu Plataforma Empresarial y Atrae Clientes Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Por 700 USD en pago único, accede a una solución completa con web premium, chatbot y herramientas que posicionan tu pyme o negocio independiente. Muestra productos, captura leads y crece con una presencia moderna y escalable.</p>
            
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Corporativo Premium y UX/UI</h3>
                  <p className="text-gray-600">Desarrolla una experiencia intuitiva con enfoque en diseño corporativo, asegurando navegación fluida que refleja tu identidad y atrae clientes al destacar productos y servicios de manera profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Páginas Estratégicas y Multilingüe</h3>
                  <p className="text-gray-600">Incluye hasta 20 páginas como Inicio, Productos individuales con descripciones y reseñas, Blog y Políticas, plus capacidad ES/ENG para expandir alcance y mostrar tu oferta a audiencias globales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones Empresariales y Contenido</h3>
                  <p className="text-gray-600">Agrega formulario avanzado, blog corporativo, Google Maps, Analytics, CRM básico, redes sociales y botón WhatsApp para interacciones directas, dinamizando contenido y capturando leads eficientemente.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO Avanzado y Responsive</h3>
                  <p className="text-gray-600">Protege con SSL, optimiza SEO para indexación y palabras clave, diseña adaptable a dispositivos, más dominio y hosting primer año, impulsando visibilidad y confianza para ganar clientes.</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Corporativo Premium y UX/UI</h3>
                  <p className="text-gray-600">Desarrolla una experiencia intuitiva con enfoque en diseño corporativo, asegurando navegación fluida que refleja tu identidad y atrae clientes al destacar productos y servicios de manera profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Páginas Estratégicas y Multilingüe</h3>
                  <p className="text-gray-600">Incluye hasta 20 páginas como Inicio, Productos individuales con descripciones y reseñas, Blog y Políticas, plus capacidad ES/ENG para expandir alcance y mostrar tu oferta a audiencias globales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones Empresariales y Contenido</h3>
                  <p className="text-gray-600">Agrega formulario avanzado, blog corporativo, Google Maps, Analytics, CRM básico, redes sociales y botón WhatsApp para interacciones directas, dinamizando contenido y capturando leads eficientemente.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO Avanzado y Responsive</h3>
                  <p className="text-gray-600">Protege con SSL, optimiza SEO para indexación y palabras clave, diseña adaptable a dispositivos, más dominio y hosting primer año, impulsando visibilidad y confianza para ganar clientes.</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $700</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Plataforma robusta 24/7. UX/UI intuitiva. SEO y integraciones optimizadas. Seguridad total incluida. Dominio/hosting primer año. Estrategia para leads constantes.</div>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-bold shadow-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                <span className="sm:hidden">Agenda Tu Llamada Ahora</span>
              </Button>
              <div className="text-xs md:text-sm text-blue-100 mt-4">Resultados garantizados para crecer | Sin costos ocultos | Soporte incluido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos para ocultar scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
