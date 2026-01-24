import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que Dicen Nuestros Clientes
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo el Sistema de Mensajería Objetivo ha transformado la comunicación de empresas como la tuya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-xl">
                MR
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-700">María Rodríguez</h4>
                <p className="text-gray-600">CEO, Consultora Digital</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "El Sistema de Mensajería Objetivo ha revolucionado la forma en que manejamos nuestras comunicaciones. Ahora podemos atender a más clientes en menos tiempo y con mayor eficiencia."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-xl">
                JL
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-700">Juan López</h4>
                <p className="text-gray-600">Director, Agencia de Marketing</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "La automatización de respuestas nos ha permitido mantener una comunicación constante con nuestros clientes, incluso fuera del horario laboral. Es una herramienta indispensable."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-xl">
                AP
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-700">Ana Pérez</h4>
                <p className="text-gray-600">Fundadora, Tienda Online</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Desde que implementamos el sistema, hemos reducido nuestro tiempo de respuesta en un 70%. Nuestros clientes están más satisfechos y nuestras ventas han aumentado significativamente."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
            Únete a Nuestros Clientes Satisfechos
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 