'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Monitor, Smartphone, Share2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function TuSucursalOnline() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Diseño Premium UX',
      subtitle: 'Impulsa Ventas con Diseño UX Premium',
      image: '/images/categorias/desarrollo-web/sucursal-online-carrito.webp',
      content: {
        intro: '¿Sabías lo vital de un diseño que haga fluida la navegación y destaque tus productos para captar clientes inmediatamente?',
        description: 'Un desarrollo web premium basado en UX crea una tienda intuitiva y atractiva para pymes y artesanos, resolviendo accesibilidad en dispositivos mientras optimiza para búsquedas como "cómo mostrar mis productos". Esto retiene usuarios, integra galería de alta calidad y formularios anti-SPAM, convirtiendo exploraciones en compras al mejorar la percepción profesional y facilitar interacciones sin frustraciones.',
        listTitle: 'Beneficios Clave del Diseño UX',
        items: [
          'Experiencia fluida que guía a clientes hacia productos y carritos rápidamente.',
          'Adaptabilidad responsive para ventas móviles sin perder oportunidades.',
          'Enfoque en usuario que reduce abandonos y eleva conversiones.',
          'Personalización que refleja tu marca y genera lealtad inmediata.'
        ],
        ctaTitle: '¿Listo para impulsar tus ventas online?',
        ctaDescription: 'Crea una tienda que convierte visitantes en compradores',
        cta: 'Quiero Mi Tienda Premium'
      }
    },
    {
      id: 1,
      title: 'Tienda con Productos',
      subtitle: 'Expande con Tienda Multilingüe y Productos',
      image: '/images/categorias/desarrollo-web/sucursal-online-pagos.webp',
      content: {
        intro: '¿Imaginas llegar a clientes mundiales con páginas dedicadas a cada producto en dos idiomas, sin barreras lingüísticas?',
        description: 'Con hasta 7 secciones como Tienda (40 productos con reseñas y características individuales), Blog y Políticas, plus multilingüe ES/ENG y buscador real-time, tu e-commerce escala para independientes y pymes. Esto resuelve expansión global, optimiza para "cómo ganar clientes" al destacar ofertas detalladas y mapa geolocalización, atrayendo tráfico orgánico sin limitaciones de idioma o ubicación.',
        listTitle: 'Ventajas de la Tienda Estratégica',
        items: [
          'Productos individuales con keywords que venden y atraen búsquedas.',
          'Multilingüe para mercados internacionales y más ventas cross-border.',
          'Buscador instantáneo que acelera hallazgos y compras.',
          'Estructura ampliable para crecer inventario sin rediseños caros.'
        ],
        ctaTitle: '¿Quieres vender a nivel global?',
        ctaDescription: 'Llega a clientes internacionales con tu tienda multilingüe',
        cta: 'Quiero Mi Tienda Global'
      }
    },
    {
      id: 2,
      title: 'Integraciones de Pago',
      subtitle: 'Automatiza con Integraciones de Pago',
      image: '/images/categorias/desarrollo-web/sucursal-online-pedidos.webp',
      content: {
        intro: '¿Qué si tu sitio maneja pagos seguros y capacita para gestión, liberándote para enfocarte en crecer clientes?',
        description: 'Integra carrito optimizado, botones de pago (tarjetas/PayPal), capacitación personalizada, WhatsApp flotante, redes sociales, Pixel Facebook y Analytics para pymes e independientes. Esto dinamiza ventas, resuelve "planificación para conseguir más clientes" al automatizar interacciones y rastrear campañas, generando leads constantes mientras mantienes inventario eficiente y comunicación directa sin interrupciones.',
        listTitle: 'Impacto de las Integraciones',
        items: [
          'Pagos seguros que construyen confianza y facilitan transacciones.',
          'Capacitación que empodera para actualizaciones independientes.',
          'Pixel y Analytics para optimizar ads y medir ROI.',
          'WhatsApp para consultas rápidas que cierran ventas al instante.'
        ],
        ctaTitle: '¿Listo para procesar pagos online?',
        ctaDescription: 'Automatiza ventas con integraciones de pago seguras',
        cta: 'Quiero Vender Online'
      }
    },
    {
      id: 3,
      title: 'Seguridad y Rendimiento',
      subtitle: 'Protege y Optimiza para Visibilidad',
      image: '/images/categorias/desarrollo-web/sucursal-online-soporte.webp',
      content: {
        intro: '¿Estás listo para una tienda segura que carga rápido y aparece en Google, atrayendo clientes constantes?',
        description: 'Incluye SSL, medidas anti-hacking/spam, SEO básico para indexación, optimización de rendimiento (caching, velocidad) y monitoreo avanzado. Para artesanos y pymes, esto genera confianza, mejora posiciones en búsquedas como "cómo mostrar mis productos" y permite análisis continuo, asegurando crecimiento sostenido sin riesgos ni costos ocultos iniciales en tu sucursal online.',
        listTitle: 'Elementos para Crecimiento Seguro',
        items: [
          'SSL y seguridad que protegen datos y elevan credibilidad.',
          'SEO que posiciona en resultados relevantes para leads.',
          'Optimización de carga que retiene usuarios impacientes.',
          'Monitoreo que previene issues y soporta escalabilidad.'
        ],
        ctaTitle: '¿Quieres una tienda rápida y segura?',
        ctaDescription: 'Protege tu e-commerce y optimiza el rendimiento',
        cta: 'Quiero Seguridad Total'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/sucursal-online-hero.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Sucursal Online Abierta 24/7 Sin Cuotas Mensuales Altas</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Lanza una tienda virtual profesional con sitio web y chatbot que vende productos automáticamente, atrayendo clientes globales mientras resuelves objeciones de costos recurrentes. Por 950 USD en pago único, incluye hasta 40 productos, pagos seguros y optimizaciones que convierten visitas en ventas, ideal para pymes y artesanos que buscan expandir sin complicaciones.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda Tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$950</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Crear la Estrategia para Ganar Clientes con Tu E-commerce</h2>
            <p className="text-gray-700 mb-4 text-center">Para artesanos, independientes y pymes, ganar clientes requiere una tienda online que muestre productos detalladamente, capture compras y automatice ventas, generando leads constantes sin esfuerzos manuales diarios.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La estrategia esencial usa un sitio que convierte búsquedas como "cómo mostrar mis productos" en ventas mediante UX fluida, secciones dedicadas a items con reseñas, integraciones de pago y SEO para visibilidad en "planificación para conseguir más clientes".</p>
                <p className="text-gray-700">Vamos a desglosar esto en cuatro pasos clave de nuestro paquete, para que implementes una táctica efectiva y observes un incremento rápido en ventas y tráfico digital.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Tu Tienda Online Completa</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Descubre cómo cada componente de tu e-commerce está diseñado para vender, automatizar y multiplicar tus ingresos.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Vender Online sin Esfuerzo?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">Transforma tu negocio con un e-commerce que gana clientes automáticamente. Agenda ahora y personalicemos tu solución.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lanza Tu Sucursal Online y Multiplica Ventas Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Con 950 USD en pago único, obtén una tienda completa con web premium, chatbot y herramientas para pymes, artesanos e independientes. Muestra productos, procesa pagos y analiza resultados para un crecimiento digital sólido.</p>
            
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Premium UX y Responsive</h3>
                  <p className="text-gray-600">Crea una experiencia intuitiva con enfoque en usuario, adaptable a todos los dispositivos, reflejando tu marca para atraer y retener clientes al mostrar productos de forma atractiva y profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tienda con Productos y Multilingüe</h3>
                  <p className="text-gray-600">Incluye hasta 7 secciones como Tienda con 40 productos individuales (descripciones, reseñas), Blog y Políticas, plus ES/ENG para alcance global y búsqueda en tiempo real que facilita ventas internacionales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones de Pago y Gestión</h3>
                  <p className="text-gray-600">Agrega carrito optimizado, pagos con tarjetas/PayPal, capacitación para inventario, WhatsApp flotante, Pixel Facebook y Analytics para automatizar ventas y rastrear campañas efectivamente.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO y Rendimiento</h3>
                  <p className="text-gray-600">Protege con SSL y anti-hacking, optimiza SEO básico para indexación, acelera carga con caching, más mapa geolocalización y galería para confianza y visibilidad que generan más clientes.</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Premium UX y Responsive</h3>
                  <p className="text-gray-600">Crea una experiencia intuitiva con enfoque en usuario, adaptable a todos los dispositivos, reflejando tu marca para atraer y retener clientes al mostrar productos de forma atractiva y profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tienda con Productos y Multilingüe</h3>
                  <p className="text-gray-600">Incluye hasta 7 secciones como Tienda con 40 productos individuales (descripciones, reseñas), Blog y Políticas, plus ES/ENG para alcance global y búsqueda en tiempo real que facilita ventas internacionales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones de Pago y Gestión</h3>
                  <p className="text-gray-600">Agrega carrito optimizado, pagos con tarjetas/PayPal, capacitación para inventario, WhatsApp flotante, Pixel Facebook y Analytics para automatizar ventas y rastrear campañas efectivamente.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO y Rendimiento</h3>
                  <p className="text-gray-600">Protege con SSL y anti-hacking, optimiza SEO básico para indexación, acelera carga con caching, más mapa geolocalización y galería para confianza y visibilidad que generan más clientes.</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $950</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Tienda global 24/7. UX fluida optimizada. SEO y seguridad integradas. Dominio/hosting primer año. Capacitación incluida para gestión.</div>
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
