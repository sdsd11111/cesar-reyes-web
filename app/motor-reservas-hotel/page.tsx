import type { Metadata } from "next";
import HotelObjetivoClient from "./HotelObjetivoClient";
import FAQSchema from "@/components/schema/FAQSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Motor de Reservas para Hoteles | 0% Comisión Ecuador",
    description: "Sistema de reservas directas sin comisiones para hoteles en Ecuador. Aumenta tus reservas directas y reduce costos. Servicio en Quito, Guayaquil, Cuenca y Loja.",
    openGraph: {
        title: "Motor de Reservas para Hoteles | 0% Comisión Ecuador",
        description: "Deja de pagar 15-20% en comisiones. Sistema propio de reservas directas para hoteles en Ecuador.",
        images: [
            {
                url: "/images/portada_cesarbn.webp",
                width: 1200,
                height: 630,
                alt: "Hotel Objetivo - Gestión Digital para Hoteles",
            },
        ],
        locale: "es_EC",
        type: "website",
    },
    alternates: {
        canonical: 'https://www.cesarreyesjaramillo.com/motor-reservas-hotel'
    }
};

const faqData = [
    {
        q: "¿Es difícil de usar? No soy bueno con la tecnología.",
        a: "Si sabes usar WhatsApp, sabes usar Hotel Objetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.",
    },
    {
        q: "¿Esto es solo para hoteles grandes?",
        a: "Todo lo contrario. Hotel Objetivo fue diseñado pensando en hoteles pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes habitaciones que gestionar, esto es para ti.",
    },
    {
        q: "Ya tengo redes sociales. ¿Para qué necesito esto?",
        a: "Las redes sociales son geniales para conversar con tus huéspedes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde hospedarse. Hotel Objetivo complementa tus redes, no las reemplaza.",
    },
    {
        q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
        a: "Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por reserva, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.",
    },
];

export default function HotelObjetivoPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Inicio", url: "/" },
                { name: "Hotel Objetivo", url: "/motor-reservas-hotel" }
            ]} />
            <FAQSchema questions={faqData} />
            <ServiceSchema
                serviceName="Motor de Reservas Directas para Hoteles"
                description="Sistema de reservas sin comisiones para hoteles en Ecuador. Gestiona tu hotel de forma digital con reservas directas por WhatsApp."
                serviceType="Hospitality"
            />
            <HotelObjetivoClient />

            {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
            <div style={{
                position: 'absolute',
                left: '-10000px',
                top: 'auto',
                width: '1px',
                height: '1px',
                overflow: 'hidden'
            }}
                aria-hidden="true">
                <h1>Hotel Objetivo - Gestión Digital para Hoteles en Ecuador</h1>
                <p>Deja de perder huéspedes. Pásate a la gestión digital interactiva que posiciona tu hotel en Google y aumenta tus reservas.</p>

                <h2>¿Por qué necesitas un hotel digital?</h2>
                <p>El 72% de los huéspedes buscan el hotel online antes de decidir dónde hospedarse. Si no tienes una presencia digital profesional, estás perdiendo reservas cada día. Hotel Objetivo es la solución ideal para hoteles en Quito, Guayaquil, Cuenca y Loja.</p>

                <h2>Beneficios de Hotel Objetivo</h2>
                <ul>
                    <li>Gestión actualizable en tiempo real desde tu celular</li>
                    <li>Código QR para tus habitaciones y recepción</li>
                    <li>Reservas directas por WhatsApp integrado</li>
                    <li>Posicionamiento en Google para búsquedas locales</li>
                    <li>Dominio propio profesional (www.tuhotel.com)</li>
                    <li>Sin comisiones por reserva - tu plataforma 100%</li>
                    <li>Compatible con móviles y tablets</li>
                    <li>Actualización instantánea de precios y disponibilidad</li>
                </ul>

                <h2>Cómo funciona Hotel Objetivo</h2>
                <ul>
                    <li>Paso 1: Te configuramos tu hotel digital en 48 horas</li>
                    <li>Paso 2: Recibes tu código QR para imprimir</li>
                    <li>Paso 3: Actualizas tu disponibilidad desde tu celular cuando quieras</li>
                    <li>Paso 4: Tus huéspedes escanean y reservan directamente por WhatsApp</li>
                </ul>

                <h2>¿Para quién es Hotel Objetivo?</h2>
                <p>Hoteles pequeños y medianos en Ecuador que quieren modernizar su servicio, aumentar reservas y tener control total sobre su presencia digital sin depender de OTAs que cobran comisiones altas.</p>

                <h2>Preguntas Frecuentes sobre Hotel Objetivo</h2>
                <div>
                    <h3>¿Es difícil de usar? No soy bueno con la tecnología.</h3>
                    <p>Si sabes usar WhatsApp, sabes usar Hotel Objetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.</p>
                </div>

                <div>
                    <h3>¿Esto es solo para hoteles grandes?</h3>
                    <p>Todo lo contrario. Hotel Objetivo fue diseñado pensando en hoteles pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes habitaciones que gestionar, esto es para ti.</p>
                </div>

                <div>
                    <h3>Ya tengo redes sociales. ¿Para qué necesito esto?</h3>
                    <p>Las redes sociales son geniales para conversar con tus huéspedes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde hospedarse. Hotel Objetivo complementa tus redes, no las reemplaza.</p>
                </div>

                <div>
                    <h3>¿Cuánto cuesta? ¿Hay costos ocultos?</h3>
                    <p>Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por reserva, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.</p>
                </div>

                <h2>Ventajas sobre OTAs y redes sociales</h2>
                <ul>
                    <li>Actualización instantánea vs procesos largos</li>
                    <li>Posicionamiento en Google vs invisibilidad en redes</li>
                    <li>Dominio propio vs dependencia de plataformas</li>
                    <li>Sin comisiones vs 15-20% en Booking/Expedia</li>
                    <li>Control total vs restricciones de terceros</li>
                </ul>
            </div>
        </>
    );
}
