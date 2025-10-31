'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, BarChart, Target, Search, BookOpen, ChevronLeft, ChevronRight, Eye, Zap, Users, TrendingUp, Rocket, LineChart, Lightbulb, Compass, Award, DollarSign } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ConsultoriaEmpresarial() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Sesión de Descubrimiento',
      subtitle: 'Sesión de Descubrimiento: La Base de Todo Negocio Exitoso',
      image: '/images/categorias/analisis-estrategico/sesion-descubrimiento.webp',
      content: {
        intro: '¿Sabías que el 42% de los negocios fracasan porque no hay demanda real para lo que ofrecen?',
        description: 'Antes de invertir un solo peso, necesitas saber si tu idea es viable, quién es realmente tu cliente ideal, qué competencia enfrentas y cuáles son tus verdaderas fortalezas. Sin esta claridad, estás construyendo sobre arena. Con ella, construyes sobre roca.',
        subtitle2: '¿Por qué una sesión de descubrimiento profunda es fundamental?',
        description2: 'Porque te salva de los errores más comunes que matan negocios: apuntar al público equivocado, ofrecer algo que nadie quiere, no diferenciarte de la competencia, o no entender tus propias limitaciones. Esta sesión es como un chequeo médico completo antes de correr un maratón.',
        question: '¿Prefieres descubrir que tu idea necesita ajustes ahora, o después de haber invertido miles?',
        extraNote: 'En esta sesión no te decimos lo que quieres oír, te decimos lo que necesitas saber. Identificamos los problemas reales y las oportunidades reales de tu proyecto, sin filtros ni endulzantes.',
        listTitle: 'Tu sesión de descubrimiento incluye:',
        items: [
          'Análisis FODA completo de tu negocio o idea',
          'Identificación de fortalezas internas que puedes potenciar',
          'Reconocimiento honesto de debilidades que debes mejorar o mitigar',
          'Evaluación de oportunidades de mercado sin explotar',
          'Identificación de amenazas externas y cómo enfrentarlas',
          'Análisis profundo de tu mercado objetivo: tamaño, características, comportamiento',
          'Evaluación realista de tu competencia directa e indirecta',
          'Identificación de barreras de entrada y cómo superarlas',
          'Clarificación de tus valores personales y cómo se reflejan en tu negocio',
          'Definición de lo que realmente te apasiona y te impulsa',
          'Evaluación de recursos disponibles: tiempo, dinero, habilidades, red de contactos',
          'Identificación de gaps de conocimiento o capacidad'
        ],
        question2: '¿Te imaginas empezar tu negocio conociendo exactamente tus fortalezas y debilidades antes que el mercado te las enseñe de la manera difícil?',
        conclusion: 'Eso es exactamente lo que esta sesión te da. Claridad brutal pero constructiva que te permite empezar con los ojos bien abiertos.',
        ctaTitle: '¿Quieres claridad total sobre tu proyecto?',
        ctaDescription: 'Obtén un análisis profundo que te muestre exactamente dónde estás parado y qué necesitas hacer',
        cta: 'Quiero Mi Sesión de Descubrimiento'
      }
    },
    {
      id: 1,
      title: 'Misión y Visión',
      subtitle: 'Definición de Misión y Visión: El Alma de tu Negocio',
      image: '/images/categorias/analisis-estrategico/mision-vision.webp',
      content: {
        intro: '¿Alguna vez te has preguntado por qué algunos negocios inspiran lealtad mientras otros solo compiten por precio?',
        description: 'La diferencia está en el propósito. Los negocios con misión y visión claras no solo venden productos o servicios, venden una causa, una creencia, una forma de ver el mundo. Y las personas no compran productos, compran identidad y pertenencia.',
        subtitle2: '¿Por qué necesitas definir tu misión y visión desde el inicio?',
        description2: 'Porque son tu brújula en los momentos difíciles. Cuando no sepas qué decisión tomar, cuando tengas que elegir entre dos caminos, cuando sientas que te estás desviando, tu misión y visión te traen de vuelta al centro. Además, atraen a las personas correctas: los clientes que realmente valoran lo que haces y el equipo que comparte tu propósito.',
        question: '¿Sabías que las empresas con propósito claro crecen 3 veces más rápido que las que solo buscan ganancias?',
        extraNote: 'No es casualidad. Un propósito claro te diferencia, te da dirección, inspira a tu equipo, atrae a tus clientes ideales y te mantiene motivado cuando las cosas se ponen difíciles.',
        listTitle: 'Lo que creamos juntos:',
        items: [
          'Declaración de misión clara y concisa (el "por qué" de tu negocio)',
          'Definición del propósito profundo: qué problema resuelves realmente',
          'Identificación del impacto que quieres tener en tus clientes',
          'Visión inspiradora a 3-5 años: el futuro que deseas crear',
          'Valores fundamentales del negocio que guiarán todas tus decisiones',
          'Cultura empresarial que quieres construir desde el día uno',
          'Mensaje central que conecta emocionalmente con tu audiencia',
          'Historia de marca: por qué empezaste, qué te impulsa, qué defiendes',
          'Diferenciación emocional: no solo qué vendes, sino por qué importa'
        ],
        question2: '¿Quieres construir un negocio que solo genere dinero o uno que genere impacto y lealtad?',
        conclusion: 'Con una misión y visión claras, no construyes un negocio genérico más. Construyes una marca que significa algo, que representa algo, que la gente elige defender y recomendar.',
        ctaTitle: '¿Listo para definir el propósito de tu negocio?',
        ctaDescription: 'Crea una misión y visión que inspire a tus clientes y motive a tu equipo',
        cta: 'Quiero Definir Mi Misión y Visión'
      }
    },
    {
      id: 2,
      title: 'Propuesta de Valor',
      subtitle: 'Desarrollo de tu Propuesta de Valor Única (PVU)',
      image: '/images/categorias/analisis-estrategico/propuesta-valor.webp',
      content: {
        intro: '¿Puedes explicar en 10 segundos por qué alguien debería comprarte a ti y no a tu competencia?',
        description: 'Si dudaste, estás en problemas. Tu propuesta de valor única es la respuesta cristalina a esa pregunta. No es un eslogan bonito ni palabras vacías. Es la razón específica, tangible y convincente por la que los clientes te eligen a ti.',
        subtitle2: '¿Por qué tu PVU es más importante que tu producto?',
        description2: 'Porque hay cientos de negocios ofreciendo productos similares al tuyo. Lo que te diferencia no es QUÉ vendes, sino CÓMO lo vendes, a QUIÉN se lo vendes, QUÉ problema específico resuelves, y QUÉ experiencia entregas que nadie más da.',
        question: '¿Sabías que los negocios sin PVU clara terminan compitiendo solo por precio?',
        extraNote: 'Y competir por precio es una carrera hacia abajo que nadie gana. Los que tienen una PVU clara cobran más, atraen mejores clientes y construyen negocios sostenibles. Los que no, luchan por cada venta.',
        listTitle: 'Nuestro proceso colaborativo incluye:',
        items: [
          'Entrevistas profundas para descubrir tus elementos únicos',
          'Análisis de qué haces diferente (incluso si crees que no haces nada diferente)',
          'Identificación de tu "superpoder": qué se te da naturalmente bien',
          'Evaluación de feedback de clientes actuales o potenciales',
          'Análisis de competencia para encontrar tu espacio único',
          'Identificación de nichos desatendidos que puedes dominar',
          'Definición de tu cliente ideal: quién aprecia más tu valor único',
          'Creación de mensaje claro de PVU en una o dos frases',
          'Desarrollo de argumentos de venta basados en tu diferenciación',
          'Estrategia para comunicar tu PVU en web, redes, ventas, publicidad',
          'Puntos de prueba: evidencia tangible de por qué tu PVU es real'
        ],
        question2: '¿Quieres ser una opción más o LA opción para tu cliente ideal?',
        conclusion: 'Con una PVU clara, dejas de perseguir a cualquier cliente y empiezas a atraer a los que realmente valoran lo que ofreces, están dispuestos a pagar tu precio y se convierten en fans leales.',
        ctaTitle: '¿Listo para diferenciarte realmente?',
        ctaDescription: 'Desarrolla una propuesta de valor que te posicione como la única opción lógica',
        cta: 'Quiero Crear Mi Propuesta Única'
      }
    },
    {
      id: 3,
      title: 'Estrategia Digital',
      subtitle: 'Estrategia de Marketing Digital y Análisis de ROI',
      image: '/images/categorias/analisis-estrategico/estrategia-digital.webp',
      content: {
        intro: '¿De qué sirve tener un gran negocio si nadie sabe que existes?',
        description: 'Aquí es donde muchos emprendedores se estrellan. Tienen el producto perfecto, la misión clara, la propuesta única... pero cero clientes porque no saben cómo atraerlos. O peor, gastan miles en marketing sin estrategia y sin resultados.',
        subtitle2: '¿Por qué necesitas una estrategia de marketing digital desde el día uno?',
        description2: 'Porque en 2025, tus clientes están online. Buscan en Google, preguntan en redes sociales, leen reseñas, comparan opciones. Si no tienes presencia digital estratégica, simplemente no existes para ellos. Y no se trata solo de "estar" en redes sociales, se trata de tener un plan que convierta visitas en clientes.',
        question: '¿Sabías que el 68% de los emprendedores gastan en marketing sin medir resultados?',
        extraNote: 'Tiran dinero esperando que algo funcione. Nosotros te damos un plan con números claros: cuánto invertir, dónde invertir, qué resultados esperar, y cómo medir el retorno de cada peso gastado.',
        listTitle: 'Tu estrategia de marketing incluye:',
        items: [
          'Análisis profundo de las acciones digitales necesarias para tu industria',
          'Identificación de canales más efectivos para tu negocio específico',
          'Estrategia de presencia online: sitio web, redes sociales, Google My Business',
          'Plan de contenidos inicial: qué publicar, dónde, cuándo, y por qué',
          'Estrategia de SEO básica para aparecer en búsquedas locales',
          'Tácticas de redes sociales específicas para tu nicho',
          'Estrategia de email marketing para nutrir leads',
          'Plan de publicidad paga (si aplica): presupuesto, plataformas, audiencias',
          'Embudo de conversión: cómo convertir desconocidos en clientes',
          'Estrategia de captación de leads: imanes de leads, formularios, CTAs',
          'Elaboración de presupuesto de marketing realista según tu capacidad',
          'Proyección de resultados esperados: tráfico, leads, conversiones',
          'Cálculo de ROI estimado por táctica',
          'Identificación de métricas clave (KPIs) que debes monitorear'
        ],
        question2: '¿Prefieres invertir $1,000 sin saber qué esperar o $500 sabiendo exactamente qué resultados obtendrás?',
        conclusion: 'Con esta estrategia, cada peso invertido tiene un propósito medible. No gastas, inviertes estratégicamente sabiendo qué esperar de cada acción. Nota: El presupuesto propuesto NO incluye la inversión en pauta publicitaria, solo la planificación estratégica.',
        ctaTitle: '¿Quieres una estrategia de marketing con números claros?',
        ctaDescription: 'Recibe un plan detallado con presupuesto, ROI proyectado y acciones concretas',
        cta: 'Dame Mi Estrategia de Marketing'
      }
    }
  ];

  const benefits = [
    {
      title: 'Define el Rumbo de tu Negocio',
      description: 'Obtén claridad y enfoque para tomar decisiones con seguridad',
      icon: <Compass className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Inspira a tu Equipo y Clientes',
      description: 'Motiva con propósito y construye una base sólida para el éxito',
      icon: <Lightbulb className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Destaca en el Mercado',
      description: 'Diferencia tu marca y conquista a tu público objetivo',
      icon: <Award className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Construye un Negocio Sostenible',
      description: 'Crece de manera sólida con estrategias probadas',
      icon: <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Alinea Acciones con Objetivos',
      description: 'Maximiza tu potencial con plan claro y medible',
      icon: <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    },
    {
      title: 'Evita Errores Costosos',
      description: 'Aprende de expertos antes de invertir en lo incorrecto',
      icon: <DollarSign className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/categorias/analisis-estrategico/consultoria-empresarial-hero.webp"
            alt="Consultoría Empresarial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Convierte tu Idea en un Negocio Real <span className="text-blue-400">Sin Perder Tiempo ni Dinero</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            ¿Tienes una gran idea pero no sabes por dónde empezar? ¿Te sientes estancado sin rumbo claro y temes invertir en lo incorrecto? La diferencia entre un sueño y un negocio próspero está en tener una estrategia sólida desde el inicio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Agenda tu Sesión de Mentoría
              </Button>
            </Link>
            <div className="text-center mt-4 sm:mt-0">
              <p className="text-blue-300 font-semibold">Inversión única: $250</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ¿Cómo Iniciar un Proyecto Empresarial que Realmente Funcione?
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                <strong>Iniciar un negocio no es solo tener una buena idea.</strong> Es saber cómo convertir esa idea en una propuesta de valor clara, entender a quién le vas a vender, por qué te elegirían a ti y no a otro, y crear una estrategia de marketing que realmente atraiga clientes desde el día uno.
              </p>
              <details className="mb-6">
                <summary className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Seguir leyendo...
                </summary>
                <div className="mt-4 space-y-4">
                  <p>
                    La consultoría efectiva para iniciar un proyecto se construye sobre cuatro pilares fundamentales: definir el propósito y valores de tu negocio, crear una visión inspiradora que te guíe, diferenciarte claramente de la competencia, y desarrollar una estrategia de marketing digital práctica que genere resultados reales.
                  </p>
                </div>
              </details>
              <p className="text-lg font-semibold text-center text-gray-800 mt-10 mb-2">
                A continuación, descubre los componentes esenciales de nuestra Consultoría Empresarial y cómo cada uno te ayuda a construir un negocio sólido desde el principio:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de navegación */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Sesión de Descubrimiento */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 0 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(0)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sesión de Descubrimiento y Análisis FODA</h3>
                <p className="text-gray-600 text-sm">
                  Analizamos a fondo tu negocio, identificando fortalezas, debilidades, oportunidades y amenazas. Evaluamos tu mercado, competencia y valores para construir bases sólidas.
                </p>
              </div>
            </div>

            {/* Card 2: Misión, Visión y Propósito */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 1 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(1)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Definición de Misión, Visión y Propósito</h3>
                <p className="text-gray-600 text-sm">
                  Creamos declaraciones claras que reflejen el alma de tu negocio, te inspiren a ti y a tu equipo, y conecten emocionalmente con tus clientes ideales.
                </p>
              </div>
            </div>

            {/* Card 3: Propuesta de Valor Única */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 2 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(2)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Desarrollo de tu Propuesta de Valor Única</h3>
                <p className="text-gray-600 text-sm">
                  Identificamos qué te hace diferente y creamos un mensaje poderoso que explica por qué los clientes deben elegirte a ti sobre cualquier otra opción.
                </p>
              </div>
            </div>

            {/* Card 4: Estrategia Digital y ROI */}
            <div 
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer ${activeTab === 3 ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setActiveTab(3)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estrategia de Marketing Digital y Presupuesto</h3>
                <p className="text-gray-600 text-sm">
                  Desarrollamos un plan de marketing digital realista con análisis de ROI, presupuesto detallado y estrategias concretas para atraer clientes desde el inicio.
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
            Transforma tu Idea en un Negocio Próspero con Bases Sólidas
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            No más dudas ni miedo. No más intentos sin dirección. Obtén la mentoría que te da claridad, estrategia y confianza para despegar tu proyecto con el pie derecho y evitar los errores que cuestan tiempo y dinero.
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
              <p className="text-2xl font-bold text-gray-900 mb-2">Inversión Única: $250</p>
              <p className="text-gray-600 mb-6">Incluye: Sesión de Descubrimiento + Análisis FODA + Definición de Misión y Visión + Propuesta de Valor Única + Estrategia de Marketing Digital + Análisis de Presupuesto y ROI</p>
              <Link href="#contacto">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Agenda tu Consultoría Ahora
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">Mentoría personalizada | Estrategia práctica | Implementación inmediata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
