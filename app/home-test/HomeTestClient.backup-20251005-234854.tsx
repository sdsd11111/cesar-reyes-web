'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StrategyTabs from "@/components/StrategyTabs";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Check, Stethoscope, ShoppingCart, BookOpen, Briefcase, AreaChart, TrendingUp, Users, MapPin } from "lucide-react";
import StrategyTabContent from "@/components/StrategyTabContent";

// Importación de contenido y componentes
import { pageContent } from "../../lib/content";
import BusinessSuccessQuiz from "@/components/BusinessSuccessQuiz"
import BusinessSuccessQuizEmocional from "@/components/BusinessSuccessQuiz_emocional";
import { FaqSection } from "@/components/FaqSection";
import { LogoSlider } from "@/components/logo-slider";
import TestimonialSlider from "@/components/testimonial-slider";
import ChatModal from "@/components/ChatModal";
import VideoModal from "@/components/VideoModal";
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
import LearnMoreButton from "@/components/LearnMoreButton";

const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), { ssr: false });

const iconMap: { [key: string]: React.ElementType } = {
  Stethoscope,
  ShoppingCart,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users
};

export default function HomeTestClient({ content, isEmotionalView }: { content: typeof pageContent.logico, isEmotionalView: boolean }) {
  const [choiceMade, setChoiceMade] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const router = useRouter();
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userChoice')) {
      setChoiceMade(true);
    }
  }, []);

  const handleChoice = (choice: 'logico' | 'emocional') => {
    localStorage.setItem('userChoice', choice);
    setChoiceMade(true);
    if (choice === 'emocional') {
      router.push('/home-test?view=emocional');
    } else {
      router.push('/home-test');
    }
  };

  const primaryActionClasses = isEmotionalView
    ? "bg-orange-600 hover:bg-orange-700 text-white"
    : "bg-blue-600 hover:bg-blue-700 text-white";
  
  const activeTabClasses = isEmotionalView
    ? "data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
    : "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0"><Image src="/images/portada_cesarbn.webp" alt="César Reyes fondo" fill priority quality={100} sizes="100vw" className="object-cover object-center"/></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full">
            {/* Versión Desktop */}
            <div className="hidden md:block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4" style={{ fontFamily: 'var(--font-poiret-one)' }}>Consultor para Microempresas en Ecuador</h1>
              <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-6 drop-shadow-md" style={{ fontFamily: 'var(--font-montserrat)' }}>Crece Más del 4% Anual con Datos Reales y Estrategias Probadas</h2>
              <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                Especializado en estudios de mercado para microempresas, diseño web para profesionales y artesanos, y posicionamiento web en Ecuador. Soy César Reyes Jaramillo, tu asesor local para resultados medibles en Loja y todo el Ecuador.
              </p>
              <Button size="lg" className="bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-8 py-6 text-lg">
                Agenda una Llamada Ahora
              </Button>
            </div>
            
            {/* Versión Móvil */}
            <div className="md:hidden px-4">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg mb-2">Consultor para Microempresas en Ecuador</h1>
              <h2 className="text-lg font-medium text-white/90 mb-4 drop-shadow-md">Crece Más del 4% Anual con Datos Reales</h2>
              <p className="text-white/90 text-sm mb-6">
                Estudios de mercado, diseño web y SEO local. César Reyes Jaramillo – Tu experto en Ecuador.
              </p>
              <Button size="lg" className="w-full bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-6 py-4 text-base">
                Agenda Ahora
              </Button>
            </div>
        </div>
      </section>

      {/* Cita */}
      <div className="w-full py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed text-center">
            "Cada venta que no cierras la hace otro. El 50% de las ventas se las lleva quien responde primero a la consulta del cliente."
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
          <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mt-2 max-w-5xl mx-auto">{pageContent.shared.choiceSection.h3}</h3>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Opción Lógica */}
            <div 
              onClick={() => handleChoice('logico')}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-96"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/alcanzar-1-2-mensual.webp"
                  alt="Enfoque Lógico"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-blue-700">
                    ENFOQUE LÓGICO
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">Alcanzar un 1-2% Mensual</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Opción Emocional */}
            <div 
              onClick={() => handleChoice('emocional')}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl bg-white flex flex-col h-96"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/Conseguir 3 a 5 clientes nuevos.webp"
                  alt="Enfoque Emocional"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-orange-700">
                    ENFOQUE EMOCIONAL
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">Conseguir 3-5 Clientes Nuevos Mensuales</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">{content.quiz.h2}</h2>
              <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">{content.quiz.p}</p>
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

          {/* Proceso con Pasos Claros */}
          <section className="w-full bg-[#121212] py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                {isEmotionalView ? (
                  <>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">No sigas a otros, crea tu propio camino con dirección</h2>
                    <p className="text-lg text-gray-300 mt-4">Cada negocio tiene su historia. Lo importante no es copiar, sino construir paso a paso con personas que te ayuden a tomar buenas decisiones y te acompañen a hacer crecer tu sueño.</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">No imites, sigue un plan con fundamentos</h2>
                    <p className="text-lg text-gray-300 mt-4">Las decisiones importantes no se toman por intuición, sino con datos reales, análisis y el apoyo de profesionales que saben cómo llevar tu negocio al siguiente nivel.</p>
                  </>
                )}
              </div>
              
              <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Navegación de pestañas */}
                  <div className="flex md:flex-col gap-3 overflow-x-auto pb-2 md:pb-0 md:w-1/4">
                    {[1, 2, 3].map((step) => (
                      <button
                        key={step}
                        onClick={() => setActiveStep(step)}
                        className={`flex items-center px-6 py-5 rounded-xl transition-all duration-300 whitespace-nowrap min-h-[80px] ${
                          activeStep === step
                            ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-bold bg-blue-500 text-white">
                          {step}
                        </span>
                        <span className="font-medium">
                          {isEmotionalView 
                            ? step === 1 ? 'Conociendo tu Sueño' 
                              : step === 2 ? 'Tu Sitio Web' 
                              : 'Sé el Mejor'
                            : step === 1 ? 'Análisis Estratégico' 
                              : step === 2 ? 'Desarrollo Web' 
                              : 'Posicionamiento'}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Contenido de las pestañas */}
                  <div className="md:w-3/4">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 transition-all duration-300 hover:border-blue-500/30">
                      {activeStep === 1 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
                            <Image 
                              alt={isEmotionalView ? "Conociendo tu negocio" : "Análisis estratégico"} 
                              src="/images/estudio_de_mercado.webp" 
                              width={500}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {isEmotionalView ? '1. Conociendo tu Sueño' : '1. Análisis Estratégico Inicial'}
                            </h3>
                            <ul className="space-y-3">
                              {isEmotionalView ? [
                                'Vamos a descubrir juntos qué hace único a tu negocio',
                                'Analizaremos cómo destacar entre la competencia',
                                'Identificaremos las palabras que tus clientes usan para encontrarte',
                                'Veremos cómo mejorar lo que ya haces bien'
                              ] : [
                                'Estudio detallado de la competencia local',
                                'Análisis de mercado y tendencias del sector',
                                'Investigación de palabras clave relevantes',
                                'Evaluación de oportunidades de mejora'
                              ].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6">
                              <Link href="/servicios/posicionamiento" className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500/10 hover:text-blue-300 transition-colors">
                                Conocer más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStep === 2 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
                            <Image 
                              alt={isEmotionalView ? "Estrategia digital personalizada" : "Plan estratégico digital"} 
                              src="/images/Diseño Web.webp" 
                              width={500}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {isEmotionalView ? '2. Tu Sitio Web' : '2. Desarrollo Web'}
                            </h3>
                            <ul className="space-y-3">
                              {isEmotionalView ? [
                                'Con lo aprendido en el estudio, crearemos un plan hecho a tu medida',
                                'Diseñaremos cada página pensando en lo que tus clientes necesitan encontrar',
                                'Los textos que escribiremos te ayudarán a aparecer cuando te busquen en Google',
                                'Cada palabra estará pensada para conectar con tus clientes ideales'
                              ] : [
                                'Desarrollo de plan estratégico basado en el análisis inicial',
                                'Creación de páginas optimizadas con palabras clave identificadas',
                                'Redacción de contenido SEO que responde a las búsquedas de tus clientes',
                                'Estructura de sitio diseñada para conversiones y experiencia de usuario'
                              ].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6">
                              <Link href="/servicios/posicionamiento" className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500/10 hover:text-blue-300 transition-colors">
                                Conocer más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStep === 3 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border-2 border-gray-700 hover:border-blue-500/50 transition-colors">
                            <Image 
                              alt={isEmotionalView ? "Posicionamiento de marca" : "Estrategia de posicionamiento"} 
                              src="/images/posicionamiento_slide_seo_objetivo.webp" 
                              width={500}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {isEmotionalView ? '3. Sé el Mejor en lo que Haces' : '3. Posicionamiento de Marca'}
                            </h3>
                            <ul className="space-y-3">
                              {isEmotionalView ? [
                                'Vamos a hacer que tu negocio sea el primero en que piensen tus clientes',
                                'Aprenderás a contar tu historia de manera que conecte con las personas',
                                'Tendrás una comunidad que confía y recomienda tu trabajo',
                                'Verás crecer tu negocio de manera sostenible y duradera'
                              ] : [
                                'Estrategia de marketing digital personalizada',
                                'Gestión de redes sociales y contenido de valor',
                                'Generación de autoridad en el sector',
                                'Monitoreo de resultados y ajustes continuos'
                              ].map((item, index) => (
                                <li key={index} className="flex items-start group">
                                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3 mt-0.5 group-hover:bg-blue-500/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                  <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6">
                              <Link href="/servicios/posicionamiento" className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500/10 hover:text-blue-300 transition-colors">
                                Conocer más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Navegación inferior */}
                    <div className="flex justify-between mt-6">
                      <button
                        onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                        disabled={activeStep === 1}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                          activeStep === 1 
                            ? 'text-gray-500 cursor-not-allowed' 
                            : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="m15 18-6-6 6-6"/>
                        </svg>
                        Anterior
                      </button>
                      
                      <div className="flex space-x-2">
                        {[1, 2, 3].map((step) => (
                          <button
                            key={step}
                            onClick={() => setActiveStep(step)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              activeStep === step ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            aria-label={`Ir al paso ${step}`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
                        disabled={activeStep === 3}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                          activeStep === 3 
                            ? 'text-gray-500 cursor-not-allowed' 
                            : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                        }`}
                      >
                        Siguiente
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center mt-16">
                <p className="text-xl italic text-gray-300">Imagina tu empresa creciendo según las proyecciones, combinando datos reales y proyecciones para monitorear el cumplimiento de metas</p>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 mt-8 font-bold bg-blue-600 hover:bg-blue-700 text-white">
                  Agenda una llamada - Haz clic aquí
                </button>
              </div>
            </div>
          </section>

          {/* No es Para Todos */}
          <section className="w-full py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Mi Consultoría No es Para Todos</h2>
                <p className="text-lg text-gray-600 mt-4">Si buscas soluciones rápidas o atajos, no es para ti. Pero si estás comprometido con el crecimiento sostenible de tu microempresa en Ecuador y dispuesto a invertir en una estrategia real con 25 años de experiencia como Ingeniero Comercial, has llegado al lugar correcto – soy César Reyes Jaramillo.</p>
              </div>
              <div className="w-full max-w-4xl mx-auto">
                <StrategyTabs isEmotionalView={isEmotionalView} />
              </div>
              <div className="text-center mt-16">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 font-bold bg-blue-600 hover:bg-blue-700 text-white">
                  Agenda una Llamada Estratégica Gratuita
                </button>
              </div>
            </div>
          </section>

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

          {/* Sección de Testimonios */}
          <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lo que Dicen Nuestros Clientes en Ecuador</h2>
                <p className="text-lg text-gray-600">Empresas y profesionales que confiaron en mi consultoría con 25 años de experiencia y midieron resultados reales en sus microempresas.</p>
              </div>
              <TestimonialSlider />
            </div>
          </section>

          {/* Video de YouTube */}
          <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mira Nuestro Video</h2>
                <p className="text-lg text-gray-600">Conoce mi enfoque con 25 años de experiencia como Ingeniero Comercial y cómo mi consultoría hace crecer tu microempresa en Ecuador.</p>
              </div>
              <div className="max-w-4xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BH0_NOjvwRo?si=Ky0dqfZtp1zbVMSP"
                  title="Video de presentación"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          {/* Preguntas Frecuentes */}
          <FaqSection h2={content.faq.h2} questions={content.faq.questions} />

          {/* Datos que no puedes ignorar sobre tu mercado */}
          <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Datos que No Puedes Ignorar Sobre Tu Mercado en Ecuador</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  {content.closing.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                {content.closing.cards.map((card, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      card.icon === 'AlertTriangle' ? 'bg-red-50 text-red-500' : 
                      card.icon === 'ShoppingCart' ? 'bg-blue-50 text-blue-500' : 
                      'bg-amber-50 text-amber-500'
                    }`}>
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
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-bold bg-blue-600 hover:bg-blue-700">
                  {content.closing.main_cta}
                </Button>
                <Button size="lg" variant="outline" className="font-bold">
                  {content.closing.secondary_cta}
                </Button>
              </div>
            </div>
          </section>

          {/* Modales */}
          <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
          <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl="https://iframe.mediadelivery.net/embed/455329/9d4dc6d4-034c-4bf8-8477-138ffc896ab2?autoplay=true&loop=true&muted=true&preload=true&responsive=true" />
          <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} />
        </>
      )}
    </>
  )
}
