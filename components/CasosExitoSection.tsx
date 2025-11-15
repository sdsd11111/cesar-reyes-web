'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CasosExitoSection = () => {
  const casos = [
    {
      id: 1,
      nombre: 'Car One',
      rubro: 'Taller de mecánica automotriz',
      testimonio: '"Antes no asomaba en búsquedas como "mecánicas en Loja", ahora estoy en la primera página y en el segundo lugar."',
      web: 'https://www.mecanicaautomotrizloja.com',
      posicion: 'Página 1 para "mecánica en Loja"',
      resultado: '3-5 consultas por semana desde Google',
      imagen: '/car-one.webp',
      alt: 'Car One - Taller de mecánica automotriz en Loja'
    },
    {
      id: 2,
      nombre: 'Reubi-elec',
      rubro: 'Fabricación de cajas de medidores de luz y agua',
      testimonio: '"Busqué empresas que me ayuden a crear una página web para mi negocio, y ahora cuando alguien busca "cajas de medidores Loja" salgo en primeros resultados."',
      web: 'https://www.cajademedidordeluz.com',
      posicion: 'Página 1 para "cajas de medidores Loja"',
      resultado: 'Posición número 1 en Google',
      imagen: '/reubi-elec.webp',
      alt: 'Reubi-elec - Cajas de medidores en Loja'
    },
    {
      id: 3,
      nombre: 'Impermeabiza',
      rubro: 'Distribuidores de impermeabilizantes y selladores',
      testimonio: '"Decidimos invertir en un sitio web para nuestra empresa y hoy estamos en primeros lugares en búsquedas como "impermeabilizantes para humedad en Loja" salimos en primer lugar resultados."',
      web: 'https://impermeabilisa.com',
      posicion: 'Página 1 para "impermeabilizantes en Loja"',
      resultado: 'Posición número 1 en Google',
      imagen: '/impermeabiza.webp',
      alt: 'Impermeabiza - Impermeabilizantes en Loja'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="casos-exito">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artesanos de Artes Vivas Que Ya Están Vendiendo Online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estos 6 artesanos pasaron por lo mismo que tú:
            Dudaron. Se preguntaron si funcionaría. Invirtieron.
          </p>
          <p className="text-xl font-medium text-blue-600 mt-2">
            Hoy tienen algo que su competencia no:<br />
            Clientes que los encuentran en Google, no por casualidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casos.map((caso) => (
            <div 
              key={caso.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
              data-aos="fade-up"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={caso.imagen}
                  alt={caso.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/2563eb/white?text=${encodeURIComponent(caso.nombre)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{caso.nombre}</h3>
                  <p className="text-white/90 text-sm">{caso.rubro}</p>
                </div>
              </div>
              
              <div className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{caso.testimonio}"
                  </blockquote>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Web:</strong> <a href={caso.web} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visitar sitio</a></span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Posición en Google:</strong> {caso.posicion}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span><strong>Resultado:</strong> {caso.resultado}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={caso.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors w-full"
                  >
                    Ver su página <ArrowUpRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            ¿Listo para que tu negocio aparezca en los primeros lugares de Google?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium text-lg transition-colors"
          >
            Quiero mi página web
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasosExitoSection;
