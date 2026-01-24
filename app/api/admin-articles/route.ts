import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils-node";
import { articleCache } from "@/lib/cache-utils";

// Reducir el tiempo de caché a 5 segundos en desarrollo, 30 segundos en producción
const CACHE_DURATION = process.env.NODE_ENV === 'development' ? 5000 : 30000;

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const forceRefresh = url.searchParams.get('refresh') === 'true';
    const includeHidden = url.searchParams.get('includeHidden') === 'true';
    const currentTime = Date.now();
    
    // Intentar obtener de la caché si no se fuerza la recarga
    if (!forceRefresh) {
      const cachedData = articleCache.get(includeHidden);
      if (cachedData) {
        return NextResponse.json(cachedData);
      }
    }
    
    console.log(`Obteniendo artículos (includeHidden: ${includeHidden})`);
    
    // Obtener artículos (incluyendo o no los ocultos según el parámetro)
    const articles = await getAllArticles(includeHidden);
    
    // Actualizar caché
    articleCache.set(articles, includeHidden);
    
    console.log(`Artículos cargados: ${articles.length} (${includeHidden ? 'incluyendo ocultos' : 'solo visibles'})`);
    
    // Configurar encabezados de caché reducidos
    const response = NextResponse.json(articles);
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
    
    return response;
  } catch (error) {
    console.error('Error en la API de admin-articles:', error);
    
    // Si hay un error pero tenemos datos en caché, devolver los datos en caché
    const includeHidden = new URL(request.url).searchParams.get('includeHidden') === 'true';
    const cachedData = articleCache.get(includeHidden);
    if (cachedData) {
      console.log('Usando datos en caché debido a un error');
      return NextResponse.json(cachedData);
    }
    
    // Si no hay datos en caché, devolver un error controlado
    return NextResponse.json(
      { error: 'No se pudieron cargar los artículos', details: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    );
  }
}

// La función clearCache ha sido movida a /api/admin-articles/clear-cache