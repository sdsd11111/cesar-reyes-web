'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PopularArticles() {
  interface Article {
    id: string;
    title: string;
    slug: string;
    category: string;
    view_count: number;
  }

  const [popularArticles, setPopularArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularArticles = async () => {
      try {
        // Obtener los artículos más vistos
        const { data, error } = await supabase
          .from('article_stats')
          .select(`
            view_count,
            articles:article_id (
              id,
              title,
              slug,
              category
            )
          `)
          .order('view_count', { ascending: false })
          .limit(5);

        if (error) throw error;

        // Filtrar artículos nulos y mapear los datos
        const articles = data
          .filter((item: any) => item.articles !== null)
          .map((item: any) => ({
            id: item.articles.id,
            title: item.articles.title,
            slug: item.articles.slug,
            category: item.articles.category,
            view_count: item.view_count
          } as Article));

        setPopularArticles(articles);
      } catch (error) {
        console.error('Error al obtener artículos populares:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularArticles();
  }, []);

  if (loading) {
    return <div className="text-gray-500 text-sm">Cargando artículos populares...</div>;
  }

  if (popularArticles.length === 0) {
    return <div className="text-gray-500 text-sm">No hay datos de artículos populares aún.</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b">Artículos Destacados</h2>
      <ul className="space-y-3">
        {popularArticles.map((article) => (
          <li key={article.id} className="border-b border-gray-100 pb-2 last:border-0">
            <Link 
              href={`/blog/${article.category}/${article.slug}`}
              className="text-blue-600 hover:text-blue-800 text-sm hover:underline block mb-1"
            >
              {article.title}
            </Link>
            <span className="text-xs text-gray-500">{article.view_count} vistas</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
