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
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // Datos de la portada fija
  const heroData = {
    eyebrow: '🟢 Tecnología Apta para No-Tecnológicos',
    title: 'Si sabes enviar un WhatsApp, sabes administrar tu nuevo Sitio Web.',
    subtitle: 'Olvida a los programadores y las demoras. Actualiza precios en 1 minuto mientras te tomas un café. Tu restaurante abierto 24/7 por el precio de una sola mesa.',
    bgImage: '/images/promo-artes-vivas/hero 1.webp',
    cta: 'Quiero mi Página Web Ahora',
    ctaLink: '#contacto'
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">No seas el último en modernizarte</h2>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Esta tecnología por $150 USD es un regalo insostenible. Lo hacemos para revolucionar Loja y Cuenca durante el festival.
          </p>
          
          {/* Contador de cupos */}
          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8">
            <div className="text-lg font-medium mb-2">Cupos Restantes: 4/20</div>
            <div className="w-full bg-white/30 rounded-full h-4">
              <div className="bg-white h-4 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg py-6 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Link href="/contacto" className="flex items-center justify-center gap-2">
              APROVECHAR LA PROMO AHORA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          
          <p className="mt-6 text-orange-100 text-lg">
            <span className="font-semibold">Garantía:</span> Si no te gusta el diseño, lo ajustamos hasta que lo ames.
          </p>
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
