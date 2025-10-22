'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function AnalisisCompetencia() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Radiografía del Mercado',
      subtitle: 'Radiografía Completa del Mercado Digital',
      image: '/images/categorias/analisis-estrategico/radiografia-mercado.webp',
      content: {
        intro: '¿Sabías que el 70% de los negocios que fracasan nunca entendieron realmente su mercado digital?',
        description: 'No puedes competir en un mercado que no entiendes. Mientras tú publicas contenido esperando resultados, tus competidores están aprovechando tendencias específicas, hablándole directamente a nichos segmentados y capturando clientes con precisión quirúrgica.',
        subtitle2: '¿Por qué necesitas entender tu mercado digital primero?',
        description2: 'Imagina intentar vender sin saber quién es tu cliente ideal, qué dispositivos usa, a qué hora está online, qué contenido consume o qué problemas reales tiene. Estarías disparando al aire, desperdiciando tiempo, dinero y energía.',
        question: '¿Sabes realmente quiénes son las personas que deberían comprarte?',
        extraNote: 'Nuestro análisis de mercado no es teoría abstracta. Es data concreta sobre tu industria específica: qué está funcionando ahora, qué tendencias están emergiendo, qué tipo de contenido está generando engagement, y cómo puedes posicionarte para capturar esas oportunidades.',
        listTitle: 'Lo que incluye tu radiografía del mercado:',
        items: [
          'Identificación de tendencias online actuales en tu sector específico',
          'Análisis de comportamiento digital de tu público objetivo',
          'Segmentación detallada de audiencias por demografía, intereses y comportamiento',
          'Identificación de nuevas oportunidades de mercado sin explotar',
          'Análisis de estacionalidad y patrones de búsqueda',
          'Evaluación de canales digitales más efectivos para tu nicho',
          'Mapeo de puntos de dolor y necesidades de tu audiencia',
          'Identificación de brechas en el mercado que nadie está cubriendo'
        ],
        question2: '¿Te imaginas tener un mapa completo de tu mercado digital antes de invertir un solo peso en marketing?',
        conclusion: 'Con esta información, dejas de adivinar y empiezas a actuar con datos concretos. Sabes exactamente a quién dirigirte, qué decirles y dónde encontrarlos.',
        ctaTitle: '¿Quieres conocer tu mercado a fondo?',
        ctaDescription: 'Obtén claridad total sobre tu industria digital y las oportunidades que están esperando por ti',
        cta: 'Quiero Mi Radiografía de Mercado'
      }
    },
    {
      id: 1,
      title: 'Espionaje Estratégico',
      subtitle: 'Espionaje Estratégico de tus Competidores Digitales',
      image: '/images/categorias/analisis-estrategico/espionaje-competencia.webp',
      content: {
        intro: '¿Te has preguntado por qué algunos de tus competidores tienen tantos seguidores, tanto tráfico y tantos clientes?',
        description: 'La respuesta está en sus estrategias digitales. Y la buena noticia es que no son secretas, solo necesitas saber dónde buscar y qué analizar. Mientras tú intentas reinventar la rueda, tus competidores ya descubrieron qué funciona y lo están usando para capturar clientes todos los días.',
        subtitle2: '¿Por qué el espionaje digital es fundamental para tu éxito?',
        description2: 'Porque te ahorra años de prueba y error. En lugar de probar 20 estrategias diferentes para ver cuál funciona, puedes analizar qué está haciendo tu competencia exitosa y adaptar esas tácticas probadas a tu negocio. Aprendes de sus aciertos y, mejor aún, de sus errores.',
        question: '¿Sabías que tus competidores más grandes también tienen debilidades que puedes explotar?',
        extraNote: 'Nadie es perfecto. Todos tienen brechas en su estrategia, palabras clave que no están aprovechando, redes sociales descuidadas, contenido desactualizado. Nuestro análisis identifica exactamente esas debilidades para que tú puedas convertirlas en tu ventaja competitiva.',
        listTitle: 'Nuestro espionaje estratégico incluye:',
        items: [
          'Identificación de competidores directos e indirectos en el mundo digital',
          'Análisis profundo de sus sitios web: diseño, estructura, velocidad, UX',
          'Evaluación de su estrategia de contenido: qué publican, cuándo, y qué engagement genera',
          'Análisis de presencia en redes sociales: frecuencia, tipo de contenido, interacción',
          'Investigación de campañas de publicidad online (Google Ads, Facebook Ads, Instagram Ads)',
          'Análisis de SEO: palabras clave que los posicionan, backlinks, autoridad de dominio',
          'Análisis de SEO local: Google My Business, reseñas, posicionamiento geográfico',
          'Evaluación de estrategias de email marketing y automatización',
          'Identificación de sus propuestas de valor y mensajes principales',
          'Análisis de sus embudos de conversión y páginas de destino'
        ],
        question2: '¿Qué tal si pudieras ver exactamente el blueprint digital de tu competencia más exitosa?',
        conclusion: 'Eso es exactamente lo que te damos. Un documento completo que te muestra paso a paso qué están haciendo, cómo lo están haciendo, y qué resultados están obteniendo.',
        ctaTitle: '¿Listo para descubrir los secretos de tu competencia?',
        ctaDescription: 'Accede a un análisis completo de las estrategias digitales que están funcionando en tu industria',
        cta: 'Quiero Espiar a Mi Competencia'
      }
    },
    {
      id: 2,
      title: 'Benchmarking',
      subtitle: 'Benchmarking Digital: ¿Dónde Estás Parado Frente a tu Competencia?',
      image: '/images/categorias/analisis-estrategico/benchmarking-digital.webp',
      content: {
        intro: '¿Cómo puedes mejorar si no sabes en qué estás fallando?',
        description: 'El benchmarking es como un espejo brutal pero necesario. Te muestra exactamente dónde estás ganando y dónde estás perdiendo frente a tu competencia. Y la realidad puede sorprenderte: a veces crees que estás bien cuando en realidad estás años luz atrás. Otras veces, estás mucho mejor de lo que piensas pero no lo estás aprovechando.',
        subtitle2: '¿Por qué necesitas un benchmarking digital honesto?',
        description2: 'Porque las suposiciones matan negocios. "Creo que mi web está bien", "creo que mis redes están activas", "creo que mi contenido es bueno"... mientras tanto, tu competencia te está dejando en el polvo porque saben exactamente dónde están parados y qué necesitan mejorar.',
        question: '¿Sabías que pequeñas mejoras en áreas clave pueden duplicar tus resultados?',
        extraNote: 'No necesitas ser perfecto en todo. Necesitas identificar las 3-5 áreas críticas donde una mejora significativa te dará la mayor ventaja competitiva, y enfocarte ahí primero. Eso es exactamente lo que nuestro benchmarking te revela.',
        listTitle: 'Nuestro benchmarking completo incluye:',
        items: [
          'Comparación de presencia online: sitio web, redes sociales, directorios, etc.',
          'Análisis de calidad y frecuencia de contenido vs. competencia',
          'Comparación de velocidad y optimización móvil de sitios web',
          'Evaluación de engagement en redes sociales (likes, comentarios, shares, crecimiento)',
          'Comparación de posicionamiento en Google para palabras clave principales',
          'Análisis de autoridad de dominio y backlinks vs. competidores',
          'Comparación de reseñas online y reputación digital',
          'Evaluación de estrategias de conversión: CTAs, formularios, facilidad de contacto',
          'Análisis de propuestas de valor: claridad, diferenciación, efectividad',
          'Comparación de experiencia de usuario y diseño visual',
          'Identificación de gaps: áreas donde quedas atrás significativamente',
          'Identificación de fortalezas: áreas donde superas a tu competencia'
        ],
        question2: '¿Quieres saber exactamente qué necesitas mejorar para superar a tu competencia?',
        conclusion: 'Este benchmarking te da una lista priorizada. No "mejora todo", sino "mejora ESTO primero porque es lo que más impacto tendrá en tus resultados".',
        ctaTitle: '¿Quieres saber dónde estás parado realmente?',
        ctaDescription: 'Obtén una comparación honesta y detallada de tu presencia digital vs. tu competencia',
        cta: 'Dame Mi Benchmarking Digital'
      }
    },
    {
      id: 3,
      title: 'Plan de Acción',
      subtitle: 'Plan de Acción Claro: Recomendaciones Específicas para Superarlos',
      image: '/images/categorias/analisis-estrategico/plan-accion.webp',
      content: {
        intro: '¿De qué sirve toda esta información si no sabes qué hacer con ella?',
        description: 'Aquí es donde la mayoría de los análisis de competencia fallan. Te dan 50 páginas de datos, gráficos y comparaciones, pero al final te dejan con una pregunta: "¿Y ahora qué hago?". Nosotros no hacemos eso. Te damos un plan de acción específico, priorizado y listo para implementar.',
        subtitle2: '¿Por qué las recomendaciones accionables son lo más valioso del análisis?',
        description2: 'Porque transforman información en resultados. No es solo "tu competencia publica 5 veces por semana", es "publica 5 veces por semana en estos horarios, con estos tipos de contenido, enfocado en estos temas, y usa estos formatos porque generan 3x más engagement".',
        question: '¿Prefieres 100 páginas de teoría o 10 acciones concretas que puedas implementar mañana mismo?',
        extraNote: 'Nuestras recomendaciones son específicas para tu negocio, no genéricas. No decimos "mejora tu SEO", decimos "optimiza estas 5 páginas con estas palabras clave específicas, crea estos 3 artículos sobre estos temas, y enlázalos de esta manera".',
        listTitle: 'Tus recomendaciones incluyen:',
        items: [
          'Plan de acción paso a paso para diferenciarte de la competencia',
          'Mejoras específicas para tu sitio web: diseño, estructura, contenido, velocidad',
          'Estrategia de contenido basada en lo que funciona en tu industria',
          'Plan de optimización para redes sociales con tipos de contenido y frecuencia',
          'Recomendaciones de SEO: palabras clave específicas a atacar, optimizaciones técnicas',
          'Estrategias de SEO local: optimización de Google My Business, gestión de reseñas',
          'Tácticas para mejorar conversión: CTAs, formularios, páginas de destino',
          'Oportunidades de nicho sin explotar que puedes dominar',
          'Quick wins: cambios pequeños con gran impacto inmediato',
          'Roadmap a 90 días: qué hacer en el primer mes, segundo mes, tercer mes',
          'Priorización clara: qué atacar primero, segundo, tercero según impacto/esfuerzo',
          'Recursos necesarios: qué puedes hacer tú, qué necesitas delegar, qué herramientas usar'
        ],
        question2: '¿Listo para dejar de reaccionar y empezar a liderar tu mercado?',
        conclusion: 'Con este plan, no solo alcanzas a tu competencia, la superas. Porque mientras ellos siguen haciendo lo mismo, tú estarás implementando estrategias probadas más las oportunidades únicas que identificamos para tu negocio.',
        ctaTitle: '¿Quieres tu plan de acción personalizado?',
        ctaDescription: 'Recibe recomendaciones específicas y priorizadas listas para implementar desde mañana',
        cta: 'Dame Mi Plan de Acción'
      }
    }
  ];

  const benefits = [
    {
      title: 'Deja de Sentirte Inseguro',
      description: 'Toma decisiones con confianza basadas en datos sólidos de tu competencia',
      icon: <Eye className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Descubre Oportunidades Ocultas',
      description: 'Encuentra nichos sin explotar y nuevas formas de conectar con clientes',
      icon: <Zap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Desarrolla Estrategias Imbatibles',
      description: 'Crea campañas que superen a tu competencia y consigan más clientes',
      icon: <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Ahorra Tiempo y Dinero',
      description: 'Evita errores costosos siguiendo estrategias probadas en tu sector',
      icon: <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Domina el Mercado Digital',
      description: 'Conviértete en el líder online de tu sector',
      icon: <Rocket className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Claridad Total',
      description: 'Sabe exactamente qué hacer, cómo hacerlo y en qué orden',
      icon: <LineChart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/categorias/analisis-estrategico/analisis-competencia-hero.webp"
            alt="Análisis de Competencia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Descubre los Secretos de tu Competencia <span className="text-blue-400">Antes de que te Roben Más Clientes</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            ¿Te preocupa que tus competidores te estén dejando atrás mientras tú intentas adivinar qué hacer? En el mundo digital, no saber qué hace tu competencia es como jugar con los ojos vendados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Descubre Qué Hace tu Competencia
              </Button>
            </Link>
            <div className="text-center mt-4 sm:mt-0">
              <p className="text-blue-300 font-semibold">Inversión única: $600</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Cómo Analizar a tu Competencia para Superarla en el Mundo Digital?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                <strong>Analizar a tu competencia no es espiar, es inteligencia de mercado.</strong> Se trata de entender qué está funcionando en tu industria, qué tácticas están atrayendo clientes y, lo más importante, qué oportunidades están dejando pasar que tú puedes aprovechar.
              </p>
              <details className="mb-6">
                <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Seguir leyendo...
                </summary>
                <div className="mt-4 space-y-4">
                  <p>
                    El análisis efectivo de competencia se construye sobre cuatro pilares digitales: entender el panorama completo de tu mercado online, identificar quiénes son realmente tus competidores digitales (no solo los obvios), comparar tu presencia con la de ellos, y recibir recomendaciones claras y accionables para superarlos.
                  </p>
                </div>
              </details>
              <p className="text-lg font-semibold text-center text-gray-800 mt-10 mb-2">
                A continuación, descubre los componentes esenciales de nuestro Análisis de la Competencia y cómo cada uno te da la ventaja estratégica que necesitas:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de navegación */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Radiografía del Mercado Digital */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 0 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(0)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Radiografía del Mercado Digital</h3>
                <p className="text-gray-600 text-sm">
                  Identificamos las tendencias online que están marcando tu sector y las nuevas oportunidades que están surgiendo. Segmentamos a tu público objetivo para campañas precisas.
                </p>
              </div>
            </div>

            {/* Card 2: Espionaje Estratégico de Competidores */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 1 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(1)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Espionaje Estratégico de Competidores</h3>
                <p className="text-gray-600 text-sm">
                  Revelamos quiénes son tus competidores digitales reales, analizamos sus sitios web, redes sociales, campañas publicitarias, SEO local y estrategias de contenido.
                </p>
              </div>
            </div>

            {/* Card 3: Benchmarking Digital a Fondo */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 2 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(2)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Benchmarking Digital a Fondo</h3>
                <p className="text-gray-600 text-sm">
                  Comparamos tu presencia online con la de tus competidores para identificar dónde te estás quedando atrás y dónde puedes destacar inmediatamente.
                </p>
              </div>
            </div>

            {/* Card 4: Recomendaciones Claras y Accionables */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 3 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(3)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recomendaciones Claras y Accionables</h3>
                <p className="text-gray-600 text-sm">
                  Te entregamos un plan de acción con pasos específicos para diferenciarte y atraer más clientes que tu competencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar de navegación */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-3">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 border border-slate-700'
                    }`}
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold ${
                      activeTab === tab.id ? 'bg-white/20' : 'bg-slate-700'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="font-semibold">{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contenido principal */}
            <div className="lg:w-3/4">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <h2 className="text-3xl font-bold text-white mb-6">{index + 1}. {tab.subtitle}</h2>
                  
                  <div className="mb-8">
                    <Image
                      src={tab.image}
                      alt={tab.subtitle}
                      width={800}
                      height={450}
                      className="rounded-xl shadow-lg w-full h-auto mb-8"
                    />
                  </div>

                    <div className="space-y-6 text-gray-300">
                      <p className="text-xl text-blue-300 font-medium italic">{tab.content.intro}</p>
                      <p className="text-gray-300 leading-relaxed">{tab.content.description}</p>
                      
                      {tab.content.subtitle2 && (
                        <>
                          <h3 className="text-2xl font-semibold text-white mt-8 mb-4">{tab.content.subtitle2}</h3>
                          <p className="text-gray-300 leading-relaxed">{tab.content.description2}</p>
                        </>
                      )}
                      
                      {tab.content.question && (
                        <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
                          <p className="text-blue-300 font-medium italic">💡 {tab.content.question}</p>
                        </div>
                      )}

                      {tab.content.extraNote && (
                        <p className="text-gray-300 leading-relaxed">{tab.content.extraNote}</p>
                      )}
                      
                      {tab.content.listTitle && (
                        <div className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                          <h4 className="text-xl font-semibold text-white mb-4">{tab.content.listTitle}</h4>
                          <ul className="space-y-3">
                            {tab.content.items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {tab.content.question2 && (
                        <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
                          <p className="text-blue-300 font-medium italic">💡 {tab.content.question2}</p>
                        </div>
                      )}
                      
                      {tab.content.conclusion && (
                        <div className="bg-slate-900/70 p-6 rounded-xl mt-8 border border-slate-700">
                          <p className="text-lg text-gray-300 leading-relaxed">{tab.content.conclusion}</p>
                        </div>
                      )}
                      
                      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 shadow-xl shadow-blue-500/20">
                        <h3 className="text-2xl font-bold mb-3 text-white">{tab.content.ctaTitle}</h3>
                        <p className="text-blue-100 mb-6">{tab.content.ctaDescription}</p>
                        <Link href="#contacto">
                          <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-base transition-all duration-300 transform hover:scale-105">
                            {tab.content.cta}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Deja de Competir a Ciegas y Toma el Control de tu Mercado
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            No más suposiciones. No más ver a tu competencia avanzar sin entender por qué. Obtén el análisis completo que te da la ventaja estratégica que necesitas para dominar tu nicho digital.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">Inversión Única: $600</p>
              <p className="text-gray-600 mb-6">Incluye: Radiografía de Mercado + Espionaje de Competidores + Benchmarking Completo + Plan de Acción Priorizado</p>
              <Link href="#contacto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Quiero Mi Análisis de Competencia Ahora
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">Análisis digital completo | Recomendaciones accionables | Implementación inmediata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
