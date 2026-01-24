import type { Metadata } from "next";
import MenuObjetivoClient from "./MenuObjetivoClient";
import FAQSchema from "@/components/schema/FAQSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Menú Digital para Restaurantes | 0% Comisión Ecuador",
  description: "Menú digital interactivo con código QR para restaurantes en Ecuador. Aumenta ventas y mejora experiencia del cliente. Servicio en Quito, Guayaquil, Cuenca y Loja.",
  openGraph: {
    title: "Menú Digital para Restaurantes | 0% Comisión Ecuador",
    description: "Deja de usar PDFs. Menú digital interactivo con QR que posiciona tu restaurante en Google.",
    images: [
      {
        url: "/images/menu-objetivo/menu-digital-restaurantes-hero.webp",
        width: 1200,
        height: 630,
        alt: "MenúObjetivo - Menú Digital para Restaurantes",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/menu-digital'
  }
};

const faqData = [
  {
    q: "¿Es difícil de usar? No soy bueno con la tecnología.",
    a: "Si sabes usar WhatsApp, sabes usar MenúObjetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.",
  },
  {
    q: "¿Esto es solo para restaurantes grandes?",
    a: "Todo lo contrario. MenúObjetivo fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.",
  },
  {
    q: "Ya tengo redes sociales. ¿Para qué necesito esto?",
    a: "Las redes sociales son geniales para conversar con tus clientes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde comer. MenúObjetivo complementa tus redes, no las reemplaza.",
  },
  {
    q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
    a: "Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por pedido, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.",
  },
];

export default function MenuObjetivoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "MenúObjetivo", url: "/menu-digital" }
      ]} />
      <FAQSchema questions={faqData} />
      <ServiceSchema
        serviceName="Menú Digital para Restaurantes"
        description="Menú digital interactivo para restaurantes en Ecuador. Actualizable en tiempo real, código QR, pedidos por WhatsApp y posicionamiento en Google."
        serviceType="FoodService"
      />
      <MenuObjetivoClient />

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
        <h1>MenúObjetivo - Menú Digital para Restaurantes en Ecuador</h1>
        <p>Deja de perder clientes con fotos en PDF. Pásate al menú digital interactivo que posiciona tu restaurante en Google y aumenta tus ventas.</p>

        <h2>¿Por qué necesitas un menú digital?</h2>
        <p>El 72% de los clientes buscan el menú online antes de decidir dónde comer. Si no tienes un menú digital profesional, estás perdiendo ventas cada día. MenúObjetivo es la solución ideal para restaurantes en Quito, Guayaquil, Cuenca y Loja.</p>

        <h2>Beneficios de MenúObjetivo</h2>
        <ul>
          <li>Menú digital actualizable en tiempo real desde tu celular</li>
          <li>Código QR para tus mesas y tarjetas</li>
          <li>Pedidos directos por WhatsApp integrado</li>
          <li>Posicionamiento en Google para búsquedas locales</li>
          <li>Dominio propio profesional (www.turestaurante.com)</li>
          <li>Sin comisiones por pedido - tu plataforma 100%</li>
          <li>Compatible con móviles y tablets</li>
          <li>Actualización instantánea de precios y platos</li>
        </ul>

        <h2>Cómo funciona MenúObjetivo</h2>
        <ul>
          <li>Paso 1: Te configuramos tu menú digital en 48 horas</li>
          <li>Paso 2: Recibes tu código QR para imprimir</li>
          <li>Paso 3: Actualizas tu menú desde tu celular cuando quieras</li>
          <li>Paso 4: Tus clientes escanean y ordenan directamente por WhatsApp</li>
        </ul>

        <h2>¿Para quién es MenúObjetivo?</h2>
        <p>Restaurantes pequeños y medianos en Ecuador que quieren modernizar su servicio, aumentar ventas y tener control total sobre su presencia digital sin depender de apps de delivery que cobran comisiones altas.</p>

        <h2>Preguntas Frecuentes sobre MenúObjetivo</h2>
        <div>
          <h3>¿Es difícil de usar? No soy bueno con la tecnología.</h3>
          <p>Si sabes usar WhatsApp, sabes usar MenúObjetivo. El panel es visual, intuitivo y está diseñado para celular. Literalmente son 3 clics: activar, activar, listo. Y si tienes dudas, nuestro soporte te guía paso a paso.</p>
        </div>

        <div>
          <h3>¿Esto es solo para restaurantes grandes?</h3>
          <p>Todo lo contrario. MenúObjetivo fue diseñado pensando en restaurantes pequeños y medianos que no tienen un equipo de marketing ni de IT. Si tienes un menú que cambia (diario, semanal o mensual), esto es para ti.</p>
        </div>

        <div>
          <h3>Ya tengo redes sociales. ¿Para qué necesito esto?</h3>
          <p>Las redes sociales son geniales para conversar con tus clientes actuales. Pero no te posicionan en Google, no te dan un dominio propio y no te hacen visible para gente nueva que está buscando activamente dónde comer. MenúObjetivo complementa tus redes, no las reemplaza.</p>
        </div>

        <div>
          <h3>¿Cuánto cuesta? ¿Hay costos ocultos?</h3>
          <p>Sin sorpresas. Un solo pago mensual que incluye todo. No hay costos de instalación, no hay comisiones por pedido, no hay letra chica. Contáctanos por WhatsApp y te damos el precio exacto según tus necesidades.</p>
        </div>

        <h2>Ventajas sobre PDF y redes sociales</h2>
        <ul>
          <li>Actualización instantánea vs PDF que requiere rediseño</li>
          <li>Posicionamiento en Google vs invisibilidad en redes</li>
          <li>Dominio propio vs dependencia de plataformas</li>
          <li>Sin comisiones vs 20-30% en apps delivery</li>
          <li>Control total vs restricciones de Facebook/Instagram</li>
        </ul>
      </div>
    </>
  );
}