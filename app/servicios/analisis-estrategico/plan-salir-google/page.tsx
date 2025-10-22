'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart, Lightbulb, Compass, Award, DollarSign, FileText, TrendingDown, ListChecks, PenTool } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function PlanSalirGoogle() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Análisis de Palabras Clave',
      subtitle: 'Análisis Exhaustivo de Palabras Clave',
      image: '/images/categorias/analisis-estrategico/palabras-clave.webp',
      content: {
        intro: '¿Sabías que el 93% de las experiencias online comienzan con un motor de búsqueda?',
        description: 'Cada segundo, miles de personas escriben en Google exactamente lo que necesitan. Pero aquí está el problema: si no estás usando las palabras correctas en tu sitio web, esas personas nunca te encontrarán. Es como tener la mejor tienda del mundo, pero en un idioma que tus clientes no hablan.',
        subtitle2: '¿Por qué las palabras clave son el corazón de tu visibilidad online?',
        description2: 'Las palabras clave son el puente entre lo que tus clientes buscan y lo que tú ofreces. No se trata de adivinar qué términos usar, sino de descubrir con datos precisos qué frases tienen alto volumen de búsqueda, baja competencia y, lo más importante, intención de compra real.',
        question: '¿Sabes cuántas personas buscan tu servicio cada mes en tu zona?',
        extraNote: 'Con nuestro análisis, no solo lo sabrás, sino que tendrás la lista exacta de términos que debes usar para capturarlos. Utilizamos herramientas profesionales como SEMrush para darte datos precisos, no suposiciones.',
        listTitle: 'Nuestro análisis exhaustivo incluye:',
        items: [
          'Investigación de hasta 2000 palabras clave relevantes para tu nicho específico',
          'Uso de herramientas profesionales (SEMrush) para datos precisos y actualizados',
          'Identificación de palabras con alto volumen de búsqueda y baja competencia',
          'Análisis de la intención de búsqueda: informacional, navegacional o transaccional',
          'Descubrimiento de palabras clave long-tail (frases específicas con alta conversión)',
          'Identificación de tendencias estacionales y oportunidades temporales',
          'Análisis de variaciones locales y regionalismos de tu zona'
        ],
        question2: '¿Listo para conocer el lenguaje exacto de tus clientes?',
        conclusion: 'No más creación de contenido a ciegas. Sabrás exactamente qué palabras usar en tus títulos, descripciones, artículos y redes sociales para que Google te ponga frente a tus clientes ideales.',
        ctaTitle: '¿Quieres saber qué buscan tus clientes?',
        ctaDescription: 'Obtén tu análisis de palabras clave con datos reales y precisos',
        cta: 'Quiero Mi Análisis de Palabras Clave'
      }
    },
    {
      id: 1,
      title: 'Análisis de Competencia',
      subtitle: 'Análisis Específico de la Competencia',
      image: '/images/categorias/analisis-estrategico/analisis-competencia-seo.webp',
      content: {
        intro: '¿Te has preguntado por qué tu competencia aparece en Google y tú no?',
        description: 'La respuesta está en las palabras clave que ellos están usando y que tú estás perdiendo. Mientras tu competencia domina ciertas búsquedas, tú estás dejando dinero sobre la mesa simplemente por no saber qué términos optimizar.',
        subtitle2: '¿Por qué es crucial conocer la estrategia SEO de tu competencia?',
        description2: 'Imagina tener acceso a un documento que te revela exactamente qué palabras clave están posicionando a tus competidores, cuáles les generan más tráfico y, lo mejor de todo, cuáles están usando ellos que tú podrías aprovechar para superarlos.',
        question: '¿Sabías que el 75% de los usuarios nunca pasa de la primera página de Google?',
        extraNote: 'Si tu competencia está ahí y tú no, están capturando todos esos clientes potenciales. Pero aquí está la oportunidad: con nuestro análisis de brecha de palabras clave (keyword gap), descubrirás los términos que ellos están dominando y crearás tu estrategia para superarlos.',
        listTitle: 'Nuestro análisis de competencia incluye:',
        items: [
          'Identificación de tus competidores directos en el mundo digital',
          'Evaluación de las palabras clave que los posicionan en primeros lugares',
          'Análisis de keyword gap: términos que usan tus competidores y tú no',
          'Identificación de oportunidades de nicho sin explotar',
          'Evaluación de la dificultad de posicionamiento para cada término',
          'Descubrimiento de palabras clave de "fruta madura" (fáciles de posicionar)',
          'Análisis de las estrategias de contenido que les funcionan'
        ],
        question2: '¿Quieres dejar de perder clientes frente a tu competencia?',
        conclusion: 'Este análisis te da la ventaja de aprender de los errores y aciertos de tu competencia, ahorrándote tiempo y dinero en pruebas innecesarias. Vas directo a lo que funciona.',
        ctaTitle: '¿Listo para superar a tu competencia en Google?',
        ctaDescription: 'Descubre sus secretos de posicionamiento y úsalos a tu favor',
        cta: 'Dame mi Análisis de Competencia'
      }
    },
    {
      id: 2,
      title: 'Lista Organizada',
      subtitle: 'Lista Organizada y Estratégica de Palabras Clave',
      image: '/images/categorias/analisis-estrategico/lista-palabras-clave.webp',
      content: {
        intro: '¿De qué sirve tener miles de palabras clave si no sabes cuáles usar primero?',
        description: 'Aquí es donde la mayoría de las empresas fallan. Tienen datos, pero no saben cómo usarlos. Terminan abrumados con información sin estructura y nunca implementan nada. Por eso, no solo te damos las palabras clave, te las entregamos organizadas, priorizadas y listas para usar.',
        subtitle2: '¿Por qué necesitas una lista organizada estratégicamente?',
        description2: 'No todas las palabras clave son iguales. Algunas son perfectas para tus páginas principales, otras para artículos de blog, y otras para redes sociales. Algunas tienen alto volumen pero mucha competencia, mientras que otras tienen menos búsquedas pero están listas para convertir.',
        question: '¿Sabías que el 50% de las empresas que hacen SEO no priorizan correctamente sus palabras clave?',
        extraNote: 'El resultado es que pierden meses trabajando en términos que nunca les darán resultados. Nosotros te ahorramos ese tiempo y frustración entregándote un plan de acción claro desde el día uno.',
        listTitle: 'Tu lista organizada incluye:',
        items: [
          'Archivo Excel profesional con todas las palabras clave categorizadas',
          'Clasificación por relevancia para tu negocio específico',
          'Volumen de búsqueda mensual para cada término',
          'Nivel de dificultad de posicionamiento (fácil, medio, difícil)',
          'Identificación de palabras clave principales para páginas de destino',
          'Palabras clave secundarias para artículos de blog',
          'Términos ideales para redes sociales y contenido rápido',
          'Filtros y categorías para uso diario y planificación de contenido',
          'Recomendaciones de prioridad: qué atacar primero, segundo y tercero'
        ],
        question2: '¿Listo para tener claridad total en tu estrategia de contenido?',
        conclusion: 'Esta lista se convierte en tu hoja de ruta. Cada vez que vayas a crear contenido, solo abres el archivo y sabes exactamente qué palabras usar, cómo usarlas y qué resultado esperar.',
        ctaTitle: '¿Quieres una lista lista para implementar hoy mismo?',
        ctaDescription: 'Recibe tus palabras clave organizadas y comienza a posicionarte inmediatamente',
        cta: 'Quiero Mi Lista de Palabras Clave'
      }
    },
    {
      id: 3,
      title: 'Guía de Contenido',
      subtitle: 'Guía para Crear Contenido Optimizado y Estrategia de Posicionamiento',
      image: '/images/categorias/analisis-estrategico/guia-contenido.webp',
      content: {
        intro: '¿Tienes las palabras clave, pero no sabes cómo usarlas en tu contenido?',
        description: 'Esta es la parte donde todo cobra sentido. Tener las palabras clave correctas es solo el 50% del trabajo. La otra mitad es saber cómo integrarlas naturalmente en tu contenido para que Google te entienda y te posicione, pero sin que tu texto suene robótico o forzado.',
        subtitle2: '¿Por qué una guía de contenido optimizado marca la diferencia?',
        description2: 'Porque Google no solo busca palabras clave, busca contenido de calidad que responda realmente a las preguntas de los usuarios. Y aquí está el secreto: cuando combinas palabras clave estratégicas con contenido útil y bien estructurado, Google no tiene más opción que posicionarte.',
        question: '¿Sabías que el contenido bien optimizado puede posicionarse en Google en menos de 3 meses?',
        extraNote: 'Mientras que el contenido sin estrategia puede tardar años o nunca llegar. La diferencia está en saber exactamente dónde y cómo usar cada palabra clave. Además, te entregamos una estrategia completa de artículos pilares y clusters que construye tu autoridad en Google.',
        listTitle: 'Tu guía completa de contenido incluye:',
        items: [
          'Recomendaciones detalladas para optimizar títulos SEO (Title Tags)',
          'Estructura perfecta de meta descripciones que aumentan el CTR',
          'Cómo usar encabezados (H1, H2, H3) estratégicamente',
          'Técnicas de redacción persuasiva con SEO integrado',
          'Estructura recomendada para artículos de blog que posicionan',
          'Plantillas de páginas de destino optimizadas para conversión',
          'Copy SEO: cómo escribir para Google sin perder tu esencia humana',
          'Uso de palabras clave LSI (semánticamente relacionadas)',
          'Optimización de imágenes y multimedia para SEO',
          'Desarrollo de estrategia integral con tus palabras clave principales',
          'Planificación de artículos pilares (temas centrales de tu negocio)',
          'Estructura completa de artículos clusters (subtemas específicos)',
          'Plan de interconexión entre artículos para maximizar autoridad',
          'Optimización de enlaces internos y estructura de sitio',
          'Calendario de publicación estratégico',
          'Métricas para monitorear desempeño de palabras clave',
          'Plantillas para informes de rendimiento y progreso'
        ],
        question2: '¿Listo para convertirte en la autoridad de tu sector en Google?',
        conclusion: 'Esta estrategia no solo te posiciona para unas pocas palabras, te convierte en la referencia total de tu sector en Google. Cuando alguien busca algo relacionado con tu nicho, te encuentra una y otra vez en diferentes resultados, construyendo confianza y autoridad.',
        ctaTitle: '¿Quieres un plan completo listo para implementar?',
        ctaDescription: 'Recibe tu guía de contenido y estrategia de posicionamiento hoy mismo',
        cta: 'Dame Mi Estrategia de Contenido'
      }
    }
  ];

  const benefits = [
    {
      title: 'Deja de Perder Clientes',
      description: 'Atrae a quienes te buscan pero no te encuentran',
      icon: <Search className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Aumenta Ventas e Ingresos',
      description: 'Más visibilidad = más clientes = más ganancias',
      icon: <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Supera a tu Competencia',
      description: 'Posiciónate por encima de tus rivales',
      icon: <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'ROI Real de tu Inversión',
      description: 'Resultados concretos y medibles',
      icon: <DollarSign className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Estrategia Simplificada',
      description: 'Herramientas listas para atraer clientes',
      icon: <ListChecks className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Seguimiento Continuo',
      description: 'Monitorea tu progreso con plantillas incluidas',
      icon: <BarChart className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
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
            Aparece en Google <span className="text-blue-400">Sin Gastar Miles en Publicidad</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            ¿Inviertes tiempo creando contenido que nadie encuentra? Descubre las palabras mágicas que tus clientes usan para buscarte y posiciona tu negocio en la primera página de Google, atrayendo tráfico cualificado que se convierte en ventas reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Descubre Mis Palabras Clave
              </Button>
            </Link>
            <div className="text-center mt-4 sm:mt-0">
              <p className="text-blue-300 font-semibold">Inversión única: $1,300</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Cómo Aparecer en Google Cuando tus Clientes te Buscan?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                <strong>Aparecer en Google no es magia ni suerte. Es ciencia.</strong> Se trata de entender exactamente qué palabras y frases escriben tus clientes potenciales cuando buscan lo que tú ofreces, y luego optimizar tu contenido estratégicamente para que Google te reconozca como la mejor respuesta.
              </p>
              <details className="mb-6">
                <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Seguir leyendo...
                </summary>
                <div className="mt-4 space-y-4">
                  <p>
                    El secreto para salir en Google se basa en cuatro pilares fundamentales: identificar las palabras clave correctas con alto volumen de búsqueda, analizar qué hace tu competencia para posicionarse, organizar esas palabras estratégicamente en tu sitio web, y crear contenido optimizado que Google y tus clientes amen por igual.
                  </p>
                </div>
              </details>
              <p className="text-lg font-semibold text-center text-gray-800 mt-10 mb-2">
                Descubre los componentes esenciales de nuestro Plan para Salir en Google y cómo cada uno trabaja para convertir tu sitio web en una máquina de atracción de clientes:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de navegación */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Análisis de Palabras Clave */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 0 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(0)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Análisis de Palabras Clave</h3>
                <p className="text-gray-600 text-sm">
                  Hasta 2000 palabras clave investigadas con herramientas profesionales para descubrir qué buscan exactamente tus clientes.
                </p>
              </div>
            </div>

            {/* Card 2: Análisis de Competencia */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 1 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(1)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Análisis de Competencia</h3>
                <p className="text-gray-600 text-sm">
                  Descubre las palabras clave que usan tus competidores y encuentra las oportunidades que están dejando pasar.
                </p>
              </div>
            </div>

            {/* Card 3: Lista Organizada y Estratégica */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 2 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(2)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lista Organizada y Estratégica</h3>
                <p className="text-gray-600 text-sm">
                  Archivo Excel con palabras clave clasificadas por relevancia, volumen y dificultad, listas para usar.
                </p>
              </div>
            </div>

            {/* Card 4: Guía de Contenido y Estrategia */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 3 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(3)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guía de Contenido y Estrategia</h3>
                <p className="text-gray-600 text-sm">
                  Plan completo de artículos cluster y pilares con estructura detallada para dominar tu nicho en Google.
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
            Deja de Ser Invisible en Google y Atrae Clientes Todos los Días
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            No más contenido que nadie encuentra. No más frustración viendo a tu competencia en primera página. Obtén el plan completo para dominar Google en tu nicho.
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
              <p className="text-2xl font-bold text-gray-900 mb-2">Inversión Única: $1,300</p>
              <p className="text-gray-600 mb-6">Incluye: Hasta 2000 Palabras Clave + Análisis de Competencia + Lista Excel Organizada + Guía de Contenido + Estrategia de Artículos Cluster y Pilares + Plantillas de Seguimiento</p>
              <Link href="#contacto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Quiero Aparecer en Google Ahora
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">Plan completo | Implementación inmediata | Seguimiento incluido</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
