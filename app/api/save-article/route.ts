import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

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

const ALLOWED_CATEGORIES = ['marketing', 'estrategia', 'tecnologia']; // Add your allowed categories

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
      
      // Write the file
      const filePath = path.join(dir, `${slug}.md`);
      await fs.writeFile(filePath, markdown, "utf-8");
      
      // Return success response
      const url = `/blog/${safeCategory}/${slug}`;
      return NextResponse.json({ 
        success: true, 
        url,
        message: "Artículo guardado exitosamente"
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