'use client';

import React, { useState } from 'react';
import { PlayCircle, Clock, Smartphone, DollarSign, Zap, Search, Rocket, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';
import VideoModal from '@/components/VideoModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExpandableText } from "@/components/ui/expandable-text";
import { CardSlider } from "@/components/ui/card-slider";

const MenuObjetivoPage = () => {
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

      {/* SECCIÓN 1: HERO CON IMAGEN */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <img 
          src="/images/menu-objetivo/menu-digital-restaurantes-hero.webp" 
          alt="Menú digital para restaurantes" 
          className="absolute z-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-poiret-one)' }}>
            Tu menú digital, sin complicaciones
            <span className="block text-[#FF6B00]">— en menos de 1 minuto</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Recupera tu tiempo, atrae más clientes por Google y deja de pelear con la tecnología.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/593XXXXXXXXX?text=Hola,%20me%20interesa%20el%20menú%20digital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Escribe MENÚ en WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Sin curva de aprendizaje
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Visible en Google en 7 días
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Soporte real en español
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: VIDEO EXPLICATIVO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Mira cómo funciona en menos de 2 minutos
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/4hot82GQezI?rel=0&modestbranding=1" 
              title="¿Cómo funciona MenúObjetivo?"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA PRUEBA DEFINITIVA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              La Prueba Definitiva: <span className="text-[#FF6B00]">Adminístralo en Vivo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A tu izquierda, el panel de control. A tu derecha, el menú público. Sigue los pasos y mira la magia en tiempo real.
            </p>
          </div>

          {/* Acordeón de instrucciones */}
          <div className="max-w-4xl mx-auto mb-12">
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
                    <ArrowRight className="text-gray-500 hidden md:block" />
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
                      <p className="text-sm">Clic en "Nuevo Plato"</p>
                    </div>
                    <ArrowRight className="text-gray-500 hidden md:block" />
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">2</span>
                      <p className="text-sm">Llena los campos</p>
                    </div>
                    <ArrowRight className="text-gray-500 hidden md:block" />
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">3</span>
                      <p className="text-sm">Actívalo y guarda</p>
                    </div>
                    <ArrowRight className="text-gray-500 hidden md:block" />
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF6B00] text-white font-bold text-sm">4</span>
                      <p className="text-sm">Recarga y listo.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Sección de Demo Interactiva */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
              <div className="bg-gray-800 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm text-gray-400 mx-auto">Panel de Control</p>
              </div>
              <iframe 
                src="https://sartenes.vercel.app/admin" 
                className="w-full h-[70vh]" 
                title="Panel de Control"
                loading="lazy"
              ></iframe>
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
              <iframe 
                src="https://sartenes.vercel.app/" 
                className="w-full h-[70vh]" 
                title="Menú Público"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-lg"
            >
              Quiero mi propio Menú Interactivo
            </a>
          </div>
        </div>
      </section>

      {/* Otras secciones (se pueden agregar más adelante) */}
      
      {/* SECCIÓN 3: LA HERIDA ABIERTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu comida es excelente. Tu visibilidad, no.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sabes que tu comida es la mejor de la zona. Pero si tu menú no está donde tus clientes buscan... es como si no existieras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">📆</div>
              <h3 className="text-xl font-bold mb-3">La "Hora Perdida"</h3>
              <p className="text-gray-600">
                Madrugas para cocinar, no para diseñar. Pierdes horas tomando fotos, editando precios en Canva y publicando en 3 lugares distintos.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3">La Batalla Contra el Algoritmo</h3>
              <p className="text-gray-600">
                Publicas en redes y solo te ven tus seguidores. No llegas a la gente nueva que busca activamente "almuerzos cerca de mí" en Google.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3">El Costo de la "Foto por WhatsApp"</h3>
              <p className="text-gray-600">
                Cada vez que un cliente te pide el menú por chat, pierdes la oportunidad de que vea tus promociones y comparta tu página.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: VERIFICACIÓN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tus clientes te encuentran en Google?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            La mayoría de dueños creen que tienen presencia online. Haz la prueba tú mismo. Busca en Google exactamente como lo haría un cliente hambriento:
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ej: comprar lasaña en Loja"
              />
              <button
                onClick={handleSearch}
                className="bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Buscar en Google
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              ¿Apareces en los primeros resultados? Si no es así, estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Otras secciones (FAQ, CTA final, etc.) se pueden agregar aquí */}
      
      <FaqSection 
        h2="Las preguntas que todos hacen (y sus respuestas)"
        questions={[
          {
            q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
            a: "Tenemos dos modalidades que se adaptan a ti. 1) La Plataforma, si eres tecnológico y quieres control total (con un pago mensual accesible). 2) El Servicio 'Llave en Mano', donde mi equipo lo hace todo por ti (desde un pago único de proyecto de $250). En tu llamada o chat inicial, te recomendamos el mejor para tu caso, sin compromiso.",
            cta: "Hablar por WhatsApp"
          },
          {
            q: "¿Es difícil de usar? No soy bueno con la tecnología.",
            a: "Si eliges la Plataforma, es tan fácil como usar WhatsApp. Si eliges el Servicio 'Llave en Mano', no tienes que usar nada: nosotros lo hacemos por ti.",
            cta: "Ver demo"
          },
          {
            q: "¿Funciona si mi restaurante es pequeño?",
            a: "Está diseñado para restaurantes pequeños y medianos. Son quienes más tiempo ahorran y más rápido ven el retorno de la inversión al dejar de perder horas en diseño.",
            cta: "Ver casos de éxito"
          },
          {
            q: "Ya tengo redes sociales. ¿Para qué necesito esto?",
            a: "Perfecto. Tus redes sociales atraen a tu comunidad. MenúObjetivo atrae a los clientes nuevos que están buscando en Google 'dónde comer' y aún no te conocen.",
            cta: "Ver cómo funciona"
          }
        ]}
      />

      {/* CTA Final con Video de César */}
      <section className="py-16 px-4 bg-[#FF6B00] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para que te encuentren más clientes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mira este mensaje especial de César Reyes
          </p>
          
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden cursor-pointer group mb-8"
               onClick={() => openModal('https://www.youtube.com/watch?v=oPySzkvDjDk')}>
            <img 
              src="/images/menu-objetivo/video-explicativo-thumbnail.webp" 
              alt="Mensaje de César Reyes"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/593XXXXXXXXX?text=Hola,%20me%20interesa%20el%20menú%20digital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#FF6B00] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg mx-auto"
          >
            Escribe MENÚ en WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MenuObjetivoPage;
