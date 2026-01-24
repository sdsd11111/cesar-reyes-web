'use client';

import { Check } from 'lucide-react';

export default function ArgumentsSection() {
  const argumentsList = [
    {
      id: 1,
      title: 'Deja de regalar el 30% a las Apps de Delivery.',
      description: 'Tu web incluye botón directo a WhatsApp. Vende directo, cobra todo y quédate con el margen completo.',
      icon: '💰',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Tu competencia sigue usando PDFs borrosos.',
      description: 'Mientras ellos obligan al cliente a descargar de un drive su menú, el tuyo carga en 2 segundos, con fotos HD que antojan y venden.',
      icon: '🏆',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Listo en 7 días. Sin reuniones eternas.',
      description: 'Valoramos tu tiempo. Llenas un formulario, nos das tus fotos y nosotros hacemos la magia. Te entregamos las llaves en una semana.',
      icon: '⏱️',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            MÁS GANANCIAS, MENOS COMPLICACIONES
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transforma la forma en que gestionas tu restaurante con soluciones inteligentes que potencian tus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {argumentsList.map((item) => (
            <div 
              key={item.id}
              className={`${item.bgColor} ${item.borderColor} border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className={`text-4xl mb-4 ${item.textColor}`}>{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex items-center text-sm font-medium text-gray-600">
                <Check className={`w-4 h-4 mr-2 ${item.textColor}`} />
                <span>Beneficio clave</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
