'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArticleCard from './ArticleCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Estrategias Efectivas para el Crecimiento de tu Negocio',
    excerpt: 'Descubre cómo implementar estrategias de marketing digital que realmente generen resultados tangibles para tu empresa en el mercado actual.',
    imageUrl: '/images/estrategia_objetivo.webp',
    slug: 'estrategias-crecimiento-negocio'
  },
  {
    id: 2,
    title: 'Posicionamiento Web: Claves para el Éxito',
    excerpt: 'Aprende las técnicas más efectivas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda y atraer más clientes.',
    imageUrl: '/images/posicionamiento_web.webp',
    slug: 'posicionamiento-web-claves-exito'
  },
  {
    id: 3,
    title: 'Automatización de Procesos Empresariales',
    excerpt: 'Optimiza tus operaciones y ahorra tiempo con estas herramientas de automatización que todo emprendedor debería conocer.',
    imageUrl: '/images/automatizacion.webp',
    slug: 'automatizacion-procesos-empresariales'
  },
  {
    id: 4,
    title: 'Análisis de Mercado para PYMES',
    excerpt: 'Conoce cómo realizar un análisis de mercado efectivo que te permita tomar decisiones basadas en datos concretos.',
    imageUrl: '/images/estudio_de_mercado.webp',
    slug: 'analisis-mercado-pymes'
  },
];

const ArticleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  // Auto-advance slides every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Scroll to the current card
  useEffect(() => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex]);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Artículos Recientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros últimos artículos sobre estrategias de negocio, marketing digital y crecimiento empresarial.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Artículo anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Siguiente artículo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            >
              <AnimatePresence initial={false}>
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                    animate={{ 
                      opacity: index === currentIndex ? 1 : 0.5,
                      scale: index === currentIndex ? 1 : 0.95,
                      x: 0
                    }}
                    exit={{ opacity: 0, x: index > currentIndex ? -100 : 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`transition-all duration-300 ${
                      index === currentIndex ? 'z-10' : 'z-0'
                    }`}
                  >
                    <ArticleCard
                      title={article.title}
                      excerpt={article.excerpt}
                      imageUrl={article.imageUrl}
                      slug={article.slug}
                      className={index === currentIndex ? 'opacity-100' : 'opacity-70 hover:opacity-90'}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir al artículo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSlider;
