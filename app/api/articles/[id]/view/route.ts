import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/');
  const articleId = pathSegments[pathSegments.length - 2]; // Get the ID from the URL path
  
  if (!articleId) {
    return NextResponse.json({ error: 'ID de artículo no proporcionado' }, { status: 400 });
  }

  try {
    // Llamar a la función de Supabase para incrementar las vistas
    const { data, error } = await supabase.rpc('increment_article_views', {
      article_id_param: articleId
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al registrar la vista:', error);
    return NextResponse.json(
      { error: 'Error al registrar la vista' },
      { status: 500 }
    );
  }
}
