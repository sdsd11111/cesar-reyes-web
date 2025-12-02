'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart, Lightbulb, Compass, Award, DollarSign, FileText, TrendingDown, ListChecks, PenTool, ShieldCheck, Calculator, Building2, ClipboardCheck, Settings, AlertTriangle, Workflow, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { ExpandableText } from '@/components/ui/expandable-text';

export default function ReingenieriaProcesos() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Mapeo de Procesos',
      subtitle: 'Mapeo Completo: Entendiendo Qué Está Pasando Realmente',
      image: '/images/categorias/analisis-estrategico/mapeo-procesos.webp',
      content: {
        intro: '¿Sabías que el 30% del tiempo de trabajo se desperdicia en tareas que no agregan valor?',
        description: 'El problema es que nadie se da cuenta. Los procesos ineficientes se vuelven "la forma en que siempre se ha hecho" y nadie los cuestiona. Mientras tanto, tu equipo trabaja el doble para producir la mitad, tus costos operativos se disparan, y tu rentabilidad se desangra lentamente.',
        subtitle2: '¿Por qué el mapeo de procesos es el primer paso crítico?',
        description2: 'Porque no puedes arreglar lo que no conoces. Muchas empresas piensan que saben cómo funcionan sus procesos, pero cuando los mapeas, descubres duplicaciones absurdas, pasos que no tienen sentido, aprobaciones que retrasan todo sin razón, y tareas manuales que podrían automatizarse en minutos.',
        question: '¿Alguna vez has preguntado a tu equipo cuánto tiempo pierden en tareas repetitivas que odian hacer?',
        extraNote: 'La respuesta te sorprendería. Y lo peor es que ese tiempo perdido se traduce directamente en dinero que sale de tu bolsillo todos los días.',
        listTitle: 'Nuestro proceso de mapeo incluye:',
        items: [
          'Inmersión operativa: trabajamos físicamente con tu equipo',
          'Observación directa de cada proceso en tiempo real',
          'Entrevistas profundas con empleados de cada área',
          'Documentación de cada paso, herramienta y sistema utilizado',
          'Medición de tiempos reales por tarea',
          'Identificación de puntos de transferencia entre áreas',
          'Mapeo de flujo de información y comunicación',
          'Documentación de excepciones y casos especiales',
          'Identificación de dependencias entre procesos',
          'Registro de herramientas y software actuales',
          'Captura de pain points reportados por el equipo',
          'Análisis de volumen de trabajo por proceso',
          'Identificación de procesos manuales vs. automatizados'
        ],
        question2: '¿Te imaginas tener un diagrama visual completo de TODA tu operación con cada paso documentado?',
        conclusion: 'Eso es exactamente lo que obtienes. No suposiciones, no teoría, sino la realidad documentada de cómo funciona (o no funciona) tu empresa hoy.',
        ctaTitle: '¿Quieres saber exactamente dónde se está perdiendo tiempo?',
        ctaDescription: 'Obtén un mapeo completo de tus procesos actuales con análisis detallado',
        cta: 'Quiero Mapear Mis Procesos'
      }
    },
    {
      id: 1,
      title: 'Banderas Rojas',
      subtitle: 'Identificación de Cuellos de Botella y Desperdicios',
      image: '/images/categorias/analisis-estrategico/banderas-rojas.webp',
      content: {
        intro: '¿Cuánto dinero estás perdiendo cada mes en ineficiencias que ni siquiera sabes que existen?',
        description: 'Esta es la parte que duele pero que más valor genera. Aquí es donde identificamos las "banderas rojas": esos procesos, pasos o prácticas que están matando tu productividad, inflando tus costos y frustrando a tu equipo. Y créeme, siempre hay más de las que imaginas.',
        subtitle2: '¿Por qué las banderas rojas son costosas aunque no las veas?',
        description2: 'Porque operan silenciosamente todos los días. Cada día que un empleado pierde 2 horas en un proceso que podría tomar 15 minutos, estás pagando por 2 horas de trabajo improductivo. Multiplica eso por todos tus empleados, por 20 días laborales al mes, por 12 meses... y ahí tienes decenas de miles de dólares desperdiciados anualmente.',
        question: '¿Sabías que la empresa promedio puede reducir sus costos operativos en un 20-30% solo optimizando procesos?',
        extraNote: 'No estamos hablando de despedir gente ni reducir calidad. Estamos hablando de hacer las mismas cosas de forma más inteligente, más rápida y más económica.',
        listTitle: 'Las banderas rojas que identificamos:',
        items: [
          'Procesos Lentos: tareas que toman mucho más tiempo del necesario',
          'Múltiples aprobaciones innecesarias que retrasan todo',
          'Cuellos de botella donde el trabajo se acumula',
          'Tareas Redundantes: información que se ingresa múltiples veces',
          'Procesos que se realizan por costumbre pero sin valor real',
          'Falta de Automatización: tareas repetitivas que se hacen manualmente',
          'Uso de Excel cuando deberías usar un sistema integrado',
          'Generación manual de reportes que podrían ser automáticos',
          'Problemas de Comunicación: información que se pierde entre áreas',
          'Falta de visibilidad del estado de trabajos',
          'Desperdicios de Recursos: herramientas pagas que nadie usa',
          'Tiempo de empleados calificados en tareas de bajo valor',
          'Oportunidades de Tecnología: software que resolvería problemas específicos'
        ],
        question2: '¿Cuánto pagarías por recuperar 20 horas semanales de productividad de tu equipo?',
        conclusion: 'Eso es lo que las banderas rojas te están costando. Y nosotros te mostramos exactamente cuáles son, dónde están y cuánto te cuestan.',
        ctaTitle: '¿Quieres descubrir qué está drenando tu rentabilidad?',
        ctaDescription: 'Identifica todos los cuellos de botella y desperdicios que están costándote dinero',
        cta: 'Encuentra Mis Banderas Rojas'
      }
    },
    {
      id: 2,
      title: 'Procesos Optimizados',
      subtitle: 'Diseño de Procesos Optimizados con Automatización Estratégica',
      image: '/images/categorias/analisis-estrategico/optimizacion.webp',
      content: {
        intro: '¿Y si pudieras hacer lo mismo que haces hoy pero en la mitad del tiempo y con menos errores?',
        description: 'Aquí es donde la magia sucede. No solo te decimos qué está mal, te diseñamos exactamente cómo debe ser. Rediseñamos tus procesos desde cero, eliminando pasos innecesarios, automatizando lo automatizable, simplificando lo complejo y acelerando lo lento.',
        subtitle2: '¿Por qué el rediseño de procesos es transformador?',
        description2: 'Porque no es solo "mejorar" lo que tienes. Es repensar desde cero: "Si tuviéramos que diseñar este proceso hoy, con la tecnología actual, ¿cómo lo haríamos?". La respuesta casi siempre es radicalmente diferente a como lo estás haciendo ahora.',
        question: '¿Sabías que con las herramientas correctas, procesos que tomaban horas pueden reducirse a minutos?',
        extraNote: 'Y no estamos hablando de tecnología cara o complicada. Muchas veces son herramientas accesibles, apps de bajo costo o automatizaciones simples que nadie ha implementado porque no sabían que existían.',
        listTitle: 'Lo que diseñamos para ti:',
        items: [
          'Flujos de trabajo rediseñados eliminando pasos innecesarios',
          'Reducción de puntos de transferencia y aprobaciones',
          'Paralelización de tareas que pueden hacerse simultáneamente',
          'Procesos estandarizados para reducir variabilidad',
          'Identificación de software a medida si es necesario',
          'Recomendación de apps específicas por proceso',
          'Automatizaciones con herramientas no-code (Zapier, Make, etc.)',
          'Integraciones entre sistemas existentes',
          'CRM para gestión de clientes si aplica',
          'Sistemas de ticketing para soporte',
          'Cálculo de horas ahorradas por semana/mes',
          'ROI de cada automatización propuesta',
          'Diagramas de flujo de procesos nuevos',
          'Comparación antes vs. después'
        ],
        question2: '¿Listo para que tu empresa opere como una máquina bien aceitada?',
        conclusion: 'Con estos procesos optimizados, tu equipo trabajará más rápido, con menos frustración, cometiendo menos errores y produciendo más. Y tú verás el impacto directo en tus utilidades.',
        ctaTitle: '¿Quieres procesos que multipliquen tu productividad?',
        ctaDescription: 'Recibe el diseño completo de procesos optimizados con automatización estratégica',
        cta: 'Dame Mis Procesos Optimizados'
      }
    },
    {
      id: 3,
      title: 'Fundamentos Empresariales',
      subtitle: 'Fundamentos y Estrategia Empresarial',
      image: '/images/categorias/analisis-estrategico/fundamentos-empresariales.webp',
      content: {
        intro: '¿Cómo le explicas a un banco o inversionista por qué tu negocio merece financiamiento?',
        description: 'Aquí es donde todo se une en un documento coherente y profesional. No basta con tener buenos números o una idea interesante. Necesitas articular claramente tu propósito, tu visión, tu estrategia y tu modelo de negocio de forma que inspire confianza y demuestre que sabes lo que estás haciendo.',
        subtitle2: '¿Por qué los fundamentos empresariales son críticos para conseguir financiamiento?',
        description2: 'Porque los bancos e inversionistas financian personas y planes, no solo ideas. Quieren ver que tienes claridad estratégica, que entiendes tu negocio, que has pensado en los detalles, y que tienes un plan realista para ejecutar. Este documento es tu arma para convencerlos.',
        question: '¿Sabías que un estudio de factibilidad bien hecho puede aumentar tus probabilidades de conseguir financiamiento en un 70%?',
        extraNote: 'Porque demuestra profesionalismo, preparación y seriedad. No eres uno más pidiendo dinero con una idea vaga. Eres un emprendedor preparado con un plan sólido.',
        listTitle: 'Los fundamentos empresariales que desarrollamos incluyen:',
        items: [
          'Objetivos y Metas: corto, mediano y largo plazo con KPIs medibles',
          'Misión y Visión: declaraciones claras de propósito y futuro deseado',
          'Valores fundamentales que guiarán tu negocio',
          'Propuesta de Valor Única: qué te hace diferente de la competencia',
          'Modelo de Negocio: cómo generarás ingresos y estructura de costos',
          'Canales de venta y distribución',
          'Estrategia de Marketing y Ventas para lanzamiento y crecimiento',
          'Plan de adquisición de clientes y embudo de ventas',
          'Plan de Operaciones: estructura organizacional y procesos clave',
          'Proveedores y cadena de suministro',
          'Requerimientos de infraestructura y tecnología',
          'Plan de contrataciones',
          'Análisis de Riesgos: identificación y estrategias de mitigación',
          'Plan de contingencia para escenarios adversos'
        ],
        question2: '¿Listo para tener un documento profesional que abra puertas de financiamiento?',
        conclusion: 'Este estudio de factibilidad se convierte en tu business plan completo, listo para presentar a bancos, inversionistas o socios potenciales. No es un documento genérico, es tu hoja de ruta personalizada para el éxito.',
        ctaTitle: '¿Necesitas un plan sólido para conseguir financiamiento?',
        ctaDescription: 'Recibe un estudio de factibilidad completo y profesional listo para presentar',
        cta: 'Quiero Mi Estudio Completo'
      }
    }
  ];

  const benefits = [
    {
      title: 'Números Claros y Reales',
      description: 'Proyecciones financieras que te muestran rentabilidad real, no fantasías',
      icon: <Calculator className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Validación de Demanda',
      description: 'Confirma que existe mercado real para tu producto o servicio',
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Ventaja con Bancos e Inversionistas',
      description: 'Documento profesional que aumenta tus probabilidades de financiamiento',
      icon: <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Identificación de Riesgos',
      description: 'Conoce los obstáculos antes de enfrentarlos y prepara soluciones',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Plan de Acción Completo',
      description: 'Hoja de ruta detallada de cómo iniciar y crecer tu negocio',
      icon: <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Protección de tu Patrimonio',
      description: 'Evita perder dinero en negocios no viables o que necesitan ajustes',
      icon: <DollarSign className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/categorias/analisis-estrategico/reingenieria-procesos-hero.webp"
            alt="Reingeniería de Procesos"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center top' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Deja de Perder Dinero en Procesos Lentos <span className="text-blue-400">que Matan tu Rentabilidad</span>
          </h1>
          <ExpandableText 
            className="text-lg md:text-xl max-w-4xl mx-auto mb-8"
            fullText="¿Tus empleados se quejan de procesos complicados que les quitan tiempo? ¿Sientes que tu empresa podría producir más con los mismos recursos? Los procesos ineficientes son el costo oculto que nadie ve pero todos pagan. Nuestra Reingeniería de Procesos mapea cada paso de tu operación, identifica cuellos de botella y te muestra exactamente dónde automatizar, optimizar y ahorrar para multiplicar tu rentabilidad."
            shortText="¿Tus empleados se quejan de procesos complicados que les quitan tiempo?"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Optimiza tus Procesos Ahora
              </Button>
            </Link>
            <div className="text-center mt-4 sm:mt-0">
              <p className="text-blue-300 font-semibold">Inversión única: $1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Cómo Hacer que tu Empresa Produzca Más Gastando Menos?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <ExpandableText
                className="mb-6"
                shortText="<strong>Optimizar procesos no es trabajar más duro, es trabajar más inteligente.</strong> Se trata de identificar exactamente dónde se está perdiendo tiempo, dinero y recursos, eliminar pasos innecesarios, automatizar tareas repetitivas y rediseñar flujos de trabajo para que tu equipo produzca el doble en la mitad del tiempo."
                fullText="<strong>Optimizar procesos no es trabajar más duro, es trabajar más inteligente.</strong> Se trata de identificar exactamente dónde se está perdiendo tiempo, dinero y recursos, eliminar pasos innecesarios, automatizar tareas repetitivas y rediseñar flujos de trabajo para que tu equipo produzca el doble en la mitad del tiempo. La reingeniería efectiva de procesos se construye sobre cuatro pilares fundamentales: mapeo completo de procesos actuales para entender qué está pasando realmente, identificación de cuellos de botella y desperdicios de recursos, diseño de procesos optimizados con automatización estratégica, y plan de implementación con capacitación para asegurar adopción exitosa."
              />
              <p className="text-lg font-semibold text-center text-gray-800 mt-10 mb-2">
                A continuación, descubre los componentes de nuestra Reingeniería de Procesos y cómo cada uno transforma operaciones caóticas en máquinas eficientes de productividad:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de navegación */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Estudio de Mercado */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 0 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(0)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estudio Profundo de Mercado y Competencia</h3>
                <p className="text-gray-600 text-sm">
                  Análisis exhaustivo de tu industria, demanda real, competidores, barreras de entrada y oportunidades de diferenciación. Valida si existe espacio para tu negocio.
                </p>
              </div>
            </div>

            {/* Card 2: Demanda Digital */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 1 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(1)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Investigación de Demanda Digital</h3>
                <p className="text-gray-600 text-sm">
                  Análisis de palabras clave para validar la demanda online de tu producto o servicio. Cuántas personas buscan lo que ofreces y qué están dispuestos a pagar.
                </p>
              </div>
            </div>

            {/* Card 3: Análisis Financiero */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 2 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(2)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Análisis Financiero y Proyecciones</h3>
                <p className="text-gray-600 text-sm">
                  Proyecciones financieras realistas a 3-5 años, análisis de punto de equilibrio, flujo de caja, inversión inicial requerida y tiempo de retorno de inversión.
                </p>
              </div>
            </div>

            {/* Card 4: Fundamentos Empresariales */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 3 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(3)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundamentos y Estrategia Empresarial</h3>
                <p className="text-gray-600 text-sm">
                  Definición de objetivos, metas, misión, visión, propuesta de valor y modelo de negocio. La base estratégica para presentar a inversionistas o bancos.
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
            La Mejor Inversión: Validar tu Idea Antes de Endeudarte
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            No apuestes tu patrimonio a ciegas. No arriesgues el dinero de tu familia sin tener certeza. Obtén el estudio completo que te muestra con números y datos reales si tu negocio será viable, rentable y sostenible, o qué ajustes necesitas hacer para asegurar el éxito.
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
              <p className="text-2xl font-bold text-gray-900 mb-2">Inversión Única: $3,500</p>
              <p className="text-gray-600 mb-6">Incluye: Estudio de Mercado Completo + Análisis de Competencia + Investigación de Palabras Clave (2000 keywords) + Análisis Financiero con Proyecciones a 3-5 años + Fundamentos Empresariales (Misión, Visión, Objetivos, Metas, PVU, Modelo de Negocio) + Documento Profesional para Presentar a Bancos</p>
              <Link href="#contacto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Valida tu Idea Antes de Invertir
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">Estudio profesional completo | Listo para presentar a entidades financieras | Protege tu inversión</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}