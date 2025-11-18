'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseReto } from '@/src/lib/supabaseRetoClient';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombrePropietario: '',
    nombreRestaurante: '',
    ciudad: '',
    correo: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!formData.nombrePropietario.trim() || !formData.nombreRestaurante.trim() || !formData.ciudad.trim() || !formData.correo.trim() || !formData.telefono.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

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
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Tu Reto Comienza en 5 Minutos. Regístrate Ahora.
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
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ¿En qué ciudad está tu restaurante? *
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ej: Quito, Guayaquil, Cuenca, etc."
            />
          </div>
          
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Teléfono de Contacto *
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
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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
                '✅ SÍ, ACEPTO EL RETO - QUIERO EMPEZAR AHORA'
              )}
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Al hacer clic, sucederán 3 cosas automáticamente:</span>
                <br />
                <span className="inline-block mt-2">
                  1⃣ Recibirás email de confirmación (revisa spam si no llega en 2 min)<br />
                  2⃣ César te enviará un video de bienvenida en menos de 5 minutos<br />
                  3⃣ La primera pregunta del reto llegará mañana a las 9am
                </span>
                <br />
                <span className="inline-block mt-2 font-medium">⏰ La primera pregunta llega mañana a las 9am en punto</span>
              </p>
            </div>
          </div>
        </form>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          💡 Participar es 100% gratis. Solo pagas si ganas y decides contratar.
        </div>
      </div>
    </div>
  );
}
