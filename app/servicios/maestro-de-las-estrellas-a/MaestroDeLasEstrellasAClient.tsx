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
import { Check, ArrowRight, ChevronRight, ChevronDown, CalendarDays, X, Star, Camera, ArrowDown, Clock, MessageCircle } from 'lucide-react';

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

export default function MaestroDeLasEstrellasA() {
  const [showNoWebsiteInfo, setShowNoWebsiteInfo] = useState(false);
  const [activeTab, setActiveTab] = useState('flujo-rojo');
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
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aquí está el <span className="text-orange-400">El Maestro de las Estrellas</span><br />
              que leíste en el artículo
            </h1>
            
            {/* Subhead with Read More */}
            <div className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              <p className="mb-2">Instálalo en 48 horas. Protege tu reputación automáticamente.</p>
              <p className="font-medium text-white mb-4">Sin código. Sin complicaciones. Sin estrés.</p>
              
              {showMoreText && (
                <div className="mt-2 animate-fadeIn">
                  <p className="text-2xl font-bold text-white">
                    Solo un pago de <span className="text-orange-400">$120 USD</span> y tu promedio de Google
                    está blindado para siempre.
                  </p>
                </div>
              )}
              
              <button 
                onClick={() => setShowMoreText(!showMoreText)} 
                className="text-orange-300 hover:text-white font-medium text-sm mt-2 inline-flex items-center group transition-colors"
              >
                {showMoreText ? 'Mostrar menos' : 'Seguir leyendo'}
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMoreText ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-xl font-bold px-8 py-6 rounded-full shadow-xl transform transition-all hover:scale-105"
                size="lg"
              >
                <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[280px] text-sm sm:text-base md:text-lg xl:text-xl">
                  <span className="whitespace-nowrap">Instalar Ahora</span>
                  <span className="hidden sm:inline"> El Maestro de las Estrellas</span>
                  <span className="hidden md:inline"> - $120 USD</span>
                </a>
              </Button>
            </div>
            
            {/* Micro Copy */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-200 text-sm mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Listo en 48 horas</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Pago único (no mensualidades)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Soporte incluido</span>
              </div>
            </div>
            
            {/* Secondary CTA */}
            <div className="mt-8">
              <a 
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-300 hover:text-white font-medium transition-colors group"
              >
                <span className="hidden sm:inline">¿Necesitas ver los detalles técnicos? </span>Ver flujo completo
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#como-funciona" className="animate-bounce inline-flex flex-col items-center text-white/60 hover:text-white transition-colors">
            <span className="text-sm mb-2">Desplázate</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Sección: Recordatorio del Problema */}
      <section id="problema" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recapitulemos: El problema que <span className="text-orange-500">NO</span> puedes seguir ignorando
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En el artículo viste que:
            </p>
          </div>
          
          {/* Mobile Slider - Only shows on mobile */}
          <div className="md:hidden mb-12 px-2">
            <Swiper
              slidesPerView={1.1}
              spaceBetween={16}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="problem-swiper"
            >
              <SwiperSlide>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🔴</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-black">Espera Inevitable</h3>
                  <p className="text-gray-600 text-center">
                    La espera operativa es inevitable (cocina, imprevistos, sábados a tope).
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-black">Percepción es Clave</h3>
                  <p className="text-gray-600 text-center">
                    La percepción del cliente es lo que realmente importa, no el reloj.
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">💣</span>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3 text-black">Costo Oculto</h3>
                  <p className="text-gray-600 text-center">
                    Una sola reseña de 1 estrella puede costarte hasta $3,600 USD al año en clientes perdidos.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            
            {/* Custom styles for the swiper pagination */}
            <style jsx global>{`
              .problem-swiper .swiper-pagination-bullet {
                background: #9ca3af;
                opacity: 0.5;
              }
              .problem-swiper .swiper-pagination-bullet-active {
                background: #f97316;
                opacity: 1;
              }
              .problem-swiper .swiper-pagination {
                position: relative;
                margin-top: 1.5rem;
              }
            `}</style>
          </div>
          
          {/* Desktop Grid - Only shows on desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {/* Punto 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔴</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-black">Espera Inevitable</h3>
              <p className="text-gray-600 text-center">
                La espera operativa es inevitable (cocina, imprevistos, sábados a tope).
              </p>
            </div>
            
            {/* Punto 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-black">Percepción es Clave</h3>
              <p className="text-gray-600 text-center">
                La percepción del cliente es lo que realmente importa, no el reloj.
              </p>
            </div>
            
            {/* Punto 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💣</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-black">Costo Oculto</h3>
              <p className="text-gray-600 text-center">
                Una sola reseña de 1 estrella puede costarte hasta $3,600 USD al año en clientes perdidos.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10 text-center border border-orange-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-800 mb-6">
                Las estrategias 1, 2 y 3 del artículo te ayudan a <span className="font-semibold">GESTIONAR</span> la percepción.
              </p>
              <p className="text-xl md:text-2xl font-bold text-orange-600 mb-8">
                Pero la <span className="text-orange-700">Estrategia #4</span> (esta) te ayuda a <span className="text-orange-700">INTERCEPTAR</span> el desastre antes de que llegue a Google.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-inner border border-orange-100">
                <p className="text-lg md:text-xl font-medium text-gray-800 italic">
                  "Hagamos que el filtro trabaje para ti mientras tú te enfocas en lo que mejor sabes hacer: cocinar y atender."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cómo Funciona */}
      <section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              El sistema de <span className="text-orange-500">Triage</span> que protege tu promedio 24/7
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un flujo inteligente que clasifica automáticamente las opiniones de tus clientes
            </p>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-orange-400 to-orange-600 -translate-y-1/2 z-0"></div>
            
            {/* Pasos de la línea de tiempo */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
              {/* Paso 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-4 mx-auto">1</div>
                <h3 className="text-lg font-bold text-center text-gray-900 mb-2">El cliente termina de comer</h3>
                <p className="text-gray-600 text-sm text-center">La experiencia en tu restaurante ha concluido</p>
              </div>
              
              {/* Flecha en móvil */}
              <div className="md:hidden flex justify-center items-center">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Paso 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-4 mx-auto">2</div>
                <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Escanea el QR</h3>
                <p className="text-gray-600 text-sm text-center">Encuentra el código en su mesa o recibo</p>
              </div>
              
              {/* Flecha en móvil */}
              <div className="md:hidden flex justify-center items-center">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Paso 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-4 mx-auto">3</div>
                <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Califica la experiencia</h3>
                <p className="text-gray-600 text-sm text-center">Selecciona de 1 a 5 estrellas</p>
              </div>
              
              {/* Flecha en móvil */}
              <div className="md:hidden flex justify-center items-center">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Resultados */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Resultado Rojo */}
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mr-3">1-3</div>
                    <h3 className="text-xl font-bold text-red-700">Flujo Rojo</h3>
                  </div>
                  <div className="pl-13">
                    <p className="text-red-800 font-medium mb-2">WhatsApp Privado</p>
                    <p className="text-gray-700 text-sm italic mb-3">"Cuéntame qué pasó"</p>
                    <p className="text-gray-800 text-sm">Resuelve el problema de manera privada y evita malas reseñas</p>
                  </div>
                </div>
                
                {/* Resultado Verde */}
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-all transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">4-5</div>
                    <h3 className="text-xl font-bold text-green-700">Flujo Verde</h3>
                  </div>
                  <div className="pl-13">
                    <p className="text-green-800 font-medium mb-2">Google Maps Público</p>
                    <p className="text-gray-700 text-sm italic mb-3">"¡Cuéntaselo al mundo!"</p>
                    <p className="text-gray-800 text-sm">Mejora tu reputación con reseñas positivas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nota al pie */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-medium">Solución 100% automatizada</span> - Sin intervención manual requerida
            </p>
          </div>
          
          {/* Espacio adicional */}
          <div className="h-16 md:h-24"></div>
          
          {/* Explicación en 3 Pasos */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">
              Cómo funciona en 3 pasos simples
            </h3>
            
            <div className="space-y-8">
              {/* Paso 1 */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">PASO 1: EL CLIENTE CALIFICA</h4>
                    <p className="text-gray-700">
                      Escanea el QR y selecciona de 1 a 5 estrellas en su celular.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Paso 2 */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-3">PASO 2: EL SISTEMA DECIDE</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Si es 1-3 estrellas → Lo redirige a WhatsApp contigo (privado).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Si es 4-5 estrellas → Lo redirige a Google Maps (público).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Paso 3 */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">PASO 3: TÚ GANAS SIEMPRE</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">•</span>
                        <span><span className="font-medium">Cliente rojo:</span> Resuelves el problema antes de que explote.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">•</span>
                        <span><span className="font-medium">Cliente verde:</span> Sumas reseñas positivas sin esfuerzo.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Los 2 Flujos en Detalle */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Los 2 Flujos en <span className="text-orange-500">Detalle</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cómo manejamos cada situación para proteger y mejorar tu reputación
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('flujo-rojo')}
                className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${activeTab === 'flujo-rojo' ? 'bg-red-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                🔴 Flujo Rojo (Contención)
              </button>
              <button
                onClick={() => setActiveTab('flujo-verde')}
                className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${activeTab === 'flujo-verde' ? 'bg-green-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                🟢 Flujo Verde (Amplificación)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Flujo Rojo */}
            <div className={`${activeTab === 'flujo-rojo' ? 'block' : 'hidden'}`}>
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-red-50 to-white">
                  <div className="inline-block bg-red-100 text-red-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
                    Contención de Daños
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué pasa cuando un cliente elige 1-3 estrellas?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">
                          <span className="text-sm">1</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">
                          El sistema lo redirige inmediatamente a tu WhatsApp Business.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">
                          <span className="text-sm">2</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">
                          El cliente ve un mensaje pre-cargado que dice:
                        </p>
                        <div className="mt-2 bg-white p-4 rounded-lg border border-red-100 italic text-gray-700">
                          "Hola, tuve una experiencia que no fue la mejor. Me gustaría contarte qué pasó."
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p className="font-medium text-red-700">
                        Tú recibes una notificación instantánea:
                      </p>
                      <p className="font-bold text-gray-800 mt-1">
                        "🔴 Cliente insatisfecho quiere hablar contigo."
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">En ese momento tienes el poder de:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Escuchar la queja en privado (sin audiencia pública)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Ofrecer una solución inmediata (descuento, reposición, postre gratis)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Convertir un enemigo en un promotor</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-medium">
                        El <span className="font-bold">73% de los clientes</span> que son escuchados y atendidos
                        terminan cambiando su opinión.
                      </p>
                      <p className="text-blue-800 font-bold mt-2">
                        Google nunca se entera de este incidente.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
                  <div className="max-w-sm w-full bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <span className="text-green-600">👤</span>
                      </div>
                      <div>
                        <div className="font-medium">Cliente</div>
                        <div className="text-xs text-gray-500">Ahora</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg rounded-tl-none">
                      <p className="text-black">Hola, tuve una experiencia que no fue la mejor. Me gustaría contarte qué pasó.</p>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-right">Entregado • 14:32</div>
                    
                    <div className="mt-6 text-center text-sm text-gray-500">
                      <p>Escribe un mensaje...</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-gray-400">📎</span>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flujo Verde */}
            <div className={`${activeTab === 'flujo-verde' ? 'block' : 'hidden'}`}>
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-green-50 to-white">
                  <div className="inline-block bg-green-100 text-green-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
                    Amplificación Positiva
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    ¿Qué pasa cuando un cliente elige 4-5 estrellas?
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      El sistema lo redirige <span className="font-bold">DIRECTO</span> a tu perfil de Google Maps.
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-medium text-green-700">Sin obstáculos:</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li className="flex items-center">
                          <X className="w-4 h-4 text-red-500 mr-2" />
                          <span>No hay pasos intermedios</span>
                        </li>
                        <li className="flex items-center">
                          <X className="w-4 h-4 text-red-500 mr-2" />
                          <span>No hay formularios</span>
                        </li>
                        <li className="flex items-center">
                          <X className="w-4 h-4 text-red-500 mr-2" />
                          <span>No hay fricción</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-700">
                      El cliente solo tiene que escribir su reseña y publicar.
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Resultado:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Más reseñas positivas reales</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Mejor promedio general</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Contenido fresco que Google premia en búsquedas locales</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Prueba social que atrae más reservas</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="text-orange-800 font-medium">
                        Estás facilitando que la gente feliz hable de ti.
                      </p>
                      <p className="text-orange-800 font-bold mt-1">
                        Y bloqueando que la gente enojada te destruya públicamente.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex items-center justify-center">
                  <div className="max-w-sm w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-2xl mr-3">
                          📍
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Tu Restaurante</div>
                          <div className="flex items-center">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">4.8 (128 reseñas)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-600">👤</span>
                        </div>
                        <div>
                          <div className="font-medium">¿Cómo fue tu experiencia?</div>
                          <div className="text-xs text-gray-500">Escribe una reseña pública</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} className="text-3xl mx-1">
                            {star <= 5 ? '⭐' : '☆'}
                          </button>
                        ))}
                      </div>
                      
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32"
                        placeholder="Comparte detalles de tu experiencia en este lugar..."
                      ></textarea>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                            <Camera className="w-5 h-5" />
                          </button>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium">
                          Publicar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para transformar la experiencia de tus clientes?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Protege tu reputación y convierte cada interacción en una oportunidad para crecer.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                Quiero implementar este sistema <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección: Instalación */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Instalación <span className="text-orange-500">Ultra Simple</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para empezar a proteger tu reputación hoy mismo
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                ¿Qué necesitas para que funcione?
              </h3>
              
              {/* Mobile Tabs */}
              <div className="md:hidden mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveInstallationTab('necesitas')}
                    className={`flex-1 py-3 px-4 font-medium text-sm md:text-base ${activeInstallationTab === 'necesitas' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                  >
                    LO QUE TÚ NECESITAS
                  </button>
                  <button
                    onClick={() => setActiveInstallationTab('hacemos')}
                    className={`flex-1 py-3 px-4 font-medium text-sm md:text-base ${activeInstallationTab === 'hacemos' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                  >
                    LO QUE NOSOTROS HACEMOS
                  </button>
                </div>
                
                {/* Mobile Tab Content */}
                <div className="pt-4">
                  {activeInstallationTab === 'necesitas' && (
                    <div className="space-y-4">
                      {/* Item 1 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">WhatsApp Business</p>
                            <p className="text-sm text-gray-500">(gratis en app)</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Perfil de Google Maps</p>
                            <p className="text-sm text-gray-500">(gratis)</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Logo de tu marca</p>
                            <p className="text-sm text-gray-500">(envías por WhatsApp)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeInstallationTab === 'hacemos' && (
                    <div className="space-y-4">
                      {/* Item 1 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Programamos el código</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Diseñamos el QR</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item 3 */}
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Personalizamos colores</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Desktop Table (hidden on mobile) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      <th className="p-4 text-left font-semibold text-lg w-1/2">LO QUE TÚ NECESITAS</th>
                      <th className="p-4 text-left font-semibold text-lg w-1/2 border-l border-white/20">LO QUE NOSOTROS HACEMOS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">WhatsApp Business</p>
                            <p className="text-sm text-gray-500">(gratis en app)</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Programamos el código</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Perfil de Google Maps</p>
                            <p className="text-sm text-gray-500">(gratis)</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Diseñamos el QR</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Logo de tu marca</p>
                            <p className="text-sm text-gray-500">(envías por WhatsApp)</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Personalizamos colores</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">20 minutos de tu tiempo total</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Instalamos en tu web (o creamos tu landing)</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Imprimir el QR que te enviamos</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Probamos todo</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">-</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 border-l border-gray-200">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-green-500 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-800 font-medium">Te damos soporte 48h</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Aclaración sobre Web - Collapsible */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <button 
              onClick={() => setShowNoWebsiteInfo(!showNoWebsiteInfo)}
              className="w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-2xl transition-all duration-200"
              aria-expanded={showNoWebsiteInfo}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-xl">
                      ❓
                    </div>
                  </div>
                  <h3 className="ml-4 text-xl md:text-2xl font-bold text-gray-900">
                    ¿Y si no tengo sitio web?
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${showNoWebsiteInfo ? 'transform rotate-180' : ''}`} 
                />
              </div>
            </button>
            
            {/* Contenido colapsable */}
            <div 
              className={`px-6 pb-6 md:px-8 md:pb-8 transition-all duration-300 overflow-hidden ${showNoWebsiteInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{
                transitionProperty: 'max-height, opacity',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '300ms'
              }}
            >
              <div className="ml-0 md:ml-14 mt-4">
                <div className="prose prose-lg text-gray-600 max-w-3xl">
                  <p className="mb-4">
                    No hay problema. Creamos una landing dedicada solo para el filtro:
                  </p>
                  <p className="mb-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong>Ejemplo:</strong> turestaurante.objetivo360.com/califica
                  </p>
                  <p>
                    Ese link se convierte en QR y listo. Funciona exactamente igual.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sección: Timeline de Activación */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              De la decisión a la protección en <span className="text-orange-500">4 días</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Así de rápido y sencillo es implementar la protección de tu reputación
            </p>
          </div>

          <div className="relative">
            {/* Línea de tiempo horizontal */}
            <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto px-8 mb-12">
              <div className="w-1/4 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md mb-2"></div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </div>
              <div className="w-1/4 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md mb-2"></div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </div>
              <div className="w-1/4 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md mb-2"></div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              </div>
              <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md"></div>
            </div>
            
            {/* Contenedor de días en horizontal */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8">
              {/* Día 1 */}
              <div className="relative z-10 flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 text-2xl mb-4 shadow-md mx-auto">
                    📅
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">DÍA 1: COMPRAS</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Pagas $120 USD</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Recibes confirmación por email</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Te enviamos un WhatsApp de bienvenida</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Día 2 */}
              <div className="relative z-10 flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 text-2xl mb-4 shadow-md mx-auto">
                    ⚙️
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">DÍA 2: CONFIGURACIÓN</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Nos envías tu logo y colores</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Configuramos el filtro con tu WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Conectamos tu perfil de Google Maps</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Día 3 */}
              <div className="relative z-10 flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 text-2xl mb-4 shadow-md mx-auto">
                    🛠️
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">DÍA 3: INSTALACIÓN</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Subimos el código a tu sitio</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Hacemos pruebas de funcionamiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Ajustamos detalles visuales</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Día 4 */}
              <div className="relative z-10 flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-600 text-2xl mb-4 shadow-md mx-auto">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">DÍA 4: ACTIVACIÓN</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Te enviamos el QR en alta resolución</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">Acceso al panel de monitoreo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-black">¡Protección activada!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-copy */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8 text-center border border-orange-100 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-orange-800 font-medium">
              <span className="font-bold">Total de tu tiempo invertido:</span> 20 minutos.
              <br />
              <span className="text-gray-700">Todo lo demás corre por nuestra cuenta.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para proteger tu negocio en solo 4 días?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Con solo 20 minutos de tu tiempo, te garantizamos la tranquilidad de saber que tu reputación está en buenas manos.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold px-8 py-6 rounded-full shadow-lg transform transition-all hover:scale-105"
              size="lg"
            >
              <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mx-auto w-full sm:w-auto">
                Quiero empezar ahora <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección: Precios */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu inversión de protección: <span className="text-orange-500">$120 USD</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pago único. Cero mensualidades. Protección permanente.
            </p>
          </div>

          {/* Pricing Box - Side by Side Layout */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16 transform transition-all hover:shadow-2xl">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Price */}
                <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 pb-8 lg:pb-0 lg:pr-8">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-6">
                      El Maestro de las Estrellas
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center lg:justify-start">
                        <span className="text-5xl md:text-6xl font-bold text-gray-900">$120</span>
                        <span className="ml-2 text-xl text-gray-500">USD</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Pago único. Sin cargos ocultos.</p>
                      
                      <div className="mt-4 bg-green-50 text-green-800 text-sm font-medium px-4 py-2 rounded-full inline-block">
                        🎁 20% de descuento para lectores
                      </div>
                      <div className="text-gray-400 line-through mt-2">Precio normal: $150 USD</div>
                    </div>
                    
                    <div className="w-full max-w-xs mx-auto md:mx-0">
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg transform transition-all hover:scale-105 w-full"
                        size="lg"
                      >
                        <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <span className="whitespace-nowrap">Proteger mi Reputación</span> <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4 flex items-center justify-center lg:justify-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 mr-2">💳</span>
                      Pago seguro
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Features */}
                <div className="lg:w-2/3 lg:pl-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Todo lo que incluye:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: '⏱️', text: 'Instalación completa en 48h' },
                      { icon: '🏷️', text: 'QR personalizado con tu marca' },
                      { icon: '📱', text: 'Configuración de WhatsApp + Google' },
                      { icon: '🛠️', text: 'Soporte técnico por 1 año' },
                      { icon: '🔄', text: 'Actualizaciones gratuitas' },
                      { icon: '✅', text: 'Garantía de reembolso (7 días)' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                        <span className="text-xl mr-3 mt-0.5">{item.icon}</span>
                        <span className="text-gray-800">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Contexto rápido sobre tu inversión:
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-orange-200 top-1/2 transform -translate-y-1/2"></div>
              
              <div className="relative flex flex-col md:flex-row justify-between items-center py-8">
                {/* Step 1 */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 mb-6 md:mb-0 w-full md:w-5/12 relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center mr-3">1</div>
                    <h4 className="font-semibold text-blue-800">El Problema</h4>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">1 estrella perdida</span> = hasta <span className="font-bold">$3,600 USD/año</span> en clientes que no llegan
                  </p>
                </div>
                
                {/* Arrow for mobile */}
                <div className="md:hidden text-gray-300 my-2">
                  <ArrowDown className="w-6 h-6 mx-auto" />
                </div>
                
                {/* Step 2 */}
                <div className="bg-white p-5 rounded-xl shadow-md border border-orange-100 w-full md:w-5/12 relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center mr-3">2</div>
                    <h4 className="font-semibold text-orange-700">La Solución</h4>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">El filtro</span> = <span className="font-bold">$120 USD</span> (una sola vez)
                  </p>
                </div>
              </div>
              
              {/* Summary Box */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border border-orange-100 max-w-2xl mx-auto mt-6 text-center">
                <p className="text-lg font-medium text-gray-800">
                  Estás invirtiendo solo el <span className="text-orange-600 font-bold">3%</span> del costo del problema para evitar el <span className="text-orange-600 font-bold">100%</span> del daño.
                </p>
                <p className="text-gray-600 mt-2 font-medium">
                  ¿Tiene sentido? Para nosotros sí.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Protege tu reputación hoy por menos de lo que cuesta una cena
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Por solo $120 USD, asegura que cada cliente tenga una experiencia positiva y se convierta en un promotor de tu negocio.
            </p>
            <div className="w-full max-w-xs sm:max-w-md mx-auto">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg font-bold px-4 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full"
                size="lg"
              >
                <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span className="whitespace-nowrap">Quiero Proteger mi Negocio</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Pago seguro • Sin compromiso • Garantía de 7 días
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Reducción de Riesgo */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra promesa: <span className="text-orange-500">Funciona o te devolvemos tu dinero</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sin trucos, sin letras pequeñas. Si no cumple con lo prometido, te devolvemos tu inversión.
            </p>
          </div>

          {/* Tarjetas de Garantía */}
          <div className="relative">
            {/* Mobile Slider */}
            <div className="md:hidden overflow-hidden">
              <div className="flex space-x-4 pb-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
                {/* Garantía 1 */}
                <div className="flex-shrink-0 w-5/6 sm:w-2/3 px-2 snap-center">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4 mx-auto">
                      ⚡
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900 mb-3">Instalado en 48 horas</h3>
                    <p className="text-gray-600 text-sm text-center">
                      O te lo instalamos gratis. Tu tiempo es valioso y lo respetamos.
                    </p>
                  </div>
                </div>

                {/* Garantía 2 */}
                <div className="flex-shrink-0 w-5/6 sm:w-2/3 px-2 snap-center">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl mb-4 mx-auto">
                      🛡️
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900 mb-3">Garantía de reembolso</h3>
                    <p className="text-gray-600 text-sm text-center">
                      7 días completos para probar. Si no cumple con lo prometido, devolución total.
                    </p>
                  </div>
                </div>

                {/* Garantía 3 */}
                <div className="flex-shrink-0 w-5/6 sm:w-2/3 px-2 snap-center">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-4 mx-auto">
                      💬
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900 mb-3">Soporte WhatsApp incluido</h3>
                    <p className="text-gray-600 text-sm text-center">
                      ¿Dudas o problemas? Escríbenos directamente por WhatsApp y te ayudamos al instante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Garantía 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-6 mx-auto">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Instalado en 48 horas</h3>
                <p className="text-gray-600 text-center">
                  O te lo instalamos gratis. Tu tiempo es valioso y lo respetamos.
                </p>
              </div>

              {/* Garantía 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl mb-6 mx-auto">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Garantía de reembolso</h3>
                <p className="text-gray-600 text-center">
                  7 días completos para probar. Si no cumple con lo prometido, devolución total.
                </p>
              </div>

              {/* Garantía 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-6 mx-auto">
                  💬
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Soporte WhatsApp incluido</h3>
                <p className="text-gray-600 text-center">
                  ¿Dudas o problemas? Escríbenos directamente por WhatsApp y te ayudamos al instante.
                </p>
              </div>
            </div>
          </div>

          {/* Explicación de la Garantía */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-orange-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
                  🔄
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sin riesgo, solo resultados</h3>
                <p className="text-gray-700 mb-4">
                  Si el filtro no funciona como te prometimos, te devolvemos el 100% de tu inversión durante los primeros 7 días.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                    <span>Sin preguntas incómodas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                    <span>Sin trámites complicados</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" />
                    <span>Un solo mensaje por WhatsApp</span>
                  </li>
                </ul>
                <p className="mt-6 font-medium text-gray-800">
                  <span className="text-orange-500 font-bold">Nosotros asumimos el riesgo.</span> Tú solo pruebas la tranquilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Oferta Especial */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-200 text-orange-800 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Oferta Especial por Tiempo Limitado
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aprovecha este <span className="text-orange-600">descuento exclusivo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-orange-100 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
                    🔥
                  </div>
                  <div className="bg-orange-600 text-white text-center py-3 px-6 rounded-lg shadow-md">
                    <div className="text-2xl md:text-3xl font-bold">$120 <span className="text-sm font-normal">USD</span></div>
                    <div className="text-xs opacity-90">Precio con descuento</div>
                  </div>
                  <div className="mt-2 text-center line-through text-gray-500 text-sm">
                    Precio normal: $150 USD
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4">
                  El precio especial de <span className="font-semibold">$120 USD con 20% de descuento</span> es nuestro agradecimiento por tu interés en proteger tu negocio.
                </p>
                <p className="text-gray-700 mb-6">
                  Esta oferta está disponible por tiempo limitado. Una vez que finalice, el precio volverá a $150 USD.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <p className="text-orange-700 italic">
                    "Valoramos tu tiempo y dedicación. Por eso, hemos creado esta oferta especial para lectores comprometidos como tú."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Oferta Activa */}
          <div className="max-w-lg mx-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200 text-center mb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
            
            <div className="mb-2">
              <div className="inline-flex items-center bg-white/80 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-orange-200">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Oferta Especial Activa
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">¡Descuento del 20% Aplicado!</h3>
              <p className="text-gray-600 mb-6">Tu precio especial está garantizado al completar tu compra ahora</p>
            </div>
            
            <div className="bg-white/90 rounded-xl p-6 border border-orange-100 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Precio Regular:</span>
                <span className="text-gray-700 font-semibold line-through">$150 USD</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-orange-600 mb-2">
                <span>Tu Precio Especial:</span>
                <span className="text-2xl">$120 USD</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                ¡Ahorras $30 USD con esta oferta!
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border border-orange-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-orange-600">Garantía de satisfacción:</span> Si no cumple con tus expectativas, te devolvemos tu dinero.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para proteger tu reputación con un 20% de descuento?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Aprovecha esta oferta exclusiva por tiempo limitado. Mañana el precio sube a $150 USD.
            </p>
            <div className="w-full max-w-xs sm:max-w-none mx-auto">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg font-bold px-4 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full"
                size="lg"
              >
                <a href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <span className="whitespace-nowrap">Quiero el 20% de descuento</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-orange-700 mt-4 font-medium">
              ⚡ Oferta válida hasta la medianoche
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Comparación de Escenarios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Decides hoy. Proteges tu negocio para <span className="text-orange-500">siempre</span>.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Tabs para móvil */}
          <div className="md:hidden mb-8">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('sin')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'sin' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                SIN EL FILTRO
              </button>
              <button
                onClick={() => setActiveTab('con')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === 'con' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                CON EL FILTRO
              </button>
            </div>
          </div>

          {/* Tabla de Comparación */}
          <div className="overflow-x-auto mb-16">
            <div className="min-w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
                {/* Columna 1: Sin el Filtro */}
                <div className={`p-0 ${activeTab === 'sin' ? 'block' : 'hidden'} md:block`}>
                  <div className="bg-red-50 p-6 text-center">
                    <h3 className="text-2xl font-bold text-red-600">SIN EL FILTRO</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { icon: '😰', text: 'Vives con la ansiedad de "¿qué dirán en Google?"' },
                      { icon: '💣', text: 'Cada error de mesero es una bomba pública' },
                      { icon: '📉', text: 'Tu promedio baja con cada cliente insatisfecho' },
                      { icon: '😡', text: 'Los clientes te gritan en Google donde todos los ven' },
                      { icon: '💸', text: 'Pierdes miles en clientes que nunca llegan' }
                    ].map((item, index) => (
                      <div key={`sin-${index}`} className="p-6">
                        <div className="flex items-start">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Columna 2: Con el Filtro */}
                <div className={`p-0 bg-gray-50 ${activeTab === 'con' ? 'block' : 'hidden'} md:block`}>
                  <div className="bg-green-50 p-6 text-center">
                    <h3 className="text-2xl font-bold text-green-600">CON EL FILTRO</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { icon: '😌', text: 'Duermes tranquilo sabiendo que controlas el flujo' },
                      { icon: '🛡️', text: 'Cada error se maneja en privado' },
                      { icon: '📈', text: 'Tu promedio sube automáticamente' },
                      { icon: '💬', text: 'Los clientes te escriben a ti primero' },
                      { icon: '💰', text: 'Inviertes $120 una vez y proteges miles' }
                    ].map((item, index) => (
                      <div key={`con-${index}`} className="p-6 bg-white">
                        <div className="flex items-start">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <p className="text-gray-700 font-medium">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10 text-center shadow-lg border border-orange-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              SÍ, QUIERO PROTEGER MI REPUTACIÓN
            </h3>
            
            <div className="w-full max-w-md mx-auto mb-8">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base sm:text-lg md:text-xl font-bold px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full"
                size="lg"
              >
                <Link href="#contacto" className="flex items-center justify-center">
                  <span className="whitespace-nowrap">
                    Instalar por <span className="font-extrabold">$120 USD</span>
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center justify-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Pago único, sin mensualidades
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Listo en 48 horas
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Garantía de 7 días
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mt-6">
              Al hacer clic serás redirigido a un formulario seguro. Tiempo de compra: 2 minutos.
              <br />
              <span className="text-gray-500">Métodos de pago: Tarjeta, PayPal, Transferencia.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Preguntas Frecuentes */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Las 3 preguntas más comunes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos tus dudas más frecuentes sobre nuestro servicio
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button 
                className={`w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center ${faqOpen[0] ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                onClick={() => setFaqOpen({...faqOpen, 0: !faqOpen[0]})}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Necesito tener sitio web?
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${faqOpen[0] ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <div className={`px-6 pb-6 pt-2 ${faqOpen[0] ? 'block' : 'hidden'}`}>
                <div className="text-gray-700 space-y-3">
                  <p>No es obligatorio.</p>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <p>Si tienes: Instalamos ahí.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <p>Si no tienes: Creamos una landing para ti.</p>
                  </div>
                  <p className="font-medium">En ambos casos funciona igual.</p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button 
                className={`w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center ${faqOpen[1] ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                onClick={() => setFaqOpen({...faqOpen, 1: !faqOpen[1]})}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Es pago mensual?
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${faqOpen[1] ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <div className={`px-6 pb-6 pt-2 ${faqOpen[1] ? 'block' : 'hidden'}`}>
                <div className="text-gray-700 space-y-3">
                  <p className="text-xl font-bold text-orange-600">No.</p>
                  <p>Pagas <span className="font-semibold">$120 USD UNA SOLA VEZ</span>. Lo usas para siempre.</p>
                  <div className="flex items-center text-gray-600">
                    <X className="w-4 h-4 text-red-500 mr-2" />
                    <p>Sin sorpresas. Sin cargos recurrentes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button 
                className={`w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center ${faqOpen[2] ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                onClick={() => setFaqOpen({...faqOpen, 2: !faqOpen[2]})}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  ¿Qué pasa si no funciona?
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${faqOpen[2] ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <div className={`px-6 pb-6 pt-2 ${faqOpen[2] ? 'block' : 'hidden'}`}>
                <div className="text-gray-700 space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <p>Tienes <span className="font-semibold">7 días para probarlo</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <p>Si no funciona como prometimos, te devolvemos el <span className="font-semibold">100% de tu dinero</span>.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <p>Un mensaje por WhatsApp y listo. Sin preguntas incómodas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA al final de las FAQs */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              ¿Tienes otra pregunta? Estamos aquí para ayudarte.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700 text-lg font-medium px-8 py-3"
            >
              <Link href="#contacto" className="flex items-center justify-center">
                Contáctanos <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección: Contacto Humano */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Aún tienes dudas? <span className="text-green-600">Hablemos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-700 mb-10">
              Entendemos que cada restaurante es único. Si quieres hablar de tu caso específico antes de decidir, estamos aquí para ti.
            </p>
            
            <div className="w-full sm:w-auto">
              <Button 
                asChild
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base sm:text-lg font-bold px-4 sm:px-8 py-4 sm:py-5 rounded-full shadow-lg transform transition-all hover:scale-105 group w-full"
                size="lg"
              >
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.3 4.8C17.5 3 15 2 12 2 6.5 2 2 6.5 2 12c0 2 .6 3.9 1.6 5.5L2 22l4.6-1.2c1.5.9 3.3 1.3 5.1 1.3 5.5 0 10-4.5 10-10 0-3-1.3-5.8-3.4-7.8zM12 20.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.4c-.9-1.4-1.4-3-1.4-4.7 0-4.5 3.7-8.2 8.2-8.2 2.2 0 4.3.9 5.8 2.4 1.5 1.5 2.4 3.6 2.4 5.8 0 4.5-3.7 8.2-8.2 8.2zm4.4-6.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.1 0-.2 0-.3-.1-.1-.6-1.3-.8-1.8-.1-.5-.3-.4-.4-.4-.5 0-1 0-1.4.3-.5.3-1.8 1.7-1.8 4.2 0 2.4 1.8 4.3 2.1 4.6.3.3 4.1 2.6 9.9 1.8 1.2-.2 3.1-1.2 3.5-2.4.4-1.2.4-2.3.3-2.4-.1-.2-.5-.3-.7-.3z" clipRule="evenodd" />
                  </svg>
                  <span className="whitespace-nowrap">Hablar con un Asesor</span>
                  <span className="ml-1.5 text-xs sm:text-sm font-normal opacity-90 group-hover:opacity-100 whitespace-nowrap">
                    (1h)
                  </span>
                </a>
              </Button>
            </div>
            
            <div className="mt-10 pt-8 border-t border-green-200">
              <p className="text-gray-600">
                O si prefieres, envíanos un correo a:
                <a href="mailto:menuobjetivo@cesarreyesjaramillo.com" className="text-green-600 hover:underline ml-1">
                  menuobjetivo@cesarreyesjaramillo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
