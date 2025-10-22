'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Clock, Eye, Tag } from 'lucide-react';
import { getDominantColor, getPopularArticles } from '@/lib/imageUtils';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  views: number;
  readingTime: string;
  date: string;
  category: string;
  dominantColor?: string;
}

const PopularArticlesSlider = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  // Referencias a las tarjetas del slider
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Inicializar el array de referencias
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, articles.length);
  }, [articles.length]);
  
  // Función para asignar referencias a las tarjetas
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };
  const controls = useAnimation();
  
  // Duplicar artículos para el efecto de bucle infinito
  const [duplicatedArticles, setDuplicatedArticles] = useState<Article[]>([]);

  // Cargar artículos populares
  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Obtener los últimos 5 artículos
        const latestArticles = await getPopularArticles(5);
        
        // Para cada artículo, obtener su color predominante
        const articlesWithColors = await Promise.all(
          latestArticles.map(async (article) => {
            try {
              const color = await getDominantColor(article.imageUrl);
              return { ...article, dominantColor: color };
            } catch (error) {
              console.error('Error al obtener el color predominante:', error);
              return { ...article, dominantColor: '#3b82f6' }; // Color de respaldo
            }
          })
        );
        
        // Establecer los artículos originales
        setArticles(articlesWithColors);
        // Duplicar los artículos para el efecto de bucle infinito
        setDuplicatedArticles([...articlesWithColors, ...articlesWithColors]);
      } catch (error) {
        console.error('Error al cargar los artículos:', error);
      }
    };

    loadArticles();
  }, []);

  // Navegación con bucle infinito
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      // Si llegamos al final, volvemos al inicio sin animación
      if (nextIndex >= articles.length) {
        // Usar setTimeout para reiniciar la posición sin animación
        setTimeout(() => {
          setCurrentIndex(0);
        }, 50);
        return 0;
      }
      return nextIndex;
    });
  }, [articles.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        // Usar setTimeout para mover al final sin animación
        setTimeout(() => {
          setCurrentIndex(articles.length - 1);
        }, 50);
        return articles.length - 1;
      }
      return prev - 1;
    });
  }, [articles.length]);

  // Auto-avanzar cada 5 segundos cuando no hay hover
  useEffect(() => {
    if (isHovered || articles.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, articles.length, nextSlide]);

  // Eliminamos el efecto de scroll automático para evitar redirecciones no deseadas
  // El desplazamiento ahora se manejará solo con CSS

  if (articles.length === 0) {
    return null; // Or return a loading state
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Últimos Artículos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros artículos más recientes sobre estrategias de negocio, marketing digital y crecimiento empresarial.
          </p>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Flechas de navegación */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Artículo anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Siguiente artículo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Contenedor de tarjetas */}
          <div className="relative">
            <div 
              ref={sliderRef}
              className="flex gap-6 md:gap-8 px-2 md:px-4 pb-6 -mx-2 md:-mx-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none', // Para Firefox
                msOverflowStyle: 'none', // Para IE y Edge
              }}
            >
              {articles.map((article, index) => (
                <div
                  key={`${article.id}-${index}`}
                  ref={setCardRef(index)}
                  className={`flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 snap-start transition-opacity duration-300 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                >
                  <article className="group relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    {/* Efecto de halo */}
                    <div 
                      className="absolute -inset-4 rounded-3xl -z-10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${article.dominantColor}30 0%, ${article.dominantColor}70 100%)`
                      }}
                    />
                    
                    {/* Imagen con overlay */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay con color predominante al 30% de opacidad */}
                      <div 
                        className="absolute inset-0 mix-blend-multiply"
                        style={{ 
                          backgroundColor: article.dominantColor,
                          opacity: 0.3
                        }}
                      />
                      
                      {/* Etiqueta de categoría */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                          <Tag className="w-3 h-3 mr-1" />
                          {article.category}
                        </span>
                      </div>
                      
                      {/* Estadísticas */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex items-center justify-between text-xs text-white/90">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readingTime}
                          </span>
                          <span>
                            {new Date(article.date).toLocaleDateString('es-ES', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-5 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                      >
                        Seguir leyendo
                        <svg 
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArticlesSlider;
