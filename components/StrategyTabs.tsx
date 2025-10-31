'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface StrategyTabsProps {
  isEmotionalView?: boolean;
}

const StrategyTabs = ({ isEmotionalView = false }: StrategyTabsProps) => {
  const [activeTab, setActiveTab] = useState('porque');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Definir las imágenes para cada pestaña con sus dimensiones
  const tabImages = {
    porque: [
      { src: '/images/tabs/César Reyes.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Estadísticas_César Reyes.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Dr. Guido Díaz.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Estadísticas_ Dr. Guido Díaz.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Impermeabiisa.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Estadísticas_Impermeabiisa.webp', width: 800, height: 1000 }
    ],
    donde: [
      { src: '/images/efecto_parallax/proteger-lo_que_has_construido_color.webp', width: 800, height: 1000 },
      { src: '/images/blog_cesar_bn.webp', width: 800, height: 1000 },
      { src: '/images/informes_resultados_objetivo.webp', width: 800, height: 1000 },
      { src: '/images/posicionamiento_web.webp', width: 800, height: 1000 }
    ],
    como: [
      { src: '/images/tabs/Publicaciones_sin-Objetivo1.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Publicaciones_con_Objetivo1.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Publicidad_con_un_Objetivo.webp', width: 800, height: 1000 },
      { src: '/images/tabs/Publicidad_con_un_Objetivo2.webp', width: 800, height: 1000 }
    ]
  };

  // Función para formatear el texto con saltos de línea y viñetas
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, i) => {
      if (paragraph.startsWith('• ')) {
        return (
          <p key={i} className="flex items-start mb-2">
            <span className="mr-2">•</span>
            <span>{paragraph.substring(2)}</span>
          </p>
        );
      }
      return <p key={i} className="mb-4">{paragraph}</p>;
    });
  };

  const tabs = [
    {
      id: 'porque',
      title: '¿El Porqué?',
      content: (isEmotional: boolean) => (
        <div className="space-y-4">
          {isEmotional ? (
            <>
              <p>Tus clientes están ahí afuera, solo necesitan encontrarte.</p>
              <p className="font-medium">Muchos emprendedores viven esto:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publican, pero nadie pregunta por sus productos.</li>
                <li>Gastan en anuncios sin resultados.</li>
                <li>Sienten que el esfuerzo no se refleja en ventas.</li>
              </ul>
              <p>👉 Nosotros te ayudamos a conectar con las personas correctas y a que cada acción tenga sentido y resultados.</p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tus clientes te buscan, pero no te encuentran.</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Publican diario en redes, pero no aparecen en Google (85% ventas Ecuador 2025 son digitales).</li>
                <li>Gastan en ads sin validar mercado real.</li>
                <li>No saben qué busca el cliente ni cómo decide.</li>
              </ul>
              <p className="mt-4 font-medium text-gray-900">
                👉 Mi consultoría analiza tus datos, encuentra oportunidades y transforma esfuerzos en ventas medibles (+20% visibilidad ROI).
              </p>
            </>
          )}
        </div>
      ),
      images: tabImages.porque
    },
    {
      id: 'donde',
      title: '¿El Dónde?',
      content: (isEmotional: boolean) => (
        <div className="space-y-4">
          {isEmotional ? (
            <>
              <p>El mundo cambió, y tu negocio puede crecer con él.</p>
              <p className="font-medium">Hoy el reto es grande, pero posible:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tus redes no te traen clientes nuevos.</li>
                <li>Todo se mueve tan rápido que cuesta adaptarse.</li>
                <li>Sientes que trabajas mucho, pero avanzas poco.</li>
              </ul>
              <p>👉 Te acompañamos paso a paso para que tu negocio se adapte y crezca sin perder su esencia.</p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">El mercado cambió, y las reglas también.</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Publicas en redes, pero nadie te ve en búsquedas locales Loja.</li>
                <li>Competencia vende online mientras esperas llamadas.</li>
                <li>Crees conocer tu mercado, pero ya evolucionó (83% empresas pierden por estrategias mal enfocadas).</li>
              </ul>
              <p className="mt-4 font-medium text-gray-900">
                👉 Con planificación basada en estadísticas, mi consultoría te pone a competir en igualdad – posicionamiento web Ecuador probado.
              </p>
            </>
          )}
        </div>
      ),
      images: tabImages.donde
    },
    {
      id: 'como',
      title: '¿El Cómo?',
      content: (isEmotional: boolean) => (
        <div className="space-y-4">
          {isEmotional ? (
            <>
              <p>No se trata de adivinar, se trata de hacerlo bien.</p>
              <p className="font-medium">Muchos emprendedores sienten que:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hacen todo, pero no ven resultados.</li>
                <li>No saben por dónde empezar a mejorar.</li>
                <li>Les falta alguien que les guíe y les dé claridad.</li>
              </ul>
              <p>👉 Te ayudamos a organizar tu negocio, usar la tecnología a tu favor y enfocarte en lo que más valor tiene: tus clientes.</p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decidir con datos es avanzar con seguridad.</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Deciden sin info real, estancados en intuición.</li>
                <li>No miden resultados ni saben qué funciona.</li>
                <li>Ignoran herramientas que ahorran tiempo/dinero.</li>
              </ul>
              <p className="mt-4 font-medium text-gray-900">
                👉 Mi consultoría usa IA y planificación profesional para ejecutar con método – resultados reales en 6 meses, como +15% crecimiento semestral.
              </p>
            </>
          )}
        </div>
      ),
      images: tabImages.como
    }
  ];

  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    if (currentTab) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === currentTab.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [activeTab]);

  // Configurar el intervalo para cambiar de imagen cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reiniciar el índice de la imagen cuando se cambia de pestaña
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium relative transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="prose max-w-none pr-0 md:pr-8"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {tabs.find(tab => tab.id === activeTab)?.title}
                    </h3>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                      {tabs.find(tab => tab.id === activeTab)?.content(isEmotionalView)}
                    </div>
                    <a 
                      href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20una%20consultoría%20personalizada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Quiero Contratar Una Consultoría
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Contenido multimedia - Video para 'donde', imágenes para otras pestañas */}
              {activeTab === 'donde' ? (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
                    <div className="w-full" style={{ position: 'relative', paddingTop: '133.33%' }}>
                      <iframe 
                        src="https://iframe.mediadelivery.net/embed/455329/8ba3b9be-7353-4c14-8f46-1a0b647bfcf0?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                        loading="lazy" 
                        style={{ 
                          border: 0, 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          width: '100%', 
                          height: '100%' 
                        }} 
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" 
                        allowFullScreen
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full max-w-[400px] md:max-w-[500px] mx-auto"
                      style={{ aspectRatio: '3/4' }}
                    >
                      {(() => {
                        const currentTab = tabs.find(tab => tab.id === activeTab);
                        const imageItem = currentTab?.images?.[currentImageIndex];
                        
                        if (!imageItem) return (
                          <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              Quiero Contratar Una Consultoría
                            </h3>
                            <a 
                              href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20una%20consultoría%20personalizada"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              Quiero Contratar Una Consultoría
                            </a>
                          </div>
                        );
                        
                        // Si la imagen no existe, mostrar un placeholder
                        if (!imageItem.src) {
                          return (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                              <span className="text-gray-400">Imagen no disponible</span>
                            </div>
                          );
                        }
                        
                        return (
                          <Image
                            src={imageItem.src}
                            alt={`${currentTab?.title || 'Imagen'} ${currentImageIndex + 1}`}
                            width={imageItem.width}
                            height={imageItem.height}
                            className="object-contain w-full h-full"
                            sizes="(max-width: 768px) 100vw, 30vw"
                            priority={currentImageIndex === 0}
                          />
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                  {/* Indicadores de navegación */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                    {tabs.find(tab => tab.id === activeTab)?.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTabs;
