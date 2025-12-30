import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import { Rocket, Briefcase, Store, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Mí - César Reyes',
  description: 'Conoce más sobre César Reyes, estratega de negocios y posicionamiento web con más de 24 años de experiencia ayudando a emprendedores y empresarios a hacer crecer sus negocios de manera sostenible.',
  openGraph: {
    title: 'Sobre Mí - César Reyes',
    description: 'Estratega de negocios y posicionamiento web con más de 24 años de experiencia ayudando a emprendedores y empresarios a crecer de manera sostenible.',
    images: [
      {
        url: '/images/cesar-reyes-perfil.webp',
        width: 1200,
        height: 630,
        alt: 'César Reyes Jaramillo',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

// Contenido de la página
const pageContent = {
  hero: {
    title: 'César Reyes',
    subtitle: 'Estratega de negocios y posicionamiento web',
    description: 'Con más de 24 años de experiencia ayudando a emprendedores y empresarios a hacer crecer sus negocios de manera sostenible.',
    cta: 'Conoce mi historia',
    ctaLink: '#inicio',
  },
  sections: [
    {
      id: 'inicio',
      title: 'Todo comenzó con una jabonera',
      content: [
        'A los siete años acompañé a mi madre al Huaquillas para hacer compras para su pequeño negocio. Recuerdo que, cuando me iba a comprar unas cosas para mi, me dio un consejo que nunca olvidaría:',
        '“Si compras esta jabonera en 1 sucre y la vendes en 3, ¿cuánto habrás ganado si vendes 10 con lo que te dio tu papá?”',
        'Ese día entendí que los números no solo son una suma o una multiplicación, si no, la visión que tenemos de lo que queremos ser, cuentan una historia de como quiero verme más adelante. Hablan del valor, del esfuerzo y de la visión.'
      ],
      image: '/images/sobre-mi/cesar reyes y su madre.webp',
      imagePosition: 'right' as const,
      bgColor: 'white'
    },
    {
      id: 'decision',
      title: 'Una decisión que lo cambiaría todo',
      content: [
        'En la universidad, para elegir las carreras, nos poníamos en fila frente a una persona que tenía un escritorio y un letrero en cartulina con el nombre de la carrera. Cuando estaba a un paso de elegir Agronomía, surgió una reflexión que cambiaría el camino por el cual mi vida se desarrollaría: entendí que no era mi afán aprender cómo hacer crecer una planta o qué darle a un animal para que produzca más carne o leche. Lo que realmente me movía eran las proyecciones que hacía en mi cabeza: cuánto iba a producir en un año, cuánto me costaría hacerlo y cuánta utilidad dejaría.',
        'En ese momento, di un paso a la derecha, hacia la carrera de Administración de Empresas, y me convertiría en un profesional apasionado que entiende que un negocio no se trata solo de ganar uno, sino de ayudar a que otros también ganen.'
      ],
      image: '/images/sobre-mi/cesar reyes aroma de montaña.webp',
      imagePosition: 'left' as const,
      bgColor: 'gray-50'
    },
    {
      id: 'cambio-enfoque',
      title: 'El cambio de enfoque que lo cambió todo',
      content: [
        'Desde joven entendí que atraemos en lo que enfocamos nuestra energía. Durante años me concentré en ahorrar, en reducir gastos, en hacerlo todo yo mismo.',
        <div key="highlighted-text" className="space-y-4">
          <p className="text-xl font-medium">Creía que así ganaba.</p>
          <p>Hasta que un amigo de Cuenca me dijo algo que me cambió la manera de ver los negocios:</p>
          <div className="bg-blue-800/30 border-l-4 border-yellow-400 pl-6 py-4 my-4">
            <p className="text-lg italic">"Si liberas tiempo y te dedicas a hacer las cosas que hace un dueño, contactos, eventos, alianzas, a dirigir, ganarás diez veces más de lo que ahorras."</p>
            <p className="font-medium mt-2">- Un amigo de Cuenca</p>
          </div>
          <p>Tenía razón. Cuando dejé de ser el empleado de mi propio negocio y empecé a ser su gerente, nació La Batalla del Sharwest, un evento que llegó a generar ingresos de 1.500 dólares por noche.</p>
          <p className="text-xl font-bold">No fue suerte, fue cambio de enfoque.</p>
        </div>
      ],
      bgColor: 'blue-900',
      isDark: true,
      textWhite: true,
      fullWidth: true,
      customClass: 'py-16 md:py-24'
    },
    {
      id: 'problema-proposito',
      title: 'Cuando un problema se convirtió en propósito',
      content: [
        'En 2018, cuando tenía un salón de eventos, contraté una página web. Nunca me la entregaron ni me devolvieron el anticipo.',
        'Ese día tomé una decisión: aprendería a hacerlo yo mismo.',
        'Así nació Objetivo, que en sus inicios se llamaba Automatizotunegocio: una empresa nacida desde la frustración, pero sostenida por la disciplina y el aprendizaje constante.',
        'Me volví autodidacta. Aprendí que no basta con copiar lo que se ve en internet: hay que entender la ciencia detrás de cada acción.'
      ],
      image: '/images/sobre-mi/loxa.webp',
      imagePosition: 'right' as const,
      bgColor: 'white',
      customClass: 'py-16 md:py-24'
    },
    {
      id: 'servicios',
      title: '',
      content: [
        <div key="services-container" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que hacemos</h2>
            <p className="text-xl text-gray-600">Soluciones integrales para potenciar tu presencia digital</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {/* Card 1 */}
            <div key="analisis" className="flex-1 min-w-[300px] bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Análisis Estratégico</h3>
              <p className="text-gray-600 mb-6 flex-grow">Estudiamos tu mercado y competencia para crear una estrategia digital efectiva que impulse tu negocio.</p>
              <div className="mt-auto">
                <a href="/servicios/analisis-estrategico" className="inline-flex items-center justify-center px-8 py-3 w-full max-w-xs mx-auto border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Ver más
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div key="desarrollo" className="flex-1 min-w-[300px] bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Desarrollo Web</h3>
              <p className="text-gray-600 mb-6 flex-grow">Creamos sitios web rápidos, seguros y optimizados para conversiones que generan resultados.</p>
              <div className="mt-auto">
                <a href="/servicios/desarrollo-web" className="inline-flex items-center justify-center px-8 py-3 w-full max-w-xs mx-auto border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Ver más
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div key="posicionamiento" className="flex-1 min-w-[300px] bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Posicionamiento de Marca</h3>
              <p className="text-gray-600 mb-6 flex-grow">Mejoramos tu visibilidad en línea y construimos una presencia digital sólida y reconocible.</p>
              <div className="mt-auto">
                <a href="/servicios/posicionamiento-marca" className="inline-flex items-center justify-center px-8 py-3 w-full max-w-xs mx-auto border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      ],
      bgColor: 'blue-50',
      customClass: 'py-16 md:py-24'
    },
    {
      id: 'resumen',
      title: 'En resumen',
      content: [
        <div key="emprendedor" className="flex items-center gap-4 mb-2">
          <div className="bg-orange-500/20 p-3 rounded-full">
            <Rocket className="w-8 h-8 text-orange-500" />
          </div>
          <span className="text-2xl font-bold text-white">Emprendedor</span>
        </div>,
        <div key="pymes" className="flex items-center gap-4 mb-2 mt-6">
          <div className="bg-orange-500/20 p-3 rounded-full">
            <Store className="w-8 h-8 text-orange-500" />
          </div>
          <span className="text-2xl font-bold text-white">Pymes</span>
        </div>,
        <div key="experiencia" className="flex items-center gap-4 mb-2 mt-6">
          <div className="bg-orange-500/20 p-3 rounded-full">
            <Briefcase className="w-8 h-8 text-orange-500" />
          </div>
          <span className="text-2xl font-bold text-white">24 años de experiencia</span>
        </div>,
        <div key="seo" className="flex items-center gap-4 mb-2 mt-6">
          <div className="bg-orange-500/20 p-3 rounded-full">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
          <span className="text-2xl font-bold text-white">Preparación SEO</span>
        </div>,

        'Por eso, mi trabajo no solo trata de SEO o páginas web. Trata de personas que deciden crecer y necesitan una guía que entienda su contexto, su ritmo y su propósito.'
      ],
      bgColor: 'dark',
      isDark: true
    }
  ]
};

export default function SobremiPage() {
  return (
    <>
      <main>
        <HeroSection
          title={pageContent.hero.title}
          subtitle={pageContent.hero.subtitle}
          description={pageContent.hero.description}
          cta={pageContent.hero.cta}
          ctaLink={pageContent.hero.ctaLink}
        />

        {pageContent.sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            image={section.image}
            imagePosition={section.imagePosition}
            bgColor={section.bgColor || 'white'}
            isDark={(section as any).isDark || false}
            fullWidth={(section as any).fullWidth || false}
            overlay={(section as any).overlay ?? false}
            hasCta={(section as any).hasCta ?? false}
            cta={(section as any).cta ?? ''}
            ctaLink={(section as any).ctaLink ?? ''}
            index={index}
          />
        ))}

        {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
        <div style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
          aria-hidden="true">
          <h1>César Reyes Jaramillo - Estratega de Negocios y Posicionamiento Web</h1>
          <p>Con más de 24 años de experiencia ayudando a emprendedores y empresarios a hacer crecer sus negocios de forma sostenible en Ecuador.</p>

          <h2>Todo comenzó con una jabonera</h2>
          <p>A los siete años acompañé a mi madre al Huaquillas para hacer compras para su pequeño negocio. Recuerdo que, cuando me iba a comprar unas cosas para mi, me dio un consejo que nunca olvidaría: "Si compras esta jabonera en 1 sucre y la vendes en 3, ¿cuánto habrás ganado si vendes 10 con lo que te dio tu papá?"</p>
          <p>Ese día entendí que los números no solo son una suma o una multiplicación, si no, la visión que tenemos de lo que queremos ser, cuentan una historia de como quiero verme más adelante. Hablan del valor, del esfuerzo y de la visión.</p>

          <h2>Una decisión que lo cambiaría todo</h2>
          <p>En la universidad, para elegir las carreras, nos poníamos en fila frente a una persona que tenía un escritorio y un letrero en cartulina con el nombre de la carrera. Cuando estaba a un paso de elegir Agronomía, surgió una reflexión que cambiaría el camino por el cual mi vida se desarrollaría: entendí que no era mi afán aprender cómo hacer crecer una planta o qué darle a un animal para que produzca más carne o leche. Lo que realmente me movía eran las proyecciones que hacía en mi cabeza: cuánto iba a producir en un año, cuánto me costaría hacerlo y cuánta utilidad dejaría.</p>
          <p>En ese momento, di un paso a la derecha, hacia la carrera de Administración de Empresas, y me convertiría en un profesional apasionado que entiende que un negocio no se trata solo de ganar uno, sino de ayudar a que otros también ganen.</p>

          <h2>El cambio de enfoque que lo cambió todo</h2>
          <p>Desde joven entendí que atraemos en lo que enfocamos nuestra energía. Durante años me concentré en ahorrar, en reducir gastos, en hacerlo todo yo mismo. Creía que así ganaba.</p>
          <p>Hasta que un amigo de Cuenca me dijo algo que me cambió la manera de ver los negocios: "Si liberas tiempo y te dedicas a hacer las cosas que hace un dueño, contactos, eventos, alianzas, a dirigir, ganarás diez veces más de lo que ahorras."</p>
          <p>Tenía razón. Cuando dejé de ser el empleado de mi propio negocio y empecé a ser su gerente, nació La Batalla del Sharwest, un evento que llegó a generar ingresos de 1.500 dólares por noche. No fue suerte, fue cambio de enfoque.</p>

          <h2>Cuando un problema se convirtió en propósito</h2>
          <p>En 2018, cuando tenía un salón de eventos, contraté una página web. Nunca me la entregaron ni me devolvieron el anticipo. Ese día tomé una decisión: aprendería a hacerlo yo mismo.</p>
          <p>Así nació Objetivo, que en sus inicios se llamaba Automatizotunegocio: una empresa nacida desde la frustración, pero sostenida por la disciplina y el aprendizaje constante.</p>
          <p>Me volví autodidacta. Aprendí que no basta con copiar lo que se ve en internet: hay que entender la ciencia detrás de cada acción.</p>

          <h2>Lo que hacemos - Servicios</h2>
          <h3>Análisis Estratégico</h3>
          <p>Estudiamos tu mercado y competencia para crear una estrategia digital efectiva que impulse tu negocio.</p>

          <h3>Desarrollo Web</h3>
          <p>Creamos sitios web rápidos, seguros y optimizados para conversiones que generan resultados.</p>

          <h3>Posicionamiento de Marca</h3>
          <p>Mejoramos tu visibilidad en línea y construimos una presencia digital sólida y reconocible.</p>

          <h2>En resumen</h2>
          <ul>
            <li>Emprendedor con más de 24 años de experiencia</li>
            <li>Especializado en PYMEs y microempresas en Ecuador</li>
            <li>Experiencia en consultoría empresarial y estrategia digital</li>
            <li>Experto en SEO y posicionamiento web</li>
            <li>Ingeniero Comercial con enfoque en resultados medibles</li>
          </ul>
          <p>Por eso, mi trabajo no solo trata de SEO o páginas web. Trata de personas que deciden crecer y necesitan una guía que entienda su contexto, su ritmo y su propósito.</p>
        </div>
      </main>
    </>
  );
}
