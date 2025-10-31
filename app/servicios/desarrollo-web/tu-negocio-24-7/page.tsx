'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Monitor, Smartphone, Share2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function TuNegocio247() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Diseño Premium',
      subtitle: 'Potencia Tu Marca con Diseño Premium y UX',
      image: '/images/categorias/desarrollo-web/negocio-24-7-diseno-premium.webp',
      content: {
        intro: '¿Sabías lo importante de un diseño que capte la esencia de tu negocio y haga que los clientes se queden?',
        description: 'Un diseño web premium enfocado en UX asegura que tu sitio sea intuitivo y atractivo, reflejando tu identidad como artesano o pyme. Esto no solo diferenciarte de la competencia, sino que mejora la retención de visitantes, convirtiéndolos en clientes leales al facilitar la exploración de tus productos y servicios sin frustraciones.',
        listTitle: 'Beneficios Clave del Diseño UX',
        items: [
          'Navegación intuitiva que guía al usuario directamente a tus ofertas.',
          'Experiencia visual única que resalta tu marca y genera confianza inmediata.',
          'Adaptación a tus necesidades específicas para un sitio que vende por sí solo.',
          'Mejora en la percepción profesional, atrayendo más consultas y ventas.'
        ],
        ctaTitle: '¿Listo para destacar con un diseño profesional?',
        ctaDescription: 'Crea una experiencia única que convierta visitantes en clientes',
        cta: 'Quiero Mi Diseño Premium'
      }
    },
    {
      id: 1,
      title: 'Secciones Personalizadas',
      subtitle: 'Personaliza Tu Sitio con Secciones Adaptables',
      image: '/images/categorias/desarrollo-web/negocio-24-7-secciones-adaptables.webp',
      content: {
        intro: '¿Imaginas mostrar tus productos en un sitio que se ve perfecto en cualquier dispositivo, sin perder oportunidades?',
        description: 'Con hasta 5 secciones personalizadas como Inicio, Nosotros, Servicios, Galería y Contacto, tu web se adapta a móviles, tablets y desktops. Esto asegura una experiencia óptima, captando clientes en cualquier momento y lugar, mientras resuelves la objeción de accesibilidad para pymes y artesanos que buscan expandir su alcance digital.',
        listTitle: 'Ventajas de la Personalización Responsive',
        items: [
          'Secciones a medida que destacan tus fortalezas únicas y productos.',
          'Compatibilidad total con dispositivos para no perder tráfico móvil.',
          'Carga rápida que mantiene a los usuarios enganchados y explorando.',
          'Facilidad para actualizar y crecer tu presencia online sin complicaciones.'
        ],
        ctaTitle: '¿Quieres un sitio que funcione en todos los dispositivos?',
        ctaDescription: 'Llega a más clientes con un diseño responsive y personalizado',
        cta: 'Personaliza Mi Sitio Web'
      }
    },
    {
      id: 2,
      title: 'Integraciones Dinámicas',
      subtitle: 'Conecta y Actualiza con Integraciones Dinámicas',
      image: '/images/categorias/desarrollo-web/negocio-24-7-integraciones.webp',
      content: {
        intro: '¿Qué pasaría si tu web no solo muestra, sino que interactúa y atrae tráfico constante con contenido fresco?',
        description: 'Integra redes sociales con botones interactivos, una galería de imágenes optimizada y un blog para noticias. Esto facilita la interacción con seguidores, evita SPAM en formularios de contacto y genera actualizaciones que mantienen informada a tu audiencia, atrayendo leads orgánicos y resolviendo cómo mostrar productos de manera efectiva para independientes y pymes.',
        listTitle: 'Impacto de las Integraciones en Tu Estrategia',
        items: [
          'Botones sociales que impulsan interacciones y shares instantáneos.',
          'Galería rápida que exhibe productos visualmente sin demoras.',
          'Blog para contenido que posiciona en búsquedas y educa clientes.',
          'Formulario seguro que captura leads sin riesgos ni interrupciones.'
        ],
        ctaTitle: '¿Listo para conectar con tu audiencia?',
        ctaDescription: 'Integra redes sociales y contenido dinámico para más engagement',
        cta: 'Quiero Integrar Mi Web'
      }
    },
    {
      id: 3,
      title: 'Seguridad y SEO',
      subtitle: 'Asegura Visibilidad con Seguridad y Optimización',
      image: '/images/categorias/desarrollo-web/negocio-24-7-seguridad-seo.webp',
      content: {
        intro: '¿Estás listo para que tu sitio aparezca en Google y proteja a tus clientes, mientras analizas qué funciona?',
        description: 'Incluye certificado SSL para seguridad, optimización SEO básica para indexación en buscadores, y Google Analytics para rastrear tráfico. Con dominio y hosting el primer año, establishes una base sólida que mejora visibilidad, protege datos y permite decisiones informadas, ideal para artesanos y pymes que buscan ganar clientes sin inversiones extras iniciales.',
        listTitle: 'Elementos Esenciales para Crecimiento Seguro',
        items: [
          'SSL que genera confianza y protege transacciones de usuarios.',
          'SEO que impulsa apariciones en búsquedas relevantes como "ganar clientes".',
          'Analytics para entender comportamientos y optimizar estrategias.',
          'Dominio/hosting incluidos, facilitando un lanzamiento rápido y sin costos ocultos.'
        ],
        ctaTitle: '¿Quieres aparecer en Google y proteger a tus clientes?',
        ctaDescription: 'Obtén seguridad, SEO y análisis desde el día uno',
        cta: 'Quiero Visibilidad y Seguridad'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/negocio-24-7-hero.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Negocio Abierto 24/7 Sin Costos Altos de Mantenimiento</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Imagina tener una página web profesional que trabaja por ti todo el día, atrayendo clientes mientras duermes, sin preocuparte por gastos recurrentes elevados. Con un pago único de 500 USD, obtienes un sitio premium que refleja tu marca, optimizado para móviles y con herramientas para ganar visibilidad. Supera la competencia y convierte visitantes en clientes leales.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda Tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$500</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Crear la Estrategia para Ganar Clientes con Tu Página Web</h2>
            <p className="text-gray-700 mb-4 text-center">Para artesanos, profesionales independientes y pymes, ganar clientes empieza con una presencia digital sólida que muestre tus productos y servicios de forma atractiva, captando leads automáticamente.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La clave es una web que no solo informe, sino que convierta visitantes en compradores mediante diseño intuitivo, contenido relevante y optimizaciones que mejoren tu visibilidad en búsquedas como "cómo ganar clientes" o "mostrar mis productos".</p>
                <p className="text-gray-700">Vamos a desglosar esto en cuatro pasos esenciales que incluye nuestro paquete, para que construyas una estrategia ganadora y veas resultados rápidos.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Una Web Profesional que Trabaja por Ti</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Descubre cómo cada componente de tu página web está diseñado para atraer, convertir y hacer crecer tu negocio.</p>
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
                    <span className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full mr-2 md:mr-3 text-xs md:text-sm font-bold flex-shrink-0 bg-blue-500 text-white`}>
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
                            <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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

          {/* CTA intermedio */}
          <div className="max-w-3xl mx-auto text-center mt-16 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Transformar Tu Presencia Digital?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">No esperes más para tener una web que atraiga clientes 24/7. Agenda una llamada y personalicemos tu paquete.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lanza Tu Página Web y Gana Clientes Hoy Mismo</h2>
            <p className="text-lg text-gray-700 mb-12">Con un pago único de 500 USD, obtén una solución integral que posiciona tu negocio en el digital. Diferénciate, atrae leads y mide resultados con herramientas premium adaptadas a artesanos, independientes y pymes.</p>
            
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Premium y UX Intuitiva</h3>
                  <p className="text-gray-600">Crea una experiencia visual única que refleje tu marca, con navegación fácil que mantiene a los visitantes explorando tus servicios.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secciones Personalizadas y Responsive</h3>
                  <p className="text-gray-600">Incluye hasta 5 secciones como Inicio, Servicios y Contacto, adaptadas a cualquier dispositivo.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones Sociales y Contenido Dinámico</h3>
                  <p className="text-gray-600">Conecta redes sociales, galería optimizada y blog para actualizaciones.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO y Análisis Inicial</h3>
                  <p className="text-gray-600">Protege datos con SSL, optimiza para buscadores y monitorea tráfico con Analytics.</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Premium y UX Intuitiva</h3>
                  <p className="text-gray-600">Crea una experiencia visual única que refleje tu marca, con navegación fácil que mantiene a los visitantes explorando tus servicios.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secciones Personalizadas y Responsive</h3>
                  <p className="text-gray-600">Incluye hasta 5 secciones como Inicio, Servicios y Contacto, adaptadas a cualquier dispositivo.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integraciones Sociales y Contenido Dinámico</h3>
                  <p className="text-gray-600">Conecta redes sociales, galería optimizada y blog para actualizaciones.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad, SEO y Análisis Inicial</h3>
                  <p className="text-gray-600">Protege datos con SSL, optimiza para buscadores y monitorea tráfico con Analytics.</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $500</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Incluye dominio y hosting primer año. Presencia profesional 24/7. Experiencia UX intuitiva. Visibilidad SEO optimizada. Seguridad y análisis incluidos.</div>
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-4 md:px-8 py-4 md:py-6 text-base md:text-lg font-bold shadow-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                <span className="sm:hidden">Agenda Tu Llamada Ahora</span>
              </Button>
              <div className="text-xs md:text-sm text-blue-100 mt-4">Resultados garantizados para crecer | Sin costos ocultos | Soporte incluido</div>
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
