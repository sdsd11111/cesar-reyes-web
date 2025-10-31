"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatCategory } from '@/lib/format-utils';

interface FeaturedArticle {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export function FeaturedArticles() {
  const [articles, setArticles] = useState<FeaturedArticle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch('/api/blog/featured');
        if (!response.ok) throw new Error('Error al cargar artículos destacados');
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error('Error:', err);
        setError('No se pudieron cargar los artículos destacados');
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
    
    // Cambiar automáticamente de artículo cada 5 segundos
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (articles.length || 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [articles.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse text-gray-500">Cargando artículos destacados...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="h-48 flex items-center justify-center text-red-500">
            {error}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-50 py-6 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-gray-900">Artículos Destacados</h2>
        
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="relative h-[500px] sm:h-[400px] md:h-[500px]">
            {articles.map((article, index) => (
              <div
                key={article.slug}
                className={`absolute inset-0 transition-opacity duration-500 flex ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row h-full w-full">
                  <div className="md:w-1/2 h-48 sm:h-64 md:h-full relative overflow-hidden">
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={article.image}
                        alt={article.title || 'Imagen del artículo'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        className="object-cover w-full h-full"
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                        unoptimized={process.env.NODE_ENV !== 'production'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto relative z-10">
                    <span className="inline-block px-4 py-1.5 text-sm sm:text-base font-medium text-primary bg-primary/10 rounded-full mb-4 sm:mb-5">
                      {formatCategory(article.category)}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 line-clamp-2 text-gray-900">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 line-clamp-4 md:line-clamp-5 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-auto pt-2">
                      <span className="text-xs sm:text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      
                      <Link 
                        href={`/blog/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}
                        className="inline-flex items-center text-primary hover:underline font-medium text-sm sm:text-base"
                      >
                        Leer más
                        <ChevronRight className="ml-1 h-4 w-4 flex-shrink-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          {articles.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12"
                aria-label="Artículo anterior"
                style={{ transform: 'translateY(-50%)' }}
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-900" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12"
                aria-label="Siguiente artículo"
                style={{ transform: 'translateY(-50%)' }}
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-900" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary w-4 sm:w-6' 
                        : 'bg-gray-300 w-2 sm:w-2'
                    }`}
                    aria-label={`Ir al artículo ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
