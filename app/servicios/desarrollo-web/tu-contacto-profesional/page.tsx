'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Monitor, Smartphone, Share2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function TuContactoProfesional() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Diseño Minimalista',
      subtitle: 'Impulsa Imagen con Diseño Minimalista',
      image: '/images/categorias/desarrollo-web/contacto-profesional-perfil.webp',
      content: {
        intro: '¿Sabías lo crucial de un diseño simple que capte atención sin abrumar en el primer contacto?',
        description: 'Una página web minimalista profesional crea una experiencia intuitiva y adaptable a móviles para independientes y pymes, transmitiendo tu marca de forma clara. Esto resuelve objeciones de complejidad, optimiza para búsquedas como "cómo presentar mi negocio" y genera confianza inmediata, facilitando networking y leads iniciales sin necesidad de mantenimiento constante ni sobrecargas informativas.',
        listTitle: 'Beneficios Clave del Diseño Minimalista',
        items: [
          'Adaptabilidad móvil que asegura accesos desde cualquier dispositivo.',
          'Imagen profesional que diferencia en encuentros iniciales.',
          'Simplicidad que retiene prospectos y fomenta contactos.',
          'Optimización para usuario que acelera conexiones valiosas.'
        ],
        ctaTitle: '¿Listo para impresionar con simplicidad?',
        ctaDescription: 'Crea una tarjeta digital que destaque por su claridad',
        cta: 'Quiero Mi Tarjeta Digital'
      }
    },
    {
      id: 1,
      title: 'Info de Contacto',
      subtitle: 'Facilita Acceso con Info de Contacto',
      image: '/images/categorias/desarrollo-web/contacto-profesional-galeria.webp',
      content: {
        intro: '¿Imaginas compartir datos básicos que conviertan prospectos en clientes sin complicaciones?',
        description: 'Incluye información de contacto esencial como email y teléfono en un formato claro para artesanos y pymes, evitando sobrecargas mientras resuelve "cómo ganar clientes" al proporcionar accesos directos. Esto fortalece presentaciones digitales, genera leads orgánicos y asegura que tu audiencia reciba lo necesario para conectar, todo en un sitio rápido y efectivo sin costos extras.',
        listTitle: 'Ventajas de la Info Básica',
        items: [
          'Datos claros que agilizan respuestas y consultas.',
          'Evita confusiones para un networking eficiente.',
          'Enfoque en lo esencial que construye confianza rápida.',
          'Integración simple que soporta crecimiento inicial.'
        ],
        ctaTitle: '¿Quieres facilitar el contacto directo?',
        ctaDescription: 'Comparte tu información de forma clara y profesional',
        cta: 'Quiero Facilitar Contacto'
      }
    },
    {
      id: 2,
      title: 'Enlaces y Formulario',
      subtitle: 'Conecta con Enlaces y Formulario',
      image: '/images/categorias/desarrollo-web/contacto-profesional-testimonios.webp',
      content: {
        intro: '¿Qué si tu tarjeta digital interactúa directamente, capturando leads en el momento?',
        description: 'Agrega enlaces a redes sociales y formulario de contacto para interacciones inmediatas en pymes e independientes, dinamizando presentaciones y resolviendo "cómo presentar mi negocio" con herramientas anti-SPAM. Esto mantiene audiencia engageda, genera contactos valiosos y optimiza experiencias sin mantenimiento complejo, ideal para expandir red sin esfuerzos manuales.',
        listTitle: 'Impacto de las Conexiones',
        items: [
          'Links sociales que impulsan follows y shares.',
          'Formulario seguro que captura datos sin riesgos.',
          'Interacciones directas que convierten prospectos.',
          'Facilidad para actualizar y mantener relevancia.'
        ],
        ctaTitle: '¿Listo para conectar instantáneamente?',
        ctaDescription: 'Integra redes y formularios para capturar leads',
        cta: 'Quiero Conectar'
      }
    },
    {
      id: 3,
      title: 'Botón y Dominio',
      subtitle: 'Personaliza con Botón y Dominio',
      image: '/images/categorias/desarrollo-web/contacto-profesional-blog.webp',
      content: {
        intro: '¿Estás listo para un dominio propio que haga memorable tu contacto profesional?',
        description: 'Incluye botón de guardar contacto y dominio personalizado como www.tunombre.com para accesibilidad inmediata en artesanos y pymes, impulsando visibilidad sin costos recurrentes. Esto resuelve memorabilidad, optimiza para búsquedas como "ganar clientes" y permite presentaciones únicas, asegurando que tu marca destaque en networking con una solución rápida y sin complicaciones.',
        listTitle: 'Elementos para Presencia Fuerte',
        items: [
          'Botón guardar que facilita almacenamiento en dispositivos.',
          'Dominio propio que eleva profesionalismo y SEO básico.',
          'Personalización que adapta a tu identidad única.',
          'Lanzamiento rápido sin hosting o mantenimiento extras.'
        ],
        ctaTitle: '¿Quieres un dominio memorable?',
        ctaDescription: 'Destaca con tu propio dominio personalizado',
        cta: 'Quiero Mi Dominio'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/contacto-profesional-hero.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Contacto Profesional Siempre Disponible Sin Mantenimiento Complejo</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Crea una tarjeta digital profesional que impresiona a clientes y prospectos con información clara, sin sobrecargas ni costos recurrentes. Por solo 150 USD en pago único, obtén un sitio minimalista adaptable que transmite tu marca, facilita networking y genera leads iniciales, superando tarjetas físicas para ganar clientes en el digital.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda Tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$150</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Crear la Estrategia para Ganar Clientes con Tu Tarjeta Digital</h2>
            <p className="text-gray-700 mb-4 text-center">Para artesanos, independientes y pymes, ganar clientes inicia con un primer contacto profesional que muestre tu esencia sin complicaciones, captando interés y leads de forma simple y efectiva.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La clave es una tarjeta web que no solo informa, sino que conecta mediante diseño intuitivo y enlaces directos, optimizando para búsquedas como "cómo ganar clientes" o "presentar mi negocio" sin esfuerzos extras.</p>
                <p className="text-gray-700">Desglosémoslo en cuatro pasos esenciales de nuestro paquete, para que construyas una estrategia inicial que impulse networking y veas resultados rápidos en contactos valiosos.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Tu Tarjeta Digital Profesional</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Descubre cómo cada elemento de tu tarjeta digital está diseñado para impresionar, conectar y generar oportunidades.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Impresionar en Tu Primer Contacto?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">No esperes; obtén una tarjeta digital que gana clientes desde el inicio. Agenda ahora y adaptemos tu solución.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lanza Tu Tarjeta Digital y Gana Contactos Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Por 150 USD en pago único, accede a una solución minimalista con web profesional, enlaces y dominio para pymes e independientes. Presenta tu negocio, captura leads y networking sin mantenimiento, impulsando crecimiento inicial.</p>
            
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Minimalista Profesional</h3>
                  <p className="text-gray-600">Ofrece una imagen limpia y adaptable que refleja tu marca, ideal para primeros contactos sin sobrecargar, atrayendo prospectos con simplicidad y profesionalismo inmediato.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Información de Contacto Básica</h3>
                  <p className="text-gray-600">Incluye datos esenciales como teléfono y email, facilitando conexiones rápidas para artesanos y pymes que buscan ganar clientes sin barreras iniciales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enlaces a Redes y Formulario</h3>
                  <p className="text-gray-600">Agrega links sociales y formulario de contacto para interacciones directas, capturando leads y fortaleciendo networking en un sitio optimizado y seguro.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botón Guardar y Dominio Personal</h3>
                  <p className="text-gray-600">Con botón para guardar contacto y dominio personalizado como www.tunombre.com, asegura accesibilidad y memorabilidad, impulsando presencia digital sin mantenimiento.</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diseño Minimalista Profesional</h3>
                  <p className="text-gray-600">Ofrece una imagen limpia y adaptable que refleja tu marca, ideal para primeros contactos sin sobrecargar, atrayendo prospectos con simplicidad y profesionalismo inmediato.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Información de Contacto Básica</h3>
                  <p className="text-gray-600">Incluye datos esenciales como teléfono y email, facilitando conexiones rápidas para artesanos y pymes que buscan ganar clientes sin barreras iniciales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enlaces a Redes y Formulario</h3>
                  <p className="text-gray-600">Agrega links sociales y formulario de contacto para interacciones directas, capturando leads y fortaleciendo networking en un sitio optimizado y seguro.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botón Guardar y Dominio Personal</h3>
                  <p className="text-gray-600">Con botón para guardar contacto y dominio personalizado como www.tunombre.com, asegura accesibilidad y memorabilidad, impulsando presencia digital sin mantenimiento.</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $150</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Presencia profesional 24/7. Diseño intuitivo adaptable. Networking optimizado. Dominio incluido. Solución rápida sin costos ocultos.</div>
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
