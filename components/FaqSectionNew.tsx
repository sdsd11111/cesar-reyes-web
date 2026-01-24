'use client';

import { useState } from 'react';
import { Check, AlertTriangle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export default function FaqSectionNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: '¿Quiénes pueden aprovechar esta promoción?',
      answer: (
        <div className="space-y-4">
          <p>Esta oferta está dirigida a artesanos y artistas que quieran tener una página web profesional, especialmente si participan del Festival de Artes Vivas 2025 o simplemente quieren aprovechar esta oportunidad.</p>
        </div>
      )
    },
    {
      question: '¿Cuántos cupos hay disponibles?',
      answer: (
        <div className="space-y-4">
          <p>Son <span className="font-bold text-yellow-300">30 cupos promocionales</span>. Una vez completados, la oferta ya no será válida bajo estas condiciones.</p>
          <div className="bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-400 pl-4 py-2 my-2">
            <p className="font-medium">¡No pierdas la oportunidad de asegurar tu cupo con el precio promocional!</p>
          </div>
        </div>
      )
    },
    {
      question: '¿Cuál es el plazo para enviar la información para mi página?',
      answer: (
        <div className="space-y-4">
          <p>Debes entregarnos <span className="font-medium">todos los textos, imágenes y material necesario</span> antes del <span className="font-bold text-yellow-300">31 de diciembre de 2025</span>.</p>
          <p>Esto nos permite asegurar que tu página esté lista a tiempo y con la mejor calidad posible.</p>
        </div>
      )
    },
    {
      question: '¿Necesito saber de computadoras?',
      answer: (
        <div className="space-y-4">
          <p className="font-medium text-gray-700">No. Cero conocimiento técnico necesario.</p>
          <p>Tú solo nos das:</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Fotos de tus productos (las que tengas)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Descripción de qué haces</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Tu número de WhatsApp</span>
            </li>
          </ul>
          <p>Nosotros hacemos TODO lo demás. Cuando esté lista, te enseñamos a compartirla (toma 2 minutos).</p>
        </div>
      )
    },
    {
      question: '¿Y si no tengo fotos profesionales?',
      answer: (
        <div className="space-y-4">
          <p>No hay problema. Fotos de celular funcionan perfectamente. Las optimizamos para que se vean bien en tu web.</p>
          <div className="border-l-4 border-yellow-400 pl-4 py-2 my-4">
            <p className="font-bold text-yellow-300">IMPORTANTE:</p>
            <p>No necesitamos fotos "perfectas". Necesitamos fotos que muestren tu trabajo real.</p>
          </div>
        </div>
      )
    },
    {
      question: '¿Puedo cambiar cosas después?',
      answer: (
        <div className="space-y-4">
          <p className="font-medium text-green-600">Sí, durante los primeros 3 meses es GRATIS.</p>
          
          <p>Ejemplos de cambios incluidos:</p>
          <ul className="space-y-2 pl-5">
            {['Actualizar fotos de productos', 'Cambiar descripciones', 'Agregar nuevos productos (hasta 10)', 'Modificar información de contacto'].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="font-medium">Después del tercer mes:</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Cambios menores: <span className="font-medium">Gratis</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>Cambios mayores: <span className="font-medium">Desde $10</span></span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: '¿Qué pasa después del primer año?',
      answer: (
        <div className="space-y-4">
          <p className="font-medium">Renovación del dominio y hosting <span className="text-blue-600">$30</span> la renovación y <span className="text-blue-600">$120 dólares</span> el mantenimiento ($10 mensual).</p>
          <p>Te avisamos con 2 meses de anticipación.</p>
          
          <div className="border-l-4 border-red-400 pl-4 py-2 my-4">
            <p className="font-medium text-red-200">Si decides no renovar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pierdes el dominio (.com)</li>
              <li>La página deja de funcionar</li>
            </ul>
          </div>
          
          <p className="font-medium text-green-600">PERO tu contenido es tuyo.</p>
          <p>Puedes llevarlo a otro proveedor si quieres.</p>
        </div>
      )
    },
    {
      question: '¿Realmente apareceré en Google?',
      answer: (
        <div className="space-y-4">
          <p className="font-medium">Sí, pero seamos honestos:</p>
          
          <p>Google tiene 2 tipos de resultados:</p>
          
          <div className="space-y-2 my-4">
            <p className="font-bold">1. ANUNCIOS (pagas por clic)</p>
            <p className="ml-4 opacity-90">→ Nosotros NO vendemos publicidad</p>
            
            <p className="font-bold mt-4">2. RESULTADOS ORGÁNICOS (apareces gratis)</p>
            <p className="ml-4 opacity-90">→ Esto es lo que configuramos</p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4 py-2 my-4">
            <p className="font-medium">¿En cuánto tiempo apareces?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>En Google Search Console: 3-7 días</li>
              <li>En primeras páginas: 2-6 meses (depende de competencia)</li>
            </ul>
          </div>
          
          <p>Te damos una guía para acelerar tu posicionamiento.</p>
        </div>
      )
    },
    {
      question: '¿Por qué tan barato?',
      answer: (
        <div className="space-y-4">
          <p>Pregunta honesta y válida.</p>
          
          <p className="font-medium">3 razones:</p>
          
          <div className="space-y-6">
            <div>
              <p className="font-bold text-blue-700">1. ESTRATEGIA</p>
              <p>Queremos 20 casos de éxito en Artes Vivas para mostrar a futuros clientes.</p>
            </div>
            
            <div>
              <p className="font-bold text-blue-700">2. TECNOLOGÍA</p>
              <p>Trabajamos exclusivamente en páginas web. No manejamos redes, no hacemos reels ni vídeos para clientes, solo páginas web, eso nos da la experticia para hacerlo bien y en poco tiempo.</p>
            </div>
            
            <div>
              <p className="font-bold text-blue-700">3. COMUNIDAD</p>
              <p>Creemos en el talento artesanal ecuatoriano. Esta es nuestra forma de apoyar.</p>
            </div>
          </div>
          
          <p className="font-medium text-red-600">Después de Artes Vivas, el precio vuelve a $250.</p>
        </div>
      )
    },
    {
      question: '¿Cómo sé que no es una estafa?',
      answer: (
        <div className="space-y-6">
          <p className="font-medium">Pregunta inteligente. Deberías desconfiar.</p>
          
          <div className="border-l-4 border-green-400 pl-4 py-2 my-4">
            <p className="font-bold text-green-800 mb-2">Evidencia real:</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold">1. VERIFICABLE:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a href="https://www.cesarreyesjaramillo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cesarreyesjaramillo.com</a> (mi portafolio personal)</li>
                  <li>6 páginas de artesanos funcionando HOY</li>
                  <li>Puedes llamar a esos clientes</li>
                </ul>
              </div>
              
              <div>
                <p className="font-bold">2. PRESENCIA FÍSICA:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Estaremos en Artes Vivas entregando tarjetas</li>
                  <li>WhatsApp directo: <a href="https://wa.me/593963410409" className="text-blue-600 hover:underline">+593 96 341 0409</a></li>
                  <li>Puedes venir a reunión presencial</li>
                </ul>
              </div>
              
              <div>
                <p className="font-bold">3. PAGO SEGURO:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Transferencia bancaria a cuenta empresarial verificable</li>
                  <li>El precio no incluye IVA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 overflow-hidden" id="faq">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/categorias/posicionamiento-web/posicionamiento.webp)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-200">
            Resolvemos todas tus dudas sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            >
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center font-medium text-lg transition-colors duration-200 ${
                  openIndex === index ? 'bg-white bg-opacity-20 text-white' : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-white" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-white" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-black bg-opacity-30">
                  <div className="text-white space-y-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-white mb-6">
            ¿Tienes alguna otra pregunta? Estamos aquí para ayudarte.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 border-2 border-white border-opacity-20 whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
            onClick={() => window.open('https://wa.me/593963410409?text=Tengo%20una%20pregunta%20antes%20de%20decidir', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="truncate">Chatear por WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
