'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const steps = [
  {
    id: 'paso1',
    title: 'PASO 1: RESERVAS TU LUGAR',
    content: [
      'Llenas el formulario abajo O nos escribes por WhatsApp',
      'Te llamamos en 24h para hablar contigo (eres una persona, no un número)',
      'Confirmamos que entendiste TODO lo que incluye'
    ]
  },
  {
    id: 'paso2',
    title: 'PASO 2: PAGAS Y ASEGURAS TU POSICIÓN',
    content: [
      'Transferencia bancaria a cuenta empresarial verificable',
      'Recibes comprobante de pago legal',
      'Te decimos tu posición: "Eres el #13, tu entrega será en 3 días"'
    ]
  },
  {
    id: 'paso3',
    title: 'PASO 3: NOS ENVÍAS TU MATERIAL',
    content: [
      'Fotos de tus productos (del celular, no necesitan ser profesionales)',
      'Descripción corta: qué haces, qué vendes',
      'Elijes tu dominio: www.[tunombre].com',
      'Tiempo: 1-2 días de tu parte'
    ]
  },
  {
    id: 'paso4',
    title: 'PASO 4: NOSOTROS TRABAJAMOS (TÚ NO HACES NADA)',
    content: [
      'Diseñamos tu página personalizada',
      'Subimos tus productos con descripciones',
      'Configuramos SEO para que Google te encuentre',
      'Probamos que todo funcione en celular y computadora',
      'Tiempo: 2-4 días de nuestro parte'
    ]
  },
  {
    id: 'paso5',
    title: 'PASO 5: RECIBES TU PÁGINA LISTA',
    content: [
      'Link por WhatsApp: www.tuartesania.com',
      'Video tutorial 5 min: cómo compartirla',
      '12 meses de soporte: si algo falla, lo arreglamos GRATIS'
    ]
  },
  {
    id: 'paso6',
    title: 'PASO 6: EMPIEZAS A VENDER',
    content: [
      'Compartes tu link en redes, tarjetas, donde quieras',
      'Clientes ven tus productos organizados',
      'Te contactan por WhatsApp',
      'TÚ cierras la venta'
    ]
  }
];

export default function ProcesoSection() {
  const [activeTab, setActiveTab] = useState('paso1');
  const [isMobile, setIsMobile] = useState(false);

  // Verificar si es móvil al cargar el componente
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }

  return (
    <section className="py-16 bg-gray-50">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Antes de Decidir, Repasemos Todo
          </h2>
          <p className="text-xl text-gray-600">
            Queremos que tengas <span className="font-semibold">TODO claro</span>. Lee esto con calma:
          </p>
        </div>

      
          <div className="max-w-4xl mx-auto">
            {/* Tabs para escritorio */}
            <div className="hidden md:flex mb-8 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-1">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`px-4 py-3 font-medium text-sm md:text-base transition-all duration-200 flex-1 text-center ${
                    activeTab === step.id
                      ? 'bg-white text-orange-600 font-semibold shadow-md rounded-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md'
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mr-2">
                    {index + 1}
                  </span>
                  {step.title.split(': ')[0]}
                </button>
              ))}
            </div>

            {/* Contenido de los pasos */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Versión móvil - Acordeón */}
              <div className="md:hidden space-y-2">
                {steps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center transition-colors ${
                        activeTab === step.id 
                          ? 'bg-orange-50 text-orange-700' 
                          : 'bg-white text-gray-800 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab(activeTab === step.id ? '' : step.id)}
                    >
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <span>{step.title}</span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          activeTab === step.id ? 'rotate-180 text-orange-500' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeTab === step.id && (
                      <div className="px-6 pb-4 pt-2 bg-white border-t border-gray-100">
                        <ul className="space-y-3">
                          {step.content.map((item, i) => (
                            <li key={i} className="flex items-start group">
                              <div className="flex-shrink-0 mt-1">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2">
                                  <Check className="h-3 w-3" />
                                </div>
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Versión escritorio - Contenido de la pestaña activa */}
              <div className="hidden md:block p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                {steps.map((step) => (
                  <div key={step.id} className={activeTab === step.id ? 'block animate-fadeIn' : 'hidden'}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mr-3">
                        {steps.findIndex(s => s.id === step.id) + 1}
                      </span>
                      {step.title}
                    </h3>
                    <ul className="space-y-4">
                      {step.content.map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-3 group-hover:bg-green-200 transition-colors">
                              <Check className="h-3.5 w-3.5" />
                            </div>
                          </div>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
