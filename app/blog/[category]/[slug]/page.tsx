import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArticle } from "@/lib/utils-node"
import { marked } from "marked"

// Datos de categorías
const categories = [
  {
    id: "automatizacion-para-tu-empresa",
    title: "Automatización para tu Empresa",
  },
  {
    id: "diseno-web-para-empresas",
    title: "Diseño Web para Empresas",
  },
  {
    id: "seo-y-campanas-de-marketing",
    title: "SEO y Campañas de Marketing",
  },
  {
    id: "asesoria-de-negocios",
    title: "Asesoría de Negocios",
  },
  {
    id: "planificacion-estrategica-para-empresas",
    title: "Planificación estratégica para empresas",
  },
]

// Datos de artículos del blog
const blogPosts = [
  {
    title: "Cómo la automatización puede transformar tu negocio",
    content: `
      <p>La automatización de procesos empresariales se ha convertido en una herramienta fundamental para las empresas que buscan optimizar sus operaciones, reducir costos y mejorar la eficiencia. En este artículo, exploraremos cómo la automatización puede transformar tu negocio y brindarte ventajas competitivas significativas.</p>
      
      <h2>¿Qué es la automatización empresarial?</h2>
      
      <p>La automatización empresarial consiste en utilizar tecnología para ejecutar tareas repetitivas y procesos que tradicionalmente requerían intervención humana. Esto permite a los empleados centrarse en actividades de mayor valor añadido, mientras que las tareas rutinarias se realizan de manera más rápida y precisa.</p>
      
      <h2>Beneficios de la automatización para tu empresa</h2>
      
      <h3>1. Aumento de la productividad</h3>
      
      <p>Al automatizar tareas repetitivas, tus empleados pueden dedicar su tiempo y talento a actividades más estratégicas y creativas. Esto no solo mejora la productividad general, sino que también aumenta la satisfacción laboral al eliminar tareas monótonas.</p>
      
      <h3>2. Reducción de errores</h3>
      
      <p>Los sistemas automatizados realizan tareas con precisión y consistencia, minimizando los errores humanos que pueden ocurrir debido a la fatiga o la distracción. Esto es especialmente importante en procesos críticos como la facturación, la gestión de inventario o el cumplimiento normativo.</p>
      
      <h3>3. Ahorro de costos</h3>
      
      <p>Aunque la implementación inicial de soluciones de automatización puede requerir una inversión, los ahorros a largo plazo suelen ser significativos. La reducción de errores, el aumento de la eficiencia y la disminución del tiempo dedicado a tareas manuales se traducen en importantes ahorros de costos operativos.</p>
      
      <h3>4. Mejora de la experiencia del cliente</h3>
      
      <p>La automatización permite ofrecer respuestas más rápidas y consistentes a los clientes. Desde chatbots que responden consultas las 24 horas hasta sistemas que agilizan los procesos de pedido y entrega, la automatización puede mejorar significativamente la experiencia del cliente.</p>
      
      <h2>Áreas clave para la automatización</h2>
      
      <h3>Marketing y ventas</h3>
      
      <p>La automatización del marketing permite segmentar audiencias, programar publicaciones en redes sociales, enviar correos electrónicos personalizados y nutrir leads de forma automática. Esto no solo ahorra tiempo, sino que también mejora la efectividad de tus campañas de marketing.</p>
      
      <h3>Gestión de operaciones</h3>
      
      <p>La automatización de procesos operativos como la gestión de inventario, la logística y la cadena de suministro puede reducir significativamente los tiempos de espera, minimizar errores y optimizar los recursos. Esto se traduce en una mayor eficiencia operativa y una reducción de costos.</p>
      
      <h3>Atención al cliente</h3>
      
      <p>Los sistemas automatizados de atención al cliente, como chatbots y sistemas de tickets, pueden manejar consultas básicas y dirigir problemas más complejos al personal adecuado. Esto mejora los tiempos de respuesta y la satisfacción del cliente.</p>
      
      <h3>Finanzas y contabilidad</h3>
      
      <p>La automatización de procesos financieros como la facturación, el procesamiento de pagos y la conciliación bancaria no solo ahorra tiempo, sino que también reduce errores costosos y mejora el cumplimiento normativo.</p>
      
      <h2>Cómo implementar la automatización en tu empresa</h2>
      
      <h3>1. Identifica los procesos adecuados</h3>
      
      <p>No todos los procesos son candidatos ideales para la automatización. Comienza por identificar tareas repetitivas, que consumen mucho tiempo y son propensas a errores. Estos son generalmente los mejores candidatos para la automatización.</p>
      
      <h3>2. Establece objetivos claros</h3>
      
      <p>Define qué esperas lograr con la automatización: ¿reducir costos? ¿mejorar la precisión? ¿aumentar la velocidad? Establecer objetivos claros te ayudará a medir el éxito de tu iniciativa de automatización.</p>
      
      <h3>3. Selecciona las herramientas adecuadas</h3>
      
      <p>Existen numerosas herramientas y plataformas de automatización disponibles en el mercado. Elige aquellas que mejor se adapten a tus necesidades específicas, considerando factores como la facilidad de uso, la escalabilidad y la integración con tus sistemas existentes.</p>
      
      <h3>4. Implementa gradualmente</h3>
      
      <p>En lugar de intentar automatizar todo a la vez, comienza con un proyecto piloto y expande gradualmente. Esto te permitirá aprender de la experiencia y ajustar tu enfoque según sea necesario.</p>
      
      <h2>Conclusión</h2>
      
      <p>La automatización ofrece numerosas ventajas para las empresas de todos los tamaños y sectores. Al implementar soluciones de automatización de manera estratégica, puedes mejorar la eficiencia, reducir costos y proporcionar una mejor experiencia a tus clientes. En un entorno empresarial cada vez más competitivo, la automatización no es solo una opción, sino una necesidad para mantenerse relevante y competitivo.</p>
      
      <p>¿Estás listo para transformar tu negocio con la automatización? Contáctanos hoy para descubrir cómo podemos ayudarte a implementar soluciones de automatización personalizadas para tu empresa.</p>
    `,
    category: "Automatización",
    categoryId: "automatizacion-para-tu-empresa",
    date: "15 Abr 2023",
    author: "César Reyes Jaramillo",
    slug: "como-la-automatizacion-puede-transformar-tu-negocio",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Tendencias de diseño web para 2023",
    content: `
      <p>El diseño web está en constante evolución, con nuevas tendencias y tecnologías emergiendo cada año. Para mantenerse competitivo en el mundo digital, es esencial que tu sitio web no solo sea funcional, sino también visualmente atractivo y alineado con las expectativas actuales de los usuarios. En este artículo, exploraremos las principales tendencias de diseño web para 2023 que deberías considerar implementar en tu sitio.</p>
      
      <h2>1. Diseño minimalista y funcional</h2>
      
      <p>El minimalismo continúa siendo una tendencia dominante en el diseño web. Los sitios con diseños limpios, espacios en blanco estratégicos y una navegación intuitiva ofrecen una mejor experiencia de usuario. Esta tendencia se centra en eliminar elementos innecesarios y destacar el contenido realmente importante, lo que resulta en tiempos de carga más rápidos y una experiencia más agradable para el usuario.</p>
      
      <h2>2. Modo oscuro</h2>
      
      <p>El modo oscuro ha ganado popularidad significativa en los últimos años y seguirá siendo una tendencia importante en 2023. Además de ser estéticamente atractivo, el modo oscuro reduce la fatiga visual, ahorra batería en dispositivos móviles y puede hacer que ciertos elementos de diseño destaquen más. Ofrecer a los usuarios la opción de alternar entre modos claro y oscuro mejora la accesibilidad y la experiencia del usuario.</p>
      
      <h2>3. Microinteracciones</h2>
      
      <p>Las microinteracciones son pequeñas animaciones o respuestas visuales que ocurren cuando un usuario interactúa con un elemento de la interfaz. Estos detalles sutiles, como un botón que cambia de color al pasar el cursor sobre él o una animación al enviar un formulario, añaden dinamismo y hacen que la experiencia del usuario sea más interactiva y agradable.</p>
      
      <h2>4. Tipografía creativa y de gran tamaño</h2>
      
      <p>La tipografía ya no es solo un medio para transmitir información; se ha convertido en un elemento de diseño por derecho propio. Las fuentes grandes, audaces y creativas pueden establecer el tono de tu sitio web y captar la atención del usuario. En 2023, veremos más sitios web utilizando tipografía como elemento central de diseño, con combinaciones interesantes de fuentes y tamaños para crear jerarquía visual.</p>
      
      <h2>5. Diseño 3D y elementos inmersivos</h2>
      
      <p>Con los avances en tecnología web, los elementos 3D y las experiencias inmersivas se están volviendo más accesibles para los diseñadores web. Desde ilustraciones 3D hasta entornos virtuales navegables, estos elementos añaden profundidad y interactividad a tu sitio web, creando una experiencia memorable para los usuarios.</p>
      
      <h2>6. Scrollytelling</h2>
      
      <p>El scrollytelling combina narrativa y diseño interactivo para contar historias a medida que el usuario se desplaza por la página. Esta técnica puede incluir animaciones, transiciones, cambios de color y otros efectos visuales que se activan al hacer scroll, creando una experiencia narrativa inmersiva que mantiene a los usuarios comprometidos.</p>
      
      <h2>7. Diseño responsivo y mobile-first</h2>
      
      <p>Con más del 50% del tráfico web proveniente de dispositivos móviles, el diseño responsivo ya no es opcional. En 2023, el enfoque mobile-first (diseñar primero para dispositivos móviles y luego adaptar para pantallas más grandes) seguirá siendo crucial. Esto garantiza que tu sitio web ofrezca una experiencia óptima en todos los dispositivos, desde smartphones hasta pantallas de escritorio.</p>
      
      <h2>8. Paletas de colores neón y vibrantes</h2>
      
      <p>Los colores neón y las paletas vibrantes están ganando popularidad en el diseño web. Estos colores llamativos pueden hacer que tu sitio web destaque y cree una impresión duradera. Cuando se utilizan estratégicamente, los colores brillantes pueden guiar la atención del usuario y enfatizar elementos importantes sin abrumar el diseño general.</p>
      
      <h2>9. Glassmorfismo</h2>
      
      <p>El glassmorfismo, o efecto de vidrio esmerilado, crea la ilusión de elementos translúcidos con desenfoque de fondo. Esta tendencia añade profundidad y dimensión a interfaces planas, creando una sensación de capas y jerarquía visual. El glassmorfismo funciona particularmente bien con fondos coloridos o fotografías, añadiendo un toque moderno y sofisticado.</p>
      
      <h2>10. Sostenibilidad digital</h2>
      
      <p>La sostenibilidad no se limita al mundo físico; también se está convirtiendo en una consideración importante en el diseño web. El diseño web sostenible implica crear sitios que minimicen el consumo de energía y recursos, con prácticas como la optimización de imágenes, la reducción de HTTP requests y la elección de servidores que utilicen energía renovable.</p>
      
      <h2>Conclusión</h2>
      
      <p>Mantenerse al día con las tendencias de diseño web es esencial para ofrecer una experiencia de usuario moderna y atractiva. Sin embargo, es importante recordar que no todas las tendencias serán adecuadas para tu marca o audiencia específica. La clave está en seleccionar aquellas que complementen tu identidad de marca y mejoren la experiencia de tus usuarios.</p>
      
      <p>¿Estás listo para actualizar tu sitio web con las últimas tendencias de diseño? Contáctanos para descubrir cómo podemos ayudarte a crear un sitio web moderno, atractivo y efectivo que impulse el crecimiento de tu negocio.</p>
    `,
    category: "Diseño Web",
    categoryId: "diseno-web-para-empresas",
    date: "28 Mar 2023",
    author: "César Reyes Jaramillo",
    slug: "tendencias-de-diseno-web-para-2023",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Estrategias de SEO efectivas para pequeñas empresas",
    content: `
      <p>En el competitivo mundo digital actual, tener una presencia online sólida es esencial para cualquier negocio, especialmente para las pequeñas empresas que compiten con grandes corporaciones. El SEO (Search Engine Optimization) es una herramienta fundamental para aumentar la visibilidad de tu sitio web en los motores de búsqueda y atraer tráfico cualificado. En este artículo, exploraremos estrategias de SEO efectivas y asequibles que las pequeñas empresas pueden implementar para mejorar su presencia online.</p>
      
      <h2>1. Investigación de palabras clave enfocada en nichos</h2>
      
      <p>Para las pequeñas empresas, competir por palabras clave generales y altamente competitivas puede ser un desafío. En lugar de eso, enfócate en palabras clave de nicho más específicas y con menor competencia. Estas palabras clave de "cola larga" suelen tener un volumen de búsqueda menor, pero atraen tráfico más cualificado y tienen tasas de conversión más altas.</p>
      
      <p>Utiliza herramientas como Google Keyword Planner, Ubersuggest o SEMrush para identificar palabras clave relevantes para tu negocio. Busca términos específicos relacionados con tu ubicación, productos o servicios especializados.</p>
      
      <h2>2. Optimización de contenido local</h2>
      
      <p>Si tu pequeña empresa atiende a clientes en una área geográfica específica, el SEO local es imprescindible. Asegúrate de incluir tu ubicación en palabras clave, meta descripciones y contenido del sitio. Crea páginas dedicadas a las áreas específicas que atiendes y optimízalas con palabras clave locales relevantes.</p>
      
      <p>Además, reclama y optimiza tu perfil de Google My Business. Completa toda la información, añade fotos de calidad, solicita reseñas a tus clientes y mantén actualizada la información de contacto y horarios.</p>
      
      <h2>3. Creación de contenido valioso y consistente</h2>
      
      <p>El contenido sigue siendo el rey en el mundo del SEO. Crear contenido valioso, informativo y relevante para tu audiencia no solo mejora tu posicionamiento en los motores de búsqueda, sino que también establece tu autoridad en la industria y construye confianza con tus clientes potenciales.</p>
      
      <p>Desarrolla un blog en tu sitio web y publica artículos regularmente sobre temas relacionados con tu industria. Responde a preguntas comunes de tus clientes, proporciona guías útiles y comparte tu experiencia. Recuerda optimizar cada artículo con palabras clave relevantes, pero siempre priorizando la calidad y el valor para el lector.</p>
      
      <h2>4. Optimización técnica del sitio web</h2>
      
      <p>Un sitio web técnicamente optimizado es fundamental para el SEO. Asegúrate de que tu sitio cumpla con estos aspectos técnicos básicos:</p>
      
      <ul>
        <li>Velocidad de carga: Optimiza imágenes, utiliza caché del navegador y considera un hosting de calidad para mejorar la velocidad de tu sitio.</li>
        <li>Diseño responsivo: Tu sitio debe verse y funcionar bien en todos los dispositivos, especialmente en móviles.</li>
        <li>Estructura de URL amigable: Utiliza URLs descriptivas y fáciles de leer que incluyan palabras clave relevantes.</li>
        <li>Estructura de navegación clara: Facilita a los usuarios y a los motores de búsqueda encontrar contenido en tu sitio.</li>
        <li>Metadatos optimizados: Incluye palabras clave relevantes en títulos, meta descripciones y etiquetas de encabezado.</li>
      </ul>
      
      <h2>5. Construcción de enlaces de calidad</h2>
      
      <p>Los enlaces de calidad desde otros sitios web relevantes y autoritarios siguen siendo un factor importante para el SEO. Para las pequeñas empresas, algunas estrategias efectivas de construcción de enlaces incluyen:</p>
      
      <ul>
        <li>Colaboraciones con blogs y sitios web locales</li>
        <li>Participación en directorios de negocios locales y de la industria</li>
        <li>Creación de contenido valioso que otros sitios quieran enlazar naturalmente</li>
        <li>Participación en eventos locales y patrocinios que generen menciones online</li>
        <li>Colaboraciones con influencers y expertos de la industria</li>
      </ul>
      
      <h2>6. Aprovechamiento de las redes sociales</h2>
      
      <p>Aunque las señales sociales no son un factor de clasificación directo, una presencia activa en redes sociales puede aumentar la visibilidad de tu contenido y generar tráfico a tu sitio web. Comparte regularmente tu contenido en plataformas relevantes para tu audiencia, interactúa con tus seguidores y utiliza hashtags relevantes para aumentar el alcance.</p>
      
      <h2>7. Monitoreo y análisis de resultados</h2>
      
      <p>Implementa herramientas de análisis como Google Analytics y Google Search Console para monitorear el rendimiento de tu sitio web. Estas herramientas te proporcionarán información valiosa sobre el tráfico, las palabras clave que generan visitas, las tasas de rebote y más. Utiliza estos datos para refinar continuamente tu estrategia de SEO y enfocarte en lo que funciona mejor para tu negocio.</p>
      
      <h2>Conclusión</h2>
      
      <p>El SEO es un proceso continuo que requiere tiempo, paciencia y consistencia. Para las pequeñas empresas con recursos limitados, es importante enfocarse en estrategias que ofrezcan el mayor retorno de inversión. Comienza con los fundamentos, prioriza la calidad sobre la cantidad y adapta tu estrategia según los resultados que obtengas.</p>
      
      <p>Recuerda que el objetivo final del SEO no es solo aumentar el tráfico, sino atraer visitantes cualificados que puedan convertirse en clientes. Con las estrategias adecuadas, incluso las pequeñas empresas pueden lograr resultados significativos en los motores de búsqueda y competir efectivamente en el espacio digital.</p>
      
      <p>¿Necesitas ayuda para implementar estas estrategias de SEO en tu pequeña empresa? Contáctanos para descubrir cómo podemos ayudarte a mejorar tu visibilidad online y atraer más clientes cualificados a tu negocio.</p>
    `,
    category: "SEO",
    categoryId: "seo-y-campanas-de-marketing",
    date: "10 Mar 2023",
    author: "César Reyes Jaramillo",
    slug: "estrategias-de-seo-efectivas-para-pequenas-empresas",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    category: post.categoryId,
    slug: post.slug,
  }))
}

export async function generateMetadata(props: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await props.params;
  const post = await getArticle(category, slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que estás buscando no existe.",
    };
  }
  // Asegurar que los campos sean strings
  const title = typeof post.title === "string" ? post.title : String(post.title);
  const excerpt = typeof post.excerpt === "string" ? post.excerpt : String(post.excerpt || "");
  const postCategory = typeof post.category === "string" ? post.category : String(post.category || "");
  return {
    title: `${title} - Blog de César Reyes Jaramillo`,
    description: excerpt || `Artículo sobre ${postCategory} por César Reyes Jaramillo`,
  };
}

export default async function ArticlePage(props: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await props.params;
  const post = await getArticle(category, slug);

  if (!post) {
    notFound();
  }

  const categoryObj = categories.find((cat) => cat.id === category);
  const htmlContent = marked.parse(post.content || "");

  return (
    <>
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Link href={`/blog/${category}`} className="text-primary font-medium hover:underline">
                ← Volver a {categoryObj?.title || "Categoría"}
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image src={post.image || "/placeholder.svg"} alt={post.title || ""} fill className="object-cover" />
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-white bg-primary px-3 py-1 rounded-full">{post.category || ""}</span>
                  <span className="text-sm text-gray-500 ml-3">{post.date || ""}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title || "Sin título"}</h1>

                <div className="flex items-center mb-8">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/reloj.webp"
                      alt={post.author || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{post.author || ""}</p>
                    <p className="text-gray-600 text-sm">Consultor SEO y Automatización</p>
                  </div>
                </div>

                <div className="prose prose-xl max-w-none !text-gray-800" style={{ fontSize: '1.375rem' /* 22px */ }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Comparte este artículo</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/80">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/80">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
