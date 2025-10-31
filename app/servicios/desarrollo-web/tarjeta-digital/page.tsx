'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Monitor, Smartphone, Share2, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function TarjetaDigital() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: 0,
      title: 'Info de Contacto',
      subtitle: 'Impacta con Info de Contacto Básica',
      image: '/images/categorias/desarrollo-web/tarjeta-digital-contacto.webp',
      content: {
        intro: '¿Sabías lo esencial de datos claros que faciliten conexiones inmediatas sin abrumar a prospectos?',
        description: 'La información de contacto básica proporciona elementos clave como teléfono y email en un diseño profesional adaptable a móviles para independientes y pymes, resolviendo objeciones de accesibilidad. Esto optimiza para búsquedas como "cómo ganar clientes", genera confianza rápida y convierte presentaciones en leads, evitando sobrecargas mientras facilita networking simple y efectivo sin costos recurrentes ni complicaciones técnicas.',
        listTitle: 'Beneficios Clave de la Info Básica',
        items: [
          'Datos esenciales que agilizan comunicaciones y respuestas rápidas.',
          'Simplicidad que retiene atención y fomenta contactos valiosos.',
          'Adaptación a tu marca para un impacto profesional inmediato.',
          'Enfoque en lo necesario que acelera conversiones iniciales.'
        ],
        ctaTitle: '¿Listo para compartir tu info esencial?',
        ctaDescription: 'Facilita conexiones con datos claros y profesionales',
        cta: 'Quiero Mi Info de Contacto'
      }
    },
    {
      id: 1,
      title: 'Enlaces a Redes',
      subtitle: 'Conecta con Enlaces a Redes',
      image: '/images/categorias/desarrollo-web/tarjeta-digital-redes.webp',
      content: {
        intro: '¿Imaginas expandir tu red social directamente desde un contacto inicial sin esfuerzos extras?',
        description: 'Los enlaces a redes sociales integran perfiles clave en una tarjeta simple y funcional para artesanos y pymes, dinamizando interacciones mientras resuelve "presentar mi negocio" con accesos inmediatos. Esto atrae leads orgánicos, optimiza experiencias móviles y fortalece presencia digital, ideal para ganar clientes al facilitar follows y shares sin mantenimiento complejo ni sobrecargas informativas.',
        listTitle: 'Ventajas de los Enlaces Sociales',
        items: [
          'Conexiones directas que impulsan interacciones y engagement.',
          'Expansión de alcance para captar audiencias más amplias.',
          'Integración fluida que humaniza tu marca rápidamente.',
          'Facilidad para actualizar y mantener relevancia continua.'
        ],
        ctaTitle: '¿Quieres expandir tu red social?',
        ctaDescription: 'Conecta tus perfiles sociales de forma instantánea',
        cta: 'Quiero Conectar Redes'
      }
    },
    {
      id: 2,
      title: 'Botón de Guardar',
      subtitle: 'Simplifica con Botón de Guardar',
      image: '/images/categorias/desarrollo-web/tarjeta-digital-guardar.webp',
      content: {
        intro: '¿Qué si tus prospectos guardan tu info en segundos, asegurando recordatorios constantes?',
        description: 'El botón de guardar contacto permite almacenamiento rápido en dispositivos para independientes y pymes, resolviendo memorabilidad en networking mientras optimiza para "cómo ganar clientes" con usabilidad intuitiva. Esto genera leads persistentes, adapta a móviles y evita pérdidas de oportunidades, ofreciendo una solución profesional sin costos extras ni requerimientos de mantenimiento avanzado.',
        listTitle: 'Impacto del Botón de Guardar',
        items: [
          'Almacenamiento sencillo que fomenta retención de contactos.',
          'Accesibilidad inmediata que acelera follow-ups efectivos.',
          'Diseño optimizado que eleva percepción profesional.',
          'Herramienta práctica para networking sin complicaciones.'
        ],
        ctaTitle: '¿Quieres facilitar el guardado de contacto?',
        ctaDescription: 'Permite que te guarden con un solo clic',
        cta: 'Quiero Botón de Guardar'
      }
    },
    {
      id: 3,
      title: 'Formulario y Dominio',
      subtitle: 'Personaliza con Formulario y Dominio',
      image: '/images/categorias/desarrollo-web/tarjeta-digital-dominio.webp',
      content: {
        intro: '¿Estás listo para un dominio propio que haga único y accesible tu primer contacto?',
        description: 'Incluye formulario directo y dominio personalizado como www.mitarjetadigital.me/tunombre para artesanos y pymes, impulsando profesionalismo sin sobrecargas. Esto resuelve "presentar mi negocio", optimiza SEO básico para visibilidad, captura leads seguros y facilita lanzamientos rápidos, asegurando una presencia digital simple y efectiva sin mantenimiento ni inversiones recurrentes ocultas.',
        listTitle: 'Elementos para Presencia Única',
        items: [
          'Formulario que captura consultas de forma segura y directa.',
          'Dominio propio que mejora memorabilidad y confianza.',
          'Personalización que adapta a tu identidad específica.',
          'Lanzamiento eficiente sin hosting o costos extras iniciales.'
        ],
        ctaTitle: '¿Quieres tu dominio personalizado?',
        ctaDescription: 'Obtén un dominio único y memorable',
        cta: 'Quiero Mi Dominio Personalizado'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/categorias/desarrollo-web/tarjeta-digital-hero.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center py-16 md:py-24">
              <Link href="/servicios/desarrollo-web" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Desarrollo Web
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Tu Primer Contacto Profesional Sin Mantenimiento Complejo</h1>
              <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">Establece una imagen impactante con una tarjeta digital que conecta clientes y prospectos de inmediato, sin costos recurrentes ni sobrecargas. Por solo 60 USD en pago único, obtén un sitio simple adaptable que facilita networking, genera leads iniciales y resuelve barreras de presentación para ganar clientes en el digital.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto">
                  <span className="hidden sm:inline">Agenda Tu Llamada Gratuita Ahora</span>
                  <span className="sm:hidden">Agenda Tu Llamada</span>
                </Button>
                <span className="text-base md:text-lg text-blue-100">Inversión única: <strong className="text-white">$60</strong></span>
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
            <p className="text-gray-700 mb-4 text-center">Para artesanos, independientes y pymes, ganar clientes comienza con un contacto inicial profesional que capte atención sin complicaciones, mostrando tu esencia y capturando leads de manera efectiva.</p>

            <details className="group">
              <summary className="cursor-pointer select-none text-blue-700 hover:text-blue-800 font-semibold text-center mb-4">Seguir leyendo</summary>
              <div className="mt-2">
                <p className="text-gray-700 mb-4 font-bold">La estrategia radica en una tarjeta que conecta directamente mediante info clara y enlaces, optimizando para búsquedas como "cómo ganar clientes" o "presentar mi negocio" sin esfuerzos manuales extras.</p>
                <p className="text-gray-700">Desglosémoslo en cuatro pasos clave de nuestro paquete, para que implementes una táctica simple que impulse conexiones y observes resultados rápidos en networking y leads valiosos.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Tu Tarjeta Digital Simple</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4">Descubre cómo cada elemento de tu tarjeta está diseñado para conectar, facilitar y generar contactos valiosos.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para Tu Primer Impacto Digital?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">No pierdas conexiones; obtén una tarjeta que gana clientes desde el inicio. Agenda ahora y adaptemos tu solución.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lanza Tu Tarjeta Digital y Conecta Hoy</h2>
            <p className="text-lg text-gray-700 mb-12">Por 60 USD en pago único, accede a una solución simple con info básica, enlaces y dominio para pymes e independientes. Presenta tu marca, captura leads y networking sin mantenimiento, impulsando crecimiento inicial efectivo.</p>
            
            <div className="relative mb-12">
              {/* Slider para móvil */}
              <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Info de Contacto Básica</h3>
                  <p className="text-gray-600">Proporciona datos esenciales como email y teléfono para conexiones rápidas, ideal para pymes y artesanos que buscan impresionar prospectos sin sobrecargar, atrayendo clientes con simplicidad profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enlaces a Redes Sociales</h3>
                  <p className="text-gray-600">Facilita links directos a perfiles sociales, fortaleciendo interacciones y networking para independientes, ayudando a ganar clientes al expandir alcance digital sin barreras iniciales complejas.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botón de Guardar Contacto</h3>
                  <p className="text-gray-600">Agrega un botón sencillo para almacenar info en dispositivos, optimizando presentaciones para pymes y artesanos, generando leads inmediatos y memorables en encuentros profesionales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 min-w-[280px] snap-center flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formulario y Dominio Personal</h3>
                  <p className="text-gray-600">Incluye formulario directo y dominio como www.mitarjetadigital.me/tunombre, asegurando accesibilidad y profesionalismo sin mantenimiento, impulsando confianza para captar clientes efectivamente.</p>
                </div>
              </div>

              {/* Grid para tablet y desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Monitor className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Info de Contacto Básica</h3>
                  <p className="text-gray-600">Proporciona datos esenciales como email y teléfono para conexiones rápidas, ideal para pymes y artesanos que buscan impresionar prospectos sin sobrecargar, atrayendo clientes con simplicidad profesional.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enlaces a Redes Sociales</h3>
                  <p className="text-gray-600">Facilita links directos a perfiles sociales, fortaleciendo interacciones y networking para independientes, ayudando a ganar clientes al expandir alcance digital sin barreras iniciales complejas.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Share2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Botón de Guardar Contacto</h3>
                  <p className="text-gray-600">Agrega un botón sencillo para almacenar info en dispositivos, optimizando presentaciones para pymes y artesanos, generando leads inmediatos y memorables en encuentros profesionales.</p>
                </div>

                <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 border-2 border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-600 transition-all duration-300">
                    <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formulario y Dominio Personal</h3>
                  <p className="text-gray-600">Incluye formulario directo y dominio como www.mitarjetadigital.me/tunombre, asegurando accesibilidad y profesionalismo sin mantenimiento, impulsando confianza para captar clientes efectivamente.</p>
                </div>
              </div>
            </div>

            {/* Pricing y CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="text-2xl md:text-3xl font-bold mb-2">Inversión Única: $60</div>
              <div className="text-sm md:text-base text-blue-100 mb-6">Contacto profesional 24/7. Diseño adaptable intuitivo. Networking optimizado simple. Dominio incluido personalizado. Solución rápida sin costos ocultos.</div>
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
