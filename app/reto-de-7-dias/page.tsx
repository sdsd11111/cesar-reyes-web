import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { StepsAccordion } from './components/StepsAccordion';
import { SessionsAccordion } from './components/SessionsAccordion';
import { ServiceTabs } from './components/ServiceTabs';
import { FAQAccordion } from './components/FAQAccordion';
import { RegistrationForm } from './components/RegistrationForm';

export const metadata: Metadata = {
  title: 'Reto de 7 Días - Gana $2,000 en Servicios para tu Restaurante | César Reyes',
  description: 'Participa en el Reto de 7 Días y gana $2,000 en servicios estratégicos para tu restaurante. Responde 1 pregunta al día por WhatsApp y obtén una plataforma digital completa con posicionamiento SEO.',
  openGraph: {
    title: 'Reto de 7 Días - Gana $2,000 en Servicios Estratégicos',
    description: 'No es sorteo. Es un reto de 7 días. Todos los que completan, ganan el paquete completo de implementación y estrategia para restaurantes.',
    images: [
      {
        url: '/images/categorias/reto 7 dias/seccion 1.webp',
        width: 1200,
        height: 630,
        alt: 'Reto de 7 Días para Restaurantes',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function Reto7DiasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Fullscreen */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
        {/* Background Image/GIF */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('/images/zona-gamer/hero-bg.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          {/* Main Heading - Centered */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-center">
            Gana $2,000 en Servicios Estratégicos Para Tu Restaurante
          </h1>

          {/* Subhead */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200">
              Respondiendo 1 Pregunta al Día por WhatsApp
            </p>

            <div className="mt-4 text-lg text-gray-200">
              <p>No es sorteo. Es un reto de 7 días. Todos los que completan, ganan el paquete completo de implementación y estrategia.</p>
              <p className="mt-2">
                Solo un pago de <span className="text-orange-400 font-bold">$500 USD</span> (valor real $2,000) cuando ganes.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-12">
            {/* Main CTA */}
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base md:text-xl font-bold px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 rounded-full shadow-lg transform transition-all hover:scale-105 w-full sm:w-auto text-center whitespace-nowrap overflow-hidden text-ellipsis"
              size="lg"
            >
              <a
                href="#formulario"
                className="w-full text-center block overflow-hidden text-ellipsis"
              >
                Comenzar el Reto Gratis
              </a>
            </Button>

            {/* Micro-copy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-200 text-sm mt-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>100% Gratis participar</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Solo pagas si ganas ($500)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                <span>Valor real: $2,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Video & Logos Section */}
      <section className="mt-20 w-full bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Column - Mobile Vertical */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Video de YouTube */}
              <div className="relative pt-[177.78%] md:pt-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/efh2r4oUz90?autoplay=0&rel=0&showinfo=0"
                  title="El Reto de los 7 Días - César Reyes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic border-l-4 border-orange-500 pl-4 my-4">
                  "Soy César Reyes, fundador de Objetivo. Si tienes un restaurante y sientes que tu competencia te está dejando atrás en internet, este reto es para ti."
                </blockquote>

                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>7 días. 7 preguntas. Un solo objetivo.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logos Column */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-6">
                  Una iniciativa respaldada por:
                </p>

                {/* Logos Grid - Tamaño aumentado */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 py-4 sm:py-6 items-center">
                  <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <img
                      src="/images/categorias/reto 7 dias/camara de comercio loja.png"
                      alt="Cámara de Comercio de Loja"
                      className="h-full w-auto object-contain filter drop-shadow-lg"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <img
                      src="/images/categorias/reto 7 dias/municipio de loja.png"
                      alt="Municipio de Loja"
                      className="h-full w-auto object-contain filter drop-shadow-lg"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div className="flex items-center justify-center p-1 sm:p-2 bg-white dark:bg-gray-800 rounded-xl h-36 sm:h-40 md:h-48 lg:h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <img
                      src="/images/categorias/reto 7 dias/ministeria de turismo.png"
                      alt="Ministerio de Turismo"
                      className="h-full w-auto object-contain filter drop-shadow-lg"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 mb-6">
                    <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    ⏰ Edición limitada
                  </span>

                  <p className="text-lg font-medium text-gray-800 dark:text-white mb-6">
                    ¿Estás listo? Regístrate ahora. Máximo 20 participantes.
                  </p>

                  <a
                    href="#formulario"
                    className="inline-block w-full max-w-md bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
                  >
                    QUIERO EMPEZAR AHORA
                  </a>

                  <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin trampas
                    </span>
                    <span className="inline-flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Sin costos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <StepsAccordion />

      {/* Golden Rule Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Golden Rule Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 mb-16 border-2 border-yellow-400">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Sin Sorteos. Sin Azar. Sin Límite de Ganadores.
            </h3>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
              TODO participante que responde correctamente 7 preguntas, GANA. Completas 7 días = Ganas el paquete completo. Garantizado.
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              🏆 Premio Final: El Paquete "Fundador" (Valor $2,000)
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '🌐', title: 'Plataforma digital hasta 20 páginas', price: 'Incluye dominio, hosting 2 años' },
                { icon: '💬', title: '3 Sesiones Estratégicas 1-1 con César', price: '' },
                { icon: '🔍', title: 'Estrategia de Posicionamiento SEO', price: '' },
                { icon: '📊', title: 'Auditoría a los 6 meses', price: 'Implementación y Análisis de Métricas' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-orange-500 font-medium">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Informes Mensuales de rendimiento
              </h3>
              <p className="text-xl md:text-2xl text-orange-600 dark:text-orange-400 font-bold mb-2">
                Inversión al Ganar: $500
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                (Costo de la plataforma $500 único pago)
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                💡 Acceso a métricas detalladas de rendimiento
              </p>
              <p className="font-medium">Toma decisiones basadas en datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceTabs />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Registration Section */}
      <div id="formulario" className="relative w-full mt-20" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/images/categorias/reto%207%20dias/seccion%203.webp)',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/80"></div>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="w-full max-w-[95%] 2xl:max-w-[85%] mx-auto py-12 flex-grow flex flex-col">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tu Reto Comienza en 5 Minutos
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Regístrate ahora y comienza a transformar la presencia digital de tu restaurante
              </p>
            </div>
            <div className="max-w-3xl mx-auto w-full">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Artículos del Reto */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
            📚 Los 7 Artículos del Reto
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
            Cada día recibirás una pregunta cuya respuesta encontrarás en estos artículos educativos.
            Están diseñados para que entiendas cómo funciona el tráfico orgánico y dejes de depender de redes sociales.
            <span className="block mt-2 font-medium text-blue-600 dark:text-blue-400">
              Haz clic en cada módulo para ver los artículos correspondientes.
            </span>
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 mb-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="modulo1" className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-bold text-[#FF6B00] text-left">Módulo 1: El Costo de la Gestión Manual</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <ul className="space-y-3">
                    <li>
                      <a href="/blog/menu-objetivo/el-tiempo-que-estas-perdiendo-sin-saberlo"
                        className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">Día 1: El Tiempo Que Estás Perdiendo Sin Saberlo →</span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Descubre cuántas horas al mes pierdes actualizando tu menú manualmente y cómo reducirlas a menos de 1 minuto.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/menu-objetivo/el-gasto-mensual-que-puedes-eliminar-hoy-mismo-rxucgu"
                        className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">Día 2: El Gasto Mensual Que Puedes Eliminar Hoy Mismo →</span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Calcula el costo real: $2,880 dólares al año que estás pagando por gestión manual.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href="/blog/menu-objetivo/la-razon-por-la-que-pierdes-clientes-en-whatsapp-y-no-lo-sabias"
                        className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">Día 3: La Razón Por La Que Pierdes Clientes en WhatsApp →</span>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          El 75% de tus clientes usa móviles para ordenar. Las fotos borrosas los están ahuyentando.
                        </p>
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modulo2" className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-bold text-[#FF6B00] text-left">Módulo 2: La Oportunidad del Tráfico Orgánico</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <p className="text-gray-600 dark:text-gray-300">Contenido del Módulo 2 próximamente...</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
