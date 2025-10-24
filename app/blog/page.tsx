"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from 'next/dynamic';
import BlogCard from "@/components/blog-card"
import { Search, Loader2 } from "lucide-react"
import FeaturedPostsSlider from "@/components/featured-posts-slider"

// Tipos para los artículos
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  image: string;
  author: string;
};

// Importar dinámicamente el componente de prueba para evitar SSR
const TestConnection = dynamic(
  () => import('./test-connection').then((mod) => mod.default),
  { ssr: false }
);

// Datos de artículos destacados (ejemplo - reemplazar con datos reales)
const featuredPosts = [
  {
    title: "Cómo la automatización puede transformar tu negocio",
    excerpt: "Descubre las ventajas competitivas que la automatización de procesos puede aportar a tu empresa.",
    category: "Automatización",
    date: "2023-04-15",
    slug: "como-la-automatizacion-puede-transformar-tu-negocio",
    image: "/images/featured/automatizacion.jpg"
  },
  {
    title: "Diseño web moderno: Tendencias 2023",
    excerpt: "Explora las últimas tendencias en diseño web que están marcando la diferencia este año.",
    category: "Diseño Web",
    date: "2023-05-20",
    slug: "diseno-web-moderno-tendencias-2023",
    image: "/images/featured/diseno-web.jpg"
  },
  {
    title: "Estrategias SEO para posicionar tu negocio",
    excerpt: "Aprende las técnicas más efectivas de SEO para mejorar el posicionamiento de tu sitio web.",
    category: "Marketing Digital",
    date: "2023-06-10",
    slug: "estrategias-seo-para-posicionar-tu-negocio",
    image: "/images/featured/seo.jpg"
  },
  {
    title: "Consejos para emprendedores exitosos",
    excerpt: "Descubre los hábitos y estrategias que comparten los emprendedores más exitosos.",
    category: "Asesoría",
    date: "2023-07-05",
    slug: "consejos-para-emprendedores-exitosos",
    image: "/images/featured/emprendedores.jpg"
  },
  {
    title: "Automatización de marketing: Guía para principiantes",
    excerpt: "Aprende los conceptos básicos de la automatización de marketing y cómo implementarla.",
    category: "Automatización",
    date: "2023-07-15",
    slug: "automatizacion-de-marketing-guia-para-principiantes",
    image: "/images/featured/marketing.jpg"
  }
]

// Datos de categorías
const categories = [
  {
    id: "todos",
    title: "Todos",
    description: "Todos los artículos del blog",
    link: "/blog",
  },
  {
    id: "automatizacion-para-tu-empresa",
    title: "Automatización",
    description: "Automatización de procesos empresariales",
    link: "/blog/automatizacion-para-tu-empresa",
  },
  {
    id: "diseno-web-para-empresas",
    title: "Diseño Web",
    description: "Diseño y desarrollo web profesional",
    link: "/blog/diseno-web-para-empresas",
  },
  {
    id: "seo-y-campanas-de-marketing",
    title: "Marketing Digital",
    description: "SEO y estrategias de marketing",
    link: "/blog/seo-y-campanas-de-marketing",
  },
  {
    id: "asesoria-de-negocios",
    title: "Asesoría",
    description: "Consejos para emprendedores",
    link: "/blog/asesoria-de-negocios",
  },
  {
    id: "analisis-estrategico",
    title: "Análisis Estratégico",
    description: "Análisis y estrategias de negocio",
    link: "/blog/analisis-estrategico",
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description: "Tecnologías y tendencias en desarrollo web",
    link: "/blog/desarrollo-web",
  },
  {
    id: "posicionamiento-de-marca",
    title: "Posicionamiento de Marca",
    description: "Estrategias para construir marcas fuertes",
    link: "/blog/posicionamiento-de-marca",
  },
]

// Datos de artículos de ejemplo (reemplazar con datos reales de tu CMS)
const blogPosts = [
  {
    title: "Cómo la automatización puede transformar tu negocio",
    excerpt: "Descubre las ventajas competitivas que la automatización de procesos puede aportar a tu empresa.",
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "2023-04-15",
    slug: "como-la-automatizacion-puede-transformar-tu-negocio",
    image: "/placeholder.svg",
  },
  {
    title: "Diseño web moderno: Tendencias 2023",
    excerpt: "Explora las últimas tendencias en diseño web que están marcando la diferencia este año.",
    category: "Diseño Web",
    categoryId: "diseno-web-para-empresas",
    date: "2023-05-20",
    slug: "diseno-web-moderno-tendencias-2023",
    image: "/placeholder.svg",
  },
  {
    title: "Estrategias SEO para posicionar tu negocio",
    excerpt: "Aprende las técnicas más efectivas de SEO para mejorar el posicionamiento de tu sitio web.",
    category: "Marketing Digital",
    categoryId: "seo-y-campanas-de-marketing",
    date: "2023-06-10",
    slug: "estrategias-seo-para-posicionar-tu-negocio",
    image: "/placeholder.svg",
  },
  {
    title: "Consejos para emprendedores exitosos",
    excerpt: "Descubre los hábitos y estrategias que comparten los emprendedores más exitosos.",
    category: "Asesoría",
    categoryId: "asesoria-de-negocios",
    date: "2023-07-05",
    slug: "consejos-para-emprendedores-exitosos",
    image: "/placeholder.svg",
  },
  {
    title: "Automatización de marketing: Guía para principiantes",
    excerpt: "Aprende los conceptos básicos de la automatización de marketing y cómo implementarla.",
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "2023-07-15",
    slug: "automatizacion-de-marketing-guia-para-principiantes",
    image: "/placeholder.svg",
  },
  {
    title: "Diseño UX/UI: Mejora la experiencia de usuario",
    excerpt: "Consejos prácticos para mejorar la experiencia de usuario en tu sitio web.",
    category: "Diseño Web",
    categoryId: "diseno-web-para-empresas",
    date: "2023-08-01",
    slug: "diseno-ux-ui-mejora-la-experiencia-de-usuario",
    image: "/placeholder.svg",
  },
  {
    title: "Tendencias de diseño web para 2023",
    excerpt: "Conoce las últimas tendencias en diseño web que deberías implementar en tu sitio este año.",
    category: "Diseño Web",
    categoryId: "diseno-web-para-empresas",
    date: "2023-03-28",
    slug: "tendencias-de-diseno-web-para-2023",
    image: "/placeholder.svg",
  },
  {
    title: "Estrategias de SEO efectivas para pequeñas empresas",
    excerpt: "Aprende cómo implementar estrategias de SEO que funcionen para negocios con presupuestos limitados.",
    category: "Marketing Digital",
    categoryId: "seo-y-campanas-de-marketing",
    date: "2023-03-10",
    slug: "estrategias-de-seo-efectivas-para-pequenas-empresas",
    image: "/placeholder.svg",
  },
  {
    title: "Cómo desarrollar un plan de negocios efectivo",
    excerpt: "Guía paso a paso para crear un plan de negocios que impulse el crecimiento de tu empresa.",
    category: "Asesoría",
    categoryId: "asesoria-de-negocios",
    date: "2023-03-05",
    slug: "como-desarrollar-un-plan-de-negocios-efectivo",
    image: "/placeholder.svg",
  },
  {
    title: "Planificación estratégica: clave para el éxito empresarial",
    excerpt: "Descubre por qué la planificación estratégica es fundamental para el crecimiento sostenible de tu negocio.",
    category: "Asesoría",
    categoryId: "asesoria-de-negocios",
    date: "2023-02-20",
    slug: "planificacion-estrategica-clave-para-el-exito-empresarial",
    image: "/placeholder.svg",
  },
  {
    title: "Herramientas de automatización para mejorar la productividad",
    excerpt: "Conoce las mejores herramientas de automatización que pueden ayudarte a optimizar tus procesos empresariales.",
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "2023-02-15",
    slug: "herramientas-de-automatizacion-para-mejorar-la-productividad",
    image: "/placeholder.svg",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Obtener artículos al cargar el componente
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin-articles');
        if (!response.ok) {
          throw new Error('Error al cargar los artículos');
        }
        const data = await response.json();
        
        // Asegurarse de que los artículos tengan el formato correcto
        const formattedPosts = data.map((post: any) => ({
          id: post.id || post.slug,
          title: post.title || 'Sin título',
          excerpt: post.excerpt || '',
          content: post.content || '',
          category: post.category || 'Sin categoría',
          date: post.date || new Date().toISOString(),
          slug: post.slug || '',
          image: post.image || '/images/placeholder.jpg',
          author: post.author || 'César Reyes Jaramillo'
        }));
        
        // Ordenar por fecha (más recientes primero)
        const sortedPosts = formattedPosts.sort((a: BlogPost, b: BlogPost) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        
        setPosts(sortedPosts);
        
        // Los 4 artículos más recientes serán los destacados
        const featured = [...sortedPosts]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 4);
        setFeaturedPosts(featured);
        
      } catch (err) {
        console.error('Error al cargar los artículos:', err);
        setError('No se pudieron cargar los artículos. Por favor, intente nuevamente más tarde.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  const [visiblePosts, setVisiblePosts] = useState(9)
  const postsPerLoad = 6

  // Filtrar artículos basados en la búsqueda y categoría seleccionada
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  // Definir las categorías en el orden específico
  const categories = [
    "Todas",
    "Automatización",
    "Diseño Web",
    "Marketing Digital",
    "Asesoría",
    "Análisis Estratégico",
    "Desarrollo Web",
    "Posicionamiento de Marca"
  ]
  
  // Filtrar y ordenar artículos por fecha (más recientes primero)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  // Mostrar solo los posts visibles, asegurando que estén ordenados por fecha
  const filteredAndSortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const postsToShow = filteredAndSortedPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length
  
  // Función para cargar más posts
  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + postsPerLoad)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Solo mostrar en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <div className="container mx-auto px-4 py-6">
          <TestConnection />
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative w-full bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Artículos sobre automatización, diseño web, SEO y estrategias de negocio para ayudarte a crecer.
          </p>
        </div>
      </section>

      {/* Estado de carga */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Cargando artículos...</span>
        </div>
      )}
      
      {/* Mensaje de error */}
      {error && (
        <div className="container px-4 md:px-6 py-12">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      )}
      
      {/* Sección de artículos destacados */}
      {!loading && !error && featuredPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Artículos Destacados</h2>
              <p className="text-gray-500 md:text-lg">Descubre nuestros artículos más populares y recientes</p>
            </div>
            <FeaturedPostsSlider posts={featuredPosts} />
          </div>
        </section>
      )}

      {/* Filtros de búsqueda y lista de artículos */}
      {!loading && !error && (
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Barra de búsqueda y filtro por categoría */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    className="w-full pl-10 pr-4 py-2 bg-black text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 bg-black text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "Todas" ? "Todas las categorías" : category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Lista de artículos */}
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                      <BlogCard 
                        key={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        category={post.category}
                        date={post.date}
                        slug={post.slug}
                        image={post.image}
                        className="h-full"
                      />
                    ))}
                  </div>
                  
                  {hasMorePosts && (
                    <div className="mt-12 text-center">
                      <button
                        onClick={loadMorePosts}
                        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                      >
                        Cargar más artículos
                      </button>
                      <p className="text-sm text-gray-500 mt-2">
                        Mostrando {Math.min(visiblePosts, filteredPosts.length)} de {filteredPosts.length} artículos
                      </p>
                    </div>
                  )}
                  
                  {!hasMorePosts && filteredPosts.length > 0 && (
                    <div className="mt-8 text-center">
                      <p className="text-gray-500">Has llegado al final de los artículos disponibles.</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
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
          </div>
        </section>
      )}
    </div>
  )
}
