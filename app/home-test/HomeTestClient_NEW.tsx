'use client'

// Importaciones de Next.js
import Image from "next/image"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Importaciones de React
import { useState, useEffect } from "react"

// Importaciones de librerías externas
import { motion } from "framer-motion";
import { Check, Stethoscope, ShoppingCart, BookOpen, Briefcase, AreaChart, TrendingUp, Users, MapPin, ChevronDown, ChevronUp } from "lucide-react";

// Importaciones de componentes locales
import StrategyTabs from "@/components/StrategyTabs";
import StrategyTabContent from "@/components/StrategyTabContent";
import BusinessSuccessQuiz from "@/components/BusinessSuccessQuiz";
import BusinessSuccessQuizEmocional from "@/components/BusinessSuccessQuiz_emocional";
import FaqSection from "@/components/FaqSection";
import { LogoSlider } from "@/components/logo-slider";
import TestimonialSlider from "@/components/testimonial-slider";
import LearnMoreButton from "@/components/LearnMoreButton";

// Importación de componentes modales con carga dinámica
const ChatModal = dynamic(() => import('@/components/ChatModal'), { ssr: false });
const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), { ssr: false });
const VideoModal = dynamic(() => import('@/components/VideoModal'), { ssr: false });

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
  const router = useRouter();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showFullQuote, setShowFullQuote] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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
        <div className="absolute inset-0 transition-opacity duration-1000">
          {/* Use next/image for optimized LCP */}
          <div className={`absolute inset-0 ${isVideoLoaded ? 'hidden' : 'block'}`}>
            <Image
              src="/images/portada_cesarbn.webp"
              alt="Fondo de portada"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {isClient && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              poster="/images/portada_cesarbn.webp"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/images/Videos/Promo Artes Vivas 2025 Objetivo.mp4" type="video/mp4" />
            </video>
          )}
        </div>
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
              className="bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una Llamada Ahora
              </a>
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
              className="w-full bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-6 py-4 text-base"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una Llamada Ahora
              </a>
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
      <div className="relative w-full py-12 bg-white">
        <div className="relative z-10 container mx-auto px-4">
          <LogoSlider />
        </div>
      </div>

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
                    alt={pageContent.shared.choiceSection.hoteles.title}
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
                    <div
                      className="text-sm text-gray-200 line-clamp-4 prose prose-invert max-w-none [&>strong]:text-white [&>strong]:font-bold"
                      dangerouslySetInnerHTML={{ __html: pageContent.shared.choiceSection.hoteles.description }}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                asChild
              >
                <a
                  href={pageContent.shared.choiceSection.hoteles.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pageContent.shared.choiceSection.hoteles.cta.text}
                </a>
              </Button>
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
                    alt={pageContent.shared.choiceSection.restaurantes.title}
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
                    <div
                      className="text-sm text-gray-200 line-clamp-4 prose prose-invert max-w-none [&>strong]:text-white [&>strong]:font-bold"
                      dangerouslySetInnerHTML={{ __html: pageContent.shared.choiceSection.restaurantes.description }}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                asChild
              >
                <a
                  href={pageContent.shared.choiceSection.restaurantes.cta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pageContent.shared.choiceSection.restaurantes.cta.text}
                </a>
              </Button>
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

          {/* Sección de Autoridad: IA y ChatGPT */}
          <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Postura (H2) */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
                  El Nuevo Desafío de Viajes: Tu Hotel Debe Ser Recomendado por ChatGPT (No Solo por Booking)
                </h2>

                {/* Evidencia (Párrafo con estadísticas) */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 border border-gray-200">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    La IA generativa (como ChatGPT) está redefiniendo la planificación de viajes. Aproximadamente el <strong className="text-blue-600">40-42% de los viajeros</strong> ya la usan para planificar o reservar, y pasan un <strong className="text-blue-600">36% más de tiempo</strong> navegando en la página del hotel después de ser filtrados por una IA. La brecha de reserva se está cerrando, lo que indica una creciente confianza en las recomendaciones de estos asistentes.
                  </p>

                  {/* Explicación y Consecuencia */}
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                      <strong className="text-amber-800">La IA solo puede recomendarte si tu Motor de Reservas tiene la estructura de datos que necesita.</strong> Si no estás configurado para ser 'leído' por estos algoritmos, literalmente no existes para el viajero moderno.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href="/hotel-objetivo"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                    >
                      Conoce cómo optimizar tu estructura de datos y posicionamiento IA aquí
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Nota al pie con referencia */}
                <p className="text-sm text-gray-500 text-center italic">
                  <sup>1</sup> Datos basados en estudios de comportamiento del viajero y adopción de IA generativa en la industria turística.
                </p>
              </div>
            </div>
          </section>

          {/* Video section removed per user request */}

          {/* Preguntas Frecuentes */}
          <FaqSection h2={currentContent.faq.h2} questions={currentContent.faq.questions} />

          {/* Datos que no puedes ignorar sobre tu mercado */}
          <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Datos que No Puedes Ignorar Sobre Tu Mercado en Ecuador</h2>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
                  {'description' in content.closing ? content.closing.description : ('p' in content.closing ? content.closing.p : '')}
                </p>
              </div>

              {/* Versión de escritorio - Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                {'cards' in content.closing ? (
                  content.closing.cards.map((card, index) => (
                    <CardItem key={`desktop-${index}`} card={card} />
                  ))
                ) : null}
              </div>

              {/* Versión móvil - Carrusel */}
              <div className="md:hidden mb-12 px-2">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {'cards' in content.closing ? (
                      content.closing.cards.map((card, index) => (
                        <CarouselItem key={`mobile-${index}`} className="md:basis-1/2 lg:basis-1/3 px-2">
                          <CardItem card={card} />
                        </CarouselItem>
                      ))
                    ) : null}
                  </CarouselContent>
                  <div className="flex justify-center mt-4 space-x-2">
                    <CarouselPrevious className="relative left-0 top-0 -translate-y-0" />
                    <CarouselNext className="relative right-0 top-0 -translate-y-0" />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 font-bold bg-blue-600 hover:bg-blue-700 text-white whitespace-normal h-auto min-h-[44px] py-2 px-4"
                >
                  <span className="text-sm sm:text-base">
                    <span className="sm:hidden">Agenda tu consulta</span>
                    <span className="hidden sm:inline">Agenda tu consulta gratuita – Solo 5 cupos este mes</span>
                  </span>
                </a>
                <a
                  href="#testimonios"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 font-bold border border-black bg-white hover:bg-gray-100 text-black whitespace-normal h-auto min-h-[44px] py-2 px-4"
                >
                  <span className="text-sm sm:text-base">
                    <span className="sm:hidden">Ver casos de éxito</span>
                    <span className="hidden sm:inline">Ver nuestros casos de éxito</span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Modales */}
          <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
          <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} />
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoUrl="https://www.youtube.com/shorts/0KzBIMvyccA"
          />
        </>
      )}
    </>
  )
}

