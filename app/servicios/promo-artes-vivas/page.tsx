'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MentirasSection from '@/components/MentirasSection';
import CasosExitoSection from '@/components/CasosExitoSection';
import PrecioOfertaSection from '@/components/PrecioOfertaSection';
import ProcesoSection from '@/components/ProcesoSection';
import FaqSectionNew from '@/components/FaqSectionNew';
import CTAFinalSection from '@/components/CTAFinalSection';

export default function PromoArtesVivas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('comprar lasaña en Loja');
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Configuración del slider automático
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Cambio cada 6 segundos
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Reactiva el auto-play después de 10 segundos
  };
  
  const goToNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    // Reactiva el auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const goToPrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    // Reactiva el auto-play después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const slides = [
    {
      id: 1,
      bgImage: '/images/promo-artes-vivas/hero 1.webp',
      title: 'Páginas Web para Artesanos del Festival Artes Vivas Loja 2025',
      subtitle: 'Promoción Exclusiva Solo Para Participantes',
      price: '$150',
      originalPrice: '$250',
      spots: '20',
      content: '',
      cta: 'Ver Por Qué Esto No Es Otra Promesa Vacía',
      ctaLink: '#defraudado',
      bgColor: 'bg-gradient-to-br from-indigo-900 to-purple-900',
      textColor: 'text-white',
      buttonVariant: 'default' as const,
      buttonClass: 'bg-orange-500 hover:bg-orange-600 text-white',
      isMainTitle: true
    },
    {
      id: 2,
      bgImage: '/images/promo-artes-vivas/hero 2.webp',
      title: '¿Para Qué Una Página Web Si Tengo Facebook e Instagram?',
      stat: '97%',
      statText: 'del tráfico web en Ecuador viene de Google, no de redes sociales*',
      content: 'Amplía tu visibilidad más allá de las redes sociales. Un sitio web te permite ser encontrado fácilmente por clientes que buscan productos artesanales únicos como los tuyos.',
      cta: 'Ver Por Qué Esto No Es Otra Promesa Vacía',
      ctaLink: '#defraudado',
      bgColor: 'bg-gradient-to-br from-blue-900 to-cyan-900',
      textColor: 'text-white',
      buttonVariant: 'default' as const,
      buttonClass: 'bg-orange-500 hover:bg-orange-600 text-white',
      footnote: <span className="hidden sm:inline">*Fuente: We Are Social & Hootsuite, Digital 2022 Ecuador Report</span>,
      isMainTitle: false
    }
  ];
  
  const currentSlideData = slides[currentSlide];
  
  return (
    <div className="min-h-screen">
      {/* Slider Principal */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${currentSlideData.bgImage}')`,
        }}
      >
        {/* Controles de navegación - Solo visibles en desktop */}
        <div className="hidden sm:block">
          <div 
            onClick={goToPrev}
            className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              touchAction: 'manipulation'
            }}
            role="button"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={24} className="w-6 h-6" />
          </div>
          
          <div 
            onClick={goToNext}
            className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              touchAction: 'manipulation'
            }}
            role="button"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight size={24} className="w-6 h-6" />
          </div>
        </div>
        
        {/* Contenido del slide actual */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className={`max-w-4xl mx-auto ${currentSlideData.textColor}`}>
            {/* Slide 1 */}
            {currentSlide === 0 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentSlideData.title}</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">{currentSlideData.subtitle}</h2>
                
                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <span className="text-4xl sm:text-5xl font-extrabold">{currentSlideData.price}</span>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <span className="text-base sm:text-xl line-through opacity-75">Precio Regular {currentSlideData.originalPrice}</span>
                      <span className="bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        {currentSlideData.spots} Cupos Disponibles
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  size="lg" 
                  className={`${currentSlideData.buttonClass} text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 whitespace-normal h-auto min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]`}
                >
                  <Link href={currentSlideData.ctaLink} className="flex items-center justify-center text-center">
                    <span className="whitespace-normal">{currentSlideData.cta}</span> <ArrowRight className="ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            )}
            
            {/* Slide 2 */}
            {currentSlide === 1 && (
              <div className="animate-fadeIn text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">{currentSlideData.title}</h2>
                
                <div className="flex flex-col items-center mb-12">
                  <div className="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold">{currentSlideData.stat}</span>
                  </div>
                  <p className="text-xl font-medium">{currentSlideData.statText}</p>
                </div>
                
                <Button 
                  asChild 
                  size="lg" 
                  className={`${currentSlideData.buttonClass} text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 whitespace-normal h-auto min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]`}
                >
                  <Link href={currentSlideData.ctaLink} className="flex items-center justify-center text-center">
                    <span className="whitespace-normal">{currentSlideData.cta}</span> <ArrowRight className="ml-2 flex-shrink-0" />
                  </Link>
                </Button>
                
                {currentSlideData.footnote && (
                  <p className="mt-6 text-sm opacity-75">{currentSlideData.footnote}</p>
                )}
              </div>
            )}
            
            {/* Slide 3 */}
            {currentSlide === 2 && (
              <div className="animate-fadeIn text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{currentSlideData.title}</h2>
                <h2 className="text-2xl font-semibold mb-8">{currentSlideData.subtitle}</h2>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <span className="text-3xl sm:text-4xl font-bold">{currentSlideData.price}</span>
                        {currentSlideData.originalPrice && (
                          <div className="flex flex-col sm:flex-row items-center gap-2">
                            <span className="text-base sm:text-lg line-through opacity-70">
                              Precio Regular {currentSlideData.originalPrice}
                            </span>
                            <span className="bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                              {currentSlideData.spots} Cupos Disponibles
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  size="lg" 
                  className={`${currentSlideData.buttonClass} text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 whitespace-normal h-auto min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem]`}
                >
                  <Link href={currentSlideData.ctaLink} className="flex items-center justify-center text-center">
                    <span className="whitespace-normal">{currentSlideData.cta}</span> <ArrowRight className="ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Controles móviles - Solo dentro del hero */}
        <div className="sm:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center active:bg-black/70 transition-colors shadow-lg"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={20} className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            className="bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center active:bg-black/70 transition-colors shadow-lg"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight size={20} className="w-5 h-5" />
          </button>
        </div>
        
        {/* Indicadores de navegación */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Sección de Problema */}
      <section className="py-16 relative overflow-hidden">
        {/* Fondo negro degradado - Igual que Último Llamado */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 id="defraudado" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Sabemos Que Ya Te Han Defraudado. A Nosotros También Nos Pasó.
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-center text-gray-200">
              {isExpanded ? (
                'Antes de fundar Objetivo en 2020, César Reyes invirtió en redes sociales, ganó tráfico pero no ventas, pasaba todo el día enviando fotos, descripciones, presupuestos pero cerraba pocas ventas. Por eso creamos algo diferente:'
              ) : (
                'Antes de fundar Objetivo en 2020, César Reyes invirtió en redes sociales...'
              )}
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-400 hover:text-orange-300 font-medium mt-2 mx-auto flex items-center text-sm"
            >
              {isExpanded ? 'Mostrar menos' : 'Seguir leyendo'}
              <svg 
                className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
              <div className="p-6 text-white">
                <div className="text-5xl mb-4">💸</div>
                <h3 className="text-xl font-bold mb-4">Pagaste por publicidad en Facebook</h3>
                <div className="space-y-4">
                  <p className="text-gray-100">Gastaste $200 en 'alcance' y 'engagement'. Vendiste $50.</p>
                  <details className="group">
                    <summary className="text-orange-300 hover:text-orange-200 font-medium cursor-pointer flex items-center group">
                      <span className="group-open:hidden">SEGUIR LEYENDO</span>
                      <span className="hidden group-open:inline">OCULTAR</span>
                      <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-gray-200">
                      ¿Por qué? Porque Facebook te muestra a quien ÉL quiere, no a quien busca lo que vendes.
                      Y cuando dejas de pagar, desapareces.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            
            {/* Tarjeta 2 */}
            <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
              <div className="p-6 text-white">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4">Te dijeron "crea tu web gratis en YouTube"</h3>
                <div className="space-y-4">
                  <p className="text-gray-100">La hiciste. Te sentiste orgulloso. Nadie la encontró en Google.</p>
                  <details className="group">
                    <summary className="text-orange-300 hover:text-orange-200 font-medium cursor-pointer flex items-center group">
                      <span className="group-open:hidden">SEGUIR LEYENDO</span>
                      <span className="hidden group-open:inline">OCULTAR</span>
                      <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-gray-200">
                      ¿Por qué? Una página sin SEO es como un negocio sin letrero.
                      Existe, pero nadie sabe dónde está.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            
            {/* Tarjeta 3 */}
            <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
              <div className="p-6 text-white">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">Un "experto" te ofreció "posicionamiento"</h3>
                <div className="space-y-4">
                  <p className="text-gray-100">Pagaste adelantado. Te mostró gráficas bonitas. Nunca te entregó nada concreto.</p>
                  <details className="group">
                    <summary className="text-orange-300 hover:text-orange-200 font-medium cursor-pointer flex items-center group">
                      <span className="group-open:hidden">SEGUIR LEYENDO</span>
                      <span className="hidden group-open:inline">OCULTAR</span>
                      <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-2 text-gray-200">
                      ¿Por qué? Porque muchos venden humo.
                      Nosotros mostramos tu página funcionando desde el día 1.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Video */}
      <section id="busqueda-google" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              ¿Apareces cuando te buscan en Google?
            </h2>
            
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HlCwGB1-VXw?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1"
                title="¿Apareces cuando te buscan en Google?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Card 1 - Haz que te busquen */}
              <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
                <div className="p-6 text-white">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-4 h-12 flex items-center justify-center text-center">
                    <span className="block">Haz que<br className="h-0" />te busquen</span>
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-100">Tu marca necesita aparecer cuando alguien escribe lo que tú vendes.</p>
                    <details className="group">
                      <summary className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer flex items-center group">
                        <span className="group-open:hidden">SEGUIR LEYENDO</span>
                        <span className="hidden group-open:inline">OCULTAR</span>
                        <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <p className="mt-2 text-gray-200">Si no existes en Google, no existes en la decisión de compra. Aparecer cuando te buscan es el primer paso para convertir visitantes en clientes.</p>
                    </details>
                  </div>
                </div>
              </div>

              {/* Card 2 - Haz que te encuentren */}
              <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
                <div className="p-6 text-white">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-4 h-12 flex items-center justify-center text-center">
                    <span className="block">Haz que<br className="h-0" />te encuentren</span>
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-100">Un sitio optimizado técnicamente hace que Google te muestre arriba.</p>
                    <details className="group">
                      <summary className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer flex items-center group">
                        <span className="group-open:hidden">SEGUIR LEYENDO</span>
                        <span className="hidden group-open:inline">OCULTAR</span>
                        <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <p className="mt-2 text-gray-200">Sin técnica, no importa qué tan bonito sea tu trabajo. La optimización es lo que te hace visible en los primeros resultados de búsqueda.</p>
                    </details>
                  </div>
                </div>
              </div>

              {/* Card 3 - Haz que te elijan */}
              <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
                <div className="p-6 text-white">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold mb-4 h-12 flex items-center justify-center text-center">
                    <span className="block">Haz que<br className="h-0" />te elijan</span>
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-100">Cuando te encuentran, tu presentación decide la venta.</p>
                    <details className="group">
                      <summary className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer flex items-center group">
                        <span className="group-open:hidden">SEGUIR LEYENDO</span>
                        <span className="hidden group-open:inline">OCULTAR</span>
                        <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <p className="mt-2 text-gray-200">Dominio propio, textos claros, fotos bien puestas y confianza son los elementos clave que convierten visitantes en clientes satisfechos.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-right">
              <p className="text-xl">César Reyes, Objetivo</p>
              <Button 
                size="lg" 
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8 rounded-full font-semibold transform hover:scale-105 transition-all"
                onClick={() => {
                  const videoSection = document.getElementById('busqueda-google');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                ▶️ Ver video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Precio y Oferta */}
      <PrecioOfertaSection />

      {/* Sección de Proceso */}
      <ProcesoSection />

      {/* Sección de Preguntas Frecuentes */}
      <FaqSectionNew />
      
      {/* Sección de CTA Final */}
      <CTAFinalSection />
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            Una vez vencido el plazo o llenos los cupos, el precio volverá a $250 (o al valor estándar), y los tiempos de entrega podrán cambiar según disponibilidad.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Agregar estilos de animación
const addAnimationStyles = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0.5; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }`;
    document.head.appendChild(style);
  }
};

// Llamar a la función para agregar estilos
if (typeof window !== 'undefined') {
  window.addEventListener('load', addAnimationStyles);
}
