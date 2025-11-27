import { Metadata } from 'next'
import { Suspense } from 'react';
import HomeTestClient from './home-test/HomeTestClient';
import { pageContent } from '@/lib/content';
import TransparentHeader from "@/components/transparent-header";

export const metadata: Metadata = {
  title: 'César Reyes | Estratega de Negocios y Ventas',
  description: 'Te ayudo a crear estrategias de negocio basadas en datos para aumentar tus ventas. Especialista en análisis estratégico y desarrollo web.',
  openGraph: {
    title: 'César Reyes | Estratega de Negocios',
    description: 'Estrategias de negocio basadas en datos',
    url: 'https://www.cesarreyesjaramillo.com',
    siteName: 'César Reyes',
    locale: 'es_EC',
    type: 'website',
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
  const isEmotionalView = view === 'emocional';
  const initialShowContent = !!view;

  const content = isEmotionalView ? pageContent.emocional : pageContent.logico;

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
    </Suspense>
  );
}
