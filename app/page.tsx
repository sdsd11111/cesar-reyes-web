import { Metadata } from 'next'
import { Suspense } from 'react';
import HomeTestClient from './home-test/HomeTestClient';
import { pageContent } from '@/lib/content';
import TransparentHeader from "@/components/transparent-header";
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import WebsiteSchema from '@/components/schema/WebsiteSchema';
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema';
import FAQSchema from '@/components/schema/FAQSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';

export const metadata: Metadata = {
  title: {
    absolute: 'Motor Reservas Hotel & Menú Digital | 0% Comisión Ecuador'
  },
  description: 'Consultoría en Reingeniería Digital para Hoteles y Restaurantes en Ecuador. Deje de pagar comisiones del 20% y consiga Reservas Directas con nuestro Motor de Reservas y Menú Digital. Servicio en Quito, Guayaquil, Cuenca y Loja.',
  openGraph: {
    title: 'Motor de Reservas y Menú Digital para Hoteles y Restaurantes en Ecuador',
    description: 'Deje de pagar comisiones. Consiga Reservas Directas con nuestro Motor de Reservas y Menú Digital. Consultoría especializada en Ecuador.',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes',
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const view = sp['view'];
  const isEmotionalView = view === 'restaurantes';
  const initialShowContent = !!view;

  const content = isEmotionalView ? pageContent.restaurantes : pageContent.hoteles;

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeTestClient
        content={content}
        isEmotionalView={isEmotionalView}
        initialShowContent={initialShowContent}
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
      <FAQSchema questions={[...pageContent.hoteles.faq.questions, ...pageContent.restaurantes.faq.questions]} />
      <ServiceSchema
        serviceName="Motor de Reservas para Hoteles"
        description="Sistema de reservas directas sin comisiones para hoteles en Ecuador. Aumenta tus reservas directas y reduce costos."
        serviceType="HotelReservationService"
      />
      <ServiceSchema
        serviceName="Menú Digital para Restaurantes"
        description="Menú digital interactivo con código QR para restaurantes. Mejora la experiencia del cliente y aumenta ventas."
        serviceType="RestaurantMenuService"
      />
    </Suspense>
  );
}
