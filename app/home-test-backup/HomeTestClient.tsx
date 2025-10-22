'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Check, Stethoscope, ShoppingCart, BookOpen, Briefcase, AreaChart, TrendingUp, Users } from "lucide-react";

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
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const PortfolioModal = dynamic(() => import('@/components/PortfolioModal'), { ssr: false });

const iconMap: { [key: string]: React.ElementType } = {
  Stethoscope,
  ShoppingCart,
  BookOpen,
  Briefcase,
  AreaChart,
  TrendingUp,
  Users
};

export default function HomeTestClient({ content, isEmotionalView }: { content: typeof pageContent.logico | typeof pageContent.emocional, isEmotionalView: boolean }) {

  const router = useRouter();
  const [choiceMade, setChoiceMade] = useState(false);

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
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-poiret-one)', fontWeight: 900 }}>{pageContent.shared.hero.h1}</h1>
            <h2 className="hidden md:block text-base md:text-xl font-semibold text-gray-200 mt-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>Investigación de Mercado, Diseño Web y Posicionamiento</h2>
            <Button size="lg" className="mt-10 bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105">{pageContent.shared.hero.cta}</Button>
        </div>
      </section>

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
              className="p-8 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.25)] hover:border-blue-300 bg-gray-50/50 flex flex-col items-center justify-center text-center"
            >
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">{pageContent.shared.choiceSection.logico.title}</h3>
            </div>

            {/* Opción Emocional */}
            <div 
              onClick={() => handleChoice('emocional')}
              className="p-8 rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(234,88,12,0.25)] hover:border-orange-300 bg-gray-50/50 flex flex-col items-center justify-center text-center"
            >
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">{pageContent.shared.choiceSection.emocional.title}</h3>
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

          {/* Cita Destacada */}
          <section className="w-full bg-gray-100 dark:bg-black py-16 md:py-20">
            <div className="container mx-auto px-4 text-center">
              <blockquote className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed">
                  "Cada venta que no cierras la hace otro. El 50% de las ventas se las lleva quien responde primero a la consulta del cliente."
                </p>
                <footer className="mt-6">
                  <p className="text-lg text-gray-600 dark:text-gray-400">- InsideSales.com</p>
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Logo Slider */}
          <section className="relative w-full py-16 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-12"><LogoSlider /></div></div>
          </section>

          {/* Servicios */}
          <section className="w-full bg-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{content.services.h2}</h2>
                <p className="text-lg text-gray-600 mt-4">{content.services.p}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.services.cards.map((card, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.h3}</h3>
                    <p className="text-gray-700 mb-6 flex-grow">{card.description}</p>
                    <Button className={primaryActionClasses}>{card.cta}</Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Proceso Secuencial con Tabs */}
          <section className="w-full py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{content.processSection.h2}</h2>
                <p className="text-lg text-gray-600 mt-4">{content.processSection.intro}</p>
              </div>
              <Tabs defaultValue="step-0" className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10">
                  <TabsList className="flex flex-row md:flex-col md:h-auto md:w-1/4 overflow-x-auto md:overflow-x-visible bg-gray-200/50 rounded-lg">
                    {content.processSection.steps.map((step, index) => (
                      <TabsTrigger 
                        key={index} 
                        value={`step-${index}`} 
                        className={`w-full text-left justify-start p-4 rounded-md text-base ${activeTabClasses}`}>
                        Paso {index + 1}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <div className="md:w-3/4">
                    {content.processSection.steps.map((step, index) => (
                      <TabsContent key={index} value={`step-${index}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image src={step.image} alt={step.h3} layout="fill" objectFit="cover" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.h3}</h3>
                            <ul className="space-y-3">
                              {step.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start">
                                  <Check className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 ${isEmotionalView ? 'text-orange-500' : 'text-blue-500'}`} />
                                  <span className="text-gray-700">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>
              <div className="max-w-3xl mx-auto text-center mt-16">
                <p className="text-xl italic text-gray-700">{content.processSection.finalParagraph}</p>
                <Button size="lg" className={`mt-8 font-bold ${primaryActionClasses}`}>{content.processSection.cta}</Button>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="w-full py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{content.commitmentSection.h2}</h2>
                <p className="text-lg text-gray-600 mt-4">{content.commitmentSection.intro}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{content.commitmentSection.h3}</h3>
                  <ul className="space-y-4">
                    {content.commitmentSection.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`flex-shrink-0 w-5 h-5 mt-1 mr-3 ${isEmotionalView ? 'text-orange-500' : 'text-blue-500'}`} />
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full max-w-md mx-auto">
  	                <h4 className="text-lg font-semibold text-center mb-4 text-gray-800">{content.commitmentSection.carousel.title}</h4>
                  <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                      {content.commitmentSection.carousel.cards.map((card, index) => {
                        // Estrechamiento de tipo para uniones { text, icon } | { text, image }
                        const Icon = ('icon' in card && card.icon) ? (iconMap[card.icon] ?? null) : null;
                        const imgSrc = ('image' in card && card.image) ? card.image : null;
                        return (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6 gap-4 aspect-video">
                                  {isEmotionalView ? (
                                    imgSrc ? (
                                      <Image src={imgSrc} alt={card.text} width={150} height={80} className="rounded-lg object-cover"/>
                                    ) : null
                                  ) : (
                                    Icon ? (
                                      <Icon className={`w-12 h-12 ${isEmotionalView ? 'text-orange-500' : 'text-blue-500'}`} />
                                    ) : null
                                  )}
                                  <p className="text-center text-gray-700 font-medium">{card.text}</p>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        )
                      })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              <div className="text-center mt-16">
                <Button size="lg" className={`font-bold ${primaryActionClasses}`}>{content.commitmentSection.cta}</Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FaqSection h2={content.faq.h2} questions={content.faq.questions} />

          {/* Testimonios */}
          <section className="w-full bg-[#121212] py-24">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{content.testimonials.h2}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {content.testimonials.videos.map((video, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 italic">"{video.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cierre */}
          <section className="w-full bg-white py-20">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{content.closing.h2}</h2>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">{'p' in content.closing ? content.closing.p : ('description' in content.closing ? content.closing.description : '')}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className={`${primaryActionClasses} font-bold`}>{content.closing.main_cta}</Button>
                <Button size="lg" variant="outline">{content.closing.secondary_cta}</Button>
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
