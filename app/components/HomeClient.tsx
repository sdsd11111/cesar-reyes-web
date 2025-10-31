'use client'

import Image from "next/image"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { AreaChart, TrendingUp, Users } from "lucide-react";

// Importación de contenido y componentes
import { pageContent } from "../../lib/content";

type ServiceCard = {
  icon: string;
  title: string;
  description: string;
};

export default function HomeClient({ content, isEmotionalView }: { content: typeof pageContent.logico | typeof pageContent.emocional, isEmotionalView: boolean }) {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const router = useRouter();

  const handleChoice = (choice: 'logico' | 'emocional') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userChoice', choice);
    }
    if (choice === 'emocional') {
      router.push('/?view=emocional');
    } else {
      router.push('/');
    }
  };

  const services: ServiceCard[] = [
    {
      icon: 'chart',
      title: 'Estudios de Mercado',
      description: 'Análisis detallado para entender a tu audiencia y competencia.'
    },
    {
      icon: 'users',
      title: 'Estrategia Digital',
      description: 'Soluciones personalizadas para el crecimiento de tu negocio en línea.'
    },
    {
      icon: 'trending',
      title: 'Posicionamiento',
      description: 'Aumenta tu visibilidad y atrae más clientes potenciales.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/portada_cesarbn.webp" 
            alt="César Reyes fondo" 
            fill 
            priority 
            quality={100} 
            sizes="100vw" 
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4" style={{ fontFamily: 'var(--font-poiret-one)' }}>
            Consultor para Microempresas en Ecuador
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-6 drop-shadow-md" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Crece Más del 4% Anual con Datos Reales y Estrategias Probadas
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Especializado en estudios de mercado para microempresas, diseño web para profesionales y artesanos, y posicionamiento web en Ecuador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white/90 text-black font-bold hover:bg-white transition-transform hover:scale-105 px-8 py-4 text-lg rounded-lg"
              onClick={() => handleChoice('logico')}
            >
              Ver versión lógica
            </button>
            <button 
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 transition-transform hover:scale-105 px-8 py-4 text-lg rounded-lg font-bold"
              onClick={() => handleChoice('emocional')}
            >
              Ver versión emocional
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {isEmotionalView ? 'Transforma tu negocio con estrategias que realmente funcionan' : 'Soluciones Estratégicas para tu Negocio'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  {service.icon === 'chart' && <AreaChart className="w-6 h-6 text-blue-600" />}
                  {service.icon === 'users' && <Users className="w-6 h-6 text-blue-600" />}
                  {service.icon === 'trending' && <TrendingUp className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de negocio.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors"
            onClick={() => setIsChatModalOpen(true)}
          >
            Agendar Consulta Gratuita
          </button>
        </div>
      </section>
    </>
  );
}
