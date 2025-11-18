'use client';

import React, { useState } from 'react';
import { PlayCircle, Clock, Smartphone, DollarSign, CheckCircle, MessageCircle, ArrowRight, Search, Rocket, Users, BarChart2, Shield } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';

// Simple VideoModal component
const VideoModal = ({ isOpen, onClose, videoUrl }: { isOpen: boolean; onClose: () => void; videoUrl: string }) => {
  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  
  // Convert YouTube URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&modestbranding=1`;
      }
    }
    return url;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" 
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 text-2xl"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src={getEmbedUrl(videoUrl)}
            className="w-full h-[60vh]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video demostrativo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

// Simple Accordion component with TypeScript types
interface AccordionProps {
  children: React.ReactNode;
  type?: string;
  collapsible?: boolean;
  className?: string;
  defaultValue?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const Accordion = ({ children, className = '', type = 'single', collapsible = false, defaultValue }: AccordionProps) => {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue || null);
  
  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<AccordionItemProps>(child)) {
      const isOpen = openItem === child.props.value;
      return React.cloneElement<AccordionItemProps>(child, { 
        ...child.props,
        isOpen,
        onToggle: () => handleItemClick(child.props.value)
      });
    }
    return child;
  });

  return <div className={`space-y-4 ${className}`}>{childrenWithProps}</div>;
};

const AccordionItem = ({ 
  children, 
  value, 
  className = '',
  isOpen = false,
  onToggle = () => {}
}: AccordionItemProps & { isOpen?: boolean; onToggle?: () => void }) => {
  return (
    <div className={`${className} ${isOpen ? 'is-open' : ''}`} data-state={isOpen ? 'open' : 'closed'}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Solo pasar isOpen y onToggle a los componentes que los necesitan
        const extraProps: Partial<AccordionTriggerProps> & Partial<AccordionContentProps> = {};
        if (child.type === AccordionTrigger || child.type === AccordionContent) {
          extraProps.isOpen = isOpen;
        }
        if (child.type === AccordionTrigger) {
          extraProps.onToggle = onToggle;
        }
        
        return React.cloneElement(child, extraProps);
      })}
    </div>
  );
};

const AccordionTrigger = ({ 
  children, 
  className = '', 
  onClick,
  isOpen = false
}: AccordionTriggerProps & { isOpen?: boolean }) => {
  return (
    <div 
      className={`flex items-center justify-between w-full text-left cursor-pointer group ${className}`}
      onClick={onClick}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
    </div>
  );
};

const AccordionContent = ({ 
  children, 
  className = '',
  isOpen = false
}: AccordionContentProps & { isOpen?: boolean }) => {
  return (
    <div 
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} ${className}`}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
    </div>
  );
};

// Add proper export for the page component
export default function MenuObjetivoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('comprar lasaña en Loja');
  const [showVideo, setShowVideo] = useState(false);
  
  const toggleVideo = () => setShowVideo(!showVideo);

  const openModal = (url: string) => {
    setModalVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoUrl('');
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault();
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    }
  };

  const faqData = {
    h2: "Las preguntas que todos hacen (y sus respuestas)",
    questions: [
      {
        q: "¿Es difícil de configurar el menú digital?",
        a: "Configurar tu menú digital es más fácil de lo que imaginas. Con nuestra plataforma intuitiva, podrás tener todo listo en menos de 30 minutos. Además, te brindamos soporte personalizado para asegurarnos de que todo funcione perfectamente.",
        cta: "Ver demostración"
      },
      {
        q: "¿Funcionará en el celular de mis clientes?",
        a: "¡Absolutamente! Nuestro menú digital está diseñado para verse perfectamente en cualquier dispositivo móvil, tablet o computadora. Se adapta automáticamente al tamaño de la pantalla, ofreciendo la mejor experiencia a tus clientes.",
        cta: "Ver en acción"
      },
      {
        q: "¿Cómo ayuda a mi negocio a crecer?",
        a: "Un menú digital mejora la experiencia del cliente, aumenta la visibilidad en Google, reduce costos de impresión y te permite actualizar precios y disponibilidad en tiempo real. Muchos de nuestros clientes reportan un aumento en ventas del 20-30% después de implementarlo.",
        cta: "Conocer beneficios"
      },
      {
        q: "¿Qué incluye exactamente el servicio?",
        a: "Obtienes: menú digital personalizado, dominio propio, código QR, panel de administración fácil de usar, soporte técnico, actualizaciones ilimitadas, estadísticas de visitas y más. Todo por una tarifa mensual sin sorpresas.",
        cta: "Ver planes y precios"
      }
    ]
  };

  return (
    <div className="bg-white">
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        videoUrl={modalVideoUrl} 
      />

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <img src="/images/menuobjetivo/menu-digital-restaurantes-hero.webp" alt="Menú digital para restaurantes" className="absolute z-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: 'var(--font-poiret-one)' }}>
            <div className="block">Tu menú digital, sin complicaciones</div>
            <div className="text-[#FF6B00]">en menos de 1 minuto</div>
          </h1>
          <p className="text-lg md:text-2xl mt-4 font-montserrat">
            Recupera tu tiempo, atrae más clientes por Google y deja de pelear con la tecnología.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg"
          >
            Agenda una Llamada Ahora
          </a>
          <p className="mt-4 text-sm text-gray-300">✅ Sin tarjeta de crédito. Sin compromisos. Solo una conversación.</p>
        </div>
      </section>

      {/* 2. Todo lo que incluye tu menú digital */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que incluye tu menú digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una solución completa para que tu restaurante destaque en línea
            </p>
          </div>
          
          <div id="video-demo" className="bg-gray-50 rounded-xl p-2 md:p-4 max-w-4xl mx-auto">
            {showVideo ? (
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/4hot82GQezI?autoplay=1&mute=1"
                  title="Demostración en vivo de Menú Digital"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div 
                className="relative aspect-video bg-black rounded-lg cursor-pointer group"
                onClick={toggleVideo}
              >
                <img
                  src="/images/menuobjetivo/video-explicativo-thumbnail.webp"
                  alt="Ver demostración en vivo"
                  className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. La Prueba Definitiva: Adminístralo en Vivo */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            La Prueba Definitiva: <span className="text-[#FF6B00]">Adminístralo en Vivo</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            A tu izquierda, el panel de control. A tu derecha, el menú público. Despliega una acción y sigue los pasos para ver la magia en tiempo real.
          </p>
        </div>

        {/* Instructions Accordion */}
        <div className="max-w-4xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
            <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border-gray-700">
              <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                Actualizar Menú
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center text-gray-300">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B00] text-white font-bold">1</span>
                        <p>Activa o desactiva un plato.</p>
                    </div>
                    <ArrowRight className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B00] text-white font-bold">2</span>
                        <p>Recarga el menú y mira la magia.</p>
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-gray-800 rounded-lg border-gray-700">
              <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                Agregar Plato Nuevo
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center text-gray-300">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">1</span>
                        <p className="text-sm">Clic en "Nuevo Plato".</p>
                    </div>
                    <ArrowRight className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">2</span>
                        <p className="text-sm">Llena los campos.</p>
                    </div>
                    <ArrowRight className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">3</span>
                        <p className="text-sm">Actívalo y guarda.</p>
                    </div>
                     <ArrowRight className="hidden md:block" />
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">4</span>
                        <p className="text-sm">Recarga y listo.</p>
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
            <div className="bg-gray-800 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400 mx-auto">Panel de Control</p>
            </div>
            <iframe src="https://sartenes.vercel.app/admin" className="w-full h-[70vh]" title="Panel de Control"></iframe>
          </div>
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
            <div className="bg-gray-800 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400 mx-auto">Menú Público</p>
            </div>
            <iframe src="https://sartenes.vercel.app/" className="w-full h-[70vh]" title="Menú Público"></iframe>
          </div>
        </div>
        <div className="text-center mt-16">
            <a href="#" className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg">
                Quiero mi propio Menú Interactivo
            </a>
        </div>
      </section>

      {/* 4. Características */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para modernizar tu restaurante
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Smartphone className="h-10 w-10 text-[#FF6B00]" />,
                title: "Diseño Responsive",
                description: "Se ve perfecto en celulares, tablets y computadoras"
              },
              {
                icon: <Clock className="h-10 w-10 text-[#FF6B00]" />,
                title: "Actualización en Tiempo Real",
                description: "Cambia precios, disponibilidad y más al instante"
              },
              {
                icon: <Search className="h-10 w-10 text-[#FF6B00]" />,
                title: "Optimizado para Google",
                description: "Mejora tu visibilidad en los resultados de búsqueda"
              },
              {
                icon: <DollarSign className="h-10 w-10 text-[#FF6B00]" />,
                title: "Sistema de Pedidos",
                description: "Acepta pedidos en línea sin comisiones ocultas"
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-[#FF6B00]" />,
                title: "Estadísticas Avanzadas",
                description: "Conoce qué platos son los más populares"
              },
              {
                icon: <Shield className="h-10 w-10 text-[#FF6B00]" />,
                title: "Soporte 24/7",
                description: "Asistencia técnica cuando la necesites"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#FFF5F0] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿Tus clientes te encuentran en Google? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Tus clientes te encuentran en Google? Compruébalo ahora.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              La mayoría de dueños de restaurantes creen que tienen presencia online, pero sus clientes no los encuentran cuando buscan lo que venden. Haz la prueba. Busca en Google exactamente como lo haría un cliente hambriento:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ej: comida italiana en [tu ciudad]"
              />
              <button 
                onClick={handleSearch}
                className="bg-[#FF6B00] hover:bg-[#E55F00] text-white px-6 rounded-lg flex items-center justify-center"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Ejemplo: "mejor restaurante italiano en [tu ciudad]" o "pedir pizza a domicilio"
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <FaqSection 
        h2="Las preguntas que todos hacen (y sus respuestas):"
        questions={[
          {
            q: "¿Es difícil de usar? No soy bueno con la tecnología.",
            a: "Si sabes usar WhatsApp, sabes usar MenúObjetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.",
            cta: "Ver demo"
          },
          {
            q: "¿Esto es solo para restaurantes grandes?",
            a: "Todo lo contrario. MenúObjetivo fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.",
            cta: "Conocer más"
          },
          {
            q: "¿Ya tengo redes sociales. ¿Para qué necesito esto?",
            a: "Las redes sociales son geniales para conversar con tus clientes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde comer. MenúObjetivo complementa tus redes, no las reemplaza.",
            cta: "Ver beneficios"
          },
          {
            q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
            a: "Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por pedido, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.",
            cta: "Hablar por WhatsApp"
          }
        ]}
      />

      {/* 6. CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF6B00] to-[#FF8C42] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para llevar tu restaurante al siguiente nivel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo y descubre cómo un menú digital puede transformar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const videoSection = document.getElementById('video-demo');
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: 'smooth' });
                  // If the video is not showing, toggle it to show
                  if (!showVideo) {
                    toggleVideo();
                  }
                }
              }}
              className="bg-white text-[#FF6B00] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Ver Demostración
            </button>
            <a 
              href="tel:+593000000000" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              ¿Tienes dudas? Escríbenos
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Prueba gratuita de 14 días</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

