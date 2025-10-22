import Link from "next/link"
import BlogCard from "@/components/blog-card"
import SearchBar from "@/components/search-bar"
import { notFound } from "next/navigation"
import { getArticlesByCategory } from "@/lib/utils-node"
import Image from "next/image"

// Datos de categorías actualizados
const categories = [
  {
    id: "ia-y-negocios-en-latam",
    title: "IA y Negocios en LATAM",
    description:
      "Explora cómo la Inteligencia Artificial está transformando los negocios en América Latina. Descubre casos de éxito, tendencias y estrategias para implementar IA en tu empresa.",
  },
  {
    id: "pensamiento-estrategico-y-adaptacion",
    title: "Pensamiento Estratégico y Adaptación",
    description:
      "Aprende sobre estrategias de adaptación y pensamiento estratégico para mantener tu negocio competitivo en un entorno cambiante. Descubre cómo anticipar cambios y tomar decisiones efectivas.",
  },
  {
    id: "proposito-autoconocimiento-liderazgo",
    title: "Propósito, Autoconocimiento y Liderazgo",
    description:
      "Profundiza en el desarrollo personal y profesional. Explora temas de liderazgo, autoconocimiento y cómo encontrar tu propósito para impulsar el éxito en tu carrera y negocio.",
  },
  {
    id: "productividad",
    title: "Productividad",
    description:
      "Descubre técnicas, herramientas y estrategias para maximizar tu productividad personal y empresarial. Aprende a optimizar procesos y alcanzar más con menos esfuerzo.",
  },
  {
    id: "crecimiento-en-latam",
    title: "Crecimiento en LATAM",
    description:
      "Analiza las oportunidades y desafíos del crecimiento empresarial en América Latina. Conoce estrategias efectivas para expandir tu negocio en la región.",
  },
]

// Datos de artículos del blog
const blogPosts = [
  {
    title: "El Impacto de la IA en los Negocios Latinoamericanos",
    excerpt: "Descubre cómo la Inteligencia Artificial está transformando el panorama empresarial en América Latina.",
    category: "IA y Negocios en LATAM",
    categoryId: "ia-y-negocios-en-latam",
    date: "15 Mar 2024",
    slug: "el-impacto-de-la-ia-en-latam",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Estrategias Adaptativas para Empresas en Tiempos de Cambio",
    excerpt: "Aprende cómo desarrollar estrategias adaptativas que permitan a tu empresa prosperar en un entorno cambiante.",
    category: "Pensamiento Estratégico y Adaptación",
    categoryId: "pensamiento-estrategico-y-adaptacion",
    date: "10 Mar 2024",
    slug: "estrategias-adaptativas",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Liderazgo Auténtico: El Poder de Ser Tú Mismo",
    excerpt: "Descubre cómo el autoconocimiento y la autenticidad pueden transformar tu estilo de liderazgo.",
    category: "Propósito, Autoconocimiento y Liderazgo",
    categoryId: "proposito-autoconocimiento-liderazgo",
    date: "5 Mar 2024",
    slug: "liderazgo-autentico",
    image: "/placeholder.svg?height=300&width=500",
  }
]

// Asignar imágenes a cada categoría (debe coincidir con la portada)
const categoryImages = {
  "ia-y-negocios-en-latam": "/images/negocioslatam.webp",
  "pensamiento-estrategico-y-adaptacion": "/images/pensamiento.webp",
  "proposito-autoconocimiento-liderazgo": "/images/autoconocimiento.webp",
  "productividad": "/images/reloj.webp",
  "crecimiento-en-latam": "/images/crecimiento-latam.webp",
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export async function generateMetadata(props: { params: Promise<{ category: string }> }) {
  const { category } = await props.params;
  const categoryObj = categories.find((cat) => cat.id === category)

  if (!categoryObj) {
    return {
      title: "Categoría no encontrada",
      description: "La categoría que estás buscando no existe.",
    }
  }

  return {
    title: `${categoryObj.title} - Blog de César Reyes Jaramillo`,
    description: categoryObj.description,
  }
}

export default async function CategoryPage(props: { params: Promise<{ category: string }>, searchParams: Promise<{ search?: string }> }) {
  const { category } = await props.params;
  const { search = "" } = await props.searchParams;
  const categoryObj = categories.find((cat) => cat.id === category);

  if (!categoryObj) {
    notFound();
  }

  const categoryPosts = getArticlesByCategory(category);
  const filteredPosts = search
    ? categoryPosts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      )
    : categoryPosts;

  const heroImage = categoryImages[category as keyof typeof categoryImages] || "/images/portada2.webp";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-100px)] md:h-[400px] flex items-center justify-center mb-8">
        <Image
          src={heroImage}
          alt={categoryObj.title}
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />
        <div className="relative z-20 text-white text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{categoryObj.title}</h1>
          <p className="text-lg md:text-xl drop-shadow-lg">{categoryObj.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Link href="/blog" className="text-primary font-medium hover:underline">
              ← Volver al Blog
            </Link>
            <div className="w-full md:w-96">
              <SearchBar category={category} />
            </div>
          </div>

          {search && (
            <div className="mb-8">
              <p className="text-gray-600">
                Resultados de búsqueda para: <span className="font-semibold">{search}</span>
              </p>
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  slug={`${post.categoryId}/${post.slug}`}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">
                {search
                  ? "No se encontraron artículos que coincidan con tu búsqueda."
                  : "No hay artículos en esta categoría todavía."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
