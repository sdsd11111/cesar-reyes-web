'use client';

import { useState } from 'react';
import PropuestaForm from './components/PropuestaForm';

export default function MensajeriaPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const faqs = [
    {
      question: '¿Cuánto tiempo toma la implementación?',
      answer: 'La implementación básica toma menos de 24 horas. El sistema está diseñado para ser intuitivo y fácil de usar, con una curva de aprendizaje mínima.'
    },
    {
      question: '¿Es compatible con mis herramientas actuales?',
      answer: 'Sí, nuestro sistema se integra con las principales plataformas de comunicación y herramientas de negocio, incluyendo Gmail, Outlook, WhatsApp Business, y más.'
    },
    {
      question: '¿Qué tan segura es la plataforma?',
      answer: 'La seguridad es nuestra prioridad. Utilizamos encriptación de extremo a extremo y cumplimos con los estándares más altos de protección de datos.'
    }
  ];

  const [openNewAccordions, setOpenNewAccordions] = useState<number[]>([]);
  const newAccordions = [
    {
      title: "Nuestra Propuesta: Mensajería Inteligente y Personalizada con IA",
      description: `En Objetivo, hemos diseñado un sistema de mensajería que va mucho más allá de un simple chatbot. Es una plataforma avanzada, instalada en su propio servidor para su total control y seguridad, que utiliza Inteligencia Artificial, neuroventas, ingeniería de prompting y aprendizaje de LLM para transformar la forma en que tu empresa interactúa con sus clientes.\n\nReconocimiento de Intenciones\nEntiende rápidamente lo que el cliente necesita, desde un saludo hasta una consulta de compra específica.\n\nRespuestas Personalizadas\nOfrece información relevante y flujos de conversación específicos para cada consulta, como si hablara con una persona.\n\nRedirección Inteligente\nConecta al cliente con el departamento o vendedor adecuado, en el momento preciso, registrando toda su información para facilitar el seguimiento.\n\nExperiencia de Usuario Increíble\nGenera un flujo de comunicación tan fluido y eficiente que sus clientes sentirán una atención excepcional, elevando la imagen de su marca.`,
    },
    {
      title: "Los Beneficios Concretos para Tú Empresa",
      description: `La implementación de nuestro sistema no solo optimiza procesos, sino que genera beneficios tangibles que impactan directamente en la rentabilidad y el posicionamiento de la empresa.\n\nAsistente Virtual 24/7\nCreación de un puesto digital para una secretaria virtual que atienda los mensajes entrantes de redes sociales, whatsapp y la web, redirigiendo a los responsables de cada departamento de forma 100% ágil y confiable.\n\nFiltro para la Preventa\nSu misión será documentar cada interacción y responder mensajes de posibles leads con información útil, reemplazando el 70% del tiempo que actualmente a la empresa le costaría unos $5,000 anuales por persona.\n\nImagen de Marca Vanguardista\nPosiciona a Grupo Sánchez como una empresa innovadora, eficiente y moderna. Una respuesta rápida, inteligente y personalizada eleva la percepción de profesionalismo y genera mayor confianza en sus clientes.`,
    },
    {
      title: "Adquisición y Mantenimiento",
      description: `Con nuestro sistema, tu empresa no solo adquiere una herramienta, sino una inversión estratégica. Es un activo digital vital, personalizado a sus necesidades, diseñado para el éxito. Este no es un producto "copiar y pegar" es la experiencia de mas de 5 años trabajando en soluciones personalizadas. \n\nAdquisición de Código Personalizado\nCompran el código y la arquitectura del sistema, un activo digital diseñado a medida con flujos de trabajo únicos. No es un producto genérico, sino una solución específica para tu empresa.\n\nMantenimiento Crucial y Experto\nComo cualquier sistema, requiere mantenimiento: actualizaciones de IA, optimizaciones, soporte técnico y personalizaciones futuras. Esto asegura que la inversión se mantenga a la vanguardia, segura y funcionando a la perfección.\n\nCompromiso con su Éxito\nCon 5 años de experiencia en ingeniería comercial, SEO y neuroventas, mi compromiso es asegurar que el sistema no solo funcione, sino que impulse sus ventas y la satisfacción del cliente. No se trata solo de tecnología, sino de resultados tangibles.`,
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqs((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const toggleNewAccordion = (idx: number) => {
    setOpenNewAccordions((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <>
      <style jsx global>{`
        .faq-answer {
          display: none;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
          max-height: 0;
        }
        .faq-answer.open {
          display: block;
          max-height: 1000px;
        }
        .faq-button .icon-minus { display: none; }
        .faq-button.open .icon-plus { display: none; }
        .faq-button.open .icon-minus { display: inline-block; }
        /* Carrousel slide para cards en móvil */
        .cards-carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 80%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 1.5rem;
          padding-bottom: 1rem;
          justify-items: center;
        }
        .cards-carousel > * {
          scroll-snap-align: start;
        }
        @media (min-width: 768px) {
          /* Para planes: 2 filas de 2 cards */
          .cards-carousel.planes {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
          }
          /* Para beneficios: 2 filas de 3 cards */
          .cards-carousel.beneficios {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
          }
          /* Para las secciones solicitadas: grid en escritorio, slide solo en móvil */
          .cards-carousel.no-slide {
            display: grid;
            grid-auto-flow: unset;
            grid-auto-columns: unset;
            overflow-x: unset;
            scroll-snap-type: none;
            gap: 2rem;
            padding-bottom: 0;
            justify-items: center;
            align-items: stretch;
            grid-template-columns: repeat(4, 1fr);
          }
          @media (max-width: 767px) {
            .cards-carousel.no-slide {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: 80%;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: 1.5rem;
              padding-bottom: 1rem;
              justify-items: center;
              align-items: stretch;
              grid-template-columns: unset;
            }
          }
          /* Ocultar barra de scroll en escritorio */
            .cards-carousel.no-slide {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .cards-carousel.no-slide::-webkit-scrollbar {
              display: none;
            }
        }

        /* Custom styles for auto-scrolling carousel */
        .cards-container-carousel {
          display: flex;
          animation: scroll-carousel 30s linear infinite; /* Adjust time for speed */
          white-space: nowrap; /* Prevent cards from wrapping */
        }

        .cards-container-carousel:hover {
            animation-play-state: paused;
        }

        .cards-container-carousel > div {
            flex-shrink: 0; /* Prevent cards from shrinking */
            width: 300px; /* Fixed width for cards in carousel */
            margin-right: 2rem; /* Spacing between cards */
        }

        @keyframes scroll-carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move half of the duplicated content */
          }
        }

        @media (max-width: 767px) {
          .cards-container-carousel > div {
            width: 80vw; /* Occupy 80% of viewport width on mobile */
          }
          .cards-container-carousel {
            animation-duration: 20s; /* Faster scroll on mobile */
          }
        }
      `}</style>

      <main className="bg-gray-50 font-sans text-gray-800">
        {/* Video Section - Horizontal (Desktop) */}
        <section className="relative w-full h-screen overflow-hidden items-center justify-center bg-black hidden md:flex">
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/455329/9d4dc6d4-034c-4bf8-8477-138ffc896ab2?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
              loading="lazy"
              style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Video Section - Vertical (Mobile) */}
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black md:hidden">
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/455329/173fe675-1369-4c2f-8cce-410c3eb4a0d6?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
              loading="lazy"
              style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Hero Section */}
        <section id="hero" className="relative h-[500px] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
          
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Eficiencia y Ahorro en tu Empresa</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
              Transformemos la atención al cliente, optimicemos procesos y posicionemos a tu empresa como líder en innovación en tu sector con Nuestro Sistema de Mensajería Personalizada.
            </p>
            <button className="bg-gradient-to-br from-gray-700 to-gray-900 text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 hover:shadow-2xl transition-all duration-200 text-lg">
              Comienza Gratis
            </button>
          </div>
        </section>

        {/* Nueva Sección de Alerta */}
        <section className="w-full h-screen relative flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-dark opacity-20 z-10"></div>
            <img 
              src="/images/hero-mensajeria.webp" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Nueva Sección de Texto */}
        <section className="w-full min-h-[700px] md:h-[500px] bg-black py-16 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Adiós a las Tareas "Normales"
              </h1>
              <p className="text-xl text-white mb-8">
                Creamos e Instalamos en tu propio servidor un sistema de mensajería 100% personalizado, nada genérico, aumentarás la eficiencia de tu empresa y también contendrá la salida de efectivo generada por procesos rutinarios que hoy consideramos "normales"
              </p>
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-200 ease-in-out border-4 border-white mb-8 ring-4 ring-white/40"
                style={{ minWidth: '320px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
                </svg>
                <span className="flex-1 text-center">Agenda una Llamada de Demostración Gratuita</span>
              </a>
              <p className="text-white text-lg">
                Descubre en 15 minutos cómo optimizar la comunicación con tus pacientes.
              </p>
            </div>
          </div>
        </section>

        {/* Nueva Sección de Reducción de Costos */}
        <section className="py-16 bg-black text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Reducción de Costos y "Fugas Silenciosas"</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              La implementación de nuestro sistema de mensajería inteligente ofrece un ahorro financiero considerable al eliminar gastos operativos "normales" y optimizar el tiempo de su equipo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative z-10 bg-white/5 rounded-2xl p-8 shadow-xl backdrop-blur-sm" style={{ boxShadow: '0 0 80px rgba(255, 255, 255, 0.3)' }}>
              <div>
                <p className="text-6xl md:text-7xl font-extrabold mb-4">$7.2K</p>
                <h3 className="text-2xl font-semibold mb-2">Ahorro Anual por Secretaria web</h3>
                <p className="text-lg max-w-sm mx-auto">
                  El beneficio económico directo que obtiene una empresa al delegar tareas repetitivas a nuestro sistema es considerable: se estima un ahorro anual aproximado de USD 7,209. Este resultado se alcanza con un gasto mensual moderado en servidores, apps de pago y mantenimiento, que ronda entre los $80 y $120.
                </p>
              </div>
              <div>
                <p className="text-6xl md:text-7xl font-extrabold mb-4">$2.1K</p>
                <h3 className="text-2xl font-semibold mb-2">Ahorro por "Fuga Silenciosa"</h3>
                <p className="text-lg max-w-sm mx-auto">
                  Económicamente hablando, resolver las "fugas silenciosas" tiene un impacto enorme en las finanzas de las empresas en Latam. El problema es que suelen camuflarse como actividades "normales", cuando en realidad pueden representar hasta un 30% del salario anual por trabajador, es decir, más de $2,100 dólares por persona..
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuevo Banner */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                El Problema de las Tareas Repetitivas y las "Fugas Silenciosas"
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Según estudios recientes, las PYMES invierten un promedio de 12 horas de las 40 semanales en tareas repetitivas de comunicación, atención al cliente, notificaciones, correos, búsqueda de información, etc. A esto le llamamos "fugas silenciosas", porque las consideramos "normales" dentro de la operación diaria, sin darnos cuenta del costo que implican.
              </p>
            </div>
          </div>
        </section>

        {/* Nueva sección de cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Crear una Secretaria en la Web</h3>
                <p className="text-gray-600">
                  El sistema puede reconocer intenciones de búsqueda y redirigir conversaciones inteligentemente a distintos departamentos, ofreciendo una experiencia de usuario fluida y eficiente, 24/7/365.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Optimizar la Preventa</h3>
                <p className="text-gray-600">
                  Nuestro sistema va más allá del ahorro de un salario. Genera flujos de trabajo que interactúan con los usuarios, recopilan datos cruciales y redirigen conversaciones ya filtradas a su equipo de ventas, eliminando el desperdicio de tiempo y recursos.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Atención 24/7</h3>
                <p className="text-gray-600">
                  Ya sea que tus usuarios se comuniquen a través de redes sociales, WhatsApp o directamente desde tu sitio web, nuestro sistema los atiende de forma continua, automática y sin interrupciones. Así garantizas respuestas rápidas y una experiencia de atención al cliente moderna y eficiente.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Redirección Estratégica</h3>
                <p className="text-gray-600">
                  Nuestro sistema es capaz de redirigir conversaciones entrantes y clasificar mensajes de manera automática e inteligente, eliminando por completo la necesidad de intervención manual. Esto agiliza los flujos de trabajo y permite una atención más precisa y oportuna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva Sección de Acordeones */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
            {
              newAccordions.map((item, idx) => (
                <div key={idx} className="mb-4 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgb(40, 40, 40)', boxShadow: '0 0 40px rgba(255, 255, 255, 0.1)' }}>
                  <button
                    className={`flex justify-between items-center w-full p-6 text-xl font-bold text-left focus:outline-none ${openNewAccordions.includes(idx) ? 'text-white' : 'text-gray-300'}`}
                    onClick={() => toggleNewAccordion(idx)}
                  >
                    {item.title}
                    <span className="faq-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 icon-plus">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 icon-minus">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                      </svg>
                    </span>
                  </button>
                  <div className={`faq-answer ${openNewAccordions.includes(idx) ? 'open' : ''}`}>
                    <p className="p-6 pt-0 text-lg text-gray-200 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </section>

        {/* Nueva sección H1 y cards (Original 4 cards) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ¿Y Si Pudieras Hacer Más con Menos Tiempo?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                El tiempo es tu recurso más valioso. Sin embargo, en el día a día de una PYME, de un profesional independiente o de un artesano, hay factores invisibles que lo drenan sin que lo notes.
              </p>
            </div>
            {/* Cards: ¿Y Si Pudieras Hacer Más con Menos Tiempo? */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/comentarios.webp" alt="Mensajes y comentarios" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Mensajes y comentarios sin fin</h4>
                  <p className="text-gray-600 flex-1">Gran parte de tu jornada se va respondiendo comunicaciones que no siempre se traducen en oportunidades reales de negocio.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="relative w-full mb-4">
                  <img src="/images/mensajeria/informacion.webp" alt="Búsqueda de información" className="w-full h-40 object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Búsqueda constante de información</h4>
                  <p className="text-gray-600 flex-1">Archivos, datos de clientes, historial de pedidos... ¿Cuánto tiempo pierdes localizando información que debería estar al alcance de un clic?</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/oportunidades.webp" alt="Oportunidades perdidas" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Correos con oportunidades perdidas</h4>
                  <p className="text-gray-600 flex-1">Promociones, alianzas o solicitudes importantes que nunca se leyeron a tiempo o se enterraron en la bandeja de entrada.</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                <img src="/images/mensajeria/olvidados.webp" alt="Recordatorios olvidados" className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Recordatorios olvidados, citas perdidas</h4>
                  <p className="text-gray-600 flex-1">Una respuesta tardía puede significar un cliente menos. Y muchas veces, eso ocurre simplemente por no tener un sistema de gestión eficiente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PropuestaForm />

        {/* Nuevo Video - Segunda Sección */}
        <section className="relative w-full h-[50vh] md:h-screen overflow-hidden flex items-center justify-center bg-black">
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', height: '100%' }}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/455329/360c8ec6-43c5-4f71-838b-a1323ee0350d?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
              loading="lazy"
              style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* CTA Final Section */}
        <section id="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-gray-700 to-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Productividad?
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Te invitamos a agendar una llamada de demostración gratuita con nuestro equipo. Descubre cómo nuestro Sistema de Mensajería Objetivo puede impulsar el crecimiento de tu empresa.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-200 ease-in-out border-4 border-white ring-4 ring-white/40"
              style={{ minWidth: '320px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.028 12.028 0 00-5.84 7.38H6.18M15.59 14.37A12.021 12.021 0 0118 10.18H9.98M15.59 14.37A6 6 0 0018 10.18v-4.82m-2.41 9.01L18 10.18M3.75 3.75L18 10.18m-14.25 0A12.015 12.015 0 0118 10.18M3.75 3.75c0-1.02.738-1.875 1.75-1.875h12.75c1.013 0 1.75.855 1.75 1.875v10.5A12.02 12.02 0 0118 10.18M3.75 3.75H2.25m15.75 0H18m-2.41 9.01L18 10.18m0 0A12.015 12.015 0 013.75 3.75m14.25 0c0 .26-.02.516-.057.764L3.75 3.75m14.25 0L3.75 3.75" />
              </svg>
              <span className="flex-1 text-center">¡Agenda tu Demostración Gratis!</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 