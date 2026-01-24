import { cache } from 'react';

// Caché deshabilitada para forzar recarga
interface CacheEntry {
  data: any[] | null;
  timestamp: number;
}

export const articleCache = {
  visible: {
    data: null as any[] | null,
    timestamp: 0
  },
  hidden: {
    data: null as any[] | null,
    timestamp: 0
  },
  
  // Tiempo de caché en 0 para forzar recarga
  getCacheDuration: () => 0,
  
  // Limpiar la caché
  clear: function() {
    this.visible = { data: null, timestamp: 0 };
    this.hidden = { data: null, timestamp: 0 };
    console.log('Caché de artículos limpiada');
  },
  
  // Siempre devolver null para forzar recarga
  get: function(_includeHidden: boolean) {
    return null;
  },
  
  // No hacer nada al establecer caché
  set: function(_data: any[], _includeHidden: boolean) {
    // No hacer nada para evitar caché
  }
};

export const revalidate = 0; // Revalidar siempre

// Función para obtener artículos con caché forzando recarga
export const getCachedArticles = cache(async () => {
  const { getAllArticles } = await import('./utils-node');
  return await getAllArticles();
});

// Función para obtener un artículo específico forzando recarga
export const getCachedArticle = cache(async (category: string, slug: string) => {
  const { getArticle } = await import('./utils-node');
  return await getArticle(category, slug);
});