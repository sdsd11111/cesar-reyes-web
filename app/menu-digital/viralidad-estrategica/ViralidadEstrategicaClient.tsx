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
import { Check, ArrowRight, ChevronRight, ChevronDown, CalendarDays } from 'lucide-react';

export default function ViralidadEstrategica() {
    const [activeTab, setActiveTab] = useState('google-maps');
    const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
    const [showMore, setShowMore] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showFullText, setShowFullText] = useState(false);

    // Ensure Google Maps tab is always shown by default on mount
    useEffect(() => {
        setActiveTab('google-maps');
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

                // Aseguramos que targetId es string
                const selector = targetId as string;

                try {
                    const targetElement = document.querySelector(selector);
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

    const toggleFaq = (id: number) => {
        setFaqOpen(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center opacity-40"
                        style={{
                            backgroundImage: "url('/images/viralidad/hero-bg.webp')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Aquí está la <span className="text-orange-400">Viralidad Estratégica</span> que leíste en el artículo
                        </h1>

                        {/* Subhead */}
                        <div className="text-2xl md:text-3xl font-medium text-white mb-8 max-w-4xl mx-auto leading-tight">
                            <p className="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
                                Un QR de <span className="font-bold text-orange-300">1 clic</span> para que tus clientes hagan el trabajo de marketing por ti.
                            </p>

                            {showFullText && (
                                <div className="animate-fade-in mt-6">
                                    <p className="text-xl md:text-2xl text-gray-200 font-light">
                                        <span className="inline-block mr-4">🚫 Sin apps</span>
                                        <span className="inline-block mx-4">⚡ Sin fricción</span>
                                        <span className="inline-block ml-4">💸 Sin fotógrafo carísimo</span>
                                    </p>
                                </div>
                            )}

                            <button
                                onClick={() => setShowFullText(!showFullText)}
                                className="text-orange-400 hover:text-orange-300 text-sm font-medium mt-2 focus:outline-none transition-colors"
                            >
                                {showFullText ? 'Mostrar menos' : 'Seguir leyendo'}
                            </button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center space-y-4">
                        <Button
                            asChild
                            className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg md:text-xl font-bold px-4 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
                            size="lg"
                        >
                            <a
                                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center w-full h-full min-h-[56px] px-4 py-3 sm:flex-row"
                            >
                                <span className="whitespace-nowrap text-center">Activar Viralidad</span>
                                <span className="text-sm sm:text-base sm:ml-2 whitespace-nowrap">por $60 USD</span>
                            </a>
                        </Button>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-200 text-sm mt-4">
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-green-400 mr-2" />
                                <span>Instalación en 72 horas</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-green-400 mr-2" />
                                <span>Pago único (no mensualidades)</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-5 h-5 text-green-400 mr-2" />
                                <span>QR personalizado incluido</span>
                            </div>
                        </div>

                        <div className="pt-2 w-full">
                            <Button
                                variant="link"
                                className="text-orange-300 hover:text-orange-200 font-medium text-center w-full px-0"
                                onClick={() => window.open('https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="flex flex-col items-center text-sm sm:text-base">
                                    <span className="whitespace-nowrap">¿Cómo funciona el flujo?</span>
                                    <span className="inline-flex items-center mt-0.5">
                                        Ver detalles <span className="ml-1">↓</span>
                                    </span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of the sections will be added here */}

            {/* Section 2: La Verdad Incómoda */}
            <section id="verdad-incomoda" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            La realidad que nadie te dice sobre las fotos de clientes
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            En el artículo viste que el ego del cliente puede trabajar para ti. Pero hay un problema que la mayoría ignora:
                        </p>
                    </div>

                    <div className="relative">
                        {/* Mobile Slider Container */}
                        <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex space-x-4 w-max">
                                {[
                                    {
                                        icon: '🤳',
                                        title: '87% vs 12%',
                                        description: 'El 87% de los comensales toman fotos de su comida → Pero solo el 12% las sube a Google Maps sin que se lo pidas.'
                                    },
                                    {
                                        icon: '📸',
                                        title: 'Google te ignora',
                                        description: 'Tú subes 1 foto al mes de tu postre estrella → Google ignora tu contenido. Prefiere 10 fotos mal tomadas por clientes reales.'
                                    },
                                    {
                                        icon: '💰',
                                        title: '$200 por sesión',
                                        description: 'Contratar un fotógrafo profesional: $200 por sesión → Y las fotos siguen siendo "tuyas", no de clientes verificados.'
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-none w-[calc(100vw-3rem)] sm:w-96 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow snap-center"
                                    >
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Grid */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '🤳',
                                    title: '87% vs 12%',
                                    description: 'El 87% de los comensales toman fotos de su comida → Pero solo el 12% las sube a Google Maps sin que se lo pidas.'
                                },
                                {
                                    icon: '📸',
                                    title: 'Google te ignora',
                                    description: 'Tú subes 1 foto al mes de tu postre estrella → Google ignora tu contenido. Prefiere 10 fotos mal tomadas por clientes reales.'
                                },
                                {
                                    icon: '💰',
                                    title: '$200 por sesión',
                                    description: 'Contratar un fotógrafo profesional: $200 por sesión → Y las fotos siguen siendo "tuyas", no de clientes verificados.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicator for mobile */}
                        <div className="md:hidden flex justify-center space-x-2 mt-4">
                            {[0, 1, 2].map((dot) => (
                                <span
                                    key={dot}
                                    className="w-2 h-2 rounded-full bg-gray-300"
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <p className="text-blue-800 text-lg">
                            <span className="font-semibold">La estrategia 3 del artículo te lo dejó claro:</span> El contenido generado por usuarios (UGC) vale oro en SEO local.
                            Pero si no facilitas el proceso, ese oro se queda en la galería del celular de tu cliente.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: El Sistema de 1 Clic */}
            <section id="como-funciona" className="pt-0 pb-20 bg-gray-50 -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            De la selfie a Google Maps en 8 segundos exactos
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                    FLUJO DEL CLIENTE
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Así de simple funciona</h3>
                                <p className="text-gray-600 max-w-2xl mx-auto">Tus clientes suben fotos con un solo clic, sin necesidad de instalar nada</p>
                            </div>

                            <div className="relative">
                                {/* Timeline */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-400 to-orange-600 hidden md:block"></div>

                                {/* Steps */}
                                <div className="space-y-16 md:space-y-24">
                                    {[
                                        {
                                            title: '1. Cliente feliz termina de comer',
                                            description: 'Disfruta de tu comida y quiere compartir su experiencia',
                                            icon: '🍽️',
                                            position: 'left'
                                        },
                                        {
                                            title: '2. Toma foto del plato o selfie',
                                            description: 'Captura el momento perfecto de su experiencia',
                                            icon: '📸',
                                            position: 'right'
                                        },
                                        {
                                            title: '3. Escanea el QR en la mesa',
                                            description: 'Un simple escaneo con su cámara',
                                            icon: '🔍',
                                            position: 'left'
                                        },
                                        {
                                            title: '4. Elige dónde compartir',
                                            description: 'Google Maps o tu Galería Web',
                                            icon: '📱',
                                            position: 'right',
                                            highlight: true
                                        },
                                        {
                                            title: '5. ¡Listo!',
                                            description: 'La foto se publica en segundos',
                                            icon: '✅',
                                            position: 'left'
                                        }
                                    ].map((step, index) => (
                                        <div key={index} className={`relative flex ${step.position === 'right' ? 'md:flex-row-reverse' : ''} items-center`}>
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.highlight ? 'bg-orange-100' : 'bg-gray-100'} flex items-center justify-center text-2xl z-10`}>
                                                {step.icon}
                                            </div>
                                            <div className={`flex-1 ${step.position === 'right' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                                                <h4 className={`text-xl font-bold text-gray-900 ${step.highlight ? 'text-orange-600' : ''}`}>{step.title}</h4>
                                                <p className="text-gray-600 mt-1">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-16 bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                                <h4 className="font-semibold text-orange-800 text-lg mb-3">Resultado para ti:</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>+1 foto real en Google (algoritmo feliz)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>+1 prueba social visible</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>+0 esfuerzo de tu parte</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Los 2 Destinos del QR */}
            <section className="pt-0 pb-20 bg-white -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Los 2 destinos del QR
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Tu cliente escanea un solo QR, pero tú obtienes el doble de beneficios
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('google-maps')}
                            className={`px-8 py-4 font-medium text-lg flex items-center transition-all ${activeTab === 'google-maps'
                                    ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <span className="mr-2 text-xl">🗺️</span>
                            Google Maps (Recomendado)
                        </button>
                        <button
                            onClick={() => setActiveTab('galeria-web')}
                            className={`px-8 py-4 font-medium text-lg flex items-center transition-all ${activeTab === 'galeria-web'
                                    ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <span className="mr-2 text-xl">🖼️</span>
                            Galería Web
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        {/* Google Maps Tab */}
                        {activeTab === 'google-maps' && (
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        ¿Por qué Google Maps es tu mejor aliado?
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Cuando tu cliente elige "Subir a Google Maps":
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            '✅ El sistema lo redirige DIRECTO a tu perfil de Google Business',
                                            '✅ La foto se asocia automáticamente a tu negocio',
                                            '✅ Tu ranking local mejora significativamente'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-3">•</span>
                                                <span className="text-gray-800">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <p className="text-blue-800">
                                            <span className="font-semibold">El dato que cambia todo:</span> Negocios con +50 fotos de clientes en Google tienen un 35% más de clics en el botón "Cómo llegar" vs. negocios con solo fotos del dueño.
                                        </p>
                                        <p className="text-blue-600 text-sm mt-2">Fuente: BrightLocal, 2024</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                                    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
                                        <img
                                            src="/images/viralidad/google-maps-preview.webp"
                                            alt="Vista previa de Google Maps con fotos de clientes"
                                            className="w-full h-auto rounded-lg"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/images/placeholder-qr-destination-1.webp';
                                            }}
                                        />
                                        <p className="text-center text-sm text-gray-500 mt-2">Así se verá tu perfil con las fotos de clientes</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Galería Web Tab */}
                        {activeTab === 'galeria-web' && (
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        ¿Qué pasa si el cliente elige tu Galería Web?
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Cuando tu cliente elige "Subir a la Galería":
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            '✅ La foto se publica en una sección dedicada de tu sitio web',
                                            '✅ Prueba social que convierte visitantes en clientes',
                                            '✅ Contenido que se renueva automáticamente'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-3">•</span>
                                                <span className="text-gray-800">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                        <p className="text-green-800">
                                            <span className="font-semibold">El efecto psicológico:</span> Ver a "gente como yo" disfrutando en tu restaurante reduce la incertidumbre de reservar en un 41%.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                                    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
                                        <img
                                            src="/images/viralidad/galeria-web-preview.webp"
                                            alt="Vista previa de la Galería Web con fotos de clientes"
                                            className="w-full h-auto rounded-lg"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/images/placeholder-qr-destination-2.webp';
                                            }}
                                        />
                                        <p className="text-center text-sm text-gray-500 mt-2">Así se verá tu galería web con las fotos</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Sección: La Comparación Brutal */}
            <section className="pt-0 pb-20 bg-gray-50 -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            ¿Puedes hacerlo tú mismo? <span className="text-orange-500">Sí.</span> ¿Deberías? <span className="text-orange-500">Probablemente no.</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <span className="font-medium">Seamos honestos:</span> Crear un QR básico es gratis. Lo hace cualquiera en 2 minutos. <br className="hidden md:block" />
                            Pero un QR que convierta vanidad en SEO estratégico es otra cosa.
                        </p>
                    </div>

                    {/* Versión móvil - Tabs */}
                    <div className="md:hidden mb-12">
                        <div className="flex mb-6 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('basic')}
                                className={`flex-1 py-3 px-4 text-center font-medium text-sm ${activeTab === 'basic'
                                        ? 'border-b-2 border-orange-500 text-orange-600 font-semibold'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                TÚ MISMO (QR Gratis)
                            </button>
                            <button
                                onClick={() => setActiveTab('premium')}
                                className={`flex-1 py-3 px-4 text-center font-medium text-sm ${activeTab === 'premium'
                                        ? 'border-b-2 border-orange-500 text-orange-600 font-semibold'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                VIRALIDAD OBJETIVO ($60)
                            </button>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-6">
                                {activeTab === 'basic' ? (
                                    <ul className="space-y-4">
                                        {[
                                            '❌ QR genérico sin marca',
                                            '❌ Redirige a link genérico',
                                            '❌ No sabes si funciona (cero analítica)',
                                            '❌ Cliente confundido: "¿Y ahora qué hago?"',
                                            '❌ Las fotos se pierden en carpetas aleatorias',
                                            '❌ Cero soporte si falla',
                                            '💰 Costo: $0',
                                            'Resultado: Esfuerzo perdido'
                                        ].map((item, index) => (
                                            <li key={index} className={`flex items-start pb-3 text-black ${index === 7 ? 'pt-3 border-t border-gray-100 font-semibold' : ''}`}>
                                                <span className="mr-2">{item.split(' ')[0]}</span>
                                                <span className="text-black">{item.split(' ').slice(1).join(' ')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="space-y-4">
                                        {[
                                            '✅ QR con tu logo y colores',
                                            '✅ Flujo estratégico: Google Maps O Galería Web',
                                            '✅ Panel de métricas básicas (cuántos escaneos/mes)',
                                            '✅ Cliente guiado con CTA claro: "Subir aquí"',
                                            '✅ Integración directa a tu Google Business + Web',
                                            '✅ Soporte por WhatsApp incluido (1 año)',
                                            '💰 Costo: $60 (pago único)',
                                            'Resultado: Flujo optimizado'
                                        ].map((item, index) => (
                                            <li key={index} className={`flex items-start pb-3 text-black ${index === 7 ? 'pt-3 border-t border-gray-100 font-semibold' : ''}`}>
                                                <span className="mr-2">{item.split(' ')[0]}</span>
                                                <span className="text-black">{item.split(' ').slice(1).join(' ')}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Versión escritorio - Tabla */}
                    <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-12">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="w-1/2 px-6 py-5 bg-gray-50 text-left text-lg font-semibold text-gray-700">
                                            TÚ MISMO (QR Gratis)
                                        </th>
                                        <th className="w-1/2 px-6 py-5 bg-orange-50 text-left text-lg font-semibold text-orange-700">
                                            VIRALIDAD OBJETIVO ($60)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-black">
                                    {[
                                        {
                                            basic: '❌ QR genérico sin marca',
                                            premium: '✅ QR con tu logo y colores'
                                        },
                                        {
                                            basic: '❌ Redirige a link genérico',
                                            premium: '✅ Flujo estratégico: Google Maps O Galería Web'
                                        },
                                        {
                                            basic: '❌ No sabes si funciona (cero analítica)',
                                            premium: '✅ Panel de métricas básicas (cuántos escaneos/mes)'
                                        },
                                        {
                                            basic: '❌ Cliente confundido: "¿Y ahora qué hago?"',
                                            premium: '✅ Cliente guiado con CTA claro: "Subir aquí"'
                                        },
                                        {
                                            basic: '❌ Las fotos se pierden en carpetas aleatorias',
                                            premium: '✅ Integración directa a tu Google Business + Web'
                                        },
                                        {
                                            basic: '❌ Cero soporte si falla',
                                            premium: '✅ Soporte por WhatsApp incluido (1 año)'
                                        },
                                        {
                                            basic: '💰 Costo: $0',
                                            premium: '💰 Costo: $60 (pago único)'
                                        },
                                        {
                                            basic: 'Resultado: Esfuerzo perdido',
                                            premium: 'Resultado: Flujo optimizado',
                                            highlight: true
                                        }
                                    ].map((row, index) => (
                                        <tr key={index} className={row.highlight ? 'bg-gray-50 font-semibold' : 'hover:bg-gray-50'}>
                                            <td className="px-6 py-4 whitespace-normal">
                                                <div className="flex items-center">
                                                    <span className="mr-2">{row.basic.split(' ')[0]}</span>
                                                    <span>{row.basic.split(' ').slice(1).join(' ')}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-normal">
                                                <div className="flex items-center">
                                                    <span className="mr-2">{row.premium.split(' ')[0]}</span>
                                                    <span>{row.premium.split(' ').slice(1).join(' ')}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-800 mb-8">
                            La pregunta no es <span className="font-semibold">"¿puedo hacerlo yo?"</span>
                            <br />
                            La pregunta es: <span className="font-semibold">"¿Cuánto vale tu tiempo vs. $60 que ya incluyen la estrategia probada?"</span>
                        </p>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base font-bold rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
                            size="lg"
                        >
                            <Link href="#contacto" className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto px-4 py-3 text-center">
                                <span className="whitespace-nowrap">Quiero la solución probada</span>
                                <span className="text-sm sm:text-base sm:ml-1">por $60 USD</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sección: Instalación (Ultra Simple) */}
            <section id="instalacion" className="pt-0 pb-20 bg-white -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            ¿Qué necesitas para que funcione?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-12">
                        <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                            {/* Columna 1: Lo que tú necesitas */}
                            <div className="p-6 md:p-8">
                                <div className="bg-orange-500 text-white text-lg font-bold py-2 px-4 rounded-full inline-flex items-center mb-6">
                                    <span className="text-sm sm:text-base text-center">LO QUE TÚ NECESITAS</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        '✅ Perfil de Google Business activo (gratis)',
                                        '✅ Logo de tu marca (envías por WhatsApp)',
                                        '✅ Colores corporativos (o los elegimos por ti)',
                                        '✅ 15 minutos de tu tiempo total',
                                        '✅ Imprimir el QR que te enviamos (o lo mandamos a imprenta)'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 text-green-500">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Columna 2: Lo que nosotros hacemos */}
                            <div className="p-6 md:p-8 bg-gray-50">
                                <div className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-full inline-flex items-center mb-6">
                                    <span className="text-sm sm:text-base text-center">LO QUE NOSOTROS HACEMOS</span>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        '✅ Configuramos el flujo de redirección',
                                        '✅ Diseñamos el QR personalizado',
                                        '✅ Adaptamos el diseño a tu identidad visual',
                                        '✅ Probamos el flujo completo antes de entregarte',
                                        '✅ Te enviamos el archivo en alta resolución (listo para imprimir)'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 text-green-500">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Acordeón opcional */}
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg cursor-pointer"
                            onClick={() => setFaqOpen(prev => ({ ...prev, 4: !prev[4] }))}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-orange-800">
                                    ❓ ¿Y si no tengo sitio web?
                                </h3>
                                <ChevronRight
                                    className={`w-5 h-5 text-orange-600 transition-transform ${faqOpen[4] ? 'transform rotate-90' : ''}`}
                                />
                            </div>

                            {faqOpen[4] && (
                                <div className="mt-3 text-orange-700">
                                    <p className="mb-3">No hay problema.</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-medium">Opción A:</p>
                                            <p>Si solo quieres Google Maps, no necesitas web. El QR redirige directo a tu perfil de Google Business.</p>
                                        </div>

                                        <div>
                                            <p className="font-medium">Opción B:</p>
                                            <p>Si también quieres la Galería Web, creamos una landing dedicada solo para esto:</p>
                                            <p className="mt-1 font-mono bg-orange-100 p-2 rounded inline-block">
                                                turestaurante.objetivo360.com/galeria
                                            </p>
                                            <p className="mt-2">Ese link funciona como tu "Galería de Clientes Felices" y se puede compartir en redes sociales.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Timeline (De compra a activación) */}
            <section className="pt-0 pb-20 bg-gray-50 -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            De la decisión a la primera foto subida en <span className="text-orange-500">3 días</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Día 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center mb-4">
                                    DÍA 1
                                </div>
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl mb-4">
                                    🛒
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">COMPRAS</h3>
                                <ul className="space-y-2 text-left">
                                    {[
                                        '✓ Pagas $60 USD',
                                        '✓ Recibes confirmación por email',
                                        '✓ Te enviamos un WhatsApp pidiendo tu logo y colores'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Día 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center mb-4">
                                    DÍA 2
                                </div>
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl mb-4">
                                    🎨
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">DISEÑO Y CONFIGURACIÓN</h3>
                                <ul className="space-y-2 text-left">
                                    {[
                                        '✓ Diseñamos tu QR personalizado',
                                        '✓ Configuramos el flujo de redirección',
                                        '✓ Conectamos tu Google Business',
                                        '✓ Hacemos pruebas internas'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Día 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center mb-4">
                                    DÍA 3
                                </div>
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl mb-4">
                                    🚀
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">ENTREGA Y ACTIVACIÓN</h3>
                                <ul className="space-y-2 text-left">
                                    {[
                                        '✓ Te enviamos el QR en alta resolución',
                                        '✓ Te damos acceso al panel de métricas',
                                        '✓ ¡Tu sistema de viralidad está activo!'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Micro-copy */}
                    <div className="mt-16 bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto text-center">
                        <p className="text-lg text-gray-700 mb-2">
                            <span className="font-semibold">Total de tu tiempo invertido:</span> 15 minutos.
                        </p>
                        <p className="text-gray-600">
                            Todo lo demás corre por nuestra cuenta.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección: Pricing (Simple y Directo) */}
            {/* Sección: Pricing */}
            <section className="pt-0 pb-20 bg-white -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Tu inversión en contenido automático
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        {/* Price Card - Left Side */}
                        <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-100 flex flex-col">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-orange-900 mb-2">Viralidad Estratégica</h3>
                                <div className="text-5xl font-bold text-orange-600 my-6">$60</div>
                                <p className="text-orange-700 mb-6">Pago único</p>
                                <p className="text-gray-600 mb-8">
                                    <span className="block">💳 Sin mensualidades</span>
                                    <span>🚫 Sin sorpresas</span>
                                </p>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold px-6 py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full"
                                    size="lg"
                                >
                                    <Link href="#contacto" className="flex items-center justify-center w-full px-4 py-3 text-center">
                                        <span className="text-base">Activar por $60 USD</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="mt-auto pt-6 border-t border-orange-200">
                                <p className="text-sm text-orange-700 text-center">
                                    Garantía de reembolso de 7 días
                                </p>
                            </div>
                        </div>

                        {/* Features - Right Side */}
                        <div className="md:w-2/3 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lo que incluye:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: '🎨', title: 'QR Personalizado', desc: 'Diseñado con tu marca y colores' },
                                    { icon: '🔄', title: 'Flujo Estratégico', desc: 'Redirección a Google Maps + Galería Web' },
                                    { icon: '📊', title: 'Panel de Métricas', desc: 'Seguimiento de escaneos y fotos' },
                                    { icon: '🖨️', title: 'Archivo Imprimible', desc: 'En alta resolución para imprimir' },
                                    { icon: '💬', title: 'Soporte 1 Año', desc: 'Asistencia por WhatsApp' },
                                    { icon: '⚡', title: 'Instalación Rápida', desc: 'En menos de 72 horas' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Ancla de Valor */}
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8 text-left">
                            <h4 className="font-bold text-gray-900 text-lg mb-3">Contexto rápido:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><span className="font-semibold">1 sesión con fotógrafo profesional = $200 USD</span><br />
                                        (Y las fotos siguen siendo "tuyas", no de clientes verificados)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><span className="font-semibold">30 fotos reales de clientes en Google Maps</span><br />
                                        = Mejor ranking local + Más reservas</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-semibold text-gray-800">
                            ¿Prefieres gastar $200 en fotos bonitas que Google ignora o $60 en un sistema que te trae fotos reales cada semana?
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección: Reducción de Riesgo */}
            <section className="pt-0 pb-20 bg-gray-50 -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Nuestra promesa: <span className="text-orange-500">Funciona o te devolvemos tu dinero</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    {/* 3 Garantías Visuales */}
                    <div className="relative">
                        {/* Versión móvil - Slider */}
                        <div className="md:hidden pb-12">
                            <Swiper
                                slidesPerView={1.1}
                                spaceBetween={20}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1.5,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {[
                                    {
                                        emoji: '⚡',
                                        title: 'Instalado en 72 horas o gratis',
                                        description: 'Tu sistema estará funcionando en máximo 3 días hábiles o te lo instalamos sin costo.'
                                    },
                                    {
                                        emoji: '🛡',
                                        title: 'Garantía de reembolso',
                                        description: 'Si no cumple con lo prometido, te devolvemos tu dinero sin hacer preguntas.',
                                        className: 'text-black'
                                    },
                                    {
                                        emoji: '💬',
                                        title: 'Soporte WhatsApp incluido',
                                        description: 'Asistencia directa por WhatsApp durante 1 año para resolver cualquier duda o problema.'
                                    }
                                ].map((guarantee, index) => (
                                    <SwiperSlide key={index} className="h-auto">
                                        <div className={`bg-white p-6 h-full rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${guarantee.className || ''}`}>
                                            <div className="text-5xl mb-4">{guarantee.emoji}</div>
                                            <h3 className={`text-xl font-bold ${guarantee.className ? 'text-black' : 'text-gray-900'} mb-3`}>
                                                {guarantee.title}
                                            </h3>
                                            <p className={guarantee.className ? 'text-black' : 'text-gray-600'}>{guarantee.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Versión escritorio - Grid */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    emoji: '⚡',
                                    title: 'Instalado en 72 horas o gratis',
                                    description: 'Tu sistema estará funcionando en máximo 3 días hábiles o te lo instalamos sin costo.'
                                },
                                {
                                    emoji: '🛡',
                                    title: 'Garantía de reembolso',
                                    description: 'Si no cumple con lo prometido, te devolvemos tu dinero sin hacer preguntas.',
                                    className: 'text-black'
                                },
                                {
                                    emoji: '💬',
                                    title: 'Soporte WhatsApp incluido',
                                    description: 'Asistencia directa por WhatsApp durante 1 año para resolver cualquier duda o problema.'
                                }
                            ].map((guarantee, index) => (
                                <div key={index} className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${guarantee.className || ''}`}>
                                    <div className="text-5xl mb-4">{guarantee.emoji}</div>
                                    <h3 className={`text-xl font-bold ${guarantee.className ? 'text-black' : 'text-gray-900'} mb-3`}>
                                        {guarantee.title}
                                    </h3>
                                    <p className={guarantee.className ? 'text-black' : 'text-gray-600'}>{guarantee.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estilos personalizados para el slider */}
                    <style jsx global>{`
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: #f97316;
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              background-color: #f97316;
            }
            .swiper-slide {
              height: auto;
            }
          `}</style>

                    {/* Explicación de la Garantía */}
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
                            <p className="text-lg text-gray-700 mb-6">
                                Si el QR no funciona como te prometimos, te devolvemos el 100% en los primeros 7 días.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Sin preguntas. Sin trámites complicados.<br />
                                Un mensaje por WhatsApp y listo.
                            </p>
                            <p className="text-xl font-semibold text-orange-600">
                                Nosotros asumimos el riesgo. Tú solo pruebas si funciona.
                            </p>

                            <div className="mt-8">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-base font-bold rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto"
                                    size="lg"
                                >
                                    <Link href="#contacto" className="flex items-center justify-center w-full px-4 py-3 text-center">
                                        <span className="text-base">Quiero probar sin riesgos</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: Urgencia (Suave pero real) */}
            <section className="pt-0 pb-20 bg-white -mt-8">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Esta oferta es solo para lectores del artículo
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 text-center mb-12 border border-orange-200">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg text-gray-700 mb-8">
                                El precio de <span className="font-bold text-orange-600">$60 USD</span> es exclusivo para quienes leyeron las 4 estrategias completas.
                            </p>

                            <div className="space-y-4 text-left mb-10">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">¿Por qué?</h3>

                                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
                                    <ul className="space-y-3">
                                        {[
                                            '✅ Ya entendiste el valor del contenido generado por usuarios.',
                                            '✅ Ya sabes que el ego del cliente puede trabajar para ti.',
                                            '✅ Ya sabes que Google premia las fotos de clientes reales.'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-green-500 mr-3 mt-0.5">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-xl font-semibold text-center mt-8 text-gray-800">
                                    No necesitas que te convenzamos de nuevo.<br />
                                    Solo necesitas activarlo.
                                </p>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-orange-200 max-w-md mx-auto">
                                <p className="text-gray-600 flex items-center justify-center">
                                    <span className="mr-2">💡</span>
                                    <span>
                                        <span className="line-through text-gray-400">Precio normal para tráfico frío: $90 USD</span>
                                        <br />
                                        <span className="font-bold text-orange-600">Tu precio por leer el artículo: $60 USD</span>
                                    </span>
                                </p>
                            </div>

                            <div className="mt-10">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold px-10 py-6 rounded-full shadow-lg transform transition-all hover:scale-105"
                                    size="lg"
                                >
                                    <Link href="#contacto" className="flex items-center justify-center w-full px-4 py-3 text-center">
                                        <span className="text-base">Quiero activar mi oferta especial</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección: CTA Final (Comparación de Escenarios) */}
            <section className="pt-0 pb-20 bg-gray-50 -mt-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Decides hoy. El contenido fluye para siempre.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    {/* Tabla de Comparación */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Columna 1: Sin el Sistema QR */}
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            <div className="bg-red-50 p-4 rounded-lg mb-6">
                                <h3 className="text-xl font-bold text-red-600 text-center">SIN EL SISTEMA QR</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { emoji: '😓', text: 'Rugas a tus clientes que suban fotos' },
                                    { emoji: '📉', text: 'Google no te premia (pocas fotos = menos visibilidad)' },
                                    { emoji: '💸', text: 'Pagas $200 por sesión de fotos "tuyas"' },
                                    { emoji: '🤷', text: 'No sabes cuántas personas vieron tus fotos' },
                                    { emoji: '😡', text: 'Clientes con ganas de publicar... pero no saben dónde' }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-2xl mr-3">{item.emoji}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 2: Con Viralidad Activa */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-2 border-orange-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                RECOMENDADO
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg mb-6">
                                <h3 className="text-xl font-bold text-green-600 text-center">CON VIRALIDAD ACTIVA</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { emoji: '😌', text: 'El sistema hace el trabajo por ti' },
                                    { emoji: '📈', text: 'Contenido fresco cada semana = mejor ranking' },
                                    { emoji: '💰', text: 'Inviertes $60 una vez y obtienes fotos reales' },
                                    { emoji: '📊', text: 'Panel básico te muestra cuántos escaneos al mes' },
                                    { emoji: '🎉', text: 'Clientes que ya quieren publicar lo hacen en 1 clic' }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-2xl mr-3">{item.emoji}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-orange-500 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            SÍ, QUIERO QUE MIS CLIENTES TRABAJEN PARA MÍ
                        </h3>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold rounded-full shadow-xl transform transition-all hover:scale-105 w-full max-w-md mx-auto mb-8"
                            size="lg"
                        >
                            <a
                                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col sm:flex-row items-center justify-center w-full px-4 py-3 text-center"
                            >
                                <span className="whitespace-nowrap">Activar Viralidad</span>
                                <span className="text-sm sm:text-base sm:ml-1">por $60 USD</span>
                            </a>
                        </Button>

                        <div className="space-y-2 text-gray-600 mb-8">
                            <p className="flex items-center justify-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Pago único, sin mensualidades
                            </p>
                            <p className="flex items-center justify-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Listo en 72 horas
                            </p>
                            <p className="flex items-center justify-center">
                                <span className="text-green-500 mr-2">✓</span>
                                Garantía de 7 días
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">
                            Al hacer clic serás redirigido a un formulario seguro.<br />
                            Tiempo de compra: 2 minutos.<br />
                            <span className="text-gray-600">Métodos de pago:</span> Tarjeta, PayPal, Transferencia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección: FAQs Ultra Breves */}
            <section id="faqs" className="pt-0 pb-20 bg-white -mt-8">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Las 3 preguntas más comunes
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: '¿Necesito tener sitio web?',
                                answer: (
                                    <>
                                        <p className="mb-2">No es obligatorio.</p>
                                        <p className="mb-2">Si tienes web: Instalamos el flujo hacia Google Maps + tu Galería Web.</p>
                                        <p>Si no tienes web: El QR redirige solo a Google Maps (que es lo más importante para SEO local).</p>
                                        <p className="font-medium mt-2">En ambos casos funciona.</p>
                                    </>
                                )
                            },
                            {
                                question: '¿Puedo personalizar el diseño del QR?',
                                answer: (
                                    <>
                                        <p className="mb-2">Sí, totalmente.</p>
                                        <p className="mb-2">Enviamos 3 propuestas de diseño con tu logo y colores.</p>
                                        <p className="mb-2">Eliges la que más te guste.</p>
                                        <p>Si ninguna te convence, hacemos ajustes hasta que quedes satisfecho.</p>
                                    </>
                                )
                            },
                            {
                                question: '¿Qué pasa si no funciona?',
                                answer: (
                                    <>
                                        <p className="mb-2">Tienes 7 días para probarlo.</p>
                                        <p className="mb-2">Si el QR no redirige correctamente o no cumple lo prometido, te devolvemos el 100%.</p>
                                        <p>Un mensaje por WhatsApp y listo.</p>
                                    </>
                                )
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    className={`w-full px-6 py-5 text-left flex justify-between items-center ${faqOpen[index] ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                                    onClick={() => setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }))}
                                >
                                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${faqOpen[index] ? 'transform rotate-180' : ''}`}
                                    />
                                </button>

                                {faqOpen[index] && (
                                    <div className="px-6 pb-6 pt-2 bg-white text-gray-600">
                                        <div className="prose max-w-none">
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección: Contacto Humano */}
            <section id="contacto" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            ¿Aún tienes dudas? <span className="text-orange-600">Hablemos</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg text-gray-700 mb-8">
                                Entendemos que cada restaurante es único.
                                <br />
                                Si quieres hablar de tu caso específico antes de decidir, estamos aquí para ti.
                            </p>

                            <Button
                                asChild
                                className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-8 py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full max-w-xs mx-auto mb-8 group"
                                size="lg"
                            >
                                <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full min-h-[56px] px-4 py-3">
                                    <div className="flex items-center justify-center w-full">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.5 14.4l-2.2-1.2c-.4-.2-.6-.6-.6-1.1 0-.2.1-.4.2-.5.2-.2.4-.3.6-.3h2.8c.3 0 .5-.2.5-.5v-3c0-4.1-3.4-7.5-7.5-7.5h-6C3.4 1 0 4.4 0 8.5v7c0 4.1 3.4 7.5 7.5 7.5h7c4.1 0 7.5-3.4 7.5-7.5v-3.1c0-.3-.2-.5-.5-.5zM7.5 2.5h6c3.3 0 6 2.7 6 6v3.5h-2.2c-1.5 0-2.8.9-3.4 2.2-.4.9-.5 1.9-.2 2.9l.8 2.3H7.5c-3.3 0-6-2.7-6-6v-7c0-3.3 2.7-6 6-6z" />
                                            <path d="M12.5 12.8c-.3.6-.3 1.3 0 1.9.2.4.5.7.9.9.6.3 1.3.3 1.9 0l3.7-2.1c.4-.2.6-.6.6-1.1 0-.2-.1-.4-.2-.5-.2-.2-.4-.3-.6-.3h-1.5c-.4 0-.8-.2-1-.5l-.7-1.4c-.3-.6-.9-1-1.6-1h-3.2c-.6 0-1 .4-1 1v3.1c0 .4.2.8.6 1z" />
                                        </svg>
                                        <div className="flex flex-col items-start justify-center ml-1 overflow-hidden">
                                            <div className="flex items-center">
                                                <span className="text-sm sm:text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis">Hablar con un Asesor</span>
                                                <span className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
                                            </div>
                                            <div className="text-xs text-white/90 font-normal mt-0.5 whitespace-nowrap">Respuesta en menos de 1h</div>
                                        </div>
                                    </div>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}