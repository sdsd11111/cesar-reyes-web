import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, BarChart, Search, Target, TrendingUp, Zap, ArrowLeft } from 'lucide-react';
import serviciosData from '@/data/servicios.json';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicio = serviciosData.categorias.find(s => s.slug === slug);
  
  if (!servicio) {
    return {
      title: 'Servicio no encontrado | César Reyes Jaramillo',
      description: 'El servicio solicitado no existe o ha sido movido.'
    };
  }

  return {
    title: `${servicio.titulo} | ${servicio.descripcionCorta} | César Reyes Jaramillo`,
    description: ('componentes' in servicio && Array.isArray(servicio.componentes)) ? servicio.componentes.join(' ') : servicio.descripcionCorta,
    keywords: ('palabrasClave' in servicio && Array.isArray(servicio.palabrasClave)) ? servicio.palabrasClave.join(', ') : undefined
  };
}

export default async function ServicioPage({ params }: PageProps) {
  const { slug } = await params;
  const servicio = serviciosData.categorias.find(s => s.slug === slug);

  if (!servicio) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <p className="text-xl text-gray-600 mb-8">El servicio que estás buscando no existe o ha sido movido.</p>
          <Link href="/servicios">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Servicios
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Función para obtener el ícono según el tipo de servicio
  const getServiceIcon = (title: string) => {
    if (title.includes('Estrategia')) return <Target className="w-6 h-6" />;
    if (title.includes('Google')) return <Search className="w-6 h-6" />;
    if (title.includes('Competencia')) return <BarChart className="w-6 h-6" />;
    if (title.includes('Factibilidad')) return <TrendingUp className="w-6 h-6" />;
    if (title.includes('Reingeniería')) return <Zap className="w-6 h-6" />;
    return <Check className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Link 
              href="/servicios" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Servicios
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{servicio.titulo}</h1>
            <p className="text-xl text-blue-100 mb-8">{servicio.descripcionCorta}</p>
            {'precio' in servicio && typeof servicio.precio === 'number' && (
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Inversión: ${servicio.precio.toLocaleString()}
                </span>
                <span className="bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Tiempo: Variable según proyecto
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna de Contenido */}
          <div className="lg:col-span-2 space-y-12">
            {/* Sección de Descripción */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Qué Incluye Este Servicio?
              </h2>
              <div className="space-y-4">
                {'componentes' in servicio && Array.isArray(servicio.componentes) && servicio.componentes.map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 mt-1 flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sección de Beneficios */}
            {'beneficios' in servicio && Array.isArray(servicio.beneficios) && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Beneficios para Tu Negocio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {servicio.beneficios.map((beneficio: string, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          {getServiceIcon(servicio.titulo)}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {beneficio.split(':')[0]}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {beneficio.split(':')[1] || beneficio}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Sección de Proceso */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cómo Funciona
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Análisis Inicial",
                    description: "Evaluamos tu situación actual y objetivos para personalizar la estrategia."
                  },
                  {
                    step: "2",
                    title: "Implementación",
                    description: "Desarrollamos e implementamos las soluciones acordadas en el plan."
                  },
                  {
                    step: "3",
                    title: "Seguimiento",
                    description: "Monitoreamos resultados y realizamos ajustes para garantizar el éxito."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold">
                        {item.step}
                      </div>
                      {index < 2 && (
                        <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Listo para comenzar?
              </h3>
              <p className="text-gray-600 mb-6">
                Agenda una consultoría gratuita para discutir cómo este servicio puede impulsar tu negocio.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Sin compromisos</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">30 minutos de asesoría</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Análisis inicial sin costo</span>
                </div>
              </div>
              
              <Link href="/contacto?servicio=consulta-gratis" className="block w-full">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  Agendar Consultoría Gratis
                </Button>
              </Link>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">¿Tienes preguntas?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contáctanos directamente para más información sobre este servicio.
                </p>
                <Link 
                  href="/contacto" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Contáctanos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Agenda tu consultoría gratuita hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
              >
                Agenda tu Consultoría Gratis
              </Button>
            </Link>
            <Link href="tel:+593987654321">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
              >
                Llámanos Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
