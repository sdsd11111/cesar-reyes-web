'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ZonaGamerPersonalizada() {
  // Estados para manejar las pestañas activas
  const [activeTab, setActiveTab] = useState('problema');
  const [gamesTab, setGamesTab] = useState('juegos');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 1: false, 2: false, 3: false });
  const [showFullHeroText, setShowFullHeroText] = useState(false);

  // Estados para secciones desplegables
  const [showFullQrText, setShowFullQrText] = useState(false);

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  // Componentes personalizados para las flechas de navegación
  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onClick}
      >
        <ChevronRight className="text-gray-700" />
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: 'rgba(0, 0, 0, 0.1)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
        onClick={onClick}
      >
        <ChevronLeft className="text-gray-700" />
      </div>
    );
  }
  const [showFullCatalogText, setShowFullCatalogText] = useState(false);
  const [showFullResults, setShowFullResults] = useState(false);

  // Efecto para el desplazamiento suave
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (!targetId || targetId === '#') return;

        // Aseguramos que targetId es string
        const selector = targetId as string;

        try {
          const targetElement = document.querySelector(selector);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (error) {
          console.error('Error al hacer scroll:', error);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Fullscreen */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
        {/* Background Image/GIF */}
        <div className="absolute inset-0 z-0">
          {/* Replace with your actual image/GIF path */}
          <div
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('/images/zona-gamer/hero-bg.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          {/* Main Heading - Centered */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-center">
            Aquí está la Zona Gamer Personalizada que leíste en el artículo
          </h1>

          {/* Subhead */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200">
              Instalada por nuestro equipo en 48 horas. Convierte la espera en diversión familiar.
            </p>

            {!showFullHeroText && (
              <button
                onClick={() => setShowFullHeroText(true)}
                className="mt-4 text-orange-300 hover:text-orange-400 font-medium text-lg flex items-center justify-center mx-auto transition-colors duration-200"
              >
                Seguir leyendo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            {showFullHeroText && (
              <div className="mt-4 text-lg text-gray-200 animate-fadeIn">
                <p>Sin apps que descargar. Sin complicaciones. Sin estrés.</p>
                <p className="mt-2">
                  Solo un pago de <span className="text-orange-400 font-bold">$120 USD</span> y el "silencio digital" de tu restaurante desaparece para siempre.
                </p>
                <button
                  onClick={() => setShowFullHeroText(false)}
                  className="mt-3 text-orange-300 hover:text-orange-400 font-medium text-base flex items-center justify-center mx-auto transition-colors duration-200"
                >
                  Mostrar menos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-12">
            {/* Main CTA */}
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base md:text-xl font-bold px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto text-center whitespace-nowrap overflow-hidden text-ellipsis"
              size="lg"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block overflow-hidden text-ellipsis"
              >
                Instalar Zona Gamer - $120 USD
              </a>
            </Button>

            {/* Micro-copy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-200 text-sm mt-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Instalado por nosotros en 48 horas</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Pago único (no mensualidades)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>5–6 juegos incluidos</span>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="pt-4">
              <Button
                variant="link"
                className="text-orange-300 hover:text-orange-200 text-sm sm:text-base font-medium group text-center w-full sm:w-auto px-0"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer')}
              >
                <div className="flex flex-col sm:flex-row items-center">
                  <span className="block sm:inline">¿Necesitas ver los juegos incluidos?</span>
                  <span className="mt-1 sm:mt-0 sm:ml-2 group-hover:translate-y-0.5 transition-transform inline-flex items-center">
                    Ver catálogo completo <span className="ml-1">↓</span>
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Recordatorio del Problema */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              El "silencio digital" que mata el ambiente
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transforma la experiencia de espera en momentos memorables para tus clientes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap border-b border-gray-200">
              {[
                { id: 'problema', label: 'El Problema', icon: '🔍' },
                { id: 'impacto', label: 'El Impacto', icon: '📉' },
                { id: 'solucion', label: 'La Solución', icon: '✨' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-lg flex items-center transition-all ${activeTab === tab.id
                    ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <span className="mr-2 text-xl">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* Problema Tab */}
              {activeTab === 'problema' && (
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '⏳',
                      title: 'Espera Inevitable',
                      description: 'La espera operativa es un hecho en la restauración (cocina, imprevistos, sábados a tope).'
                    },
                    {
                      icon: '📱',
                      title: 'Aislamiento Digital',
                      description: 'Grupos enteros sumergidos en sus teléfonos, desconectados del entorno y de sus acompañantes.'
                    },
                    {
                      icon: '😐',
                      title: 'Experiencia Olvidable',
                      description: 'Sin interacciones memorables, los clientes se van sin una historia que contar.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg h-full transform transition-all hover:scale-105 hover:shadow-md">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Impacto Tab */}
              {activeTab === 'impacto' && (
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-800 mb-3">El impacto real en tu negocio</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-900">Clientes insatisfechos a pesar de la buena comida</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-900">Menor tiempo de permanencia en el local</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-900">Pocas recomendaciones y reseñas espontáneas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 mb-4">
                      <span className="font-semibold">Las estrategias tradicionales</span> (TV, fotos, reseñas) ayudan, pero no resuelven el problema de raíz.
                    </p>
                    <p className="text-blue-900 font-medium">
                      Necesitas una solución que <span className="text-orange-500 font-bold">genere conexiones reales</span> entre tus clientes.
                    </p>
                  </div>
                </div>
              )}

              {/* Solución Tab */}
              {activeTab === 'solucion' && (
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl mb-8">
                    <h3 className="text-2xl font-bold mb-4">La Zona Gamer Personalizada</h3>
                    <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                      Convierte el tiempo de espera en una experiencia divertida y memorable que tus clientes querrán repetir.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-4">🎯</div>
                      <h4 className="font-bold text-gray-900 mb-2">Para tus clientes</h4>
                      <p className="text-gray-600">Diversión instantánea que fomenta la interacción y crea recuerdos positivos.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-4">🏆</div>
                      <h4 className="font-bold text-gray-900 mb-2">Para tu negocio</h4>
                      <p className="text-gray-600">Mayor satisfacción del cliente, más tiempo en el local y más recomendaciones.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cómo Funciona */}
      <section className="pt-4 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De un QR en la mesa a risas en 30 segundos
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          {/* Diagrama Visual */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-16 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              {/* Paso 1 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-blue-50 border border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <p className="font-semibold text-blue-800">El cliente se sienta</p>
                <p className="text-sm text-gray-600">Ve el QR en la mesa</p>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <ArrowRight className="text-gray-400 w-8 h-8" />
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-green-50 border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-semibold text-green-800">Escanen el QR</p>
                <p className="text-sm text-gray-600">Sin instalar nada</p>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <ArrowRight className="text-gray-400 w-8 h-8" />
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-purple-50 border border-purple-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🎮</span>
                </div>
                <p className="font-semibold text-purple-800">¡A jugar!</p>
                <p className="text-sm text-gray-600">Diversión garantizada</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg text-blue-700 mb-3">PASO 1: ESCANEO INSTANTÁNEO</h3>
                <div className="text-gray-700">
                  <p>El cliente escanea el QR desde su celular.</p>
                  {!showFullQrText ? (
                    <button
                      onClick={() => setShowFullQrText(true)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                    >
                      Seguir leyendo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <p className="mt-1">No hay apps, no hay registros, no hay fricción.</p>
                      <button
                        onClick={() => setShowFullQrText(false)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                      >
                        Mostrar menos
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg text-green-700 mb-3">PASO 2: SELECCIÓN DE JUEGO</h3>
                <div className="text-gray-700">
                  <p>Ve un catálogo visual con 5–6 juegos clásicos.</p>
                  {!showFullCatalogText ? (
                    <button
                      onClick={() => setShowFullCatalogText(true)}
                      className="text-green-600 hover:text-green-800 text-sm font-medium mt-1 flex items-center"
                    >
                      Seguir leyendo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <p className="mt-1">Todos tienen tu logo y colores.</p>
                      <button
                        onClick={() => setShowFullCatalogText(false)}
                        className="text-green-600 hover:text-green-800 text-sm font-medium mt-1 flex items-center"
                      >
                        Mostrar menos
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg text-purple-700 mb-3">PASO 3: DIVERSIÓN GARANTIZADA</h3>
                <div className="space-y-2 text-gray-700">
                  <ul className={`space-y-2 ${!showFullResults ? 'mb-2' : ''}`}>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Resultado inmediato: La mesa deja de mirar TikTok{showFullResults ? ' y empieza a interactuar.' : ''}</span>
                    </li>
                    {showFullResults && (
                      <>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Memoria emocional: "Fuimos al lugar donde papá me ganó en Parchís".</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Recomendación orgánica: Esa historia se cuenta. Tu competencia solo sirve comida.</span>
                        </li>
                      </>
                    )}
                  </ul>
                  <button
                    onClick={() => setShowFullResults(!showFullResults)}
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                  >
                    {showFullResults ? 'Mostrar menos' : 'Seguir leyendo'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 ${showFullResults ? 'transform rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block"
              >
                Quiero mi Zona Gamer
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección: Juegos Incluidos */}
      <section className="pt-0 pb-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Los Juegos Incluidos
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una experiencia de juego personalizada que refleja la identidad de tu marca
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
              <button
                className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${gamesTab === 'juegos'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                onClick={() => setGamesTab('juegos')}
              >
                🎮 Catálogo de Juegos
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${gamesTab === 'personalizacion'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                onClick={() => setGamesTab('personalizacion')}
              >
                🎨 Personalización Total
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Tab 1: Catálogo de Juegos */}
              {gamesTab === 'juegos' && (
                <div className="p-6 md:p-8 lg:flex">
                  <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      ¿Qué juegos están disponibles?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Cada juego está diseñado para ser fácil de aprender y divertido en 5 minutos:
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        '🎲 Parchís Digital — 2–6 jugadores',
                        '♟️ Damas Chinas — 2 jugadores',
                        '❌ Tres en Raya — Rápido y nostálgico',
                        '🃏 Memoria (Cartas) — Encuentra las parejas',
                        '🧩 Rompecabezas Deslizante — Solo o competencia cronometrada',
                        '♜ Ajedrez (Opcional) — Para estrategas serios'
                      ].map((game, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1">•</span>
                          <span className="text-gray-800">{game}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Todos los juegos incluyen:</h4>
                      <ul className="space-y-2">
                        {[
                          '✅ Tu logo en el centro del tablero',
                          '✅ Tus colores corporativos',
                          '✅ Modo multijugador local (sin internet obligatorio)',
                          '✅ Sin publicidad de terceros'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full max-w-xs mx-auto">
                      <div className="bg-gray-200 rounded-3xl p-2 shadow-xl">
                        <div className="bg-white rounded-2xl overflow-hidden">
                          <img
                            src="/images/zona-gamer/games-preview.webp"
                            alt="Vista previa de los juegos"
                            className="w-full h-auto"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjU2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjN0NBNUU0Ij5QcmV2aXN1YWxpemFjacOzbiBkZSBsb3MgcGxhem9zIGRlIGp1ZWdvczwvdGV4dD48L3N2Zz4=';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Personalización */}
              {gamesTab === 'personalizacion' && (
                <div className="p-6 md:p-8 lg:flex">
                  <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      ¿Cómo se ve con mi marca?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Cada tablero es 100% tuyo con estos elementos personalizables:
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        '🎨 Colores: Reemplazamos los colores genéricos por tu paleta corporativa.',
                        '🏷️ Logo: Tu marca aparece en el centro del tablero y en la pantalla de inicio.',
                        '🔤 Tipografía: Usamos tu fuente si la tienes, o elegimos una acorde a tu estilo.',
                        '📱 Pantalla de Bienvenida: "Bienvenido a [Tu Restaurante] - Juega mientras esperas"'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3">•</span>
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 mb-2">¿Por qué importa?</h4>
                      <p className="text-gray-700">
                        No estás poniendo "jueguitos genéricos". Estás creando una experiencia de marca memorable. Cuando el cliente muestre el juego a un amigo o saque una foto, verá tu logo.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Imagen 1: Tablero Genérico */}
                      <div className="text-center">
                        <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                          <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
                            <img
                              src="/images/zona-gamer/generic-board.webp"
                              alt="Tablero genérico de juegos"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjN0NBNUU0Ij5UYWJsZXJvIEdlbsOpcmljbzwvdGV4dD48L3N2Zz4=';
                              }}
                            />
                          </div>
                          <p className="text-sm font-medium text-gray-700">Tablero Genérico</p>
                          <p className="text-xs text-gray-500">Versión estándar</p>
                        </div>
                      </div>

                      {/* Imagen 2: Personalizado */}
                      <div className="text-center">
                        <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                          <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                            <img
                              src="/images/zona-gamer/custom-board.webp"
                              alt="Tablero personalizado con tu marca"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmVmMGU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjU5NzFFIj5UdSBUYWJsZXJvIFBlcnNvbmFsaXphZG88L3RleHQ+PC9zdmc+';
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                              <div className="bg-white/90 rounded-lg p-3 shadow-sm">
                                <div className="text-orange-600 font-bold text-sm mb-1">Tu Logo</div>
                                <div className="text-3xl">🎮</div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-700">Versión Personalizada</p>
                          <p className="text-xs text-gray-500">Con tu marca y colores</p>
                        </div>
                      </div>
                    </div>

                    {/* Nota adicional */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Nota:</span> Estas son representaciones. Tu versión se adaptará a tu marca.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Instalación */}
      <section className="pt-8 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              INSTALACIÓN ULTRA SIMPLE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo hacemos todo por ti
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encargamos del proceso técnico. Tú solo necesitas estos sencillos pasos:
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12 transform transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="grid md:grid-cols-2 divide-x divide-gray-100">
              {/* Columna Izquierda: Lo que tú haces */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-orange-50 to-white">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tu parte</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ),
                      text: 'Logo de tu marca (por WhatsApp o email)'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.486M7 17h.01" />
                        </svg>
                      ),
                      text: 'Paleta de colores (o la inferimos del logo)'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      text: '20 minutos para confirmar el preview'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      ),
                      text: 'Imprimir el QR que te enviamos'
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3 mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna Derecha: Lo que hacemos nosotros */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nuestro trabajo</h3>
                </div>

                <ul className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.486M7 17h.01" />
                        </svg>
                      ),
                      text: 'Personalizamos colores y assets con tu marca'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      text: 'Programamos y personalizamos los juegos'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      text: 'Subimos todo a tu sitio o creamos una landing'
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 16a4 4 0 100-8 4 4 0 000 8z" />
                        </svg>
                      ),
                      text: (
                        <>
                          Probamos todo y te enviamos el QR listo
                          <span className="block text-blue-600 font-medium mt-1">+ Soporte post-activación incluido</span>
                        </>
                      )
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-blue-50 px-6 py-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Aclaración técnica
                    </span>
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <span className="font-medium">¿No tienes sitio web?</span><br className="sm:hidden" />
                    <span>No hay problema.</span><br className="sm:hidden" />
                    <span>Creamos una landing personalizada</span><br className="sm:hidden" />
                    <span className="text-orange-600 break-all">(ej: turestaurante.objetivo360.com/juega)</span><br className="sm:hidden" />
                    <span>y la publicamos por ti.</span><br className="sm:hidden" />
                    <span className="text-sm text-gray-500">Sin complicaciones técnicas de tu parte.</span>
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-orange-200 transition-all transform hover:scale-105"
                >
                  <Link href="#contacto" className="flex items-center justify-center w-full">
                    <span className="text-sm sm:text-base text-center">Quiero la instalación</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Timeline */}
      <section className="pt-6 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              PROCESO SENCILLO Y RÁPIDO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De la decisión a la diversión en solo 4 días
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encargamos de todo el proceso. Tú solo disfruta de los resultados.
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo horizontal */}
            <div className="hidden md:flex items-center justify-between mb-12">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 -z-10"></div>

              {[
                {
                  day: 'DÍA 1',
                  title: 'COMPRA',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  bg: 'bg-purple-100',
                  items: [
                    'Pagas $120 USD',
                    'Confirmación por email y WhatsApp'
                  ]
                },
                {
                  day: 'DÍA 2',
                  title: 'PERSONALIZACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ),
                  bg: 'bg-blue-100',
                  items: [
                    'Nos envías logo y colores',
                    'Personalizamos los juegos'
                  ]
                },
                {
                  day: 'DÍA 3',
                  title: 'INSTALACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  bg: 'bg-green-100',
                  items: [
                    'Subimos el código',
                    'Probamos todo'
                  ]
                },
                {
                  day: 'DÍA 4',
                  title: 'ACTIVACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  bg: 'bg-orange-100',
                  items: [
                    'QR en alta resolución',
                    'Acceso al panel'
                  ]
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`${step.bg} p-3 rounded-full mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.day}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h4>
                  <ul className="text-center space-y-1 text-sm text-gray-600">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Versión móvil */}
            <div className="md:hidden space-y-8">
              {[
                {
                  day: 'DÍA 1',
                  title: 'COMPRA',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  bg: 'bg-purple-100',
                  items: [
                    'Pagas $120 USD',
                    'Recibes confirmación por email y WhatsApp'
                  ]
                },
                {
                  day: 'DÍA 2',
                  title: 'PERSONALIZACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ),
                  bg: 'bg-blue-100',
                  items: [
                    'Nos envías logo y colores (20 min)',
                    'Personalizamos los juegos y enviamos preview'
                  ]
                },
                {
                  day: 'DÍA 3',
                  title: 'INSTALACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  bg: 'bg-green-100',
                  items: [
                    'Subimos el código a tu sitio o creamos la landing',
                    'Probamos todos los juegos y el QR'
                  ]
                },
                {
                  day: 'DÍA 4',
                  title: 'ACTIVACIÓN',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  bg: 'bg-orange-100',
                  items: [
                    'Te enviamos el QR en alta resolución',
                    'Acceso al panel y soporte inicial'
                  ]
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className={`${step.bg} p-2 rounded-lg mr-4`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{step.day}</h3>
                      <h4 className="text-md font-semibold text-gray-800">{step.title}</h4>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Total de tu tiempo invertido: ~20 minutos</span>
            </div>
            <p className="text-gray-600">
              Todo lo técnico lo gestionamos nosotros. Tú solo necesitas enviarnos tu logo y confirmar el diseño.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Precios */}
      <section className="pt-8 pb-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 shadow-md">
              OFERTA ESPECIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block text-2xl md:text-3xl font-normal text-gray-600 mb-2">Tu inversión en diversión garantizada:</span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                $120 USD
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              <span className="text-orange-500 font-bold">Pago único</span> - Sin sorpresas ni mensualidades ocultas
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tarjeta de Precio - Izquierda */}
            <div className="lg:w-2/5">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="p-8 text-center">
                  <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-4 py-1 rounded-full mb-6">
                    OFERTA POR TIEMPO LIMITADO
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Zona Gamer Premium</h3>

                  <div className="my-8">
                    <span className="text-orange-100 line-through text-xl">$150 USD</span>
                    <div className="flex items-baseline justify-center mt-2">
                      <span className="text-6xl font-extrabold text-white">$120</span>
                      <span className="text-2xl text-orange-100 ml-1">USD</span>
                    </div>
                    <p className="text-orange-100 text-lg mt-3">Pago único</p>
                    <p className="text-orange-100 text-sm">Sin costos ocultos</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Sin mensualidades</span>
                    </div>
                    <div className="flex items-center justify-center text-white mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Garantía de reembolso</span>
                    </div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-6 rounded-xl text-center text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-white/20 flex items-center justify-center space-x-2"
                  >
                    <span>¡Lo quiero ahora!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Características - Derecha */}
            <div className="lg:w-3/5">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Todo lo que incluye tu Zona Gamer:</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { text: '5-6 juegos multijugador instalados', icon: '🎮' },
                    { text: 'QR personalizado con tu marca', icon: '🏷️' },
                    { text: 'Branding completo (logo + colores)', icon: '🎨' },
                    { text: 'Instalación en 48h', icon: '⚡' },
                    { text: 'Soporte técnico por 1 año', icon: '🛠️' },
                    { text: 'Actualizaciones gratuitas', icon: '🔄' },
                    { text: 'Garantía de reembolso (7 días)', icon: '✅' },
                    { text: 'Panel de control fácil de usar', icon: '📊' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-800 mb-1">¡Ahorra tiempo y dinero!</h5>
                      <p className="text-blue-700">
                        Una app nativa cuesta <span className="font-bold">$3,000+ USD</span> y meses de desarrollo.
                        Nuestra solución probada por solo <span className="font-bold">$120 USD</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 8: Reducción de Riesgo */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra promesa: <span className="text-orange-500">Funciona o te devolvemos tu dinero</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tu satisfacción está 100% garantizada
            </p>
          </div>

          {/* Carrusel de garantías */}
          <div className="mb-12 px-4">
            <Slider {...sliderSettings}>
              {/* Garantía 1 */}
              <div className="px-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Instalado en 48h</h3>
                  <p className="text-gray-600">Tendrás tu Zona Gamer funcionando en máximo 48 horas hábiles después de tu pago.</p>
                </div>
              </div>

              {/* Garantía 2 */}
              <div className="px-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Garantía 7 días</h3>
                  <p className="text-gray-600">Si no cumple con lo prometido, te devolvemos el 100% de tu dinero.</p>
                </div>
              </div>

              {/* Garantía 3 */}
              <div className="px-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Soporte WhatsApp</h3>
                  <p className="text-gray-600">Asistencia directa por WhatsApp para resolver cualquier duda o problema.</p>
                </div>
              </div>
            </Slider>
          </div>

          {/* Nueva tarjeta de oferta especial */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-amber-100 max-w-3xl mx-auto text-center mb-8 shadow-md">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              ⏰ Oferta especial
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Precio especial de <span className="text-orange-500 font-bold">$120 USD</span> (20% de descuento) para lectores del artículo.
            </p>
            <div className="flex items-center justify-center space-x-2 bg-white/50 p-3 rounded-lg mb-4 border border-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-amber-700">Oferta válida por tiempo limitado</span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              Aprovechar oferta
            </a>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="text-lg font-semibold text-gray-800">Garantía de satisfacción</h4>
            </div>
            <p className="text-gray-700">
              Si los juegos no funcionan como prometimos, te devolvemos el 100% de tu dinero en los primeros 7 días.
              Solo envíanos un mensaje por WhatsApp y lo resolvemos de inmediato, sin preguntas incómodas.
            </p>
          </div>
        </div>
      </section>


      {/* Sección 10: CTA Final */}
      <section className="pt-8 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Decides hoy. <span className="text-orange-500">Diferencias tu restaurante</span> para siempre.
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12">
            <div className="grid md:grid-cols-2 divide-x divide-gray-100">
              {/* Columna Izquierda: Sin Zona Gamer */}
              <div className="p-8">
                <div className="bg-red-50 border border-red-100 inline-flex items-center px-4 py-2 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-semibold text-red-700">SIN LA ZONA GAMER</span>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">😰</span>
                    <span className="text-gray-700">Mesas en "silencio digital" mirando TikTok</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💣</span>
                    <span className="text-gray-700">La espera se siente eterna y aburrida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">📉</span>
                    <span className="text-gray-700">Tu competencia hace lo mismo: servir comida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">😡</span>
                    <span className="text-gray-700">Los clientes no tienen nada que contar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💸</span>
                    <span className="text-gray-700">Gastas $3,000+ en una App que nadie descarga</span>
                  </li>
                </ul>
              </div>

              {/* Columna Derecha: Con Zona Gamer */}
              <div className="p-8 bg-gray-50">
                <div className="bg-green-50 border border-green-100 inline-flex items-center px-4 py-2 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-green-700">CON LA ZONA GAMER</span>
                </div>

                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">😌</span>
                    <span className="text-gray-700">Familias riendo y jugando juntas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🎮</span>
                    <span className="text-gray-700">La espera se convierte en entretenimiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">📈</span>
                    <span className="text-gray-700">Eres el ÚNICO con esta experiencia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💬</span>
                    <span className="text-gray-700">Los clientes cuentan historias memorables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💰</span>
                    <span className="text-gray-700">Inviertes $120 una vez y funciona para siempre</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 text-center border-t border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sí, quiero diferenciar mi restaurante</h3>

              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl py-5 px-10 rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:scale-105 mb-6 w-full max-w-md"
              >
                Instalar la Zona Gamer por $120 USD
              </a>

              <div className="space-y-2 text-gray-600 text-sm">
                <p className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pago único, sin mensualidades
                </p>
                <p className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Listo en 48 horas (instalación por nosotros)
                </p>
                <p className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantía de 7 días
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Al hacer clic serás redirigido a un formulario seguro. Tiempo de compra: 2 minutos.<br />
                Métodos de pago: Tarjeta, PayPal, Transferencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 11: FAQs con Acordeón */}
      <section className="pt-6 pb-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Las <span className="text-orange-500">3 preguntas</span> más comunes
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setFaqOpen(prev => ({ ...prev, 1: !prev[1] }))}
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  <span className="text-orange-500 mr-2">1.</span> ¿Los clientes necesitan descargar una app?
                </h3>
                <svg
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${faqOpen[1] ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out overflow-hidden ${faqOpen[1] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">
                  No. Todo funciona directamente en el navegador del celular. Tus clientes solo necesitan escanear el código QR con su cámara y podrán comenzar a jugar de inmediato, sin necesidad de descargar nada.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setFaqOpen(prev => ({ ...prev, 2: !prev[2] }))}
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  <span className="text-orange-500 mr-2">2.</span> ¿Es pago mensual?
                </h3>
                <svg
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${faqOpen[2] ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out overflow-hidden ${faqOpen[2] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">
                  No. Pagas $120 USD UNA SOLA VEZ y lo usas para siempre. No hay cargos ocultos ni mensualidades. Es una inversión única que sigue generando valor para tu negocio sin costos adicionales.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setFaqOpen(prev => ({ ...prev, 3: !prev[3] }))}
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  <span className="text-orange-500 mr-2">3.</span> ¿Qué pasa si los juegos no funcionan?
                </h3>
                <svg
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${faqOpen[3] ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out overflow-hidden ${faqOpen[3] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">
                  Tienes 7 días completos para probar la Zona Gamer con total tranquilidad. Si por alguna razón no cumple con lo prometido o no estás satisfecho, te devolvemos el 100% de tu dinero. Solo envíanos un mensaje por WhatsApp y lo resolvemos de inmediato, sin preguntas incómodas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 12: CTA Alternativo */}
      <section className="pt-6 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              ¿Aún tienes dudas?
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hablemos directamente
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Si quieres hablar de tu caso específico antes de decidir, estamos aquí para ayudarte.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-green-200 transition-all duration-300 transform hover:scale-105 mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.198 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.27-.198-.57-.345m-5.421 7.403h-.016a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.408-3.486c-6.627 0-12.015 5.385-12.015 12.001 0 2.52.779 4.86 2.108 6.793l-2.22 8.101 8.315-2.183a11.98 11.98 0 006.812 2.118h.006c6.627 0 12.015-5.385 12.015-12.002 0-3.222-1.277-6.27-3.595-8.584" />
              </svg>
              Hablar con un Asesor (Respuesta en 1h)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Agregar estilos de animación
type StyleElement = HTMLStyleElement & { disabled?: boolean };

const addAnimationStyles = () => {
  if (typeof document === 'undefined') return;

  const styleId = 'fade-in-animation';

  // Evitar duplicados
  if (document.getElementById(styleId)) return;

  const style: StyleElement = document.createElement('style');
  style.id = styleId;
  style.type = 'text/css';

  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
    }
  `;

  document.head.appendChild(style);
};

// Agregar estilos cuando el componente se monte
if (typeof window !== 'undefined') {
  window.addEventListener('load', addAnimationStyles);
}
