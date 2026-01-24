'use client';

import { useState } from 'react';

export default function MensajeriaAccordions() {
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

    const toggleNewAccordion = (idx: number) => {
        setOpenNewAccordions((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    };

    return (
        <section className="py-16 bg-gray-900 text-white">
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
      `}</style>
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
    );
}
