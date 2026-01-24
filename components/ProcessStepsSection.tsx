'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProcessStepsSectionProps {
    isEmotionalView: boolean;
}

export default function ProcessStepsSection({ isEmotionalView }: ProcessStepsSectionProps) {
    const [activeStep, setActiveStep] = useState(1);

    return (
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
                                    className={`flex items-center px-6 py-5 rounded-xl transition-all duration-300 whitespace-nowrap min-h-[80px] ${activeStep === step
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
                                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeStep === 1
                                        ? 'text-gray-500 cursor-not-allowed'
                                        : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                    Anterior
                                </button>

                                <div className="flex space-x-2">
                                    {[1, 2, 3].map((step) => (
                                        <button
                                            key={step}
                                            onClick={() => setActiveStep(step)}
                                            className={`w-3 h-3 rounded-full transition-colors ${activeStep === step ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                                                }`}
                                            aria-label={`Ir al paso ${step}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
                                    disabled={activeStep === 3}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeStep === 3
                                        ? 'text-gray-500 cursor-not-allowed'
                                        : 'text-blue-400 hover:text-white hover:bg-blue-500/20'
                                        }`}
                                >
                                    Siguiente
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center mt-16">
                    <p className="text-xl italic text-gray-300">Imagina tu empresa creciendo según las proyecciones, combinando datos reales y proyecciones para monitorear el cumplimiento de metas</p>
                    <Button
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-4 sm:px-8 mt-8 font-bold bg-blue-600 hover:bg-blue-700 text-white text-center"
                        asChild
                    >
                        <a
                            href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agenda una llamada - Haz clic aquí
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
