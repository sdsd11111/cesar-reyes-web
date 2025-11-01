import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath, revalidateTag } from "next/cache";

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
  excerpt?: string;
  meta_description?: string;
  keyword?: string;
  tags?: string;
  image?: string;
  date?: string;
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
    .replace(/[^\w\s-:]/g, '') // Mantener guiones y dos puntos
    .replace(/_/g, '-') // Convertir guiones bajos a guiones
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const ALLOWED_CATEGORIES = [
  'menu-objetivo',
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

// Handle both POST and PUT requests
export async function POST(req: NextRequest) {
  return handleArticleRequest(req, false);
}

export async function PUT(req: NextRequest) {
  return handleArticleRequest(req, true);
}

async function handleArticleRequest(req: NextRequest, isUpdate: boolean) {
  try {
    // Validate request body
    if (!req.body) {
      return NextResponse.json(
        { error: "Cuerpo de la solicitud vacío" }, 
        { status: 400 }
      );
    }

    const { markdown, id, originalSlug } = await req.json().catch(() => ({}));
    
    if (!markdown || typeof markdown !== 'string') {
      return NextResponse.json(
        { error: "El campo 'markdown' es requerido y debe ser una cadena de texto" }, 
        { status: 400 }
      );
    }
    
    // For updates, we need an ID
    if (isUpdate && !id) {
      return NextResponse.json(
        { error: "Se requiere un ID de artículo para actualizar" },
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
    
    // If this is an update and the slug hasn't changed, keep the original slug
    if (isUpdate && id && slug === originalSlug) {
      // No need to check for duplicates if slug hasn't changed
    } else {
      // Check if slug already exists (for new articles or when slug changes)
      const { data: existingArticle, error: slugCheckError } = await supabase
        .from('articles')
        .select('id')
        .eq('slug', slug)
        .maybeSingle();
        
      if (existingArticle) {
        // If this is an update and the slug exists but belongs to a different article
        if (isUpdate && id && existingArticle.id !== id) {
          return NextResponse.json(
            { error: 'Ya existe un artículo con este slug. Por favor, elige otro.' },
            { status: 400 }
          );
        }
        // If this is a new article and the slug exists
        if (!isUpdate) {
          // Append a random string to make the slug unique
          const randomSuffix = Math.random().toString(36).substring(2, 8);
          slug = `${slug}-${randomSuffix}`;
          console.log(`Slug duplicado, usando nuevo slug: ${slug}`);
        }
      }
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

      let article;
      let error;
      
      if (isUpdate && id) {
        console.log('Actualizando artículo existente con ID:', id, 'con slug:', slug);
        
        // Construir los datos de actualización
        const updateData: any = {
          title: articleData.title,
          slug: slug,
          content: articleData.content,
          excerpt: articleData.excerpt,
          cover_image: articleData.cover_image,
          category_id: articleData.category_id,
          published_at: articleData.published_at,
          meta_title: articleData.meta_title,
          meta_description: articleData.meta_description,
          updated_at: new Date().toISOString()
        };
        
        // Actualizar artículo existente
        const { data: updatedArticle, error: updateError } = await supabase
          .from('articles')
          .update(updateData)
          .eq('id', id)
          .select()
          .single();
          
        if (updateError) {
          console.error('Error al actualizar el artículo:', updateError);
          throw updateError;
        }
        
        article = updatedArticle;
        
        // Actualizar el archivo Markdown si el slug ha cambiado
        if (originalSlug && slug !== originalSlug) {
          const oldPath = path.join(process.cwd(), "content", "blog", safeCategory, `${originalSlug}.md`);
          const newPath = path.join(process.cwd(), "content", "blog", safeCategory, `${slug}.md`);
          
          try {
            await fs.rename(oldPath, newPath);
          } catch (renameError) {
            console.error('Error al renombrar el archivo:', renameError);
            // No fallar si no se puede renombrar el archivo
          }
        }
      } else {
        // Crear nuevo artículo
        const { data: newArticle, error: createError } = await supabase
          .from('articles')
          .insert(articleData)
          .select()
          .single();
          
        if (createError) throw createError;
        
        article = newArticle;
      }
      
      // Guardar en el sistema de archivos local
      try {
        const filePath = path.join(dir, `${slug}.md`);
        
        // Si es una actualización y el slug cambió, eliminar el archivo antiguo
        if (isUpdate && originalSlug && slug !== originalSlug) {
          const oldPath = path.join(dir, `${originalSlug}.md`);
          try {
            await fs.unlink(oldPath);
          } catch (unlinkError) {
            console.warn('No se pudo eliminar el archivo antiguo:', unlinkError);
          }
        }
        
        // Escribir el archivo nuevo o actualizado
        await fs.writeFile(filePath, markdown, 'utf8');
        
        // Invalidar la caché de las rutas relevantes
        revalidatePath(`/blog/${safeCategory}/${slug}`);
        revalidatePath('/blog');
        revalidatePath('/');
        revalidateTag('articles');
        
        // Si el slug cambió, invalidar también la ruta antigua
        if (isUpdate && originalSlug && slug !== originalSlug) {
          revalidatePath(`/blog/${safeCategory}/${originalSlug}`);
        }
        
        return NextResponse.json({ 
          success: true, 
          message: isUpdate ? 'Artículo actualizado correctamente' : 'Artículo creado correctamente',
          article: {
            ...article,
            url: `/blog/${safeCategory}/${slug}`
          }
        });
      } catch (fileError) {
        console.error('Error al guardar en el sistema de archivos:', fileError);
        // Continuamos aunque falle el guardado en archivo, ya que lo importante es Supabase
        return NextResponse.json({ 
          success: true, 
          message: isUpdate ? 'Artículo actualizado correctamente' : 'Artículo creado correctamente',
          article: {
            ...article,
            url: `/blog/${safeCategory}/${slug}`
          },
          warning: 'El artículo se guardó en la base de datos pero hubo un error al guardar el archivo local.'
        });
      }
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