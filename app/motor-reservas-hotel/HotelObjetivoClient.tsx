'use client';

import React, { useState } from 'react';
import { supabaseReto } from '@/src/lib/supabaseRetoClient';
import { PlayCircle, Clock, Smartphone, DollarSign, Zap, Search, Rocket, CheckCircle, MessageCircle, ArrowRight, Check, Plane, Users, Globe, BarChart, Briefcase, Mail, Heart } from 'lucide-react';
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

const HotelCard = ({ title, icon: Icon, shortDesc, children }: { title: string, icon: any, shortDesc: string, children: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative h-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
            {/* Top Media Section */}
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
                            <div className="mb-4 text-gray-100 space-y-4">
                                {children}
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

const HotelObjetivoClient = () => {
    // Estado del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        tipo_hotel: '',
        plan_interes: '',
        terminos: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Validaciones básicas
            if (!formData.nombre || !formData.email || !formData.telefono || !formData.tipo_hotel || !formData.terminos) {
                throw new Error('Por favor completa todos los campos requeridos.');
            }

            // Insertar en Supabase (Tabla: hotel_leads)
            const { error } = await supabaseReto
                .from('hotel_leads')
                .insert([
                    {
                        nombre: formData.nombre,
                        email: formData.email,
                        telefono: formData.telefono,
                        tipo_hotel: formData.tipo_hotel,
                        plan_interes: formData.plan_interes || null,
                        terminos_aceptados: formData.terminos
                    }
                ]);

            if (error) throw error;

            // Enviar correo de agradecimiento (sin bloquear el flujo principal si falla)
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        to: formData.email,
                        subject: 'Confirmación de Solicitud - César Reyes',
                        html: `
                            <h2>Hola ${formData.nombre},</h2>
                            <p>¡Gracias por tu interés en transformar tu hotel!</p>
                            <p>Hemos recibido tus datos correctamente. Nuestro equipo analizará tu solicitud y te contactará en el transcurso del día para coordinar los siguientes pasos.</p>
                            <br>
                            <p>Atentamente,</p>
                            <p><strong>El equipo de César Reyes</strong></p>
                        `
                    })
                });
            } catch (emailError) {
                console.error('Error al enviar correo de confirmación:', emailError);
                // No lanzamos error para no afectar el mensaje de éxito del formulario
            }

            setSubmitStatus('success');
            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                tipo_hotel: '',
                plan_interes: '',
                terminos: false
            });

        } catch (error: any) {
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Ocurrió un error al enviar tus datos. Por favor intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <img src="/images/hotel-objetivo/hero.png" alt="Gestión digital para hoteles en Ecuador" className="absolute z-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white" style={{ fontFamily: 'var(--font-poiret-one)' }}>
                        <div className="block">En 2026, tu hotel tendrá más huéspedes</div>
                        <div className="text-[#FF6B00]">sin dar comisiones</div>
                    </h1>
                    <div className="text-lg md:text-2xl mt-4 font-montserrat max-w-4xl mx-auto">
                        <p>Has perdido el control de TU negocio, tienes un socio que se lleva hasta un 18% de la utilidad bruta y eso es casi el 60% de tu utilidad, eso no puede seguir así.</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-300">✅ Una sola vez. Sin comisiones por reserva. Empieza hoy, domina mañana.</p>
                </div>
            </section>

            {/* Nueva Sección de Video de YouTube */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF6B00]/30 bg-black">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/lImzAJLHgdo?autoplay=0&rel=0"
                            title="Video de presentación"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 2: CARDS DE DOLOR (Antes del Video) */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">Los números que nadie te muestra (pero que te están quebrando)</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Antes de mostrarte la solución, necesitas ver la verdad completa de lo que está pasando con tu dinero. Estos no son datos inventados—son promedios del sector hotelero ecuatoriano 2025 (MINTUR, FHE, SAYCE).</p>
                    </div>

                    <CardSlider gridOnDesktop={true}>
                        {/* CARD 1 */}
                        <HotelCard
                            title="EL FANTASMA INVISIBLE"
                            icon={DollarSign}
                            shortDesc="Ese 18% de comisión parece poco, pero en realidad se está llevando más de la mitad de tu ganancia real"
                        >
                            <div className="bg-white/10 p-4 rounded-lg">
                                <p className="font-bold text-center mb-2 text-[#FF6B00]">💰 COMISIÓN VISIBLE</p>
                                <p className="text-center text-xl font-bold text-white">18% por reserva</p>
                                <p className="text-center italic text-gray-400">"No parece tanto, ¿verdad?"</p>
                                <div className="mt-2 space-y-1 text-gray-300 text-sm">
                                    <p>Ingreso: $500 → Pagas: $90</p>
                                    <p>Ingreso: $1,000 → Pagas: $180</p>
                                    <p>Ingreso: $10,000 → Pagas: $1,800</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="font-bold text-[#FF6B00] mb-2">🔴 LA VERDAD QUE NO VES:</p>
                                <p className="text-gray-300">Ese 18% NO sale de tus ingresos... Sale de TU UTILIDAD NETA.</p>
                                <p className="text-gray-300 mt-2">Si tu margen de ganancia es 30%, ese 18% representa el <span className="font-bold text-white">60% de lo que realmente te queda.</span></p>
                                <p className="font-bold mt-2 text-white">La plataforma no se lleva el 18%. Se lleva el 60% de tu ganancia real.</p>
                            </div>
                        </HotelCard>

                        {/* CARD 2 */}
                        <HotelCard
                            title="Reservas vía Booking hasta un 70%"
                            icon={BarChart}
                            shortDesc="Hicimos los números de un hotel promedio. El resultado asusta: estás trabajando un tercio del año solo para pagar comisiones"
                        >
                            <div className="bg-white/10 p-4 rounded-lg">
                                <p className="font-bold text-center mb-2 text-[#FF6B00]">📊 HOTEL 3★ PROMEDIO</p>
                                <div className="space-y-1 text-gray-300 text-sm">
                                    <p>Ingresos anuales: $700,000</p>
                                    <p>Reservas vía Agencias (70%): $490,000</p>
                                    <p className="font-bold text-[#FF6B00]">Comisión pagada (18%): $88,200</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="font-bold text-[#FF6B00] mb-2">🔴 PERO ESO NO ES TODO:</p>
                                <p className="text-gray-300">Costos operativos (65%): $455,000</p>
                                <p className="font-bold text-green-400">Utilidad neta real: $245,000</p>
                                <div className="bg-red-900/30 p-3 rounded mt-2 border border-red-900/50">
                                    <p className="font-bold text-red-400 text-center text-sm">🚨 LA AGENCIA SE LLEVA EL 36% DE TU GANANCIA REAL</p>
                                </div>
                                <div className="mt-2 text-xs text-gray-400">
                                    <p>❌ El cliente que no puedes fidelizar</p>
                                    <p>❌ La data que no tienes</p>
                                    <p>❌ El control que perdiste</p>
                                </div>
                            </div>
                        </HotelCard>

                        {/* CARD 3 */}
                        <HotelCard
                            title="EL COSTO DE LA INDECISIÓN"
                            icon={Clock}
                            shortDesc="Cada día que pasa sin tu sistema propio, no solo pierdes comisiones, pierdes el activo más valioso: tus clientes"
                        >
                            <div className="bg-white/10 p-4 rounded-lg">
                                <p className="font-bold text-center mb-2 text-[#FF6B00]">⏳ MIENTRAS PIENSAS...</p>
                                <p className="text-center text-gray-300 text-sm mb-2">Tu negocio sigue generando, pero no para ti:</p>
                                <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                    <li>La plataforma sigue cobrando su 'impuesto' diario</li>
                                    <li>Tu base de datos sigue vacía</li>
                                    <li>Tu marca se debilita frente a las OTAs</li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="font-bold text-[#FF6B00] mb-2">🔴 LO QUE PIERDES CADA MES:</p>
                                <ul className="list-disc list-inside text-gray-300 mt-1 text-sm mb-3">
                                    <li>~$7,350 en comisiones innecesarias</li>
                                    <li>~540 oportunidades de fidelización</li>
                                </ul>
                                <div className="bg-orange-900/30 p-3 rounded mt-2 border border-orange-900/50">
                                    <p className="font-bold text-orange-400 text-center text-sm">🚨 EN UN AÑO HABRÁS REGALADO UN DEPARTAMENTO ($88k) EN COMISIONES</p>
                                </div>
                            </div>
                        </HotelCard>
                    </CardSlider>
                    <div className="mt-12 text-center">
                        <p className="text-xl font-medium text-gray-800">Ahora que conoces los números reales, déjame mostrarte la solución que está cambiando el juego para hoteles en Ecuador.</p>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section id="demo-video" className="py-20 px-4 bg-black">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-montserrat">
                        Mira cómo funciona <span className="text-[#FF6B00]">tu plataforma digital</span>
                    </h2>
                    <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FF6B00]/30 bg-black">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <DemoFacade
                                src="https://www.youtube.com/embed/JDMmFvf8URY"
                                title="HotelObjetivo Demo"
                                previewImage="https://img.youtube.com/vi/JDMmFvf8URY/maxresdefault.jpg"
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

            {/* SECCIÓN 4: DEMO INTERACTIVO / PROBLEMA */}
            <section className="py-20 px-4 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">
                            Ellos te traen tu primer huesped, tu lo enamoras
                        </h2>
                    </div>

                    {/* Desktop: Grid de 3 columnas */}
                    <div className="hidden md:grid grid-cols-3 gap-6 mb-16 justify-items-center max-w-6xl mx-auto">
                        {/* Card 1 */}
                        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Briefcase className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 1</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">🧳 PRIMER CONTACTO</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>La agencia te trae el huésped.</li>
                                                <li>Pagas comisión (normal).</li>
                                                <li>Capturas su email o lo ingresas a tu plataforma.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Mail className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 2</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">📧 FIDELIZACIÓN</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>Envías promoción directa desde tu sistema.</li>
                                                <li>Reserva contigo → Cero comisión.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Heart className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 3</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">💌 LEALTAD</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>Tu sistema lo recuerda automáticamente.</li>
                                                <li>Regresa otra vez → Cero comisión.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile: CardSlider */}
                    <CardSlider className="mb-16 md:hidden">
                        {/* Card 1 */}
                        <div className="relative h-full min-h-[500px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Briefcase className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 1</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">🧳 PRIMER CONTACTO</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>La agencia te trae el huésped.</li>
                                                <li>Pagas comisión (normal).</li>
                                                <li>Capturas su email o lo ingresas a tu plataforma.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative h-full min-h-[500px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Mail className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 2</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">📧 FIDELIZACIÓN</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>Envías promoción directa desde tu sistema.</li>
                                                <li>Reserva contigo → Cero comisión.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative h-full min-h-[500px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                            {/* Top Media Section */}
                            <div className="relative h-48 w-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 z-10"></div>
                                <Heart className="relative z-20 w-20 h-20 text-[#FF6B00] opacity-90" />
                            </div>

                            {/* Bottom Content Section */}
                            <div className="relative z-20 text-white flex flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex-grow">
                                <h3 className="font-bold text-xl font-playfair text-white mb-3 leading-tight">Año 3</h3>

                                <div className="text-gray-200 text-sm leading-relaxed font-medium">
                                    <div className="mb-4 text-gray-100 space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <p className="font-bold text-center mb-2 text-[#FF6B00]">💌 LEALTAD</p>
                                            <ul className="list-disc list-inside text-gray-300 mt-1 text-sm">
                                                <li>Tu sistema lo recuerda automáticamente.</li>
                                                <li>Regresa otra vez → Cero comisión.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardSlider>

                    <Tabs defaultValue="booking" className="w-full mb-16">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800 p-0.5 rounded-lg h-auto">
                            <TabsTrigger
                                value="booking"
                                className="data-[state=active]:bg-gray-900 data-[state=active]:text-white text-gray-400 font-bold text-xs md:text-base py-3 rounded-md transition-all"
                            >
                                <span className="text-lg md:text-xl mr-1 md:mr-2">❌</span>
                                <span className="hidden sm:inline">CLIENTE POR </span>AGENCIA
                            </TabsTrigger>
                            <TabsTrigger
                                value="sistema"
                                className="data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-gray-400 font-bold text-xs md:text-base py-3 rounded-md transition-all"
                            >
                                <span className="text-lg md:text-xl mr-1 md:mr-2">✅</span>
                                <span className="hidden sm:inline">Con&nbsp;</span>tu Sistema
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="booking" className="mt-0">
                            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
                                <div className="space-y-4 text-gray-400">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 1: Reserva 1</span>
                                        <span className="font-medium text-gray-200 text-sm md:text-base">$500 <span className="text-red-500 text-xs md:text-sm">(-$90)</span></span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 2: Reservas 2-3</span>
                                        <span className="font-medium text-gray-200 text-sm md:text-base">$1,000 <span className="text-red-500 text-xs md:text-sm">(-$180)</span></span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 3: Reservas 4-5</span>
                                        <span className="font-medium text-gray-200 text-sm md:text-base">$1,000 <span className="text-red-500 text-xs md:text-sm">(-$180)</span></span>
                                    </div>
                                    <div className="pt-4 mt-4 bg-black/50 p-4 rounded-lg">
                                        <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white mb-2 gap-1">
                                            <span className="text-sm md:text-base">TOTAL INGRESOS:</span>
                                            <span className="text-sm md:text-base">$2,500</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-red-500 mb-2 gap-1">
                                            <span className="text-sm md:text-base">COMISIÓN PERDIDA:</span>
                                            <span className="text-sm md:text-base">$450</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between text-xs md:text-sm text-gray-500 gap-1">
                                            <span>CONTACTO:</span>
                                            <span>NO TIENES</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="sistema" className="mt-0">
                            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-[#FF6B00]/30 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
                                <div className="space-y-4 text-gray-400 mt-8 md:mt-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 1: Reserva 1 (Agencia)</span>
                                        <span className="font-medium text-gray-200 text-sm md:text-base">$500 <span className="text-red-500 text-xs md:text-sm">(-$90)</span></span>
                                    </div>
                                    <div className="text-xs md:text-sm text-[#FF6B00] italic">✨ Capturas su email al check-in</div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 2: Promo Directa</span>
                                        <span className="font-medium text-green-400 text-sm md:text-base">$1,000 <span className="text-xs md:text-sm">($0 com)</span></span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-800 pb-2 gap-1">
                                        <span className="text-sm md:text-base">Año 3: Cliente Leal</span>
                                        <span className="font-medium text-green-400 text-sm md:text-base">$1,000 <span className="text-xs md:text-sm">($0 com)</span></span>
                                    </div>
                                    <div className="pt-4 mt-4 bg-[#FF6B00]/10 p-4 rounded-lg border border-[#FF6B00]/20">
                                        <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white mb-2 gap-1">
                                            <span className="text-sm md:text-base">TOTAL INGRESOS:</span>
                                            <span className="text-sm md:text-base">$2,500</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-green-400 mb-2 gap-1">
                                            <span className="text-sm md:text-base">COMISIÓN PERDIDA:</span>
                                            <span className="text-sm md:text-base">SOLO $90 (80% AHORRO)</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between text-xs md:text-sm text-gray-400 gap-1">
                                            <span>CONTACTO:</span>
                                            <span>EMAIL, WHATSAPP, HISTORIAL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Mobile: Tabs */}
                    <div className="md:hidden">
                        <Tabs defaultValue="local" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-800 p-0.5 rounded-lg h-auto">
                                <TabsTrigger
                                    value="local"
                                    className="data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-gray-400 font-bold text-xs py-3 rounded-md transition-all"
                                >
                                    <Search className="w-4 h-4 mr-1 inline" />
                                    LOCALES
                                </TabsTrigger>
                                <TabsTrigger
                                    value="internacional"
                                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400 font-bold text-xs py-3 rounded-md transition-all"
                                >
                                    <Globe className="w-4 h-4 mr-1 inline" />
                                    INTERNACIONAL
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="local" className="mt-0">
                                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-3xl">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-[#FF6B00] p-2 rounded-lg mr-3">
                                            <Search className="text-white w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Búsquedas Locales</h3>
                                    </div>
                                    <p className="text-[#FF6B00] font-bold text-xs uppercase tracking-wider mb-4">TU OPORTUNIDAD DIRECTA</p>

                                    <div className="space-y-3">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100 flex items-center">
                                            <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium text-sm">"hotel en [tu ciudad]"</span>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100 flex items-center">
                                            <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium text-sm">"dónde almorzar en [ciudad]"</span>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100 flex items-center">
                                            <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium text-sm">"hotel con piscina [zona]"</span>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100 flex items-center">
                                            <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium text-sm">"eventos hoy [ciudad]"</span>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="internacional" className="mt-0">
                                <div className="bg-gray-900 p-6 rounded-3xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full filter blur-3xl opacity-10 -mr-12 -mt-12"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-4">
                                            <div className="bg-blue-600 p-2 rounded-lg mr-3">
                                                <Globe className="text-white w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Búsquedas Internacionales</h3>
                                        </div>
                                        <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-4">DOMINIO DE OTAS (BOOKING, EXPEDIA, ETC)</p>

                                        <div className="space-y-3">
                                            <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center opacity-75">
                                                <Globe className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                                                <span className="text-gray-300 font-medium text-sm">"hotels in Ecuador"</span>
                                            </div>
                                            <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center opacity-75">
                                                <Globe className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                                                <span className="text-gray-300 font-medium text-sm">"best hotel Galapagos"</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 p-3 bg-blue-900/30 rounded-lg border border-blue-900/50">
                                            <p className="text-blue-200 text-xs italic">
                                                "Deja que ellos traigan al turista internacional. Tú enfócate en capturar al local y fidelizar al que llega."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Desktop: Side by side */}
                    <div className="hidden md:flex w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left Side: Local Searches (Your Opportunity) */}
                        <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 border-r border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#FF6B00] p-2 rounded-lg mr-3">
                                    <Search className="text-white w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Búsquedas Locales</h3>
                            </div>
                            <p className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider mb-6">TU OPORTUNIDAD DIRECTA</p>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 flex items-center transform hover:scale-105 transition-transform duration-300">
                                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                                    <span className="text-gray-700 font-medium">"hotel en [tu ciudad]"</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 flex items-center transform hover:scale-105 transition-transform duration-300">
                                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                                    <span className="text-gray-700 font-medium">"dónde almorzar en [ciudad]"</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 flex items-center transform hover:scale-105 transition-transform duration-300">
                                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                                    <span className="text-gray-700 font-medium">"hotel con piscina [zona]"</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 flex items-center transform hover:scale-105 transition-transform duration-300">
                                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                                    <span className="text-gray-700 font-medium">"eventos hoy [ciudad]"</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: International Searches (Booking Dominates) */}
                        <div className="w-full md:w-1/2 bg-gray-900 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10 -mr-16 -mt-16"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-600 p-2 rounded-lg mr-3">
                                        <Globe className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Búsquedas Internacionales</h3>
                                </div>
                                <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-6">DOMINIO DE OTAS (BOOKING, EXPEDIA, DESPEGAR)</p>

                                <div className="space-y-4">
                                    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex items-center opacity-75">
                                        <Globe className="w-5 h-5 text-gray-500 mr-3" />
                                        <span className="text-gray-300 font-medium">"hotels in Ecuador"</span>
                                    </div>
                                    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex items-center opacity-75">
                                        <Globe className="w-5 h-5 text-gray-500 mr-3" />
                                        <span className="text-gray-300 font-medium">"best hotel Galapagos"</span>
                                    </div>
                                </div>

                                <div className="mt-12 p-4 bg-blue-900/30 rounded-lg border border-blue-900/50">
                                    <p className="text-blue-200 text-sm italic">
                                        "Deja que ellos traigan al turista internacional. Tú enfócate en capturar al local y fidelizar al que llega."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 max-w-3xl mx-auto text-center">
                        <p className="text-lg font-medium text-gray-400">
                            La estrategia inteligente: Deja que Booking traiga turistas internacionales (para eso son buenos). <span className="text-[#FF6B00] font-bold">TÚ captura las búsquedas locales y convierte clientes de Booking en clientes leales directos.</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* SECCIÓN 7: PLANES SIMPLIFICADOS */}
            <section id="elige-tu-nivel-de-independencia" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-6">
                            Elige tu nivel de independencia
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Inversión única. Sin mensualidades ocultas. Sin comisiones por reserva. Todo queda a tu nombre desde el día 1. Dominio + Hosting incluido 2 años.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* PLAN PRO */}
                        <div className="min-h-[900px] md:min-h-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200">
                            <div className="p-8 border-b border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 font-playfair mb-2">PLAN PRO</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-bold text-[#FF6B00]">$700</span>
                                    <span className="text-gray-500 font-medium">USD</span>
                                </div>
                                <p className="text-sm text-gray-600 font-medium bg-gray-100 inline-block px-3 py-1 rounded-full">Para hoteles pequeños</p>
                            </div>
                            <div className="p-8 flex-grow space-y-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center"><span className="text-[#FF6B00] mr-2">✅</span> INCLUYE:</h4>

                                    <Accordion type="single" collapsible className="space-y-2">
                                        <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Tu Hotel Digital:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Hasta 10 páginas profesionales</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Sistema de reservas directo (cero comisiones, automatizado)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Código QR dinámico permanente</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Galería de fotos y servicios</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Autonomía Total:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Actualizaciones ilimitadas desde tu celular</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Panel de administración intuitivo</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Notificaciones WhatsApp instantáneas</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Propiedad y Seguridad:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> 1 año de dominio + hosting incluidos</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Todo queda a TU nombre (100% tuyo)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Capacitación personalizada (1 hora)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Soporte post-entrega: 30 días</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <p className="font-bold text-gray-800 mb-2 text-sm">👥 IDEAL PARA:</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Hostales o hoteles pequeños (menos de 10 habitaciones o máximo 13), enfocados solo en alojamiento.</p>
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <p className="font-bold text-green-800 mb-2 text-sm">💰 ROI PROYECTADO:</p>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>- 4-5 reservas directas/mes</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="p-8 pt-0">
                                <Link
                                    href={`/pago?amount=700&description=${encodeURIComponent("Plan Pro - Hotel Objetivo")}`}
                                    className="block w-full bg-gray-900 text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan Pro</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* PLAN DOMINANCIA LOCAL */}
                        <div className="min-h-[900px] md:min-h-0 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col border-2 border-[#FF6B00] relative transform md:-translate-y-4 z-10 mt-8 md:mt-0">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="bg-[#FF6B00] text-white text-xs md:text-sm font-bold px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg uppercase tracking-wide whitespace-nowrap z-20">⭐ Más Elegido</span>
                            </div>
                            <div className="p-8 border-b border-gray-100 bg-[#FF6B00]/5">
                                <h3 className="text-2xl font-bold text-gray-900 font-playfair mb-2">Plan Élite</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-bold text-[#FF6B00]">$1,800</span>
                                    <span className="text-gray-500 font-medium">USD</span>
                                </div>
                                <p className="text-sm text-gray-600 font-medium bg-white inline-block px-3 py-1 rounded-full border border-gray-200">🚀 Más BLOG de Posicionamiento ⭐</p>
                            </div>
                            <div className="p-8 flex-grow space-y-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center"><span className="text-[#FF6B00] mr-2">✅</span> TODO LO DEL PLAN PRO, MÁS:</h4>

                                    <Accordion type="single" collapsible className="space-y-2">
                                        <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Tu Hotel Digital Ampliado:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Hasta 20 páginas profesionales</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Sistema de reservas directo (cero comisiones, automatizado)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Secciones especiales: eventos, promociones</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Integración avanzada con redes sociales</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Posicionamiento Google Profesional:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Estudio profesional de 50+ palabras clave</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> 15 artículos SEO-optimizados</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Blog activo para búsquedas locales</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Optimización Google My Business completo</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                                            <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline py-3">
                                                Resultados Medibles:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-600 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Aparece en búsquedas locales (mes 3-6)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Tráfico orgánico: 200-500 visitas/mes</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Conversión: 6-25 reservas/mes</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <p className="font-bold text-gray-800 mb-2 text-sm">👥 IDEAL PARA:</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">Hoteles de 10-40 habitaciones que quieren dominar las búsquedas locales y captar huéspedes directos.</p>
                                </div>

                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <p className="font-bold text-green-800 mb-2 text-sm">💰 ROI PROYECTADO:</p>
                                    <ul className="space-y-1 text-sm text-green-700">
                                        <li>- 10-15 reservas directas/mes</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="p-8 pt-0">
                                <Link
                                    href={`/pago?amount=1800&description=${encodeURIComponent("Plan Élite - Hotel Objetivo")}`}
                                    className="block w-full bg-[#FF6B00] text-white text-center font-bold py-4 px-6 rounded-xl hover:bg-[#E66000] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan Élite</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* PLAN DOMINIO TOTAL */}
                        <div className="min-h-[900px] md:min-h-0 bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-800">
                            <div className="p-8 border-b border-gray-800">
                                <h3 className="text-2xl font-bold text-white font-playfair mb-2">Plan Imperio</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-5xl font-bold text-[#FFD700]">$2,800</span>
                                    <span className="text-gray-400 font-medium">USD</span>
                                </div>
                                <p className="text-sm text-gray-300 font-medium bg-gray-800 inline-block px-3 py-1 rounded-full">👑 Más Contenido para ser La Referencia (+Páginas, +Artículos)</p>
                            </div>
                            <div className="p-8 flex-grow space-y-8">
                                <div>
                                    <h4 className="font-bold text-white mb-4 flex items-center"><span className="text-[#FFD700] mr-2">✅</span> TODO LO DEL PLAN ÉLITE, MÁS:</h4>

                                    <Accordion type="single" collapsible className="space-y-2">
                                        <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-4 bg-gray-800/30">
                                            <AccordionTrigger className="text-left font-semibold text-[#FFD700] hover:no-underline py-3">
                                                Tu Imperio Digital:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-300 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Hasta 40 páginas (hotel + restaurante)</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Menú digital completo integrado</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Galería premium con videos</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-4 bg-gray-800/30">
                                            <AccordionTrigger className="text-left font-semibold text-[#FFD700] hover:no-underline py-3">
                                                Posicionamiento IA & Regional:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-300 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> ChatGPT, Claude, Perplexity optimizados</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Estrategia de contenido para LLMs</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> 30 artículos SEO-optimizados</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-4 bg-gray-800/30">
                                            <AccordionTrigger className="text-left font-semibold text-[#FFD700] hover:no-underline py-3">
                                                Propiedad Premium:
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="space-y-2 text-sm text-gray-300 pb-3">
                                                    <li className="flex items-start"><span className="mr-2">•</span> Soporte post-entrega: 90 días</li>
                                                    <li className="flex items-start"><span className="mr-2">•</span> Actualizaciones de contenido (6 meses)</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mt-4">
                                        <p className="font-bold text-[#FFD700] mb-1 text-sm">🎁 BONUS EXCLUSIVO:</p>
                                        <p className="text-sm text-gray-300">12 meses de informes mensuales de rendimiento (Valor $1,800)</p>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                                    <p className="font-bold text-white mb-2 text-sm">👥 IDEAL PARA:</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">Hoteles boutique o cadenas (20-80 hab) que quieren ser LA REFERENCIA y ven 5 años adelante.</p>
                                </div>

                                <div className="bg-green-900/30 p-4 rounded-xl border border-green-900/50">
                                    <p className="font-bold text-green-400 mb-2 text-sm">💰 ROI PROYECTADO:</p>
                                    <ul className="space-y-1 text-sm text-green-300">
                                        <li>- 20-30 reservas directas/mes</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="p-8 pt-0">
                                <Link
                                    href={`/pago?amount=2800&description=${encodeURIComponent("Plan Imperio - Hotel Objetivo")}`}
                                    className="block w-full bg-[#FFD700] text-gray-900 text-center font-bold py-4 px-6 rounded-xl hover:bg-[#F4C430] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="flex flex-col items-center justify-center space-y-1">
                                        <span className="text-lg">Seleccionar Plan Imperio</span>
                                        <span className="text-xs font-normal opacity-90 max-w-xs leading-tight">
                                            Adquiere tu paquete, paga de contado o difiere a 3, 6, 9 y 12 meses*
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div >

                    {/* TABLA COMPARATIVA */}
                    < div className="mt-16 max-w-5xl mx-auto" >
                        <div className="text-center mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">📊 COMPARACIÓN RÁPIDA</h3>
                        </div>


                        {/* MOBILE: Tabs Version */}
                        <div className="md:hidden">
                            <Tabs defaultValue="dominancia" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-100 p-0.5 rounded-lg h-auto gap-0.5">
                                    <TabsTrigger
                                        value="pro"
                                        className="data-[state=active]:bg-gray-900 data-[state=active]:text-white text-gray-700 font-bold text-[10px] py-2 px-1 rounded-md transition-all"
                                    >
                                        Pro
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="dominancia"
                                        className="data-[state=active]:bg-[#FF6B00] data-[state=active]:text-white text-gray-700 font-bold text-[10px] py-2 px-1 rounded-md transition-all"
                                    >
                                        Élite ⭐
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="dominio"
                                        className="data-[state=active]:bg-gray-900 data-[state=active]:text-white text-gray-700 font-bold text-[10px] py-2 px-1 rounded-md transition-all"
                                    >
                                        Imperio 👑
                                    </TabsTrigger>
                                </TabsList>

                                {/* PLAN PRO */}
                                <TabsContent value="pro" className="mt-0">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                                        <div className="bg-gray-900 text-white p-4 text-center">
                                            <h4 className="text-xl font-bold">PLAN PRO</h4>
                                            <p className="text-3xl font-bold text-white mt-2">$700</p>
                                            <p className="text-sm text-gray-300 mt-1">Para hoteles pequeños (5-15 hab)</p>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Páginas web</span>
                                                <span className="text-sm font-bold text-gray-900">10</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Sistema reservas</span>
                                                <span className="text-sm text-gray-900">--</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Código QR</span>
                                                <span className="text-sm text-gray-900">✅</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Actualizaciones en menu digital</span>
                                                <span className="text-sm text-gray-900">Ilimitado</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Dominio + Hosting</span>
                                                <span className="text-sm text-gray-900">1 año</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Keywords</span>
                                                <span className="text-sm text-gray-900">Básico</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Artículos blog</span>
                                                <span className="text-sm text-gray-400">--</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Google My Business</span>
                                                <span className="text-sm text-gray-900">Básico</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Posicionamiento IA</span>
                                                <span className="text-sm font-bold text-gray-900">✅ ChatGPT/Claude</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Informes (12 m)</span>
                                                <span className="text-sm text-gray-900">✅ Mensuales</span>
                                            </div>

                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Propiedad tuya</span>
                                                <span className="text-sm font-bold text-gray-900">✅ 100%</span>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>

                                {/* PLAN DOMINANCIA */}
                                <TabsContent value="dominancia" className="mt-0">
                                    <div className="bg-white rounded-2xl shadow-xl border-2 border-[#FF6B00] overflow-hidden">
                                        <div className="bg-[#FF6B00] text-white p-4 text-center">
                                            <h4 className="text-xl font-bold">PLAN ÉLITE</h4>
                                            <p className="text-3xl font-bold text-white mt-2">$1,800</p>
                                            <p className="text-sm text-orange-100 mt-1">🚀 Más BLOG de Posicionamiento (Domina tu Ciudad)</p>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Páginas web</span>
                                                <span className="text-sm font-bold text-gray-900">20</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Sistema reservas</span>
                                                <span className="text-sm text-gray-900">✅</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Código QR</span>
                                                <span className="text-sm text-gray-900">✅</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Actualizaciones en menu digital</span>
                                                <span className="text-sm text-gray-900">Ilimitado</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Dominio + Hosting</span>
                                                <span className="text-sm text-gray-900">2 años</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Keywords</span>
                                                <span className="text-sm font-bold text-[#FF6B00]">50+</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Artículos blog</span>
                                                <span className="text-sm font-bold text-[#FF6B00]">15</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Google My Business</span>
                                                <span className="text-sm font-bold text-[#FF6B00]">Completo</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Posicionamiento IA</span>
                                                <span className="text-sm font-bold text-gray-900">✅ ChatGPT/Claude</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Informes (12 m)</span>
                                                <span className="text-sm font-bold text-gray-900">✅ Mensuales</span>
                                            </div>

                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-sm font-medium text-gray-700">Propiedad tuya</span>
                                                <span className="text-sm font-bold text-gray-900">✅ 100%</span>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>

                                {/* PLAN DOMINIO TOTAL */}
                                <TabsContent value="dominio" className="mt-0">
                                    <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
                                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 text-center">
                                            <h4 className="text-xl font-bold">PLAN IMPERIO</h4>
                                            <p className="text-3xl font-bold text-[#FFD700] mt-2">$2,800</p>
                                            <p className="text-sm text-gray-300 mt-1">👑 Más Contenido para ser La Referencia (+Páginas, +Artículos)</p>
                                        </div>
                                        <div className="p-4 space-y-3 bg-gray-900 text-white">
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Páginas web</span>
                                                <span className="text-sm font-bold text-[#FFD700]">40</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Sistema reservas</span>
                                                <span className="text-sm text-white">✅</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Código QR</span>
                                                <span className="text-sm text-white">✅</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Actualizaciones en menu digital</span>
                                                <span className="text-sm text-white">Ilimitado</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Dominio + Hosting</span>
                                                <span className="text-sm text-white">2 años</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Keywords</span>
                                                <span className="text-sm font-bold text-[#FFD700]">100+</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Artículos blog</span>
                                                <span className="text-sm font-bold text-[#FFD700]">30</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Google My Business</span>
                                                <span className="text-sm font-bold text-[#FFD700]">Premium</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Posicionamiento IA</span>
                                                <span className="text-sm font-bold text-[#FFD700]">✅ ChatGPT/Claude</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Informes (12 m)</span>
                                                <span className="text-sm font-bold text-[#FFD700]">✅ Mensuales</span>
                                            </div>

                                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                                <span className="text-sm font-medium text-gray-300">Propiedad tuya</span>
                                                <span className="text-sm font-bold text-white">✅ 100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* DESKTOP: Table Version */}
                        <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="p-3 md:p-4 font-bold text-sm md:text-base text-gray-900">Característica</th>
                                        <th className="p-3 md:p-4 font-bold text-sm md:text-base text-gray-900 text-center">Pro</th>
                                        <th className="p-3 md:p-4 font-bold text-sm md:text-base text-[#FF6B00] text-center bg-[#FF6B00]/5">Élite ⭐</th>
                                        <th className="p-3 md:p-4 font-bold text-sm md:text-base text-gray-900 text-center bg-gray-900 text-white">Imperio 👑</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs md:text-sm">
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Precio</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900">$700</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">$1,800</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">$2,800</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Páginas web</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">10</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">20</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">40</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Sistema reservas</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">--</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">✅</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">✅</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Código QR</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">✅</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">✅</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">✅</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Actualizaciones en menu digital</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">Ilimitado</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">Ilimitado</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">Ilimitado</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Dominio + Hosting</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">1 año</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">2 años</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">2 años</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Keywords</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">Básico</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">50+</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">100+</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Artículos blog</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-400">--</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">15</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">30</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Google My Business</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">Básico</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">Completo</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">Premium</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Posicionamiento IA</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 font-bold">✅ ChatGPT/Claude</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 font-bold bg-[#FF6B00]/5">✅ ChatGPT/Claude</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">✅ ChatGPT/Claude</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Informes (12 m)</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 font-bold">✅ Mensuales</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 font-bold bg-[#FF6B00]/5">✅ Mensuales</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">✅ Mensuales</td>
                                    </tr>

                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Propiedad tuya</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900">✅ 100%</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-[#FF6B00]/5">✅ 100%</td>
                                        <td className="p-2.5 md:p-3 text-center font-bold text-gray-900 bg-gray-50">✅ 100%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Ideal para</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">Máx 13 hab</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">10-40 hab</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">20-80 hab</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-2.5 md:p-3 font-medium text-gray-700">Ideal para</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900">Máx 13 hab</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-[#FF6B00]/5">10-40 hab</td>
                                        <td className="p-2.5 md:p-3 text-center text-gray-900 bg-gray-50">20-80 hab</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-center text-gray-600 mt-4 text-xs md:text-sm">
                            Todos los planes incluyen: Capacitación personalizada, código fuente 100% tuyo, cero dependencia de nosotros después de la entrega, actualizaciones ilimitadas desde tu celular, sistema de reservas sin comisiones.
                        </p>
                    </div >
                </div >
            </section >


            {/* BONUS BOMBAZO */}
            < section className="py-12 md:py-20 px-4 bg-white" >
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900 text-white rounded-2xl md:rounded-3xl p-5 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#FFD700] text-gray-900 font-bold px-2 md:px-6 py-1 md:py-2 rounded-bl-xl shadow-lg text-[9px] md:text-sm">
                            SOLO DOMINIO TOTAL
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg md:text-3xl font-bold text-[#FFD700] mb-4 md:mb-6 font-playfair mt-4 md:mt-0">
                                🎁 12 Meses de Informes y Mantenimiento
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-2xl">
                                No solo te entregamos la web. Mantenemos tu sistema actualizado y te enviamos reportes detallados desde $120 anuales, dependiendo del plan adquirido.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                                <div>
                                    <h4 className="font-bold text-white text-sm md:text-base mb-3 md:mb-4 flex items-center gap-2">📊 REPORTE DE RENDIMIENTO:</h4>
                                    <ul className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm">
                                        <li className="flex items-start"><span className="mr-2 text-[#FFD700]">1.</span> Tráfico del Mes (visitas, tiempo, origen)</li>
                                        <li className="flex items-start"><span className="mr-2 text-[#FFD700]">2.</span> Posicionamiento Google (keywords, ranking)</li>
                                        <li className="flex items-start"><span className="mr-2 text-[#FFD700]">3.</span> Conversiones (reservas, ahorro comisiones)</li>
                                        <li className="flex items-start"><span className="mr-2 text-[#FFD700]">4.</span> Recomendaciones Personalizadas</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700 flex flex-col justify-center">
                                    <p className="text-center text-gray-300 mb-2 text-xs md:text-base">Por qué lo hacemos:</p>
                                    <p className="text-center font-bold text-white text-sm md:text-lg">Porque queremos que veas resultados medibles y tengas datos reales.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12 text-center">
                        <p className="text-base md:text-xl font-medium text-gray-800 px-2">
                            Ahora que sabes que tu inversión está protegida y que recibes más de lo que pagas... déjame hacerte las preguntas que realmente importan.
                        </p>
                    </div>
                </div>
            </section >



            {/* SECCIÓN 10: PREGUNTAS FRECUENTES (OBJECIONES) */}
            < section className="py-20 px-4 bg-gray-50" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
                            Las excusas que te están costando $88,200 al año
                        </h2>
                        <p className="text-lg text-gray-600">
                            No son preguntas. Son las voces en tu cabeza que te mantienen atado a Booking. Vamos a destruirlas una por una.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {/* Objeción 1 */}
                        <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "Es mucho dinero para mi hotel pequeño"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>Mientras "esperas a tener dinero", cada mes pagas $7,350 en comisiones a Booking (hotel promedio). En el tiempo que tardas en "ahorrar" los $700, ya perdiste $14,700.</p>
                                <p className="font-bold">La pregunta correcta es: "¿Puedo permitirme PERDER $7,350 cada mes?"</p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Objeción 2 */}
                        <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "No sé si funcionará para mi zona/ciudad"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>Datos reales: "hotel en [ciudad]" tiene miles de búsquedas. Tu competencia que YA tiene sitio web está capturando esas búsquedas. Tú no apareces.</p>
                                <p className="font-bold">Funciona en Loja, Cuenca, Ambato, Riobamba, Machala, y hasta en pueblos de 10,000 habitantes.</p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Objeción 3 */}
                        <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "Lo haré después, ahora no tengo tiempo"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>Si esperas 3 meses más: $21,780 perdidos en comisiones. Nosotros hacemos todo el trabajo (80 horas nuestras vs 4 horas tuyas).</p>
                                <p className="font-bold">¿No tienes 4 horas en 14 días para recuperar $88,200/año?</p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Objeción 4 */}
                        <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "¿Y si contrato y no me gusta cómo queda?"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>Trabajamos con AVANCES SEMANALES. No es "paga y reza". Ves el diseño, el sistema, el contenido. Solo pagas el 40% final cuando ESTÉS SATISFECHO.</p>
                                <p className="font-bold">¿Booking te preguntó si te gustaba su comisión del 18%?</p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Objeción 5 */}
                        <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "Lo puedo hacer yo mismo más barato"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>Costo real "hazlo tú mismo": 150 horas de tu vida + $1,395/año en herramientas. Y terminarás con un WordPress lento que no posiciona.</p>
                                <p className="font-bold">Eres bueno administrando hoteles. Nosotros construyendo sistemas que venden.</p>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Objeción 6 */}
                        <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border-0">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-xl">
                                <span className="text-left font-bold text-gray-900">❓ "Déjame pensarlo unos días"</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 space-y-3">
                                <p>"Pensarlo" es código para "tengo miedo". ¿A qué le tienes más miedo? ¿A invertir $700 o a seguir perdiendo $88,200/año?</p>
                                <p className="font-bold">En 2026, mirarás atrás y pensarás: "Menos mal que tomé esa decisión hoy." O... "Ojalá hubiera actuado."</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section >

            {/* CTA FINAL */}
            < section id="formulario" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black text-white" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Comienza Tu Transformación Digital Hoy</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Columna izquierda - Beneficios */}
                        <div className="space-y-6">
                            <p className="text-xl text-gray-200 mb-6">
                                Deja de pagar comisiones innecesarias y toma control total de tu negocio hotelero.
                            </p>

                            {/* Beneficios */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                                <div className="text-xl font-medium mb-4 text-center">✅ Lo que obtienes:</div>

                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-[#FF6B00] mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Inversión única (sin mensualidades)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-[#FF6B00] mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Sistema de reservas directo (0% comisiones)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-[#FF6B00] mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Dominio y hosting a TU nombre (2 años incluidos)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-[#FF6B00] mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Actualizaciones ilimitadas desde tu celular</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="h-5 w-5 text-[#FF6B00] mt-0.5 mr-2 flex-shrink-0" />
                                        <span>Código 100% tuyo (propiedad total)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Garantía y botones - SOLO DESKTOP */}
                            <div className="hidden md:block space-y-6">
                                <p className="text-gray-300 text-sm">
                                    <span className="font-semibold text-white">Garantía:</span> Pago dividido 60/40. Ves avances semanales. Solo pagas el 40% final cuando estés 100% satisfecho.
                                </p>

                                {/* Botones de contacto */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://wa.me/593963410409?text=Hola%2C%20quiero%20mi%20sistema%20para%20hotel%20ahora"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.77-1.66-2.07-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.016a9.6 9.6 0 01-5.2-1.524l-.366-.219-3.735.982.998-3.648-.235-.374a9.6 9.6 0 01-1.51-5.127 9.7 9.7 0 0110.09-9.6 9.7 9.7 0 019.6 10.09 9.7 9.7 0 01-9.6 9.6z" fillRule="evenodd" clipRule="evenodd" /></svg>
                                        WhatsApp
                                    </a>
                                    <a
                                        href="https://calendly.com/cesarreyesjaramillo/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 shadow-lg flex items-center justify-center border border-gray-200"
                                    >
                                        📞 Llamada
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - Formulario */}
                        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Solicita Información
                            </h3>

                            {submitStatus === 'success' ? (
                                <div className="text-center py-10">
                                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                        <Check className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Recibida!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Hemos recibido tus datos correctamente. Un especialista te contactará en menos de 24 horas laborables.
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus('idle')}
                                        className="text-[#FF6B00] font-bold hover:underline"
                                    >
                                        Enviar otra solicitud
                                    </button>
                                </div>
                            ) : (
                                <form id="formulario-hotel-objetivo" className="space-y-5" onSubmit={handleSubmit}>
                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                                            <strong className="font-bold">Error: </strong>
                                            <span className="block sm:inline">{errorMessage}</span>
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                            Nombre completo <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-gray-900 disabled:bg-gray-100"
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
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-gray-900 disabled:bg-gray-100"
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
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-gray-900 disabled:bg-gray-100"
                                            placeholder="Ejemplo: 593987654321"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="tipo_hotel" className="block text-sm font-medium text-gray-700 mb-1">
                                            Tipo de establecimiento <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="tipo_hotel"
                                            name="tipo_hotel"
                                            required
                                            value={formData.tipo_hotel}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-gray-900 disabled:bg-gray-100"
                                        >
                                            <option value="">Selecciona una opción</option>
                                            <option value="Hostal">Hostal</option>
                                            <option value="Hotel pequeño (5-15 hab)">Hotel pequeño (5-15 hab)</option>
                                            <option value="Hotel mediano (16-40 hab)">Hotel mediano (16-40 hab)</option>
                                            <option value="Hotel grande (40+ hab)">Hotel grande (40+ hab)</option>
                                            <option value="Hotel boutique">Hotel boutique</option>
                                            <option value="Otro">Otro (especificar en comentarios)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="plan_interes" className="block text-sm font-medium text-gray-700 mb-1">
                                            Plan de interés
                                        </label>
                                        <select
                                            id="plan_interes"
                                            name="plan_interes"
                                            value={formData.plan_interes}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] text-gray-900 disabled:bg-gray-100"
                                        >
                                            <option value="">Selecciona un plan (opcional)</option>
                                            <option value="Plan Pro - $700">Plan Pro - $700</option>
                                            <option value="Plan Elite - $1,800">Plan Élite - $1,800</option>
                                            <option value="Plan Imperio - $2,800">Plan Imperio - $2,800</option>
                                            <option value="Aún no estoy seguro">Aún no estoy seguro</option>
                                        </select>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terminos"
                                                name="terminos"
                                                type="checkbox"
                                                required
                                                checked={formData.terminos}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                                className="h-4 w-4 text-[#FF6B00] focus:ring-[#FF6B00] border-gray-300 rounded"
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
                                        className={`w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#FF6B00] to-[#E66000] hover:from-[#E66000] hover:to-[#CC5500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B00] transition-all duration-200 transform hover:scale-[1.02] shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Enviando...' : (
                                            <>
                                                <span>SOLICITAR INFORMACIÓN</span>
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        Al hacer clic, te contactaremos en 24h para confirmar detalles.
                                        <br />
                                        No se requiere pago hasta que confirmes.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Garantía y botones - SOLO MÓVIL (después del formulario) */}
                    <div className="md:hidden mt-8 space-y-6">
                        <p className="text-gray-300 text-sm text-center px-4">
                            <span className="font-semibold text-white">Garantía:</span> Pago dividido 60/40. Ves avances semanales. Solo pagas el 40% final cuando estés 100% satisfecho.
                        </p>

                        {/* Botones de contacto */}
                        <div className="flex flex-col gap-4 px-4">
                            <a
                                href="https://wa.me/593963410409?text=Hola%2C%20quiero%20mi%20sistema%20para%20hotel%20ahora"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.77-1.66-2.07-.173-.297-.018-.458.132-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.016a9.6 9.6 0 01-5.2-1.524l-.366-.219-3.735.982.998-3.648-.235-.374a9.6 9.6 0 01-1.51-5.127 9.7 9.7 0 0110.09-9.6 9.7 9.7 0 019.6 10.09 9.7 9.7 0 01-9.6 9.6z" fillRule="evenodd" clipRule="evenodd" /></svg>
                                WhatsApp
                            </a>
                            <a
                                href="https://calendly.com/cesarreyesjaramillo/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 shadow-lg flex items-center justify-center border border-gray-200"
                            >
                                📞 Llamada
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            {/* Cross-link to MenuObjetivo */}
            < section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-white border-t border-gray-200" >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                        ¿También tienes un <span className="text-[#FF6B00]">Restaurante</span>?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Digitaliza tu menú con la misma facilidad. Código QR, actualización en tiempo real y pedidos directos por WhatsApp.
                    </p>
                    <a
                        href="/MenuObjetivo"
                        className="inline-flex items-center bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 text-lg"
                    >
                        Conoce MenúObjetivo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <p className="text-sm text-gray-500 mt-4">Sin comisiones por pedido · Actualizable desde tu celular</p>
                </div>
            </section >
        </div >
    );
};

export default HotelObjetivoClient;
