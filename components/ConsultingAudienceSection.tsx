'use client';

import StrategyTabs from '@/components/StrategyTabs';

interface ConsultingAudienceSectionProps {
    isEmotionalView: boolean;
}

export default function ConsultingAudienceSection({ isEmotionalView }: ConsultingAudienceSectionProps) {
    return (
        <section className="w-full py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Mi Consultoría No es Para Todos</h2>
                    <p className="text-lg text-gray-600 mt-4">Si buscas soluciones rápidas o atajos, no es para ti. Pero si estás comprometido con el crecimiento sostenible de tu microempresa en Ecuador y dispuesto a invertir en una estrategia real con 25 años de experiencia como Ingeniero Comercial, has llegado al lugar correcto – soy César Reyes Jaramillo.</p>
                </div>
                <div className="w-full max-w-4xl mx-auto">
                    <StrategyTabs isEmotionalView={isEmotionalView} />
                </div>
                <div className="text-center mt-12 px-4">
                    <a
                        href="https://api.whatsapp.com/send/?phone=593963410409&text=Hola+C%C3%A9sar%2C+estoy+interesado+en+tus+servicios&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-xs mx-auto sm:w-auto inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 sm:h-11 rounded-lg sm:rounded-md px-6 sm:px-8 font-bold bg-blue-600 hover:bg-blue-700 text-white text-center py-3 sm:py-2"
                    >
                        Agenda una Llamada Estratégica Gratuita
                    </a>
                </div>
            </div>
        </section>
    );
}
