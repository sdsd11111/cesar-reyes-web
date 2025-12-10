"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MobileSlider from "@/components/mobile-slider"
import { useEffect } from "react"
import ExpandableCard from "@/components/expandable-card"
import NewsletterForm from "@/components/newsletter-form"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import React from "react"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactPhotoSlider from "@/components/contact-photo-slider"
import EmbeddedChat from '../embedded-chat-component/src/components/EmbeddedChat'
import { LogoSlider } from "@/components/logo-slider"
import BusinessSuccessQuiz from "@/components/BusinessSuccessQuiz"
import ParallaxSection from "@/components/ParallaxSection"
import StrategyTabs from "@/components/StrategyTabs"
import PopularArticlesSlider from "@/components/PopularArticlesSlider"
import ChatModal from "@/components/ChatModal"
import VideoModal from "@/components/VideoModal"
import dynamic from 'next/dynamic';

// Importación dinámica para el modal del portafolio
const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), {
  ssr: false,
});

// Componente para el slider de cards móviles con dots
function CardsMobileSlider() {
  const cards = [
    {
      title: "¿Tu Negocio en Riesgo? ¡75% Fracasan!",
      text: "El 75% de las empresas cierran antes de los 2 años por no tener estrategias de ventas claras, ¡sin un estudio de mercado, estás jugando a la ruleta! No dejes que la intuición te cueste tu sueño. Un diagnóstico profundo te ahorra tiempo, dinero y muchísimos dolores de cabeza.",
    },
    {
      title: "El Secreto de los que Crecen",
      text: "Las empresas que usan estudios de mercado crecen casi un 28% más y ¡son 8.9% más rentables! ¿Imaginas ese salto en tu negocio? Deja de adivinar y empieza a construir sobre bases sólidas y datos reales.",
    },
    {
      title: "¿Eres del 70.5% que Aún No Investiga?",
      text: "En Guayaquil, más del 70% de las PYMES nunca hicieron un estudio de mercado, ¡pero el 98% cree que los datos mejoran la competitividad! No es solo una 'gran empresa'; es una necesidad. Tus clientes están cambiando y ¡necesitas conocerlos para adelantarte!",
    },
    {
      title: "¿Qué Tienen en Común Coca-Cola y Marvel? ¡Datos!",
      text: "Grandes como Coca-Cola y Marvel usan el análisis de datos para entender a sus clientes y ¡multiplicar sus ventas y éxitos! No necesitas ser un gigante para pensar como uno. Aprende de los mejores y adapta la inteligencia a tu escala.",
    },
  ];
  const [current, setCurrent] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  // Scroll handler para actualizar el índice
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    const idx = Math.round(scrollLeft / width);
    setCurrent(idx);
  };

  // Scroll a la card seleccionada al hacer click en un dot
  const scrollToCard = (idx: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="flex gap-6 min-w-max px-2 overflow-x-auto scroll-smooth"
        onScroll={handleScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full min-w-[85vw] max-w-xs transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div>
              <h3 className="text-xl font-bold mb-3 text-black">{card.title}</h3>
              <p className="text-gray-700 mb-6">{card.text}</p>
            </div>
            <a href="#" className="text-primary font-semibold flex items-center gap-2 group hover:underline transition-colors">
              Leer artículo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
      {/* Dots de navegación fijos debajo del slider */}
      <div className="flex justify-center mt-3 gap-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`h-2.5 w-2.5 rounded-full border transition-colors duration-200 ${idx === current ? 'bg-primary border-primary' : 'bg-gray-300 bg-opacity-60 border-gray-300'}`}
            style={{ display: 'inline-block' }}
            aria-label={`Ir a la card ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  // Efecto para asegurar que la página comience desde arriba al cargar
  useEffect(() => {
    // Desplazar al inicio de la página cuando el componente se monte
    window.scrollTo(0, 0);
    
    // También manejamos el evento de carga para navegadores antiguos
    window.onload = function() {
      window.scrollTo(0, 0);
    };
  }, []);

  // Estados y funciones del componente principal
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[475px] md:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/portada_cesarbn.webp"
            alt="César Reyes fondo"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* ...eliminar el texto aquí... */}
        </div>
        {/* Texto en la parte baja del hero - H1 principal */}
        <div className="absolute bottom-32 left-0 w-full flex flex-col items-center z-30 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg mb-2" style={{ fontFamily: 'var(--font-poiret-one)', fontWeight: 900 }}>
              Cada venta que no cierras lo hace otro
          </h1>
          <p className="text-lg md:text-2xl text-white text-center max-w-2xl mx-auto font-normal drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
              El 50% de las ventas se las lleva quien responde primero a la consulta del cliente. (InsideSales.com)
          </p>
        </div>
      </section>

      {/* Sección de Logos de Clientes con Slider Infinito */}
      <section className="relative w-full py-16 bg-white overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        
        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <LogoSlider />
          </div>
        </div>
      </section>

      {/* Sección del cuestionario de éxito empresarial */}
      <section className="w-full bg-[#121212] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">¿Listo para cumplir tus metas?</h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">Contesta estas 4 preguntas y evaluemos cómo está tu negocio</p>
          <div className="max-w-4xl mx-auto">
            <BusinessSuccessQuiz 
              title=""
              submitButtonText="Enviar"
              onSubmit={(data: { name: string; whatsapp: string; company: string; message: string }, answers: any) => {
                console.log('Datos del formulario:', data);
                console.log('Respuestas del quiz:', answers);
                // Aquí puedes agregar la lógica para enviar los datos a tu backend
                // Por ejemplo: sendFormDataToBackend({ ...data, answers });
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sección con efecto parallax */}
      <ParallaxSection />

      {/* Nueva sección: Cómo cambiar la realidad de tu empresa */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">¿Cómo cambiar la realidad de tu empresa?</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
              "Imagina lo siguiente: Dejar de publicar todos los días para concentrarte en cumplir un solo objetivo, posicionar una idea, un servicio, tu producto, dejar de invadir la privacidad de los demás y solamente atender a quienes te buscan."
            </p>
          </div>
        </div>
      </section>

      {/* Sección de estrategia con pestañas */}
      <StrategyTabs />

      {/* Nueva sección de CTA */}
      <section className="w-full bg-[#121212] py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-blue-500/10 via-transparent to-transparent transform rotate-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CTA 1: Agendar Consultoría */}
            <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Agendar una consultoría</h3>
                <p className="text-gray-400 mb-6">Reserva una llamada personalizada para analizar las necesidades de tu negocio.</p>
                <button 
                  onClick={() => setIsChatModalOpen(true)}
                  className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Agendar ahora
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* CTA 2: Ver Portafolio */}
            <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ver Portafolio</h3>
                <p className="text-gray-400 mb-6">Descubre los proyectos exitosos que hemos realizado para nuestros clientes.</p>
                <button 
                  onClick={() => setIsPortfolioModalOpen(true)}
                  className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Ver proyectos
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* CTA 3: Ver Video */}
            <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ver Video</h3>
                <p className="text-gray-400 mb-6">Conoce más sobre nuestro enfoque y metodología en este video explicativo.</p>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Ver video
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Artículos Populares */}
      <PopularArticlesSlider />

      {/* Slide de testimonios */}
      <section className="w-full bg-[#121212] py-24">
        <div className="container mx-auto">
          <TestimonialSlider />
        </div>
      </section>


      {/* Newsletter minimalista horizontal */}
      <section className="w-full bg-[#121212] py-10 border-t border-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-0">Suscríbete a mi Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <input type="email" required placeholder="Tu correo electrónico" className="px-4 py-2 rounded bg-[#232323] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400 w-full md:w-64" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="privacidad" required className="accent-primary" />
              <label htmlFor="privacidad" className="text-xs text-gray-300">Acepto la política de privacidad</label>
            </div>
            <button type="submit" className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition text-sm">Suscribirme</button>
          </form>
        </div>
      </section>

      {/* Chat Modal */}
      <ChatModal 
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://iframe.mediadelivery.net/embed/455329/9d4dc6d4-034c-4bf8-8477-138ffc896ab2?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
      />
      <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} />
    </>
  )
}
