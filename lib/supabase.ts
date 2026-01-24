import { createClient } from '@supabase/supabase-js';

// Verificar que las variables de entorno estén definidas
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL no está definido en las variables de entorno');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY no está definido en las variables de entorno');
}

// Crear el cliente de Supabase
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true, // Mantener la sesión activa
      autoRefreshToken: true, // Renovar automáticamente el token
      detectSessionInUrl: true, // Detectar sesión en la URL (para autenticación)
    },
  }
);

// Tipos de tablas de Supabase
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

// Tipos para la base de datos
export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string;
          image_url: string | null;
          category_id: string | null;
          author_id: string | null;
          published: boolean;
          published_at: string | null;
          meta_description: string | null;
          meta_keywords: string[] | null;
          created_at: string;
          updated_at: string;
        };
      };
      categories: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          slug: string;
          created_at: string;
        };
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
        };
      };
      article_tags: {
        Row: {
          article_id: string;
          tag_id: string;
        };
      };
      article_stats: {
        Row: {
          article_id: string;
          view_count: number;
          like_count: number;
          share_count: number;
          last_viewed: string | null;
        };
      };
    };
  };
};
