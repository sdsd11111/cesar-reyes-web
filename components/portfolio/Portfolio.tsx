'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PortfolioProps {
  sector?: 'hoteles' | 'restaurantes';
}

const Portfolio = ({ sector = 'hoteles' }: PortfolioProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        {sector === 'restaurantes' ? 'Proyectos Gastronómicos' : 'Proyectos Hoteleros'}
      </h2>

      <div className="space-y-8">
        {sector === 'restaurantes' ? (
          <>
            {/* Restaurante 200 Millas */}
            <div className="max-w-5xl mx-auto">
              <Link
                href="https://www.restaurante200millasloja.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto bg-gray-100 min-h-[300px]">
                    <Image
                      src="/images/200millas-preview.webp" // Placeholder path, user can replace
                      alt="Restaurante 200 Millas Loja - Posicionamiento Web"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">
                        Posicionamiento SEO
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      Restaurante 200 Millas Loja
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Estrategia de <strong>posicionamiento web local</strong> enfocada en platos específicos ("Almuerzos", "Mariscos"). Estructura multipágina optimizada para captar búsquedas de intención transaccional en Loja.
                    </p>

                    <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                      Ver sitio web
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Los Sartenes */}
            <div className="max-w-5xl mx-auto">
              <Link
                href="https://www.lossartenes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto bg-gray-100 min-h-[300px]">
                    <Image
                      src="/images/lossartenes-preview.webp" // Placeholder path
                      alt="Los Sartenes - Menú Digital Avanzado"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        Menú Digital Admin
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      Los Sartenes
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Implementación de <strong>Menú Digital Autoadministrable</strong>. Panel de control intuitivo para añadir platos personalizados al instante. Más de 40 páginas indexadas y estructura atractiva diseñada para venta visual.
                    </p>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Ver menú digital
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ) : (
          /* Hotel Puente Roto Card (Existing) */
          <div className="max-w-5xl mx-auto">
            <Link
              href="https://www.enloja.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto bg-gray-100 min-h-[300px]">
                  <Image
                    src="/images/hotel_puente_roto.webp"
                    alt="Hotel Puente Roto - Proyecto completo de desarrollo web"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      Proyecto Destacado
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Hotel Puente Roto
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Una página web completa y funcional diseñada específicamente para el sector hotelero. Este proyecto incluye todas las herramientas modernas que un hotel necesita para operar de manera autónoma y profesional.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Sistema de Reservas Automatizado</strong> - Gestión completa de habitaciones y disponibilidad en tiempo real</span>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Menú Digital Personalizado</strong> - Para restaurante integrado con gestión de productos</span>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Blog Dinámico</strong> - Publicación de noticias, eventos y contenido SEO</span>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700"><strong>Página Completa y Optimizada</strong> - Diseño responsive, carga rápida y optimización SEO</span>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Ver proyecto completo
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
