'use client';

import Link from 'next/link';

export default function MenuObjetivoHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Menú Objetivo - Versiones de Prueba</h1>
        <p className="text-lg text-gray-600 mb-12">
          Selecciona una versión para visualizar la propuesta de diseño
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Link 
            href="/pruebas/menu-objetivo/version-a" 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Versión A</h2>
            <p className="text-gray-600 mb-4">Con funcionalidad de búsqueda</p>
            <span className="text-blue-600 font-medium flex items-center">
              Ver versión <span className="ml-1">→</span>
            </span>
          </Link>
          
          <Link 
            href="/pruebas/menu-objetivo/version-b" 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Versión B</h2>
            <p className="text-gray-600 mb-4">Diseño alternativo</p>
            <span className="text-green-600 font-medium flex items-center">
              Ver versión <span className="ml-1">→</span>
            </span>
          </Link>
        </div>
        
        <div className="mt-16 text-sm text-gray-500">
          <p>Estas son versiones de prueba y no están incluidas en la navegación principal del sitio.</p>
          <p className="mt-2">Accede directamente a través de las URL proporcionadas.</p>
        </div>
      </div>
    </div>
  );
}
