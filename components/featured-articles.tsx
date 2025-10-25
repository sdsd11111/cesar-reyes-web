"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Artículos Destacados</h2>
        
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="relative h-[400px] md:h-[500px]">
            {articles.map((article, index) => (
              <div
                key={article.slug}
                className={`absolute inset-0 transition-opacity duration-500 flex ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row h-full w-full">
                  <div className="md:w-1/2 h-64 md:h-[500px] relative overflow-hidden">
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
                          // Fallback a una imagen por defecto si falla la carga
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                        unoptimized={process.env.NODE_ENV !== 'production'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
                      {article.category}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      
                      <Link 
                        href={`/blog/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}
                        className="inline-flex items-center text-primary hover:underline font-medium"
                      >
                        Leer más
                        <ChevronRight className="ml-1 h-4 w-4" />
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
                aria-label="Artículo anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hover:scale-110"
                aria-label="Siguiente artículo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
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
