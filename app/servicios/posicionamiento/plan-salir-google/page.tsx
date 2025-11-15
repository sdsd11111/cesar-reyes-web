import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Search, BarChart, Target, Zap, Clock, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plan para Salir en Google - Posicionamiento SEO en Ecuador',
  description: 'Estrategia de posicionamiento SEO para aparecer en los primeros resultados de Google. Aumenta tu visibilidad y atrae más clientes a tu negocio en Ecuador.',
  keywords: 'posicionamiento SEO Ecuador, aparecer en Google Loja, estrategia SEO local, posicionamiento web Ecuador, consultor SEO Loja'
};

export default function PlanSalirGoogle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/servicios/posicionamiento" 
              className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Posicionamiento
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan para Salir en Google</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Posiciona tu negocio en los primeros resultados de búsqueda y atrae más clientes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Lo que incluye este servicio:</h2>
                <ul className="space-y-4">
                  {[
                    'Análisis de palabras clave estratégicas',
                    'Optimización On-Page y Off-Page SEO',
                    'Estrategia de enlaces entrantes',
                    'Optimización para búsquedas locales',
                    'Informes mensuales de posicionamiento'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Inversión</h3>
                  <p className="text-3xl font-bold text-purple-700 mb-2">$1,300</p>
                  <p className="text-gray-600 text-sm">Pago único o en cuotas</p>
                  <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
                    Contratar ahora
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Beneficios clave</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Search className="w-8 h-8 text-purple-600" />,
                      title: 'Mayor visibilidad',
                      description: 'Aparece en los primeros resultados de búsqueda cuando los clientes te buscan.'
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                      title: 'Tráfico cualificado',
                      'description': 'Atrae visitantes interesados en tus productos o servicios.'
                    },
                    {
                      icon: <BarChart className="w-8 h-8 text-blue-600" />,
                      title: 'Resultados medibles',
                      description: 'Seguimiento detallado de tu posicionamiento y tráfico web.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-3">¿Listo para aparecer en Google?</h3>
                  <p className="text-gray-600 mb-4">
                    Agenda una consulta gratuita para analizar tu sitio web y recibir recomendaciones personalizadas.
                  </p>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Agendar consulta SEO
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
