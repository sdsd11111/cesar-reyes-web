'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, Calendar, CreditCard, Image as ImageIcon, Zap, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function PasosSection() {
  const pasos = [
    {
      numero: 1,
      titulo: 'Reservas tu lugar (Hoy)',
      icono: <Calendar className="h-8 w-8 text-white" />,
      items: [
        'Llenas formulario o nos escribes por WhatsApp',
        'Te llamamos en máximo 24h para confirmar detalles',
        'Hablamos contigo (eres una persona real hablando con personas reales)'
      ]
    },
    {
      numero: 2,
      titulo: 'Confirmas y pagas',
      icono: <CreditCard className="h-8 w-8 text-white" />,
      items: [
        'Te enviamos datos de transferencia bancaria',
        'Recibes comprobante legal de pago',
        'Te asignamos tu posición en la lista de entrega'
      ]
    },
    {
      numero: 3,
      titulo: 'Nos envías tu material (1-2 días)',
      icono: <ImageIcon className="h-8 w-8 text-white" />,
      items: [
        'Fotos de tus productos',
        'Descripción de tu negocio',
        'Eliges tu dominio: www.tunegocio.com'
      ]
    },
    {
      numero: 4,
      titulo: 'Nosotros trabajamos (2-4 días)',
      icono: <Zap className="h-8 w-8 text-white" />,
      items: [
        'Diseñamos tu página',
        'Subimos contenido',
        'Configuramos SEO',
        'Probamos que todo funcione'
      ]
    },
    {
      numero: 5,
      titulo: 'Recibes tu página LISTA (Día 3-6)',
      icono: <Check className="h-8 w-8 text-white" />,
      items: [
        'Te enviamos el link por WhatsApp',
        'Video tutorial de 5 min',
        'Ya puedes compartirla y vender'
      ]
    }
  ];

  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    setExpandedSteps(prev => 
      prev.includes(stepNumber)
        ? prev.filter(num => num !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20" id="como-funciona">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/categorias/posicionamiento-web/alianza-exclusiva-hero.webp"
          alt="Fondo de sección"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Cómo Funciona en 5 Pasos Sencillos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2 sm:px-4">
            De la idea a tu página web en menos de una semana, con soporte en cada paso
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {pasos.map((paso, index) => (
            <div 
              key={paso.numero}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl group backdrop-blur-lg bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 h-full flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-full p-4 sm:p-5 md:p-6 z-10 flex-1 flex flex-col">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xl sm:text-2xl font-bold text-white">
                      {paso.numero}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-colors">
                      {paso.icono}
                    </div>
                  </div>
                  
                  {/* Step title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white text-center">
                    <span className="block">
                      {paso.titulo.split(' ').slice(0, 3).join(' ')}
                      {paso.titulo.split(' ').length > 3 && <br className="hidden sm:block" />}
                      {paso.titulo.split(' ').slice(3).join(' ')}
                    </span>
                  </h3>
                  <div className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3 text-white/90 text-sm sm:text-base">
                      {paso.items.map((item, i) => {
                        const isVisible = expandedSteps.includes(paso.numero) || i === 0;
                        return isVisible ? (
                          <li key={i} className="flex items-start animate-fadeIn">
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 mr-2 flex-shrink-0 text-orange-400" />
                            <span className="text-gray-100">{item}</span>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>

                  {paso.items.length > 1 && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                      <button
                        onClick={() => toggleStep(paso.numero)}
                        className="w-full text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-orange-500/10"
                      >
                        {expandedSteps.includes(paso.numero) ? (
                          <>
                            <span>Mostrar menos</span>
                            <ChevronUp className="h-4 w-4 ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Ver detalles</span>
                            <ChevronDown className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
          ))}
        </div>

        <div className="backdrop-blur-lg bg-white/10 rounded-xl border border-white/20 p-6 max-w-3xl mx-auto hover:border-white/40 transition-all hover:shadow-2xl hover:shadow-black/30">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mr-4 flex-shrink-0">
              <Clock className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Importante sobre los tiempos de entrega:</h4>
              <p className="text-gray-200">
                El tiempo de entrega comienza DESPUÉS de que nos envíes tu material completo.
                Si tardas 1 semana en enviarnos fotos, tu entrega se retrasa 1 semana.
                Por eso te damos instrucciones claras de qué necesitamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
