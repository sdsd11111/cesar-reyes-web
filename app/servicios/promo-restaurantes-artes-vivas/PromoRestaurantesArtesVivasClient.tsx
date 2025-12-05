'use client';

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import RestaurantShowcase from '../../components/RestaurantShowcase';
import InteractiveDemoSection from '../../components/InteractiveDemoSection';
import ArgumentsSection from '../../components/ArgumentsSection';

export default function PromoRestaurantesArtesVivas() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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

  // Datos de la portada fija
  const heroData = {
    eyebrow: '🟢 Tecnología Apta para No-Tecnológicos',
    title: 'Si sabes enviar un WhatsApp, sabes administrar tu nuevo Sitio Web.',
    subtitle: 'Olvida a los programadores y las demoras. Actualiza precios en 1 minuto mientras te tomas un café. Tu restaurante abierto 24/7 por el precio de una sola mesa.',
    bgImage: '/images/promo-artes-vivas/promo-hero.webp',
    cta: 'Quiero mi Página Web Ahora',
    ctaLink: '#reserva'
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center py-16 lg:py-0">
        {/* Fondo con overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${heroData.bgImage}')`,
            }}
          ></div>
        </div>

        {/* Contenido del hero */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Columna izquierda - Texto */}
            <div className="text-center lg:text-left lg:max-w-[600px]">
              {/* Eyebrow */}
              <div className="text-lg md:text-xl font-medium text-green-400 mb-4 animate-fadeIn">
                {heroData.eyebrow}
              </div>

              {/* Título Principal */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 leading-tight text-white animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                {heroData.title}
              </h1>

              {/* Subtítulo */}
              <p className="text-xl md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                {heroData.subtitle}
              </p>

              {/* Botón CTA */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl py-5 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Link href={heroData.ctaLink} className="flex items-center justify-center gap-2">
                    {heroData.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Columna derecha - Video Vertical */}
            <div className="w-full lg:w-[300px] xl:w-[320px] mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform transition-all duration-500 hover:shadow-2xl">
                <div className="aspect-[9/16] bg-black/30 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-auto"
                    poster="/images/thumb-video-poster.jpg"
                    style={{ maxWidth: 'none' }}
                  >
                    <source src="/images/MenuObjetivo/MenuObjetivo/gif-restaurantes.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center">
                  <p className="text-white text-sm font-medium">¡Es así de fácil actualizar tus precios!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha indicadora de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Sección de Muestrario de Restaurantes */}
      <RestaurantShowcase />

      {/* Sección de Demostración Interactiva */}
      <InteractiveDemoSection />

      {/* Sección de Argumentos */}
      <ArgumentsSection />


      {/* Sección de Preguntas Frecuentes */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Preguntas Frecuentes</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "¿Tengo que pagar mensualidades?",
                answer: "No por el diseño. El pago de $150 es único. Solo renuevas tu dominio/hosting anualmente (un costo mínimo estándar), pero la web es tuya."
              },
              {
                question: "¿Si subo un precio mal, cómo lo arreglo?",
                answer: "Entras a tu panel desde el celular, corriges y guardas. Es instantáneo. Si te equivocas en WhatsApp, sabes corregirlo aquí."
              },
              {
                question: "¿Incluye correos corporativos?",
                answer: "Sí, te configuramos ventas@turestaurante.com para que te veas profesional ante proveedores y bancos."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm">
                <button
                  className="w-full px-6 py-4 text-left font-medium text-lg bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center text-white"
                  onClick={() => toggleCard(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${expandedCards[index] ? 'rotate-180' : ''} text-orange-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedCards[index] && (
                  <div className="p-6 bg-gray-800/70 text-gray-200 border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA Final */}
      <section id="reserva" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
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
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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
    </div>
  );
}

// Estilos de animación
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;

// Agregar estilos al documento
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}
