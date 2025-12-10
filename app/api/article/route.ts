import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { createClient } from '@supabase/supabase-js';

const readFile = promisify(fs.readFile);

// Inicializar el cliente de Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json(
      { error: 'Ruta del archivo no proporcionada' },
      { status: 400 }
    );
  }

  try {
    // Normalizar la ruta para usar barras inclinadas hacia adelante
    const normalizedPath = filePath.replace(/\\/g, '/');
    
    // Construir la ruta completa al archivo
    const fullPath = path.join(process.cwd(), ...normalizedPath.split('/'));
    
    // Verificar que el archivo existe
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    // Leer el archivo
    const content = await readFile(fullPath, 'utf8');
    
    // Extraer el slug del nombre del archivo
    const slug = path.basename(normalizedPath, '.md').replace(/_/g, '-');
    
    // Buscar el artículo en Supabase para obtener el ID
    const { data: article, error } = await supabase
      .from('articles')
      .select('id, title, slug, category_id')
      .eq('slug', slug)
      .single();

    // Devolver el contenido junto con los metadatos del artículo
    return NextResponse.json({
      content,
      metadata: article || null
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return NextResponse.json(
      { error: 'Error al leer el artículo' },
      { status: 500 }
    );
  }
}
