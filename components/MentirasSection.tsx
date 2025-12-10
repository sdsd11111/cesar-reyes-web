'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, X, AlertTriangle, BarChart2, DollarSign, Smartphone, Target, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CalculadoraInversion from './CalculadoraInversion';

export default function MentirasSection() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <section className="py-20 bg-white" id="mentiras">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            5 Mentiras Que Te Están Costando Clientes (Y Dinero)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escuchas estas frases todos los días. Son mentiras cómodas que mantienen tu negocio invisible.
          </p>
          <p className="text-xl font-medium text-gray-800 mt-4">
            Aquí está la verdad que nadie te dice:
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6 w-full" defaultValue="mentira-1">
          {/* Mentira 1 */}
          <AccordionItem value="mentira-1" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="h-6 w-6 text-red-600" />
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    "Las páginas web ya no funcionan, ahora todo es en redes"
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t text-gray-800">
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">LA VERDAD:</h4>
                        <p className="text-gray-800 mt-1">
                          Las redes sociales son para mostrar tu día a día. Google es donde la gente busca cuando QUIERE COMPRAR.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart2 className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Google</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">8.5 billones</p>
                      <p className="text-sm text-gray-700">de búsquedas diarias</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart2 className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Facebook</h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-900">1 billón</p>
                      <p className="text-sm text-gray-700">de interacciones diarias</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 border-l-4 border-amber-500">
                    <p className="font-medium text-amber-800">
                      Pregunta honesta: ¿Dónde preferirías que te busquen?
                    </p>
                    <p className="mt-2 text-gray-800">
                      Son complementarias, no excluyentes. Pero si solo tienes Facebook y tu competencia tiene Google + Facebook, ¿quién crees que vende más?
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          {/* Mentira 2 */}
          <AccordionItem value="mentira-2" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="h-6 w-6 text-red-600" />
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    "Puedo hacerla gratis en YouTube en 2 clics"
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t text-gray-800">
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b">Según YouTube</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-gray-100 border-b">PÁGINA PROFESIONAL OBJETIVO</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { youtube: '❌ Plantilla genérica', objetivo: '✅ Diseño personalizado a tu negocio' },
                          { youtube: '❌ Nadie la encuentra', objetivo: '✅ Configurada para aparecer en Google' },
                          { youtube: '❌ Sin soporte', objetivo: '✅ 3 meses soporte incluido' },
                          { youtube: '❌ TÚ haces TODO', objetivo: '✅ Nosotros lo hacemos en 3 días' },
                          { youtube: '⏱️ 90+ horas tu tiempo', objetivo: '⏱️ 0 horas tu tiempo' }
                        ].map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-4 py-3 text-sm text-gray-800 border-r">{item.youtube}</td>
                            <td className="px-4 py-3 text-sm text-gray-800">{item.objetivo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">LA VERDAD:</h4>
                        <p className="text-gray-800 mt-1">
                          Puedes aprender a cortar pelo en YouTube. O puedes ir donde un profesional.
                        </p>
                        <p className="text-gray-700 mt-2">
                          Puedes hacer tu web en YouTube. O puedes dejar que programadores con 25 años de experiencia la hagan en 3 días.
                        </p>
                        <p className="font-medium text-gray-800 mt-3">
                          ¿Cuánto vale tu tiempo? ¿Cuánto vale hacerlo bien desde el inicio?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          {/* Mentira 3 - Con calculadora */}
          <AccordionItem value="mentira-3" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="h-6 w-6 text-red-600" />
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    "Es muy caro, no puedo invertir $150"
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t text-gray-800">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Resumen de lo que compras:</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Dominio personalizado (ej: www.tuartesania.com)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Diseño profesional enfocado en conversiones</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Estrategia de posicionamiento inicial</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Hosting y Dominio por 1 año</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Catálogo de productos/servicios</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Formulario y correo corporativo</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">¿Cuánto necesitas vender para recuperar la inversión?</h4>
                    
                    {!showCalculator ? (
                      <Button 
                        onClick={() => setShowCalculator(true)}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Calcular Ahora
                      </Button>
                    ) : (
                      <div className="mt-4">
                        <CalculadoraInversion />
                      </div>
                    )}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">LA VERDAD:</h4>
                        <p className="text-xl font-medium text-gray-800 mt-1">
                          $150 parece mucho cuando lo ves como GASTO.
                        </p>
                        <p className="text-xl font-medium text-gray-800">
                          $150 es ridículamente barato cuando lo ves como INVERSIÓN.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          {/* Mentira 4 */}
          <AccordionItem value="mentira-4" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="h-6 w-6 text-red-600" />
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    "No sé de computadoras, no es para mí"
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t text-gray-800">
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">LA VERDAD:</h4>
                        <p className="text-gray-800 mt-1">
                          Exacto. Por eso NOSOTROS lo hacemos TODO.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <span className="bg-blue-100 p-2 rounded-full">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                        </span>
                        TÚ SOLO NOS DAS:
                      </h4>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Fotos de tus productos (las del celular sirven)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Descripción breve de qué haces</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Tu número de WhatsApp para ventas</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                        <span className="bg-amber-100 p-2 rounded-full">
                          <Target className="h-5 w-5 text-amber-600" />
                        </span>
                        NOSOTROS HACEMOS:
                      </h4>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Diseño completo personalizado</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Toda la configuración técnica (SEO, hosting, dominio)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Subimos tus productos con descripciones</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Conectamos tu WhatsApp para que cierres ventas</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">En 3-6 días recibes:</h4>
                    <ul className="space-y-2 text-gray-800">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-2 flex-shrink-0">1</span>
                        <span>Un link: <span className="font-mono text-blue-600">www.tuartesania.com</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-2 flex-shrink-0">2</span>
                        <span>Video de 5 minutos explicando cómo compartirlo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-2 flex-shrink-0">3</span>
                        <span className="font-medium">Listo. Ya puedes vender.</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded border border-blue-100 flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 italic">
                        "Así de simple: Te llega un mensaje con tu link. Lo compartes. Ya."
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          {/* Mentira 5 */}
          <AccordionItem value="mentira-5" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 hover:bg-orange-100 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="h-6 w-6 text-red-600" />
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    "Me dijeron que me ayudan a 'posicionar'. ¿No es lo mismo?"
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 border-t text-gray-800">
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">LA VERDAD:</h4>
                        <p className="text-gray-800 mt-1">
                          "Posicionamiento" se volvió una palabra de moda. Todo el mundo la usa, pocos la entienden.
                        </p>
                        <p className="text-gray-700 mt-2 font-medium">
                          Déjame ser honesto:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                          <li>Si tu hijo te dice "yo te posiciono", te ama pero NO sabe cómo</li>
                          <li>Si alguien te cobra por "posicionamiento" sin mostrarte CÓMO, es humo</li>
                          <li>El posicionamiento REAL toma 3-6 meses de trabajo constante</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Lo que nosotros hacemos es DIFERENTE:</h4>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                        <span>Te creamos la página web BIEN HECHA desde el inicio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                        <span>La configuramos para que Google la entienda (SEO técnico)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 font-bold rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                        <span>Te damos una GUÍA CLARA de qué hacer para subir en Google</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 p-4 border-l-4 border-amber-500">
                    <p className="font-medium text-amber-800">
                      Pero seamos realistas:
                    </p>
                    <p className="mt-2 text-gray-800">
                      No vas a aparecer primero en Google en 1 semana.
                      SÍ vas a aparecer cuando alguien busque tu nombre + tu servicio.
                      Y con el tiempo, subirás más.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <span className="text-4xl text-gray-300 mr-3">"</span>
                      <div>
                        <p className="text-gray-700 italic">
                          Hace 4 meses no aparecía en Google. Hoy estoy en la tercera posición cuando buscan 'ventas de baterias Loja'. Y cada mes subo más.
                        </p>
                        <p className="mt-3 text-sm font-medium text-gray-600">
                          — Car One, <a href="https://www.mecanicaautomotrizloja.com/servicios/baterias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mecanicaautomotrizloja.com</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 border-l-4 border-red-600">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800">IMPORTANTE:</h4>
                        <p className="text-gray-800 mt-1">
                          Si alguien te promete "primera página de Google en 1 mes", está mintiendo.
                          Nosotros te prometemos una página que FUNCIONA y se PUEDE posicionar.
                          El resto depende de tu constancia (y nosotros te enseñamos cómo).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
        </Accordion>

        {/* Testimonio destacado */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <blockquote className="text-lg md:text-xl font-medium italic mb-4">
              "Hace 4 meses no aparecía en Google. Hoy estoy en la tercera posición cuando buscan 'ventas de baterias Loja'. Y cada mes subo más."
            </blockquote>
            <div className="font-semibold">— Car One, mecanicaautomotrizloja.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
