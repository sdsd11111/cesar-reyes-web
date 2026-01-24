'use client';

import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problema" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            El Costo Oculto de la Ineficiencia: ¿Cuánto Estás Perdiendo REALMENTE?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En tu PYME, como profesional independiente o artesano, cada minuto cuenta. Pero la realidad es que tu equipo, sin saberlo, está perdiendo horas valiosas en un laberinto de tareas repetitivas y distracciones digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h4 className="text-2xl font-semibold text-gray-700 mb-4">El Problema:</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span><strong className="text-gray-700">Mensajes y correos sin fin:</strong> Atendiendo comunicaciones que no siempre llevan a una venta.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span><strong className="text-gray-700">Búsqueda constante:</strong> Perdiendo el tiempo buscando información crucial para tu operación.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className="text-gray-700">Falta de enfoque:</strong> Las interrupciones constantes rompen la concentración, afectando la productividad real.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span><strong className="text-gray-700">Oportunidades perdidas:</strong> Clientes que se van a la competencia por una respuesta tardía.</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <p className="text-sm text-red-700">Bandeja de entrada saturada</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700">Tiempo perdido</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p className="text-sm text-red-700">Búsqueda de datos</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-red-400 mx-auto mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-red-700">Signo de dólar tachado</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          ¡Estos números te abrirán los ojos al dinero que se está escapando!
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-red-500 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <h4 className="text-xl font-semibold text-gray-700 mb-3 text-center">🔍 Búsqueda de Información</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Tus empleados dedican <strong className="text-primary">1.8 horas diarias</strong> buscando datos. Eso es <strong className="text-primary">4,320 horas al año</strong>, con un <strong className="text-primary">valor de $13,392 USD/año</strong> en salarios desperdiciados. Imagina <strong className="text-primary">540 jornadas laborales extras</strong> que podrían dedicarse a innovar o generar ingresos.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-red-500 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.687-3.687A9.721 9.721 0 0112.5 16.75c-2.997 0-5.74-1.1-7.75-2.907M14.25 9a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a9 9 0 0112.06-8.196c.52-.165 1.048-.292 1.592-.386C17.074 3.163 16.5 2.5 15.75 2.5H9.75A2.25 2.25 0 007.5 4.75v.463c-.466.134-.907.303-1.318.507C4.874 6.56 4.125 7.697 3.75 8.894V12zM12.75 15a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" />
            </svg>
            <h4 className="text-xl font-semibold text-gray-700 mb-3 text-center">📱 Distracciones Digitales</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Se pierden <strong className="text-primary">40 minutos al día</strong> en chats no relacionados con el trabajo. Esto equivale a <strong className="text-primary">321.6 horas al año</strong>, o <strong className="text-primary">$997 USD/año</strong> en costo de salario. Un liderazgo enfocado crea un ambiente de trabajo más productivo.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-red-500 mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <h4 className="text-xl font-semibold text-gray-700 mb-3 text-center">📬 Gestión del Correo</h4>
            <p className="text-gray-600 text-sm leading-relaxed">La revisión y gestión de emails consume <strong className="text-primary">10 horas semanales</strong>. Con nuestro sistema, logra una reducción del <strong className="text-primary">30% (720 horas/año)</strong>, lo que se traduce en <strong className="text-primary">$2,232 USD ahorrados</strong> anualmente. Herramientas premium para maximizar el rendimiento de tu equipo.</p>
          </div>
        </div>
        
        <div className="text-center bg-black/10 p-8 md:p-12 rounded-lg shadow-lg border border-black/30">
          <h4 className="text-2xl font-semibold text-primary mb-4">La Solución Inteligente:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-primary/20 p-3 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary mx-auto mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
              <p className="text-xs text-primary">Embudo de oro</p>
            </div>
            <div className="bg-primary/20 p-3 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary mx-auto mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-primary">Tiempo libre</p>
            </div>
            <div className="bg-primary/20 p-3 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary mx-auto mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844.17 1.25.02l.8-.4c.51-.25.97-.02 1.175.48l.62 1.073c.19.32.18.64-.05 1.02l-.62.98c-.33.52-.33 1.1.02 1.63l.62.98c.23.38.24.7.05 1.02l-.62 1.073c-.205.5-.665.73-1.175.48l-.8-.4c-.406-.15-.86-.09-1.25.02-.396.166-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93s-.844-.17-1.25-.02l-.8.4c-.51.25-.97.02-1.175-.48l-.62-1.073c-.19-.32-.18-.64.05-1.02l.62-.98c.35-.53.35-1.1-.02-1.63l-.62-.98c-.23-.38-.24-.7-.05-1.02l.62-1.073c.205-.5.665-.73 1.175.48l.8.4c.406.15.86.09 1.25.02.396-.166.71-.506-.78.93l.149-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs text-primary">Cerebro IA</p>
            </div>
            <div className="bg-primary/20 p-3 rounded-lg shadow text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-primary mx-auto mb-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              <p className="text-xs text-primary">Crecimiento</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Imagina un <strong className="text-primary">asistente inteligente que clasifica y responde tus emails</strong>, maneja <strong className="text-primary">toda tu mensajería</strong> (WhatsApp, Facebook, Instagram, TikTok, Web) y te ayuda a <strong className="text-primary">organizar tu día con recordatorios y citas</strong>, todo desde una <strong className="text-primary">aplicación web en tu teléfono</strong>. Un sistema que no solo te ahorra dinero, sino que te <strong className="text-primary">libera para enfocarte en lo que mejor sabes hacer</strong>: crear, producir y hacer crecer tu negocio.
          </p>
          <p className="text-xl font-semibold text-primary">
            Tu nuevo socio estratégico: <strong className="text-primary">El Sistema de Mensajería Objetivo.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 