'use client';

import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ChevronRight, ChevronDown, CalendarDays, X, Star, Camera, ArrowDown, Clock as ClockIcon, MessageCircle, CheckCircle, Package, Settings, Film } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SpotCorporativo() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
  const [activeTab, setActiveTab] = useState('tu');
  const [faqOpen, setFaqOpen] = useState([false, false, false, false, false]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  return (
    <div className={`min-h-screen bg-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <img 
            src="/images/spot-corporativo.webp" 
            alt="Fondo spot corporativo" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDE2MDAgOTYwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5NjAiIGZpbGw9IiMxMTExMjEiLz48L3N2Zz4=';
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Space for content alignment */}
            <div className="h-4"></div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Aquí está el Contenido Corporativo Premium que leíste en el artículo
            </h1>
            
            {/* Subhead */}
            <div className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto text-center">
              <p className="mb-4">
                <span className="font-semibold">Listo en 5 días.</span> Convierte tu TV en una máquina de ventas 24/7.
              </p>
              <p className="mb-6">
                Sin editar videos tú mismo. Sin complicaciones. Sin estrés.
              </p>
              
              {showMoreText && (
                <div className="animate-fadeIn space-y-4 mt-6">
                  <p className="text-2xl font-bold text-orange-400">
                    Solo $120 USD (pago único) y tu pantalla vende tus postres
                  </p>
                  <p className="text-xl">
                    más rentables sin que tengas que hacer nada.
                  </p>
                </div>
              )}
              
              <button 
                onClick={() => setShowMoreText(!showMoreText)}
                className="mt-4 text-orange-300 hover:text-white font-medium text-sm inline-flex items-center group transition-colors"
              >
                {showMoreText ? 'Mostrar menos' : 'Seguir leyendo'}
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMoreText ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Main CTA Button */}
            <div className="flex flex-col items-center">
              <Button 
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 sm:py-5 sm:px-8 text-sm sm:text-base md:text-lg rounded-full shadow-xl transform transition-all hover:scale-105 mb-8 w-full max-w-[300px] sm:max-w-none sm:w-auto text-center"
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="block sm:inline">Contenido Premium</span> <span className="block sm:inline">$120 USD</span>
                </a>
              </Button>
              
              {/* Micro-copy */}
              <div className="space-y-2 text-center text-gray-300 text-sm mb-8">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Listo en 5 días laborables</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Pago único (lo usas para siempre)</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>3-4 horas de contenido rotativo</span>
                </div>
              </div>
              
              {/* Secondary CTA */}
              <div className="mt-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-white font-medium inline-flex items-center group transition-colors"
                >
                  ¿Necesitas ver ejemplos de lo que creamos? Ver galería de trabajos
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Recordatorio del Problema */}
      <section id="problema" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recapitulemos: El contenido amateur que no vende
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 border border-gray-100">
              <p className="text-gray-600 mb-8 text-center text-lg font-medium">
                En el artículo viste que:
              </p>
              
              {/* Mobile Slider */}
              <div className="md:hidden">
                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="pb-10"
                >
                  <SwiperSlide>
                    <div className="flex flex-col h-full gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                        📺
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Tu TV debe ser tu mejor vendedor</h3>
                        <p className="text-gray-600">Cada minuto sin un postre en pantalla es dinero que no entra.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex flex-col h-full gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                        🎥
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">El video del sobrino no funciona</h3>
                        <p className="text-gray-600">Sin estrategia de venta, sin rotación, sin calidad profesional = cero impacto.</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex flex-col h-full gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                        🧠
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">La neuro-venta visual es real</h3>
                        <p className="text-gray-600">Ver el cheesecake cada 5 minutos programa el deseo. El cliente lo pide "sin pensar".</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Desktop Stack */}
              <div className="hidden md:block space-y-6">
                <div className="flex flex-col md:flex-row gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                    📺
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Tu TV debe ser tu mejor vendedor</h3>
                    <p className="text-gray-600">Cada minuto sin un postre en pantalla es dinero que no entra.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                    🎥
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">El video del sobrino no funciona</h3>
                    <p className="text-gray-600">Sin estrategia de venta, sin rotación, sin calidad profesional = cero impacto.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">La neuro-venta visual es real</h3>
                    <p className="text-gray-600">Ver el cheesecake cada 5 minutos programa el deseo. El cliente lo pide "sin pensar".</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold text-blue-800">Las estrategias 1, 2 y 4</span> del artículo cubren plataforma legal, juegos y reseñas.
                </p>
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-orange-600">Pero la Estrategia #1b (esta)</span> convierte tu pantalla en un vendedor silencioso que trabaja 24/7.
                </p>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Deja que el contenido profesional haga el trabajo de venta.
                </h3>
                <p className="text-xl text-gray-600">
                  Tú te enfocas en cocinar. Tu TV se encarga de antojar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cómo Funciona */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De tu menú a contenido que vende en 5 días
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y efectivo para transformar tus productos en un poderoso vendedor 24/7
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Linea de tiempo */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Paso 1 */}
            <div className="relative mb-16 md:mb-24">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    DÍA 1: BRIEF ESTRATÉGICO
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Nos cuentas sobre tus productos</h3>
                  <p className="text-gray-600 mb-4">
                    Identificamos juntos tus 5 productos más rentables o que quieras promocionar.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 inline-block">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Nos envías:</span> Fotos/videos desde tu celular (no necesitan ser profesionales)
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/12 flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div className="md:hidden w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <div className="md:w-5/12">
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <h4 className="font-bold text-gray-800 mb-3">Ejemplo de productos que funcionan:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900">Postres premium con alto margen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900">Especialidades de la casa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-900">Productos con presentación visual atractiva</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative mb-16 md:mb-24">
              <div className="md:flex flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    DÍA 2-4: NOSOTROS PRODUCIMOS
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformamos tu material en contenido profesional</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      '📹 Edición profesional con corrección de color',
                      '🎵 Música ambiente con licencia',
                      '✍️ Textos con precios y nombres',
                      '🎨 Branding con tu logo y colores',
                      '⏱️ Videos de 15-30 segundos',
                      '🔄 3-4 horas de contenido rotativo'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-2">{item.split(' ')[0]}</span>
                        <span className="text-gray-700">{item.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block md:w-1/12 flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div className="md:hidden w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <div className="md:w-5/12">
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 mb-3">Ejemplo de mejora:</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Antes</span>
                      <span className="text-sm font-medium text-blue-600">Después</span>
                    </div>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full w-1/3"></div>
                      <div className="absolute right-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-full"></div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      <p>De videos caseros a contenido profesional que vende</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    DÍA 5: ENTREGA Y ACTIVACIÓN
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tu pantalla se convierte en tu mejor vendedor</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Recibes el paquete completo por Drive</p>
                        <p className="text-sm text-gray-500">Videos listos para usar en cualquier pantalla</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Soporte para configurar en tu TV</p>
                        <p className="text-sm text-gray-500">Te guiamos paso a paso</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-4">
                      <p className="font-medium text-green-800">
                        RESULTADO: Cliente ve el producto → Se antoja → Lo pide → Aumenta tu ticket promedio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/12 flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div className="md:hidden w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <div className="md:w-5/12">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-800 mb-3">Beneficios inmediatos:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <span className="text-gray-900">Aumento en ventas de productos con mayor margen</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-900">Ahorro de tiempo en creación de contenido</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        <span className="text-gray-900">Continuidad en tu estrategia de marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para convertir tu TV en tu mejor vendedor?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              En solo 5 días tendrás contenido profesional que trabaje para ti las 24 horas.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto rounded-full shadow-xl transform transition-all hover:scale-105"
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quiero mi contenido premium
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección: Qué Incluye el Servicio */}
      <section id="que-incluye" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué incluye el servicio?
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para que tu pantalla se convierta en tu mejor vendedor
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="paquete" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger 
                  value="paquete" 
                  className="data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-md flex items-center gap-2 text-gray-900"
                >
                  <Package className="w-4 h-4" />
                  <span className="hidden sm:inline">Paquete de Contenido</span>
                  <span className="sm:hidden">Contenido</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="proceso" 
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md flex items-center gap-2 text-gray-900"
                >
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Proceso de Producción</span>
                  <span className="sm:hidden">Proceso</span>
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Paquete de Contenido */}
              <TabsContent value="paquete" className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  ¿Qué recibes exactamente por $120 USD?
                </h3>
                
                <div className="space-y-12">
                  {/* Slider para móviles */}
                  <div className="md:hidden">
                    <Swiper
                      slidesPerView={1.1}
                      spaceBetween={16}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="pb-10 px-1"
                    >
                      {/* Card 1: Productos Destacados */}
                      <SwiperSlide>
                        <div className="bg-orange-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-orange-700 text-lg flex items-center gap-2 mb-3">
                            <Package className="w-5 h-5" />
                            PRODUCTOS DESTACADOS
                          </h4>
                          <p className="text-gray-700">Los platillos o postres que más te conviene vender:</p>
                          <ul className="mt-3 space-y-2">
                            {['🍰 Postres premium (alta rentabilidad)', '☕ Bebidas signature', '🍝 Platos estrella', '🎉 Promociones especiales'].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>

                      {/* Card 2: Incluye */}
                      <SwiperSlide>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 h-full">
                          <h5 className="font-semibold text-gray-900 mb-3">Cada video incluye:</h5>
                          <div className="space-y-3">
                            {[
                              { icon: '📝', text: 'Nombre del producto' },
                              { icon: '💰', text: 'Precio visible' },
                              { icon: '🔄', text: 'Call-to-action sutil' },
                              { icon: '⏱️', text: '15-30 segundos' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start bg-gray-50 p-2 rounded-lg">
                                <span className="text-xl mr-2">{item.icon}</span>
                                <span className="text-gray-800 text-sm">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* Card 3: Contenido Ambiente */}
                      <SwiperSlide>
                        <div className="bg-blue-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-blue-700 text-lg flex items-center gap-2 mb-3">
                            <Film className="w-5 h-5" />
                            CONTENIDO AMBIENTE
                          </h4>
                          <p className="text-gray-700">Videos genéricos que refuerzan tu marca:</p>
                          <ul className="mt-3 space-y-2">
                            {['🎵 Clips musicales con licencia', '🏷️ Tu logo animado', '📸 Fotos del ambiente', '🌟 Valores de marca'].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-800 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>

                      {/* Card 4: Formato de Entrega */}
                      <SwiperSlide>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 h-full">
                          <h5 className="font-semibold text-gray-900 mb-3">FORMATO DE ENTREGA</h5>
                          <div className="space-y-3">
                            {[
                              { text: 'Archivos en 1080p' },
                              { text: 'Compatible con cualquier TV' },
                              { text: 'Lista de reproducción lista' },
                              { text: 'Respaldo en Google Drive' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-800 text-sm">{item.text}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm font-medium text-green-800">
                              <span className="font-bold">Total:</span> 3-4 horas de video
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* Versión escritorio */}
                  <div className="hidden md:block">
                    {/* Productos Destacados */}
                    <div className="md:flex gap-8">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-bold text-orange-700 text-lg flex items-center gap-2 mb-3">
                            <Package className="w-5 h-5" />
                            PRODUCTOS DESTACADOS
                          </h4>
                          <p className="text-gray-700">Los platillos o postres que más te conviene vender:</p>
                          <ul className="mt-3 space-y-2">
                            {['🍰 Postres premium (alta rentabilidad)', '☕ Bebidas signature', '🍝 Platos estrella', '🎉 Promociones especiales'].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h5 className="font-semibold text-gray-900 mb-3">Cada video incluye:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { icon: '📝', text: 'Nombre del producto' },
                            { icon: '💰', text: 'Precio visible' },
                            { icon: '🔄', text: 'Call-to-action sutil' },
                            { icon: '⏱️', text: '15-30 segundos por producto' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                              <span className="text-xl mr-2">{item.icon}</span>
                              <span className="text-gray-800">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contenido Ambiente */}
                    <div className="md:flex gap-8 mt-12">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-blue-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-blue-700 text-lg flex items-center gap-2 mb-3">
                            <Film className="w-5 h-5" />
                            CONTENIDO AMBIENTE (2-3 horas)
                          </h4>
                          <p className="text-gray-700">Videos genéricos que refuerzan tu marca:</p>
                          <ul className="mt-3 space-y-2">
                            {['🎵 Clips musicales con licencia', '🏷️ Tu logo animado', '📸 Fotos del ambiente', '🌟 Valores de marca'].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
                          <h5 className="font-semibold text-gray-900 mb-4">FORMATO DE ENTREGA</h5>
                          <div className="space-y-3">
                            {[
                              { text: 'Archivos en alta resolución (1080p)' },
                              { text: 'Formato compatible con cualquier TV' },
                              { text: 'Lista de reproducción lista para usar' },
                              { text: 'Respaldo en Google Drive (acceso de por vida)' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-800">{item.text}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                            <p className="font-medium text-green-800">
                              <span className="font-bold">Total de contenido:</span> 3-4 horas de video rotativo
                            </p>
                            <p className="text-green-700 mt-2">
                              <span className="font-semibold">Ventaja:</span> Nunca se repite el mismo video dos veces seguidas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tab 2: Proceso de Producción */}
              <TabsContent value="proceso" className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  ¿Cómo trabajamos tu contenido?
                </h3>
                
                <div className="space-y-12">
                  {/* Slider para móviles */}
                  <div className="md:hidden">
                    <Swiper
                      slidesPerView={1.1}
                      spaceBetween={16}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="pb-10 px-1"
                    >
                      {/* Card 1: Fase 1 - Captura */}
                      <SwiperSlide>
                        <div className="bg-orange-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-orange-700 text-lg flex items-center gap-2 mb-3">
                            <Camera className="w-5 h-5" />
                            FASE 1: CAPTURA (Tu parte)
                          </h4>
                          <p className="text-gray-700 mb-3">Nos envías material desde tu celular:</p>
                          <ul className="space-y-2 mb-4">
                            {[
                              'Fotos en buena luz de tus productos',
                              'Videos cortos (5-10 segundos)',
                              'Logo en PNG o JPG',
                              'Colores corporativos'
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-800 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100">
                            <p className="font-semibold text-orange-700 mb-2 text-sm">No necesitas:</p>
                            <ul className="space-y-1">
                              {['Cámara profesional', 'Iluminación de estudio', 'Experiencia en video'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600 text-sm">
                                  <X className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="text-xs text-orange-700 mt-2 font-medium">¡Nosotros mejoramos todo!</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* Card 2: Fase 2 - Producción */}
                      <SwiperSlide>
                        <div className="bg-blue-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-blue-700 text-lg flex items-center gap-2 mb-3">
                            <Settings className="w-5 h-5" />
                            FASE 2: PRODUCCIÓN
                          </h4>
                          <p className="text-gray-700 mb-3">Un editor profesional trabaja tu material:</p>
                          
                          <div className="space-y-3">
                            {[
                              '🎨 Corrección de color profesional',
                              '✏️ Textos y tipografía personalizada',
                              '🏷️ Inclusión de logo y marca',
                              '🎵 Música con licencia',
                              '⏱️ Ritmo de venta optimizado'
                            ].map((item, index) => (
                              <div key={index} className="bg-white p-2 rounded border border-blue-100 text-sm text-gray-900">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* Card 3: Fase 3 - Entrega */}
                      <SwiperSlide>
                        <div className="bg-green-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-green-700 text-lg mb-3">
                            FASE 3: ENTREGA
                          </h4>
                          <p className="text-gray-700 mb-3">Recibes:</p>
                          
                          <div className="space-y-2 mb-4">
                            {[
                              '📂 Carpeta con videos finales',
                              '▶️ Lista de reproducción',
                              '📱 Instrucciones de uso',
                              '🛠️ Soporte técnico'
                            ].map((item, index) => (
                              <div key={index} className="flex items-center bg-white p-2 rounded border border-green-100">
                                <span className="text-sm text-gray-900">{item}</span>
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded border border-gray-200">
                              <p className="font-semibold text-gray-900 text-sm">Tu tiempo:</p>
                              <p className="text-gray-700 text-xs">30 minutos aprox.</p>
                            </div>
                            <div className="bg-white p-3 rounded border border-gray-200">
                              <p className="font-semibold text-gray-900 text-sm">Nuestro trabajo:</p>
                              <p className="text-gray-700 text-xs">4-5 días</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* Versión escritorio */}
                  <div className="hidden md:block">
                    <div className="md:flex gap-8 items-start">
                      <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="bg-orange-50 p-4 rounded-lg h-full">
                          <h4 className="font-bold text-orange-700 text-lg flex items-center gap-2 mb-3">
                            <Camera className="w-5 h-5" />
                            FASE 1: CAPTURA (Tu parte)
                          </h4>
                          <p className="text-gray-700 mb-3">Nos envías material desde tu celular:</p>
                          <ul className="space-y-2 mb-4">
                            {[
                              'Fotos en buena luz de tus productos',
                              'Videos cortos (5-10 segundos) de preparación',
                              'Tu logo en formato PNG o JPG',
                              'Colores corporativos (si los tienes)'
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded border border-orange-100">
                            <p className="font-semibold text-orange-700 mb-2">No necesitas:</p>
                            <ul className="space-y-1">
                              {['Cámara profesional', 'Iluminación de estudio', 'Experiencia en video'].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                  <X className="w-4 h-4 text-red-500 mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="text-sm text-orange-700 mt-2 font-medium">¡Nosotros mejoramos todo!</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        {/* Fase 2 */}
                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                          <h4 className="font-bold text-blue-700 text-lg flex items-center gap-2 mb-4">
                            <Settings className="w-5 h-5" />
                            FASE 2: PRODUCCIÓN (Nuestra parte)
                          </h4>
                          <p className="text-gray-700 mb-4">Un editor profesional trabaja tu material:</p>
                          
                          <div className="space-y-6">
                            {[
                              {
                                title: 'Corrección de Color',
                                description: 'Hacemos que la comida se vea irresistible (más saturación, contraste, calidez).'
                              },
                              {
                                title: 'Composición',
                                description: 'Agregamos textos overlay con tipografía que combina con tu marca: nombre del producto, precio y call-to-action.'
                              },
                              {
                                title: 'Branding Visual',
                                description: 'Tu logo aparece discretamente en esquina o intro/outro.'
                              },
                              {
                                title: 'Música Ambiente',
                                description: 'Seleccionamos música con licencia (cero riesgo legal) que coincide con tu ambiente.'
                              },
                              {
                                title: 'Ritmo de Venta',
                                description: 'Cada 5-7 minutos aparece un producto. Esto programa el cerebro del cliente sin saturar.'
                              }
                            ].map((item, index) => (
                              <div key={index} className="bg-white p-4 rounded-lg border border-blue-100">
                                <h5 className="font-semibold text-gray-900 mb-1">{item.title}</h5>
                                <p className="text-gray-900">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Fase 3 */}
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                          <h4 className="font-bold text-green-800 text-lg mb-4">FASE 3: ENTREGA (Resultado final)</h4>
                          <p className="text-gray-700 mb-4">Recibes:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                              'Carpeta con todos los videos individuales',
                              'Lista de reproducción pre-armada',
                              'Instrucciones de cómo subirlo a tu TV',
                              'Soporte técnico para instalación'
                            ].map((item, index) => (
                              <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-green-100">
                                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-800">{item}</span>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <p className="font-semibold text-gray-900">Tiempo de tu inversión:</p>
                              <p className="text-gray-700">30 minutos (tomar fotos + revisión final).</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <p className="font-semibold text-gray-900">Tiempo de nuestro trabajo:</p>
                              <p className="text-gray-700">4-5 días de edición profesional.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* SECCIÓN 5: INSTALACIÓN */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              INSTALACIÓN <span className="text-orange-600">(Ultra Simple)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Configuración rápida y sin complicaciones para que tu contenido esté listo en minutos
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            {/* Versión móvil con pestañas */}
            <div className="md:hidden">
              <Tabs defaultValue="necesitas" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
                  <TabsTrigger 
                    value="necesitas" 
                    className="data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm flex items-center gap-2 text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Lo que necesitas</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="hacemos" 
                    className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm flex items-center gap-2 text-gray-900"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Lo que hacemos</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="necesitas" className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                  <div className="space-y-4">
                    {[
                      {
                        icon: '📱',
                        title: 'Celular con cámara',
                        desc: '(para fotos/videos)'
                      },
                      {
                        icon: '🏷️',
                        title: 'Logo de tu marca',
                        desc: '(envías por WhatsApp)'
                      },
                      {
                        icon: '📋',
                        title: 'Lista de 5-8 productos',
                        desc: 'a destacar'
                      },
                      {
                        icon: '⏱️',
                        title: '30 minutos de tu tiempo',
                        desc: 'total para todo el proceso'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start bg-white/50 p-4 rounded-lg">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="hacemos" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="space-y-4">
                    {[
                      {
                        icon: '✂️',
                        title: 'Editamos todo el material',
                        desc: 'con calidad profesional'
                      },
                      {
                        icon: '🎨',
                        title: 'Diseñamos textos overlay',
                        desc: 'que destacan tus productos'
                      },
                      {
                        icon: '🎵',
                        title: 'Agregamos música con licencia',
                        desc: 'que se adapta a tu marca'
                      },
                      {
                        icon: '🎨',
                        title: 'Aplicamos corrección de color',
                        desc: 'profesional a todo el material'
                      },
                      {
                        icon: '🔄',
                        title: 'Creamos 3-4 horas de contenido',
                        desc: 'rotativo y atractivo'
                      },
                      {
                        icon: '💻',
                        title: 'Soporte para instalación',
                        desc: 'remota en tu TV o pantallas'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start bg-white/50 p-4 rounded-lg">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Versión escritorio con dos columnas */}
            <div className="hidden md:flex">
              {/* Columna 1: Lo que tú necesitas */}
              <div className="w-1/2 p-6 md:p-8 bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Lo que TÚ necesitas
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: '📱',
                      title: 'Celular con cámara',
                      desc: '(para fotos/videos)'
                    },
                    {
                      icon: '🏷️',
                      title: 'Logo de tu marca',
                      desc: '(envías por WhatsApp)'
                    },
                    {
                      icon: '📋',
                      title: 'Lista de 5-8 productos',
                      desc: 'a destacar'
                    },
                    {
                      icon: '⏱️',
                      title: '30 minutos de tu tiempo',
                      desc: 'total para todo el proceso'
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 2: Lo que nosotros hacemos */}
              <div className="w-1/2 p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Lo que NOSOTROS hacemos
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: '✂️',
                      title: 'Editamos todo el material',
                      desc: 'con calidad profesional'
                    },
                    {
                      icon: '🎨',
                      title: 'Diseñamos textos overlay',
                      desc: 'que destacan tus productos'
                    },
                    {
                      icon: '🎵',
                      title: 'Agregamos música con licencia',
                      desc: 'que se adapta a tu marca'
                    },
                    {
                      icon: '🎨',
                      title: 'Aplicamos corrección de color',
                      desc: 'profesional a todo el material'
                    },
                    {
                      icon: '🔄',
                      title: 'Creamos 3-4 horas de contenido',
                      desc: 'rotativo y atractivo'
                    },
                    {
                      icon: '💻',
                      title: 'Soporte para instalación',
                      desc: 'remota en tu TV o pantallas'
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Aclaración Importante */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">
                  Importante: Producción Remota
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-green-700 mb-2">El precio de $120 USD incluye:</p>
                    <ul className="space-y-2">
                      {[
                        '✅ Edición profesional de tu material',
                        '✅ 3-4 horas de contenido final',
                        '✅ Branding completo (logo + colores)',
                        '✅ Música con licencia',
                        '✅ Soporte para instalación remota'
                      ].map((item, index) => (
                        <li key={`incluye-${index}`} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-800">{item.replace('✅', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-2">No incluye:</p>
                    <ul className="space-y-2">
                      {[
                        '❌ Sesión fotográfica profesional en tu local',
                        '❌ Visita física de un camarógrafo',
                        '❌ Filmación con equipo de estudio'
                      ].map((item, index) => (
                        <li key={`no-incluye-${index}"`} className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-800">{item.replace('❌', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 italic">
                  Trabajamos con tu material (celular) y lo convertimos en contenido profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.174.196-.347.223-.644.075-.297-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.76-1.66-2.06-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.446 7.443h-.016a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.554 0 11.89-5.335 11.89-11.889 0-3.18-1.261-6.19-3.553-8.466"/>
              </svg>
              Quiero mi contenido premium
            </a>
          </div>
        </div>

        {/* SECCIÓN 6: TIMELINE */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De la idea al contenido vendiendo en <span className="text-orange-600">5 días</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proceso rápido y efectivo para que tu contenido esté listo en tiempo récord
              </p>
            </div>

            <div className="relative">
              {/* Línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-blue-400 to-green-400 transform -translate-x-1/2"></div>
              
              {/* Móvil: Carrusel horizontal */}
              <div className="md:hidden">
                <Swiper
                  direction="horizontal"
                  slidesPerView={1.1}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    horizontalClass: 'swiper-pagination-horizontal',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                  }}
                  modules={[Pagination]}
                  className="w-full pb-12 px-4"
                  style={{
                    '--swiper-pagination-bullet-size': '8px',
                    '--swiper-pagination-bullet-horizontal-gap': '6px',
                    '--swiper-pagination-bottom': '0',
                    '--swiper-pagination-top': 'auto',
                    '--swiper-pagination-color': '#FF6B0'
                  } as React.CSSProperties}
                >
                  {[
                    {
                      day: 'DÍA 1',
                      title: 'Compra y Brief',
                      icon: '📅',
                      items: [
                        'Pagas $120 USD',
                        'Te enviamos cuestionario estratégico',
                        'Defines qué productos quieres destacar'
                      ],
                      color: 'from-orange-50 to-orange-100',
                      border: 'border-orange-200'
                    },
                    {
                      day: 'DÍA 2',
                      title: 'Captura',
                      icon: '📱',
                      items: [
                        'Tomas fotos/videos desde tu celular',
                        'Nos envías todo por WhatsApp',
                        'Revisamos y confirmamos material'
                      ],
                      color: 'from-blue-50 to-blue-100',
                      border: 'border-blue-200'
                    },
                    {
                      day: 'DÍAS 3-4',
                      title: 'Producción',
                      icon: '🎬',
                      items: [
                        'Editamos con corrección de color',
                        'Agregamos textos, precios y branding',
                        'Seleccionamos música ambiente',
                        'Creamos lista de reproducción estratégica'
                      ],
                      color: 'from-purple-50 to-purple-100',
                      border: 'border-purple-200'
                    },
                    {
                      day: 'DÍA 5',
                      title: 'Revisión',
                      icon: '✅',
                      items: [
                        'Te enviamos preview para aprobación',
                        'Hacemos ajustes finales si necesitas',
                        'Entregamos paquete completo en Drive'
                      ],
                      color: 'from-green-50 to-green-100',
                      border: 'border-green-200'
                    },
                    {
                      day: 'DÍA 6',
                      title: 'Activación',
                      icon: '🚀',
                      items: [
                        'Te ayudamos a subir contenido a tu TV',
                        'Probamos que todo funcione correctamente',
                        '¡Tu pantalla empieza a vender postres!'
                      ],
                      color: 'from-cyan-50 to-cyan-100',
                      border: 'border-cyan-200'
                    }
                  ].map((step, index) => (
                    <SwiperSlide key={index} className="h-auto pb-8">
                      <div className={`bg-gradient-to-br ${step.color} p-5 rounded-2xl border ${step.border} shadow-sm h-full`}>
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{step.icon}</span>
                          <div>
                            <span className="text-sm font-semibold text-gray-600">{step.day}</span>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <ul className="space-y-2 pl-2">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              <span className="text-gray-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop: Timeline */}
              <div className="hidden md:block space-y-12">
                {[
                  {
                    day: 'DÍA 1',
                    title: 'Compra y Brief',
                    icon: '📅',
                    items: [
                      'Pagas $120 USD',
                      'Te enviamos cuestionario estratégico',
                      'Defines qué productos quieres destacar'
                    ],
                    color: 'bg-orange-500',
                    bg: 'bg-orange-50',
                    border: 'border-orange-100'
                  },
                  {
                    day: 'DÍA 2',
                    title: 'Captura',
                    icon: '📱',
                    items: [
                      'Tomas fotos/videos desde tu celular',
                      'Nos envías todo por WhatsApp',
                      'Revisamos y confirmamos material'
                    ],
                    color: 'bg-blue-500',
                    bg: 'bg-blue-50',
                    border: 'border-blue-100',
                    right: false
                  },
                  {
                    day: 'DÍAS 3-4',
                    title: 'Producción',
                    icon: '🎬',
                    items: [
                      'Editamos con corrección de color',
                      'Agregamos textos, precios y branding',
                      'Seleccionamos música ambiente',
                      'Creamos lista de reproducción estratégica'
                    ],
                    color: 'bg-purple-500',
                    bg: 'bg-purple-50',
                    border: 'border-purple-100'
                  },
                  {
                    day: 'DÍA 5',
                    title: 'Revisión',
                    icon: '✅',
                    items: [
                      'Te enviamos preview para aprobación',
                      'Hacemos ajustes finales si necesitas',
                      'Entregamos paquete completo en Drive'
                    ],
                    color: 'bg-green-500',
                    bg: 'bg-green-50',
                    border: 'border-green-100',
                    right: false
                  },
                  {
                    day: 'DÍA 6',
                    title: 'Activación',
                    icon: '🚀',
                    items: [
                      'Te ayudamos a subir contenido a tu TV',
                      'Probamos que todo funcione correctamente',
                      '¡Tu pantalla empieza a vender postres!'
                    ],
                    color: 'bg-cyan-500',
                    bg: 'bg-cyan-50',
                    border: 'border-cyan-100'
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 p-6 rounded-2xl border ${step.border} ${step.bg} shadow-sm`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center text-xl mr-4`}>
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-600">{step.day}</span>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-2 pl-2">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {index < 4 && (
                      <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 text-gray-400">
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 md:mt-16 text-center bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Total de tu tiempo invertido:</span> 30-45 minutos.
                <br />
                <span className="text-gray-600">Todo lo demás es trabajo de edición profesional.</span>
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 mt-6 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.174.196-.347.223-.644.075-.297-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.76-1.66-2.06-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.446 7.443h-.016a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.554 0 11.89-5.335 11.89-11.889 0-3.18-1.261-6.19-3.553-8.466"/>
                </svg>
                Quiero mi contenido premium
              </a>
            </div>
          </div>
        </div>

        {/* SECCIÓN 7: PRICING */}
        <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tu inversión en contenido que vende: <span className="text-orange-600">$120 USD</span>
              </h2>
              <p className="text-xl text-gray-600">
                Pago único. Lo usas para siempre.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Encabezado */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Spot Corporativo Premium</h3>
                  <p className="text-orange-100">Todo lo que necesitas para destacar tus productos</p>
                </div>

                <div className="md:flex">
                  {/* Sección de Precio (Izquierda) */}
                  <div className="md:w-1/3 p-8 bg-gradient-to-b from-orange-50 to-white border-b md:border-b-0 md:border-r border-gray-100 flex flex-col">
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500">Inversión única de</span>
                      <div className="flex items-baseline mt-1">
                        <span className="text-5xl font-bold text-gray-900">$120</span>
                        <span className="ml-1 text-xl text-gray-600">USD</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-500 line-through">$150 USD</span>
                        <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                          ¡20% de descuento! 🎉
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <p className="text-sm text-gray-600 mb-6">
                        <CheckCircle className="inline-block w-4 h-4 text-green-500 mr-1" />
                        Pago único. Sin mensualidades.
                      </p>
                      
                      <a
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-xl text-base font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.174.196-.347.223-.644.075-.297-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.76-1.66-2.06-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.078 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.446 7.443h-.016a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.006c6.554 0 11.89-5.335 11.89-11.889 0-3.18-1.261-6.19-3.553-8.466"/>
                        </svg>
                        ¡Lo quiero ahora!
                      </a>
                    </div>
                  </div>

                  {/* Sección de Características (Derecha) */}
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Todo lo que incluye tu paquete:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { 
                          icon: <Camera className="w-5 h-5 text-orange-500" />, 
                          text: '5-8 videos de productos (15-30s)' 
                        },
                        { 
                          icon: <ClockIcon className="w-5 h-5 text-orange-500" />, 
                          text: '2-3 horas de contenido ambiente' 
                        },
                        { 
                          icon: <CheckCircle className="w-5 h-5 text-orange-500" />, 
                          text: 'Edición profesional + corrección de color' 
                        },
                        { 
                          icon: <MessageCircle className="w-5 h-5 text-orange-500" />, 
                          text: 'Textos overlay con precios' 
                        },
                        { 
                          icon: <Star className="w-5 h-5 text-orange-500" />, 
                          text: 'Branding completo (logo + colores)' 
                        },
                        { 
                          icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>, 
                          text: 'Música ambiente con licencia' 
                        },
                        { 
                          icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
                          text: 'Soporte para instalación remota' 
                        },
                        { 
                          icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>, 
                          text: 'Archivos de por vida en la nube' 
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 hover:bg-orange-50 rounded-lg transition-colors">
                          <div className="flex-shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ancla de Valor */}
              <div className="mt-10 p-6 bg-white rounded-2xl border border-orange-100 bg-orange-50">
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-3">¿Vale la pena la inversión?</h4>
                  <p className="text-gray-700 mb-4">
                    Un postre premium cuesta $8-12 USD.
                    <br />
                    Si vendes solo <span className="font-semibold">10 postres extra al mes</span> gracias al video = <span className="font-bold text-green-600">$100 USD/mes</span>.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <p className="font-medium text-gray-800">
                      <span className="text-orange-600 font-bold">Recuperas tu inversión en solo 5 semanas.</span>
                      <br />
                      <span className="text-gray-600">Después de eso, es pura ganancia.</span>
                    </p>
                    <p className="mt-3 text-gray-700 font-medium">
                      ¿Tiene sentido? Para nosotros sí. 😉
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 8: COMPARACIÓN */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Video del Sobrino vs. <span className="text-orange-600">Contenido Estratégico</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Encabezado de la tabla */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-6 md:p-8 text-center bg-red-50">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Video Amateur</h3>
                  <p className="text-red-600 font-medium">(Gratis)</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-green-50">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Contenido Premium</h3>
                  <p className="text-green-600 font-medium">($120 USD)</p>
                </div>
              </div>

              {/* Filas de comparación */}
              <div className="divide-y divide-gray-200">
                {[
                  {
                    amateur: '❌ Una sola toma aburrida que nadie mira',
                    premium: '✅ 3-4 horas de contenido rotativo'
                  },
                  {
                    amateur: '❌ Sin estrategia de venta (solo decoración)',
                    premium: '✅ Productos cada 5-7 min (neuro-venta)'
                  },
                  {
                    amateur: '❌ Iluminación y color apagados',
                    premium: '✅ Corrección profesional (comida irresistible)'
                  },
                  {
                    amateur: '❌ Sin precios, sin CTA',
                    premium: '✅ Precio visible + CTA claro'
                  },
                  {
                    amateur: '❌ Sin soporte ni actualizaciones',
                    premium: '✅ Actualizaciones cuando cambies el menú'
                  },
                  {
                    amateur: <span className="text-red-600 font-semibold">💸 Gratis pero inútil</span>,
                    premium: <span className="text-green-600 font-semibold">💰 $120 que se paga solo</span>
                  }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="p-4 md:p-6 flex items-center">
                      <p className="text-gray-700">{item.amateur}</p>
                    </div>
                    <div className="p-4 md:p-6 flex items-center bg-gray-50 md:bg-transparent">
                      <p className="text-gray-800 font-medium">{item.premium}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pie de tabla */}
              <div className="p-6 bg-gradient-to-r from-orange-50 to-white text-center">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">¿Cuánto cuesta no vender?</span> El contenido amateur te está costando clientes todos los días.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Quiero el contenido premium
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 9: GARANTÍA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Garantía de satisfacción: <span className="text-orange-600">Revisiones ilimitadas</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No te entregamos hasta que estés 100% satisfecho con el resultado. Si algo no te gusta, lo ajustamos sin costo adicional.
              </p>
            </div>

            {/* Tarjetas de garantía - Versión móvil (Slider) */}
            <div className="md:hidden mb-12">
              <Swiper
                slidesPerView={1.1}
                spaceBetween={16}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="pb-10"
              >
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Entrega en 5 días</h3>
                    <p className="text-gray-600 text-center">
                      O te lo hacemos gratis. Sin letra chica, sin excusas.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">🛡</span>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Revisiones incluidas</h3>
                    <p className="text-gray-600 text-center">
                      Hasta que estés completamente satisfecho con el resultado final.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Soporte instalación</h3>
                    <p className="text-gray-600 text-center">
                      Te ayudamos con la configuración inicial para que todo funcione perfecto.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Tarjetas de garantía - Versión escritorio */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* Tarjeta 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Entrega en 5 días</h3>
                <p className="text-gray-600 text-center">
                  O te lo hacemos gratis. Sin letra chica, sin excusas.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Revisiones incluidas</h3>
                <p className="text-gray-600 text-center">
                  Hasta que estés completamente satisfecho con el resultado final.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Soporte instalación</h3>
                <p className="text-gray-600 text-center">
                  Te ayudamos con la configuración inicial para que todo funcione perfecto.
                </p>
              </div>
            </div>

            {/* Sección de explicación */}
            <div className="bg-orange-50 rounded-2xl p-8 md:p-10 border border-orange-100 max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 inline-flex">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Cómo funciona nuestra garantía?</h3>
              
              <ul className="space-y-4 text-gray-700 max-w-2xl mx-auto mb-8">
                <li className="flex justify-center items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Incluye hasta <span className="font-semibold">2 rondas de revisión</span> antes de la entrega final</span>
                </li>
                <li className="flex justify-center items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Modificaciones sin costo adicional durante el proceso</span>
                </li>
                <li className="flex justify-center items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Equipo de soporte disponible para resolver tus dudas</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Quiero mi contenido con garantía
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 10: CTA FINAL */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white -mt-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Decides hoy. Tu TV empieza a vender mañana.
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            </div>

            {/* Tabla de Comparación */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-16">
              {/* Versión Móvil con Tabs */}
              <div className="md:hidden">
                <Tabs defaultValue="negativo" className="w-full">
                  <TabsList className="flex flex-row justify-center space-x-2 bg-white p-4">
                    <TabsTrigger 
                      value="negativo" 
                      className="data-[state=active]:bg-red-600 data-[state=active]:text-white border-2 border-red-200 bg-red-50 text-red-600 py-2 px-4 text-sm font-medium rounded-full transition-all"
                    >
                      Sin SPOT
                    </TabsTrigger>
                    <TabsTrigger 
                      value="positivo" 
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white border-2 border-green-200 bg-green-50 text-green-600 py-2 px-4 text-sm font-medium rounded-full transition-all"
                    >
                      Con SPOT
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="negativo" className="p-6">
                    <div className="space-y-6">
                      {[
                        '😰 Tu TV es pura decoración inútil',
                        '💣 Nadie mira la pantalla porque es aburrida',
                        '📉 Pierdes ventas de postres cada día',
                        '💸 Tu TV no genera ningún ROI'
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="positivo" className="p-6">
                    <div className="space-y-6">
                      {[
                        '😌 Tu TV es tu mejor vendedor 24/7',
                        '🎯 El cliente ve el cheesecake y lo antoja',
                        '📈 Subes ticket promedio sin esfuerzo',
                        '💰 Inviertes $120 una vez y recuperas en 5 sem.'
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-green-50 rounded-lg">
                          <p className="text-gray-800 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Versión Escritorio */}
              <div className="hidden md:block">
                {/* Encabezados */}
                <div className="grid grid-cols-2 divide-x divide-gray-200">
                  <div className="p-6 md:p-8 text-center bg-red-50">
                    <h3 className="text-xl font-bold text-red-700 mb-2">Sin Contenido Estratégico</h3>
                  </div>
                  <div className="p-6 md:p-8 text-center bg-green-50">
                    <h3 className="text-xl font-bold text-green-700 mb-2">Con Spot Corporativo</h3>
                  </div>
                </div>

                {/* Filas de comparación */}
                <div className="divide-y divide-gray-200">
                  {[
                    {
                      negativo: '😰 Tu TV es pura decoración inútil',
                      positivo: '😌 Tu TV es tu mejor vendedor 24/7'
                    },
                    {
                      negativo: '💣 Nadie mira la pantalla porque es aburrida',
                      positivo: '🎯 El cliente ve el cheesecake y lo antoja'
                    },
                    {
                      negativo: '📉 Pierdes ventas de postres cada día',
                      positivo: '📈 Subes ticket promedio sin esfuerzo'
                    },
                    {
                      negativo: '💸 Tu TV no genera ningún ROI',
                      positivo: '💰 Inviertes $120 una vez y recuperas en 5 sem.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="grid grid-cols-2 divide-x divide-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="p-4 md:p-6 flex items-center justify-center text-center">
                        <p className="text-gray-700">{item.negativo}</p>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center text-center">
                        <p className="text-gray-800 font-medium">{item.positivo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
              <div className="p-8 md:p-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  SÍ, QUIERO QUE MI TV VENDA MIS POSTRES
                </h3>
                
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20quiero%20mi%20contenido%20corporativo%20premium&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full max-w-md px-8 py-5 text-lg font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-8"
                >
                  Crear mi Contenido Premium por $120 USD
                </a>
                
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Pago único, lo usas para siempre</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Listo en 5 días</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Revisiones hasta aprobar</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-500 mt-8">
                  Al hacer clic serás redirigido a un formulario seguro. Tiempo de compra: 2 minutos.
                </p>
                <p className="text-sm text-gray-500">
                  Métodos de pago: Tarjeta, PayPal, Transferencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 12: CTA ALTERNATIVO */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50 -mt-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Aún tienes dudas? <span className="text-green-600">Hablemos</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Entendemos que cada restaurante tiene una identidad visual única.
                <br className="hidden md:block" />
                Si quieres hablar de tu caso específico antes de decidir, estamos aquí para ti.
              </p>
              
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20César,%20tengo%20una%20consulta%20sobre%20el%20spot%20corporativo&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:py-5 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.05 4.91a10 10 0 00-7.6-2.9 9.99 9.99 0 00-10 10 9.93 9.93 0 001.03 4.51l-1.1 4.04 4.14-1.06a10 10 0 004.53 1.09 10 10 0 009.4-14.68zm-8.3 12.7a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.8.83-3.05-.2-.32a8.25 8.25 0 1115.3 4.4 8.2 8.2 0 01-8.33 6.5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 7.5a.75.75 0 01.75.75v3.75h3a.75.75 0 010 1.5h-3.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                Hablar con un Asesor
                <span className="ml-2 text-sm font-normal bg-white/20 px-2 py-0.5 rounded-full">
                  Respuesta en 1h
                </span>
              </a>
              
              <p className="mt-4 text-sm text-gray-500">
                Horario de atención: Lunes a Viernes de 9:00 a 18:00
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
