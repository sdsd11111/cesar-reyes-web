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

  const openModal = (url: string) => {
    setModalVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideoUrl('');
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
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📆</div>
              <h3 className="text-xl font-bold mb-3">La "Hora Perdida"</h3>
              <p className="text-gray-600">
                Madrugas para cocinar, no para diseñar. Pierdes horas tomando fotos, editando precios en Canva y publicando en 3 lugares distintos.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3">La Batalla Contra el Algoritmo</h3>
              <p className="text-gray-600">
                Publicas en redes y solo te ven tus seguidores. No llegas a la gente nueva que busca activamente "almuerzos cerca de mí" en Google.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-3">El Costo de la "Foto por WhatsApp"</h3>
              <p className="text-gray-600">
                Cada vez que un cliente te pide el menú por chat, pierdes la oportunidad de que vea tus promociones y comparta tu página.
              </p>
            </div>
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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
          
          <div className="text-center">
            <a 
              href="https://wa.me/593XXXXXXXXX?text=Quiero%20mi%20menú%20interactivo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-lg"
            >
              Quiero mi propio Menú Interactivo
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: LA AUTORIDAD */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu menú digital, sin riesgos ni sorpresas
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Soy César Reyes, y llevo 25 años ayudando a Pymes. Te explico exactamente cómo trabajamos, con total transparencia.
          </p>
          
          <div className="relative cursor-pointer group" onClick={() => openModal('https://www.youtube.com/watch?v=4hot82GQezI')}>
            <img 
              src="/images/menu-objetivo/video-explicativo-thumbnail.webp" 
              alt="Video explicativo de César Reyes" 
              className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FF6B00] hover:bg-[#E66000] text-white rounded-full p-4 transition-all duration-300 transform group-hover:scale-110">
                <PlayCircle className="w-12 h-12" />
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Este video explica nuestro servicio, precios desde $250 y cómo agendar una llamada con mi equipo.
          </p>
        </div>
      </section>

      {/* SECCIÓN 5: LA REVELACIÓN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deja de "publicar" tu menú. Empieza a <span className="text-[#FF6B00]">POSICIONARLO</span>.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El 80% de los clientes buscan menú en Google ANTES de visitar. Las redes son para conversar, MenúObjetivo es para que te encuentren cuando tienen hambre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Columna 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">📲</div>
              <h3 className="text-xl font-bold mb-3">Control Total en 1 Minuto</h3>
              <p className="text-gray-600">
                Panel de control desde tu celular. Activas o desactivas platos y tu web, QR y WhatsApp se actualizan al instante.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Visible Cuando Te Buscan</h3>
              <p className="text-gray-600">
                Cada plato tiene su propia página optimizada para Google. Cuando alguien busca "lasaña en Loja", tu restaurante aparece.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3">El Poder del Menú Digital</h3>
              <p className="text-gray-600">
                No más fotos por WhatsApp. Envía un solo enlace con tu menú completo, promociones y botón de pedidos directos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: EL CIERRE ÚNICO */}
      <section className="py-20 px-4 bg-[#FF6B00] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu próximo paso es el más simple.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sin formularios, sin llamadas forzadas, sin tarjetas de crédito. Solo una conversación de 5 minutos por WhatsApp para activar tu MenúObjetivo.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto mb-8">
            <p className="text-xl md:text-2xl font-medium mb-6">
              "Empieza a recuperar tu tiempo y a vender más. Escribe 'MENÚ' en WhatsApp y mi equipo te atiende de inmediato para analizar tu caso."
            </p>
            <a 
              href="https://wa.me/593XXXXXXXXX?text=MENU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#FF6B00] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Escribir 'MENÚ' en WhatsApp Ahora
            </a>
          </div>
          
          <p className="text-sm text-white/80">
            Prometemos no enviar spam. Solo te contactaremos para ayudarte con tu menú digital.
          </p>
        </div>
      </section>

      {/* SECCIÓN 7: PRUEBA SOCIAL */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            No es magia, son resultados.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🌟</div>
              <p className="text-gray-600 italic mb-4">
                "Desde que implementamos MenúObjetivo, nuestras ventas online aumentaron un 30%. Lo mejor: dejamos de perder tiempo actualizando el menú en todos lados."
              </p>
              <p className="font-bold">- María G., Dueña de Restaurante</p>
            </div>
            
            {/* Testimonio 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-gray-600 italic mb-4">
                "Ahora aparecemos en Google cuando buscan 'desayunos cerca de mí'. Los clientes nuevos ya vienen convencidos de lo que quieren pedir."
              </p>
              <p className="font-bold">- Juan P., Propietario de Cafetería</p>
            </div>
            
            {/* Testimonio 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">💯</div>
              <p className="text-gray-600 italic mb-4">
                "El soporte es excelente. Cualquier duda que tengo me la resuelven al instante. Valió cada centavo invertido."
              </p>
              <p className="font-bold">- Laura M., Dueña de Comida Rápida</p>
            </div>
          </div>
          
          <a 
            href="https://wa.me/593XXXXXXXXX?text=MENU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Quiero Resultados Similares
          </a>
        </div>
      </section>

      {/* SECCIÓN 8: FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Las preguntas que todos hacen (y sus respuestas)
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Es difícil de usar? No soy bueno con la tecnología.
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Si sabes usar WhatsApp, sabes usar MenúObjetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Esto es solo para restaurantes grandes?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Todo lo contrario. MenúObjetivo fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Cuánto cuesta? ¿Hay costos ocultos?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Nuestra solución es 100% personalizada. En tu chat de WhatsApp inicial, auditamos tu caso y te damos un precio cerrado sin compromiso. Tenemos opciones que van desde una plataforma mensual hasta un servicio 'llave en mano' (desde $250). Te recomendaremos el mejor para ti.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Cuánto tiempo tarda en aparecer en Google?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Normalmente entre 7 y 14 días, aunque algunos clientes reportan aparecer en los primeros resultados en solo 3 días. Depende de la competencia en tu zona. Te guiamos paso a paso para optimizar tu visibilidad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Es difícil de usar? No soy bueno con la tecnología.
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Es tan fácil como usar WhatsApp. Si eliges el servicio "Llave en Mano", no tienes que usar nada: nosotros lo hacemos por ti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Funciona si mi restaurante es pequeño?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Está diseñado para restaurantes pequeños y medianos. Son quienes más tiempo ahorran y más rápido ven el retorno de la inversión.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                Ya tengo redes sociales. ¿Para qué necesito esto?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Perfecto. Tus redes sociales atraen a tu comunidad. MenúObjetivo atrae a los clientes nuevos que están buscando en Google "dónde comer" y aún no te conocen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-md overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                ¿Cuánto tarda la implementación?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-gray-600">
                Depende de tu caso. En el chat de WhatsApp definimos todo. Las implementaciones pueden estar listas desde 24 horas (para la plataforma) hasta 3-5 días (para el servicio 'llave en mano').
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">Menú Objetivo</div>
            <p className="text-gray-400">
              Soluciones digitales para restaurantes que quieren vender más con menos esfuerzo.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="w-5 h-5" />
                <a href="https://wa.me/593XXXXXXXXX" className="hover:text-white transition-colors">Escribir por WhatsApp</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:hola@menuobjetivo.com" className="hover:text-white transition-colors">hola@menuobjetivo.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Loja, Ecuador</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Menú Objetivo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default MenuObjetivoPage;
