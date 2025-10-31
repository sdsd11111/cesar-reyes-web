import { cache } from 'react';

// Caché separada para artículos visibles y ocultos
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
  
  // Reducir el tiempo de caché a 5 segundos en desarrollo, 30 segundos en producción
  getCacheDuration: () => process.env.NODE_ENV === 'development' ? 5000 : 30000,
  
  // Limpiar la caché
  clear: function() {
    this.visible = { data: null, timestamp: 0 };
    this.hidden = { data: null, timestamp: 0 };
    console.log('Caché de artículos limpiada');
  },
  
  // Obtener datos de la caché si están frescos
  get: function(includeHidden: boolean) {
    const cacheKey = includeHidden ? 'hidden' : 'visible';
    const cacheEntry = this[cacheKey];
    const currentTime = Date.now();
    
    if (cacheEntry.data && (currentTime - cacheEntry.timestamp) < this.getCacheDuration()) {
      console.log(`Usando caché de artículos (${cacheKey})`);
      return cacheEntry.data;
    }
    
    return null;
  },
  
  // Establecer datos en la caché
  set: function(data: any[], includeHidden: boolean) {
    const cacheKey = includeHidden ? 'hidden' : 'visible';
    this[cacheKey] = {
      data,
      timestamp: Date.now()
    };
    console.log(`Caché de artículos actualizada (${cacheKey})`);
  }
};

export const revalidate = 60; // Revalidar cada minuto

// Función para obtener artículos con caché
export const getCachedArticles = cache(async () => {
  const { getAllArticles } = await import('./utils-node');
  return await getAllArticles();
});

// Función para obtener un artículo específico con caché
export const getCachedArticle = cache(async (category: string, slug: string) => {
  const { getArticle } = await import('./utils-node');
  return await getArticle(category, slug);
});
