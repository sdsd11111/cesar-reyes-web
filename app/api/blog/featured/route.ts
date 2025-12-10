import { NextResponse } from 'next/server';
import { getAllBlogArticles } from '@/lib/utils-node';

// Función para validar la estructura de un artículo
function isValidArticle(article: any): article is { 
  title: string; 
  slug: string; 
  category: string;
  image: string;
  excerpt: string;
  date: string;
  [key: string]: any;
} {
  return (
    article &&
    typeof article.title === 'string' &&
    typeof article.slug === 'string' &&
    typeof article.category === 'string' &&
    typeof article.image === 'string' &&
    typeof article.excerpt === 'string' &&
    typeof article.date === 'string'
  );
}

export async function GET() {
  try {
    // Obtener todos los artículos
    const articles = await getAllBlogArticles();
    
    // Validar y filtrar artículos
    const validArticles = articles.filter(isValidArticle);
    
    if (validArticles.length === 0) {
      console.warn('No se encontraron artículos válidos');
      return NextResponse.json([], { status: 200 });
    }
    
    // Ordenar por vistas (asumiendo que el backend ya tiene esta información)
    const featured = validArticles
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 5); // Tomar los 5 más vistos

    // No devolver el campo de vistas al frontend
    const formattedArticles = featured.map(({ views, ...rest }) => rest);

    return NextResponse.json(formattedArticles);
  } catch (error) {
    console.error('Error al obtener artículos destacados:', error);
    return NextResponse.json(
      { error: 'Error al cargar los artículos destacados' },
      { status: 500 }
    );
  }
}
