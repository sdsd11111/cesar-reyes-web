'use client';

import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { pageContent } from "@/lib/content";

// Importación dinámica para el componente HomeClient
const HomeClient = dynamic(() => import('@/app/components/HomeClient'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
  ssr: false
});

export default function HomeClientWrapper({ 
  searchParams,
  content 
}: { 
  searchParams: { [key: string]: string | string[] | undefined },
  content: typeof pageContent 
}) {
  const searchParamsHook = useSearchParams();
  
  // Usamos searchParams del hook o de las props según corresponda
  const view = searchParamsHook?.get('view') || searchParams?.view;
  const isEmotionalView = view === 'emocional';
  const currentContent = isEmotionalView ? content.emocional : content.logico;

  return (
    <HomeClient 
      content={currentContent} 
      isEmotionalView={isEmotionalView} 
    />
  );
}
