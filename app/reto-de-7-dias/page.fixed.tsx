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
            
            {/* Video Embed */}
            <div className="mt-8 lg:hidden">
              <div className="aspect-w-9 aspect-h-16 w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/efh2r4oUz90"
                  title="Video del Reto de 7 Días"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
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
          
          {/* Video and Form Container */}
          <div className="flex flex-col space-y-8">
            {/* Video Embed - Desktop */}
            <div className="hidden lg:block">
              <div className="aspect-w-9 aspect-h-16 w-full rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/efh2r4oUz90"
                  title="Video del Reto de 7 Días"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
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
      </div>
    </div>
  );
}
