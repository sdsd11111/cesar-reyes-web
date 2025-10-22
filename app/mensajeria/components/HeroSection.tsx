'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Sistema de Mensajería Objetivo
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Centraliza y automatiza todas tus comunicaciones en una sola plataforma. Optimiza tu tiempo y mejora la atención a tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                Comienza Gratis
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-colors duration-300">
                Ver Demo
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                <span className="font-semibold">+1000</span> empresas ya confían en nosotros
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-500">Sistema de Mensajería Objetivo</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">¡Hola! ¿Cómo puedo ayudarte hoy?</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Cliente • Ahora</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">Bienvenido a nuestro sistema de atención. Estoy aquí para asistirte con cualquier consulta que tengas.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Asistente • Ahora</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">Me gustaría saber más sobre los planes disponibles.</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Cliente • Ahora</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm text-gray-600">En línea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/XimtHCr7lSE?autoplay=1&mute=1&loop=1&playlist=XimtHCr7lSE&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Video Hero Mensajería"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover min-h-[300px] md:min-h-[600px] md:h-full"
          style={{ minHeight: '300px', height: '100%', width: '100%' }}
        ></iframe>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </section>
  );
};

export default HeroSection; 