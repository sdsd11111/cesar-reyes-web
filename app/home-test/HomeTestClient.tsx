'use client'

// Importaciones de Next.js
import Image from "next/image"
import AIAuthoritySection from '@/components/AIAuthoritySection'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importaciones de React
import { useState, useEffect } from "react"

// Importaciones de librerías externas
import { motion } from "framer-motion";
import { Check, Stethoscope, ShoppingCart, BookOpen, Briefcase, AreaChart, TrendingUp, Users, MapPin, ChevronDown, ChevronUp, MousePointerClick } from "lucide-react";

// Importaciones de componentes locales
import StrategyTabs from "@/components/StrategyTabs";
import StrategyTabContent from "@/components/StrategyTabContent";
import BusinessSuccessQuiz from "@/components/BusinessSuccessQuiz";
import BusinessSuccessQuizEmocional from "@/components/BusinessSuccessQuiz_emocional";
import FaqSection from "@/components/FaqSection";
import { DualLogoCarousel } from "@/components/DualLogoCarousel";
import TestimonialSlider from "@/components/testimonial-slider";
import LearnMoreButton from "@/components/LearnMoreButton";

// Importación de componentes modales con carga dinámica
const ChatModal = dynamic(() => import('@/components/ChatModal'), { ssr: false });
const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), { ssr: false });
const VideoModal = dynamic(() => import('@/components/VideoModal'), { ssr: false });
const CalendarModal = dynamic(() => import('@/components/CalendarModal'), { ssr: false });

// Importaciones de componentes de UI
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Importación de hooks personalizados
import { useMediaQuery } from "@/hooks/use-media-query";

// Importación de contenido
import { pageContent } from "../../lib/content";


const iconMap: { [key: string]: React.ElementType } = {
  Stethoscope,
  ShoppingCart,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users
};

function CardItem({ card }: { card: any }) {
  // Helper to determine if the card has an image (like the google.webp case)
  const isImageCard = card.icon === 'Image';

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isImageCard ? 'overflow-hidden' :
        card.icon === 'AlertTriangle' ? 'bg-red-50 text-red-500' :
          card.icon === 'ShoppingCart' ? 'bg-blue-50 text-blue-500' :
            'bg-amber-50 text-amber-500'
        }`}>
        {isImageCard ? (
          <Image
            src={card.imageSrc || "/images/google.webp"}
            alt={card.title}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            {card.icon === 'Search' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            )}
            {card.icon === 'ShoppingCart' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            )}
            {card.icon === 'AlertTriangle' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            )}
          </>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
    </div>
  );
}

export default function HomeTestClient({ content, isEmotionalView: initialIsEmotionalView, initialShowContent = false }: { content: typeof pageContent.hoteles | typeof pageContent.restaurantes, isEmotionalView: boolean, initialShowContent?: boolean }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<'hoteles' | 'restaurantes' | null>(initialShowContent ? (initialIsEmotionalView ? 'restaurantes' : 'hoteles') : null);
  const [choiceMade, setChoiceMade] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isHotelCardExpanded, setIsHotelCardExpanded] = useState(false);
  const [isRestaurantCardExpanded, setIsRestaurantCardExpanded] = useState(false);
  const router = useRouter();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showFullQuote, setShowFullQuote] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const shortText = <>Somos la única consultora en Ecuador enfocada en <strong>reingeniería digital para el sector turístico</strong>...</>;
  const fullText = <>Somos la única consultora en Ecuador enfocada en <strong>reingeniería digital para el sector turístico</strong>. Deje de pagar hasta un 20% en comisiones por sus propios clientes. Nuestro método, que incluye un potente <strong>Motor de Reservas</strong> propio y el sistema <strong>Menú Digital</strong> con mayor retención de clientes, garantiza <strong>Reservas Directas</strong> y crecimiento medible.</>;

  const shortQuote = <>"En 2026, si tu restaurante u hotel no aparece en Google cuando alguien busca "dónde comer cerca" o "hoteles en tu ciudad", literalmente no existes para miles de clientes potenciales. Y ahora hay algo más preocupante: si ChatGPT</>;
  const fullQuote = <>"En 2026, si tu restaurante u hotel no aparece en Google cuando alguien busca "dónde comer cerca" o "hoteles en tu ciudad", literalmente no existes para miles de clientes potenciales. Y ahora hay algo más preocupante: si ChatGPT no te recomienda, quedas fuera. La verdad incómoda es esta: cada cliente que no llega a tu puerta hoy, está cenando o durmiendo en tu competencia, no porque seas peor, sino porque ellos sí están donde la gente busca."</>;

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' && localStorage.getItem('userChoice')) {
      setChoiceMade(true);
    }
  }, []);

  const handleChoice = (sector: 'hoteles' | 'restaurantes') => {
    setSelectedSector(sector);
    setChoiceMade(true);
    // Scroll to content or just show it? Usually good UX to scroll a bit if needed, but "no new link" request suggests keeping it simple.
    // We can add smooth scroll to the content section here if desired.
  };

  const isEmotionalView = selectedSector === 'restaurantes';
  const currentContent = selectedSector ? pageContent[selectedSector] : pageContent.hoteles; // Default to hoteles to avoid null access in hidden sections if any

  const primaryActionClasses = isEmotionalView
    ? "bg-orange-600 hover:bg-orange-700 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";

  const activeTabClasses = isEmotionalView
    ? "data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
    : "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Video Background - Client Only for Performance but Poster is SSR */}
        <Image
          src="/images/hero-home.webp"
          alt="Motor de Reservas y Menú Digital para Hoteles y Restaurantes en Ecuador - Consultoría César Reyes"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
          {/* Versión Desktop */}
          <div className="hidden md:block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4" style={{ fontFamily: 'var(--font-poiret-one)' }}>{pageContent.shared.hero.h1}</h1>

            <div className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              <p className="text-white/90">
                {showFullText ? (
                  <>
                    {fullText}
                    <button
                      onClick={() => setShowFullText(false)}
                      className="text-white/90 font-medium hover:underline ml-1 focus:outline-none inline-flex items-center"
                    >
                      <ChevronUp className="w-4 h-4 ml-1" />
                    </button>
                  </>
                ) : (
                  <>
                    {shortText}
                    <button
                      onClick={() => setShowFullText(true)}
                      className="text-white/90 font-medium hover:underline ml-1 focus:outline-none"
                    >
                      ...seguir leyendo
                    </button>
                  </>
                )}
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-8 py-6 text-lg cursor-pointer"
              onClick={() => setIsCalendarModalOpen(true)}
            >
              Agenda una Llamada Ahora
            </Button>
          </div>

          {/* Versión Móvil */}
          <div className="md:hidden px-4">
            <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{pageContent.shared.hero.h1}</h2>

            <p className="text-white/90 text-sm mb-6">
              {shortText}
            </p>
            <Button
              size="lg"
              className="w-full bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-6 py-4 text-base cursor-pointer"
              onClick={() => setIsCalendarModalOpen(true)}
            >
              Agenda una Llamada Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Cita */}
      <div className="w-full py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-loose text-center italic">
            {showFullQuote ? (
              <>
                {fullQuote}
                <button
                  onClick={() => setShowFullQuote(false)}
                  className="text-blue-600 font-medium hover:underline ml-2 focus:outline-none text-lg"
                >
                  ocultar
                </button>
              </>
            ) : (
              <>
                {shortQuote}
                <button
                  onClick={() => setShowFullQuote(true)}
                  className="text-blue-600 font-medium hover:underline ml-2 focus:outline-none text-lg"
                >
                  ...seguir leyendo
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Carrusel de Empresas */}
      <DualLogoCarousel />

      {/* Sección 2: Selección de Prioridad */}
      <section className="w-full py-20 md:py-28 bg-white">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 max-w-5xl mx-auto">{pageContent.shared.choiceSection.h2}</h2>

          {/* Instructional Indicator */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-100/50 shadow-sm animate-pulse cursor-default">
              <MousePointerClick className="w-5 h-5 text-blue-600" />
              <span className="text-sm md:text-base font-semibold text-blue-800 tracking-wide uppercase">
                Selecciona tu Sector 👇
              </span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Opción Hoteles (Antes Lógico) */}
            <div className="flex flex-col h-full">
              <div
                onClick={() => handleChoice('hoteles')}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={pageContent.shared.choiceSection.hoteles.image}
                    alt="Sistema de Reservas Directas para Hoteles en Ecuador - Motor de Reservas sin comisiones en Quito, Guayaquil, Cuenca y Loja"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-blue-700">
                      {pageContent.shared.choiceSection.hoteles.overlay.text}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">{pageContent.shared.choiceSection.hoteles.title}</h3>
                    </div>
                    {/* Texto condensado o completo según estado */}
                    <div className="text-sm text-gray-200 prose prose-invert max-w-none [&>strong]:text-white [&>strong]:font-bold">
                      {!isHotelCardExpanded ? (
                        <>
                          <p>Las plataformas te traen clientes de todo el mundo, pero <strong>tú los pierdes en el camino</strong>. Deja de pagar el 15-20% en comisiones.</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsHotelCardExpanded(true);
                            }}
                            className="mt-2 text-blue-300 hover:text-blue-100 underline text-xs font-semibold transition-colors"
                          >
                            Seguir leyendo →
                          </button>
                        </>
                      ) : (
                        <>
                          <div dangerouslySetInnerHTML={{ __html: pageContent.shared.choiceSection.hoteles.description }} />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsHotelCardExpanded(false);
                            }}
                            className="mt-2 text-blue-300 hover:text-blue-100 underline text-xs font-semibold transition-colors"
                          >
                            Mostrar menos ←
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opción Restaurantes (Antes Emocional) */}
            <div className="flex flex-col h-full">
              <div
                onClick={() => handleChoice('restaurantes')}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-96 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mb-6"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={pageContent.shared.choiceSection.restaurantes.image}
                    alt="Menú Digital Moderno para Restaurantes en Ecuador - Aumenta Ventas y Retención de Clientes en Loja, Quito, Guayaquil y Cuenca"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-orange-700">
                      {pageContent.shared.choiceSection.restaurantes.overlay.text}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">{pageContent.shared.choiceSection.restaurantes.title}</h3>
                    </div>
                    {/* Texto condensado o completo según estado */}
                    <div className="text-sm text-gray-200 prose prose-invert max-w-none [&>strong]:text-white [&>strong]:font-bold">
                      {!isRestaurantCardExpanded ? (
                        <>
                          <p>El cliente quiere ver tu menú dinámico y profesional en internet (no un PDF). Convierte visitantes ocasionales en clientes frecuentes.</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsRestaurantCardExpanded(true);
                            }}
                            className="mt-2 text-orange-300 hover:text-orange-100 underline text-xs font-semibold transition-colors"
                          >
                            Seguir leyendo →
                          </button>
                        </>
                      ) : (
                        <>
                          <div dangerouslySetInnerHTML={{ __html: pageContent.shared.choiceSection.restaurantes.description }} />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsRestaurantCardExpanded(false);
                            }}
                            className="mt-2 text-orange-300 hover:text-orange-100 underline text-xs font-semibold transition-colors"
                          >
                            Mostrar menos ←
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!choiceMade && <p className="text-center text-sm text-gray-500 mt-8">haz clic en una de ellas</p>}
        </motion.div>
      </section>

      {choiceMade && (
        <>
          {/* Quiz */}
          <section className="w-full bg-[#121212] py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">{currentContent.quiz.h2}</h2>
              <div
                className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto prose prose-invert [&>strong]:text-white [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: currentContent.quiz.p }}
              />
              <div className="max-w-4xl mx-auto">
                {isEmotionalView
                  ? <BusinessSuccessQuizEmocional
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
                    title=""
                    submitButtonText="Enviar"
                  />
                  : <BusinessSuccessQuiz
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
                    title=""
                    submitButtonText="Enviar"
                  />
                }
              </div>
            </div>
          </section>

          {/* 
            SECCIONES EXTRAÍDAS A COMPONENTES:
            - "Proceso con Pasos Claros" movido a: components/ProcessStepsSection.tsx
            - "Mi Consultoría No es Para Todos" movido a: components/ConsultingAudienceSection.tsx
            (Código eliminado de aquí para limpieza, pero preservado en los componentes mencionados)
          */}

          {/* Testimonios */}
          {/* Sección CTA */}
          <section className="w-full bg-[#121212] py-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-blue-500/10 via-transparent to-transparent transform rotate-12"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Tarjeta 1 */}
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
                    <a
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Agendar ahora
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tarjeta 2 */}
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

                {/* Tarjeta 3 */}
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

          {/* Sección de Autoridad: IA y ChatGPT - Interactive */}
          <AIAuthoritySection sector={selectedSector || 'hoteles'} />

          {/* CTA Section for Hotels - Only shows when hotel sector is selected */}
          {selectedSector === 'hoteles' && (
            <section className="w-full py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    ¿Listo para Multiplicar tus <span className="text-blue-300">Reservas Directas</span>?
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
                    Descubre cómo nuestro <strong className="text-white">Motor de Reservas</strong> puede transformar tu hotel y eliminar las comisiones de hasta 20%. Sistema probado, resultados garantizados.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                      href="/motor-reservas-hotel#elige-tu-nivel-de-independencia"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 text-lg w-full sm:w-auto border-2 border-transparent hover:border-blue-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                      <span>Ver Planes para Hoteles</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+César%2C+quiero+información+sobre+el+Motor+de+Reservas&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border-2 border-white/50 hover:border-white transition-all duration-300 hover:-translate-y-2 text-lg w-full sm:w-auto"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>Contactar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section for Restaurants - Only shows when restaurant sector is selected */}
          {selectedSector === 'restaurantes' && (
            <section className="w-full py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    ¿Listo para Aumentar tus <span className="text-orange-300">Ventas y Retención</span>?
                  </h2>
                  <p className="text-lg md:text-xl text-orange-100 leading-relaxed mb-10 max-w-3xl mx-auto">
                    Descubre cómo nuestro <strong className="text-white">Menú Digital</strong> puede transformar tu restaurante y convertir visitantes ocasionales en clientes frecuentes. Sistema probado, resultados garantizados.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                      href="/menu-digital#cuanto-cuesta-tener-un-menu-digital-que-aparezca-en-google"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-orange-50 text-orange-900 font-bold rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 text-lg w-full sm:w-auto border-2 border-transparent hover:border-orange-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      <span>Ver Planes para Restaurantes</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+César%2C+quiero+información+sobre+el+Menú+Digital&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent hover:bg-white/10 text-white font-bold rounded-xl border-2 border-white/50 hover:border-white transition-all duration-300 hover:-translate-y-2 text-lg w-full sm:w-auto"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      <span>Contactar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Video section removed per user request */}

          {/* Preguntas Frecuentes */}
          <FaqSection h2={currentContent.faq.h2} questions={currentContent.faq.questions} />

          {/* Cierre y CTA Final */}
          <section className="w-full py-20 bg-[#121212]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  ¿Listo para empezar a ser <span className="text-blue-500">dueño de tus clientes</span>?
                </h2>

                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Deje de regalar su margen de ganancia en comisiones. En Objetivo, entendemos que la cocina o el alojamiento es solo la mitad del negocio. La otra mitad es el <strong className="text-blue-400">marketing digital de bajo costo</strong>. Si su negocio turístico está en Ecuador y quiere dejar de trabajar para las apps, tiene que tomar una decisión hoy.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  {/* Botón Principal */}
                  <button
                    onClick={() => setIsCalendarModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-900/40 transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>Agenda una Llamada Estratégica Ahora</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>

                  {/* Botón Secundario */}
                  <a
                    href={selectedSector === 'restaurantes' ? "/menu-digital" : "/motor-reservas-hotel"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] hover:bg-[#252525] text-blue-400 font-bold rounded-lg border border-blue-900/50 hover:border-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 text-lg w-full sm:w-auto"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>Ver Planes Completos</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                  <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Sin contratos a largo plazo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Resultados medibles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Soporte en Ecuador</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>





          {/* Modales */}
          < ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)
          } />
          < PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} sector={selectedSector || 'hoteles'} />
          < VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoUrl="https://www.youtube.com/shorts/0KzBIMvyccA"
          />
          <CalendarModal
            isOpen={isCalendarModalOpen}
            onClose={() => setIsCalendarModalOpen(false)}
          />
        </>
      )
      }

      {/* Floating Card for Hotels - Only shows when hotel sector is selected */}
      {selectedSector === 'hoteles' && choiceMade && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="/motor-reservas-hotel#elige-tu-nivel-de-independencia"
            className="group block"
          >
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl p-6 pr-8 border-2 border-blue-400/30 hover:border-blue-300 transition-all duration-300 hover:shadow-blue-500/50 hover:-translate-y-2 overflow-hidden max-w-xs">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Pulse animation */}
              <div className="absolute -inset-1 bg-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      Ver Planes de Hoteles
                    </h3>
                    <p className="text-sm text-blue-100 mb-3 leading-snug">
                      Descubre todos nuestros planes y precios
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                      <span>Explorar ahora</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      )}

      {/* Floating Card for Restaurants - Only shows when restaurant sector is selected */}
      {selectedSector === 'restaurantes' && choiceMade && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="/menu-digital#cuanto-cuesta-tener-un-menu-digital-que-aparezca-en-google"
            className="group block"
          >
            <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 rounded-2xl shadow-2xl p-6 pr-8 border-2 border-orange-400/30 hover:border-orange-300 transition-all duration-300 hover:shadow-orange-500/50 hover:-translate-y-2 overflow-hidden max-w-xs">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Pulse animation */}
              <div className="absolute -inset-1 bg-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      Ver Planes de Restaurantes
                    </h3>
                    <p className="text-sm text-orange-100 mb-3 leading-snug">
                      Descubre todos nuestros planes y precios
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                      <span>Explorar ahora</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </>
  )
}
