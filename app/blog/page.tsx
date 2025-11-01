"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams, useRouter } from 'next/navigation'
import BlogCard from "@/components/blog-card"
import { Search, X, Loader2 } from "lucide-react"
import { FeaturedArticles } from "@/components/featured-articles"
import { useSearch } from "@/context/SearchContext"

// Tipos para los artículos
type BlogPost = {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  image: string;
  author: string;
  [key: string]: any;
};

// Componente interno que usa useSearchParams
function BlogContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { searchQuery, setSearchQuery } = useSearch()
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Cargar artículos al montar el componente
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog');
        
        if (!response.ok) {
          throw new Error('Error al cargar los artículos');
        }
        
        const articles = await response.json();
        setPosts(articles);
      } catch (err) {
        console.error('Error al cargar artículos:', err);
        setError('No se pudieron cargar los artículos. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [])

  // Mapeo de categorías de URL a nombres para mostrar
  const categoryMapping: Record<string, string> = {
    'todas': 'Todas',
    'menu-objetivo': 'Menú Objetivo',
    'automatizacion': 'Automatización',
    'diseno-web': 'Diseño Web',
    'marketing-digital': 'Marketing Digital',
    'asesoria': 'Asesoría',
    'analisis-estrategico': 'Análisis Estratégico',
    'desarrollo-web': 'Desarrollo Web',
    'posicionamiento-marca': 'Posicionamiento de Marca'
  };

  // Categorías fijas mostradas en los filtros
  const categoriesList = Object.values(categoryMapping);

  // Función para normalizar texto (quitar acentos, guiones y convertir a minúsculas)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/-/g, ' ') // Reemplaza guiones por espacios
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
      .replace(/\s+/g, ' ') // Normaliza espacios múltiples
      .trim();
  };

  // Función para obtener el nombre de categoría para mostrar
  const getDisplayCategory = (category: string): string => {
    // Primero intenta hacer match exacto
    if (Object.values(categoryMapping).includes(category)) {
      return category;
    }
    
    // Si no, busca en las claves del mapeo
    const normalizedInput = normalizeText(category);
    const found = Object.entries(categoryMapping).find(([key]) => 
      normalizeText(key) === normalizedInput || 
      normalizeText(categoryMapping[key]) === normalizedInput
    );
    
    return found ? found[1] : category; // Retorna el nombre para mostrar o el original si no se encuentra
  };

  // Filtrar artículos por categoría (insensible a mayúsculas/minúsculas, acentos y guiones)
  const filteredPosts = selectedCategory === "Todas"
    ? [...posts] // Usar una copia para evitar mutación directa
    : posts.filter(post => {
        const postCategory = normalizeText(post.category);
        const selected = normalizeText(selectedCategory);
        
        // Compara la categoría del post con la categoría seleccionada
        // tanto en su forma de URL como en su forma para mostrar
        return postCategory === selected || 
               normalizeText(getDisplayCategory(post.category)) === selected;
      });

  // Filtrar artículos basados en la búsqueda (solo en título y extracto)
  const filteredPostsBySearch = searchQuery && searchQuery.trim() !== ''
    ? filteredPosts.filter((post) => {
        const search = normalizeText(searchQuery);
        const title = normalizeText(post.title);
        const excerpt = post.excerpt ? normalizeText(post.excerpt) : '';
        
        // Buscar solo en título y extracto
        return title.includes(search) || excerpt.includes(search);
      })
    : filteredPosts;
  
  // Ordenar artículos por fecha (más recientes primero)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  // Ordenar y limitar los posts a mostrar
  const postsToShow = [...filteredPostsBySearch]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, visiblePosts);

  const hasMorePosts = visiblePosts < filteredPostsBySearch.length;

  // Función para cargar más posts
  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
              <p className="text-xl text-white/90 mb-8">
                Descubre artículos, guías y noticias sobre desarrollo web, diseño, marketing digital y más.
              </p>
            </div>
          </div>
        </section>

      {/* Filtros de búsqueda y lista de artículos */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Barra de búsqueda */}
            <div className="w-full mb-8">
              <div className="relative group max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar artículos por título, contenido o categoría..."
                  className="w-full pl-12 pr-10 py-3 bg-black text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 transition-all duration-200 text-base"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    // Actualizar la URL sin recargar la página
                    const params = new URLSearchParams(window.location.search);
                    if (e.target.value) {
                      params.set('q', e.target.value);
                    } else {
                      params.delete('q');
                    }
                    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
                    window.history.pushState({}, '', newUrl);
                  }}
                  aria-label="Buscar artículos"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      // Limpiar la URL
                      const params = new URLSearchParams(window.location.search);
                      params.delete('q');
                      const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
                      window.history.pushState({}, '', newUrl);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Limpiar búsqueda"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Título de la sección */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Todos los artículos</h2>

            {/* Filtros por categoría */}
            <div className="w-full mb-8">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              {categoriesList.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    // Si hay un término de búsqueda, mantenerlo en la URL
                    const params = new URLSearchParams(window.location.search);
                    if (searchQuery) {
                      params.set('q', searchQuery);
                    }
                    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
                    window.history.pushState({}, '', newUrl);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            </div>

            {/* Lista de artículos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postsToShow.length > 0 ? (
                postsToShow.map((post) => (
                  <BlogCard
                    key={post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    slug={post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}
                    image={post.image}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {posts.length === 0 ? 'No hay artículos disponibles' : 'No se encontraron artículos'}
                  </h3>
                  <p className="text-gray-500">
                    {posts.length === 0 
                      ? 'Pronto publicaremos nuevo contenido.' 
                      : 'Intenta con otros términos de búsqueda o categorías.'}
                  </p>
                </div>
              )}
            </div>
            
            {/* Botón para cargar más artículos */}
            {hasMorePosts && (
              <div className="col-span-full flex justify-center mt-8">
                <button
                  onClick={loadMorePosts}
                  className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Cargar más artículos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      </main>
      {/* Artículos Destacados - Movido aquí */}
      <FeaturedArticles />
    </div>
  )
}

// Componente principal que envuelve BlogContent con Suspense
export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  )
}
