'use client';

import dynamic from 'next/dynamic';
import { pageContent } from '@/lib/content';

// Componente de carga
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Importación dinámica del componente HomeTestClient
const HomeTestClient = dynamic(
  () => import('../home-test/HomeTestClient').then(mod => {
    // Forzamos el tipo para evitar conflictos
    const Component = mod.default as React.ComponentType<{
      content: any;
      isEmotionalView: boolean;
    }>;
    return Component;
  }),
  { 
    loading: () => <LoadingSpinner />,
    ssr: false 
  }
);

export default function HomeClientWrapper({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  const view = searchParams['view'];
  const isEmotionalView = view === 'emocional';
  
  // Obtenemos el contenido sin forzar tipos específicos
  const content = isEmotionalView ? pageContent.emocional : pageContent.logico;

  return <HomeTestClient content={content} isEmotionalView={isEmotionalView} />;
}
