import { Metadata } from 'next';
import BlogCard from "@/components/blog-card";
import { FeaturedArticles } from "@/components/featured-articles";
import { getAllBlogArticles } from '@/lib/utils-node';
import BlogFilters from './components/BlogFilters';

export const metadata: Metadata = {
  title: 'Blog de Estrategia, Marketing y Tecnología | César Reyes',
  description: 'Artículos, guías y noticias sobre desarrollo web, diseño, marketing digital, automatización y estrategia de negocios.',
};

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

const getDisplayCategory = (category: string): string => {
  if (Object.values(categoryMapping).includes(category)) {
    return category;
  }
  const normalizedInput = normalizeText(category);
  const found = Object.entries(categoryMapping).find(([key]) =>
    normalizeText(key) === normalizedInput ||
    normalizeText(categoryMapping[key]) === normalizedInput
  );
  return found ? found[1] : category;
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const searchQuery = typeof sp.q === 'string' ? sp.q : '';
  const selectedCategory = typeof sp.category === 'string' ? sp.category : 'Todas';

  const allPosts = await getAllBlogArticles(false);

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    // Filter by Category
    if (selectedCategory !== 'Todas') {
      const postCategory = normalizeText(post.category);
      const selected = normalizeText(selectedCategory);
      const matchesCategory = postCategory === selected ||
        normalizeText(getDisplayCategory(post.category)) === selected;
      if (!matchesCategory) return false;
    }

    // Filter by Search Query
    if (searchQuery) {
      const search = normalizeText(searchQuery);
      const title = normalizeText(post.title);
      const excerpt = post.excerpt ? normalizeText(post.excerpt) : '';
      const matchesSearch = title.includes(search) || excerpt.includes(search);
      if (!matchesSearch) return false;
    }

    return true;
  });

  // Sort by date
  const sortedPosts = filteredPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-800 to-gray-100 text-white py-20 md:py-28">
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

        {/* Filtros y Lista */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

              <BlogFilters />

              {/* Lista de artículos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPosts.length > 0 ? (
                  sortedPosts.map((post) => (
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
                      No se encontraron artículos
                    </h3>
                    <p className="text-gray-500">
                      Intenta con otros términos de búsqueda o categorías.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FeaturedArticles />
    </div>
  );
}
