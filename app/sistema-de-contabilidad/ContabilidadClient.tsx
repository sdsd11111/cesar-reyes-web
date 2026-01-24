'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Smartphone, Database, Star, MessageCircle, Clock, TrendingUp, ShieldCheck, Monitor, CloudOff, FileCode, Users, Banknote, Headphones, FileSpreadsheet } from 'lucide-react';
import Link from 'next/link';

export default function ContabilidadClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

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
            tipo_restaurante: "Hostería/Hotel",
            terminos: formData.get('terminos') === 'on',
            campaign: 'sistema-de-contabilidad'
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
            const formElement = document.getElementById('formulario-contabilidad') as HTMLFormElement;
            if (formElement) {
                formElement.reset();
            }
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitError(error.message || 'Error al enviar el formulario.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToForm = () => {
        const formElement = document.getElementById('reserva');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-montserrat">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20">
                {/* Background Overlay / Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-600/10 blur-[120px] rounded-full z-0"></div>

                <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-xs font-extrabold uppercase tracking-widest border border-orange-500/20">
                            <ShieldCheck className="w-4 h-4" /> Especializado en Hotelería
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeIn font-poiret-one">
                            Vas a olvidarte de las <span className="text-orange-500">facturas perdidas</span> en el celular
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-xl">
                            Recupera <span className="font-bold text-white">12 horas de tu mes</span>. Un sistema diseñado para <span className="underline decoration-orange-500 underline-offset-8">Hosterías, Hostales y Pequeños Hoteles</span> que buscan control total sin mensualidades.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <Button
                                onClick={scrollToForm}
                                size="lg"
                                className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-8 rounded-full font-bold shadow-lg shadow-orange-900/20 transform transition hover:scale-105"
                            >
                                👉 Quiero control total
                            </Button>
                            <div className="flex items-center gap-4 px-4">
                                <div className="flex -space-x-3">
                                    <img src="/images/sistema-contabilidad/logo-enloja.webp" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-white object-contain" alt="Ref 1" />
                                    <img src="/images/sistema-contabilidad/logo-lossartenes.webp" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-white object-contain" alt="Ref 2" />
                                    <div className="w-10 h-10 rounded-full bg-orange-600 border-2 border-[#1a1a1a] flex items-center justify-center text-[10px] text-white font-bold">+15</div>
                                </div>
                                <span className="text-sm font-medium text-gray-400">Confían en nuestra reingeniería</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl shadow-2xl border border-gray-800 overflow-hidden bg-gray-900 aspect-video">
                            <img src="/images/sistema-contabilidad/hero-dashboard.jpeg" alt="Dashboard Hero" className="w-full h-full object-cover transform transition hover:scale-105 duration-1000 opacity-80" />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Center of Command Section */}
            <section className="py-24 bg-[#121212] overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-poiret-one">Tu centro de mando financiero</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Toda la rentabilidad de tu hostería en una sola pantalla. Local, rápido y privado.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative z-10 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden aspect-video">
                            <img src="/images/sistema-contabilidad/mockup-dashboard.jpeg" alt="Mando Financiero Dashboard" className="w-full h-full object-cover opacity-90" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-600/5 blur-[120px] rounded-full -z-0"></div>
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-24 bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight font-poiret-one">
                                El sistema se paga solo en <span className="text-orange-500">4 meses</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                No es un gasto, es una inversión en tu tiempo. Mientras otros pierden horas en cuadernos, tú tienes el control en un clic.
                            </p>

                            <div className="grid gap-6">
                                <div className="bg-[#232323] p-8 rounded-2xl border border-gray-800 flex items-center justify-between group hover:border-orange-500/30 transition-colors">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center border border-orange-500/20">
                                            <Clock className="w-7 h-7" />
                                        </div>
                                        <span className="font-bold text-2xl text-gray-200 font-poiret-one">Tiempo ahorrado/mes</span>
                                    </div>
                                    <span className="text-3xl font-black text-orange-500">12 Horas</span>
                                </div>
                                <div className="bg-[#232323] p-8 rounded-2xl border border-gray-800 flex items-center justify-between group hover:border-orange-500/30 transition-colors">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center border border-green-500/20">
                                            <TrendingUp className="w-7 h-7" />
                                        </div>
                                        <span className="font-bold text-2xl text-gray-200 font-poiret-one">Ahorro mensual est.</span>
                                    </div>
                                    <span className="text-3xl font-black text-green-500">~$180</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="p-8 lg:p-12 rounded-[2.5rem] bg-[#121212] border border-gray-800 relative overflow-hidden shadow-2xl">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-10 font-poiret-one">Comparativa de Inversión</h3>
                                    <div className="space-y-10">
                                        <div>
                                            <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-widest text-gray-400">
                                                <span>Inversión Única</span>
                                                <span className="text-orange-500 text-xl font-bold">$800</span>
                                            </div>
                                            <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                                                <div className="bg-orange-600 h-full rounded-full w-full"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-widest text-gray-400">
                                                <span>Software Genérico (18 meses)</span>
                                                <span className="text-red-500 text-xl font-bold">+$1,200</span>
                                            </div>
                                            <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                                                <div className="bg-red-500/50 h-full rounded-full w-[85%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                                        <p className="text-orange-400 font-bold text-xl font-poiret-one">"A partir del mes 5, todo es ganancia neta para tu hostería"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="py-24 bg-[#121212] border-y border-gray-800">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 font-poiret-one">¿Es esto para ti?</h2>
                        <p className="text-gray-400 text-lg">Queremos trabajar con clientes que realmente se beneficien de nuestra solución.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8 p-10 bg-[#1a1a1a] rounded-3xl border-l-4 border-green-500 shadow-xl">
                            <h4 className="text-green-500 font-bold flex items-center gap-3 text-2xl font-poiret-one">
                                <Check className="w-6 h-6" /> ES PARA TI SI:
                            </h4>
                            <ul className="space-y-5 text-gray-300 text-lg font-light">
                                <li className="flex gap-4"><span>•</span> Tienes hasta 20 habitaciones.</li>
                                <li className="flex gap-4"><span>•</span> Buscas simplicidad ante todo.</li>
                                <li className="flex gap-4"><span>•</span> Quieres ser dueño de tus datos (local).</li>
                                <li className="flex gap-4"><span>•</span> El internet en tu zona no es 100% fiable.</li>
                            </ul>
                        </div>
                        <div className="space-y-8 p-10 bg-[#1a1a1a] rounded-3xl border-l-4 border-red-500 shadow-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <h4 className="text-red-500 font-bold flex items-center gap-3 text-2xl font-poiret-one">
                                NO ES PARA TI SI:
                            </h4>
                            <ul className="space-y-5 text-gray-400 text-lg font-light">
                                <li className="flex gap-4"><span>•</span> Necesitas facturación electrónica SRI integrada.</li>
                                <li className="flex gap-4"><span>•</span> Requieres contabilidad profesional multisucursal.</li>
                                <li className="flex gap-4"><span>•</span> Buscas un ERP corporativo complejo.</li>
                                <li className="flex gap-4"><span>•</span> Necesitas apps móviles nativas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & Form */}
            <section id="reserva" className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">

                        <div className="lg:w-1/2 flex flex-col">
                            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white font-poiret-one">Módulo Control Financiero</h2>
                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border border-white/20 flex-1 flex flex-col justify-between">
                                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <Monitor className="w-5 h-5" />
                                        </div>
                                        <p className="text-white font-medium">Instalación local (PC/Mac/Linux)</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <CloudOff className="w-5 h-5" />
                                        </div>
                                        <p className="text-white font-medium">Funciona 100% sin internet</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <FileCode className="w-5 h-5" />
                                        </div>
                                        <p className="text-white font-medium">Incluye Código Fuente</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <p className="text-white font-medium">Capacitación incluida (1.5h)</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h5 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-4">BONOS EXCLUSIVOS ESTE MES</h5>
                                    <div className="space-y-4">
                                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex gap-5 items-center group hover:bg-white/20 transition-all">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-xl">
                                                <Banknote className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-lg font-poiret-one">Bono 1: Descuento Anticipado</p>
                                                <p className="text-sm text-white/70">Paga $760 total si liquidas al inicio (ahorras $40)</p>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex gap-5 items-center group hover:bg-white/20 transition-all">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-xl">
                                                <Headphones className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-lg font-poiret-one">Bono 2: Soporte Prioritario</p>
                                                <p className="text-sm text-white/70">2 horas de soporte directo el primer mes (valor $30)</p>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-white/10 border border-white/10 flex gap-5 items-center group hover:bg-white/20 transition-all">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-xl">
                                                <FileSpreadsheet className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-lg font-poiret-one">Bono 3: Plantilla de Migración</p>
                                                <p className="text-sm text-white/70">Guía Excel para cargar tus datos actuales rápido</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="text-center sm:text-left">
                                        <span className="text-white/70 text-sm font-bold uppercase tracking-widest block mb-1">Inversión Única</span>
                                        <div className="flex items-start justify-center sm:justify-start">
                                            <span className="text-2xl font-bold text-white mt-1 leading-none">$</span>
                                            <span className="text-7xl font-black text-white leading-none tracking-tighter">800</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-orange-700/50 rounded-2xl border border-white/10 text-center">
                                        <p className="font-bold text-xl font-poiret-one">Implementación en 4 semanas</p>
                                        <p className="text-sm text-orange-100 italic">Ocupa un cupo este mes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col">
                            <div className="bg-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-gray-800 h-full">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-orange-500">
                                    <Database className="w-56 h-56" />
                                </div>
                                <h3 className="text-3xl font-bold mb-10 text-center text-orange-800 font-poiret-one uppercase tracking-widest">Solicitar Cotización</h3>

                                {submitSuccess ? (
                                    <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Check className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-green-800 mb-3">¡Solicitud Enviada!</h4>
                                        <p className="text-gray-600 text-lg">
                                            Nos pondremos en contacto contigo lo antes posible para analizar tu proyecto de reingeniería financiera.
                                        </p>
                                    </div>
                                ) : (
                                    <form id="formulario-contabilidad" onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                        <div className="space-y-3">
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nombre Completo</label>
                                            <input required name="nombre" type="text" className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 outline-none text-gray-900 bg-gray-50/50 transition-all font-medium" placeholder="Tu nombre" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">WhatsApp de Contacto</label>
                                            <input required name="telefono" type="tel" className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 outline-none text-gray-900 bg-gray-50/50 transition-all font-medium" placeholder="099..." />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Correo Corporativo</label>
                                            <input required name="email" type="email" className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/5 outline-none text-gray-900 bg-gray-50/50 transition-all font-medium" placeholder="tucorreo@empresa.com" />
                                        </div>

                                        <div className="flex items-start gap-4 p-2">
                                            <div className="flex items-center h-6">
                                                <input
                                                    id="terminos"
                                                    name="terminos"
                                                    type="checkbox"
                                                    required
                                                    className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded-lg"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="terminos" className="font-medium text-gray-500 italic">
                                                    Autorizo el tratamiento de mis datos personales para recibir información sobre servicios de reingeniería.
                                                </label>
                                            </div>
                                        </div>

                                        {submitError && (
                                            <div className="text-red-600 text-sm p-4 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3">
                                                <Star className="w-4 h-4 fill-red-600" /> {submitError}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-xl rounded-2xl mt-6 shadow-2xl transform transition hover:-translate-y-1"
                                        >
                                            {isSubmitting ? 'Enviando...' : 'SOLICITAR REINGENIERÍA'}
                                        </Button>

                                        <p className="text-xs text-gray-400 text-center mt-6 font-bold tracking-widest uppercase">
                                            * ÚNICAMENTE 3 CUPOS DE IMPLEMENTACIÓN MENSUAL.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / FAQ CTA */}
            <section className="py-24 bg-[#121212] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white font-poiret-one leading-tight">
                        No dejes que tu rentabilidad <br /> se escape en papeles sueltos.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            onClick={scrollToForm}
                            size="lg"
                            className="bg-transparent hover:bg-orange-600 text-white border-2 border-orange-600 text-xl px-12 py-7 rounded-full font-bold transition-all duration-300"
                        >
                            Empezar hoy
                        </Button>
                        <Link
                            href="https://wa.me/593963410409"
                            target="_blank"
                            className="flex items-center gap-4 text-white hover:text-orange-500 transition-all py-4 px-8 font-bold text-xl group bg-white/5 border border-white/10 rounded-full hover:bg-white/10"
                        >
                            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            O pregúntame por WhatsApp
                        </Link>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp */}
            <a
                href="https://wa.me/593963410409"
                target="_blank"
                className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-40 group border-4 border-[#1a1a1a]"
            >
                <MessageCircle className="w-10 h-10" />
                <span className="absolute right-24 bg-white text-gray-900 px-6 py-3 rounded-2xl text-sm font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap shadow-2xl border border-gray-100">
                    ¿Tienes dudas? ¡Escríbeme!
                </span>
            </a>
        </div>
    );
}
