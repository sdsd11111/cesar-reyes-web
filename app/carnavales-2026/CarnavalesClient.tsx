'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Smartphone, Database, Star, MessageCircle, QrCode } from 'lucide-react';
import Link from 'next/link';

// Custom brand accent color constant for reference
const BRAND_ORANGE = '#e78c23';

export default function CarnavalesClient() {
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
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/images/carnavales-2026.webp')" }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeIn font-poiret-one drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Convierte este feriado de carnaval en <span className="text-orange-500">clientes para todo el año</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light tracking-wide shadow-black drop-shadow-md">
            Te instalamos un sistema simple para que cada persona que te visite en carnaval deje sus datos, te califique en Google y tu negocio quede guardado en su celular.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-8 rounded-full font-bold shadow-lg shadow-orange-900/20 transform transition hover:scale-105 border-2 border-transparent hover:border-orange-400"
          >
            👉 Quiero activarlo en mi negocio
          </Button>
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
              ¿Cómo capturar clientes en carnaval sin dejar de atender tu negocio?
            </h2>
            <div className="space-y-6 text-xl text-gray-300">
              <p>Cada carnaval entran cientos de personas a tu balneario o negocio.</p>
              <p className="font-semibold text-orange-400">La mayoría se va… y nunca más vuelve.</p>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800 rounded-full border border-gray-700">
                  <Check className="w-8 h-8 text-orange-500" />
                </div>
                <p className="font-bold text-2xl text-white font-poiret-one">
                  Nosotros te ayudamos a CAPTURAR CLIENTES de forma automática.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center group border border-gray-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-gray-900/20 z-10 transition-colors group-hover:from-orange-900/10 group-hover:to-gray-900/10"></div>
            <div className="text-center z-20 p-6">
              <Smartphone className="w-24 h-24 mx-auto text-gray-600 mb-6" />
              <p className="text-gray-400 font-medium text-xl">Video Principal o Imagen Potente</p>
              <p className="text-sm text-gray-600 mt-2">(Gente, QR, Celular, WhatsApp)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-[#1a1a1a] relative bg-cover bg-center" style={{ backgroundImage: "url('/images/carnavales-2026-fondo.webp')" }}>
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent z-10"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-poiret-one text-white">
            Demostración simple <span className="text-gray-500 text-3xl block mt-2 font-montserrat font-normal">(así funciona)</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 1. Escanean */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">1. Escanean</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Un código QR en tu mesa o entrada</p>
            </div>

            {/* 2. Entran */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">2. Entran</h3>
              <p className="text-gray-400 text-lg leading-relaxed">A tu página web personalizada</p>
            </div>

            {/* 3. Dejan datos */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">3. Dejan datos</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Nombre y WhatsApp para registrarse</p>
            </div>

            {/* 4. Califican */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">4. Califican</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Te dejan 5 estrellas en Google</p>
            </div>

            {/* 5. Te escriben */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">5. Te escriben</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Directo a tu WhatsApp</p>
            </div>

            {/* 6. Capturas */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#232323] hover:bg-[#2a2a2a] transition border border-gray-800 hover:border-orange-500/30 group">
              <div className="p-4 bg-gray-800 text-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-white font-poiret-one">6. Capturas</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Tu base de datos crece sola</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-10 rounded-3xl text-center border border-orange-800/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-orange-400 mb-8 font-poiret-one">Resultado:</h3>
            <ul className="inline-block text-left space-y-4">
              {[
                "Se guardan tu número en su celular",
                "Ven tus estados de WhatsApp",
                "Reciben tus mensajes cuando tú quieras",
                "Te dejan reseñas en Google",
                "Puedes volver a invitarlos cuando haya promociones"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl text-gray-200">
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/50">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
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
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre Completo</label>
                      <input required name="nombre" type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">WhatsApp</label>
                      <input required name="telefono" type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="099..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                      <input required name="email" type="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 bg-gray-50" placeholder="tucorreo@empresa.com" />
                    </div>
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
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 text-xl rounded-xl mt-6 shadow-xl transform transition hover:-translate-y-1"
                    >
                      {isSubmitting ? 'Enviando...' : 'QUIERO APROVECHAR ESTE CARNAVAL'}
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

      {/* Footer CTA */}
      <section className="py-20 bg-[#121212] text-center border-t border-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white font-poiret-one">Este carnaval puede ser distinto.</h2>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white text-xl px-12 py-6 rounded-full font-bold transition-all duration-300"
        >
          Quiero aprovechar este carnaval
        </Button>
      </section>
    </div>
  );
}
