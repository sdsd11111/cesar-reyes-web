'use client';

import React, { useState } from 'react';
import { PlayCircle, Clock, Smartphone, DollarSign, Zap, Search, Rocket, CheckCircle, MessageCircle, ArrowRight, Check, Plane, Users, Globe } from 'lucide-react';
import FAQSection from '@/components/FaqSection';
import VideoModal from '@/components/VideoModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExpandableText } from "@/components/ui/expandable-text";
import { CardSlider } from "@/components/ui/card-slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemoFacade from '@/components/DemoFacade';
import Link from "next/link";

const CompactCard = ({ title, shortDesc, fullDesc, justification, icon: Icon }: { title: string, shortDesc: string, fullDesc: string, justification: string, icon: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative h-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
            {/* Top Media Section (Icon Placeholder) */}
            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Icon className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
            </div>

            {/* Bottom Content Section */}
            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">{title}</h3>

                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                    {!isExpanded ? (
                        <p>
                            {shortDesc}...{' '}
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="text-[#FF6B00] font-bold hover:text-white transition-colors focus:outline-none ml-1"
                            >
                                Seguir leyendo
                            </button>
                        </p>
                    ) : (
                        <div className="animate-in fade-in duration-300">
                            <p className="mb-4">{fullDesc}</p>
                            <div className="bg-white/10 p-4 rounded-lg border-l-4 border-[#FF6B00]">
                                <p className="font-bold text-xs text-[#FF6B00] uppercase mb-2 tracking-wider">Justificación:</p>
                                <p className="text-gray-100 italic">{justification}</p>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="mt-4 text-gray-400 text-xs hover:text-white flex items-center transition-colors"
                            >
                                Mostrar menos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MenuObjetivoClient = () => {
    const [videoUrl, setVideoUrl] = useState<string>(''); // Initialize with your video URL when available

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalVideoUrl, setModalVideoUrl] = useState('');
    const [searchQuery, setSearchQuery] = useState('comprar lasaña en Loja');

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const openModal = (url: string) => {
        setModalVideoUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalVideoUrl('');
    };

    const faqData = {
        h2: "Las preguntas que todos hacen (y sus respuestas):",
        questions: [
            {
                q: "¿Es difícil de usar? No soy bueno con la tecnología.",
                a: "Si sabes usar WhatsApp, sabes usar MenúObjetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.",
                cta: "Ver demo"
            },
            {
                q: "¿Esto es solo para restaurantes grandes?",
                a: "Todo lo contrario. MenúObjetivo fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.",
                cta: "Conocer más"
            },
            {
                q: "Ya tengo redes sociales. ¿Para qué necesito esto?",
                a: "Las redes sociales son geniales para conversar con tus clientes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde comer. MenúObjetivo complementa tus redes, no las reemplaza.",
                cta: "Ver beneficios"
            },
            {
                q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
                a: "Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por pedido, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.",
                cta: "Hablar por WhatsApp"
            },
        ]
    };

    const handleSearch = () => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            nombre: formData.get('nombre') as string,
            email: formData.get('email') as string,
            telefono: formData.get('telefono') as string,
            tipo_restaurante: formData.get('tipo_restaurante') as string,
            terminos: formData.get('terminos') === 'on',
        };

        try {
            const response = await fetch('/api/submit-menu-objetivo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Error al enviar el formulario');
            }

            setSubmitSuccess(true);

            // Reset form - use getElementById for more reliability
            const formElement = document.getElementById('formulario-reserva-restaurantes') as HTMLFormElement;
            if (formElement) {
                formElement.reset();
            }

            // Scroll to success message
            setTimeout(() => {
                const successElement = document.getElementById('form-success-message');
                if (successElement) {
                    successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitError(error.message || 'Error al enviar el formulario. Por favor, intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            <VideoModal
                isOpen={isModalOpen}
                onClose={closeModal}
                videoUrl={modalVideoUrl}
            />

            {/* Section 1: Hero */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                <img src="/images/menu-objetivo/menu-digital-restaurantes-hero.webp" alt="Menú digital para restaurantes en Ecuador" className="absolute z-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: 'var(--font-poiret-one)' }}>
                        <div className="block">En 2026, ChatGPT no va a recomendar tu restaurante</div>
                        <div className="text-[#FF6B00]">si no te pones las pilas</div>
                    </h1>
                    <div className="text-lg md:text-2xl mt-4 font-montserrat">
                        <ExpandableText
                            fullText='Si no apareces cuando alguien pregunta en GOOGLE "Almuerzos cerca de mi", ya no importa qué tan buena sea tu comida.<br class="hidden md:block" /> Simplemente no existes para la nueva generación que busca con Inteligencia artificial.'
                            shortText="Si no apareces cuando alguien pregunta en GOOGLE..."
                        />
                    </div>
                    {/* Button removed as per request */}
                    <p className="mt-4 text-sm text-gray-300">✅ Sin tarjeta de crédito. Sin compromisos. Solo una conversación.</p>
                </div>
            </section>

            {/* New Section: 3 Cards */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <CardSlider gridOnDesktop={true}>
                        <CompactCard
                            title="59% de tus nuevos clientes te buscan primero en Google."
                            shortDesc="Si tu menú es una"
                            fullDesc="Si tu menú es una imagen o un PDF, Google no lo puede leer. Y ese 59% simplemente no te encuentra."
                            justification="En 2024, un estudio en Guayaquil mostró que 6 de cada 10 personas revisan Internet antes de elegir dónde comer. Si tu negocio no tiene presencia optimizada —menú indexado, datos estructurados y precios actualizados— quedas fuera del proceso de decisión sin darte cuenta."
                            icon={Search}
                        />
                        <CompactCard
                            title="Hoy decide quien busca en Internet, no tus clientes de siempre."
                            shortDesc="La nueva generación elige lo"
                            fullDesc="La nueva generación elige lo que ve primero en Google, WhatsApp y redes."
                            justification="Las decisiones de consumo ya son digitales. Hijos y nietos buscan “dónde almorzar por aquí” en Google o lo preguntan a ChatGPT. Si no apareces allí, no existes para ellos y pierdes ventas a diario."
                            icon={Users}
                        />
                        <CompactCard
                            title="Más del 70% de viajeros planifica online."
                            shortDesc="Si tu restaurante no tiene"
                            fullDesc="Si tu restaurante no tiene información legible por Google, no serás opción para turistas."
                            justification="Los viajeros revisan reseñas, disponibilidad, fotos y, sobre todo, menus actualizados. Un PDF o una foto no aparece en Google, pero un menú indexado sí. Si quieres captar turistas, tu presencia digital debe estar optimizada desde adentro."
                            icon={Globe}
                        />
                    </CardSlider>
                </div>
            </section>

            {/* New Video Section */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-montserrat">
                        Mira cómo funciona <span className="text-[#FF6B00]">MenúObjetivo</span>
                    </h2>
                    <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF6B00]/30 bg-black">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <DemoFacade
                                src="https://www.youtube.com/embed/4hot82GQezI"
                                title="MenúObjetivo Demo"
                                previewImage="https://img.youtube.com/vi/4hot82GQezI/maxresdefault.jpg"
                                buttonText="Ver Video"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <a
                            href="#formulario"
                            className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg"
                        >
                            ¡Quiero Empezar Ahora!
                        </a>
                    </div>
                </div>
            </section>

            {/* Live Demo Section - Split Layout */}
            <section className="py-20 px-4 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Content & Accordion */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                                La Prueba Definitiva: <span className="text-[#FF6B00]">Adminístralo en Vivo</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                A tu izquierda, el panel de control. A tu derecha, el menú público. Despliega una acción y sigue los pasos para ver la magia en tiempo real.
                            </p>

                            {/* Instructions Accordion */}
                            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                                <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Actualizar Menú
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <div className="flex flex-col md:flex-row items-center justify-start gap-4 md:gap-8 text-gray-300">
                                            <div className="flex items-center gap-3">
                                                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B00] text-white font-bold">1</span>
                                                <p>Activa o desactiva un plato.</p>
                                            </div>
                                            <ArrowRight className="hidden md:block text-gray-500" />
                                            <div className="flex items-center gap-3">
                                                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B00] text-white font-bold">2</span>
                                                <p>Recarga el menú y mira la magia.</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Agregar Plato Nuevo
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">1</span>
                                                <p className="text-sm">Clic en "Nuevo Plato".</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">2</span>
                                                <p className="text-sm">Llena los campos.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">3</span>
                                                <p className="text-sm">Actívalo y guarda.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">4</span>
                                                <p className="text-sm">Recarga y listo.</p>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="bg-gray-800 rounded-lg border-gray-700">
                                    <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                        Accede con tus credenciales
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <div className="space-y-4 text-gray-300">
                                            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                                                <p className="font-medium">Usuario: <span className="text-white">Losalmuerzos</span></p>
                                                <p className="font-medium mt-2">Contraseña: <span className="text-white">Contraseña123.</span></p>
                                            </div>
                                            <p className="text-sm text-gray-400">Utiliza estas credenciales para acceder al panel de control.</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-10">
                                <a href="#" className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg w-full md:w-auto text-center">
                                    Quiero mi propio Menú Interactivo
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Video Loop */}
                        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[#FF6B00]/20">
                                {/* Phone Notch/Header simulation */}
                                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 z-20 flex justify-center">
                                    <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                                </div>

                                <div className="aspect-[9/16] bg-black/30 flex items-center justify-center relative z-10">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="h-full w-full object-cover"
                                        poster="/images/thumb-video-poster.jpg"
                                    >
                                        <source src="/images/MenuObjetivo/MenuObjetivo/gif-restaurantes.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20 text-center z-20">
                                    <p className="text-white text-sm font-medium">¡Es así de fácil actualizar tus precios!</p>
                                </div>
                            </div>

                            {/* Decorative elements behind the phone */}
                            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-[#FF6B00] rounded-full blur-[80px] opacity-20"></div>
                            <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Problem Scenarios Section - Tabbed Interface */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900">
                            Antes de seguir, dime si esto te suena familiar:
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto mb-20">
                        <Tabs defaultValue="weekly-menu" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-gray-100 p-2 rounded-xl">
                                <TabsTrigger
                                    value="weekly-menu"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    El ciclo del menú semanal
                                </TabsTrigger>
                                <TabsTrigger
                                    value="ghost-client"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    El cliente que nunca llegó
                                </TabsTrigger>
                                <TabsTrigger
                                    value="whatsapp-photo"
                                    className="data-[state=active]:bg-white data-[state=active]:text-[#FF6B00] data-[state=active]:shadow-md py-3 text-gray-600 font-semibold"
                                >
                                    La foto de WhatsApp
                                </TabsTrigger>
                            </TabsList>

                            {/* Tab 1: Weekly Menu */}
                            <TabsContent value="weekly-menu" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">El ciclo del menú semanal</h3>
                                    <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Lunes a las 10pm: Abres Canva para cambiar el menú del martes</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Internet lento, el diseñador no responde, falta una foto</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Lo publicas a medianoche en Facebook</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Martes todo el día: Te escriben por WhatsApp preguntando precios</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-gray-600 text-lg">
                                            <span className="flex-shrink-0 mt-1 text-red-500 font-bold">✕</span>
                                            <span>Miércoles: Un cliente se queja porque pidió algo que ya no tienes</span>
                                        </li>
                                    </ul>
                                    <div className="pt-6 border-t border-gray-200">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuántas horas perdiste esta semana en esto?</p>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Tab 2: Ghost Client */}
                            <TabsContent value="ghost-client" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">El cliente que nunca llegó</h3>
                                    <div className="space-y-6 mb-8 text-gray-600 text-lg text-left max-w-2xl mx-auto">
                                        <p>Un turista está en el parque central de tu ciudad.</p>
                                        <p>Abre Google: "Restaurante cerca de mí"</p>
                                        <p>Aparecen 5 opciones. <span className="font-bold text-red-500 text-xl">Tú NO estás ahí.</span></p>
                                        <p>Va a otro lado. Nunca sabrás que existió.</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200 mt-auto">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuántos clientes así perdiste este mes sin darte cuenta?</p>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Tab 3: WhatsApp Photo */}
                            <TabsContent value="whatsapp-photo" className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-playfair text-left">La foto de WhatsApp que nadie abre</h3>
                                    <div className="space-y-6 mb-8 text-gray-600 text-lg text-left max-w-2xl mx-auto">
                                        <p>Tienes una lista de 200 contactos.</p>
                                        <p>Envías tu menú en una imagen.</p>
                                        <p>Solo 20 lo abren.</p>
                                        <p>Los otros 180 ya están viendo el menú de tu competencia... en Google.</p>
                                    </div>
                                    <div className="pt-6 border-t border-gray-200 mt-auto">
                                        <p className="font-bold text-[#FF6B00] text-left text-xl">¿Cuánto tiempo más vas a depender de que TE busquen, en lugar de que TE ENCUENTREN?</p>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                            "El problema no es tu dedicación. Es que estás usando herramientas del 2010 en 2025. Y mientras tanto, tus competidores ya están donde tus clientes buscan."
                        </p>
                        <a
                            href="#demo-iframes"
                            className="inline-flex items-center text-[#FF6B00] font-bold text-xl hover:text-[#E66000] transition-colors group"
                        >
                            Mira cómo funciona en vivo
                            <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Relocated Live Demo Iframes */}
                    <div id="demo-iframes" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24">
                        <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200">
                            <div className="bg-gray-100 p-3 flex items-center border-b border-gray-200">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-500 mx-auto font-medium">Panel de Control</p>
                            </div>
                            <div className="w-full h-[70vh]">
                                <DemoFacade
                                    src="https://los-almuerzos.vercel.app/admin"
                                    title="Panel de Control"
                                    buttonText="Probar Panel Admin"
                                    className="bg-gray-50"
                                />
                            </div>
                        </div>
                        <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200">
                            <div className="bg-gray-100 p-3 flex items-center border-b border-gray-200">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-500 mx-auto font-medium">Menú Público</p>
                            </div>
                            <div className="w-full h-[70vh]">
                                <DemoFacade
                                    src="https://los-almuerzos.vercel.app/"
                                    title="Menú Público"
                                    buttonText="Ver Menú en Vivo"
                                    className="bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="cuanto-cuesta-tener-un-menu-digital-que-aparezca-en-google" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
                            ¿Cuánto cuesta tener un menú digital que aparezca en Google?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No te vamos a mentir con precios falsos. Aquí está lo que cuesta tener presencia REAL en Internet con tu menú digital profesional:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {/* Card 1: Plan Emprendedor */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Plan Emprendedor</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$250</span>
                                </div>
                                <p className="text-sm text-gray-600">Para menús fijos o ejecutivos</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Tu menú digital completo en 1 página optimizada</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico (imprime una vez, funciona siempre)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Actualizaciones ilimitadas desde tu celular</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>1 año de dominio + hosting incluidos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Todo queda a TU nombre</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Restaurantes con menú del día o carta ejecutiva que cambia poco.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=250&description=${encodeURIComponent("Plan Emprendedor - Menú Digital")}`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#FF6B00] transition-colors"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Elegir Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Plan Crecimiento */}
                        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-[#FF6B00] relative transform lg:scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-[#FF6B00] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">⭐ Más elegido</span>
                            </div>
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-[#FF6B00]/5 to-transparent">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Plan Crecimiento</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$500</span>
                                </div>
                                <p className="text-sm text-gray-600">Negocios en expansión</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Tu menú digital con hasta 8 páginas organizadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Actualizaciones ilimitadas desde tu celular</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>1 año de dominio + hosting incluidos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Todo queda a TU nombre</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Galería de fotos para eventos</span>
                                    </li>
                                </ul>
                                <div className="bg-[#FF6B00]/5 p-4 rounded-lg mb-6 border border-[#FF6B00]/20">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Cafeterías, bistrós o restaurantes con desayunos, almuerzos y carta regular.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=500&description=${encodeURIComponent("Plan Crecimiento - Menú Digital")}`}
                                    className="block w-full bg-[#FF6B00] text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#E66000] transition-colors shadow-lg"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Elegir Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Plan Pro */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Plan Pro</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$700</span>
                                </div>
                                <p className="text-sm text-gray-600">Para cartas completas</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Tu menú digital con hasta 20 páginas (carta completa)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Actualizaciones ilimitadas desde tu celular</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>2 años de dominio + hosting incluidos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Todo queda a TU nombre</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Galería de eventos + promociones destacadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Integración con redes sociales</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Restaurantes con carta extensa, especialidades, bebidas, postres y rotación frecuente.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=700&description=${encodeURIComponent("Plan Pro - Menú Digital")}`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#FF6B00] transition-colors"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Elegir Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Card 4: Plan Posicionamiento */}
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-[#FF6B00]/30">
                            <div className="p-6 border-b border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 font-playfair mb-2">Plan Posicionamiento</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-[#FF6B00]">$1000</span>
                                </div>
                                <p className="text-sm text-gray-600">Para cartas completas</p>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="text-sm font-semibold text-gray-700 mb-4">Incluye:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Tu menú digital con hasta 40 páginas (carta completa)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Código QR dinámico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Blog para posicionar internacionalmente</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Actualizaciones ilimitadas desde tu celular</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>2 años de dominio + hosting incluidos</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Todo queda a TU nombre</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Galería de eventos + promociones destacadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Integración con redes sociales</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Para quién:</p>
                                    <p className="text-xs text-gray-600">Restaurantes que buscan posicionamiento internacional y presencia digital completa.</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/pago?amount=1000&description=${encodeURIComponent("Plan Posicionamiento - Menú Digital")}`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-[#FF6B00] transition-colors"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Elegir Plan</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div >
                    </div >
                </div>
            </section>


            {/* Section 4: The Demonstration */}
            <section className="py-20 px-4 bg-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]" style={{ fontFamily: 'var(--font-poiret-one)' }}>
                        Tu menú digital, <span className="text-[#FF6B00]">sin riesgos ni sorpresas</span>
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        ¿Preocupado por contratar un servicio online? Lo entendemos. Por eso trabajamos con total transparencia.
                        Conoce a tu equipo, sigue cada paso del proceso y paga con seguridad. Tu inversión está 100% protegida.
                    </p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="relative w-full rounded-xl shadow-xl overflow-hidden bg-black/20 cursor-pointer"
                        onClick={() => openModal('https://www.youtube.com/watch?v=oPySzkvDjDk')}>
                        <div className="relative w-full h-0 pb-[56.25%] bg-black">
                            <img
                                src="https://img.youtube.com/vi/oPySzkvDjDk/maxresdefault.jpg"
                                alt="Vista previa del video"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
                                <div className="bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-4 group-hover:scale-110">
                                    <PlayCircle className="w-12 h-12 text-[#FF6B00]" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                2:45
                            </div>
                        </div>
                    </div>

                    {/* Guarantees List */}
                    <div className="mt-12 max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Garantías incluidas:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Pagas por etapas</p>
                                    <p className="text-sm text-gray-600">(ves resultados antes de cada pago)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Todo queda a TU nombre</p>
                                    <p className="text-sm text-gray-600">(dominio, hosting, archivos)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">14 días de garantía</p>
                                    <p className="text-sm text-gray-600">(si tu menú digital no te ahorra tiempo, te devolvemos tu inversión)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#FF6B00] rounded-full text-white text-sm font-bold">
                                    🔒
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Soporte incluido</p>
                                    <p className="text-sm text-gray-600">(dudas, cambios, actualizaciones)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="#formulario"
                            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.8.48 3.48 1.32 4.94L2 22l5.06-1.32C8.52 21.52 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.4-4.6-1.1l-.34-.2-3.54.93.94-3.46-.22-.34C3.4 15.2 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9zm5.5-6.5c-.08-.14-.28-.22-.6-.4-.32-.18-.88-.44-1.5-.74-.09-.04-.2-.06-.3.06l-.36.45c-.1.12-.2.14-.36.08-.16-.06-.67-.24-1.28-.77-.47-.42-.79-.94-.88-1.1-.1-.16 0-.24.07-.32.08-.08.18-.2.28-.32.1-.12.12-.22.18-.34.06-.12.03-.22.02-.3-.02-.1-.3-.7-.4-.96-.1-.26-.2-.22-.28-.22-.06 0-.14-.02-.22-.02-.08 0-.2.02-.3.3-.1.28-.4.98-.4 2.1 0 1.12 1.12 2.38 1.3 2.54.18.16 2.24 1.4 5.42 1.9.72.12 1.24.1 1.7.06.54-.04 1.68-.7 1.92-1.38.24-.68.24-1.26.16-1.38z" clipRule="evenodd" />
                            </svg>
                            ¡Quiero mi menú digital ahora!
                        </a>
                    </div>
                </div>
            </section >

            {/* Section 5: Transformation + Social Proof */}
            < section className="py-20 px-4 bg-[#F9F9F9]" >
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        No es magia, son <span className="text-[#00C4A7]">resultados.</span>
                    </h2>
                </div>
            </section >

            {/* Section 6: FAQs */}
            < section className="py-20 px-4 bg-gray-50" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2B2B2B] font-montserrat">
                        {faqData.h2}
                    </h2>
                    <FAQSection h2={faqData.h2} questions={faqData.questions} />
                </div>
            </section >

            {/* Section 7: Final Close - Reservation Form */}
            < section id="formulario" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white" >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">No seas el último en modernizarte</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Columna izquierda - Contenido existente */}
                        <div className="space-y-6">
                            <p className="text-xl mb-6">
                                Esta tecnología por $150 USD es un regalo insostenible. Lo hacemos para revolucionar Loja y Cuenca durante el festival.
                            </p>

                            {/* Contador de cupos */}
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                                <div className="text-xl font-medium mb-3 text-center">Cupos Restantes: 4/20</div>
                                <div className="w-full bg-white/30 rounded-full h-4 mb-4">
                                    <div className="bg-white h-4 rounded-full" style={{ width: '20%' }}></div>
                                </div>

                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Pago único de $150 (sin mensualidades ocultas)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Diseño personalizado para tu restaurante</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Panel de control fácil de usar</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-green-300 mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Soporte prioritario durante 3 meses</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-orange-100 text-lg mb-6">
                                <span className="font-semibold text-white">Garantía:</span> Si no te gusta el diseño, lo ajustamos hasta que lo ames.
                            </p>

                            {/* Botón de WhatsApp */}
                            <a
                                href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20tus%20servicios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.77-1.66-2.07-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.016a9.6 9.6 0 01-5.2-1.524l-.366-.219-3.735.982.998-3.648-.235-.374a9.6 9.6 0 01-1.51-5.127 9.7 9.7 0 0110.09-9.6 9.7 9.7 0 019.6 10.09 9.7 9.7 0 01-9.6 9.6z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                                Contáctame por WhatsApp
                            </a>
                        </div>

                        {/* Columna derecha - Formulario */}
                        <div className="bg-white rounded-xl shadow-xl p-6 border border-orange-100">
                            <h3 className="text-2xl font-bold text-orange-800 mb-6">
                                RESERVA TU CUPO AHORA
                            </h3>

                            {submitSuccess && (
                                <div id="form-success-message" className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-green-800 font-bold mb-1">¡Reserva confirmada!</h4>
                                            <p className="text-green-700 text-sm">Gracias por tu interés. Hemos recibido tus datos y te contactaremos en las próximas 24 horas. Revisa tu correo electrónico para más información.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {submitError && (
                                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                    <div className="flex items-start">
                                        <span className="text-red-500 mt-0.5 mr-3 flex-shrink-0 text-xl">⚠️</span>
                                        <div>
                                            <h4 className="text-red-800 font-bold mb-1">Error al enviar</h4>
                                            <p className="text-red-700 text-sm">{submitError}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form id="formulario-reserva-restaurantes" className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre completo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Correo electrónico <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="tucorreo@ejemplo.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                                        WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Ejemplo: 593987654321"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tipo_restaurante" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tipo de restaurante <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="tipo_restaurante"
                                        name="tipo_restaurante"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="Comida rapida">Comida rápida</option>
                                        <option value="Restaurante">Restaurante</option>
                                        <option value="Cafetería">Cafetería</option>
                                        <option value="Pizzería">Pizzería</option>
                                        <option value="Otro">Otro (especificar abajo)</option>
                                    </select>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terminos"
                                            name="terminos"
                                            type="checkbox"
                                            required
                                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terminos" className="font-medium text-gray-700">
                                            Acepto los términos y condiciones <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>ENVIANDO...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>RESERVAR MI LUGAR</span>
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Al hacer clic, te contactaremos en 24h para confirmar detalles y método de pago.
                                    <br />
                                    No se cobra hasta que confirmes.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-link to Hotel Objetivo */}
            <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                        ¿También administras un <span className="text-[#FF6B00]">Hotel</span>?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Sistema de reservas directas sin comisiones. Gestiona habitaciones, check-in y reservas desde tu celular.
                    </p>
                    <a
                        href="/motor-reservas-hotel"
                        className="inline-flex items-center bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 text-lg"
                    >
                        Conoce Hotel Objetivo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <p className="text-sm text-gray-500 mt-4">Sin comisiones por reserva · Control total de tus huéspedes</p>
                </div>
            </section>
        </div>
    );
};

export default MenuObjetivoClient;
