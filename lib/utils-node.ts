import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

function normalizeFrontmatter(data: any) {
  const result: Record<string, string> = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      result[key] = typeof data[key] === "string" ? data[key] : String(data[key]);
    }
  }
  return result;
}

// Definición de tipo para artículos
export type BlogArticle = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string;
  slug: string;
  category: string;
  [key: string]: any;
};

export const getAllBlogArticles = (): BlogArticle[] => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  // Verificar si el directorio de blog existe
  if (!fs.existsSync(blogDir)) {
    console.error('Directorio de blog no encontrado:', blogDir);
    return [];
  }
  
  // Obtener todas las categorías
  const categories = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const allArticles: BlogArticle[] = [];
  
  // Leer artículos de cada categoría
  for (const category of categories) {
    const categoryDir = path.join(blogDir, category);
    const articleFiles = fs.readdirSync(categoryDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
      .map(dirent => dirent.name);
    
    for (const file of articleFiles) {
      try {
        const filePath = path.join(categoryDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        
        // Normalizar datos del frontmatter
        const frontmatter = normalizeFrontmatter(data);
        
        // Crear slug a partir del nombre del archivo
        const slug = file.replace(/\.md$/, '');
        
        // Convertir markdown a HTML
        let htmlContent = '';
        try {
          // Usar marked de forma síncrona
          // @ts-ignore - marked puede ser usado de forma síncrona
          htmlContent = marked(content);
        } catch (error) {
          console.error('Error al convertir markdown a HTML:', error);
          htmlContent = content; // Usar el contenido sin procesar si hay un error
        }
        
        // Asegurar que los campos requeridos tengan valores por defecto
        const article: BlogArticle = {
          title: frontmatter.title || 'Sin título',
          excerpt: frontmatter.excerpt || frontmatter.description || '',
          image: frontmatter.image || '/images/placeholder-blog.jpg',
          date: frontmatter.date ? new Date(frontmatter.date).toISOString() : new Date().toISOString(),
          author: frontmatter.author || 'César Reyes',
          content: htmlContent,
          slug: frontmatter.slug || slug,
          category: frontmatter.category || category,
          ...frontmatter
        };
        
        allArticles.push(article);
      } catch (error) {
        console.error(`Error al procesar el archivo ${file} en la categoría ${category}:`, error);
      }
    }
  }
  
  // Ordenar artículos por fecha (más recientes primero)
  return allArticles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// Leer todos los artículos de una categoría
export function getArticlesByCategory(category: string): BlogArticle[] {
  const dir = path.join(process.cwd(), "content", "blog", category);
  if (!fs.existsSync(dir)) return [];
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  const articles: BlogArticle[] = [];
  
  for (const filename of files) {
    const filePath = path.join(dir, filename);
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const normalized = normalizeFrontmatter(data);
      
      // Validar campos obligatorios
      if (!normalized.title) {
        console.warn(`Artículo sin título en: ${filePath}`);
        continue;
      }
      
      const slug = filename.replace(/\.md$/, "");
      const article: BlogArticle = {
        title: normalized.title,
        excerpt: normalized.excerpt || "",
        image: normalized.image || "",
        date: normalized.date || new Date().toISOString(),
        author: normalized.author || "César Reyes Jaramillo",
        content: content,
        slug: slug,
        category: path.basename(path.dirname(filePath)),
      };
      
      // Agregar propiedades adicionales
      for (const [key, value] of Object.entries(normalized)) {
        if (!(key in article)) {
          (article as any)[key] = value;
        }
      }
      
      articles.push(article);
    } catch (error) {
      console.error(`Error al procesar el archivo ${filePath}:`, error);
    }
  }
  
  return articles;
}

// Leer un artículo individual
export function getArticle(category: string, slug: string): BlogArticle | null {
  if (!category || !slug) {
    console.warn('Categoría o slug no proporcionados');
    return null;
  }

  try {
    // Normalizar la categoría para manejar mayúsculas y espacios
    const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');
    
    // Primero intentar con la ruta exacta
    let filePath = path.join(process.cwd(), "content", "blog", normalizedCategory, `${slug}.md`);
    
    // Si no existe, buscar en todas las carpetas (para compatibilidad)
    if (!fs.existsSync(filePath)) {
      console.warn(`Artículo no encontrado en ruta exacta: ${filePath}. Buscando en todas las categorías...`);
      
      const blogDir = path.join(process.cwd(), "content", "blog");
      
      // Verificar si el directorio de blog existe
      if (!fs.existsSync(blogDir)) {
        console.error('Directorio de blog no encontrado:', blogDir);
        return null;
      }
      
      const categories = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
        .map(dirent => dirent.name);
      
      // Intentar encontrar el archivo en todas las categorías
      const allCategories = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      console.log(`Buscando artículo con slug: ${slug} en categorías:`, allCategories);
      
      for (const cat of allCategories) {
        const possiblePaths = [
          path.join(blogDir, cat, `${slug}.md`),          // Formato: slug.md
          path.join(blogDir, cat, `${cat}.md`),           // Formato: nombre-categoria.md
          path.join(blogDir, cat, 'index.md')            // Formato: index.md
        ];
        
        for (const possiblePath of possiblePaths) {
          if (fs.existsSync(possiblePath)) {
            filePath = possiblePath;
            console.log(`Artículo encontrado en: ${filePath}`);
            break;
          }
        }
        
        if (filePath) break;
      }
      
      if (!filePath || !fs.existsSync(filePath)) {
        console.error(`No se pudo encontrar el artículo con slug: ${slug} en ninguna categoría`);
        console.log('Categorías disponibles:', fs.readdirSync(blogDir));
        return null;
      }
    }
    
    const fileContent = fs.readFileSync(filePath, "utf-8").trim();
    
    // Limpiar el contenido del archivo
    const cleanedContent = fileContent
      .replace(/\r\n/g, '\n')  // Normalizar saltos de línea
      .replace(/[\u2018\u2019]/g, "'")  // Reemplazar comillas curvas
      .replace(/[\u201C\u201D]/g, '"'); // Reemplazar comillas dobles curvas
    
    // Verificar que el frontmatter esté correctamente formado
    if (!cleanedContent.startsWith('---\n')) {
      console.error('Formato de frontmatter inválido: falta el delimitador inicial ---');
      return null;
    }
    
    const frontmatterEnd = cleanedContent.indexOf('\n---');
    if (frontmatterEnd === -1) {
      console.error('Formato de frontmatter inválido: falta el delimitador final ---');
      return null;
    }
    
    // Extraer y analizar el frontmatter
    const frontmatterContent = cleanedContent.slice(4, frontmatterEnd);
    const { data, content } = matter(`---\n${frontmatterContent}\n---\n`);
    
    const normalized = normalizeFrontmatter(data);
    
    // Obtener el contenido Markdown (sin el frontmatter)
    const markdownContent = cleanedContent.slice(frontmatterEnd + 5).trim();
    
    // Convertir el contenido Markdown a HTML de forma síncrona
    const htmlContent = marked.parse(markdownContent);
    
    if (typeof htmlContent !== 'string') {
      console.error('Error: El contenido no se pudo convertir a HTML correctamente');
      return null;
    }
    
    // Crear el objeto del artículo con las propiedades requeridas
    const article: BlogArticle = {
      title: normalized.title || "Sin título",
      excerpt: normalized.excerpt || "",
      image: normalized.image || "/images/placeholder.jpg",
      date: normalized.date || new Date().toISOString().split('T')[0],
      author: normalized.author || "César Reyes Jaramillo",
      content: htmlContent,
      slug: slug,
      category: path.basename(path.dirname(filePath)),
      rawContent: markdownContent
    };
    
    // Agregar propiedades adicionales del frontmatter
    for (const [key, value] of Object.entries(normalized)) {
      if (!(key in article)) {
        (article as any)[key] = value;
      }
    }
    
    return article;
  } catch (error) {
    console.error('Error al leer el artículo:', error);
    return null;
  }
}

// Leer todos los artículos de todas las categorías
export function getAllArticles() {
  try {
    const blogDir = path.join(process.cwd(), "content", "blog");
    
    // Verificar si el directorio existe
    if (!fs.existsSync(blogDir)) {
      console.error('El directorio de blog no existe:', blogDir);
      return [];
    }
    
    // Leer categorías con manejo de errores
    let categories: string[] = [];
    try {
      categories = fs.readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    } catch (error) {
      console.error('Error al leer las categorías del blog:', error);
      return [];
    }
    
    console.log(`Categorías encontradas: ${categories.join(', ')}`);
    
    const all = [];
    
    // Procesar cada categoría
    for (const category of categories) {
      try {
        const dir = path.join(blogDir, category);
        
        // Leer archivos de la categoría
        let files: string[] = [];
        try {
          files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
        } catch (error) {
          console.error(`Error al leer archivos de la categoría ${category}:`, error);
          continue; // Continuar con la siguiente categoría si hay error
        }
        
        // Procesar cada archivo
        for (const filename of files) {
          try {
            const filePath = path.join(dir, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            const normalized = normalizeFrontmatter(data);
            
            all.push({
              ...normalized,
              content,
              slug: filename.replace(/\.md$/, ""),
              category,
            });
          } catch (error) {
            console.error(`Error al procesar el archivo ${filename} en ${category}:`, error);
            // Continuar con el siguiente archivo si hay error
          }
        }
      } catch (error) {
        console.error(`Error al procesar la categoría ${category}:`, error);
        // Continuar con la siguiente categoría si hay error
      }
    }
    
    return all;
  } catch (error) {
    console.error('Error inesperado en getAllArticles:', error);
    return [];
  }
}