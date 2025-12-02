'use client';

import React, { useState } from 'react';
import { PlayCircle, Clock, Smartphone, DollarSign, Zap, Search, Rocket, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FaqSection';
import VideoModal from '@/components/VideoModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExpandableText } from "@/components/ui/expandable-text";
import { CardSlider } from "@/components/ui/card-slider";

const MenuObjetivoClient = () => {
    const [videoUrl, setVideoUrl] = useState<string>(''); // Initialize with your video URL when available

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalVideoUrl, setModalVideoUrl] = useState('');
    const [searchQuery, setSearchQuery] = useState('comprar lasaña en Loja');

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
                        <div className="block">Tu menú digital, sin complicaciones</div>
                        <div className="text-[#FF6B00]">en menos de 1 minuto</div>
                    </h1>
                    <div className="text-lg md:text-2xl mt-4 font-montserrat">
                        <ExpandableText
                            fullText="Recupera tu tiempo, atrae más clientes por Google y deja de pelear con la tecnología. La solución ideal para restaurantes en Quito, Guayaquil y todo Ecuador."
                            shortText="Recupera..."
                        />
                    </div>
                    <button
                        onClick={() => openModal('https://www.youtube.com/watch?v=4hot82GQezI')}
                        className="mt-8 inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg"
                    >
                        <PlayCircle className="inline-block mr-2" />
                        Quiero Ver Cómo Funciona
                    </button>
                    <p className="mt-4 text-sm text-gray-300">✅ Sin tarjeta de crédito. Sin compromisos. Solo una conversación.</p>
                </div>
            </section>

            {/* Live Demo Section */}
            <section className="py-20 px-4 bg-gray-900 text-white">
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
                    <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                        <AccordionItem value="item-1" className="bg-gray-800 rounded-lg border-gray-700">
                            <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                Actualizar Menú
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-0">
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
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-gray-800 rounded-lg border-gray-700">
                            <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                Agregar Plato Nuevo
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-0">
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
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-gray-800 rounded-lg border-gray-700">
                            <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline text-white">
                                Accede con tus credenciales
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 pt-0">
                                <div className="space-y-4 text-gray-300">
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <p className="font-medium">Usuario: <span className="text-white">Losalmuerzos</span></p>
                                        <p className="font-medium mt-2">Contraseña: <span className="text-white">Contraseña123.</span></p>
                                    </div>
                                    <p className="text-sm text-gray-400">Utiliza estas credenciales para acceder al panel de control.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
                        <iframe src="https://los-almuerzos.vercel.app/admin" className="w-full h-[70vh]" title="Panel de Control"></iframe>
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
                        <iframe src="https://los-almuerzos.vercel.app/" className="w-full h-[70vh]" title="Menú Público"></iframe>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <a href="#" className="inline-block bg-[#FF6B00] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-lg">
                        Quiero mi propio Menú Interactivo
                    </a>
                </div>
            </section>

            {/* Section 2: The Amplified Problem */}
            <section className="py-20 px-4 bg-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        Tu comida es <span className="text-[#FF6B00]">excelente.</span> Tu visibilidad, no.
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Sabes que tu comida es la mejor de la zona. Pero si tu menú no está donde tus clientes buscan... es como si no existieras.
                    </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto px-4">
                    <CardSlider>
                        <div className="relative aspect-[9/16] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-8 overflow-hidden">
                            <img src="/images/menu-objetivo/problema-tiempo-diseno-menu-restaurante.webp" alt="La Hora Perdida" className="absolute inset-0 w-full h-full object-cover z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="relative z-20 text-white flex flex-col h-full justify-center">
                                <h3 className="font-bold text-3xl font-playfair [text-shadow:0_0_2px_#000,0_0_5px_#000]">La "Hora Perdida"</h3>
                                <p className="mt-4 font-light leading-relaxed [text-shadow:0_0_1px_#000,0_0_3px_#000]">
                                    Madrugas para cocinar, no para diseñar. Pierdes horas tomando fotos, editando precios y publicando en 3 lugares distintos.
                                </p>
                                <a href="#" className="mt-6 bg-white/30 text-white self-start font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors [text-shadow:0_0_1px_#000]">
                                    Saber más
                                </a>
                            </div>
                        </div>
                        <div className="relative aspect-[9/16] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-8 overflow-hidden">
                            <img src="/images/menu-objetivo/problema-visibilidad-google-restaurantes.webp" alt="La Batalla Contra el Algoritmo" className="absolute inset-0 w-full h-full object-cover z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="relative z-20 text-white flex flex-col h-full justify-center">
                                <h3 className="font-bold text-3xl font-playfair [text-shadow:0_0_2px_#000,0_0_5px_#000]">La Batalla Contra el Algoritmo</h3>
                                <p className="mt-4 font-light leading-relaxed [text-shadow:0_0_1px_#000,0_0_3px_#000]">
                                    Publicas en redes y solo te ven tus seguidores. No llegas a la gente nueva que busca activamente "almuerzos cerca de mí".
                                </p>
                                <a href="#" className="mt-6 bg-white/30 text-white self-start font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors [text-shadow:0_0_1px_#000]">
                                    Saber más
                                </a>
                            </div>
                        </div>
                        <div className="relative aspect-[9/16] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-8 overflow-hidden">
                            <img src="/images/menu-objetivo/problema-enviar-menu-whatsapp-clientes.webp" alt="El Costo de la Foto por WhatsApp" className="absolute inset-0 w-full h-full object-cover z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="relative z-20 text-white flex flex-col h-full justify-center">
                                <h3 className="font-bold text-3xl font-playfair [text-shadow:0_0_2px_#000,0_0_5px_#000]">El Costo de la "Foto por WhatsApp"</h3>
                                <p className="mt-4 font-light leading-relaxed [text-shadow:0_0_1px_#000,0_0_3px_#000]">
                                    Cada vez que un cliente te pide el menú, pierdes la oportunidad de que vea tus promociones y comparta tu página.
                                </p>
                                <a href="#" className="mt-6 bg-white/30 text-white self-start font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors [text-shadow:0_0_1px_#000]">
                                    Saber más
                                </a>
                            </div>
                        </div>
                    </CardSlider>
                </div>
            </section>

            {/* Google Search Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        ¿Tus clientes te encuentran en Google? <span className="text-[#FF6B00]">Compruébalo ahora.</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        La mayoría de dueños de restaurantes creen que tienen presencia online, pero sus clientes no los encuentran cuando buscan lo que venden. Haz la prueba. Busca en Google exactamente como lo haría un cliente hambriento:
                    </p>
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg p-2">
                            <Search className="text-gray-400 mx-3" />
                            <input
                                type="text"
                                className="w-full focus:outline-none text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button onClick={handleSearch} className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors ml-2">
                                Buscar
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Ej: <span className="font-semibold">comprar pizza en Quito</span>, <span className="font-semibold">restaurante cerca de mí</span>, <span className="font-semibold">almuerzos ejecutivos Guayaquil</span>, <span className="font-semibold">menú digital restaurante Ecuador</span></p>
                    </div>
                </div>
            </section>

            {/* Section 3: The Solution */}
            <section className="py-20 px-4 bg-[#F9F9F9]">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        Deja de "publicar" tu menú. Empieza a <span className="text-[#00C4A7]">posicionarlo.</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        El problema nunca fue tu dedicación, fue usar herramientas equivocadas. Por eso creamos MenúObjetivo.
                    </p>
                </div>
                <div className="mt-16 max-w-6xl mx-auto px-4">
                    <CardSlider>
                        <div className="relative h-auto min-h-[400px] sm:min-h-[600px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            <div className="relative h-48 sm:h-64 w-full">
                                <img src="/images/menu-objetivo/solucion-actualizar-menu-digital-facil.webp" alt="Control Total en 1 Minuto" className="absolute inset-0 w-full h-full object-cover z-0 brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-10"></div>
                            </div>
                            <div className="relative z-20 text-white flex flex-col p-6 sm:p-8 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-2xl sm:text-3xl font-playfair">Control Total en 1 Minuto</h3>
                                <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium leading-relaxed text-gray-200">
                                    Panel de control desde tu celular. Activas o desactivas platos y tu web, QR y WhatsApp se actualizan al instante.
                                </p>
                                <div className="mt-auto pt-6">
                                    <a href="#" className="inline-block bg-white/30 text-white font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors">
                                        Saber más
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-auto min-h-[400px] sm:min-h-[600px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            <div className="relative h-48 sm:h-64 w-full">
                                <img src="/images/menu-objetivo/solucion-posicionamiento-google-restaurantes.webp" alt="Visible Cuando Te Buscan" className="absolute inset-0 w-full h-full object-cover z-0 brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-10"></div>
                            </div>
                            <div className="relative z-20 text-white flex flex-col p-6 sm:p-8 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-2xl sm:text-3xl font-playfair">Visible Cuando Te Buscan</h3>
                                <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium leading-relaxed text-gray-200">
                                    Cada plato tiene su propia página optimizada para Google. Cuando alguien busca "lasaña en Loja", tu restaurante aparece.
                                </p>
                                <div className="mt-auto pt-6">
                                    <a href="#" className="inline-block bg-white/30 text-white font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors">
                                        Saber más
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-auto min-h-[400px] sm:min-h-[600px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            <div className="relative h-48 sm:h-64 w-full">
                                <img src="/images/menu-objetivo/solucion-enlace-menu-digital-whatsapp.webp" alt="El Poder del Menú Digital" className="absolute inset-0 w-full h-full object-cover z-0 brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 z-10"></div>
                            </div>
                            <div className="relative z-20 text-white flex flex-col p-6 sm:p-8 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-2xl sm:text-3xl font-playfair">El Poder del Menú Digital</h3>
                                <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium leading-relaxed text-gray-200">
                                    No más fotos por WhatsApp. Envía un solo enlace con tu menú completo, promociones y botón de pedidos directos.
                                </p>
                                <div className="mt-auto pt-6">
                                    <a href="#" className="inline-block bg-white/30 text-white font-medium py-2 px-6 rounded-full hover:bg-white/50 transition-colors">
                                        Saber más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardSlider>
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
                    <div className="mt-8 text-center">
                        <a
                            href="https://wa.me/593963410409?text=Hola%2C%20vi%20la%20demo%20en%20la%20landing%20y%20me%20interesa%20ver%20c%C3%B3mo%20funciona%20para%20mi%20restaurante.%20%C2%BFPueden%20agendar%20una%20demo%20personalizada%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.8.48 3.48 1.32 4.94L2 22l5.06-1.32C8.52 21.52 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.66 0-3.22-.4-4.6-1.1l-.34-.2-3.54.93.94-3.46-.22-.34C3.4 15.2 3 13.66 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9-4.04 9-9 9zm5.5-6.5c-.08-.14-.28-.22-.6-.4-.32-.18-.88-.44-1.5-.74-.09-.04-.2-.06-.3.06l-.36.45c-.1.12-.2.14-.36.08-.16-.06-.67-.24-1.28-.77-.47-.42-.79-.94-.88-1.1-.1-.16 0-.24.07-.32.08-.08.18-.2.28-.32.1-.12.12-.22.18-.34.06-.12.03-.22.02-.3-.02-.1-.3-.7-.4-.96-.1-.26-.2-.22-.28-.22-.06 0-.14-.02-.22-.02-.08 0-.2.02-.3.3-.1.28-.4.98-.4 2.1 0 1.12 1.12 2.38 1.3 2.54.18.16 2.24 1.4 5.42 1.9.72.12 1.24.1 1.7.06.54-.04 1.68-.7 1.92-1.38.24-.68.24-1.26.16-1.38z" clipRule="evenodd" />
                            </svg>
                            ¡Quiero mi menú digital ahora!
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 5: Transformation + Social Proof */}
            <section className="py-20 px-4 bg-[#F9F9F9]">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] font-montserrat">
                        No es magia, son <span className="text-[#00C4A7]">resultados.</span>
                    </h2>
                </div>
            </section>

            {/* Section 6: FAQs */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2B2B2B] font-montserrat">
                        {faqData.h2}
                    </h2>
                    <FAQSection h2={faqData.h2} questions={faqData.questions} />
                </div>
            </section>

            {/* Section 7: Final Close */}
            <section className="py-20 px-4 bg-[#2B2B2B] text-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins">
                        Hoy puedes <span className="text-[#FF6B00]">cambiar la forma</span> en que vendes.
                    </h2>
                    <p className="text-gray-300 mt-4 text-lg">
                        Tienes dos caminos: seguir perdiendo tiempo o unirte a los restaurantes que ya están automatizando su crecimiento.
                    </p>
                    <div className="mt-12 bg-[#FFF5E6] border-2 border-[#FF6B00] p-8 rounded-lg text-left text-[#2B2B2B]">
                        <h3 className="font-bold text-2xl text-center font-montserrat">🍽️ Activa Tu MenúObjetivo Hoy Mismo</h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start"><CheckCircle className="text-[#00C4A7] mr-3 flex-shrink-0" /> <span>Tu página web profesional con tu nombre y marca.</span></li>
                            <li className="flex items-start"><CheckCircle className="text-[#00C4A7] mr-3 flex-shrink-0" /> <span>Actualizaciones ilimitadas con 1 clic desde tu celular.</span></li>
                            <li className="flex items-start"><CheckCircle className="text-[#00C4A7] mr-3 flex-shrink-0" /> <span>Posicionamiento en Google incluido (SEO local por plato).</span></li>
                            <li className="flex items-start"><CheckCircle className="text-[#00C4A7] mr-3 flex-shrink-0" /> <span>Código QR dinámico que siempre apunta a tu menú actualizado.</span></li>
                        </ul>
                    </div>
                    <a
                        href="https://wa.me/593963410409?text=Hola%2C%20le%C3%AD%20toda%20la%20landing%20y%20quiero%20activar%20Menú%20Objetivo%20para%20mi%20restaurante.%20%C2%BFCu%C3%A1ndo%20podemos%20empezar%3F"
                        className="mt-12 inline-block bg-[#FF6B00] text-white font-bold py-5 px-12 rounded-lg shadow-lg hover:bg-[#E66000] transition-colors text-xl"
                    >
                        🔥 Quiero Empezar Ahora
                    </a>
                    <p className="mt-4 text-sm text-gray-400">🔒 Prueba sin compromiso. Sin ataduras. Sin letra chica.</p>
                </div>
            </section>
        </div>
    );
};

export default MenuObjetivoClient;
