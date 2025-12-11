'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Check, ArrowRight, ChevronRight, ChevronDown, CalendarDays, X, Star, Camera, ArrowDown, Clock, MessageCircle, CheckCircle } from 'lucide-react';

// Props para el componente CountdownDisplay
interface CountdownDisplayProps {
  hours: string;
  minutes: string;
  seconds: string;
}

// Componente de cuenta regresiva
function CountdownDisplay({ hours, minutes, seconds }: CountdownDisplayProps) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-md mx-auto mb-6">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-1">{hours}</div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Horas</div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-1">{minutes}</div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Minutos</div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-1">{seconds}</div>
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Segundos</div>
      </div>
    </div>
  );
}

// Función auxiliar para obtener el final del día actual
function getEndOfDay() {
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
}

export default function MaestroDeLasEstrellasB() {
  const [showNoWebsiteInfo, setShowNoWebsiteInfo] = useState(false);
  // State for main tabs (1, 2, 3)
  const [activeMainTab, setActiveMainTab] = useState<number>(1);
  // State for mobile view tabs ('tu' | 'nosotros')
  const [activeMobileTab, setActiveMobileTab] = useState<'tu' | 'nosotros'>('tu');
  const [activeInstallationTab, setActiveInstallationTab] = useState('necesitas');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: '23',
    minutes: '47',
    seconds: '12'
  });

  useEffect(() => {
    // Set the target date (23 hours, 47 minutes, 12 seconds from now)
    const now = new Date();
    const target = new Date();
    target.setHours(now.getHours() + 23, now.getMinutes() + 47, now.getSeconds() + 12);

    const updateCountdown = () => {
      const now = new Date();
      const distance = target.getTime() - now.getTime();
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      
      // Calculate time units
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    // Update immediately
    updateCountdown();
    
    // Then update every second
    const timer = setInterval(updateCountdown, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);
  
  // Set default tab for installation section
  useEffect(() => {
    setActiveInstallationTab('necesitas');
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (error) {
          console.error('Error al hacer scroll:', error);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={`min-h-screen bg-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
          <img 
            src="/images/trafico-frio.webp" 
            alt="Fondo tráfico frío" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDE2MDAgOTYwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5NjAiIGZpbGw9IiMxMTExMjEiLz48L3N2Zz4=';
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Main Heading - Pain Point Question */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Cuánto le está costando a tu restaurante<br />
              <span className="text-orange-400">una sola reseña de 1 estrella</span> en Google?
            </h1>
            
            {/* Impact Subheading with Read More */}
            <div className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              <div className="bg-black/40 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="font-medium text-white mb-2">
                  Según estudios de reputación digital, cada estrella perdida te cuesta hasta
                </p>
                <p className="text-3xl font-bold text-orange-400">$3,600 USD al año</p>
                
                {showMoreText && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <p className="text-white">en clientes que nunca llegan.</p>
                    <p className="text-white italic">
                      El problema no es la cocina. Es que no tienes un sistema para interceptar la queja 
                      <span className="font-semibold"> ANTES </span> 
                      de que llegue a Google.
                    </p>
                  </div>
                )}
                
                <button 
                  onClick={() => setShowMoreText(!showMoreText)}
                  className="mt-4 text-orange-300 hover:text-white font-medium text-sm inline-flex items-center group transition-colors"
                >
                  {showMoreText ? 'Mostrar menos' : 'Seguir leyendo'}
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMoreText ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* Main CTA Button */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg md:text-xl font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto"
                size="lg"
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full px-2"
                >
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="hidden sm:inline">Proteger Reputación</span>
                    <span className="sm:hidden">Proteger Ahora</span>
                    <span className="font-bold ml-1 whitespace-nowrap">$120 USD</span>
                  </span>
                </a>
              </Button>
              
              {/* Micro Copy */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-200 text-sm mt-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>Instalación en 48 horas</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>Pago único (sin mensualidades)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>Soporte técnico incluido</span>
                </div>
              </div>
            </div>
            
            {/* Secondary CTA */}
            <div className="mt-8">
              <a 
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-300 hover:text-white font-medium transition-colors group text-lg"
              >
                ¿Cómo funciona exactamente? Ver el sistema completo
                <ChevronDown className="ml-3 w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Amplificación del Problema Section */}
        <section id="problema" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                El verdadero costo de no tener un filtro de reputación
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                No importa qué tan bueno sea tu restaurante. Los imprevistos operativos son <span className="font-semibold text-orange-500">INEVITABLES</span> en este negocio.
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-800 mt-6 max-w-3xl mx-auto">
                ¿Dejas que cada error humano se convierta en una sentencia pública permanente?
              </p>
            </div>

            {/* Cards Container with Swiper for Mobile */}
            <div className="relative">
              {/* Mobile Swiper (hidden on md and up) */}
              <div className="md:hidden w-full">
                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={16}
                  centeredSlides={false}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="pb-12 px-2"
                >
                  {/* Card 1 */}
                  <SwiperSlide className="h-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="p-2 bg-gradient-to-r from-orange-50 to-orange-100">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                          <span className="text-3xl">💣</span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Riesgo Desproporcionado</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          Un mesero nuevo olvida un pedido por 10 minutos.
                          <span className="block font-semibold text-gray-800 mt-2">
                            Resultado: 1 estrella en Google que verán 10,000 personas.
                          </span>
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                          <p className="text-gray-700 italic">
                            "¿Es justo? No. ¿Es la realidad? Absolutamente."
                          </p>
                        </div>
                        <p className="text-gray-600 mt-4">
                          La tecnología te castiga por ser humano. Necesitas tecnología que te proteja de ser humano.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Card 2 */}
                  <SwiperSlide className="h-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="p-2 bg-gradient-to-r from-blue-50 to-blue-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                          <span className="text-3xl">🧠</span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Psicología del Cliente Enojado</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          El <span className="font-bold text-blue-600">68% de los clientes</span> que dejan reseñas negativas solo querían ser escuchados.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                          <p className="text-gray-700">
                            No querían destruir tu negocio. Querían que alguien les dijera: 
                            <span className="block font-semibold mt-1">"Entiendo. Lo siento. Lo arreglo."</span>
                          </p>
                        </div>
                        <p className="text-gray-600 mt-auto">
                          Google no te da esa oportunidad. <span className="font-semibold">El Maestro de las Estrellas sí.</span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Card 3 */}
                  <SwiperSlide className="h-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="p-2 bg-gradient-to-r from-green-50 to-green-100">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                          <span className="text-3xl">💸</span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">La Pérdida Invisible</h3>
                        <p className="text-gray-600 mb-4">
                          Cada <span className="font-bold">0.5 estrellas</span> que pierdes en Google = 
                          <span className="text-green-600 font-bold"> 30% menos</span> de probabilidad de que un cliente nuevo te visite.
                        </p>
                        
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                          <p className="font-semibold text-gray-800 mb-2">
                            Si tu promedio baja de 4.5 a 4.0 estrellas:
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              <span>Pierdes <span className="font-bold">18 clientes potenciales</span> al mes</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              <span>A <span className="font-bold">$200 USD</span> de ticket promedio = <span className="font-bold text-green-600">$3,600 USD/año</span></span>
                            </li>
                          </ul>
                        </div>
                        
                        <p className="text-gray-600 mt-auto pt-4 border-t border-gray-100">
                          Y eso por <span className="font-bold">UNA sola estrella</span> perdida.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Desktop Grid (hidden on mobile) */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-2 bg-gradient-to-r from-orange-50 to-orange-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                      <span className="text-3xl">💣</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Riesgo Desproporcionado</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Un mesero nuevo olvida un pedido por 10 minutos.
                      <span className="block font-semibold text-gray-800 mt-2">
                        Resultado: 1 estrella en Google que verán 10,000 personas.
                      </span>
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="text-gray-700 italic">
                        "¿Es justo? No. ¿Es la realidad? Absolutamente."
                      </p>
                    </div>
                    <p className="text-gray-600 mt-4">
                      La tecnología te castiga por ser humano. Necesitas tecnología que te proteja de ser humano.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-2 bg-gradient-to-r from-blue-50 to-blue-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                      <span className="text-3xl">🧠</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Psicología del Cliente Enojado</h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      El <span className="font-bold text-blue-600">68% de los clientes</span> que dejan reseñas negativas solo querían ser escuchados.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                      <p className="text-gray-700">
                        No querían destruir tu negocio. Querían que alguien les dijera: 
                        <span className="block font-semibold mt-1">"Entiendo. Lo siento. Lo arreglo."</span>
                      </p>
                    </div>
                    <p className="text-gray-600 mt-auto">
                      Google no te da esa oportunidad. <span className="font-semibold">El Maestro de las Estrellas sí.</span>
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="p-2 bg-gradient-to-r from-green-50 to-green-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                      <span className="text-3xl">💸</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">La Pérdida Invisible</h3>
                    <p className="text-gray-600 mb-4">
                      Cada <span className="font-bold">0.5 estrellas</span> que pierdes en Google = 
                      <span className="text-green-600 font-bold"> 30% menos</span> de probabilidad de que un cliente nuevo te visite.
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                      <p className="font-semibold text-gray-800 mb-2">
                        Si tu promedio baja de 4.5 a 4.0 estrellas:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Pierdes <span className="font-bold">18 clientes potenciales</span> al mes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>A <span className="font-bold">$200 USD</span> de ticket promedio = <span className="font-bold text-green-600">$3,600 USD/año</span></span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-600 mt-auto pt-4 border-t border-gray-100">
                      Y eso por <span className="font-bold">UNA sola estrella</span> perdida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Solución */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                El Maestro de las Estrellas: Tu sistema de Triage de Reputación
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Funciona como un portero digital que clasifica las opiniones
                <span className="block font-medium text-orange-500 mt-2">en 5 segundos, sin que tú muevas un dedo.</span>
              </p>
            </div>

            {/* Diagrama de Flujo */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Diagrama de Flujo Visual</h3>
                <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* Cliente */}
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MessageCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Cliente</span>
                    </div>
                  </div>
                  
                  {/* Flecha */}
                  <div className="flex justify-center items-center">
                    <ChevronRight className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  {/* QR */}
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-2">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Escanea QR</span>
                    </div>
                  </div>
                  
                  {/* Flecha */}
                  <div className="flex justify-center items-center">
                    <ChevronRight className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  {/* Calificación */}
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-6 h-6 text-yellow-500 fill-current" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Califica 1-5</span>
                    </div>
                  </div>
                </div>
                
                {/* Flecha hacia abajo */}
                <div className="flex justify-center my-4">
                  <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
                
                {/* Ramas de decisión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rama 1-3 Estrellas */}
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-red-700">1-3 ⭐</h4>
                      <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        ROJO 🔴
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="text-sm font-medium text-black">WhatsApp Privado</span>
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-600 mt-3">
                      (Tú resuelves el problema en privado)
                    </p>
                  </div>
                  
                  {/* Rama 4-5 Estrellas */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-green-700">4-5 ⭐</h4>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        VERDE 🟢
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="text-sm font-medium text-black">Google Maps</span>
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-600 mt-3">
                      (El mundo ve tu excelente servicio)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Interactivos */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveMainTab(1)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeMainTab === 1
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🔴</span> Contención Privada
                  </span>
                </button>
                <button
                  onClick={() => setActiveMainTab(2)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeMainTab === 2
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🟢</span> Amplificación Pública
                  </span>
                </button>
                <button
                  onClick={() => setActiveMainTab(3)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeMainTab === 3
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">⚙️</span> Instalación
                  </span>
                </button>
              </div>

              {/* Contenido de los Tabs */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Tab 1 */}
                {activeMainTab === 1 && (
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué pasa con las calificaciones de 1-3 estrellas?</h3>
                    <p className="text-gray-600 mb-6">
                      Cuando un cliente selecciona entre 1 y 3 estrellas,
                      el sistema lo redirige automáticamente a un chat privado de WhatsApp.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-100 p-2 rounded-full mr-4">
                          <MessageCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">🔴 ALERTA: Cliente con experiencia negativa</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              <span>Mesa: <span className="font-medium">[Número si aplica]</span></span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              <span>Hora: <span className="font-medium">[Timestamp]</span></span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">•</span>
                              <span>Calificación: <span className="font-medium">[2 estrellas]</span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Tienes la oportunidad de:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-black">Escuchar su queja en privado</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-black">Ofrecer una solución inmediata (descuento, postre gratis, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-black">Convertir un enemigo en un promotor</span>
                      </li>
                    </ul>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Google nunca se entera.<br />
                        Tu promedio está protegido.
                      </p>
                    </div>
                    
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Screenshot: Ejemplo de mensaje de WhatsApp recibido</p>
                    </div>
                  </div>
                )}

                {/* Tab 2 */}
                {activeMainTab === 2 && (
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo multiplicamos las 4-5 estrellas?</h3>
                    <p className="text-gray-600 mb-6">
                      Cuando un cliente selecciona 4 o 5 estrellas,
                      el sistema lo redirige DIRECTAMENTE a tu perfil de Google Maps.
                    </p>
                    
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                      <p className="text-gray-800 mb-4">
                        No hay fricción. No hay pasos extras.
                        <span className="block font-medium text-green-700 mt-1">
                          El impulso positivo se convierte en reseña pública en 30 segundos.
                        </span>
                      </p>
                    </div>
                    
                    <h4 className="font-bold text-lg text-gray-900 mb-3">Resultado:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Star className="w-5 h-5 text-blue-600" />
                        </div>
                        <p className="text-center text-sm text-gray-700">
                          Más reseñas positivas = mejor promedio
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </div>
                        <p className="text-center text-sm text-gray-700">
                          Contenido fresco = mejor posicionamiento en Google
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </div>
                        <p className="text-center text-sm text-gray-700">
                          Prueba social = más reservas
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-yellow-800 font-medium">
                        Proteges lo malo. Amplificas lo bueno.
                        <span className="block">Es así de simple.</span>
                      </p>
                    </div>
                    
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Screenshot: Google Maps con múltiples reseñas de 5 estrellas recientes</p>
                    </div>
                  </div>
                )}

                {/* Tab 3 */}
                {activeMainTab === 3 && (
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesito un sitio web para que funcione?</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Opción A */}
                      <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-bold">A</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">Tienes sitio web</h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-black">Instalamos el código en tu página existente.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-black">Tiempo de instalación: 2 horas.</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Opción B */}
                      <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold">B</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">No tienes sitio web</h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-black">Creamos una landing dedicada solo para el filtro.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-black">Te damos el link: <span className="font-mono text-blue-600">turestaurante.objetivo360.com/califica</span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">En ambos casos:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-black">Tú no tocas código</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-black">Nosotros lo configuramos todo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-black">En 48 horas está funcionando</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-black">Solo imprimes el QR y lo pones en las mesas</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 mb-2">¡Eso es todo!</p>
                      <p className="text-gray-600">Visual: Mockup de QR en un porta-menú elegante</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Objeción Preventiva */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Pero no puedo hacerlo yo mismo con un Google Form?
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  Sí, podrías.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  También podrías cocinar con un mechero en lugar de una estufa industrial.
                  <span className="block font-medium text-orange-600 mt-2">Técnicamente es posible. Pero no es inteligente.</span>
                </p>
              </div>
            </div>

            {/* Tabla Comparativa */}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Mobile Swiper */}
              <div className="md:hidden">
                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={16}
                  centeredSlides={false}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="pb-10 px-4"
                >
                  {/* Slide 1: Lo haces tú mismo */}
                  <SwiperSlide>
                    <div className="p-6 border border-gray-200 rounded-xl h-full">
                      <div className="text-center mb-6">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <X className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Lo haces tú mismo</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Necesitas saber programar o pagar a un freelancer</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Google Forms no redirige automáticamente</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Sin diseño profesional = desconfianza del cliente</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Si falla, estás solo</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Inviertes 15+ horas configurando</span>
                        </li>
                        <li className="flex items-start">
                          <X className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Costo oculto: tu tiempo = $500+ USD</span>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>

                  {/* Slide 2: El Maestro de las Estrellas */}
                  <SwiperSlide>
                    <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl h-full">
                      <div className="text-center mb-6">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Check className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">El Maestro de las Estrellas</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Código 100% listo y probado</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Redirección instantánea (1 clic)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Diseño con tu logo y colores</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Soporte técnico en 48h máximo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Inviertes 0 horas (solo compras)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-800 font-medium">Costo real: <span className="text-orange-600 font-bold">$120 USD</span> (pago único)</span>
                        </li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Desktop Grid (hidden on mobile) */}
              <div className="hidden md:grid grid-cols-2 gap-0">
                {/* Columna 1: Lo haces tú mismo */}
                <div className="p-8 border-r border-gray-200">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Lo haces tú mismo</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Necesitas saber programar o pagar a un freelancer</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Google Forms no redirige automáticamente</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Sin diseño profesional = desconfianza del cliente</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Si falla, estás solo</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Inviertes 15+ horas configurando</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Costo oculto: tu tiempo = $500+ USD</span>
                    </li>
                  </ul>
                </div>

                {/* Columna 2: El Maestro de las Estrellas */}
                <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">El Maestro de las Estrellas</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Código 100% listo y probado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Redirección instantánea (1 clic)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Diseño con tu logo y colores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Soporte técnico en 48h máximo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Inviertes 0 horas (solo compras)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Costo real: <span className="text-orange-600 font-bold">$120 USD</span> (pago único)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conclusión */}
              <div className="bg-white border-t border-gray-200 p-8 text-center">
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  La pregunta no es si puedes hacerlo.
                </p>
                <p className="text-xl md:text-2xl font-bold text-orange-600 mb-6">
                  La pregunta es: ¿Cuánto vale tu tiempo y tu tranquilidad?
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Si la respuesta es "más de $120 USD", ya sabes qué hacer.
                </p>
                <div className="w-full max-w-xs mx-auto sm:max-w-md md:max-w-none">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 sm:py-5 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto min-h-[56px] flex items-center justify-center"
                  >
                    <Link 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      Quiero ahorrar tiempo y estrés - $120 USD
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 5: Anclaje de Precio */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                $120 USD no es un gasto. Es un seguro de reputación.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Protege tu negocio de reseñas negativas y convierte clientes insatisfechos en promotores de tu marca.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              {/* Calculadora Visual */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  Costo de 1 Estrella Perdida
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-black">18 clientes menos al mes</span>
                    <span className="font-medium text-black">× $200 USD</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-black">Ticket promedio</span>
                    <span className="font-medium text-black">× 12 meses</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-800">Pérdida anual estimada:</span>
                      <span className="text-2xl font-bold text-red-600">$43,200 USD</span>
                    </div>
                  </div>
                  
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 bg-white text-sm text-gray-500">VS.</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="text-center">
                      <p className="text-green-800 font-medium">Costo de El Maestro de las Estrellas</p>
                      <p className="text-3xl font-bold text-green-600">$120 USD</p>
                      <p className="text-sm text-green-700">Pago único, para siempre</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-100 mt-4">
                    <div className="flex flex-col items-center">
                      <span className="text-blue-800 font-medium">Ahorro protegido</span>
                      <span className="text-2xl font-bold text-blue-600">$43,080 USD</span>
                      <p className="text-sm text-blue-700 text-center mt-1">Potencialmente salvado al año</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-orange-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">El Maestro de las Estrellas</h3>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 line-through mb-1">Precio normal: $150 USD</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">$120</span>
                      <span className="text-gray-600">USD</span>
                    </div>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-2">
                      20% de descuento
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Pago único. Sin mensualidades</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Instalación completa incluida</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">QR personalizado con tu marca</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Soporte técnico en 48h</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-black">Garantía de satisfacción</span>
                    </li>
                  </ul>
                  
                  <div className="w-full">
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto min-h-[56px]"
                    >
                      <Link 
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center w-full"
                      >
                        Proteger mi Negocio Ahora
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Pago seguro · Sin cargos ocultos · Cancelación en cualquier momento
                  </p>
                </div>
              </div>
            </div>
            
            {/* Línea de Golpe */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
                <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                  Estás invirtiendo <span className="font-bold text-orange-600">$120 USD</span> para proteger una marca
                  que te costó años construir.
                </p>
                <p className="text-xl font-bold text-gray-900">
                  ¿Tiene sentido arriesgarlo todo por no tener un filtro?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 6: Urgencia y Escasez */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solo 20 restaurantes en Ecuador tendrán acceso<br className="hidden md:block" />
                a este precio este mes
              </h2>
              
              {/* Tarjetas - Slider en móvil, grid en desktop */}
              <div className="relative">
                {/* Versión móvil - Slider */}
                <div className="md:hidden w-full">
                  <Swiper
                    slidesPerView={1.1}
                    spaceBetween={16}
                    centeredSlides={false}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="pb-12 px-2"
                  >
                    {/* Tarjeta 1 */}
                    <SwiperSlide>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                        <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
                          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Limitación Operativa Real</h3>
                        <ul className="space-y-3 text-left">
                          <li className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">•</div>
                            <span className="text-gray-700">Cada instalación requiere 4 horas de trabajo técnico personalizado.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">•</div>
                            <span className="text-gray-700">Nuestro equipo puede atender máximo 20 instalaciones al mes manteniendo nuestra calidad.</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>

                    {/* Tarjeta 2 */}
                    <SwiperSlide>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
                          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Oferta con Fecha Límite</h3>
                        <ul className="space-y-3 text-left">
                          <li className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">•</div>
                            <span className="text-gray-700">Precio especial solo hasta agotar los 20 cupos mensuales.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">•</div>
                            <span className="text-gray-700">Precio normal: <span className="font-bold">$150 USD</span> (aplicará después de agotar los cupos).</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Versión desktop - Grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
                  {/* Tarjeta 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Limitación Operativa Real</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">•</div>
                        <span className="text-gray-700">Cada instalación requiere 4 horas de trabajo técnico personalizado.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5">•</div>
                        <span className="text-gray-700">Nuestro equipo puede atender máximo 20 instalaciones al mes manteniendo nuestra calidad.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tarjeta 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Oferta con Fecha Límite</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">•</div>
                        <span className="text-gray-700">Precio especial solo hasta agotar los 20 cupos mensuales.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">•</div>
                        <span className="text-gray-700">Precio normal: <span className="font-bold">$150 USD</span> (aplicará después de agotar los cupos).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sección de urgencia mejorada */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto mt-12 shadow-lg border border-red-100 relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-full opacity-20"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full mb-6 shadow-md">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    ¡ÚLTIMOS CUPOS DISPONIBLES!
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-block bg-white px-6 py-3 rounded-full border-2 border-red-200 shadow-sm">
                      <span className="text-lg font-bold text-gray-800">
                        <span className="text-red-600">¡Solo quedan 14 cupos</span> de 20 disponibles
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    No pierdas esta oportunidad de proteger la reputación de tu restaurante. 
                    <span className="font-semibold text-gray-900">¡Los cupos se están agotando rápidamente!</span>
                  </p>
                  
                  <div className="mt-8">
                    <div className="w-full">
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-2 sm:px-6 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-normal min-h-[64px] flex items-center justify-center"
                      >
                        <Link 
                          href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center px-2"
                        >
                          <span className="text-center leading-tight">
                            <span className="block sm:inline">¡Quiero mi cupo</span>{' '}
                            <span className="sm:hidden">con descuento</span>
                          </span>
                        </Link>
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Pago seguro · Sin cargos ocultos · Sin compromisos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 7: Reducción de Riesgo */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Nuestra garantía: <span className="text-orange-600">Funciona o no pagas</span>
              </h2>
              
              {/* Badges - Slider en móvil, grid en desktop */}
              <div className="relative mb-12">
                {/* Versión móvil - Slider */}
                <div className="md:hidden w-full">
                  <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
                    centeredSlides={false}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="pb-12 px-2"
                  >
                    {/* Badge 1 */}
                    <SwiperSlide>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Instalado en 48h</h3>
                        <p className="text-gray-600">o te lo hacemos gratis</p>
                      </div>
                    </SwiperSlide>

                    {/* Badge 2 */}
                    <SwiperSlide>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte técnico</h3>
                        <p className="text-gray-600">WhatsApp incluido</p>
                      </div>
                    </SwiperSlide>

                    {/* Badge 3 */}
                    <SwiperSlide>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Garantía de reembolso</h3>
                        <p className="text-gray-600">7 días sin riesgos</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Versión desktop - Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Badge 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Instalado en 48h</h3>
                    <p className="text-gray-600">o te lo hacemos gratis</p>
                  </div>

                  {/* Badge 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte técnico</h3>
                    <p className="text-gray-600">WhatsApp incluido</p>
                  </div>

                  {/* Badge 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Garantía de reembolso</h3>
                    <p className="text-gray-600">7 días sin riesgos</p>
                  </div>
                </div>
              </div>

              {/* Explicación de la Garantía */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-green-100 relative overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-100 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center bg-white text-green-700 text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                    </svg>
                    Garantía de satisfacción
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Si en 7 días el sistema no funciona como prometimos,
                    <span className="text-green-600 block mt-2">te devolvemos el 100% de tu dinero.</span>
                  </h3>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100 max-w-2xl mx-auto">
                    <p className="text-gray-700 mb-4">
                      <span className="font-semibold text-gray-900">Sin preguntas.</span> Sin letra pequeña. Sin trucos.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-green-600">Nosotros asumimos el riesgo.</span> Tú solo pruebas la tranquilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 8: Timeline de Implementación */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De la compra a la protección en <span className="text-orange-600">solo 4 días</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un proceso rápido y sin complicaciones para proteger la reputación de tu negocio
              </p>
            </div>

            {/* Timeline - Versión Móvil (Slider) */}
            <div className="md:hidden mb-12">
              <Swiper
                slidesPerView={1.1}
                spaceBetween={16}
                centeredSlides={false}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="pb-10 px-2"
              >
                {/* Día 1 */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-orange-600 font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">DÍA 1: COMPRAS</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Pagas $120 USD</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Recibes email de confirmación inmediato</span>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                {/* Día 2 */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">DÍA 2: CONFIGURACIÓN</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Nos envías logo y colores de tu marca</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Programamos el filtro con tu WhatsApp Business</span>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                {/* Día 3 */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">DÍA 3: INSTALACIÓN</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Subimos el código a tu web (o creamos tu landing)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Hacemos pruebas de funcionamiento</span>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>

                {/* Día 4 */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-green-600 font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">DÍA 4: ACTIVACIÓN</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Te enviamos el QR listo para imprimir</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Te damos acceso al panel de monitoreo</span>
                      </li>
                      <li className="flex items-start font-semibold text-green-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>¡Tu reputación está protegida!</span>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Timeline - Versión Desktop */}
            <div className="hidden md:block relative max-w-4xl mx-auto mb-16">
              {/* Línea de tiempo */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-500 -ml-0.5"></div>
              
              {/* Items de la línea de tiempo */}
              <div className="space-y-12 md:space-y-16">
                {/* Día 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative md:max-w-md mx-auto md:mx-0 md:ml-auto">
                      <div className="absolute -left-2 md:left-auto md:-right-2 top-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-orange-600 font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">DÍA 1: COMPRAS</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Pagas $120 USD</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Recibes email de confirmación inmediato</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Día 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative md:max-w-md mx-auto md:mx-0">
                      <div className="absolute -left-2 md:left-auto md:-right-2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">DÍA 2: CONFIGURACIÓN</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Nos envías logo y colores de tu marca</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Programamos el filtro con tu WhatsApp Business</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Día 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative md:max-w-md mx-auto md:mx-0 md:ml-auto">
                      <div className="absolute -left-2 md:left-auto md:-right-2 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">DÍA 3: INSTALACIÓN</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Subimos el código a tu web (o creamos tu landing)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Hacemos pruebas de funcionamiento</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Día 4 */}
                <div className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse">
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative md:max-w-md mx-auto md:mx-0">
                      <div className="absolute -left-2 md:left-auto md:-right-2 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white"></div>
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-green-600 font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">DÍA 4: ACTIVACIÓN</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Te enviamos el QR listo para imprimir</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Te damos acceso al panel de monitoreo</span>
                        </li>
                        <li className="flex items-start font-semibold text-green-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>¡Tu reputación está protegida!</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Comparativo */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                  Comparación de responsabilidades
                </h3>
                
                {/* Desktop Table (hidden on mobile) */}
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-center font-bold text-gray-900 border-b border-gray-200 w-1/2">
                          <div className="flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            TÚ SOLO HACES ESTO
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center font-bold text-gray-900 border-b border-gray-200 w-1/2">
                          <div className="flex items-center justify-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                            NOSOTROS HACEMOS TODO
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Comprar ($120)
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Programar el filtro
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Enviar logo
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Diseñar el QR
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Imprimir QR
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Configurar WhatsApp
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="h-5"></div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Instalar el código
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="h-5"></div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Probar el sistema
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-4 px-6 text-center border-r border-gray-200">
                          <div className="h-5"></div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center text-black">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Darte soporte
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Tabs (shown on mobile only) */}
                <div className="md:hidden">
                  <div className="flex border-b border-gray-200 mb-6">
                    <button 
                      type="button"
                      className="flex-1 py-3 px-1 text-center border-b-2 font-medium text-sm focus:outline-none"
                      onClick={() => setActiveMobileTab('tu')}
                    >
                      <div className="flex items-center justify-center text-blue-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        TÚ
                      </div>
                    </button>
                    <button 
                      type="button"
                      className="flex-1 py-3 px-1 text-center border-b-2 font-medium text-sm focus:outline-none"
                      onClick={() => setActiveMobileTab('nosotros')}
                    >
                      <div className="flex items-center justify-center text-orange-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        NOSOTROS
                      </div>
                    </button>
                  </div>

                  {/* Tú Tab Content */}
                  <div className={`space-y-4 ${activeMobileTab === 'tu' ? 'block' : 'hidden'}`}>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-800">Comprar ($120)</span>
                          </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-800">Enviar logo</span>
                          </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-800">Imprimir QR</span>
                          </div>
                    </div>
                  </div>

                  {/* Nosotros Tab Content */}
                  <div className={`space-y-4 ${activeMobileTab === 'nosotros' ? 'block' : 'hidden'}`}>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Programar el filtro</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Diseñar el QR</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Configurar WhatsApp</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Instalar el código</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Probar el sistema</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-800">Darte soporte</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="font-bold">Total de tu tiempo invertido:</span> Aproximadamente 20 minutos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 9: CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
              Decides hoy. Proteges tu restaurante para siempre.
            </h2>

            <div className="max-w-5xl mx-auto mb-16 md:mb-20">
              {/* Mobile Slider */}
              <div className="md:hidden">
                <Swiper
                  slidesPerView={1.1}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-red-100 h-full">
                      <div className="bg-red-600 text-white text-center py-4 px-6">
                        <h3 className="text-xl font-bold">SIN EL FILTRO</h3>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">😰</span>
                          <p className="text-gray-700">Rezas para que no haya quejas</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">📉</span>
                          <p className="text-gray-700">Cada error operativo es un castigo público</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">💸</span>
                          <p className="text-gray-700">Pierdes clientes por un promedio bajo</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">😡</span>
                          <p className="text-gray-700">Los clientes gritan en Google</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 h-full">
                      <div className="bg-green-600 text-white text-center py-4 px-6">
                        <h3 className="text-xl font-bold">CON EL FILTRO</h3>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">😌</span>
                          <p className="text-gray-700">Duermes tranquilo sabiendo que controlas el flujo</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">🛡️</span>
                          <p className="text-gray-700">Cada error se maneja en privado</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">📈</span>
                          <p className="text-gray-700">Tu promedio de Google sube automáticamente</p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">💬</span>
                          <p className="text-gray-700">Los clientes te escriben a ti</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 gap-8">
                {/* Columna 1: Sin el Filtro */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
                  <div className="bg-red-600 text-white text-center py-4 px-6">
                    <h3 className="text-xl font-bold">SIN EL FILTRO</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">😰</span>
                      <p className="text-gray-700">Rezas para que no haya quejas</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">📉</span>
                      <p className="text-gray-700">Cada error operativo es un castigo público</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">💸</span>
                      <p className="text-gray-700">Pierdes clientes por un promedio bajo</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">😡</span>
                      <p className="text-gray-700">Los clientes gritan en Google</p>
                    </div>
                  </div>
                </div>

                {/* Columna 2: Con el Filtro */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
                  <div className="bg-green-600 text-white text-center py-4 px-6">
                    <h3 className="text-xl font-bold">CON EL FILTRO</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">😌</span>
                      <p className="text-gray-700">Duermes tranquilo sabiendo que controlas el flujo</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">🛡️</span>
                      <p className="text-gray-700">Cada error se maneja en privado</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">📈</span>
                      <p className="text-gray-700">Tu promedio de Google sube automáticamente</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">💬</span>
                      <p className="text-gray-700">Los clientes te escriben a ti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Precio y CTA */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10 shadow-xl border border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-800 mb-2">
                  ÚLTIMA OPORTUNIDAD DE PROTEGERTE HOY
                </h3>
                <div className="w-24 h-1 bg-orange-400 mx-auto my-4"></div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex flex-col md:flex-row justify-center items-baseline space-y-2 md:space-y-0 md:space-x-4">
                    <span className="text-gray-600 line-through text-lg">Precio normal: $150 USD</span>
                    <span className="text-2xl md:text-3xl font-bold text-orange-600">Tu precio hoy: $120 USD</span>
                  </div>
                  
                  <div className="pt-4 w-full">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg md:text-xl font-bold py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-full shadow-lg transform transition-all hover:scale-105 w-full max-w-md mx-auto"
                    >
                      <a 
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        <span className="whitespace-normal text-center px-2">
                          SÍ, QUIERO PROTEGER MI REPUTACIÓN
                        </span>
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 mt-6 text-gray-600">
                    <div className="flex items-center text-sm">
                      <span className="w-4 h-4 flex items-center justify-center mr-2">🔥</span>
                      <span>Solo quedan 14 cupos</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-6 text-center">
                    Al hacer clic, serás redirigido a un formulario seguro donde completarás tu compra en 2 minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 10: Preguntas Frecuentes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
              Preguntas frecuentes
              <span className="block text-orange-500 text-2xl md:text-3xl mt-2 font-normal">(respuestas rápidas)</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className={`flex justify-between items-center w-full p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors ${faqOpen[0] ? 'bg-orange-50' : ''}`}
                  onClick={() => toggleFaq(0)}
                >
                  <span className="text-lg md:text-xl">¿Necesito tener un sitio web?</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${faqOpen[0] ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen[0] ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600 space-y-4">
                    <p>No es obligatorio.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Si tienes sitio web: Instalamos el filtro ahí.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Si NO tienes sitio web: Creamos una landing dedicada para ti (ej: turestaurante.objetivo360.com/califica).</span>
                      </li>
                    </ul>
                    <p>En ambos casos funciona igual de bien.</p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className={`flex justify-between items-center w-full p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors ${faqOpen[1] ? 'bg-orange-50' : ''}`}
                  onClick={() => toggleFaq(1)}
                >
                  <span className="text-lg md:text-xl">¿Funciona solo en Ecuador o en cualquier país?</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${faqOpen[1] ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen[1] ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600 space-y-4">
                    <p>Funciona en cualquier país donde:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Tengas WhatsApp Business</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Tengas perfil de Google Maps</span>
                      </li>
                    </ul>
                    <p>Si cumples esos 2 requisitos, el filtro funciona perfectamente.</p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className={`flex justify-between items-center w-full p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors ${faqOpen[2] ? 'bg-orange-50' : ''}`}
                  onClick={() => toggleFaq(2)}
                >
                  <span className="text-lg md:text-xl">¿Qué pasa si no sé nada de tecnología?</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${faqOpen[2] ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen[2] ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600 space-y-4">
                    <p>Tranquilo. Ese es nuestro trabajo.</p>
                    <p>Tú solo necesitas:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                      <li>Comprarlo</li>
                      <li>Enviarnos tu logo por WhatsApp</li>
                      <li>Imprimir el QR que te enviamos</li>
                    </ol>
                    <p>Nosotros hacemos todo lo demás. Literalmente no necesitas saber NADA de código.</p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className={`flex justify-between items-center w-full p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors ${faqOpen[3] ? 'bg-orange-50' : ''}`}
                  onClick={() => toggleFaq(3)}
                >
                  <span className="text-lg md:text-xl">¿Es un pago mensual o único?</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${faqOpen[3] ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen[3] ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600 space-y-4">
                    <p className="font-semibold text-lg">Pago ÚNICO de $120 USD.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>No hay mensualidades.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>No hay cargos ocultos.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Pagas una vez y lo usas para siempre.</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 italic">(Incluye actualizaciones y soporte técnico durante el primer año).</p>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className={`flex justify-between items-center w-full p-5 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors ${faqOpen[4] ? 'bg-orange-50' : ''}`}
                  onClick={() => toggleFaq(4)}
                >
                  <span className="text-lg md:text-xl">¿Qué pasa si un cliente igual deja una reseña mala en Google?</span>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${faqOpen[4] ? 'rotate-180 text-orange-500' : 'text-gray-500'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen[4] ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 text-gray-600 space-y-4">
                    <p>El filtro no puede FORZAR al cliente a ir a WhatsApp. Solo puede FACILITARLE ese camino.</p>
                    <p>En la práctica, el <span className="font-semibold">87% de los clientes insatisfechos</span> prefieren el canal privado si se les ofrece.</p>
                    <p>Pero siempre habrá un 13% que igual irá directo a Google. El filtro reduce el daño, no lo elimina al 100%.</p>
                    <p className="text-sm text-gray-500 italic">(Nadie puede prometerte eso éticamente).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 11: CTA Alternativo WhatsApp */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Prefieres hablar con un humano antes de decidir?
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto">
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg md:text-xl">
                    Entendemos que $120 USD es una decisión importante.
                  </p>
                  
                  <p>
                    Si tienes dudas específicas sobre tu caso,
                    escríbenos por WhatsApp y te respondemos en menos de 1 hora.
                  </p>
                  
                  <div className="pt-6">
                    <a 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20C%C3%A9sar,%20tengo%20algunas%20dudas%20sobre%20el%20filtro%20de%20reputaci%C3%B3n&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 w-full max-w-xs mx-auto"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.962-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.345.446-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.51-.669-.52-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.109 3.195 5.1 4.485.715.3 1.27.489 1.704.625.717.227 1.371.195 1.891.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.797 11.797 0 01-1.811-6.25c0-6.546 5.329-11.884 11.88-11.884 3.18 0 6.165 1.24 8.41 3.484 2.245 2.244 3.481 5.236 3.48 8.41-.004 6.547-5.332 11.884-11.884 11.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.462 0 .157 5.304.157 11.877c0 2.096.55 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.94-5.355 11.94-11.94 0-3.176-1.24-6.166-3.495-8.412"/>
                      </svg>
                      Hablar con un Asesor Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
