'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ShowcaseItem {
  id: number;
  image: string;
  alt: string;
  type: 'mobile' | 'desktop';
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    image: '/images/MenuObjetivo/MenuObjetivo/rest-1.webp',
    alt: 'Diseño web para restaurante',
    type: 'mobile'
  },
  {
    id: 2,
    image: '/images/MenuObjetivo/MenuObjetivo/rest-2.webp',
    alt: 'Diseño web para restaurante',
    type: 'mobile'
  },
  {
    id: 3,
    image: '/images/MenuObjetivo/MenuObjetivo/rest-horizontal.webp',
    alt: 'Diseño web para restaurante',
    type: 'desktop'
  }
];

export default function RestaurantShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Navegación automática
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? showcaseItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manejo de gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tu restaurante se verá como una Franquicia Internacional
          </h2>
          <p className="text-xl text-gray-600">
            No son plantillas aburridas. Son diseños pensados para despertar el hambre.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Controles de navegación */}
          <button 
            onClick={goToPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Contenedor del carrusel */}
          <div 
            className="relative w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {showcaseItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className={`relative mx-auto ${item.type === 'mobile' ? 'max-w-xs' : 'max-w-4xl'}`}>
                    {item.type === 'mobile' ? (
                      <div className="relative">
                        {/* Mockup de móvil */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-[14px] border-gray-900/50 shadow-2xl pointer-events-none"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                        <div className="aspect-[9/16] rounded-[1.5rem] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.alt}
                            width={400}
                            height={711}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback a una imagen de placeholder si hay error
                              (e.target as HTMLImageElement).src = '/images/placeholder-restaurant.jpg';
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        {/* Mockup de escritorio */}
                        <div className="relative bg-gray-900 rounded-t-xl p-2 pb-0 w-full">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="bg-gray-800 rounded-b overflow-hidden mt-2">
                            <div className="aspect-video w-full">
                              <Image
                                src={item.image}
                                alt={item.alt}
                                width={1200}
                                height={675}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/images/placeholder-restaurant.jpg';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h-6 w-32 mx-auto bg-gray-800 rounded-b-xl"></div>
                        <div className="h-2 w-20 mx-auto bg-gray-700 rounded-b-lg"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
