'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

  // Validar formato de correo electrónico
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validar que el teléfono sea un número ecuatoriano válido
  const validatePhone = (phone: string) => {
    // Eliminar espacios y caracteres especiales
    const cleaned = phone.replace(/[^\d]/g, '');
    
    // Validar que solo contenga números
    if (!/^\d+$/.test(cleaned)) {
      return false;
    }
    
    // Validar longitud (7-10 dígitos)
    if (cleaned.length < 7 || cleaned.length > 10) {
      return false;
    }
    
    // Validar prefijos de Ecuador (móviles: 09, fijos: 02-08)
    const mobileRegex = /^09\d{7,8}$/;  // Móvil: 09 + 7-8 dígitos
    const landlineRegex = /^0[2-8]\d{7,8}$/; // Fijo: 02-08 + 7-8 dígitos
    
    return mobileRegex.test(cleaned) || landlineRegex.test(cleaned);
  };

  // Verificar si ya existe un registro con el mismo correo
  const checkExistingEmail = async (email: string) => {
    const { data, error } = await supabaseReto
      .from('reto_7_dias')
      .select('correo')
      .eq('correo', email);
    
    if (error) throw error;
    return data && data.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones del lado del cliente
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
      // 1. Verificar si el correo ya está registrado
      const { data: existingUser } = await supabaseReto
        .from('reto_7_dias')
        .select('correo')
        .eq('correo', formData.correo.trim().toLowerCase())
        .single();

      if (existingUser) {
        setError('Este correo electrónico ya está registrado. Por favor, utiliza otro correo o contáctanos si necesitas ayuda.');
        return;
      }

      // 2. Insertar en Supabase
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

      // 3. Enviar correo de bienvenida
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
        // No mostramos error al usuario si falla el correo pero el registro fue exitoso
      }

      // 4. Mostrar mensaje de éxito
      alert('¡Gracias por registrarte! Te hemos enviado un correo con los siguientes pasos.');
      
      // 5. Limpiar el formulario
      setFormData({
        nombrePropietario: '',
        nombreRestaurante: '',
        ciudad: '',
        correo: '',
        telefono: ''
      });
      
    } catch (err: any) {
      console.error('Error en el registro:', err);
      
      // Manejar errores específicos de Supabase
      if (err.code === '23505') { // Violación de restricción única
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
        <div className="w-full max-w-[95%] 2xl:max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-white leading-tight mb-8">
              Gana 50% de Descuento en Tu Plataforma Digital
            </h1>
            <p className="text-xl md:text-2xl xl:text-3xl text-white dark:text-blue-100 mb-6 font-medium">
              Responde 7 Preguntas Sobre "Menú Objetivo"
            </p>
            <div className="mb-12 max-w-2xl">
              <p id="hero-text" className="text-xl xl:text-2xl text-blue-100 dark:text-blue-200">
                No es sorteo. No es azar. Todos los que completan el reto
                <span id="hero-more" className="hidden">, ganan. Solo necesitas 5 minutos al día durante 7 días.</span>
              </p>
              <button 
                id="read-more-btn" 
                className="mt-2 text-blue-200 hover:text-white text-sm font-medium focus:outline-none lg:hidden"
                onClick={() => {
                  document.getElementById('hero-more')?.classList.toggle('hidden');
                  const btn = document.getElementById('read-more-btn');
                  if (btn) {
                    btn.textContent = btn.textContent === 'Seguir leyendo...' ? 'Mostrar menos' : 'Seguir leyendo...';
                  }
                }}
              >
                Seguir leyendo...
              </button>
            </div>
            
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
          
          {/* Form Section - Desktop */}
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
                  <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                    Al registrarte, aceptas nuestros Términos y Política de Privacidad
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Combined Video & Logos Section */}
        <section className="mt-20 w-full bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Column */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {/* Video Placeholder */}
                <div className="relative pt-[56.25%] bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Video: "El Reto de los 7 Días"</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duración: 30 segundos</p>
                    </div>
                  </div>
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
                  
                  {/* Logos Grid */}
                  <div className="grid grid-cols-3 gap-6 py-4">
                    <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        [Logo Cámara de Comercio de Loja]
                      </span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        [Logo Asociación de Restaurantes]
                      </span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        [Logo Verificación]
                      </span>
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
                🏆 Premio Final al Completar los 7 Días:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '🍽️', title: 'Menú Objetivo', price: 'Precio Normal $1000' },
                  { icon: '🔍', title: 'Estrategia SEO', price: '$700' },
                  { icon: '💡', title: '3 Sesiones Estratégicas con César', price: '$300 valor' },
                  { icon: '⚡', title: 'Prioridad en implementación (3-5 días)', price: '$2000 valor' }
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
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  $2000 dólares en descuentos
                </p>
                <p className="text-3xl font-extrabold text-orange-500">
                  X
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  un único pago de $500 dólares
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  💡 Puedes usar el código inmediatamente, o esperar máximo 2 semanas
                </p>
                <p className="font-medium">Tú decides.</p>
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
                  <h4 className="text-xl font-bold mb-2">50% DE DESCUENTO EN MENÚ OBJETIVO</h4>
                  <p className="font-medium">Ahorro real: $1500</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  El sistema completo para automatizar tu menú y aparecer en Google, a un precio de lanzamiento.
                  Este descuento aplica para:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  <li>Planificación y Estudios Sectorial</li>
                  <li>Configuración técnica y SEO</li>
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
      </div>
    </div>
  );
};
