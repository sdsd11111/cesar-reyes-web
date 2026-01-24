"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatCategory } from '@/lib/format-utils';
import BlogCard from '@/components/blog-card';

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
                      <BlogCard 
                        title={article.title}
                        category={article.category}
                        date={article.date}
                        slug={article.slug}
                        image={article.image}
                        imageOnly={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto relative z-10">
                    <span className="inline-block px-4 py-1.5 text-sm sm:text-base font-medium text-primary bg-primary/10 rounded-full mb-4 sm:mb-5">
                      {formatCategory(article.category)}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                      <Link href={`/blog/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3">
                      {article.excerpt || 'Descripción no disponible'}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/blog/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        Leer más
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10 transition-all hover:scale-110"
                aria-label="Artículo anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10 transition-all hover:scale-110"
                aria-label="Siguiente artículo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {articles.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir al artículo ${i + 1}`}
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
