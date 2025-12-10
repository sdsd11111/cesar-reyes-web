'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  content: (string | React.ReactNode)[];
  contentAfterStats?: (string | React.ReactNode)[];
  image?: string;
  imagePosition?: 'left' | 'right';
  bgColor?: string;
  isDark?: boolean;
  fullWidth?: boolean;
  overlay?: boolean;
  hasCta?: boolean;
  cta?: string;
  ctaLink?: string;
  index: number;
  customClass?: string;
  textWhite?: boolean;
  highlightText?: string;
  highlightAuthor?: string;
  stats?: Array<{
    value: string;
    label: string;
    sublabel?: string;
  }>;
}

export default function Section({
  id,
  title,
  content,
  image,
  imagePosition = 'right',
  bgColor = 'white',
  isDark = false,
  fullWidth = false,
  overlay = false,
  hasCta = false,
  cta,
  ctaLink,
  index,
  customClass = '',
  textWhite = false,
  stats = []
}: SectionProps) {
  const bgColorClass = isDark ? 'bg-gray-900 text-white' :
    bgColor === 'blue-900' ? 'bg-blue-900 text-white' :
      bgColor === 'gray-50' ? 'bg-gray-50' : 'bg-white';

  const textColorClass = isDark ? 'text-white' : 'text-gray-800';
  const textColorLightClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';

  const containerClass = `py-10 md:py-16 lg:py-24 ${fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}`;

  const carouselRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout;

  // Efecto para el carrusel táctil
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    // Variables para controlar el desplazamiento táctil
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      startX = 'touches' in e ? e.touches[0].pageX - carousel.offsetLeft : (e as MouseEvent).pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.style.scrollBehavior = 'auto';
      carousel.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      carousel.style.scrollBehavior = 'smooth';
      carousel.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = 'touches' in e ? e.touches[0].pageX - carousel.offsetLeft : (e as MouseEvent).pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Ajustar la velocidad de desplazamiento
      carousel.scrollLeft = scrollLeft - walk;
    };

    // Eventos para ratón
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    // Eventos para pantalla táctil
    carousel.addEventListener('touchstart', handleMouseDown);
    carousel.addEventListener('touchend', handleMouseUp);
    carousel.addEventListener('touchmove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('touchstart', handleMouseDown);
      carousel.removeEventListener('touchend', handleMouseUp);
      carousel.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  const renderContent = () => {

    // Special case for "En resumen" section
    if (id === 'resumen') {
      return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 items-start">
            {/* Video de YouTube Short */}
            <div className="relative mx-auto w-full max-w-sm mb-6 md:mb-0" style={{
              aspectRatio: '9/16',
              maxHeight: '500px',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}>
                <iframe
                  src="https://www.youtube.com/embed/0KzBIMvyccA?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0"
                  title="Mi Historia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '1rem',
                  }}
                  frameBorder="0"
                  loading="lazy"
                ></iframe>

                {/* Overlay para mejorar la legibilidad del título */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                  <h3 className="text-xl font-bold text-white mb-1">Mi Historia</h3>
                  <p className="text-sm text-gray-200">Un breve resumen de mi trayectoria</p>
                </div>
              </div>
            </div>

            {/* Contenido de la sección */}
            <div className="w-full h-full">
              {/* Versión escritorio */}
              <div className="hidden lg:grid grid-cols-2 gap-4 md:gap-6 h-full" style={{
                gridTemplateRows: '1fr 1fr',
                gridAutoFlow: 'column',
                alignContent: 'stretch',
                height: '100%',
                minHeight: '500px',
                alignItems: 'stretch'
              }}>
                {content.slice(0, 4).map((paragraph, i) => (
                  <div
                    key={`desktop-${i}`}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-center"
                    style={{
                      minHeight: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <p className="text-white leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              {/* Versión móvil - Carrusel con scroll horizontal */}
              <div className="lg:hidden">
                <p className="text-sm text-gray-400 mb-2 text-center">Desliza para ver más</p>
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    cursor: 'grab'
                  }}
                >
                  {content.slice(0, 4).map((paragraph, i) => (
                    <div
                      key={`mobile-${i}`}
                      className="flex-shrink-0 w-10/12 sm:w-8/12 md:w-6/12 px-2"
                      style={{
                        scrollSnapAlign: 'start',
                      }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                        <p className="text-white leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Indicadores de desplazamiento */}
                <div className="flex justify-center space-x-2 mt-4">
                  {content.slice(0, 4).map((_, i) => (
                    <span
                      key={`indicator-${i}`}
                      className="w-2 h-2 rounded-full bg-white/30"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Último párrafo centrado abajo */}
          {content[4] && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-white text-lg font-medium leading-relaxed">
                  {content[4]}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Special case for "Lo que ofrezco" section
    if (id === 'oferta') {
      const ofertaCarouselRef = useRef<HTMLDivElement>(null);

      // Efecto para el auto-scroll del carrusel de oferta
      useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
          const carousel = ofertaCarouselRef.current;
          if (!carousel) return;

          const scrollStep = 1;
          const scrollSpeed = 30; // ms

          const scrollCarousel = () => {
            if (!carousel) return;
            if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.offsetWidth - 1)) {
              carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
          };

          let scrollInterval: NodeJS.Timeout | null = setInterval(scrollCarousel, scrollSpeed);

          // Pausar al hacer hover
          const pauseScroll = () => {
            if (scrollInterval) {
              clearInterval(scrollInterval);
              scrollInterval = null;
            }
          };

          const resumeScroll = () => {
            if (!scrollInterval) {
              scrollInterval = setInterval(scrollCarousel, scrollSpeed);
            }
            return scrollInterval;
          };

          carousel.addEventListener('mouseenter', pauseScroll);
          carousel.addEventListener('touchstart', pauseScroll);
          carousel.addEventListener('mouseleave', resumeScroll);
          carousel.addEventListener('touchend', resumeScroll);

          return () => {
            if (scrollInterval) clearInterval(scrollInterval);
            carousel.removeEventListener('mouseenter', pauseScroll);
            carousel.removeEventListener('touchstart', pauseScroll);
            carousel.removeEventListener('mouseleave', resumeScroll);
            carousel.removeEventListener('touchend', resumeScroll);
          };
        }
      }, []);

      return (
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Versión escritorio */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.map((paragraph, i) => (
              <div
                key={`desktop-${i}`}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${i === 0 ? 'md:col-span-2' : ''
                  }`}
              >
                <p className="text-gray-800 leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Versión móvil - Carrusel */}
          <div className="md:hidden">
            <div
              ref={ofertaCarouselRef}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {content.map((paragraph, i) => (
                <div
                  key={`mobile-${i}`}
                  className="flex-shrink-0 w-10/12 px-3"
                  style={{
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 h-full ${i === 0 ? 'pt-8' : ''
                    }`}>
                    <p className="text-gray-800 leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicadores de desplazamiento */}
            <div className="flex justify-center space-x-2 mt-4">
              {content.map((_, i) => (
                <span
                  key={`indicator-${i}`}
                  className="w-2 h-2 rounded-full bg-white/30"
                />
              ))}
            </div>
          </div>

          {hasCta && cta && ctaLink && (
            <div className="text-center mt-8 md:mt-12">
              <Link
                href={ctaLink}
                className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                {cta}
              </Link>
            </div>
          )}
        </div>
      );
    }

    // Default content rendering
    return (
      <div className={`${fullWidth ? 'container mx-auto px-4 sm:px-6 lg:px-8' : ''} ${image ? 'lg:w-1/2' : 'max-w-3xl mx-auto text-center'}`}>
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        )}

        <div className="space-y-4 mb-8">
          {content.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg ${textColorLightClass} leading-relaxed`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {hasCta && cta && ctaLink && (
          <div className="mt-8">
            <Link
              href={ctaLink}
              className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${isDark
                  ? 'bg-primary hover:bg-primary-600 text-white'
                  : 'bg-primary text-white hover:bg-primary-600'
                }`}
            >
              {cta}
            </Link>
          </div>
        )}
      </div>
    );
  };

  const renderImage = () => {
    if (!image) return null;

    // Special case for objetivo section with two images
    if (id === 'objetivo') {
      return (
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left image */}
            <div className="w-full lg:w-1/4 h-64 md:h-96 relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>

            {/* Center content */}
            <div className="w-full lg:w-2/4 px-4 lg:px-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} text-center`}>
                {title}
              </h2>

              <div className="space-y-4">
                {content.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-lg ${textColorLightClass} leading-relaxed text-center`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {hasCta && cta && ctaLink && (
                <div className="mt-8 text-center">
                  <Link
                    href={ctaLink}
                    className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                  >
                    {cta}
                  </Link>
                </div>
              )}
            </div>

            {/* Right image */}
            <div className="w-full lg:w-1/4 h-64 md:h-96 relative">
              <Image
                src="/images/sobre-mi/objetivo-2.webp"
                alt="César Reyes trabajando"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      );
    }

    // Default single image
    return (
      <div className="w-full lg:w-1/2">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2} // Priorizar carga de primeras imágenes
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/30" />
          )}
        </div>
      </div>
    );
  };

  // Special case for oferta section with background image
  if (id === 'oferta') {
    return (
      <section id={id} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={image!}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6">
          {renderContent()}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`${customClass || bgColorClass} ${index > 0 ? `border-t ${borderClass}` : ''} ${textWhite ? 'text-white' : ''}`}
    >
      {id === 'objetivo' ? (
        <div className={containerClass}>
          {renderImage()}
        </div>
      ) : (
        <div className={`${containerClass} flex flex-col ${imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center ${id === 'inicio' ? 'lg:space-x-24' :
            imagePosition === 'left' ? 'lg:space-x-12' : 'lg:space-x-0'
          }`}>
          {renderImage()}
          {renderContent()}
        </div>
      )}
    </section>
  );
}
