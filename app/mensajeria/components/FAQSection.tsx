'use client';

import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestro Sistema de Mensajería Objetivo
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Qué es el Sistema de Mensajería Objetivo?
            </h4>
            <p className="text-gray-600">
              Es una plataforma integral que centraliza y automatiza todas tus comunicaciones (WhatsApp, Facebook, Instagram, TikTok, Web) en una sola interfaz, ayudándote a gestionar eficientemente tus mensajes y aumentar tu productividad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Cómo funciona la automatización de respuestas?
            </h4>
            <p className="text-gray-600">
              Nuestro sistema utiliza inteligencia artificial para analizar el contexto de cada mensaje y generar respuestas automáticas personalizadas. Puedes configurar diferentes tipos de respuestas según el tipo de consulta o el canal de comunicación.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Puedo probar el sistema antes de contratarlo?
            </h4>
            <p className="text-gray-600">
              Sí, ofrecemos una prueba gratuita de 14 días para que puedas evaluar todas las funcionalidades del sistema y ver cómo se adapta a tus necesidades específicas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Qué canales de comunicación soporta?
            </h4>
            <p className="text-gray-600">
              El sistema integra WhatsApp, Facebook Messenger, Instagram Direct, TikTok y mensajes web. Todos estos canales se gestionan desde una única interfaz, facilitando la atención a tus clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Es seguro el sistema?
            </h4>
            <p className="text-gray-600">
              Sí, implementamos las más altas medidas de seguridad, incluyendo encriptación de datos, autenticación de dos factores y cumplimiento con las regulaciones de protección de datos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Qué tipo de soporte ofrecen?
            </h4>
            <p className="text-gray-600">
              Ofrecemos soporte técnico 24/7 a través de email, chat y teléfono. Además, proporcionamos capacitación inicial y documentación detallada para que aproveches al máximo todas las funcionalidades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Puedo personalizar el sistema según mis necesidades?
            </h4>
            <p className="text-gray-600">
              Sí, el sistema es altamente personalizable. Puedes configurar respuestas automáticas, flujos de trabajo, etiquetas, y más, adaptándolo a tus procesos específicos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              ¿Qué sucede si necesito más usuarios o funcionalidades?
            </h4>
            <p className="text-gray-600">
              Nuestros planes son escalables. Puedes actualizar tu plan en cualquier momento para agregar más usuarios o acceder a funcionalidades avanzadas según tus necesidades.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 