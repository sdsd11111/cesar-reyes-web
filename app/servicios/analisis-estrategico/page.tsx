'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Map, Telescope, Compass, Route, Lightbulb, DollarSign, TrendingUp, BarChart } from 'lucide-react';
import { ExpandableText } from '@/components/ui/expandable-text';

// --- DATA --- //
const heroImages = [
    '/images/analisis-estrategico/hero-1.jpg',
    '/images/analisis-estrategico/hero-2.jpg',
    '/images/analisis-estrategico/hero-3.jpg',
];

const clusters = [
    { id: "plan-posicionamiento", titulo: "Plan de Posicionamiento SEO" },
    { id: "consultoria-empresarial", titulo: "Consultoría Empresarial" },
    { id: "estudio-factibilidad", titulo: "Estudio de Factibilidad" },
    { id: "estrategia-ganar-clientes", titulo: "Estrategia para Ganar Clientes" },
    { id: "reingenieria-procesos", titulo: "Reingeniería de Procesos" },
];

const detailedClusters = [
    {
        id: "plan-posicionamiento",
        title: "Plan de Posicionamiento SEO y Estrategia de Contenidos",
        subtitle: "Conquista Google y Atrae Clientes Calificados, Incluso si Odias Escribir",
        content: "El 93% de las experiencias online comienzan con un motor de búsqueda. Si no estás en la primera página, eres invisible. Este plan te da una hoja de ruta clara para dominar tu nicho, atraer tráfico que convierte y dejar de depender de la publicidad pagada.",
        bullets: [
            "Análisis Profundo de Palabras Clave para identificar los términos exactos que tus clientes usan para comprar.",
            "Recibe una Lista Organizada y Estratégica de términos clasificados por relevancia, volumen y dificultad, lista para usar hoy mismo.",
            "Incluye la Guía de Contenido y Estrategia de Artículos Pilares y Clusters para construir autoridad y convertirte en la referencia total de tu sector."
        ],
        cta: "Obtener mi Plan de Posicionamiento"
    },
    {
        id: "consultoria-empresarial",
        title: "Consultoría Empresarial (Inicio y Fundamentos)",
        subtitle: "Transforma tu Gran Idea en un Negocio Próspero con Bases Sólidas",
        content: "La diferencia entre un sueño y un negocio próspero está en una estrategia sólida desde el inicio. Evita que tu idea se convierta en un hobby caro y protege tu inversión de los errores más comunes que matan negocios, como la falta de diferenciación o apuntar al público equivocado.",
        bullets: [
            "Inicia con una Sesión de Descubrimiento y Análisis FODA para identificar honestamente tus fortalezas, debilidades, oportunidades y amenazas.",
            "Define tu Propuesta de Valor Única (PVU) para que te elijan a ti en 10 segundos y no compitas solo por precio.",
            "Define la Misión, Visión y Propósito de tu negocio, lo cual ayuda a las empresas a crecer 3 veces más rápido que las que solo buscan ganancias.",
            "Desarrolla una Estrategia de Marketing Digital realista con cálculo de ROI y acciones concretas para atraer clientes desde el primer día."
        ],
        cta: "Quiero Iniciar con Claridad Total"
    },
    {
        id: "estudio-factibilidad",
        title: "Estudio de Factibilidad y Viabilidad",
        subtitle: "Valida tu Idea de Negocio Antes de Arriesgar Todo tu Patrimonio",
        content: "No apuestes tu dinero ni el de tu familia a ciegas: validar una idea es cuestión de números, datos de mercado y proyecciones financieras realistas. Este estudio es tu seguro más valioso, ya que te muestra con certeza si tu proyecto es viable, rentable y sostenible antes de endeudarte.",
        bullets: [
            "Estudio Profundo de Mercado y Competencia para confirmar si existe demanda real y analizar las barreras de entrada.",
            "Investigación de Demanda Digital (palabras clave) para validar si hay suficiente volumen de búsqueda online para sostener tu negocio.",
            "Análisis Financiero Completo con proyecciones a 3-5 años, flujo de caja y análisis del punto de equilibrio (break-even point).",
            "Recibe un Documento Profesional con Fundamentos Empresariales (Misión, Visión, PVU) listo para presentar a bancos e inversionistas, lo cual puede aumentar tus probabilidades de conseguir financiamiento en un 70%."
        ],
        cta: "Proteger mi Inversión con Datos"
    },
    {
        id: "estrategia-ganar-clientes",
        title: "Estrategia para Ganar Clientes",
        subtitle: "Plan de Marketing Probado que Convierte Visitantes en Ventas Reales",
        content: "Ganar clientes no es cuestión de suerte, sino de seguir un plan con fundamentos. Muchas empresas fracasan por no conocer realmente a su competencia y mercado. Esta estrategia completa te da la ventaja competitiva para atraer exactamente el tipo de clientes que necesitas y multiplicar los resultados.",
        bullets: [
            "Análisis Exhaustivo de Mercado y Competencia (FODA) para entender qué estrategias funcionan en tu industria y cuáles no.",
            "Consigue una Diferenciación real que hace que los clientes cualificados te elijan a ti sobre tus rivales.",
            "Obtén un Plan Listo para Implementar con acciones concretas desde el día uno.",
            "Maximiza tu ROI (Retorno de Inversión) optimizando los recursos y garantizando que cada inversión tenga un propósito medible."
        ],
        cta: "Quiero mi Plan de Atracción de Clientes"
    },
    {
        id: "reingenieria-procesos",
        title: "Reingeniería y Automatización de Procesos",
        subtitle: "Multiplica tu Productividad: Deja de Perder Dinero en Procesos Lentos",
        content: "Los procesos ineficientes son el costo oculto que nadie ve pero todos pagan. Operar más inteligentemente te permite reducir los costos operativos en un 20-30% al eliminar pasos innecesarios y tareas repetitivas.",
        bullets: [
            "Mapeo Completo de tu Operación para documentar procesos y medir tiempos, identificando el 30% del tiempo de trabajo desperdiciado en tareas sin valor.",
            "Identificación de Cuellos de Botella y desperdicios que cuestan anualmente decenas de miles de dólares.",
            "Diseño de Procesos Optimizados que eliminan pasos, estandarizan flujos y se apoyan en la automatización estratégica (incluyendo herramientas no-code).",
            "Rediseña los flujos de trabajo para que tu equipo trabaje más rápido, con menos frustración y cometiendo menos errores, viendo el impacto directo en tus utilidades."
        ],
        cta: "Optimizar Procesos y Ahorrar Costos"
    }
];

// --- COMPONENTS --- //

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {
        heroImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen de análisis estratégico ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState(clusters[0]?.id || '');
    const activeContent = detailedClusters.find(c => c.id === activeTab);

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4 scrollbar-hide">
                    {clusters.map((cluster, index) => (
                        <button 
                            key={cluster.id}
                            onClick={() => setActiveTab(cluster.id)}
                            className={`flex items-center px-4 md:px-6 py-4 md:py-5 rounded-xl transition-all duration-300 min-h-[70px] md:min-h-[80px] flex-shrink-0 text-left ${activeTab === cluster.id ? 'bg-blue-600 text-white shadow-lg transform md:-translate-x-2' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                            <span className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full mr-2 md:mr-3 text-xs md:text-sm font-bold flex-shrink-0 ${activeTab === cluster.id ? 'bg-blue-500' : 'bg-gray-600'}`}>
                                {index + 1}
                            </span>
                            <span className="font-medium text-sm md:text-base">{cluster.titulo}</span>
                        </button>
                    ))}
                </div>
                <div className="md:w-3/4 w-full min-w-0">
                    {activeContent && (
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{activeContent.title}</h3>
                            <p className="text-blue-400 font-medium mb-4 italic">{activeContent.subtitle}</p>
                            <p className="text-gray-300 mb-6">{activeContent.content}</p>
                            <ul className="space-y-3 mb-6">
                                {activeContent.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contacto" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                                {activeContent.cta}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function AnalisisEstrategicoPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* 1. HERO SECTION - Full Screen */}
      <section className="relative text-white h-screen">
        <HeroSlider />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
                <p className="text-sm font-bold tracking-wider uppercase text-gray-300">Inicio &gt; Servicios &gt; Análisis Estratégico</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight shadow-text">Toma Decisiones Inteligentes: El Análisis Estratégico que Tu Pyme Necesita.</h1>
                <ExpandableText
                    className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed"
                    fullText="Deja de adivinar el siguiente paso. Con nuestro análisis estratégico, obtendrás una hoja de ruta clara y basada en datos para identificar oportunidades, superar a tu competencia y lograr un crecimiento sostenible en el mercado ecuatoriano."
                    shortText="Deja de adivinar el siguiente paso. Con nuestro análisis estratégico, obtendrás..."
                />
                <a href="#contacto" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Agenda tu Diagnóstico Gratuito
                </a>
                <p className="mt-4 text-xs font-semibold text-gray-300">✔ Asesoría 100% Personalizada para PYMEs en Ecuador</p>
            </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN ESTRATÉGICA - 4 Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Por Qué tu Negocio se Siente Estancado?</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Muchos empresarios en Ecuador sienten que trabajan más duro que nunca, pero los resultados no llegan. Esta falta de estrategia lleva a la frustración y al estancamiento del negocio que con tanto esfuerzo construiste.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <Map className="h-8 w-8 text-blue-600 mb-3"/>
                  <h3 className="font-bold text-lg">1. Dónde Estás</h3>
                  <p className="text-gray-600 text-sm mt-1">Un diagnóstico honesto de tu situación actual, fortalezas y debilidades.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <Telescope className="h-8 w-8 text-blue-600 mb-3"/>
                  <h3 className="font-bold text-lg">2. Dónde Quieres Ir</h3>
                  <p className="text-gray-600 text-sm mt-1">Definimos metas claras, medibles y alineadas con tu visión a largo plazo.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <Compass className="h-8 w-8 text-blue-600 mb-3"/>
                  <h3 className="font-bold text-lg">3. Cuál es el Camino</h3>
                  <p className="text-gray-600 text-sm mt-1">Identificamos las oportunidades de mayor impacto y menor resistencia.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <Route className="h-8 w-8 text-blue-600 mb-3"/>
                  <h3 className="font-bold text-lg">4. Cómo Llegar</h3>
                  <p className="text-gray-600 text-sm mt-1">Creamos una hoja de ruta con acciones concretas y priorizadas.</p>
              </div>
          </div>
        </div>
      </section>

      {/* 3. HUB DE 6 CLUSTERS - Tabs */}
      <section id="servicios" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Un Ecosistema de Servicios para Cada Desafío</h2>
          <ServicesTabs />
        </div>
      </section>

      {/* 4. BENEFICIOS TRANSVERSALES + VIDEO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Qué Logras con un Análisis Estratégico Completo</h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 bg-gray-900 aspect-video rounded-xl shadow-2xl flex items-center justify-center">
                <p className="text-white text-xl">[Video Placeholder 16:9]</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <Lightbulb className="h-8 w-8 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Claridad Total</h4>
                    <p className="text-sm text-gray-600 mt-1">Decisiones basadas en datos, no en intuición.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <DollarSign className="h-8 w-8 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Ahorro de Dinero</h4>
                    <p className="text-sm text-gray-600 mt-1">Invierte solo en lo que genera retorno.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <TrendingUp className="h-8 w-8 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Ventaja Competitiva</h4>
                    <p className="text-sm text-gray-600 mt-1">Anticípate a los movimientos del mercado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <BarChart className="h-8 w-8 mx-auto text-blue-600"/>
                    <h4 className="mt-2 font-bold">Crecimiento Medible</h4>
                    <p className="text-sm text-gray-600 mt-1">Define KPIs claros y sigue tu progreso.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA/PROCESO */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Metodología Probada en 4 Fases</h2>
          <div className="mt-12 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            <div className="flex-1 text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-blue-600">FASE 1</p>
                <h3 className="text-xl font-bold mt-2">Descubrimiento</h3>
                <p className="text-gray-600 mt-2">Semana 1 <br/> Entendemos tu negocio, tus metas y tus dolores actuales.</p>
            </div>
            <div className="flex-1 text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-blue-600">FASE 2</p>
                <h3 className="text-xl font-bold mt-2">Investigación</h3>
                <p className="text-gray-600 mt-2">Analizamos tu mercado, competencia y data interna. (Semana 2)</p>
            </div>
            <div className="flex-1 text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-blue-600">FASE 3</p>
                <h3 className="text-xl font-bold mt-2">Estrategia</h3>
                <p className="text-gray-600 mt-2">Semana 3 <br/> Diseñamos la hoja de ruta con acciones concretas.</p>
            </div>
            <div className="flex-1 text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <p className="text-sm font-bold text-blue-600">FASE 4</p>
                <h3 className="text-xl font-bold mt-2">Entrega</h3>
                <p className="text-gray-600 mt-2">Semana 4 <br/> Te presentamos el plan y los siguientes pasos.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#contacto" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors">
                Agenda tu Sesión de Descubrimiento Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* 6. PRUEBA SOCIAL LOCAL */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">PYMEs en Ecuador que Ya Crecen con Nosotros</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"El análisis de competencia fue un antes y un después. Ahora sabemos exactamente dónde enfocar nuestros esfuerzos de marketing."</p>
                <p className="mt-4 font-bold">- Juan Pérez</p>
                <p className="text-sm text-gray-500">CEO de "La Casa del Tornillo", Loja</p>
            </div>
            {/* Testimonio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"Pensábamos que necesitábamos una nueva web, pero el estudio de viabilidad nos ahorró miles de dólares. Su honestidad no tiene precio."</p>
                <p className="mt-4 font-bold">- María Augusta C.</p>
                <p className="text-sm text-gray-500">Gerente de "Flor de Liz", Cuenca</p>
            </div>
            {/* Testimonio 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"Gracias a la reingeniería de procesos, hemos reducido nuestros tiempos de entrega en un 30%. Totalmente recomendados."</p>
                <p className="mt-4 font-bold">- Carlos Rodríguez</p>
                <p className="text-sm text-gray-500">Jefe de Operaciones, "Logística Andina", Quito</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="font-bold text-lg">Logos de Clientes (Placeholder)</p>
          </div>
        </div>
      </section>

    </div>
  );
}