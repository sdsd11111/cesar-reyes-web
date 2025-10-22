import Link from "next/link"
import BlogCard from "@/components/blog-card"
import Image from "next/image"

export const metadata = {
  title: "Blog - César Reyes Jaramillo",
  description:
    "Artículos sobre automatización, diseño web, SEO, asesoría de negocios y planificación estratégica para ayudarte a impulsar tu empresa.",
}

// Datos de categorías
const categories = [
  {
    id: "automatizacion-para-tu-empresa",
    title: "Automatización para tu Empresa",
    description:
      "La categoría de Automatización reúne artículos y guías sobre cómo optimizar y automatizar procesos empresariales. Descubre cómo nuestras soluciones de automatización pueden transformar tu negocio.",
    link: "/blog/automatizacion-para-tu-empresa",
  },
  {
    id: "diseno-web-para-empresas",
    title: "Diseño Web para Empresas",
    description:
      "La categoría de Diseño Web para tu Negocio recopila artículos y guías sobre cómo crear páginas web efectivas. Aprende sobre diseño web y desarrollo.",
    link: "/blog/diseno-web-para-empresas",
  },
  {
    id: "seo-y-campanas-de-marketing",
    title: "SEO y Campañas de Marketing",
    description:
      "La categoría de SEO y Campañas recoge artículos y guías sobre cómo mejorar la visibilidad online de tu negocio. Aprende sobre SEO y marketing digital.",
    link: "/blog/seo-y-campanas-de-marketing",
  },
  {
    id: "asesoria-de-negocios",
    title: "Asesoría de Negocios",
    description:
      "La categoría de Asesoría de Negocios tiene como objetivo acumular artículos y guías sobre cómo mejorar tu negocio con nuestras soluciones de asesoría. Descubre las mejores prácticas y tendencias.",
    link: "/blog/asesoria-de-negocios",
  },
  {
    id: "planificacion-estrategica-para-empresas",
    title: "Planificación estratégica para empresas",
    description:
      "La categoría de Planificación Estratégica reúne artículos y guías que te ayudarán a diseñar y ejecutar estrategias efectivas para el crecimiento de tu negocio. Explora prácticas recomendadas y estudios de caso.",
    link: "/blog/planificacion-estrategica-para-empresas",
  },
]

// Datos de artículos del blog
const blogPosts = [
  {
    title: "Cómo la automatización puede transformar tu negocio",
    excerpt: "Descubre las ventajas competitivas que la automatización de procesos puede aportar a tu empresa.",
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "15 Abr 2023",
    slug: "como-la-automatizacion-puede-transformar-tu-negocio",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Tendencias de diseño web para 2023",
    excerpt: "Conoce las últimas tendencias en diseño web que deberías implementar en tu sitio este año.",
    category: "Diseño Web",
    categoryId: "diseno-web-para-empresas",
    date: "28 Mar 2023",
    slug: "tendencias-de-diseno-web-para-2023",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Estrategias de SEO efectivas para pequeñas empresas",
    excerpt: "Aprende cómo implementar estrategias de SEO que funcionen para negocios con presupuestos limitados.",
    category: "SEO",
    categoryId: "seo-y-campanas-de-marketing",
    date: "10 Mar 2023",
    slug: "estrategias-de-seo-efectivas-para-pequenas-empresas",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Cómo desarrollar un plan de negocios efectivo",
    excerpt: "Guía paso a paso para crear un plan de negocios que impulse el crecimiento de tu empresa.",
    category: "Asesoría de Negocios",
    categoryId: "asesoria-de-negocios",
    date: "5 Mar 2023",
    slug: "como-desarrollar-un-plan-de-negocios-efectivo",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Planificación estratégica: clave para el éxito empresarial",
    excerpt:
      "Descubre por qué la planificación estratégica es fundamental para el crecimiento sostenible de tu negocio.",
    category: "Planificación Estratégica",
    categoryId: "planificacion-estrategica-para-empresas",
    date: "20 Feb 2023",
    slug: "planificacion-estrategica-clave-para-el-exito-empresarial",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Herramientas de automatización para mejorar la productividad",
    excerpt:
      "Conoce las mejores herramientas de automatización que pueden ayudarte a optimizar tus procesos empresariales.",
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "15 Feb 2023",
    slug: "herramientas-de-automatizacion-para-mejorar-la-productividad",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-100px)] md:min-h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/images/pensamiento.webp"
              alt="Blog hero background desktop"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Mobile Image */}
          <div className="relative w-full h-full block md:hidden">
            <Image
              src="/images/sentado.webp"
              alt="Blog hero background mobile"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white w-full">
            {/* Mobile: Nuevo h1 y h2 */}
            <div className="md:hidden text-left">
              <h1 className="text-3xl font-bold mb-2">
                Blog
              </h1>
              <h2 className="text-2xl font-semibold mb-4">
                Estrategias y consejos
              </h2>
            </div>
            
            {/* Desktop: original h1 y h2 */}
            <div className="hidden md:block text-center">
              <h1 className="text-5xl font-bold mb-4">
                Blog
              </h1>
              <h2 className="text-3xl font-semibold mb-4">
                Estrategias y consejos
              </h2>
              <p className="text-xl mb-8">
                Descubre las mejores prácticas para hacer crecer tu negocio
              </p>
            </div>
            
            <div className="text-left md:text-center">
              <a 
                href="https://wa.me/593963410409" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                📱 ¿Qué temas te gustaría que publicara?
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category) => (
              <div key={category.id} className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href={category.link} className="text-primary font-medium hover:underline">
                  Ver artículos →
                </Link>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
        </div>
      </section>
    </>
  )
}
