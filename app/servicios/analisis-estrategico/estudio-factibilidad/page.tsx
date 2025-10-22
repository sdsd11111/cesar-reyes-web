'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart, Lightbulb, Compass, Award, DollarSign, FileText, TrendingDown, ListChecks, PenTool, ShieldCheck, Calculator, Building2, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function EstudioFactibilidad() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Estudio de Mercado',
      subtitle: 'Estudio Profundo de Mercado y Competencia',
      image: '/images/categorias/analisis-estrategico/estudio-mercado.webp',
      content: {
        intro: '¿Sabías que el 20% de los negocios fracasan en su primer año, y el 50% antes del quinto año?',
        description: 'La principal razón no es falta de capital o mala suerte. Es falta de conocimiento del mercado. Inician negocios en mercados saturados, sin diferenciación clara, sin entender a su competencia, o peor aún, sin validar que existe demanda real para lo que quieren vender.',
        subtitle2: '¿Por qué un estudio de mercado es tu mejor seguro antes de invertir?',
        description2: 'Porque te muestra la realidad sin filtros. Si el mercado está saturado, te lo decimos. Si hay competidores gigantes que te van a aplastar, te lo advertimos. Si hay oportunidades sin explotar, te las señalamos. Este estudio puede ahorrarte perder decenas de miles de dólares en un negocio condenado desde el inicio.',
        question: '¿Preferirías descubrir ahora que necesitas pivotar tu idea, o después de haber gastado todos tus ahorros?',
        extraNote: 'Nuestro estudio no es para darte palmaditas en la espalda ni decirte lo que quieres oír. Es para darte la verdad cruda basada en datos, para que tomes la mejor decisión posible.',
        listTitle: 'Nuestro estudio de mercado incluye:',
        items: [
          'Análisis del tamaño del mercado: ¿cuántos clientes potenciales existen?',
          'Investigación de tendencias de la industria: ¿está creciendo o muriendo?',
          'Análisis de demanda real: ¿la gente realmente quiere/necesita esto?',
          'Segmentación de mercado: ¿quién es tu cliente ideal específico?',
          'Análisis de comportamiento de compra: ¿cómo, dónde y cuándo compran?',
          'Identificación de barreras de entrada: ¿qué obstáculos enfrentarás?',
          'Análisis regulatorio: ¿hay regulaciones o licencias necesarias?',
          'Estudio de competencia directa e indirecta',
          'Análisis de fortalezas y debilidades de competidores',
          'Identificación de estrategias de precios en el mercado',
          'Análisis de canales de distribución disponibles',
          'Evaluación de proveedores y cadena de suministro',
          'Identificación de oportunidades de nicho y diferenciación'
        ],
        question2: '¿Te imaginas entrar al mercado sabiendo exactamente quién es tu competencia, qué hacen bien, qué hacen mal y dónde puedes ganarles?',
        conclusion: 'Ese es el poder de este estudio. Te da el mapa completo del campo de batalla antes de entrar a pelear.',
        ctaTitle: '¿Quieres conocer la verdad sobre tu mercado?',
        ctaDescription: 'Obtén un análisis profundo que valide o refine tu idea de negocio antes de invertir',
        cta: 'Quiero Mi Estudio de Mercado'
      }
    },
    {
      id: 1,
      title: 'Demanda Digital',
      subtitle: 'Investigación de Demanda Digital (Palabras Clave)',
      image: '/images/categorias/analisis-estrategico/demanda-digital.webp',
      content: {
        intro: '¿Cómo sabes si las personas realmente buscan tu producto o servicio online?',
        description: 'En 2025, si la gente no te busca en Google, es una señal de alarma. La investigación de palabras clave no solo te dice cuántas personas buscan lo que ofreces, te dice QUÉ están buscando exactamente, CÓMO lo buscan, y si están en modo de investigación o listas para comprar.',
        subtitle2: '¿Por qué las palabras clave son un indicador crítico de viabilidad?',
        description2: 'Porque son demanda medible y cuantificable. Si 10,000 personas al mes buscan "comprar [tu producto] en [tu ciudad]", sabes que hay demanda. Si solo 50 personas lo buscan, tienes un problema de mercado, no de marketing.',
        question: '¿Sabías que puedes validar la demanda de tu idea antes de crear el producto?',
        extraNote: 'Eso es exactamente lo que hace este análisis. Te muestra si hay suficiente volumen de búsqueda para sostener tu negocio, o si necesitas repensar tu propuesta.',
        listTitle: 'Nuestra investigación de palabras clave incluye:',
        items: [
          'Análisis de hasta 2000 palabras clave relacionadas con tu negocio',
          'Identificación de volumen de búsqueda mensual por término',
          'Análisis de tendencias: ¿está creciendo o disminuyendo el interés?',
          'Estudio de intención de búsqueda: informacional vs. transaccional',
          'Análisis de estacionalidad: ¿hay picos y valles de demanda?',
          'Investigación de búsquedas locales: demanda en tu zona específica',
          'Análisis de competencia SEO: ¿qué tan difícil será posicionarte?',
          'Identificación de palabras clave long-tail con alta conversión',
          'Evaluación de costo por clic (CPC) para publicidad paga',
          'Análisis de términos relacionados y expansión de mercado',
          'Identificación de problemas y preguntas que busca tu audiencia',
          'Validación de necesidades reales a través de búsquedas'
        ],
        question2: '¿Qué tal si descubres que 20,000 personas al mes buscan exactamente lo que vas a ofrecer?',
        conclusion: 'Esa información transforma tu estudio de factibilidad de "creo que puede funcionar" a "SÉ que hay demanda comprobada".',
        ctaTitle: '¿Quieres validar la demanda digital de tu idea?',
        ctaDescription: 'Descubre si hay suficiente búsqueda online para sostener tu negocio',
        cta: 'Valida Mi Demanda Digital'
      }
    },
    {
      id: 2,
      title: 'Análisis Financiero',
      subtitle: 'Análisis Financiero Completo y Proyecciones Realistas',
      image: '/images/categorias/analisis-estrategico/analisis-financiero.webp',
      content: {
        intro: '¿Sabes exactamente cuánto dinero necesitas para iniciar y cuándo empezarás a ver ganancias?',
        description: 'Esta es la parte que separa los soñadores de los emprendedores reales. Las buenas intenciones no pagan las cuentas. Necesitas números concretos: cuánto necesitas invertir, cuánto gastarás mensualmente, cuánto venderás, qué márgenes tendrás, y cuándo llegarás al punto de equilibrio.',
        subtitle2: '¿Por qué el análisis financiero es el corazón del estudio de factibilidad?',
        description2: 'Porque sin números, todo es fantasía. Puedes tener la mejor idea del mundo, pero si los números no cuadran, no tienes un negocio, tienes un hobby caro. Este análisis te muestra si tu negocio puede ser rentable, o si necesitas ajustar precios, costos o modelo de negocio.',
        question: '¿Sabías que el 82% de los negocios que fracasan lo hacen por problemas de flujo de caja?',
        extraNote: 'No porque no tuvieran ventas, sino porque no proyectaron correctamente sus gastos, no manejaron bien el efectivo, o no entendieron sus ciclos de cobro y pago. Este análisis te protege de ese destino.',
        listTitle: 'Nuestro análisis financiero incluye:',
        items: [
          'Inversión Inicial Requerida: equipamiento, inventario, licencias, capital de trabajo',
          'Proyecciones Financieras a 3-5 años: ventas, costos, márgenes',
          'Estado de resultados proyectado (P&L)',
          'Flujo de caja proyectado mes a mes',
          'Balance general proyectado',
          'Análisis de punto de equilibrio: ¿cuántas ventas necesitas?',
          'Retorno de inversión (ROI) esperado',
          'Tiempo de recuperación de la inversión',
          'Análisis de sensibilidad: escenarios optimista, realista y pesimista',
          'Estructura de precios recomendada',
          'Fuentes de financiamiento disponibles',
          'Estructura de capital recomendada',
          'Plan de pago de deudas proyectado'
        ],
        question2: '¿Prefieres presentarte al banco con "creo que voy a vender bien" o con proyecciones financieras profesionales y realistas?',
        conclusion: 'Este análisis no solo te sirve para tomar decisiones, es tu carta de presentación para conseguir financiamiento. Los bancos e inversionistas quieren ver números serios, y eso es exactamente lo que te entregamos.',
        ctaTitle: '¿Necesitas números claros para tomar la decisión correcta?',
        ctaDescription: 'Obtén proyecciones financieras realistas que muestren si tu negocio será rentable',
        cta: 'Quiero Mi Análisis Financiero'
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
            src="/images/categorias/analisis-estrategico/estudio-factibilidad-hero.webp"
            alt="Estudio de Factibilidad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Valida tu Idea de Negocio <span className="text-blue-400">Antes de Arriesgar tu Patrimonio</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            ¿Estás pensando en pedir un préstamo para tu negocio pero no estás 100% seguro de que funcionará? No apuestes tu dinero ni el de tu familia a ciegas. Nuestro Estudio de Factibilidad somete tu idea a análisis rigurosos que te muestran con datos reales si tu proyecto es viable, rentable y sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Valida tu Idea Ahora
              </Button>
            </Link>
            <div className="text-center mt-4 sm:mt-0">
              <p className="text-blue-300 font-semibold">Inversión única: $3,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Cómo Saber si tu Idea de Negocio Realmente Funcionará?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                <strong>Validar una idea de negocio no es cuestión de intuición o fe. Es cuestión de números, datos de mercado, proyecciones financieras realistas y análisis de viabilidad.</strong> Necesitas responder preguntas críticas antes de endeudarte: ¿Hay demanda real? ¿Puedes ser rentable? ¿Cuánto tardarás en recuperar la inversión?
              </p>
              <details className="mb-6">
                <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Seguir leyendo...
                </summary>
                <div className="mt-4 space-y-4">
                  <p>
                    Un estudio de factibilidad completo se construye sobre cuatro pilares fundamentales: análisis profundo del mercado y competencia, investigación de palabras clave para validar demanda digital, análisis financiero con proyecciones realistas, y fundamentos empresariales sólidos (objetivos, metas, misión, visión y propuesta de valor).
                  </p>
                </div>
              </details>
              <p className="text-lg font-semibold text-center text-gray-800 mt-10 mb-2">
                A continuación, descubre los componentes de nuestro Estudio de Factibilidad y cómo cada uno protege tu inversión y maximiza tus probabilidades de éxito:
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
