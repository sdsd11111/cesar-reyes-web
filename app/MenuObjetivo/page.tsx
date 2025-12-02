import type { Metadata } from "next";
import MenuObjetivoClient from "./MenuObjetivoClient";
import FAQSchema from "@/components/schema/FAQSchema";
import ProductSchema from "@/components/schema/ProductSchema";

export const metadata: Metadata = {
  title: "MenúObjetivo | Menú Digital para Restaurantes en Ecuador",
  description: "Crea tu menú digital en minutos. Ideal para restaurantes en Quito, Guayaquil y todo Ecuador. Código QR, pedidos por WhatsApp y posicionamiento Google incluido.",
  keywords: ["menú digital", "restaurantes ecuador", "carta digital", "código qr restaurante", "menú qr", "quito", "guayaquil", "loja", "menú online"],
  openGraph: {
    title: "MenúObjetivo | Tu Menú Digital que Vende por Ti",
    description: "Deja de perder clientes con fotos en PDF. Pásate al menú digital interactivo que posiciona tu restaurante en Google.",
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
      <FAQSchema questions={faqData} />
      <ProductSchema />
      <MenuObjetivoClient />
    </>
  );
}