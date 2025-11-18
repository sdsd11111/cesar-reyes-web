'use client';

import React, { useState } from 'react';
import { PlayCircle, Search, Rocket, MessageCircle, CheckCircle, ArrowRight, Clock, Smartphone, DollarSign, Users, BarChart2, Shield } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';
import VideoModal from '@/components/VideoModal';

const MenuObjetivoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de suscripción
    console.log('Email suscrito:', email);
    setIsSubscribed(true);
    setEmail('');
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
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para modernizar tu restaurante
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Smartphone className="h-8 w-8 text-[#FF6B00]" />,
                title: "Diseño Responsive",
                description: "Se ve perfecto en cualquier dispositivo móvil, tableta o computadora."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-[#FF6B00]" />,
                title: "Sin Comisiones",
                description: "Tú decides cómo cobrar, sin sorpresas ni comisiones ocultas."
              },
              {
                icon: <Clock className="h-8 w-8 text-[#FF6B00]" />,
                title: "Actualización en Tiempo Real",
                description: "Cambia tu menú en segundos, sin imprimir ni desperdiciar recursos."
              },
              {
                icon: <Users className="h-8 w-8 text-[#FF6B00]" />,
                title: "Gestión de Pedidos",
                description: "Recibe pedidos directamente en tu WhatsApp sin intermediarios."
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-[#FF6B00]" />,
                title: "Estadísticas Avanzadas",
                description: "Conoce qué platos son los más populares y cuándo."
              },
              {
                icon: <Shield className="h-8 w-8 text-[#FF6B00]" />,
                title: "Seguro y Confiable",
                description: "Tus datos y los de tus clientes siempre protegidos."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#FFF5EF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. La Prueba Definitiva: Adminístralo en Vivo */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
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
            <div className="w-full space-y-4">
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <button 
                  className="w-full text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white flex justify-between items-center"
                >
                  Actualizar Menú
                  <svg className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6 pt-0">
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
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <button 
                  className="w-full text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white flex justify-between items-center"
                >
                  Agregar Plato Nuevo
                  <svg className="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6 pt-0">
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
                </div>
              </div>
            </div>
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
        </div>
      </section>

      {/* SECCIÓN 3: BENEFICIOS */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-[#FFF5EF] text-[#FF6B00] text-sm font-medium px-4 py-1 rounded-full mb-4">
              Todo lo que necesitas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Atrae más clientes y aumenta tus ventas
            </h2>
            <p className="text-gray-600 text-lg">
              Convierte a los buscadores en clientes con un menú digital optimizado para móviles y motores de búsqueda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Search className="h-6 w-6 text-[#FF6B00]" />,
                  title: "Posicionamiento en Google",
                  description: "Aparece cuando la gente busca lo que ofreces en tu ciudad."
                },
                {
                  icon: <Rocket className="h-6 w-6 text-[#FF6B00]" />,
                  title: "Diseño que convierte",
                  description: "Menús atractivos que aumentan el ticket promedio."
                },
                {
                  icon: <MessageCircle className="h-6 w-6 text-[#FF6B00]" />,
                  title: "Pedidos por WhatsApp",
                  description: "Tus clientes pueden hacer pedidos con un solo clic."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-gradient-to-br from-[#FFF5EF] to-[#FFEDE5] p-8 md:p-12 rounded-2xl border border-orange-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md max-w-xs mx-auto p-2">
              <img 
                src="/images/menuobjetivo/problema-enviar-menu-whatsapp-clientes.webp" 
                alt="Vista previa del menú en móvil" 
                className="w-full h-auto scale-80 transform transition-transform hover:scale-85"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CÓMO FUNCIONA */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Tan fácil como 1, 2, 3
            </h2>
            <p className="text-gray-600 text-lg">
              Configura tu menú digital en minutos, sin complicaciones ni conocimientos técnicos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Crea tu cuenta",
                description: "Regístrate en segundos. Sin tarjeta de crédito necesaria.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                number: "02",
                title: "Personaliza tu menú",
                description: "Sube fotos, precios y descripciones de tus platos.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                number: "03",
                title: "Comparte con el mundo",
                description: "Obtén tu enlace personalizado y compártelo con tus clientes.",
                color: "bg-green-100 text-green-600"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className={`inline-block ${step.color} text-sm font-semibold px-3 py-1 rounded-full mb-4`}>
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: SUSCRIPCIÓN */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            ¿Listo para aumentar tus ventas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Únete a cientos de restaurantes que ya están creciendo con MenúObjetivo.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 px-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full px-6 py-3 sm:py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm sm:text-base"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold py-3 sm:py-4 px-6 rounded-full transition-colors duration-300 whitespace-nowrap text-sm sm:text-base"
              >
                Empezar ahora
              </button>
            </form>
          ) : (
            <div className="bg-green-100 text-green-800 inline-block px-6 py-3 rounded-full">
              ¡Gracias por suscribirte! Pronto nos pondremos en contacto contigo.
            </div>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            Prueba gratuita de 14 días. Sin tarjeta de crédito requerida.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3: PREGUNTAS FRECUENTES */}
      <FaqSection 
        h2="Preguntas frecuentes"
        questions={[
          {
            q: "¿Cuánto cuesta MenúObjetivo?",
            a: "Ofrecemos planes flexibles según las necesidades de tu restaurante. Contáctanos para una cotización personalizada con un 20% de descuento en tu primer mes.",
            cta: "Ver planes"
          },
          {
            q: "¿Puedo probar antes de pagar?",
            a: "¡Claro! Ofrecemos una prueba gratuita de 14 días sin necesidad de tarjeta de crédito. Puedes probar todas las funciones y decidir si te convence.",
            cta: "Comenzar prueba"
          },
          {
            q: "¿Qué tipo de soporte ofrecen?",
            a: "Nuestro equipo de soporte está disponible por correo electrónico, chat y WhatsApp. También ofrecemos capacitación en línea para que saques el máximo provecho de la plataforma.",
            cta: "Contactar soporte"
          },
          {
            q: "¿Puedo migrar desde otra plataforma?",
            a: "Sí, podemos ayudarte a migrar tus datos desde otras plataformas de menú digital. Contáctanos para más información sobre el proceso de migración.",
            cta: "Más información"
          }
        ]} 
      />
    </div>
  );
};

export default MenuObjetivoPage;
