import { NextResponse } from 'next/server';
import { getAllBlogArticles } from '@/lib/utils-node';

// Función para validar la estructura de un artículo
function isValidArticle(article: any): boolean {
  return (
    article &&
    typeof article.title === 'string' &&
    typeof article.slug === 'string' &&
    typeof article.category === 'string' &&
    typeof article.image === 'string' &&
    typeof article.excerpt === 'string' &&
    typeof article.date === 'string' &&
    typeof article.content === 'string'
  );
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeHidden = searchParams.get('includeHidden') === 'true';
    
    const articles = await getAllBlogArticles(includeHidden);
    
    // Filtrar solo artículos válidos
    const validArticles = articles.filter(article => 
      article.title && 
      article.slug && 
      article.category && 
      article.image && 
      article.excerpt && 
      article.date && 
      article.content
    );
    
    if (validArticles.length === 0) {
      console.warn('No se encontraron artículos válidos');
      return NextResponse.json([], { status: 200 });
    }
    
    return NextResponse.json(validArticles);
  } catch (error) {
    console.error('Error al obtener artículos:', error);
    return NextResponse.json(
      { error: 'Error al cargar los artículos' },
      { status: 500 }
    );
  }
}
