import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils-node";

// Cache para almacenar temporalmente los artículos
let articlesCache: any[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos en milisegundos

export async function GET() {
  try {
    const currentTime = Date.now();
    
    // Devolver caché si está fresco
    if (articlesCache && (currentTime - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json(articlesCache);
    }
    
    // Obtener artículos
    const articles = getAllArticles();
    
    // Actualizar caché
    articlesCache = articles;
    lastFetchTime = currentTime;
    
    // Configurar encabezados de caché
    const response = NextResponse.json(articles);
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    
    return response;
  } catch (error) {
    console.error('Error en la API de admin-articles:', error);
    
    // Si hay un error pero tenemos datos en caché, devolver los datos en caché
    if (articlesCache) {
      console.log('Usando datos en caché debido a un error');
      return NextResponse.json(articlesCache);
    }
    
    // Si no hay datos en caché, devolver un error controlado
    return NextResponse.json(
      { error: 'No se pudieron cargar los artículos', details: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    );
  }
}