'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function AlianzaExclusiva() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Inversión Inicial Cero',
      subtitle: 'Elimina Barreras con Inversión Inicial Cero',
      image: '/images/categorias/posicionamiento/inversion-cero.webp',
      content: {
        intro: '¿Sabías lo liberador de lanzar un ecommerce profesional sin costos iniciales?',
        description: 'Asumimos desarrollo de sitio ecommerce 30 productos, dominio, hosting 24 meses, fotos profesionales y estudio mercado valorado desde 1550 USD para pymes, resolviendo objeciones financieras mientras optimizas para "mostrar productos". Esto incluye recursos para inventario, atrayendo leads orgánicos con plataforma sólida que genera confianza y convierte visitantes en ventas sin riesgos upfront.',
        listTitle: 'Beneficios Clave Inversión Inicial Cero',
        items: [
          'Lanzamiento rápido con ecommerce listo para 30 productos y fotos profesionales incluidas.',
          'Acceso a herramientas premium que diferencian tu marca inmediatamente en el mercado.',
          'Enfoque total en ventas sin preocupaciones por costos iniciales elevados o inversiones extras.',
          'Alianza que alinea incentivos mutuos para resultados sostenibles, escalables y medibles constantemente.'
        ],
        ctaTitle: '¿Listo para lanzar sin inversión inicial?',
        ctaDescription: 'Elimina barreras financieras y comienza a vender',
        cta: 'Quiero Mi Ecommerce Sin Inversión'
      }
    },
    {
      id: 1,
      title: 'Plan Estratégico Marketing',
      subtitle: 'Diferénciate con Plan Estratégico Exclusivo',
      image: '/images/categorias/posicionamiento/plan-estrategico.webp',
      content: {
        intro: '¿Imaginas usar insights de competidores para captar más clientes sin reinventar estrategias?',
        description: 'Garantizamos no trabajar con rivales en tu zona, desarrollando plan estratégico con estudio competencia, encuestas, FODA, palabras clave y posicionamiento para pymes, resolviendo "planificación para clientes" al identificar gaps y oportunidades. Esto optimiza marketing estacional, genera leads cualificados y atrae tráfico orgánico, asegurando que tu ecommerce destaque en búsquedas relevantes sin complejidades.',
        listTitle: 'Ventajas Plan Estratégico y Equipo Exclusivo',
        items: [
          'Análisis FODA que revela fortalezas únicas para posicionar productos diferenciados efectivamente.',
          'Estudio palabras clave que impulsa apariciones orgánicas en Google rápidamente y sostenidamente.',
          'Estrategias personalizadas que captan mercados locales y priorizan tu éxito sin competencia directa.',
          'Protección contractual contra dilución de esfuerzos con soporte dedicado y confianza en alianza ética.'
        ],
        ctaTitle: '¿Quieres una estrategia exclusiva?',
        ctaDescription: 'Obtén un plan personalizado sin competencia directa',
        cta: 'Quiero Mi Plan Estratégico'
      }
    },
    {
      id: 2,
      title: 'Posicionamiento Digital 24 Meses',
      subtitle: 'Avanza con Posicionamiento Digital Medible',
      image: '/images/categorias/posicionamiento/crecimiento-sostenible.webp',
      content: {
        intro: '¿Qué si contenido mensual y SEO optimizado atraen clientes constantes sin esfuerzos diarios?',
        description: 'Ofrecemos 5 artículos sobre tendencias, 20 posts en Facebook/Instagram, página por producto nuevo, optimización SEO, informes mensuales, mantenimiento y 1 campaña publicitaria mensual para pymes. Esto resuelve "ganar clientes" al posicionar en búsquedas orgánicas, genera interacciones en redes enfocadas en branding y mide tráfico/oportunidades, asegurando crecimiento medible sin costos variables inesperados.',
        listTitle: 'Impacto Posicionamiento Continuo 24 Meses',
        items: [
          'Artículos mensuales que educan audiencia y elevan autoridad en Google atrayendo tráfico cualificado.',
          'Posts optimizados que impulsan engagement auténtico y tráfico sostenido hacia tu sitio web.',
          'Optimización SEO continua que mejora posiciones en búsquedas, conversiones reales y resultados medibles.',
          'Informes detallados que validan tu inversión, demuestran ROI transparente y ajustan tácticas efectivas.'
        ],
        ctaTitle: '¿Quieres posicionamiento continuo?',
        ctaDescription: 'Atrae clientes mes a mes con contenido y SEO optimizado',
        cta: 'Quiero Posicionamiento Digital'
      }
    },
    {
      id: 3,
      title: 'Propiedad Total Garantizada',
      subtitle: 'Asegura Futuro con Propiedad Total',
      image: '/images/categorias/posicionamiento/soporte-continuo.webp',
      content: {
        intro: '¿Estás listo para propiedad completa de tu ecosistema digital tras alianza exitosa?',
        description: 'Al finalizar 24 meses, transfiere 100% del sitio, dominio y contenido sin restricciones para pymes, con opción continuar posicionamiento o auto-gestión, más renovación hosting económica. Esto impulsa "mostrar productos" con exclusividad sectorial, genera lealtad evitando competencia interna y asegura planificación financiera predecible, permitiendo escalabilidad sin dependencias ni sorpresas post-contrato mientras integras todo el ecosistema llave en mano.',
        listTitle: 'Elementos Asociación Sostenible y Solución Integral',
        items: [
          'Propiedad total sin restricciones que empodera control independiente absoluto y flexibilidad estratégica completa.',
          'Exclusividad zonal contractual que protege tu mercado de dilución estratégica y garantiza enfoque dedicado.',
          'Gestión completa que cubre desarrollo web, contenido blog SEO, marketing redes y mantenimiento técnico.',
          'Renovación hosting económica post-alianza con opción extender servicios basados en resultados probados concretos.'
        ],
        ctaTitle: '¿Quieres propiedad total al finalizar?',
        ctaDescription: 'Asegura tu ecosistema digital completo sin dependencias',
        cta: 'Quiero Mi Propiedad Total'
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
          style={{ backgroundImage: "url('/images/categorias/posicionamiento/alianza-exclusiva-hero.webp')" }}
          aria-hidden="true"
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/posicionamiento" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Posicionamiento
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Alianza Exclusiva para Crecer Sin Inversión Inicial</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Forma una sociedad estratégica que construye tu ecommerce y posiciona tu marca en Google, eliminando barreras financieras upfront. Desde 500 USD mensual por 24 meses, asumimos desarrollo valorado desde 1550 USD con SEO continuo, convirtiendo tráfico en ventas para pymes mientras diriges tu negocio.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Desde: <strong className="text-white">$500/mes</strong> (24 meses)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION con "Seguir leyendo" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Ganar Clientes con un Socio Digital Exclusivo</h2>
            <p className="text-gray-700 mb-4 text-center">Para artesanos, independientes y pymes, ganar clientes requiere una alianza que elimine barreras financieras, construyendo ecommerce profesional que muestre productos y genere leads sostenibles mediante SEO enfocado.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La clave es un socio que asume inversiones, optimizando para búsquedas como "cómo ganar clientes" o "cómo mostrar productos", convirtiendo visibilidad en ventas medibles y escalables.</p>
                <p className="text-gray-700">Desglosiémoslo en cuatro pasos de nuestra "Alianza Exclusiva", para implementar una estrategia digital y observar aumentos rápidos en tráfico orgánico y clientes cualificados.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS INTERACTIVOS - Estilo Home */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Descubre los 4 Pilares de la Alianza Exclusiva</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Una asociación estratégica que elimina barreras financieras y construye tu presencia digital completa, sin riesgos iniciales.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Aliarte y Multiplicar Clientes?</h3>
            <p className="text-lg md:text-xl italic text-gray-300">Elimina barreras financieras y gana leads con una asociación exclusiva dedicada. Agenda ahora y adaptemos esta estrategia.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Forma Alianza Exclusiva y Crece Tu Negocio Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Desde 500 USD mensual por 24 meses, accede a desarrollo ecommerce, plan marketing estratégico y posicionamiento continuo con inversión inicial cero para pymes. Muestra productos, atrae tráfico orgánico y mide resultados para ventas sostenidas.</p>
            
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
              <h3 className="text-xl md:text-2xl font-bold mb-4">Beneficios Principales Alianza</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="font-semibold">Crecimiento sin upfront</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Estrategia exclusiva medible</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Propiedad total asegurada</p>
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Desde $500/mes por 24 meses</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Alianza 24 meses flexible. Ecosistema completo llave en mano.</div>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-bold shadow-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Iniciar Mi Alianza Digital</span>
                <span className="sm:hidden">Iniciar Alianza</span>
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
