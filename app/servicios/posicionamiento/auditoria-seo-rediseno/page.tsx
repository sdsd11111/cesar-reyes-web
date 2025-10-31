'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Search, Layout, ShieldCheck, Target, BarChart, Zap, Users, TrendingUp, Rocket, LineChart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function AuditoriaSEORediseno() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Análisis SEO',
      subtitle: 'Evaluación Profesional de tu Sitio Web',
      image: '/images/categorias/posicionamiento/sin-inversion.webp',
      content: {
        intro: '¿Sabías que el 75% de los usuarios no pasa de la primera página de resultados de búsqueda?',
        description: 'Nuestro análisis SEO exhaustivo identifica las oportunidades clave para mejorar el posicionamiento de tu sitio web. Evaluamos más de 200 factores técnicos y de contenido para detectar problemas que puedan estar afectando tu visibilidad en buscadores como Google.',
        listTitle: 'Beneficios del Análisis SEO',
        items: [
          'Identificación de errores técnicos que afectan el rastreo e indexación',
          'Evaluación de la estructura del sitio y la arquitectura de enlaces internos',
          'Análisis de palabras clave y oportunidades de contenido',
          'Revisión de la experiencia móvil y velocidad de carga',
          'Evaluación de backlinks y perfil de enlaces'
        ],
        ctaTitle: '¿Listo para descubrir cómo mejorar tu SEO?',
        ctaDescription: 'Obtén un análisis detallado de tu sitio web',
        cta: 'Solicitar Auditoría SEO'
      }
    },
    {
      id: 1,
      title: 'Optimización Técnica',
      subtitle: 'Mejora el Rendimiento de tu Sitio',
      image: '/images/categorias/posicionamiento/foda.webp',
      content: {
        intro: '¿Tu sitio web tarda más de 3 segundos en cargar? Podrías estar perdiendo hasta el 53% de tus visitantes.',
        description: 'La optimización técnica es fundamental para el éxito de cualquier estrategia SEO. Nos aseguramos de que tu sitio cumpla con los estándares de Google y ofrezca la mejor experiencia de usuario posible.',
        listTitle: 'Mejoras Técnicas Incluidas',
        items: [
          'Optimización de velocidad y rendimiento',
          'Implementación de schema markup para rich snippets',
          'Corrección de errores de rastreo e indexación',
          'Optimización de imágenes y recursos multimedia',
          'Implementación de SSL y protocolo HTTPS',
          'Configuración correcta de archivos robots.txt y sitemap.xml'
        ],
        ctaTitle: '¿Quieres que tu sitio sea más rápido y eficiente?',
        ctaDescription: 'Optimizamos tu sitio para un mejor rendimiento',
        cta: 'Optimizar Mi Sitio'
      }
    },
    {
      id: 2,
      title: 'Rediseño Estratégico',
      subtitle: 'Experiencia de Usuario Mejorada',
      image: '/images/categorias/posicionamiento/posicionamiento.webp',
      content: {
        intro: 'El 94% de las primeras impresiones están relacionadas con el diseño de tu sitio web.',
        description: 'Nuestro enfoque de rediseño web combina las mejores prácticas de diseño UX/UI con estrategias de conversión probadas. Creamos sitios que no solo son hermosos, sino que también generan resultados medibles para tu negocio.',
        listTitle: 'Elementos del Rediseño',
        items: [
          'Diseño responsive adaptado a todos los dispositivos',
          'Arquitectura de información optimizada para conversiones',
          'Jerarquía visual mejorada para destacar lo más importante',
          'Llamados a la acción estratégicamente ubicados',
          'Diseño de interfaz moderna y profesional'
        ],
        ctaTitle: '¿Listo para un rediseño que impulse tus conversiones?',
        ctaDescription: 'Transformamos tu sitio en una máquina de generar clientes',
        cta: 'Solicitar Rediseño'
      }
    },
    {
      id: 3,
      title: 'Métricas',
      subtitle: 'Seguimiento y Análisis de Resultados',
      image: '/images/categorias/posicionamiento/propiedad-total.webp',
      content: {
        intro: 'El contenido es el rey, pero solo si está optimizado para SEO y conversiones.',
        description: 'Desarrollamos estrategias de contenido que no solo mejoran tu posicionamiento en buscadores, sino que también conectan con tu audiencia y la impulsan a actuar. Desde la investigación de palabras clave hasta la creación de contenido optimizado, nos aseguramos de que cada palabra cuente.',
        listTitle: 'Estrategia de Contenido',
        items: [
          'Investigación de palabras clave estratégicas',
          'Optimización de metaetiquetas y encabezados',
          'Creación de contenido relevante y valioso',
          'Estrategia de enlaces internos y externos',
          'Optimización de imágenes y elementos multimedia'
        ],
        ctaTitle: '¿Quieres que tu contenido destaque en los buscadores?',
        ctaDescription: 'Optimizamos tu contenido para mayor visibilidad y conversiones',
        cta: 'Optimizar Contenido'
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
          style={{ backgroundImage: "url('/images/categorias/posicionamiento/auditoria-seo-hero.webp')" }}
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Auditoría SEO y Rediseño Web Profesional</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Descubre cómo mejorar tu visibilidad en buscadores y convertir más visitantes en clientes con nuestro servicio integral de auditoría SEO y rediseño web. Analizamos, optimizamos y mejoramos tu presencia digital para obtener resultados reales.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Solicitar Auditoría Gratuita</span>
                  <span className="sm:hidden">Auditoría Gratis</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión desde: <strong className="text-white">$1,250</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué necesitas una auditoría SEO profesional?</h2>
            <p className="text-gray-700 mb-4 text-center">En el competitivo mundo digital, no puedes permitirte perder oportunidades de negocio por un sitio web que no está optimizado para los motores de búsqueda.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">Nuestra metodología combina análisis técnico avanzado con estrategias de contenido efectivas para posicionar tu sitio web en los primeros resultados de búsqueda.</p>
                <p className="text-gray-700">A continuación, te mostramos cómo nuestro proceso de auditoría y rediseño puede transformar tu presencia digital en una máquina de generar clientes calificados.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Nuestro Proceso de Auditoría y Rediseño</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Un enfoque integral para mejorar tu visibilidad y conversiones</p>
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
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-white mb-3">{tabs[activeTab].content.ctaTitle}</h4>
                        <p className="text-gray-300 mb-4">{tabs[activeTab].content.ctaDescription}</p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          {tabs[activeTab].content.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios de Nuestra Auditoría SEO</h2>
            <p className="text-gray-600">Obtén una ventaja competitiva con nuestro enfoque integral de optimización web</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-600" />,
                title: 'Mayor Visibilidad',
                description: 'Aparece en los primeros resultados de búsqueda para tus palabras clave objetivo.'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                title: 'Más Tráfico Calificado',
                description: 'Atrae visitantes interesados en tus productos o servicios.'
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: 'Mejor Experiencia de Usuario',
                description: 'Diseño intuitivo que mejora la navegación y el tiempo en el sitio.'
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: 'Mayor Tasa de Conversión',
                description: 'Diseño optimizado para guiar a los visitantes hacia la acción deseada.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para mejorar tu posicionamiento web?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">Obtén una auditoría SEO gratuita y descubre cómo podemos ayudar a que tu negocio destaque en los resultados de búsqueda.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-6 text-lg font-semibold">
              Solicitar Auditoría Gratis
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-800 hover:text-white">
              Ver más servicios
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-blue-200">Sin compromisos • Sin tarjeta de crédito requerida</p>
        </div>
      </section>
    </div>
  );
}
