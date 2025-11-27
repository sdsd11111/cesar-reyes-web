'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Check, CheckCircle, ArrowRight, ChevronRight, ChevronDown, Star, MessageCircle, XCircle } from 'lucide-react';

export default function TVPremium() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('contenido');
  const [showFullText, setShowFullText] = useState(false);
  
  // Efecto para la animación de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fecha objetivo para la cuenta regresiva (24 horas desde ahora)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  // Initialize Swiper on component mount
  useEffect(() => {
    // Only run on client-side and if Swiper is available
    if (typeof window !== 'undefined') {
      const initSwiper = async () => {
        const Swiper = (await import('swiper')).default;
        const { Navigation, Pagination } = await import('swiper/modules');
        
        new Swiper('.swiper-container', {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1.2,
            },
          },
        });
      };

      initSwiper();
    }
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main content container */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-[url('/images/tv-premium-hero.webp')] bg-cover bg-center"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Removed welcome message as requested */}
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-shadow-lg">
              Aquí está la TV Premium Legal que leíste en el artículo
            </h1>
            
            {/* Subheading */}
            <div className="mb-10 max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-white font-semibold bg-black/30 px-4 py-2 rounded-lg inline-block border border-white/10 mb-6">
                🚫 Sin YouTube. 🚫 Sin anuncios de McDonald's. 🚫 Sin riesgos legales.
              </p>
              
              {/* Hidden content that appears on button click */}
              <div className={`overflow-hidden transition-all duration-500 ${showFullText ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                <p className="text-2xl sm:text-3xl text-white font-semibold mt-4">
                  Solo <span className="text-orange-400 font-bold text-3xl sm:text-4xl">$54 USD al año</span> y tu pantalla trabaja para ti,
                  no para tu competencia.
                </p>
              </div>
              
              {/* Toggle Button */}
              <button 
                onClick={() => setShowFullText(!showFullText)}
                className="text-orange-400 hover:text-orange-300 font-semibold mt-6 inline-flex items-center group transition-all text-lg"
              >
                {showFullText ? 'Ver menos' : 'Seguir leyendo'}
                <ChevronDown className={`ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform ${showFullText ? 'transform rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base md:text-lg font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto whitespace-nowrap shadow-orange-500/30 hover:shadow-orange-500/50"
                size="lg"
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full"
                >
                  <span className="sm:hidden">Activar TV Legal - $54/año</span>
                  <span className="hidden sm:inline">Activar mi TV Legal Ahora - $54 USD/año</span>
                </a>
              </Button>
            </div>
            
            {/* Micro Copy */}
            <div className="space-y-2 text-gray-300 text-sm sm:text-base mb-12">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span>Activación en 2 horas</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span>Cero multas, cero publicidad ajena</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                <span>Soporte técnico incluido</span>
              </div>
            </div>
            
            {/* Secondary CTA */}
            <div className="text-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-300 hover:text-orange-200 font-medium transition-colors group mx-auto"
              >
                ¿Necesitas ver qué incluye la plataforma? 
                <span className="ml-1 group-hover:translate-y-0.5 transition-transform">
                  Ver detalles técnicos <ChevronDown className="inline w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#problema" className="animate-bounce flex flex-col items-center group">
            <span className="text-sm text-white/70 mb-1 group-hover:text-orange-300 transition-colors">Desplázate</span>
            <ChevronDown className="w-6 h-6 text-white/70 group-hover:text-orange-300 transition-colors" />
          </a>
        </div>
      </section>

      {/* Sección 2: Recordatorio del Problema */}
      <section id="problema" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Recapitulemos: El doble riesgo de tu TV actual
            </h2>
            
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-12 text-left">
              <p className="text-lg text-gray-700 mb-6">
                En el artículo viste que:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">⚖️</span>
                  <span className="text-gray-800">
                    <strong>YouTube te expone a multas de SAYCE:</strong> Usar música sin licencia puede costarte $500+ en sanciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">🍔</span>
                  <span className="text-gray-800">
                    <strong>Tu TV le hace publicidad a tu competencia:</strong> Imagina anuncios de McDonald's mientras tus clientes esperan SU comida.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">💸</span>
                  <span className="text-gray-800">
                    <strong>Cada minuto es una oportunidad perdida:</strong> Esa pantalla podría estar vendiendo tus postres más rentables.
                  </span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r">
                <p className="text-gray-800">
                  <strong>Importante:</strong> Las estrategias 2, 3 y 4 del artículo cubren juegos, fotos y reseñas. 
                  <span className="text-orange-600 font-medium">Pero la Estrategia #1 (esta) elimina el riesgo legal y convierte tu TV en un activo comercial protegido.</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
              <p className="text-lg md:text-xl text-gray-800 font-medium mb-4">
                Deja de regalarle minutos de atención a tu competencia.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-orange-600">
                Tu pantalla. Tu contenido. Tu control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Transformación Profesional */}
      <section id="como-funciona" className="pt-0 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
                Transformación Digital
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De YouTube Ilegal a Plataforma Corporativa en <span className="text-orange-500">2 Horas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Moderniza tu negocio con una solución profesional y legal para tu televisor
              </p>
            </div>

            {/* Timeline de Transformación */}
            <div className="relative">
              {/* Línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-300 to-green-400 transform -translate-x-1/2"></div>
              
              {/* Punto de Inicio */}
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-16">
                {/* Columna Izquierda - Situación Actual */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.02]">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Situación Actual</h3>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-600 mb-4">TV conectada a fuentes no autorizadas con contenido sin licencia</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start p-3 bg-red-50 rounded-lg">
                          <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <h4 className="font-medium text-gray-900">Riesgos Inmediatos</h4>
                            <p className="text-sm text-gray-600">Multas de $500+ por infracción de derechos de autor</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 bg-red-50 rounded-lg">
                          <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <div>
                            <h4 className="font-medium text-gray-900">Pérdida de Control</h4>
                            <p className="text-sm text-gray-600">Anuncios de competencia y contenido inapropiado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Punto central - Proceso */}
                <div className="hidden md:flex flex-col items-center justify-center w-32 flex-shrink-0 mx-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2h
                  </div>
                  <p className="mt-2 text-sm text-gray-500 text-center">Proceso de migración</p>
                </div>

                {/* Columna Derecha - Solución */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:scale-[1.02]">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Solución Profesional</h3>
                    </div>
                    
                    <div className="pl-14">
                      <p className="text-gray-600 mb-4">Plataforma corporativa legal y personalizada para tu negocio</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Suscripción Anual</h4>
                            <p className="text-sm text-gray-600">Acceso completo por solo $54/año</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Activación Inmediata</h4>
                            <p className="text-sm text-gray-600">Credenciales y guía por WhatsApp</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Instalación Sencilla</h4>
                            <p className="text-sm text-gray-600">Compatible con Smart TV, Fire TV y Roku</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <h4 className="font-bold text-green-700 mb-2">Beneficios Clave:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Contenido 100% legal</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Sin anuncios de competencia</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Soporte técnico 24/7</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Actualizaciones incluidas</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Música con licencia</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Sin anuncios de terceros</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Sin riesgo legal</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Llamado a la acción */}
              <div className="text-center mt-12">
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Migrar a Solución Legal
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  Asesoría gratuita sin compromiso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicación en 3 Pasos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Cómo funciona en 3 sencillos pasos
            </h2>
            
            {/* Mobile Slider */}
            <div className="md:hidden relative">
              <div className="swiper-container overflow-hidden">
                <div className="swiper-wrapper pb-10">
                  <div className="swiper-slide px-2">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-black">CONTRATAS</h3>
                      <p className="text-gray-600 text-center">
                        Pagas $54 USD por año. Nos das el modelo de tu TV o dispositivo (Smart TV, Fire TV, Roku, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide px-2">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-black">INSTALAS</h3>
                      <p className="text-gray-600 text-center">
                        Te enviamos la app + credenciales por WhatsApp. La instalación toma 10 minutos con nuestro soporte en vivo.
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide px-2">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-center mb-3 text-black">PROTEGES</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Resultado legal:</strong> Cero riesgo de multas.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Resultado comercial:</strong> Tu pantalla muestra lo que TÚ decides.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Resultado operativo:</strong> Una preocupación menos en tu día a día.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-6"></div>
              </div>
            </div>

            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-black">CONTRATAS</h3>
                <p className="text-gray-600 text-center">
                  Pagas $54 USD por año. Nos das el modelo de tu TV o dispositivo (Smart TV, Fire TV, Roku, etc.)
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-black">INSTALAS</h3>
                <p className="text-gray-600 text-center">
                  Te enviamos la app + credenciales por WhatsApp. La instalación toma 10 minutos con nuestro soporte en vivo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-black">PROTEGES</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>Resultado legal:</strong> Cero riesgo de multas.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>Resultado comercial:</strong> Tu pantalla muestra lo que TÚ decides.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span><strong>Resultado operativo:</strong> Una preocupación menos en tu día a día.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Qué Incluye Legazy */}
      <section id="que-incluye" className="pt-0 pb-16 md:pb-24 bg-white -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo lo que incluye Legazy TV
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Una solución completa para tu negocio, sin sorpresas ni costos ocultos
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab('contenido')}
                  className={`py-3 px-6 font-medium text-sm md:text-base border-b-2 transition-colors ${
                    activeTab === 'contenido'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📺 Contenido Disponible
                </button>
                <button
                  onClick={() => setActiveTab('requisitos')}
                  className={`py-3 px-6 font-medium text-sm md:text-base border-b-2 transition-colors ${
                    activeTab === 'requisitos'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  🔧 Requisitos Técnicos
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                {/* Contenido Tab 1: Contenido Disponible */}
                <div className={`p-6 md:p-8 ${activeTab === 'contenido' ? 'block' : 'hidden'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    ¿Qué puedo mostrar en mi TV con Legazy?
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Legazy es una plataforma de streaming que ofrece contenido de alta calidad con acceso a canales en vivo, series, películas y contenido para niños.
                    Para tu restaurante, esto significa:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="text-orange-500 text-3xl mb-3">🎵</div>
                      <h4 className="font-bold text-gray-900 mb-2">Canales de música</h4>
                      <p className="text-gray-600">Videos musicales, conciertos, música ambiente. Todo con licencia.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="text-orange-500 text-3xl mb-3">📺</div>
                      <h4 className="font-bold text-gray-900 mb-2">Canales en vivo</h4>
                      <p className="text-gray-600">Noticias, deportes, entretenimiento. Sin anuncios comerciales de terceros.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="text-orange-500 text-3xl mb-3">⚽</div>
                      <h4 className="font-bold text-gray-900 mb-2">Deportes</h4>
                      <p className="text-gray-600">Acceso a eventos como UFC, NBA, UEFA, MLB y F1. Perfecto para atraer clientes en días de partido.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <div className="text-orange-500 text-3xl mb-3">🎬</div>
                      <h4 className="font-bold text-gray-900 mb-2">Películas y series</h4>
                      <p className="text-gray-600">Contenido actualizado con los últimos estrenos. Ideal para espacios de espera.</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800">
                      <strong>Lo más importante:</strong>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Todo el contenido es legal</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Sin publicidad de terceros</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Sin anuncios de tu competencia</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Tú decides qué canal poner</span>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                {/* Contenido Tab 2: Requisitos Técnicos */}
                <div className={`p-6 md:p-8 ${activeTab === 'requisitos' ? 'block' : 'hidden'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    ¿Qué necesito para que funcione?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Dispositivos compatibles:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-black">Smart TV (Samsung, LG, etc.)</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-black">Fire TV Stick</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-black">Android TV Box</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-black">Roku</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-black">Dispositivos móviles (soporte secundario)</span>
                        </li>
                      </ul>
                      
                      <h4 className="font-bold text-gray-900 mt-8 mb-4 text-lg">Requisitos de internet:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">
                          <strong>Mínimo requerido:</strong> 8 Mbps para contenido SD y HD
                        </p>
                        <p className="text-gray-700">
                          <strong>Recomendado:</strong> 12+ Mbps para Full HD
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          * Velocidades menores pueden causar buffering
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Instalación:</h4>
                      <ol className="space-y-4">
                        <li className="flex">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">1</div>
                          <p className="text-black">Descargas la app Legazy en tu dispositivo</p>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">2</div>
                          <p className="text-black">Ingresas las credenciales que te enviamos</p>
                        </li>
                        <li className="flex">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold mr-3">3</div>
                          <p className="text-black">¡Listo! Ya tienes acceso legal a todo el contenido</p>
                        </li>
                      </ol>
                      
                      <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-bold text-gray-900 mb-2">¿Necesitas ayuda?</h4>
                        <p className="text-gray-700">
                          Cuentas con soporte técnico que te ayudará con cualquier duda o inconveniente.
                        </p>
                      </div>
                      
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        <p className="font-medium">Nota importante:</p>
                        <p>La instalación de la app es remota (tú la haces con nuestro soporte por WhatsApp). No incluye visita física al local.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                ¿Listo para transformar tu TV en una herramienta de negocio segura?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base font-bold px-6 py-4 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Activar Ahora por $54/año
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
                >
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                    className="flex items-center w-full h-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hablar con un asesor
                  </a>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Sin compromiso. Sin letra pequeña. Garantía de devolución de 7 días.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Instalación */}
      <section id="instalacion" className="pt-0 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-white -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Instalación en 3 pasos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Configuración rápida en solo 10 minutos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sigue estos sencillos pasos para tener tu TV Premium funcionando hoy mismo
              </p>
            </div>

            {/* Mobile Slider (only visible on mobile) */}
            <div className="md:hidden mb-12">
              <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="pb-10"
              >
                {/* Paso 1 - Mobile */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mx-2">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 mx-auto">
                        1
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Descarga la App</h3>
                      <p className="text-gray-600 mb-4">
                        Recibirás un enlace de descarga por WhatsApp. Es compatible con Smart TV, Fire TV, Android TV y Roku.
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center mb-6">
                        <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                          <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                          Android TV
                        </span>
                        <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                          <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.05-.5 1.74-1.67 3.43"></path>
                          </svg>
                          Fire TV
                        </span>
                        <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                          <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
                            <path d="M12 17a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1zm0-8a1 1 0 01-.92-1.38 1 1 0 011.84 0A1 1 0 0112 9z"/>
                          </svg>
                          Roku
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs mx-auto">
                        <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <div className="h-40 bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
                            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Recibirás el enlace de descarga por WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Paso 2 - Mobile */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mx-2 h-full">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 mx-auto">
                        2
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Instala y Configura</h3>
                      <p className="text-gray-600 mb-4">
                        Sigue las instrucciones en pantalla. Te guiaremos paso a paso en la configuración inicial.
                      </p>
                      <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">Instalación guiada en 5 minutos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">Soporte en vivo por WhatsApp</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">Sin conocimientos técnicos necesarios</span>
                        </li>
                      </ul>
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs mx-auto">
                        <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <div className="h-40 bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                            <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Nuestro equipo te guiará en cada paso</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Paso 3 - Mobile */}
                <SwiperSlide>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mx-2 h-full">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 mx-auto">
                        3
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Disfruta de tu TV Premium</h3>
                      <p className="text-gray-600 mb-6">
                        Accede a todo el contenido legal, sin preocupaciones y con la mejor calidad.
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center mb-6">
                        <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4 mr-1.5" />
                          Sin riesgo de multas
                        </span>
                        <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4 mr-1.5" />
                          Sin publicidad de competencia
                        </span>
                        <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4 mr-1.5" />
                          Soporte 24/7
                        </span>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs mx-auto">
                        <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <div className="h-40 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center">
                            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">Disfruta de todo el contenido sin preocupaciones</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Desktop Layout (hidden on mobile) */}
            <div className="hidden md:block relative">
              {/* Línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200 transform -translate-x-1/2"></div>
              
              {/* Paso 1 */}
              <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 md:mx-auto md:ml-auto">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Descarga la App</h3>
                  <p className="text-gray-600 mb-4">
                    Recibirás un enlace de descarga por WhatsApp. Es compatible con Smart TV, Fire TV, Android TV y Roku.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                    <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      Android TV
                    </span>
                    <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.05-.5 1.74-1.67 3.43"></path>
                      </svg>
                      Fire TV
                    </span>
                    <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
                        <path d="M12 17a1 1 0 01-1-1v-4a1 1 0 012 0v4a1 1 0 01-1 1zm0-8a1 1 0 01-.92-1.38 1 1 0 011.84 0A1 1 0 0112 9z"/>
                      </svg>
                      Roku
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs">
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <div className="h-40 bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
                        <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">Recibirás el enlace de descarga por WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24">
                <div className="md:w-1/2 md:order-2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 md:mx-auto md:mr-auto">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Instala y Configura</h3>
                  <p className="text-gray-600 mb-4">
                    Sigue las instrucciones en pantalla. Te guiaremos paso a paso en la configuración inicial.
                  </p>
                  <ul className="space-y-2 text-left max-w-md mx-auto md:mx-0">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Instalación guiada en 5 minutos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Soporte en vivo por WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Sin conocimientos técnicos necesarios</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 md:order-1 md:pr-12 flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs">
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <div className="h-40 bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">Nuestro equipo te guiará en cada paso</p>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold mb-4 md:mx-auto md:ml-auto">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Disfruta de tu TV Premium</h3>
                  <p className="text-gray-600 mb-6">
                    Accede a todo el contenido legal, sin preocupaciones y con la mejor calidad.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4 mr-1.5" />
                      Sin riesgo de multas
                    </span>
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4 mr-1.5" />
                      Sin publicidad de competencia
                    </span>
                    <span className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4 mr-1.5" />
                      Soporte 24/7
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs">
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-40 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center">
                        <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-3">Disfruta de contenido legal las 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Activa tu TV Premium hoy mismo y disfruta de contenido legal sin preocupaciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base font-bold px-6 py-4 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <a 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-8.357-5.12h.01z"/>
                      </svg>
                      Activar Ahora - $54/año
                    </a>
                  </Button>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-orange-500 bg-transparent px-4 py-2 text-sm font-medium text-orange-600 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full sm:w-auto"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Agendar Llamada
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Sin letra pequeña. Garantía de devolución de 7 días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Timeline */}
      <section id="timeline" className="pt-0 pb-16 md:pb-24 bg-white -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Proceso sin complicaciones
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De la compra a la protección en menos de 2 horas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Así de fácil es comenzar a disfrutar de tu TV Premium segura y legal
              </p>
            </div>

            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 transform -translate-x-1/2"></div>
              
              {/* Punto 1 - Compra */}
              <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24 group">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-lg font-bold mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso 1: Realiza tu compra</h3>
                  <p className="text-gray-600">
                    Compra segura en menos de 2 minutos. Aceptamos todas las tarjetas y transferencias.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Tiempo: 2 min
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center order-1 md:order-2">
                  <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gray-50 rounded-lg p-4 w-64">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <div className="text-sm text-gray-600">Pago seguro</div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Total a pagar:</span>
                        <span className="text-lg font-bold text-gray-900">$54 USD</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-8 bg-gray-200 rounded-md"></div>
                        ))}
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors">
                        Pagar ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punto 2 - Activación */}
              <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24 group">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-lg font-bold mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-green-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso 2: Recibe tus credenciales</h3>
                  <p className="text-gray-600">
                    Te enviaremos un correo y WhatsApp con tus datos de acceso y enlaces de descarga.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Tiempo: Inmediato
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex justify-center order-1">
                  <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gray-50 rounded-lg p-4 w-64">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Legazy TV</div>
                          <div className="text-xs text-gray-500">soporte@legazytv.com</div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <div className="text-xs text-gray-500">Usuario</div>
                          <div className="font-mono text-sm">tuusuario_123</div>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200">
                          <div className="text-xs text-gray-500">Contraseña</div>
                          <div className="font-mono text-sm">••••••••</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punto 3 - Instalación */}
              <div className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24 group">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right order-2 md:order-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white text-lg font-bold mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-purple-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso 3: Instala la aplicación</h3>
                  <p className="text-gray-600">
                    Sigue nuestra guía paso a paso o déjanos ayudarte con una instalación remota.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Tiempo: 10-15 min
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-center order-1 md:order-2">
                  <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gray-50 rounded-lg p-4 w-64">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </div>
                        <div className="text-sm font-medium text-gray-900">Guía de instalación</div>
                      </div>
                      
                      {/* Mobile Slider */}
                      <div className="md:hidden mt-4">
                        <Swiper
                          slidesPerView={1.2}
                          spaceBetween={16}
                          centeredSlides={true}
                          pagination={{
                            clickable: true,
                          }}
                          className="w-full"
                        >
                          <SwiperSlide>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-full">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                              <span className="text-black font-medium">Descarga la app</span>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-full">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                              <span className="text-black font-medium">Inicia sesión</span>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm h-full">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                              <span className="text-black font-medium">Configura tu TV</span>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      
                      {/* Desktop List */}
                      <div className="hidden md:block space-y-2 text-sm">
                        <div className="flex items-center p-2 bg-white rounded border border-gray-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-2">1</div>
                          <span className="text-black font-medium">Descarga la app</span>
                        </div>
                        <div className="flex items-center p-2 bg-white rounded border border-gray-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-2">2</div>
                          <span className="text-black font-medium">Inicia sesión</span>
                        </div>
                        <div className="flex items-center p-2 bg-white rounded border border-gray-200">
                          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-2">3</div>
                          <span className="text-black font-medium">Configura tu TV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punto 4 - Disfruta */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-lg font-bold mb-4 transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-orange-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso 4: Disfruta sin preocupaciones</h3>
                  <p className="text-gray-600">
                    Accede a todo el contenido premium de forma legal y segura, con soporte 24/7.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Tiempo: ¡A disfrutar! 🎉
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex justify-center order-1">
                  <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-gray-900 rounded-lg overflow-hidden w-64">
                      <div className="h-32 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <div className="text-sm font-medium mb-1">Reproduciendo</div>
                          <div className="text-lg font-bold">Canal Premium HD</div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-3">
                            <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-800">
                        <div className="flex justify-between items-center">
                          <button className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.445 14.832A1 1 0 007 14v-2.798l5.445 3.63a1 1 0 001.11-1.664L9 10.202V7.798l4.555 3.036a1 1 0 101.11-1.664L8 5.869v-.737a1 1 0 011.555-.832l6 4a1 1 0 010 1.664l-6 4a1 1 0 01-1.11 0z"/>
                            </svg>
                          </button>
                          <div className="text-xs text-gray-400">00:42 / 01:45:32</div>
                          <button className="text-gray-300 hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Únete a cientos de negocios que ya disfrutan de contenido legal sin preocupaciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-white text-blue-700 hover:bg-gray-100 text-sm sm:text-base font-bold px-6 py-4 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <a 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                      </svg>
                      Activar Ahora - $54/año
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Hablar con un asesor
                  </Button>
                </div>
                <p className="text-blue-200 text-sm mt-4">
                  Sin letra pequeña. Garantía de devolución de 7 días.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 7: Precios */}
      <section id="precios" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Precios Transparentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo el contenido premium por menos de lo que cuesta una cena
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paga una sola vez y disfruta de todo el año sin sorpresas
              </p>
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden mb-12">
              <Swiper
                slidesPerView={1.1}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                className="w-full pb-10"
              >
                {/* Plan Básico */}
                <SwiperSlide>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Básico</h3>
                      <div className="flex items-baseline justify-center mb-6">
                        <span className="text-4xl font-extrabold text-gray-900">$44</span>
                        <span className="ml-1 text-gray-500">/año</span>
                      </div>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Básico+de+TV+Legal+por+%2444+USD%2Faño&type=phone_number&app_absent=0" 
                        className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elegir Plan Básico
                      </a>
                    </div>
                    <div className="border-t border-gray-100 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">1 pantalla a la vez</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Acceso a canales en vivo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Películas y series</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Soporte prioritario</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Plan Premium */}
                <SwiperSlide>
                  <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-500 h-full">
                    <div className="p-6 text-center">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                        MÁS POPULAR
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Premium</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-extrabold text-gray-900">$54</span>
                        <span className="ml-1 text-gray-500">/año</span>
                      </div>
                      <p className="text-sm text-orange-600 font-medium mb-6">Ahorra $30 vs servicios ilegales</p>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Premium+de+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                        className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elegir Plan Premium
                      </a>
                    </div>
                    <div className="border-t border-gray-100 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Hasta 3 pantallas simultáneas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Acceso a canales en vivo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Películas y series ilimitadas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Soporte prioritario 24/7</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Guía de programación</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Plan Familiar */}
                <SwiperSlide>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Familiar</h3>
                      <div className="flex items-baseline justify-center mb-6">
                        <span className="text-4xl font-extrabold text-gray-900">$89</span>
                        <span className="ml-1 text-gray-500">/año</span>
                      </div>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Familiar+de+TV+Legal+por+%2489+USD%2Faño&type=phone_number&app_absent=0" 
                        className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Elegir Plan Familiar
                      </a>
                    </div>
                    <div className="border-t border-gray-100 px-6 py-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Hasta 5 pantallas simultáneas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Acceso a canales en vivo</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Contenido ilimitado</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Soporte VIP 24/7</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-black">Guía de programación avanzada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
              {/* Plan Básico */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Básico</h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$44</span>
                    <span className="ml-1 text-gray-500">/año</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Ideal para una sola pantalla</p>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Básico+de+TV+Legal+por+%2444+USD%2Faño&type=phone_number&app_absent=0" 
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegir Plan Básico
                  </a>
                </div>
                <div className="border-t border-gray-100 px-6 py-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">1 pantalla a la vez</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Acceso a canales en vivo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Películas y series</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Soporte prioritario</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Plan Premium - Destacado */}
              <div className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    MÁS POPULAR
                  </span>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-500 transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                  <div className="p-6 text-center flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Premium</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-extrabold text-gray-900">$54</span>
                      <span className="ml-1 text-gray-500">/año</span>
                    </div>
                    <p className="text-sm text-orange-600 font-medium mb-6">Ahorra $30 vs servicios ilegales</p>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Premium+de+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                      className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Elegir Plan Premium
                    </a>
                  </div>
                  <div className="border-t border-gray-100 px-6 py-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-black">Hasta 3 pantallas simultáneas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-black">Acceso a canales en vivo</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-black">Películas y series ilimitadas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-black">Soporte prioritario 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-black">Guía de programación</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Plan Familiar */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Plan Familiar</h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$89</span>
                    <span className="ml-1 text-gray-500">/año</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Para toda la familia</p>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Familiar+de+TV+Legal+por+%2489+USD%2Faño&type=phone_number&app_absent=0" 
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegir Plan Familiar
                  </a>
                </div>
                <div className="border-t border-gray-100 px-6 py-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Hasta 5 pantallas simultáneas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Acceso a canales en vivo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Contenido ilimitado</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Soporte VIP 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-black">Guía de programación avanzada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparativa de Precios - Mobile Tabs */}
            <div className="md:hidden bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-16">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Comparativa de Precios Anuales</h3>
                <p className="text-gray-600">Mira cuánto puedes ahorrar con Legazy TV</p>
              </div>
              
              <div className="p-4">
                <div className="grid gap-4">
                  {/* Cable Tradicional */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Cable Tradicional</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Precio Anual:</span>
                      <span className="text-sm font-bold text-black">$600-900</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">Ahorro con Legazy:</span>
                      <span className="text-sm font-medium text-green-600">Hasta $846</span>
                    </div>
                  </div>
                  
                  {/* Servicios de Streaming */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Servicios de Streaming</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Precio Anual:</span>
                      <span className="text-sm font-bold text-black">$300-500</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">Ahorro con Legazy:</span>
                      <span className="text-sm font-medium text-green-600">Hasta $446</span>
                    </div>
                  </div>
                  
                  {/* Servicios Ilegales */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Servicios Ilegales de TV</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Precio Anual:</span>
                      <span className="text-sm font-bold text-black">$80-120</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">Ahorro con Legazy:</span>
                      <span className="text-sm font-medium text-green-600">Hasta $66</span>
                    </div>
                  </div>
                  
                  {/* Legazy TV Premium */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Legazy TV Premium</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Precio Anual:</span>
                      <span className="text-sm font-bold text-black">$54</span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-sm font-bold text-green-600">Mejor relación calidad-precio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comparativa de Precios - Desktop Table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-16">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Comparativa de Precios Anuales</h3>
                <p className="text-gray-600">Mira cuánto puedes ahorrar con Legazy TV</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Anual</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ahorro con Legazy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cable Tradicional</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium text-right">$600-900</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">Hasta $846 de ahorro</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Servicios de Streaming (Netflix, HBO, etc.)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium text-right">$300-500</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">Hasta $446 de ahorro</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Servicios Ilegales de TV</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium text-right">$80-120</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 text-right">Hasta $66 de ahorro</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Legazy TV Premium</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black text-right">$54</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 text-right">Mejor relación calidad-precio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Garantía de Satisfacción */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de Satisfacción</h3>
                <p className="text-gray-600 mb-6">
                  Estamos tan seguros de que te encantará nuestro servicio que te ofrecemos una garantía de devolución de 7 días. 
                  Si no quedas satisfecho, te devolvemos tu dinero. Sin preguntas, sin letra pequeña.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm sm:text-base font-bold px-6 py-4 rounded-full shadow-xl transform transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    <a 
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.964-.941 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                      </svg>
                      Activar Ahora - $54/año
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full sm:w-auto flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-.554 1.396-1.274 1.772-1.175v11.65c0 .414.336.75.75.75s.75-.336.75-.75V7.725c.376-.099 1.223.62 1.772 1.175.219.22.576.22.795 0s.22-.576 0-.796c-1.127-1.136-2.064-1.75-3.317-1.75-1.253 0-2.19.614-3.317 1.75-.22.22-.22.576 0 .796s.576.22.795 0zM12 18a1 1 0 100-2 1 1 0 000 2z"></path>
                    </svg>
                    Ver Preguntas Frecuentes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 8: Comparación con la Competencia */}
      <section id="comparacion" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Comparativa Honesta
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                La verdad sobre las opciones de TV para negocios
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No todas las soluciones son iguales. Compara y decide con información clara.
              </p>
            </div>

            {/* Mobile Comparison Tabs */}
            <div className="md:hidden space-y-6 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Compara las opciones de TV</h3>
              
              {/* TV Tradicional Tab */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-900 text-center">TV Tradicional</h4>
                  <p className="text-sm text-gray-600 text-center">Cable/Satélite</p>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Inversión Anual</p>
                    <p className="text-black font-bold text-lg">$600-900</p>
                    <p className="text-xs text-gray-500">+ cargos ocultos</p>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-base font-bold text-black">Sin contenido premium</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-base font-bold text-black">100% Legal</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Soporte Técnico</p>
                    <p className="text-base font-bold text-black">Largo tiempo de espera</p>
                  </div>
                </div>
              </div>

              {/* Legazy TV Tab - Highlighted */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200 relative">
                <div className="bg-blue-600 text-white p-2 text-center text-xs font-bold">
                  MEJOR OPCIÓN
                </div>
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <h4 className="font-bold text-blue-800 text-center">Legazy TV</h4>
                  <p className="text-sm text-blue-600 text-center">Solución Profesional</p>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Inversión Anual</p>
                    <p className="text-3xl font-bold text-black">$54</p>
                    <p className="text-xs text-blue-600">Pago único al año</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-black">Contenido Premium</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-black">100% Legal</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Soporte Técnico</p>
                    <p className="text-sm font-medium text-black">Soporte prioritario 24/7</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-black">Múltiples Pantallas</p>
                    <p className="text-sm text-black">Hasta 3 pantallas</p>
                    <p className="text-xs text-blue-500">En el plan Premium</p>
                  </div>
                </div>
              </div>

              {/* Servicios Ilegales Tab */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-900 text-center">Servicios Ilegales</h4>
                  <p className="text-sm text-gray-600 text-center">IPTV Pirata</p>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Inversión Anual</p>
                    <p className="font-bold text-black text-lg">$80-120</p>
                    <p className="text-xs text-red-600">+ riesgo de estafa</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-black">Contenido Premium</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                    <div>
                      <span className="text-sm block text-black">No es legal</span>
                      <span className="text-xs text-black">Riesgo de multas</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Soporte Técnico</p>
                    <p className="text-sm text-black">Inexistente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden md:block overflow-hidden shadow-xl rounded-xl border border-gray-200 mb-16">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        Características
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-gray-900">TV Tradicional</span>
                          <span className="text-xs text-gray-500">Cable/Satélite</span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-blue-700">Legazy TV</span>
                          <span className="text-xs text-blue-600">Solución Profesional</span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-gray-900">Servicios Ilegales</span>
                          <span className="text-xs text-gray-500">IPTV Pirata</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Fila 1: Precio */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Inversión Anual
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        <span className="font-bold text-black">$300-500</span>
                        <p className="text-xs text-gray-500 mt-1">+ cargos ocultos</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-blue-700 bg-blue-50">
                        <span className="text-2xl">$54</span>
                        <p className="text-xs text-blue-600 mt-1">Pago único al año</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        <span className="font-bold">$80-120</span>
                        <p className="text-xs text-gray-500 mt-1">+ riesgo de estafa</p>
                      </td>
                    </tr>

                    {/* Fila 2: Contenido */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Contenido Premium
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>

                    {/* Fila 3: Legalidad */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        100% Legal
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        <p className="text-xs text-red-600 mt-1">Riesgo de multas</p>
                      </td>
                    </tr>

                    {/* Fila 4: Soporte */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Soporte Técnico
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-500">Largo tiempo de espera</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <span className="text-sm font-medium text-blue-700">Soporte prioritario 24/7</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-500">Inexistente</span>
                      </td>
                    </tr>

                    {/* Fila 5: Contrato */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sin Contratos Largos
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                        <p className="text-xs text-gray-500 mt-1">12-24 meses</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        <p className="text-xs text-blue-600 mt-1">Sin ataduras</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      </td>
                    </tr>

                    {/* Fila 6: Dispositivos */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Múltiples Pantallas
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-700">Costo adicional</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <span className="text-sm font-medium text-blue-700">Hasta 3 pantallas</span>
                        <p className="text-xs text-blue-600 mt-1">En el plan Premium</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-700">Variable</span>
                        <p className="text-xs text-gray-500 mt-1">Calidad inestable</p>
                      </td>
                    </tr>

                    {/* Fila 7: Actualizaciones */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Actualizaciones Incluidas
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-700">Pago por paquete</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center bg-blue-50">
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        <p className="text-xs text-blue-600 mt-1">Siempre actualizado</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm text-gray-700">Inestable</span>
                        <p className="text-xs text-red-600 mt-1">Puede dejar de funcionar</p>
                      </td>
                    </tr>

                    {/* Fila 8: Llamada a la acción */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-6 text-center" colSpan={4}>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                          <p className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">
                            ¿Listo para hacer el cambio inteligente?
                          </p>
                          <a 
                            href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+el+Plan+Premium+de+TV+Legal+por+%2454+USD%2Faño&type=phone_number&app_absent=0"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Activar Ahora - $54/año
                            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tarjeta de Garantía */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 text-center border border-blue-200">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de Satisfacción</h3>
                <p className="text-gray-700 mb-6">
                  Si en los primeros 7 días no estás completamente satisfecho con nuestro servicio, te devolvemos tu dinero. 
                  Sin preguntas, sin letra pequeña. Tu satisfacción está 100% garantizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+activar+mi+TV+Legal+con+garantía+de+7+días&type=phone_number&app_absent=0" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Probar sin riesgo
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                  </a>
                  <a 
                    href="#preguntas-frecuentes" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  >
                    Ver Preguntas Frecuentes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 9: Reducción de Riesgo */}
      <section id="reduccion-riesgo" className="pt-0 pb-16 md:pb-24 bg-gray-50 -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Protección Integral
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Elimina los riesgos legales de tu negocio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Protege tu negocio de multas y mejora la experiencia de tus clientes
              </p>
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden mb-12">
              <div className="swiper-container">
                <div className="swiper-wrapper pb-10">
                  {/* Tarjeta de Riesgo Legal */}
                  <div className="swiper-slide px-2">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
                      <div className="bg-red-50 p-6 border-b border-red-100">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <h3 className="ml-4 text-xl font-bold text-red-700">Riesgo Actual</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Multas por Derechos de Autor</h4>
                              <p className="text-sm text-gray-600 mt-1">Hasta $5,000 por infracción de derechos de autor</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Publicidad de la Competencia</h4>
                              <p className="text-sm text-gray-600 mt-1">Tus clientes ven anuncios de tus competidores</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Contenido Inapropiado</h4>
                              <p className="text-sm text-gray-600 mt-1">Riesgo de mostrar contenido no deseado</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Cortes de Servicio</h4>
                              <p className="text-sm text-gray-600 mt-1">Inestabilidad en la programación</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta de Solución */}
                  <div className="swiper-slide px-2">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500 h-full">
                      <div className="bg-green-50 p-6 border-b border-green-100">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="ml-4 text-xl font-bold text-green-700">Con Legazy TV</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Protección Legal Total</h4>
                              <p className="text-sm text-gray-600 mt-1">Contenido 100% licenciado y seguro</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Marca Personalizada</h4>
                              <p className="text-sm text-gray-600 mt-1">Solo tu marca, sin publicidad de terceros</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Contenido Controlado</h4>
                              <p className="text-sm text-gray-600 mt-1">Solo el contenido que tú apruebas</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Estabilidad Garantizada</h4>
                              <p className="text-sm text-gray-600 mt-1">Servicio confiable sin interrupciones</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-6"></div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 mb-16">
              {/* Tarjeta de Riesgo Legal */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="bg-red-50 p-6 border-b border-red-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-red-700">Riesgo Actual</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Multas por Derechos de Autor</h4>
                        <p className="text-sm text-gray-600 mt-1">Hasta $5,000 por infracción de derechos de autor</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Publicidad de la Competencia</h4>
                        <p className="text-sm text-gray-600 mt-1">Tus clientes ven anuncios de tus competidores</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Contenido Inapropiado</h4>
                        <p className="text-sm text-gray-600 mt-1">Riesgo de mostrar contenido no deseado</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Cortes de Servicio</h4>
                        <p className="text-sm text-gray-600 mt-1">Inestabilidad en la programación</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta de Solución */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500 hover:shadow-xl transition-shadow duration-300 h-full transform hover:-translate-y-1">
                <div className="bg-green-50 p-6 border-b border-green-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-green-700">Con Legazy TV</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Protección Legal Total</h4>
                        <p className="text-sm text-gray-600 mt-1">Contenido 100% licenciado y seguro</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Marca Personalizada</h4>
                        <p className="text-sm text-gray-600 mt-1">Solo tu marca, sin publicidad de terceros</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Contenido Controlado</h4>
                        <p className="text-sm text-gray-600 mt-1">Solo el contenido que tú apruebas</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Estabilidad Garantizada</h4>
                        <p className="text-sm text-gray-600 mt-1">Servicio confiable sin interrupciones</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 10: CTA Final (Escenarios) */}
      <section className="pt-0 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 -mt-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Decides hoy. Proteges tu negocio para siempre.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compara las diferencias y elige la mejor opción para tu negocio
            </p>
          </div>

          {/* Tabla de Comparación */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Columna SIN LEGAZY */}
              <div className="p-8 text-center">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100 h-full">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">SIN LEGAZY (YouTube)</h3>
                  <ul className="space-y-6 text-left">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">😰</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Vives con el miedo de una multa SAYCE</h4>
                        <p className="text-sm text-gray-600 mt-1">Riesgo constante de sanciones por derechos de autor</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">💣</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Tu TV muestra anuncios de tu competencia</h4>
                        <p className="text-sm text-gray-600 mt-1">Pierdes clientes al promocionar a tu competencia</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">📉</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Pierdes oportunidades de venta</h4>
                        <p className="text-sm text-gray-600 mt-1">Cada minuto es una oportunidad perdida</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">💸</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Riesgo de $500+ en multas</h4>
                        <p className="text-sm text-gray-600 mt-1">En cualquier momento pueden llegar sanciones</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Columna CON LEGAZY */}
              <div className="p-8 text-center">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 translate-y-2 rotate-12">
                    RECOMENDADO
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-6">CON LEGAZY TV</h3>
                  <ul className="space-y-6 text-left">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">😌</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Duermes tranquilo</h4>
                        <p className="text-sm text-gray-600 mt-1">Contenido 100% legal y seguro</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🛡</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Tu TV muestra lo que TÚ decides</h4>
                        <p className="text-sm text-gray-600 mt-1">Control total sobre tu contenido</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">📈</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Controlas la atención de tus clientes</h4>
                        <p className="text-sm text-gray-600 mt-1">Aprovecha cada minuto para vender más</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">💰</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Inviertes $54/año</h4>
                        <p className="text-sm text-gray-600 mt-1">Y proteges tu negocio de multas</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              SÍ, QUIERO PROTEGER MI TV Y MI NEGOCIO
            </h3>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-0.5 mb-6">
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+quiero+proteger+mi+TV+y+mi+negocio+con+Legazy+TV&type=phone_number&app_absent=0"
                className="flex flex-col items-center justify-center w-full bg-white hover:bg-gray-50 rounded-[13px] p-8 transition-all transform hover:scale-[1.01]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Activar Legazy por $54 USD/año
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4 mb-6">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Pago anual, renovación automática</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Activación en 2 horas</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Garantía de 7 días</span>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all transform hover:scale-105">
                  Activar Ahora - $54/año
                  <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                </span>
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Al hacer clic serás redirigido a un formulario seguro. Tiempo de compra: 2 minutos.
              <br />
              <span className="text-gray-400">Métodos de pago: Tarjeta, PayPal, Transferencia.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sección 11: FAQs Ultra Breves */}
      <section id="preguntas-frecuentes" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las 3 preguntas más comunes
            </h2>
            <p className="text-lg text-gray-600">
              Resolvemos tus dudas más frecuentes de forma clara y directa
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
              <button 
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  ¿Alguien viene a instalar la TV físicamente?
                </h3>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 pt-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0px'}}>
                <div className="prose text-gray-600">
                  <p className="font-semibold text-orange-600">No.</p>
                  <p>La instalación es remota. Tú descargas la app en tu dispositivo y nosotros te guiamos por WhatsApp/videollamada en tiempo real.</p>
                  <p className="text-sm text-gray-500 mt-2">Es más rápido y sin costo adicional.</p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
              <button 
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  ¿Es pago mensual?
                </h3>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 pt-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0px'}}>
                <div className="prose text-gray-600">
                  <p className="font-semibold text-orange-600">No.</p>
                  <p>Pagas $54 USD por todo el año. Se renueva automáticamente cada año.</p>
                  <p className="font-medium mt-2">Puedes cancelar cuando quieras.</p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
              <button 
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.classList.toggle('rotate-180');
                  }
                }}
              >
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                  ¿Realmente evito multas con esto?
                </h3>
                <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 pt-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out" style={{maxHeight: '0px'}}>
                <div className="prose text-gray-600">
                  <p className="font-semibold text-green-600">Sí.</p>
                  <p>Legazy es una plataforma de streaming con contenido legal. No usas YouTube ni canales sin licencia.</p>
                  <p className="font-medium mt-2">Eliminas el riesgo de sanciones de SAYCE por completo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Pequeño */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              ¿Tienes otra pregunta? Estamos aquí para ayudarte.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+tengo+una+pregunta+sobre+Legazy+TV&type=phone_number&app_absent=0"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sección 12: CTA Alternativo (Contacto Humano) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="w-full bg-gradient-to-br from-green-600 to-green-700 p-8 md:p-12 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Aún tienes dudas? Hablemos</h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                  Entendemos que cada restaurante tiene necesidades únicas. Si quieres hablar de tu caso específico antes de decidir, estamos aquí para ti.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola%2C+me+gustaría+hablar+con+un+asesor+sobre+Legazy+TV&type=phone_number&app_absent=0"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full shadow-lg text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 2h-11C4 2 2 4 2 6.5v11C2 20 4 22 6.5 22h11c2.5 0 4.5-2 4.5-4.5v-11C22 4 20 2 17.5 2zm-11 1h11C19.4 3 21 4.6 21 6.5v11c0 1.9-1.6 3.5-3.5 3.5h-11C4.6 21 3 19.4 3 17.5v-11C3 4.6 4.6 3 6.5 3zm7.5 4c-3.6 0-6.5 2.9-6.5 6.5 0 1.4.5 2.8 1.3 3.8l-.8 2.3 2.4-.8c1 .7 2.2 1.1 3.4 1.1 3.6 0 6.5-2.9 6.5-6.5C20.5 9.9 17.6 7 14 7zm0 1c3 0 5.5 2.5 5.5 5.5S17 19 14 19c-1.1 0-2.1-.3-3-.9l-.2-.1-1.7.6.6-1.7-.1-.2c-.6-.8-1-1.8-1-2.9C9 10.5 11.5 8 14 8zm-2.4 2.2c-.1 0-.3.1-.4.1-.2.1-.3.2-.6.4-.2.1-.4.4-.6.6-.2.2-.4.4-.4.7 0 .2.1.4.2.6.1.2.2.4.3.6.1.2.3.5.5.7.2.2.4.4.6.6.2.2.5.4.7.6.3.2.6.4.9.5.3.1.6.2.9.2.2 0 .4 0 .6-.1.2 0 .4-.1.6-.2.2-.1.3-.2.4-.4.1-.1.2-.3.3-.5 0-.2 0-.4-.1-.5-.1-.2-.2-.4-.4-.5-.2-.1-.4-.3-.7-.5-.2-.2-.5-.4-.7-.6-.2-.2-.4-.4-.6-.6-.2-.2-.4-.4-.5-.6-.1-.2-.3-.4-.4-.6 0-.2-.1-.4-.1-.6 0-.3.1-.5.2-.7.1-.2.2-.4.4-.5.2-.1.3-.2.5-.2h.5c.1 0 .3.1.4.1.1 0 .2.1.3.2.1.1.2.2.2.3.1.1.2.3.2.4.1.1.1.3.1.4 0 .1 0 .2-.1.4 0 .1-.1.2-.1.3-.1.1-.1.2-.2.3-.1.1-.2.2-.3.3-.1.1-.2.2-.3.3-.1.1-.2.2-.3.3-.1.1-.2.2-.2.3-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.2.2.3.3.2.2.4.4.6.6.2.2.5.4.7.6.3.2.5.5.7.8.2.3.4.6.5.9.1.3.2.6.2.9 0 .3-.1.7-.2 1-.1.3-.3.6-.5.9-.2.3-.5.5-.8.7-.3.2-.7.4-1.1.5-.4.1-.8.2-1.2.2-.5 0-1-.1-1.5-.3-.4-.2-.8-.4-1.2-.7l-.3-.2-1.4.5.5-1.4-.2-.3c-.3-.4-.5-.8-.7-1.2-.2-.4-.3-.9-.3-1.4 0-.6.1-1.2.4-1.8.3-.6.7-1.1 1.2-1.5.5-.4 1.1-.7 1.8-.8.3-.1.6-.1.9-.1.1 0 .2 0 .3.1z" />
                  </svg>
                  Hablar con un Asesor por WhatsApp
                </a>
                <p className="text-sm text-green-100 mt-8">
                  <span className="font-medium">Respuesta en menos de 1 hora</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
