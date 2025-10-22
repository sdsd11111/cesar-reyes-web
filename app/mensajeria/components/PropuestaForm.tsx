'use client';

import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const sectores = [
  "Comercio minorista",
  "Servicios profesionales",
  "Salud y bienestar",
  "Educación",
  "Tecnología y software",
  "Manufactura",
  "Construcción",
  "Alimentos y bebidas",
  "Turismo y hotelería",
  "Finanzas y seguros",
  "Marketing y publicidad",
  "Consultoría empresarial",
  "Servicios legales",
  "Servicios inmobiliarios",
  "Servicios de transporte",
  "Servicios de entretenimiento",
  "Servicios de belleza y estética",
  "Servicios de limpieza",
  "Servicios de mantenimiento",
  "Otro"
];

export default function PropuestaForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [showOtherSector, setShowOtherSector] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, any> = {};

      // Campos de texto y números
      for (let [key, value] of formData.entries()) {
        if (key !== 'plataformas_actuales') {
          // Convertir números
          if (['numero_empleados', 'mensajes_diarios', 'tiempo_chat'].includes(key)) {
            data[key] = parseInt(value as string) || 0;
          } else if (['tasa_conversion_actual', 'costo_hora', 'objetivo_conversion'].includes(key)) {
            data[key] = parseFloat(value as string) || 0;
          } else {
            if (key === 'sector') {
              if (value === 'Otro') {
                data[key] = formData.get('otherSector');
              } else {
                data[key] = value.toString();
              }
            } else {
              data[key] = value;
            }
          }
        }
      }

      // Manejar checkboxes de plataformas
      const plataformas = formData.getAll('plataformas_actuales');
      data.plataformas_actuales = plataformas;

      // Enviar al webhook
      const response = await fetch('https://hook.us2.make.com/uudym713yxclbefuz5b4mempaygmfrwj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage({
          text: '¡Gracias! Recibimos tus datos, pronto te contactaremos.',
          type: 'success'
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({
        text: 'Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <Accordion type="single" collapsible defaultValue="">
        <AccordionItem value="propuesta-form">
          <AccordionTrigger>
            <span className="text-2xl font-bold text-gray-800">Solicita tu propuesta personalizada</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Solicitud de Propuesta</h2>
                <p className="text-gray-600">Completa los datos para recibir una propuesta personalizada</p>
              </div>

              {message.text && (
                <div className={`p-4 rounded-lg mb-6 ${
                  message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {message.text}
                </div>
              )}

              {loading && (
                <div className="text-center py-4">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
                  <p className="mt-2 text-gray-600">Enviando datos...</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre_empresa" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de tu empresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre_empresa"
                    name="nombre_empresa"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                    Sector de tu negocio <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    onChange={(e) => {
                      if (e.target.value === "Otro") {
                        setShowOtherSector(true);
                      } else {
                        setShowOtherSector(false);
                      }
                    }}
                  >
                    <option value="">Selecciona un sector</option>
                    {sectores.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                {showOtherSector && (
                  <div>
                    <label htmlFor="otherSector" className="block text-sm font-medium text-gray-700 mb-1">
                      Especifica tu sector <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="otherSector"
                      name="otherSector"
                      required
                      placeholder="Escribe tu sector"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="nombre_contacto" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del responsable <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre_contacto"
                    name="nombre_contacto"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email_contacto" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico de contacto <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email_contacto"
                    name="email_contacto"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="telefono_contacto" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de WhatsApp / Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono_contacto"
                    name="telefono_contacto"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="numero_empleados" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de empleados que atienden mensajería <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="numero_empleados"
                    name="numero_empleados"
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="mensajes_diarios" className="block text-sm font-medium text-gray-700 mb-1">
                    Promedio de mensajes diarios por empleado <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="mensajes_diarios"
                    name="mensajes_diarios"
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="tasa_conversion_actual" className="block text-sm font-medium text-gray-700 mb-1">
                    Tasa de conversión actual (chat → venta) % <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="tasa_conversion_actual"
                    name="tasa_conversion_actual"
                    min="0"
                    max="100"
                    step="0.1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="costo_hora" className="block text-sm font-medium text-gray-700 mb-1">
                    Costo por hora de un empleado (USD) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="costo_hora"
                    name="costo_hora"
                    min="0"
                    step="0.01"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="objetivo_conversion" className="block text-sm font-medium text-gray-700 mb-1">
                    Tasa de conversión objetivo (%) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="objetivo_conversion"
                    name="objetivo_conversion"
                    min="0"
                    max="100"
                    step="0.1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="tiempo_chat" className="block text-sm font-medium text-gray-700 mb-1">
                    Tiempo promedio de atención por cliente (minutos) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="tiempo_chat"
                    name="tiempo_chat"
                    min="1"
                    required
                    placeholder="¿cuánto tiempo dedicas por cliente en promedio?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plataformas actuales (opcional)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="whatsapp"
                        name="plataformas_actuales"
                        value="WhatsApp"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="whatsapp" className="ml-2 text-sm text-gray-700">
                        WhatsApp
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="instagram"
                        name="plataformas_actuales"
                        value="Instagram"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="instagram" className="ml-2 text-sm text-gray-700">
                        Instagram
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="facebook"
                        name="plataformas_actuales"
                        value="Facebook Messenger"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="facebook" className="ml-2 text-sm text-gray-700">
                        Facebook Messenger
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="telegram"
                        name="plataformas_actuales"
                        value="Telegram"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="telegram" className="ml-2 text-sm text-gray-700">
                        Telegram
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="sitio_web" className="block text-sm font-medium text-gray-700 mb-1">
                    URL de tu sitio web (opcional)
                  </label>
                  <input
                    type="url"
                    id="sitio_web"
                    name="sitio_web"
                    placeholder="https://ejemplo.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="region_ubicacion" className="block text-sm font-medium text-gray-700 mb-1">
                    Ciudad / Región (opcional)
                  </label>
                  <input
                    type="text"
                    id="region_ubicacion"
                    name="region_ubicacion"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="comentarios_adicionales" className="block text-sm font-medium text-gray-700 mb-1">
                    Comentarios adicionales / necesidades especiales (opcional)
                  </label>
                  <textarea
                    id="comentarios_adicionales"
                    name="comentarios_adicionales"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar propuesta
                </button>
              </form>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 