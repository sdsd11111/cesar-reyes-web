import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function PUT(request: Request) {
  try {
    const { slug, isVisible } = await request.json();
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Se requiere el slug del artículo' },
        { status: 400 }
      );
    }

    // Encontrar el archivo del artículo
    const blogDir = path.join(process.cwd(), 'content/blog');
    let filePath = '';
    let categoryDir = '';

    // Buscar en todas las categorías
    const categories = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const category of categories) {
      const dir = path.join(blogDir, category);
      const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
      
      const foundFile = files.find(file => {
        const fileSlug = file.replace(/\.md$/, '');
        return fileSlug === slug;
      });

      if (foundFile) {
        filePath = path.join(dir, foundFile);
        categoryDir = dir;
        break;
      }
    }

    if (!filePath) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    // Leer y actualizar el frontmatter
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Actualizar en la base de datos Supabase
    const { error: updateError } = await supabase
      .from('articles')
      .update({ is_visible: isVisible })
      .eq('slug', slug);

    if (updateError) {
      console.error('Error al actualizar en Supabase:', updateError);
      throw new Error('Error al actualizar la base de datos');
    }

    // Actualizar el frontmatter del archivo markdown
    const updatedData = {
      ...data,
      is_visible: isVisible,
      updated_at: new Date().toISOString()
    } as Record<string, any>;

    // Ordenar las claves para mantener consistencia
    const orderedData: Record<string, any> = {};
    
    // Agregar campos en orden específico
    const orderedFields = ['title', 'date', 'author', 'excerpt', 'image', 'category', 'is_visible', 'updated_at'];
    
    // Primero agregar los campos ordenados
    orderedFields.forEach(field => {
      if (field in updatedData) {
        orderedData[field] = updatedData[field];
      }
    });
    
    // Luego agregar cualquier otro campo que no esté en la lista ordenada
    Object.entries(updatedData).forEach(([key, value]) => {
      if (!orderedFields.includes(key)) {
        orderedData[key] = value;
      }
    });

    // Escribir de vuelta al archivo con formato consistente
    const updatedContent = `---\n${
      Object.entries(orderedData)
        .map(([key, value]) => {
          if (value === undefined || value === null) return '';
          if (typeof value === 'string') {
            // Si el valor contiene dos puntos o saltos de línea, usar comillas
            if (value.includes(':') || value.includes('\n') || value.includes('\r')) {
              return `${key}: |\n  ${value.replace(/\n/g, '\n  ')}`;
            }
            return `${key}: ${value}`;
          }
          if (typeof value === 'boolean') {
            return `${key}: ${value ? 'true' : 'false'}`;
          }
          if (Array.isArray(value)) {
            return `${key}: [${value.join(', ')}]`;
          }
          return `${key}: ${JSON.stringify(value)}`;
        })
        .filter(Boolean)
        .join('\n')
    }\n---\n\n${content}`;

    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    
    // Limpiar la caché para forzar una recarga de los artículos
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/clear-cache`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error al limpiar la caché:', error);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Visibilidad actualizada correctamente',
      data: {
        slug,
        is_visible: isVisible
      }
    });

  } catch (error) {
    console.error('Error al actualizar la visibilidad:', error);
    return NextResponse.json(
      { error: 'Error al actualizar la visibilidad', details: String(error) },
      { status: 500 }
    );
  }
}
