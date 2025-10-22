'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function EstrategiaGanarClientes() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Análisis de Mercado',
      subtitle: 'Análisis Exhaustivo de Mercado y Competencia',
      image: '/images/categorias/analisis-estrategico/estudio-mercado.webp',
      content: {
        intro: '¿Sabías que el 60% de las empresas fracasan por no conocer realmente a su competencia y mercado?',
        description: 'No puedes ganar una batalla si no conoces el terreno. Por eso, antes de lanzar cualquier estrategia, necesitas entender profundamente tu mercado: quiénes son tus competidores reales (no solo los obvios), qué están haciendo bien, dónde están fallando y, lo más importante, qué oportunidades están dejando pasar que tú puedes aprovechar.',
        subtitle2: '¿Por qué es fundamental conocer a tu competencia?',
        description2: 'Imagina tener acceso a una radiografía completa de las estrategias digitales de tus competidores: sus palabras clave más rentables, el tipo de contenido que publican, cómo interactúan en redes sociales, y cuáles son sus puntos débiles. Esta información te permite dejar de adivinar y empezar a actuar con datos concretos.',
        question: '¿Te imaginas tomar decisiones de marketing sabiendo exactamente qué funciona en tu industria y qué no?',
        listTitle: 'Nuestro análisis incluye:',
        items: [
          'Investigación profunda de tendencias, necesidades y oportunidades de tu mercado objetivo',
          'Análisis FODA completo de tu empresa para identificar fortalezas, debilidades, oportunidades y amenazas',
          'Estudio detallado de la presencia online de tus competidores principales',
          'Identificación de palabras clave que utilizan tus competidores',
          'Análisis de sus estrategias de contenido y redes sociales',
          'Mapeo de oportunidades donde tu negocio puede destacar'
        ],
        conclusion: 'Con este análisis en tus manos, dejarás de desperdiciar recursos en tácticas que no funcionan y te enfocarás únicamente en las estrategias probadas que atraen clientes reales a negocios como el tuyo.',
        ctaTitle: '¿Listo para conocer tu mercado a fondo?',
        ctaDescription: 'Obtén claridad estratégica y ventaja competitiva desde el primer día',
        cta: 'Quiero Mi Análisis de Mercado'
      }
    },
    {
      id: 1,
      title: 'Propuesta de Valor',
      subtitle: 'Definición de tu Propuesta de Valor Única (USP)',
      image: '/images/categorias/analisis-estrategico/propuesta-valor.webp',
      content: {
        intro: '¿Alguna vez te has preguntado por qué los clientes deberían elegirte a ti y no a tu competencia?',
        description: 'La verdad es cruda pero necesaria: si no puedes explicar en 30 segundos por qué alguien debería comprarte a ti, perderás al cliente. Tu propuesta de valor única es esa razón poderosa, ese "algo especial" que hace que los clientes digan "esto es exactamente lo que necesito".',
        subtitle2: '¿Por qué necesitas una Propuesta de Valor clara?',
        description2: 'En un mercado saturado, donde tus competidores ofrecen productos o servicios similares, tu propuesta de valor es el diferenciador que convierte. No se trata de ser "mejor" genéricamente, sino de ser la opción perfecta para un tipo específico de cliente.',
        question: '¿Sabías que las empresas con una propuesta de valor clara convierten hasta 3 veces más que aquellas con mensajes genéricos?',
        listTitle: 'Nuestro proceso colaborativo incluye:',
        items: [
          'Entrevistas profundas para descubrir los elementos únicos de tu negocio',
          'Análisis de feedback de tus clientes actuales para identificar qué valoran realmente',
          'Comparación estratégica con tu competencia para encontrar tu espacio único',
          'Creación de un mensaje claro, conciso y memorable que comunique tu USP',
          'Desarrollo de argumentos de venta basados en tu propuesta de valor',
          'Guía para comunicar tu diferenciación en todos tus canales'
        ],
        conclusion: 'Al final del proceso, tendrás un mensaje cristalino que no solo explica qué haces, sino por qué los clientes te necesitan específicamente a ti. Este mensaje se convertirá en el corazón de toda tu comunicación: web, redes sociales, publicidad y conversaciones de venta.',
        ctaTitle: '¿Quieres dejar de parecer "uno más del montón"?',
        ctaDescription: 'Define tu propuesta de valor y atrae a los clientes ideales que buscan exactamente lo que ofreces',
        cta: 'Descubre Mi Ventaja Competitiva'
      }
    },
    {
      id: 2,
      title: 'SEO Local',
      subtitle: 'Estrategia de Posicionamiento Local (SEO)',
      image: '/images/categorias/analisis-estrategico/posicionamiento_slide_seo_objetivo.webp',
      content: {
        intro: '¿De qué sirve tener el mejor producto o servicio si nadie te encuentra cuando te buscan en Google?',
        description: 'Cada día, miles de personas en tu zona buscan en Google exactamente lo que tú ofreces. Pero si no apareces en la primera página, es como si no existieras. El 75% de los usuarios nunca pasa de la primera página de resultados. Por eso, el posicionamiento SEO no es un lujo, es una necesidad para sobrevivir en el mercado digital.',
        subtitle2: '¿Por qué el SEO local es vital para tu negocio?',
        description2: 'Piénsalo: cuando alguien busca "artesano en [tu ciudad]" o "servicio de [lo que ofreces] cerca de mí", está listo para comprar. Tiene una necesidad inmediata y está buscando activamente una solución. Si apareces primero, el cliente es tuyo.',
        question: '¿Sabías que el 46% de todas las búsquedas en Google tienen intención local?',
        listTitle: 'Nuestra estrategia de posicionamiento incluye:',
        items: [
          'Análisis de hasta 2000 palabras clave relevantes para tu nicho y ubicación geográfica',
          'Identificación de palabras clave con alta intención de compra',
          'Estudio de la intención de búsqueda para crear contenido que responda exactamente lo que buscan',
          'Estrategia completa de creación de contenido optimizado (artículos, posts, videos)',
          'Plan de artículos cluster y pilares para dominar tu nicho',
          'Calendario editorial con temas específicos listos para implementar',
          'Guía de optimización on-page (títulos, meta descripciones, encabezados)',
          'Técnicas de redacción SEO persuasiva que convierte visitas en clientes'
        ],
        conclusion: 'No estamos hablando de aparecer en Google "algún día". Estamos hablando de crear una máquina de atracción de clientes que trabaja para ti 24/7, posicionándote como la autoridad en tu sector y trayendo tráfico cualificado que se convierte en ventas reales.',
        question2: '¿Estás listo para que tus clientes ideales te encuentren antes que a tu competencia?',
        ctaTitle: '¿Quieres aparecer cuando tus clientes te buscan?',
        ctaDescription: 'Domina Google en tu zona y convierte búsquedas en clientes reales',
        cta: 'Quiero Posicionarme en Google'
      }
    },
    {
      id: 3,
      title: 'Contenido y Promoción',
      subtitle: 'Plan de Acción para Promoción y Publicidad',
      image: '/images/categorias/analisis-estrategico/contenido-promocion.webp',
      content: {
        intro: '¿Cuántas veces te has sentado frente a tu computadora sin saber qué publicar en redes sociales o en tu blog?',
        description: 'La falta de un plan de contenidos es una de las principales razones por las que los negocios abandonan sus esfuerzos de marketing digital. Publican sin estrategia, sin consistencia, y terminan frustrados porque "las redes no funcionan". La realidad es que las redes SÍ funcionan, pero solo cuando sabes qué publicar, cuándo publicarlo y cómo hacerlo de manera que conecte con tu audiencia.',
        subtitle2: '¿Por qué necesitas un plan de contenidos estructurado?',
        description2: 'El contenido es el puente entre tu negocio y tus clientes. Es lo que construye confianza, demuestra tu experiencia y convence a las personas de que eres la solución que necesitan. Pero crear contenido efectivo no es publicar lo primero que se te ocurra, es una ciencia que combina estrategia, psicología y datos.',
        question: '¿Sabías que las empresas con estrategia de contenido documentada obtienen 6 veces más conversiones que las que improvisan?',
        listTitle: 'Tu plan de contenido personalizado incluye:',
        items: [
          'Calendario editorial completo con temas específicos para cada semana',
          'Ideas concretas de contenido adaptadas a tu negocio y audiencia',
          'Optimización completa de tus perfiles en redes sociales',
          'Guía detallada de redacción persuasiva y storytelling',
          'Estructura de posts con "copy" que convierte',
          'Formatos de contenido variados (texto, imágenes, video, historias)',
          'Estrategia de contenido multimedia para máximo engagement',
          'Tips de diseño y elementos visuales que captan atención',
          'Plantillas y ejemplos listos para adaptar'
        ],
        conclusion: 'Ya no tendrás que preguntarte "¿qué publico hoy?". Tendrás un sistema claro y probado que te dice exactamente qué contenido crear, cómo presentarlo y cuándo compartirlo para maximizar el alcance y las conversiones.',
        question2: '¿Listo para crear contenido que realmente vende?',
        extraNote: 'Además, incluimos asesoramiento personalizado en cada fase: desde la conceptualización hasta la ejecución. No te dejamos solo con un documento, te guiamos para que implementes cada elemento de forma efectiva.',
        ctaTitle: '¿Cansado de publicar sin resultados?',
        ctaDescription: 'Obtén un plan de contenidos profesional que atrae, educa y convierte',
        cta: 'Dame Mi Estrategia de Contenido'
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
          style={{ backgroundImage: "url('/images/categorias/analisis-estrategico/estrategia-ganar-clientes-hero.webp')" }}
          aria-hidden="true"
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/analisis-estrategico" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Análisis Estratégico
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Atrae Clientes de Calidad Sin Depender de la Suerte</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Deja de perder tiempo y dinero en estrategias que no funcionan. Obtén un plan de marketing probado que convierte visitantes en clientes reales, diseñado específicamente para artesanos, profesionales independientes y PYMEs.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda tu Llamada Estratégica</span>
                  <span className="sm:hidden">Agenda tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$1,550</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION con "Seguir leyendo" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cómo Crear la Estrategia para Ganar Clientes?</h2>
            <p className="text-gray-700 mb-4 text-center">Ganar clientes no es cuestión de suerte ni de publicar contenido al azar. Se trata de entender profundamente a tu audiencia, conocer qué hace tu competencia, posicionarte estratégicamente en los buscadores y comunicar tu valor de forma clara y convincente.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4">La estrategia efectiva para conseguir más clientes se construye sobre cuatro pilares fundamentales: conocer tu mercado y competencia, definir qué te hace único, aparecer donde tus clientes te buscan, y crear contenido que conecte y convierta.</p>
                <p className="text-gray-700">A continuación, descubre los componentes esenciales que incluye nuestra Estrategia Ganar Clientes y cómo cada uno trabaja para atraer a las personas correctas hacia tu negocio:</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS INTERACTIVOS - Estilo Home */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">No imites, sigue un plan con fundamentos</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Las decisiones importantes no se toman por intuición, sino con datos reales, análisis y el apoyo de profesionales que saben cómo llevar tu negocio al siguiente nivel.</p>
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
                    
                    {tabs[activeTab].content.subtitle2 && (
                      <>
                        <h4 className="text-xl font-semibold text-white mt-6 mb-3">{tabs[activeTab].content.subtitle2}</h4>
                        <p className="text-gray-300 mb-3">{tabs[activeTab].content.description2}</p>
                      </>
                    )}
                    
                    {tabs[activeTab].content.question && (
                      <p className="text-blue-400 font-medium mb-4 italic">{tabs[activeTab].content.question}</p>
                    )}
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

                  {/* Conclusión y preguntas adicionales */}
                  {tabs[activeTab].content.conclusion && (
                    <p className="text-gray-300 mt-6 mb-4">{tabs[activeTab].content.conclusion}</p>
                  )}
                  
                  {tabs[activeTab].content.question2 && (
                    <p className="text-blue-400 font-medium mb-4 italic">{tabs[activeTab].content.question2}</p>
                  )}
                  
                  {tabs[activeTab].content.extraNote && (
                    <p className="text-gray-300 mb-6">{tabs[activeTab].content.extraNote}</p>
                  )}

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
            <p className="text-lg md:text-xl italic text-gray-300">Imagina tu empresa creciendo según las proyecciones, combinando datos reales y proyecciones para monitorear el cumplimiento de metas</p>
            <Button className="mt-8 font-bold bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base">
              Agenda una llamada - Haz clic aquí
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Transforma tu Presencia Digital y Atrae Clientes Reales</h2>
            <p className="text-lg text-gray-700 mb-12">No más intentos a ciegas. No más tiempo perdido. Obtén el plan completo que necesitas para destacar, posicionarte y crecer.</p>
            
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
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $1,550</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Incluye: 3 Sesiones de Consultoría + Análisis Completo + Plan de Acción + Seguimiento a 3 Meses</div>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-bold shadow-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Agenda tu Llamada Estratégica Ahora</span>
                <span className="sm:hidden">Agenda tu Llamada Ahora</span>
              </Button>
              <div className="text-xs md:text-sm text-blue-100 mt-4">Garantía de satisfacción | Sesión de seguimiento incluida | Soporte continuo</div>
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
