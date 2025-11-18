'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { supabaseReto } from '@/src/lib/supabaseRetoClient';
import { StepsAccordion } from './components/StepsAccordion';
import { SessionsAccordion } from './components/SessionsAccordion';
import { ServiceTabs } from './components/ServiceTabs';
import { FAQAccordion } from './components/FAQAccordion';
import { RegistrationForm } from './components/RegistrationForm';

export default function Reto7DiasPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombrePropietario: '',
    nombreRestaurante: '',
    ciudad: '',
    correo: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/[^\d]/g, '');
    if (!/^\d+$/.test(cleaned)) {
      return false;
    }
    if (cleaned.length < 7 || cleaned.length > 10) {
      return false;
    }
    const mobileRegex = /^09\d{7,8}$/;
    const landlineRegex = /^0[2-8]\d{7,8}$/;
    return mobileRegex.test(cleaned) || landlineRegex.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.correo)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (!validatePhone(formData.telefono)) {
      setError('Por favor ingresa un número de teléfono ecuatoriano válido (Ej: 0991234567 o 022345678)');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: existingUser } = await supabaseReto
        .from('reto_7_dias')
        .select('correo')
        .eq('correo', formData.correo.trim().toLowerCase())
        .single();

      if (existingUser) {
        setError('Este correo electrónico ya está registrado. Por favor, utiliza otro correo o contáctanos si necesitas ayuda.');
        return;
      }

      const { data, error } = await supabaseReto
        .from('reto_7_dias')
        .insert([{
          nombre_propietario: formData.nombrePropietario.trim(),
          nombre_restaurante: formData.nombreRestaurante.trim(),
          ciudad: formData.ciudad.trim(),
          correo: formData.correo.trim().toLowerCase(),
          telefono: formData.telefono.trim()
        }])
        .select();

      if (error) throw error;

      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.correo.trim().toLowerCase(),
          nombre: formData.nombrePropietario.trim(),
          restaurante: formData.nombreRestaurante.trim()
        }),
      });

      const emailResult = await emailResponse.json();
      
      if (!emailResponse.ok) {
        console.error('Error en la respuesta del correo:', emailResult);
      }

      alert('¡Gracias por registrarte! Te hemos enviado un correo con los siguientes pasos.');
      
      setFormData({
        nombrePropietario: '',
        nombreRestaurante: '',
        ciudad: '',
        correo: '',
        telefono: ''
      });
      
    } catch (err: any) {
      console.error('Error en el registro:', err);
      
      if (err.code === '23505') {
        setError('Este correo electrónico ya está registrado. Por favor, utiliza otro correo o contáctanos si necesitas ayuda.');
      } else {
        setError('Ocurrió un error al procesar tu registro. Por favor, inténtalo de nuevo o contáctanos directamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-gray-800 dark:to-gray-900 pt-16">
        <div className="w-full max-w-[95%] 2xl:max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[75vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-white leading-tight mb-8">
              Gana $2,000 en Servicios Estratégicos Para Tu Restaurante
            </h1>
            <p className="text-xl md:text-2xl xl:text-3xl text-white dark:text-blue-100 mb-6 font-medium">
              Respondiendo 1 Pregunta al Día por WhatsApp
            </p>
            <div className="mb-12 max-w-2xl">
              <p id="hero-text" className="text-xl xl:text-2xl text-blue-100 dark:text-blue-200">
                No es sorteo. Es un reto de 7 días.
                <span id="hero-more" className="hidden lg:inline"> Todos los que completan, ganan el paquete completo de implementación y estrategia.</span>
              </p>
              <button 
                id="read-more-btn" 
                className="mt-2 text-blue-200 hover:text-white text-sm font-medium focus:outline-none lg:hidden"
                onClick={() => {
                  const moreText = document.getElementById('hero-more');
                  const btn = document.getElementById('read-more-btn');
                  if (moreText && btn) {
                    moreText.classList.toggle('hidden');
                    btn.textContent = moreText.classList.contains('hidden') ? 'Seguir leyendo...' : 'Mostrar menos';
                  }
                }}
              >
                Seguir leyendo...
              </button>
            </div>
            
            {/* Video Embed Removed */}
            
            {/* Mobile only - Show form in a card on small screens */}
            <div className="lg:hidden mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ¡Empieza Ahora!
              </h2>
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombrePropietario" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre del Propietario *
                  </label>
                  <input
                    type="text"
                    id="nombrePropietario"
                    name="nombrePropietario"
                    value={formData.nombrePropietario}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="nombreRestaurante" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre del Restaurante *
                  </label>
                  <input
                    type="text"
                    id="nombreRestaurante"
                    name="nombreRestaurante"
                    value={formData.nombreRestaurante}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu restaurante"
                  />
                </div>
                
                <div>
                  <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ciudad donde está tu restaurante"
                  />
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: 0991234567"
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </>
                    ) : (
                      'Comenzar el Reto Gratis'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Video and Form Container */}
          <div className="flex flex-col space-y-8">
            {/* Video Embed Removed */}
            
            {/* Desktop Form */}
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  ¡Empieza el Reto Ahora!
                </h2>
              
                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
              
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombrePropietario" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre del Propietario *
                    </label>
                    <input
                      type="text"
                      id="nombrePropietario"
                      name="nombrePropietario"
                      value={formData.nombrePropietario}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="nombreRestaurante" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre del Restaurante *
                    </label>
                    <input
                      type="text"
                      id="nombreRestaurante"
                      name="nombreRestaurante"
                      value={formData.nombreRestaurante}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nombre de tu restaurante"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ciudad donde está tu restaurante"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ej: 0991234567"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Procesando...
                        </>
                      ) : (
                        'Comenzar el Reto Gratis'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Video & Logos Section */}
        <section className="mt-20 w-full bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Column - Mobile Vertical */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {/* Video de YouTube */}
                <div className="relative pt-[177.78%] md:pt-[56.25%] bg-black">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/efh2r4oUz90?autoplay=0&rel=0&showinfo=0"
                    title="El Reto de los 7 Días - César Reyes"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Content */}
                <div className="p-6">
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic border-l-4 border-orange-500 pl-4 my-4">
                    "Soy César Reyes, fundador de Objetivo. Si tienes un restaurante y sientes que tu competencia te está dejando atrás en internet, este reto es para ti."
                  </blockquote>
                  
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>7 días. 7 preguntas. Un solo objetivo.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Logos Column */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-6">
                    Una iniciativa respaldada por:
                  </p>
                  
                  {/* Logos Grid - Tamaño aumentado */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 py-4 sm:py-6 items-center">
                    <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src="/images/categorias/reto 7 dias/camara de comercio loja.png" 
                        alt="Cámara de Comercio de Loja" 
                        className="h-full w-auto object-contain filter drop-shadow-lg"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                    <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src="/images/categorias/reto 7 dias/municipio de loja.png" 
                        alt="Municipio de Loja" 
                        className="h-full w-auto object-contain filter drop-shadow-lg"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                    <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src="/images/categorias/reto 7 dias/ministeria de turismo.png" 
                        alt="Ministerio de Turismo" 
                        className="h-full w-auto object-contain filter drop-shadow-lg"
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 mb-6">
                      <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      ⏰ Edición limitada
                    </span>
                    
                    <p className="text-lg font-medium text-gray-800 dark:text-white mb-6">
                      ¿Estás listo? Regístrate ahora. Máximo 20 participantes.
                    </p>
                    
                    <a 
                      href="#formulario" 
                      className="inline-block w-full max-w-md bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
                    >
                      QUIERO EMPEZAR AHORA
                    </a>
                    
                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="inline-flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Sin trampas
                      </span>
                      <span className="inline-flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Sin costos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <div 
          className="w-full py-16 md:py-24 relative bg-cover bg-center bg-fixed" 
          style={{ 
            backgroundImage: 'url(/images/categorias/reto%207%20dias/seccion%201.webp)' 
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>
          <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[85%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cómo Funciona el Reto
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Sigue estos simples pasos para completar el reto y ganar tu descuento
              </p>
            </div>
            <StepsAccordion />
          </div>
        </div>

        {/* Golden Rule Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Golden Rule Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 mb-16 border-2 border-yellow-400">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
                Sin Sorteos. Sin Azar. Sin Límite de Ganadores.
              </h3>
              <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
                TODO participante que responde correctamente 7 preguntas, GANA. Completas 7 días = Ganas el paquete completo. Garantizado.
              </p>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
              
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                🏆 Premio Final: El Paquete "Fundador" (Valor $2,000)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '🌐', title: 'Plataforma digital hasta 20 páginas', price: 'Incluye dominio, hosting 2 años' },
                  { icon: '💬', title: '3 Sesiones Estratégicas 1-1 con César', price: '' },
                  { icon: '🔍', title: 'Estrategia de Posicionamiento SEO', price: '' },
                  { icon: '📊', title: 'Auditoría a los 6 meses', price: 'Implementación y Análisis de Métricas' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-orange-500 font-medium">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Informes Mensuales de rendimiento
                </h3>
                <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-bold mb-2">
                  Inversión al Ganar: $500
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  (Costo de la plataforma $500 único pago)
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  💡 Acceso a métricas detalladas de rendimiento
                </p>
                <p className="font-medium">Toma decisiones basadas en datos.</p>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="space-y-16">
              {/* Benefit 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🎯</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Beneficios Inmediatos
                  </h3>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-6">
                  <h4 className="text-xl font-bold mb-2">PLATAFORMA DIGITAL 100% PERSONALIZADA</h4>
                  <p className="font-medium">Ahorro real: $1500 <span className="text-yellow-300">💰</span> <span className="block sm:inline">Precio regular: $2000 | Precio con reto: $500</span></p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Sistema completo para automatizar tu restaurante, menú automatizado y estrategia de posicionamiento para aparecer en búsquedas en internet.
                </p>
                
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Beneficios directos:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  <li>Actualización del menú o de la portada para promociones en 1 minuto.</li>
                  <li>20 Páginas Individuales optimizadas (servicio o producto.)</li>
                  <li>Hoja de ruta para el posicionamiento.</li>
                  <li>Tu dominio y hosting (2 años)</li>
                </ul>
                
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    💰 Precio regular: <span className="line-through">$2000</span> | 
                    Precio con reto: <span className="font-bold text-orange-500">$500</span>
                  </p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">🧠</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Tu Mapa de Ruta Personalizado
                  </h3>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white mb-6">
                  <h4 className="text-xl font-bold mb-2">3 SESIONES ESTRATÉGICAS 1-A-1 CON CÉSAR REYES</h4>
                  <p className="font-medium">Valor: $700 (incluido 100% gratis)</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  No te dejamos solo con la plataforma. César te guía personalmente en 3 videollamadas:
                </p>
                
                <SessionsAccordion />
                
                {/* Warning Box */}
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                        PARA QUIÉN NO ES ESTO:
                      </h3>
                      <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                        <p className="mb-2">
                          Si solo quieres "una página web bonita" para poner en tu Instagram, este no es tu programa. 
                          Esto es para dueños que quieren resultados medibles:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Aparecer en Google cuando buscan tu tipo de comida</li>
                          <li>Atraer clientes nuevos cada semana de forma orgánica</li>
                          <li>Dejar de depender 100% de redes sociales</li>
                        </ul>
                        <p className="mt-3 font-medium">Si ese eres tú, bienvenido.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div 
          className="w-full py-16 md:py-24 relative bg-cover bg-center bg-fixed" 
          style={{ 
            backgroundImage: 'url(/images/categorias/reto%207%20dias/seccion%202.webp)' 
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>
          <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[85%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Descripción de Servicios
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Todo lo que incluye tu plataforma digital personalizada
              </p>
            </div>
            <ServiceTabs />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQAccordion />
        </div>

        {/* Registration Section */}
        <div className="relative w-full mt-20" style={{ minHeight: 'calc(100vh - 5rem)' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(/images/categorias/reto%207%20dias/seccion%203.webp)',
              height: '100%'
            }}
          >
            <div className="absolute inset-0 bg-black/50 dark:bg-black/80"></div>
          </div>
          
          <div className="relative z-10 w-full h-full flex flex-col">
            <div className="w-full max-w-[95%] 2xl:max-w-[85%] mx-auto py-12 flex-grow flex flex-col">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Tu Reto Comienza en 5 Minutos
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Regístrate ahora y comienza a transformar la presencia digital de tu restaurante
                </p>
              </div>
              <div className="max-w-3xl mx-auto w-full">
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Artículos del Reto */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
              📚 Los 7 Artículos del Reto
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
              Cada día recibirás una pregunta cuya respuesta encontrarás en estos artículos educativos. 
              Están diseñados para que entiendas cómo funciona el tráfico orgánico y dejes de depender de redes sociales.
              <span className="block mt-2 font-medium text-blue-600 dark:text-blue-400">
                Haz clic en cada módulo para ver los artículos correspondientes.
              </span>
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 mb-12">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="modulo1" className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-[#FF6B00] text-left">Módulo 1: El Costo de la Gestión Manual</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <ul className="space-y-3">
                      <li>
                        <a href="/blog/menu-objetivo/el-tiempo-que-estas-perdiendo-sin-saberlo" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 1: El Tiempo Que Estás Perdiendo Sin Saberlo →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            Descubre cuántas horas al mes pierdes actualizando tu menú manualmente y cómo reducirlas a menos de 1 minuto.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/blog/menu-objetivo/el-gasto-mensual-que-puedes-eliminar-hoy-mismo-rxucgu" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 2: El Gasto Mensual Que Puedes Eliminar Hoy Mismo →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            Calcula el costo real: $2,880 dólares al año que estás pagando por gestión manual.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/blog/menu-objetivo/la-razon-por-la-que-pierdes-clientes-en-whatsapp-y-no-lo-sabias" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 3: La Razón Por La Que Pierdes Clientes en WhatsApp →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            El 75% de tus clientes usa móviles para ordenar. Las fotos borrosas los están ahuyentando.
                          </p>
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="modulo2" className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-xl font-bold text-[#FF6B00] text-left">Módulo 2: La Oportunidad del Tráfico Orgánico</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <ul className="space-y-3">
                      <li>
                        <a href="/blog/menu-objetivo/la-cuenta-que-nadie-quiere-hacer-cuanto-te-cuesta-no-ser-visible-online" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 4: La Cuenta Que Nadie Quiere Hacer →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            Más de $4,000 dólares en clientes perdidos por no estar visible en Google. Haz las cuentas.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/blog/menu-objetivo/por-que-google-muestra-primero-restaurantes" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 5: ¿Por Qué Google Muestra Primero a Ciertos Restaurantes? →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            El factor de "frescura" que Google prioriza y que puedes automatizar en tu negocio.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/blog/menu-objetivo/por-que-tu-competencia-aparece-primero-en-google-y-no-es-suerte" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 6: Por Qué Tu Competencia Aparece Primero en Google →</span>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            No es suerte. El 62% de clientes descubre restaurantes en Google, no en redes sociales.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/blog/menu-objetivo/la-tecnologia-que-recupera-tu-tiempo-y-tu-vida" 
                           className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">Día 7: La Tecnología Que Recupera Tu Tiempo (Y Tu Vida) →</span>
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 rounded-r-lg">
                <p className="text-gray-800 dark:text-amber-100 text-lg">
                  <strong>El resumen final:</strong> 283 horas recuperadas al año + $4,000 en nuevas ventas. Tu decisión.
                </p>
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-300 font-medium">
                    💡 <strong>Completa los 7 días y obtén 50% de descuento</strong> en la plataforma completa Menú Objetivo (ahorro de $500).
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF6B00] hover:bg-[#E66000] text-white font-bold py-5 px-12 rounded-lg shadow-lg transition-colors text-xl"
              >
                🚀 Quiero Comenzar el Reto Ahora
              </a>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                🔒 Acceso inmediato. Sin tarjeta de crédito. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
