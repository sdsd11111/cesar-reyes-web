'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function StepsAccordion() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cómo Funciona (3 Pasos Simples)
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Todo sucede por WhatsApp. Sin complicaciones.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Step 1 */}
          <AccordionItem value="step-1" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-lg">1</span>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  📝 PASO 1: REGÍSTRATE (2 minutos)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 pl-14">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Completas el formulario de abajo
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Guardas nuestro WhatsApp en tu celular
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Recibes video de bienvenida de nuestro equipo
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Listo. Ya estás dentro.
                </p>
                <div className="pt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tiempo total: 2 minutos
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Step 2 */}
          <AccordionItem value="step-2" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-lg">2</span>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  📱 PASO 2: RESPONDE 1 PREGUNTA DIARIA (5 min/día x 7)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 pl-14">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Cada mañana (9am) recibes pregunta por WhatsApp
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    <span className="font-medium">Ejemplo:</span> "¿Cuánto tiempo toma actualizar un menú digital?"
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Puedes buscar la respuesta en Google (¡lo recomendamos!)
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Respondes directo por WhatsApp (opción múltiple A/B/C/D)
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Te confirmamos si acertaste en menos de 1 minuto
                </p>
                
                <div className="ml-6 mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-blue-700 dark:text-blue-300">Si aciertas:</p>
                  <p className="text-blue-600 dark:text-blue-200">Código descuento válido 24h</p>
                  
                  <p className="font-medium text-blue-700 dark:text-blue-300 mt-3">Si fallas:</p>
                  <p className="text-blue-600 dark:text-blue-200">Reintentas o esperas al siguiente día</p>
                </div>
                
                <div className="pt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tiempo: 5 minutos por día (35 min total semana)
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Step 3 */}
          <AccordionItem value="step-3" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-lg">3</span>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  🏆 PASO 3: RECLAMA TU PREMIO (Día 8)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-0">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 pl-14">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Completaste 7 días → Envías capturas por WhatsApp
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Verificamos tus respuestas (toma 5 min)
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Agendas tu llamada estratégica (15-30 min)
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  Recibes código 50% + acceso a plataforma completa
                </p>
                <div className="pt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tiempo: 1 llamada de 30 minutos
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
