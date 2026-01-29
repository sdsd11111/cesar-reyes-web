'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Smartphone, Database, Star, MessageCircle, QrCode, FileDown } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Custom brand accent color constant for reference
const BRAND_ORANGE = '#e78c23';

export default function CarnavalesClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



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
      tipo_negocio: formData.get('tipo_negocio') as string,
      website: formData.get('website') as string,
      datos_captura: formData.get('datos_captura') as string,
      whatsapp_atencion: formData.get('whatsapp_atencion') as string,
      terminos: formData.get('terminos') === 'on',
    };

    try {
      const response = await fetch('/api/submit-menu-objetivo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          tipo_restaurante: data.tipo_negocio,
          campaign: 'Carnavales 2026'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario');
      }

      setSubmitSuccess(true);
      const formElement = document.getElementById('formulario-carnaval') as HTMLFormElement;
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
      {/* YouTube Background Video Section (Top) */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Video (Horizontal) */}
          <iframe
            className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
            src="https://www.youtube.com/embed/Z9BftcOyZVs?autoplay=1&mute=1&loop=1&playlist=Z9BftcOyZVs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Carnavales Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          {/* Mobile Video (Vertical Shorts) */}
          {mounted && (
            <iframe
              className="block md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 w-[100vw] h-[177.77vw] min-h-[100vh] min-w-[56.25vh] pointer-events-none"
              src="https://www.youtube.com/embed/JvGywgAQQLo?autoplay=1&mute=1&loop=1&playlist=JvGywgAQQLo&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              title="Carnavales Mobile Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          )}
        </div>

        {/* 80% Opacity Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        {/* Content on top of video */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-poiret-one text-white drop-shadow-2xl animate-pulse">
            CARNAVAL 2026
          </h2>
          <p className="mt-4 text-xl text-gray-200 font-light tracking-widest uppercase">
            Prepárate para vender más
          </p>
          <div className="mt-12 animate-bounce">
            <ArrowRight className="rotate-90 text-white w-10 h-10" />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593963410409?text=Hola%20C%C3%A9sar%2C%20quiero%20activar%20el%20Plan%20Carnaval%20Digital%202026%20en%20mi%20negocio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 ease-out whitespace-nowrap font-bold px-0 group-hover:pl-2 group-hover:pr-1">
          WhatsApp Rápido
        </span>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/carnavales%20-%202026%20.%20hero.webp')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 leading-[1.1] animate-fadeIn font-poiret-one drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] text-white">
            Pon tu negocio en Internet y <br className="hidden md:block" />
            <span
              style={{
                color: BRAND_ORANGE,
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
              }}
              className="font-black"
            >
              Captura cientos de clientes
            </span> este carnaval
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-200 font-light tracking-wide drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Incluye: Dominio tunegocio.com + Landing page profesional + Sistema de captura con código QR + Conexión directa a tu WhatsApp. Instalado en 48 horas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg md:text-xl px-6 md:px-10 py-5 md:py-8 rounded-full font-bold shadow-lg shadow-orange-900/20 transform transition hover:scale-105 border-2 border-transparent hover:border-orange-400 w-full md:w-auto whitespace-normal leading-tight"
            >
              👉 Quiero activarlo <br className="block md:hidden" /> en mi negocio
            </Button>

            <Button
              onClick={scrollToForm}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white text-lg md:text-xl px-6 md:px-10 py-5 md:py-8 rounded-full font-bold backdrop-blur-sm border-2 border-white/20 transition-all hover:scale-105 w-full md:w-auto"
            >
              Empezar Ahora
            </Button>
          </div>


        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ArrowRight className="rotate-90 text-white/70 w-8 h-8" />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-[#121212]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-[#1a1a1a] p-10 rounded-3xl shadow-2xl border-l-4 border-orange-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-poiret-one">
              Cada Carnaval Es Lo Mismo...
            </h2>
            <div className="space-y-4 text-xl text-gray-300">
              <p>Este feriado tu restaurante, hostería o balneario se llena de gente.</p>
              <p>Venden. Atienden. Se cansan.</p>
              <p>Y cuando termina el feriado... todos esos clientes desaparecen.</p>

              <div className="space-y-2 bg-black/30 p-6 rounded-2xl border border-gray-800 mt-6">
                <p className="flex items-center gap-3 text-red-400/80">
                  <span className="text-lg">❌</span> No tienes su WhatsApp.
                </p>
                <p className="flex items-center gap-3 text-red-400/80">
                  <span className="text-lg">❌</span> No tienes su nombre.
                </p>
                <p className="flex items-center gap-3 text-red-400/80">
                  <span className="text-lg">❌</span> No puedes invitarlos a regresar.
                </p>
              </div>

              <p className="font-bold text-2xl text-orange-500 pt-4 font-poiret-one">
                Perdiste cientos de clientes potenciales para siempre.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center group border border-gray-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-gray-900/20 z-10 transition-colors group-hover:from-orange-900/10 group-hover:to-gray-900/10 pointer-events-none"></div>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/X2sMafM-kPw?rel=0"
              title="Carnavales 2026"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-[#1a1a1a] relative bg-cover bg-center" style={{ backgroundImage: "url('/images/carnavales-2026-fondo.webp')" }}>
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent z-10"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-poiret-one text-white">
            Así de Simple Es
          </h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            {/* 1. QR */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">1. Pones el código QR en tus mesas</h3>
              <p className="text-gray-400 text-lg leading-relaxed">(Nosotros te lo enviamos listo para imprimir)</p>
            </div>

            {/* 2. Escanean */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">2. Tus clientes lo escanean</h3>
              <p className="text-gray-400 text-lg leading-relaxed">(Dejan su nombre y WhatsApp en 10 segundos)</p>
            </div>

            {/* 3. Datos */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">3. Tienes sus datos para siempre</h3>
              <p className="text-gray-400 text-lg leading-relaxed">(Los contactas cuando quieras: temporada baja, promociones, eventos)</p>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden mb-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="pb-12"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] border border-gray-800 h-[320px]">
                  <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6">
                    <QrCode className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">1. Pones el código QR en tus mesas</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">(Listo para imprimir)</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] border border-gray-800 h-[320px]">
                  <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6">
                    <Smartphone className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">2. Tus clientes lo escanean</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">(En solo 10 segundos)</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] border border-gray-800 h-[320px]">
                  <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6">
                    <Database className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">3. Tienes sus datos para siempre</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">(Contacta cuando quieras)</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <style jsx global>{`
              .swiper-pagination-bullet { background: #444; }
              .swiper-pagination-bullet-active { background: ${BRAND_ORANGE}; }
            `}</style>
          </div>


          <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-10 rounded-3xl text-center border border-orange-800/50 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light italic text-gray-200 leading-relaxed">
              "No necesitas saber de tecnología. No necesitas contratar a nadie más. <span className="text-orange-500 font-bold not-italic">Solo pones el código y funciona.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[400px] md:h-[600px] w-full overflow-hidden border-y border-gray-800 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/carnavales-2026.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="max-w-full text-center">
            <h2
              className="text-white font-poiret-one uppercase tracking-[0.1em] md:tracking-[0.2em] font-black italic break-words"
              style={{
                fontSize: 'clamp(2rem, 10vw, 12rem)',
                lineHeight: '1',
                textShadow: '0 0 20px rgba(0,0,0,0.9), 4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000',
              }}
            >
              www.tunegocio.com
            </h2>
          </div>
        </div>
      </section>

      {/* Value Proposition */}

      <section className="py-24 bg-black text-white text-center border-y border-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-poiret-one">Lo que estás construyendo</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-gray-800 rounded-2xl bg-[#121212] hover:border-gray-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-3 text-orange-400 font-poiret-one">📱 Tu negocio</h3>
              <p className="text-gray-400 text-lg">En su WhatsApp</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-[#121212] hover:border-gray-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-3 text-orange-400 font-poiret-one">⭐ Tu reputación</h3>
              <p className="text-gray-400 text-lg">En Google Maps</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-[#121212] hover:border-gray-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-3 text-orange-400 font-poiret-one">🧠 Tu marca</h3>
              <p className="text-gray-400 text-lg">En su mente</p>
            </div>
          </div>
          <blockquote className="mt-20 text-2xl md:text-3xl font-light italic text-gray-400 max-w-4xl mx-auto leading-relaxed">
            "No más gente que viene una vez y desaparece. Esto es <strong className="text-orange-500 font-bold not-italic">capturar clientes</strong>, no solo vender hoy."
          </blockquote>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#121212]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-10 rounded-3xl text-center border border-orange-800/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-orange-400 mb-10 font-poiret-one">Con este sistema tú ganas:</h3>
            <ul className="inline-block text-left space-y-6">
              {[
                "Se guardan tu número en su celular",
                "Ven tus estados de WhatsApp",
                "Reciben tus mensajes cuando tú quieras",
                "Te dejan reseñas en Google",
                "Puedes volver a invitarlos cuando haya promociones"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-xl md:text-2xl text-gray-200">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/50">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing & Form */}

      <section id="reserva" className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">

            {/* Left: Plan Details */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white font-poiret-one">Plan Carnaval Digital</h2>
              <div className="bg-white/20 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/20">
                <ul className="space-y-5 mb-10">
                  {[
                    "Página simple del balneario / negocio",
                    "Sistema para capturar clientes",
                    "Formularios de datos",
                    "Código QR listo para imprimir",
                    "Enlace a Google",
                    "Conexión a WhatsApp",
                    "Base inicial de clientes",
                    "Soporte antes de carnaval"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      {/* Icon updated to green-100 or simply white/bright to stand out on orange */}
                      <div className="p-1 bg-white/20 rounded-full">
                        <Check className="w-5 h-5 text-white shrink-0" />
                      </div>
                      <span className="text-lg text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-4xl font-bold text-white mb-3 font-poiret-one">💵 Inversión: $250</h3>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="text-lg">Paga con tarjeta o transferencia</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 bg-white px-4 py-2 rounded-xl shadow-lg w-fit transform -rotate-1">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-lg font-bold text-orange-600">Entrega en 2 o 3 días</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-6 text-white font-poiret-one">Esto es solo el comienzo</h3>
                <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                  Una vez que empiezas a <strong className="text-white">capturar clientes</strong>, luego puedes automatizar mensajes, promociones, reservas y temporada baja.
                </p>
                <p className="font-bold text-xl text-white">
                  Primero clientes. Luego todo lo demás.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden text-gray-800">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-orange-500">
                  <QrCode className="w-40 h-40" />
                </div>
                <h3 className="text-3xl font-bold mb-8 text-center text-orange-800 font-poiret-one">👉 Activar mi carnaval</h3>

                {submitSuccess ? (
                  <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-3">¡Solicitud Enviada!</h4>
                    <p className="text-gray-600 text-lg">
                      Nos pondremos en contacto contigo lo antes posible para activar tu sistema antes del carnaval.
                    </p>
                  </div>
                ) : (
                  <form id="formulario-carnaval" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre Completo</label>
                        <input required name="nombre" type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">WhatsApp Contacto</label>
                        <input required name="telefono" type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="099..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                      <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="tucorreo@empresa.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Tipo de Negocio</label>
                        <select required name="tipo_negocio" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none bg-gray-50 text-gray-900">
                          <option value="">Selecciona...</option>
                          <option value="Balneario">Balneario / Hostería</option>
                          <option value="Restaurante">Restaurante</option>
                          <option value="Hotel">Hotel</option>
                          <option value="Discoteca/Bar">Discoteca / Bar</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Sitio Web (Opcional)</label>
                        <input name="website" type="url" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="www.tunegocio.com" />
                      </div>
                    </div>

                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">Configuración del Sistema</p>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">WhatsApp para Clientes (Opcional)</label>
                        <input name="whatsapp_atencion" type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="Donde los clientes escribirán" />
                        <p className="text-xs text-gray-500 mt-1">Si es diferente al de contacto.</p>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">¿Qué datos quieres capturar?</label>
                        <input name="datos_captura" type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="Ej: Nombre, WhatsApp, Cumpleaños..." />
                      </div>
                    </div>

                    <div className="flex items-start pt-2">
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
                          Autorizo el tratamiento de mis datos personales conforme a la{' '}
                          <Link href="/politicas" className="text-orange-600 hover:text-orange-500 underline" target="_blank">
                            Política de Privacidad
                          </Link>
                          .
                        </label>
                      </div>
                    </div>

                    {submitError && (
                      <div className="text-red-600 text-sm p-3 bg-red-50 rounded-lg border border-red-200">
                        {submitError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 md:py-5 text-base md:text-xl rounded-xl mt-6 shadow-xl transform transition hover:-translate-y-1 whitespace-normal leading-tight"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          QUIERO APROVECHAR <br className="block md:hidden" /> ESTE CARNAVAL
                        </>
                      )}
                    </Button>




                    <p className="text-xs text-gray-500 text-center mt-6">
                      * Plazas limitadas para garantizar soporte.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poiret-one text-white">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Qué gano realmente con esto? ¿Solo una página web?",
                a: (
                  <div className="space-y-4">
                    <p>No es "solo una página web". Es tu negocio en Internet con TODO lo que necesitas para Carnaval 2026:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 shrink-0 mt-1" /> <span><strong>Dominio propio (tunegocio.com):</strong> La gente te encuentra profesionalmente</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 shrink-0 mt-1" /> <span><strong>Sistema de sorteo automático:</strong> Haces una promoción sin trabajo manual</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 shrink-0 mt-1" /> <span><strong>Captura de clientes vía WhatsApp:</strong> Cientos de contactos registrados automáticamente</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 shrink-0 mt-1" /> <span><strong>Difusiones masivas:</strong> Les escribes a todos sin mandar mensajes uno por uno</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-500 shrink-0 mt-1" /> <span><strong>Ubicación en Google Maps:</strong> Los turistas te encuentran fácilmente</span></li>
                    </ul>
                    <p className="pt-2 italic text-gray-300">Esto NO es una página decorativa. Es un sistema completo que captura clientes mientras tú atiendes tu negocio.</p>
                  </div>
                )
              },
              {
                q: "¿Cómo funciona eso del sorteo? ¿Tengo que estar regalando cosas?",
                a: (
                  <div className="space-y-4">
                    <p>El sorteo es EL GANCHO para que la gente escanee el código QR. Ejemplos que funcionan:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>"Escanea y participa por una noche gratis"</li>
                      <li>"Regístrate y recibe 15% descuento en tu próxima visita"</li>
                      <li>"Entra al sorteo de una cena para 2 personas"</li>
                    </ul>
                    <div className="bg-black/30 p-6 rounded-2xl border border-gray-800 mt-4">
                      <p className="font-bold text-gray-200 mb-2">Cómo funciona:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Pones el código QR en tus mesas con el anuncio del sorteo</li>
                        <li>Los clientes escanean porque quieren participar</li>
                        <li>Dejan su nombre y WhatsApp (se registran solos)</li>
                        <li>Tú avisas a los ganadores por difusión de WhatsApp</li>
                      </ol>
                    </div>
                    <p>Lo que "regalas" en premio lo recuperas 10x con los clientes que regresan.</p>
                  </div>
                )
              },
              {
                q: "¿Qué es eso de \"difusiones de WhatsApp\"?",
                a: (
                  <div className="space-y-4">
                    <p className="font-bold text-orange-400 uppercase tracking-wider text-sm">NO es lo mismo que mandar mensajes normales</p>
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div className="bg-black/20 p-4 rounded-xl border border-gray-900">
                        <p className="font-bold text-red-400 mb-2">Mensajes normales:</p>
                        <p className="text-sm italic">Escribir uno por uno a 200 personas = 3 horas perdidas.</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded-xl border border-gray-900">
                        <p className="font-bold text-green-400 mb-2">Difusiones:</p>
                        <p className="text-sm italic">Escribes UN mensaje y se envía a TODOS automáticamente.</p>
                      </div>
                    </div>
                    <p>Cuando los clientes se registran, quedan en tu lista. Luego puedes avisar promociones de Semana Santa, temporada baja o eventos con un solo clic. Es contacto masivo sin spam.</p>
                  </div>
                )
              },
              {
                q: "¿Necesito saber de tecnología para manejar esto?",
                a: (
                  <div className="space-y-4">
                    <p className="font-bold text-white">CERO tecnología necesaria. Te entregamos:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-orange-500 shrink-0" /> <span>Página web YA HECHA con tus fotos.</span></li>
                      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange-500 shrink-0" /> <span>Dominio tunegocio.com YA CONFIGURADO.</span></li>
                      <li className="flex items-center gap-3"><QrCode className="w-5 h-5 text-orange-500 shrink-0" /> <span>Código QR LISTO PARA IMPRIMIR.</span></li>
                    </ul>
                    <p>Tú solo pones el código en tus mesas y escribes en WhatsApp como siempre. Todo es 100% automático.</p>
                  </div>
                )
              },
              {
                q: "¿Por qué hacerlo ANTES de Carnaval?",
                a: (
                  <div className="space-y-4">
                    <p>Porque después ya es tarde. Carnaval 2026 es el momento donde llegan los turistas en masa.</p>
                    <div className="p-4 bg-orange-900/20 border-l-4 border-orange-500 text-orange-200">
                      Si no tienes el sistema, no capturas sus datos y los pierdes para siempre. Cada cliente que no captures hoy es dinero que pierdes todo el año.
                    </div>
                    <p className="font-bold text-white">Instalar toma 48 horas. ¡No dejes que se te pase el tiempo!</p>
                  </div>
                )
              },
              {
                q: "¿Y después de Carnaval qué?",
                a: (
                  <div className="space-y-4">
                    <p>Te quedas con 3 activos valiosos:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Tu página web:</strong> Los turistas te encuentran en Google todo el año.</li>
                      <li><strong>Base de datos:</strong> Cientos de contactos para llenar tu negocio en temporada baja.</li>
                      <li><strong>Posicionamiento:</strong> Reseñas positivas que atraen a más gente.</li>
                    </ol>
                    <p className="pt-2 font-bold text-orange-400">Próximo paso: Podrás habilitar tu propio sistema de reservas.</p>
                  </div>
                )
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-white/5"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white font-poiret-one flex gap-4">
                    <span className="text-orange-500">Q:</span> {faq.q}
                  </h3>
                  <div className={`text-orange-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="rotate-90" />
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-[1000px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="text-gray-400 text-lg border-t border-gray-800 pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer CTA */}

      <section className="py-20 bg-[#121212] text-center border-t border-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white font-poiret-one">¿Quieres hacerlo tu mismo?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto px-4">
          <a
            href="/carnavales-2026/Registra-tus-clientes-de-Carnaval-2026.pdf"
            download
            className="bg-white/10 hover:bg-white/20 text-white text-lg md:text-xl px-6 md:px-12 py-5 md:py-6 rounded-full font-bold backdrop-blur-sm border-2 border-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <FileDown className="w-6 h-6" />
            Descargar Guía PDF
          </a>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg md:text-xl px-4 md:px-12 py-5 md:py-6 rounded-full font-bold transition-all duration-300 w-full md:w-auto whitespace-normal leading-tight"
          >
            Quiero que tú lo hagas <br className="block md:hidden" /> por mí
          </Button>
        </div>
      </section>
    </div>
  );
}
