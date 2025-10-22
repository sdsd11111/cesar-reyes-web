import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, BarChart, Search, Target, TrendingUp, Zap, Award, ShieldCheck } from 'lucide-react';
import serviciosData from '@/data/servicios.json';

export const metadata: Metadata = {
  title: 'Servicios de Consultoría Estratégica para Microempresas en Ecuador',
  description: 'Descubre nuestros servicios de consultoría estratégica, desarrollo web y posicionamiento para tu negocio en Ecuador. Planes Data-Driven desde $600.',
  keywords: 'servicios consultoría microempresas Ecuador, planes marketing digital Loja, consultoría estratégica negocios, cotización análisis mercado Ecuador, paquetes SEO microempresas, reingeniería procesos Ecuador, estudio factibilidad startup Loja, análisis competencia digital, plan posicionamiento Google Ecuador, consultor ingeniero comercial Ecuador'
};

export default function ServiciosPage() {
  const { categorias } = serviciosData;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios de Consultoría para Microempresas en Ecuador
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Planes Data-Driven desde $600 – Con 25 años como Ingeniero Comercial, te ofrezco soluciones prácticas con ROI medible para tu negocio en Loja y todo Ecuador.
          </p>
        </div>

        {/* Beneficios Destacados */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Elige el Servicio que Impulsa Tu Negocio en Loja y Más Allá
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <BarChart className="w-8 h-8 text-blue-600" />, 
                title: "+20% Crecimiento", 
                desc: "Promedio semestral en negocios asesorados" },
              { icon: <ShieldCheck className="w-8 h-8 text-green-600" />, 
                title: "Garantía", 
                desc: "Sesión follow-up a los 3 meses" },
              { icon: <Zap className="w-8 h-8 text-yellow-600" />, 
                title: "Resultados Rápidos", 
                desc: "Primeros impactos en menos de 30 días" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-50 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nuestros Paquetes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros 5 Paquetes Estratégicos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((servicio) => (
              <div key={servicio.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {servicio.titulo}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{servicio.descripcionCorta}</h3>
                    {'precio' in servicio && typeof servicio.precio === 'number' && (
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        ${servicio.precio.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {'componentes' in servicio && Array.isArray(servicio.componentes) && (
                    <ul className="space-y-3 mb-6">
                      {servicio.componentes.slice(0, 4).map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item.split(':')[0]}:</span>
                        </li>
                      ))}
                      {servicio.componentes.length > 4 && (
                        <li className="text-sm text-blue-600 font-medium">+{servicio.componentes.length - 4} componentes más</li>
                      )}
                    </ul>
                  )}
                  
                  {'beneficios' in servicio && Array.isArray(servicio.beneficios) && (
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Beneficios:</h4>
                      <ul className="space-y-2">
                        {servicio.beneficios.map((beneficio: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></div>
                            <span className="text-gray-600">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link href={`/servicios/${servicio.slug}`} className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all">
                      Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Agenda una consultoría gratuita de 30 minutos para analizar cómo podemos hacer crecer tu negocio en Loja y todo Ecuador.
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
            <Link href="#servicios">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
              >
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
