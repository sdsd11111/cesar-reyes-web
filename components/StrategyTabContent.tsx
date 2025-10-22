'use client';

import Image from 'next/image';
import Link from 'next/link';

interface StrategyTabContentProps {
  isEmotionalView: boolean;
  activeStep: number;
  onNext: () => void;
  onPrev: () => void;
}

const StrategyTabContent = ({ isEmotionalView, activeStep, onNext, onPrev }: StrategyTabContentProps) => {
  const tabs = [
    {
      title: isEmotionalView ? '1. Conociendo tu Sueño' : '1. Análisis Estratégico Inicial',
      image: '/images/estudio_de_mercado.webp',
      alt: isEmotionalView ? 'Conociendo tu negocio' : 'Análisis estratégico',
      emotionalItems: [
        'Vamos a descubrir juntos qué hace único a tu negocio',
        'Analizaremos cómo destacar entre la competencia',
        'Identificaremos las palabras que tus clientes usan para encontrarte',
        'Veremos cómo mejorar lo que ya haces bien'
      ],
      logicalItems: [
        'Estudio detallado de la competencia local',
        'Análisis de mercado y tendencias del sector',
        'Investigación de palabras clave relevantes',
        'Evaluación de oportunidades de mejora'
      ],
      link: '/servicios/analisis-estrategico'
    },
    {
      title: isEmotionalView ? '2. Tu Sitio Web' : '2. Desarrollo Web',
      image: '/images/Diseño Web.webp',
      alt: isEmotionalView ? 'Estrategia digital personalizada' : 'Plan estratégico digital',
      emotionalItems: [
        'Con lo aprendido en el estudio, crearemos un plan hecho a tu medida',
        'Diseñaremos cada página pensando en lo que tus clientes necesitan encontrar',
        'Los textos que escribiremos te ayudarán a aparecer cuando te busquen en Google',
        'Cada palabra estará pensada para conectar con tus clientes ideales'
      ],
      logicalItems: [
        'Desarrollo de plan estratégico basado en el análisis inicial',
        'Creación de páginas optimizadas con palabras clave identificadas',
        'Redacción de contenido SEO que responde a las búsquedas de tus clientes',
        'Estructura de sitio diseñada para conversiones y experiencia de usuario'
      ],
      link: '/servicios/desarrollo-web'
    },
    {
      title: isEmotionalView ? '3. Sé el Mejor' : '3. Posicionamiento',
      image: '/images/posicionamiento_slide_seo_objetivo.webp',
      alt: isEmotionalView ? 'Posicionamiento de marca' : 'Estrategia de posicionamiento',
      emotionalItems: [
        'Te ayudaremos a ser el referente en tu sector',
        'Posicionaremos tu marca en la mente de tus clientes ideales',
        'Trabajaremos en tu reputación online',
        'Convertiremos a tus clientes en promotores de tu marca'
      ],
      logicalItems: [
        'Estrategias de SEO avanzado para posicionamiento orgánico',
        'Optimización técnica del sitio web',
        'Estrategia de enlaces y autoridad de dominio',
        'Monitoreo y análisis de métricas de rendimiento'
      ],
      link: '/servicios/posicionamiento'
    }
  ];

  const currentTab = tabs[activeStep - 1];
  const items = isEmotionalView ? currentTab.emotionalItems : currentTab.logicalItems;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
        <Image 
          src={currentTab.image}
          alt={currentTab.alt}
          width={500}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {currentTab.title}
        </h3>
        <ul className="space-y-3 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start group">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link 
            href={currentTab.link} 
            className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500/10 hover:text-blue-300 transition-colors"
          >
            Conocer más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StrategyTabContent;
