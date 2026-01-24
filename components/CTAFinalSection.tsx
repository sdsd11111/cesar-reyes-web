'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Download } from 'lucide-react';
import { supabaseArtes } from '@/src/lib/supabaseArtesClient';
import { sendArtesVivasEmail } from '@/app/utils/emailService';

export default function CTAFinalSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [spotsLeft, setSpotsLeft] = useState(20);
  
  // Countdown timer
  useEffect(() => {
    // Set the date we're counting down to (November 30, 2024 23:59:59)
    const countDownDate = new Date('Nov 30, 2024 23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update immediately
    updateCountdown();
    
    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    tipo_artesania: '',
    tipo_personalizado: '',
    terminos: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  
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
    setSubmitStatus({ type: null, message: '' });

    // Validaciones
    if (!formData.nombre || !formData.email || !formData.whatsapp || !formData.tipo_artesania) {
      setSubmitStatus({ type: 'error', message: 'Todos los campos son obligatorios' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Por favor ingresa un correo electrónico válido' });
      return;
    }

    if (!validatePhone(formData.whatsapp)) {
      setSubmitStatus({ type: 'error', message: 'Por favor ingresa un número de WhatsApp válido' });
      return;
    }

    if (!formData.terminos) {
      setSubmitStatus({ type: 'error', message: 'Debes aceptar los términos y condiciones' });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Iniciando proceso de guardado...');
      console.log('URL de Supabase:', process.env.NEXT_PUBLIC_SUPABASE_ARTS_URL);
      
      // 1. Verificar conexión con Supabase
      const { data: versionData, error: versionError } = await supabaseArtes.rpc('version');
      console.log('Versión de Supabase:', versionData, 'Error:', versionError);
      
      // 2. Verificar si el correo ya está registrado
      console.log('Buscando usuario existente con email:', formData.email.trim().toLowerCase());
      const { data: existingUser, error: searchError } = await supabaseArtes
        .from('artes_vivas_registros')
        .select('id, email')
        .eq('email', formData.email.trim().toLowerCase())
        .maybeSingle();
        
      if (searchError) {
        console.error('Error al buscar usuario existente:', searchError);
        throw searchError;
      }
      
      console.log('Usuario existente:', existingUser ? `Sí (ID: ${existingUser.id})` : 'No');

      // 3. Preparar datos para insertar/actualizar
      const registroData = {
        nombre: formData.nombre.trim(),
        email: formData.email.trim().toLowerCase(),
        whatsapp: formData.whatsapp.trim(),
        tipo_artesania: formData.tipo_artesania,
        tipo_personalizado: formData.tipo_personalizado || null,
        terminos_aceptados: true,
        estado: 'pendiente',
        updated_at: new Date().toISOString(),
        ...(!existingUser && { created_at: new Date().toISOString() })
      };

      console.log('Datos a guardar:', JSON.stringify(registroData, null, 2));

      let data, error;
      
      // 4. Insertar o actualizar según corresponda
      if (existingUser) {
        console.log('Actualizando registro existente...');
        const result = await supabaseArtes
          .from('artes_vivas_registros')
          .update(registroData)
          .eq('email', formData.email.trim().toLowerCase())
          .select();
        
        console.log('Resultado de actualización:', {
          data: result.data,
          error: result.error,
          status: result.status,
          statusText: result.statusText
        });
        
        data = result.data;
        error = result.error;
      } else {
        console.log('Creando nuevo registro...');
        const result = await supabaseArtes
          .from('artes_vivas_registros')
          .insert([registroData])
          .select();
          
        console.log('Resultado de inserción:', {
          data: result.data,
          error: result.error,
          status: result.status,
          statusText: result.statusText
        });
        
        data = result.data;
        error = result.error;
      }

      if (error) {
        // Only log the error message and code, which are guaranteed to exist on PostgrestError
        console.error('Error de Supabase:', {
          message: error.message,
          code: error.code,
          // Only include details and hint if they exist
          ...(error.details && { details: error.details }),
          ...(error.hint && { hint: error.hint })
        });
        
        // Mostrar mensaje de error más amigable al usuario
        let userMessage = 'Ocurrió un error al guardar tus datos. Por favor, inténtalo de nuevo.';
        
        if (error.code === '42501') {
          userMessage = 'Error de permisos. No tienes permiso para realizar esta acción.';
        } else if (error.code === '23505') {
          userMessage = 'Este correo electrónico ya está registrado.';
        }
        
        setSubmitStatus({ 
          type: 'error', 
          message: userMessage 
        });
        
        return; // Salir de la función para no continuar con el envío del correo
      }

      // 5. Si llegamos aquí, el guardado fue exitoso
      console.log('Datos guardados correctamente:', data);
      
      // 6. Enviar correo de confirmación a través de la API
      const sendEmail = async () => {
        try {
          console.log('Preparando envío de correo de Artes Vivas con datos:', {
            to: formData.email.trim().toLowerCase(),
            nombre: formData.nombre.trim(),
            tipoArtesania: formData.tipo_artesania,
            whatsapp: formData.whatsapp,
            tipoPersonalizado: formData.tipo_personalizado || undefined
          });
          
          const response = await fetch('/api/send-artes-vivas-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: formData.email.trim().toLowerCase(),
              nombre: formData.nombre.trim(),
              tipoArtesania: formData.tipo_artesania,
              whatsapp: formData.whatsapp,
              tipoPersonalizado: formData.tipo_personalizado || undefined
            }),
          });
          
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error al enviar el correo:', errorData.error || 'Error desconocido');
            return false;
          }
          
          const result = await response.json();
          console.log('Correo de Artes Vivas enviado correctamente:', result.messageId);
          return true;
          
        } catch (emailError) {
          console.error('Error al enviar el correo:', emailError);
          return false;
        }
      };
      
      // Intentar enviar el correo hasta 2 veces si falla
      let emailSent = false;
      let attempts = 0;
      const maxAttempts = 2;
      
      while (!emailSent && attempts < maxAttempts) {
        attempts++;
        console.log(`Intento ${attempts} de enviar el correo...`);
        emailSent = await sendEmail();
        
        if (!emailSent && attempts < maxAttempts) {
          // Esperar 1 segundo antes de reintentar
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      if (!emailSent) {
        console.warn('No se pudo enviar el correo después de varios intentos');
        // Aunque falle el correo, continuamos con el flujo normal
      }

      // Éxito - Mostrar mensaje al usuario
      setSubmitStatus({ 
        type: 'success', 
        message: existingUser 
          ? '¡Tus datos han sido actualizados correctamente y se ha reenviado el correo de confirmación!' 
          : '¡Registro exitoso! Por favor revisa tu correo electrónico.'
      });
      
      // Limpiar formulario solo si es un nuevo registro
      if (!existingUser) {
        setFormData({
          nombre: '',
          email: '',
          whatsapp: '',
          tipo_artesania: '',
          tipo_personalizado: '',
          terminos: false
        });
      }

      setSubmitStatus({ 
        type: 'success', 
        message: '¡Registro exitoso! Pronto nos pondremos en contacto contigo.' 
      });

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error al guardar el registro:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage.includes('No tienes permiso') 
          ? errorMessage 
          : 'Ocurrió un error al procesar tu registro. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserva" className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Último Llamado: Solo Quedan {spotsLeft} Lugares
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Reserva tu página web hoy y comienza a vender más desde la comodidad de tu taller.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Cuando reserves tu lugar, recibirás:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white">Confirmación inmediata por WhatsApp</span>
                  <p className="text-blue-100 text-sm">Recibirás un mensaje con los siguientes pasos</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white">Formulario simple para enviarnos tu info</span>
                  <p className="text-blue-100 text-sm">Solo necesitamos lo esencial para comenzar</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white">Tu posición en la lista de entrega</span>
                  <p className="text-blue-100 text-sm">Sabrás exactamente cuándo estará lista tu página</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white">Fecha exacta de entrega</span>
                  <p className="text-blue-100 text-sm">Sin sorpresas, te diremos exactamente cuándo estará lista</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Check className="h-6 w-6 text-green-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white">Acceso a grupo de WhatsApp con otros artesanos</span>
                  <p className="text-blue-100 text-sm">Comparte experiencias y haz crecer tu red de contactos</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-blue-700 bg-opacity-30 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-lg text-yellow-300 mb-3">Y en máximo 6 días:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-300 mr-2" />
                  <span className="text-white">Tu página web funcionando</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-300 mr-2" />
                  <span className="text-white">Tutorial de 5 min de cómo usarla</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-300 mr-2" />
                  <span className="text-white">3 meses de soporte incluido</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              FORMULARIO DE RESERVA
            </h3>
            
            {submitStatus.message && (
            <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form id="formulario-reserva-artes-vivas" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ejemplo: 593987654321"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="tipo_artesania" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de artesanía <span className="text-red-500">*</span>
                </label>
                <select
                  id="tipo_artesania"
                  name="tipo_artesania"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={formData.tipo_artesania}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Cerámica">Cerámica</option>
                  <option value="Textil">Textil</option>
                  <option value="Joyería">Joyería</option>
                  <option value="Madera">Madera</option>
                  <option value="Cuero">Cuero</option>
                  <option value="Otro">Otro (especificar abajo)</option>
                </select>
                
                {formData.tipo_artesania === 'Otro' && (
                  <div className="mt-2">
                    <input
                      type="text"
                      name="tipo_personalizado"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Especifica tu tipo de artesanía"
                      value={formData.tipo_personalizado}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terminos"
                    name="terminos"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    checked={formData.terminos}
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terminos" className="font-medium text-gray-700">
                    He leído y acepto las bases y condiciones <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-[1.02] shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                  <>
                    <span>RESERVAR MI LUGAR</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Al hacer clic, te contactaremos en 24h para confirmar detalles y método de pago.
                <br />
                No se cobra hasta que confirmes.
              </p>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700 mb-4">¿Prefieres hablar primero?</p>
              
              <div className="space-y-3">
                <Button
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0', '_blank')}
                >
                  <span>Escribir por WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgency Banner */}
        <div className="mt-16 bg-red-600 text-white rounded-xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-xl font-bold">IMPORTANTE:</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <p className="flex-1 font-medium">
                    La promoción está disponible solo para los primeros 30 artesanos o artistas que reserven.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <p className="flex-1 font-medium">
                    Debes enviar toda la información necesaria para tu sitio (textos, imágenes, etc.) antes del 
                    <span className="text-yellow-300 font-bold"> 31 de diciembre de 2025</span>.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <p className="flex-1 font-medium">
                    Después de completar los 30 cupos, la oferta ya no estará disponible bajo las condiciones promocionales.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-20 p-4 rounded-lg text-center min-w-[200px]">
              <div className="text-sm font-medium mb-1">QUEDAN</div>
              <div className="text-3xl font-bold">{spotsLeft} LUGARES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
