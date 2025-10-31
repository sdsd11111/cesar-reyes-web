import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno de Supabase");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  try {
    const { category, slug } = await req.json();
    
    if (!category || !slug) {
      return NextResponse.json(
        { error: "Se requieren category y slug" },
        { status: 400 }
      );
    }

    // 1. Eliminar de Supabase
    const { error: deleteError } = await supabase
      .from('articles')
      .delete()
      .eq('slug', slug)
      .eq('category_id', category);

    if (deleteError) {
      console.error('Error al eliminar de Supabase:', deleteError);
      throw deleteError;
    }

    // 2. Intentar eliminar el archivo local
    try {
      const filePath = path.join(
        process.cwd(),
        'content',
        'blog',
        category,
        `${slug}.md`
      );
      await fs.unlink(filePath).catch(() => {
        console.log('El archivo local no existía o ya fue eliminado');
      });
    } catch (fsError) {
      console.warn('No se pudo eliminar el archivo local:', fsError);
      // Continuamos aunque falle la eliminación del archivo
    }

    return NextResponse.json({ 
      success: true,
      message: 'Artículo eliminado correctamente' 
    });

  } catch (error: unknown) {
    console.error('Error al eliminar el artículo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { 
        error: 'Error al eliminar el artículo',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      }, 
      { status: 500 }
    );
  }
}