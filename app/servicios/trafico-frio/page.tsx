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

// Componente de cuenta regresiva
function CountdownTimer({ targetDate, format }: { targetDate: Date, format: 'HH' | 'mm' | 'ss' }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft('00');
        return;
      }
      
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      switch(format) {
        case 'HH':
          setTimeLeft(String(hours).padStart(2, '0'));
          break;
        case 'mm':
          setTimeLeft(String(minutes).padStart(2, '0'));
          break;
        case 'ss':
          setTimeLeft(String(seconds).padStart(2, '0'));
          break;
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate, format]);
  
  return <>{timeLeft}</>;
}

// Función auxiliar para obtener el final del día actual
function getEndOfDay() {
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
}

export default function TraficoFrio() {
  const [showNoWebsiteInfo, setShowNoWebsiteInfo] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [activeInstallationTab, setActiveInstallationTab] = useState('necesitas');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
  
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
            src="/images/hero-bg-stars.webp" 
            alt="Fondo estrellas" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDE2MDAgOTYwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5NjAiIGZpbGw9IiMxMTExMjEiLz48Y2lyY2xlIGN4PSI4MDAiIGN5PSI0MDAiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIzMDAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIxMjAwIiBjeT0iNTAwIiByPSIxLjUiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI2MDAiIGN5PSI2MDAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIxMDAwIiBjeT0iMzAwIiByPSIxIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+';
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
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%20C%C3%A9sar,%20quiero%20proteger%20la%20reputaci%C3%B3n%20de%20mi%20restaurante&type=phone_number&app_absent=0" 
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
                href="#como-funciona" 
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
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Diagrama de Flujo Visual</h3>
                <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              </div>
              
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* Cliente */}
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
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
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
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
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
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
                  onClick={() => setActiveTab(1)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeTab === 1
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🔴</span> Contención Privada
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeTab === 2
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🟢</span> Amplificación Pública
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                    activeTab === 3
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
                {activeTab === 1 && (
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
                {activeTab === 2 && (
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
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <Star className="w-5 h-5 text-blue-600" />
                        </div>
                        <p className="text-center text-sm text-gray-700">
                          Más reseñas positivas = mejor promedio
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </div>
                        <p className="text-center text-sm text-gray-700">
                          Contenido fresco = mejor posicionamiento en Google
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
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
                {activeTab === 3 && (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Columna 1: Lo haces tú mismo */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
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
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="#contacto">
                    Quiero ahorrar tiempo y estrés - $120 USD
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
