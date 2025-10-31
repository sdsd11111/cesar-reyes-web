'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Go2025() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Diseño Intuitivo UX/UI',
      subtitle: 'Eleva Tu Marca con Diseño UX/UI',
      image: '/images/categorias/desarrollo-web/go-2025-diseno-intuitivo.webp',
      content: {
        intro: '¿Sabías lo vital de un diseño intuitivo que capte clientes desde el primer vistazo sin frustraciones?',
        description: 'Un desarrollo web código enfocado en UX/UI crea una plataforma estática atractiva para pymes y artesanos, reflejando tu identidad mientras resuelve objeciones de simplicidad. Esto optimiza para búsquedas como "cómo mostrar mis productos", retiene visitantes con navegación fluida y convierte exploraciones en leads, superando tarjetas digitales al ofrecer una presencia profesional sólida sin mantenimiento complejo ni costos ocultos.',
        listTitle: 'Beneficios Clave del Diseño Intuitivo',
        items: [
          'Experiencia usuario que guía hacia productos y reduce abandonos.',
          'Diseño visual único que genera confianza inmediata en tu marca.',
          'Adaptación a necesidades para un sitio que vende automáticamente.',
          'Simplicidad que acelera cargas y mejora retención de leads.'
        ],
        ctaTitle: '¿Listo para un diseño que convierte?',
        ctaDescription: 'Crea una experiencia visual atractiva que destaca tus productos',
        cta: 'Quiero Mi Diseño UX/UI'
      }
    },
    {
      id: 1,
      title: 'Cabecera Fija con Botones',
      subtitle: 'Conecta Rápido con Cabecera Fija',
      image: '/images/categorias/desarrollo-web/go-2025-cabecera.webp',
      content: {
        intro: '¿Imaginas interacciones instantáneas que conviertan prospectos en clientes sin demoras?',
        description: 'La cabecera fija con logo y botones WhatsApp/Compartir facilita comunicaciones directas para independientes y pymes, resolviendo "cómo ganar clientes" al impulsar shares y consultas rápidas. Esto dinamiza networking, atrae tráfico orgánico y genera leads constantes, ofreciendo una ventaja sobre tarjetas digitales al integrar herramientas sociales en un sitio estático seguro con SSL para protección de datos sin inversiones extras iniciales.',
        listTitle: 'Ventajas de la Cabecera Estratégica',
        items: [
          'Botones WhatsApp para respuestas inmediatas y ventas directas.',
          'Función Compartir que expande alcance en redes sociales.',
          'Logo fijo que refuerza identidad de marca en toda navegación.',
          'Integración simple que soporta crecimiento sin rediseños costosos.'
        ],
        ctaTitle: '¿Quieres comunicación instantánea con clientes?',
        ctaDescription: 'Facilita interacciones directas con botones estratégicos',
        cta: 'Quiero Mi Cabecera Interactiva'
      }
    },
    {
      id: 2,
      title: 'Tres Secciones Estratégicas',
      subtitle: 'Estructura con Tres Secciones Clave',
      image: '/images/categorias/desarrollo-web/go-2025-secciones-clave.webp',
      content: {
        intro: '¿Qué si tu web muestra productos y contactos de forma clara, atrayendo clientes en minutos?',
        description: 'Incluye Portada, Servicios/Productos y Contactos para organizar contenido esencial en pymes e independientes, optimizando para "planificación para conseguir más clientes" con presentaciones atractivas. Esto resuelve sobrecargas informativas, facilita mostrar ofertas con detalles relevantes y captura leads directos, elevando visibilidad sobre opciones básicas como tarjetas digitales sin requerir mantenimiento ni complicaciones técnicas abrumadoras.',
        listTitle: 'Impacto de las Secciones Estratégicas',
        items: [
          'Portada atractiva que capta atención y presenta tu esencia.',
          'Sección productos que destaca características y reseñas clave.',
          'Contactos optimizados para consultas rápidas y seguras.',
          'Estructura escalable que atrae tráfico orgánico sostenido.'
        ],
        ctaTitle: '¿Quieres una estructura que vende?',
        ctaDescription: 'Organiza tu contenido para máxima conversión',
        cta: 'Quiero Mi Estructura Web'
      }
    },
    {
      id: 3,
      title: 'SEO Básico y Dominio/Hosting',
      subtitle: 'Posiciona con SEO y Seguridad',
      image: '/images/categorias/desarrollo-web/go-2025-seo-seguridad.webp',
      content: {
        intro: '¿Estás listo para que tu dominio propio aparezca en Google y proteja datos de clientes?',
        description: 'Configura palabra clave principal y tres relacionadas con dominio/hosting primer año y SSL para artesanos y pymes, impulsando visibilidad en búsquedas como "cómo ganar clientes". Esto construye confianza, mejora indexación orgánica y atrae leads cualificados, superando tarjetas digitales al ofrecer una plataforma sólida sin costos recurrentes ni riesgos, permitiendo decisiones informadas para crecimiento digital inicial.',
        listTitle: 'Elementos para Visibilidad Segura',
        items: [
          'SEO básico que posiciona en resultados relevantes rápidamente.',
          'Dominio propio que eleva profesionalismo y memorabilidad.',
          'Hosting incluido para lanzamiento sin demoras extras.',
          'SSL que protege interacciones y genera lealtad de usuarios.'
        ],
        ctaTitle: '¿Quieres aparecer en Google con seguridad?',
        ctaDescription: 'Posiciona tu negocio con SEO y protección SSL',
        cta: 'Quiero Mi SEO y Dominio'
      }
    }
  ];
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION - Fullscreen con imagen y overlay */}
      <section className="relative min-h-screen flex items-center text-white">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/go-2025-hero.webp')" }}
          aria-hidden="true"
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Primera Web Profesional Sin Mantenimiento Alto</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Inicia tu presencia digital con una página estática que posiciona tu marca y atrae clientes sin costos recurrentes. Por solo 250 USD único, obtén un sitio intuitivo con dominio propio, botones WhatsApp y SEO básica, mejor que una tarjeta digital para mostrar productos y ganar leads orgánicos.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$250</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION con "Seguir leyendo" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Crear la Estrategia para Ganar Clientes con Tu Primera Web</h2>
            <p className="text-gray-700 mb-4 text-center">Para artesanos, independientes y pymes, ganar clientes empieza con una web simple que muestre productos, facilite contactos y posicione en búsquedas, capturando leads sin complicaciones diarias.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La clave es un sitio estático que convierte visitas en clientes mediante diseño UX intuitivo, secciones clave para ofertas y optimizaciones SEO para términos como "cómo ganar clientes" o "mostrar mis productos".</p>
                <p className="text-gray-700">Desglosiémoslo en cuatro pasos esenciales de nuestro paquete "GO 2025", para que implementes una estrategia efectiva y veas resultados rápidos en visibilidad y conversiones digitales.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS INTERACTIVOS - Estilo Home */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Descubre los 4 Pilares de GO 2025</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Cada elemento de tu primera web está diseñado para convertir visitantes en clientes, sin complicaciones técnicas ni costos recurrentes.</p>
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
                    <span className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full mr-2 md:mr-3 text-xs md:text-sm font-bold flex-shrink-0 ${
                      activeTab === index ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="font-medium text-sm md:text-base">{tab.title}</span>
                  </button>
                ))}
              </div>

              {/* Contenido del tab activo */}
              <div className="md:w-3/4 w-full min-w-0">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-700 transition-all duration-300 hover:border-blue-500/30">
                  {/* Intro y descripción principal */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 break-words">{activeTab + 1}. {tabs[activeTab].subtitle}</h3>
                    <p className="text-blue-400 font-medium mb-3 italic">{tabs[activeTab].content.intro}</p>
                    <p className="text-gray-300 mb-4">{tabs[activeTab].content.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
                    {/* Imagen */}
                    <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
                      <Image
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Lista de items */}
                    <div className="min-w-0">
                      {tabs[activeTab].content.listTitle && (
                        <h4 className="text-base md:text-lg font-semibold text-white mb-4">{tabs[activeTab].content.listTitle}</h4>
                      )}
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

                  {/* CTA Box */}
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

                  {/* Indicadores */}
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

          {/* CTA inferior */}
          <div className="max-w-3xl mx-auto text-center mt-16 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Lanzar Tu Primera Web?</h3>
            <p className="text-lg md:text-xl italic text-gray-300">No esperes más para posicionar tu marca y ganar clientes. Agenda una llamada y adaptemos "GO 2025" a ti.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Inicia "GO 2025" y Atrae Clientes Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Por 250 USD único, obtén una web estática premium con diseño UX, botones interactivos, secciones clave y SEO para pymes e independientes. Muestra productos, comunica rápido y posiciona tu dominio para leads constantes y crecimiento sólido.</p>
            
            {/* Cards con iconos y halos - Slider en móvil, Grid en desktop */}
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                {/* Card 1 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Eye className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visión Clara y Estratégica</h3>
                  <p className="text-gray-600">Decisiones informadas basadas en datos reales de tu mercado</p>
                </div>

                {/* Card 2 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Zap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ventaja Competitiva</h3>
                  <p className="text-gray-600">Diferenciación real que hace que te elijan a ti</p>
                </div>

                {/* Card 3 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clientes Cualificados</h3>
                  <p className="text-gray-600">Atrae exactamente el tipo de clientes que necesitas</p>
                </div>

                {/* Card 4 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Máximo ROI</h3>
                  <p className="text-gray-600">Optimiza recursos y multiplica resultados</p>
                </div>

                {/* Card 5 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Rocket className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Listo para Implementar</h3>
                  <p className="text-gray-600">Acción concreta desde el día uno</p>
                </div>

                {/* Card 6 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <LineChart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Crecimiento Sostenible</h3>
                  <p className="text-gray-600">Base sólida para escalar tu negocio</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Eye className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visión Clara y Estratégica</h3>
                  <p className="text-gray-600">Decisiones informadas basadas en datos reales de tu mercado</p>
                </div>

                {/* Card 2 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Zap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ventaja Competitiva</h3>
                  <p className="text-gray-600">Diferenciación real que hace que te elijan a ti</p>
                </div>

                {/* Card 3 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clientes Cualificados</h3>
                  <p className="text-gray-600">Atrae exactamente el tipo de clientes que necesitas</p>
                </div>

                {/* Card 4 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Máximo ROI</h3>
                  <p className="text-gray-600">Optimiza recursos y multiplica resultados</p>
                </div>

                {/* Card 5 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Rocket className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Listo para Implementar</h3>
                  <p className="text-gray-600">Acción concreta desde el día uno</p>
                </div>

                {/* Card 6 */}
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <LineChart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Crecimiento Sostenible</h3>
                  <p className="text-gray-600">Base sólida para escalar tu negocio</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Beneficios Principales</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="font-semibold">Plataforma profesional sólida</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Visibilidad SEO optimizada</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Comunicación WhatsApp rápida</p>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $250</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Dominio/hosting primer año. Seguridad SSL incluida para confianza.</div>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-bold shadow-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Comenzar Mi Proyecto GO 2025</span>
                <span className="sm:hidden">Comenzar GO 2025</span>
              </Button>
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
