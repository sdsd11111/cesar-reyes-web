import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            La Solución: Sistema de Mensajería Objetivo
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un sistema inteligente que centraliza y automatiza todas tus comunicaciones, liberando tu tiempo para lo que realmente importa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">🤖 Asistente Inteligente</h4>
              <p className="text-gray-600">
                Un asistente virtual que clasifica y responde automáticamente tus mensajes, priorizando lo importante y filtrando el spam.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">📱 Centralización</h4>
              <p className="text-gray-600">
                Todas tus comunicaciones (WhatsApp, Facebook, Instagram, TikTok, Web) en una sola plataforma accesible desde cualquier dispositivo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">⏰ Gestión de Tiempo</h4>
              <p className="text-gray-600">
                Organiza tu agenda con recordatorios y citas, optimizando tu tiempo y aumentando tu productividad.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Beneficios Clave</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Ahorro de tiempo significativo en la gestión de comunicaciones</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Respuestas más rápidas y eficientes a tus clientes</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Mejor organización y seguimiento de conversaciones</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Reducción de errores y omisiones en la comunicación</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-teal-500 mr-3 mt-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Mayor satisfacción del cliente y fidelización</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-teal-50 p-8 rounded-lg shadow-lg border border-teal-200">
          <h4 className="text-2xl font-semibold text-teal-700 mb-4">¿Listo para transformar tu comunicación?</h4>
          <p className="text-lg text-gray-700 mb-6">
            Únete a cientos de profesionales que ya están ahorrando tiempo y mejorando su productividad con nuestro Sistema de Mensajería Objetivo.
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
            Comienza Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 