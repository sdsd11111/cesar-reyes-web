'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { marked } from 'marked';
import matter from 'gray-matter';

interface ArticlePageProps {
  articlePath: string;
}

export default function ArticlePage({ articlePath }: ArticlePageProps) {
  const [article, setArticle] = useState<{
    id?: string;
    title: string;
    content: string;
    image?: string;
    date?: string;
    author?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  // Función para registrar una vista del artículo
  const registerView = async (articleId: string) => {
    try {
      await fetch(`/api/articles/${articleId}/view`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error al registrar la vista:', error);
    }
  };

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/article?path=${encodeURIComponent(articlePath)}`);
        
        if (!response.ok) {
          throw new Error('Artículo no encontrado');
        }
        
        const { content, metadata } = await response.json();
        const { data: frontmatter, content: markdownContent } = matter(content);
        
        // Convertir el contenido Markdown a HTML de forma asíncrona
        const htmlContent = await marked(markdownContent);
        
        const articleData = {
          id: metadata?.id,
          title: frontmatter.title || 'Artículo sin título',
          content: htmlContent,
          image: frontmatter.image,
          date: frontmatter.date,
          author: frontmatter.author
        };
        
        setArticle(articleData);
        
        // Registrar la vista si el artículo tiene un ID
        if (metadata?.id) {
          registerView(metadata.id);
        }
      } catch (err) {
        console.error('Error al cargar el artículo:', err);
        setError('No se pudo cargar el artículo. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [articlePath]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-2xl w-full text-center">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error || 'Artículo no encontrado'}</span>
          <div className="mt-4">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              ← Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Extraer la categoría de la URL
  const category = pathname.split('/')[2] || 'blog';
  
  // Función para formatear la categoría para mostrarla
  const formatCategory = (cat: string) => {
    return cat
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="bg-white">
      {/* Encabezado del artículo */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            {article.author && (
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Por {article.author}
              </p>
            )}
            {article.date && (
              <p className="mt-2 text-sm text-gray-500">
                Publicado el {new Date(article.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {article.image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
        )}
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}
