'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function InteractiveDemoSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    updateMenu: true,
    addDish: false,
    login: false,
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const accordionItems: AccordionItem[] = [
    {
      id: 'updateMenu',
      title: 'Actualizar Menú',
      content: (
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center text-gray-300">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">1</span>
              <p>Activa o desactiva un plato.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right hidden md:block" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">2</span>
              <p>Recarga el menú y mira la magia.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'addDish',
      title: 'Agregar Plato Nuevo',
      content: (
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-300 text-center">Aprende a agregar nuevos platos a tu menú en simples pasos.</p>
        </div>
      ),
    },
    {
      id: 'login',
      title: 'Accede con tus credenciales',
      content: (
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-300 text-center">Inicia sesión para administrar tu menú de forma segura.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La Prueba Definitiva: <span className="text-orange-500">Adminístralo en Vivo</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            A tu izquierda, el panel de control. A tu derecha, el menú público. Despliega una acción y sigue los pasos para ver la magia en tiempo real.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="w-full space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="border-b bg-gray-800 rounded-lg border-gray-700 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between p-6 text-left text-lg font-semibold text-white hover:bg-gray-700 transition-colors rounded-lg"
                  aria-expanded={openItems[item.id]}
                >
                  <span>{item.title}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform duration-200 ${openItems[item.id] ? 'rotate-180' : ''}`} 
                    aria-hidden="true" 
                  />
                </button>
                {openItems[item.id] && (
                  <div className="overflow-hidden transition-all duration-200">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
            <div className="bg-gray-800 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400 mx-auto">Panel de Control</p>
            </div>
            <iframe 
              src="https://los-almuerzos.vercel.app/admin" 
              className="w-full h-[500px]" 
              title="Panel de Control"
              loading="lazy"
            ></iframe>
          </div>
          
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-700">
            <div className="bg-gray-800 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400 mx-auto">Menú Público</p>
            </div>
            <iframe 
              src="https://los-almuerzos.vercel.app/" 
              className="w-full h-[500px]" 
              title="Menú Público"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-16">
          <a 
            href="#reserva" 
            className="inline-block bg-orange-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors text-lg"
          >
            Quiero mi propio Menú Interactivo
          </a>
        </div>
      </div>
    </section>
  );
}
