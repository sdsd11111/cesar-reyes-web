import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getCachedArticles, getCachedArticle } from "@/lib/cache-utils"

// Revalidar la página cada 60 segundos
export const revalidate = 60;
import { marked } from "marked"
import { formatCategory } from "@/lib/format-utils"

// Obtener artículos para generar rutas estáticas
export async function generateStaticParams() {
  const articles = await getCachedArticles();
  
  if (!articles) {
    console.error('No se pudieron cargar los artículos para generar rutas estáticas');
    return [];
  }
  
  return articles.map(article => ({
    category: article.category.toLowerCase().replace(/\s+/g, '-'),
    slug: article.slug
  }));
}

// Tipos para TypeScript
type BlogPost = {
  id?: string
  title: string
  content: string
  category: string
  date: string
  author: string
  slug: string
  image: string
  excerpt: string
  rawContent?: string
  [key: string]: any // Para propiedades adicionales
}

// Función para validar la estructura de un artículo
type ValidArticle = {
  title: string;
  slug: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
  author?: string;
  [key: string]: any;
};

function isValidArticle(article: any): article is ValidArticle {
  return (
    article &&
    typeof article.title === 'string' &&
    typeof article.slug === 'string' &&
    typeof article.category === 'string' &&
    typeof article.image === 'string' &&
    typeof article.excerpt === 'string' &&
    typeof article.date === 'string' &&
    typeof article.content === 'string'
  );
}

// Función auxiliar para validar y obtener el artículo
async function getArticleData(category: string, slug: string) {
  try {
    const article = await getCachedArticle(category, slug);
    if (!article) {
      throw new Error('Artículo no encontrado');
    }
    return article;
  } catch (error) {
    console.error('Error al cargar el artículo:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  if (!category || !slug) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo solicitado no existe o ha sido eliminado',
    };
  }

  try {
    const article = await getCachedArticle(category, slug);
    if (!article) {
      return {
        title: 'Artículo no encontrado',
        description: 'El artículo solicitado no existe o ha sido eliminado',
      };
    }

    return {
      title: article.title,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [{
          url: article.image || '/images/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        }],
      },
    };
  } catch (error) {
    return {
      title: 'Error al cargar el artículo',
      description: 'Ocurrió un error al cargar el artículo solicitado',
    };
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ 
    category: string; 
    slug: string 
  }> 
}) {
  const { category, slug } = await params;
  // Validar parámetros
  if (!category || !slug) {
    notFound();
  }

  // Obtener el artículo específico
  const article = await getArticleData(category, slug);
  
  if (!article) {
    notFound();
  }
  
  // Obtener todos los artículos para los relacionados
  const allArticles = await getCachedArticles();
  
  // Convertir el contenido Markdown a HTML y limpiar frontmatter
  const cleanContent = (article.content || '').toString()
    // Eliminar frontmatter si está incluido en el contenido
    .replace(/^---[\s\S]*?---\s*/, '')
    // Limpiar cualquier frontmatter YAML restante
    .replace(/^[\s\n]*[a-zA-Z0-9_-]+:.*$/gm, '')
    .trim();
    
  const contentHtml = marked(cleanContent);
  
  // Formatear la fecha
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    } catch (error) {
      return dateString;
    }
  }
  // Asegurarse de que allArticles sea un array y tenga la estructura correcta
  const safeArticles = Array.isArray(allArticles) ? allArticles : [];
  
  const relatedArticles = safeArticles
    .filter((a: any) => a && typeof a === 'object' && 'category' in a && 'slug' in a && 
      a.category === article.category && a.slug !== article.slug)
    .sort((a: any, b: any) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary font-medium hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
              >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
                Volver al blog
              </Link>
            </div>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {article.image && article.image !== '/placeholder.svg' && article.image !== '' ? (
                <div className="relative h-64 md:h-96 w-full">
                  <Image 
                    src={article.image.startsWith('http') ? article.image : `/images/blog/${article.image}`} 
                    alt={article.title || 'Imagen del artículo'} 
                    fill 
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                    {article.title || 'Artículo sin título'}
                  </h1>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                {/* Categoría y fecha */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-sm text-white bg-primary/90 px-3 py-1 rounded-full">
                    {formatCategory(article.category) || "Sin categoría"}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(article.date || new Date().toISOString())}
                  </span>
                  <span className="text-sm text-gray-500">
                    Por {article.author || "César Reyes Jaramillo"}
                  </span>
                </div>
                
                {/* Título */}
                {(!article.image || article.image === '' || article.image === '/placeholder.svg') ? null : (
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {article.title || 'Artículo sin título'}
                  </h1>
                )}
                
                {/* Extracto */}
                {article.excerpt && (
                  <p className="text-xl text-gray-600 mb-8">
                    {article.excerpt}
                  </p>
                )}
                
                {/* Contenido del artículo */}
                <div 
                  className="prose max-w-none prose-lg text-gray-700"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
                
                {/* Compartir en redes sociales */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Sígueme en mis redes</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/ObjetivoEmprendo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="Facebook de César Reyes"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/CesarObjetivo"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="Twitter (X) de César Reyes"
                    >
                      <span className="sr-only">Twitter (X)</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/cesarobjetivo/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="LinkedIn de César Reyes"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Artículos relacionados */}
            {relatedArticles && relatedArticles.length > 0 && Array.isArray(relatedArticles) && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedArticles.map((relatedArticle: any) => (
                    <div key={relatedArticle.slug} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                      <Link href={`/blog/${relatedArticle.category?.toLowerCase()?.replace(/\s+/g, '-') || 'blog'}/${relatedArticle.slug}`} className="block h-full">
                        <div className="h-48 bg-gray-100 relative">
                          {relatedArticle.image && relatedArticle.image !== '/placeholder.svg' ? (
                            <Image 
                              src={relatedArticle.image}
                              alt={relatedArticle.title || 'Artículo relacionado'}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="h-full flex items-center justify-center bg-gray-200">
                              <span className="text-gray-600">Sin imagen</span>
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
                            {relatedArticle.title || 'Sin título'}
                          </h3>
                          <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                            {relatedArticle.excerpt || ''}
                          </p>
                          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                              {relatedArticle.category ? formatCategory(relatedArticle.category) : 'Sin categoría'}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(relatedArticle.date)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
