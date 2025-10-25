import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { createClient } from "@supabase/supabase-js";

// Inicializar el cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno de Supabase");
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface Frontmatter {
  category?: string;
  title?: string;
  slug?: string;
  [key: string]: string | undefined;
}

function extractFrontmatter(markdown: string): Frontmatter | null {
  if (typeof markdown !== 'string') {
    return null;
  }

  const match = markdown.match(/^---([\s\S]*?)---/);
  if (!match) return null;

  const yaml = match[1];
  const lines = yaml.split("\n");
  const data: Frontmatter = {};

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    const trimmedKey = key?.trim();
    if (trimmedKey && rest.length > 0) {
      data[trimmedKey] = rest.join(":").trim().replace(/^["']|["']$/g, "");
    }
  }

  return data;
}

function slugify(text: string): string {
  if (!text) return '';
  
  return text
    .toString()
    .normalize('NFD') // Normalize diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const ALLOWED_CATEGORIES = [
  'automatizacion',
  'diseno-web',
  'marketing-digital',
  'asesoria',
  'analisis-estrategico',
  'desarrollo-web',
  'posicionamiento-marca'
];

function validateFrontmatter(frontmatter: Frontmatter): { isValid: boolean; error?: string } {
  if (!frontmatter.category) {
    return { isValid: false, error: "El campo 'category' es obligatorio" };
  }
  
  if (!frontmatter.title) {
    return { isValid: false, error: "El campo 'title' es obligatorio" };
  }
  
  if (!ALLOWED_CATEGORIES.includes(frontmatter.category)) {
    return { 
      isValid: false, 
      error: `Categoría no permitida. Categorías permitidas: ${ALLOWED_CATEGORIES.join(', ')}` 
    };
  }
  
  return { isValid: true };
}

export async function POST(req: NextRequest) {
  try {
    // Validate request body
    if (!req.body) {
      return NextResponse.json(
        { error: "Cuerpo de la solicitud vacío" }, 
        { status: 400 }
      );
    }

    const { markdown } = await req.json().catch(() => ({}));
    
    if (!markdown || typeof markdown !== 'string') {
      return NextResponse.json(
        { error: "El campo 'markdown' es requerido y debe ser una cadena de texto" }, 
        { status: 400 }
      );
    }

    const frontmatter = extractFrontmatter(markdown);
    if (!frontmatter) {
      return NextResponse.json(
        { error: "Formato de frontmatter inválido. Asegúrate de incluir un bloque YAML válido entre ---" }, 
        { status: 400 }
      );
    }

    const validation = validateFrontmatter(frontmatter);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || "Error de validación" }, 
        { status: 400 }
      );
    }

    const category = frontmatter.category as string; // Safe to assert after validation
    
    // Generate or validate slug
    let slug = frontmatter.slug ? slugify(frontmatter.slug) : slugify(frontmatter.title || '');
    if (!slug) {
      return NextResponse.json(
        { error: "No se pudo generar un slug válido a partir del título" }, 
        { status: 400 }
      );
    }
    
    // Security: Limit slug length and prevent directory traversal
    slug = slug.slice(0, 100);
    if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
      return NextResponse.json(
        { error: "Slug inválido" }, 
        { status: 400 }
      );
    }

    // Ensure category is a valid directory name
    const safeCategory = category.replace(/[^a-z0-9-]/gi, '').toLowerCase();
    const dir = path.join(process.cwd(), "content", "blog", safeCategory);
    
    try {
      // Create directory if it doesn't exist
      await fs.mkdir(dir, { recursive: true });
      
      // Guardar en Supabase
      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('id')
        .eq('id', safeCategory)
        .single();

      if (categoryError || !categoryData) {
        console.error('Error al buscar la categoría:', categoryError);
        return NextResponse.json(
          { error: 'Categoría no encontrada en la base de datos' },
          { status: 400 }
        );
      }

      const articleData = {
        title: frontmatter.title,
        slug: slug,
        content: markdown.split('---').slice(2).join('---').trim(), // Extraer solo el contenido markdown
        excerpt: frontmatter.excerpt || '',
        cover_image: frontmatter.image || '',
        category_id: safeCategory,
        published: true, // O podrías hacerlo configurable desde el frontend
        published_at: new Date().toISOString(),
        meta_title: frontmatter.metaDescription?.slice(0, 60) || frontmatter.title,
        meta_description: frontmatter.metaDescription || frontmatter.excerpt || ''
      };

      // Insertar o actualizar el artículo en Supabase
      const { data: article, error: upsertError } = await supabase
        .from('articles')
        .upsert(articleData, { onConflict: 'slug' })
        .select()
        .single();

      if (upsertError) {
        console.error('Error al guardar en Supabase:', upsertError);
        return NextResponse.json(
          { error: 'Error al guardar el artículo en la base de datos' },
          { status: 500 }
        );
      }
      
      // Opcional: Guardar también en el sistema de archivos local
      try {
        const filePath = path.join(dir, `${slug}.md`);
        await fs.writeFile(filePath, markdown, "utf-8");
      } catch (fileError) {
        console.error('Error al guardar en el sistema de archivos:', fileError);
        // Continuamos aunque falle el guardado en archivo, ya que lo importante es Supabase
      }
      
      // Return success response
      const url = `/blog/${safeCategory}/${slug}`;
      return NextResponse.json({ 
        success: true, 
        url,
        articleId: article.id,
        message: "Artículo guardado exitosamente en Supabase"
      });
      
    } catch (error: any) {
      console.error("Error al guardar el archivo:", error);
      return NextResponse.json(
        { 
          error: "Error al guardar el artículo",
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        }, 
        { status: 500 }
      );
    }
    
  } catch (error: any) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { 
        error: "Error inesperado en el servidor",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, 
      { status: 500 }
    );
  }
}