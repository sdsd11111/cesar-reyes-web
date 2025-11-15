import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Función para manejar fechas de forma segura
function safeDate(dateString: string | undefined): string {
  if (!dateString) return new Date().toISOString();
  
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

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

// Función auxiliar para determinar si un valor debe considerarse como verdadero
function isTruthy(value: any): boolean {
  if (value === undefined || value === null) return true; // Por defecto, visible
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase().trim();
    return lower === 'true' || lower === '1' || lower === 'yes' || lower === 'sí';
  }
  if (typeof value === 'number') return value !== 0;
  return Boolean(value);
}

// Función para extraer metadatos del nombre del archivo
function extractMetadataFromFilename(filename: string): { title: string; slug: string } {
  // Eliminar la extensión .md
  const withoutExt = filename.replace(/\.md$/, '');
  
  // Extraer título (reemplazar guiones bajos y guiones con espacios)
  const title = withoutExt
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Crear un slug a partir del título
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .replace(/\s+/g, '-')       // Reemplazar espacios con guiones
    .replace(/-+/g, '-')        // Eliminar guiones múltiples
    .replace(/^-+|-+$/g, '');   // Eliminar guiones al inicio y final
    
  return { title, slug };
}

// Función para analizar un archivo de artículo
export async function parseArticleFile(filePath: string, category: string): Promise<BlogArticle | null> {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
    
    // Usar gray-matter para parsear el frontmatter con manejo de errores mejorado
    let data = {};
    let content = '';
    
    try {
      const parsed = matter(fileContent, {
        // Usar un motor YAML más tolerante
        engines: {
          yaml: {
            parse: (yamlContent: string) => {
              try {
                const yaml = require('js-yaml');
                const result: Record<string, any> = {};
                
                // Limpiar el contenido YAML eliminando líneas vacías al inicio y final
                const cleanYaml = yamlContent
                  .split('\n')
                  .filter(line => line.trim().length > 0)
                  .join('\n');
                
                const parsed = yaml.load(cleanYaml) || {};
                
                // Convertir todos los valores a strings
                for (const key in parsed) {
                  if (Object.prototype.hasOwnProperty.call(parsed, key)) {
                    result[key] = String(parsed[key]);
                  }
                }
                
                return result;
              } catch (yamlError) {
                console.error('Error al analizar YAML:', yamlError);
                // Si hay un error, intentar extraer pares clave-valor manualmente
                const lines = yamlContent.split('\n');
                const result: Record<string, string> = {};
                
                for (const line of lines) {
                  const match = line.match(/^\s*(\w+):\s*(.*?)\s*$/);
                  if (match) {
                    result[match[1]] = match[2].replace(/^['"](.*)['"]$/, '$1');
                  }
                }
                
                return result;
              }
            }
          }
        },
        // Deshabilitar otros motores para evitar conflictos
        language: 'yaml',
        delimiters: '---'
      });
      
      data = parsed.data || {};
      content = parsed.content || '';
    } catch (error) {
      console.error('Error al analizar el frontmatter, usando valores por defecto:', error);
      // Si hay un error, extraer el contenido después del primer ---
      const parts = fileContent.split('---');
      if (parts.length > 2) {
        content = parts.slice(2).join('---').trim();
      } else {
        content = fileContent;
      }
    }
    
    // Extraer metadatos del nombre del archivo si es necesario
    const filename = path.basename(filePath);
    const filenameMetadata = extractMetadataFromFilename(filename);
    
    // Normalizar los datos del frontmatter
    const normalized = normalizeFrontmatter(data);
    
    // Convertir el contenido Markdown a HTML
    let htmlContent = '';
    try {
      htmlContent = await marked(content);
    } catch (error) {
      console.error('Error al convertir markdown a HTML:', error);
      htmlContent = content;
    }
    
    // Obtener el slug del nombre del archivo
    const slug = path.basename(filePath, '.md');
    
    // Función para normalizar la URL de la imagen
    const normalizeImageUrl = (url: string | undefined): string => {
      if (!url) return '/images/placeholder-blog.jpg';
      
      // Si es una URL absoluta a cesarreyesjaramillo.com, extraer solo el nombre del archivo
      if (url.includes('cesarreyesjaramillo.com')) {
        const fileName = url.split('/').pop() || '';
        return `/images/articulos/${fileName}`;
      }
      
      // Si la URL no comienza con /, agregar /images/articulos/
      if (!url.startsWith('/') && !url.startsWith('http')) {
        return `/images/articulos/${url}`;
      }
      
      return url;
    };

    // Crear el objeto del artículo con valores por defecto
    const article: BlogArticle = {
      title: 'Sin título',
      excerpt: '',
      image: '/images/placeholder-blog.jpg',
      date: new Date().toISOString(),
      author: 'César Reyes',
      content: htmlContent,
      slug: slug,
      category: category,
      ...normalized // Esto sobrescribirá los valores por defecto con los del frontmatter
    };
    
    // Asegurar que los campos obligatorios tengan valores válidos
    article.title = (normalized.title || filenameMetadata.title || 'Sin título').trim();
    article.excerpt = (normalized.excerpt || normalized.description || '').trim();
    article.image = normalizeImageUrl(normalized.image || '');
    
    // Si no hay una imagen definida, intentar usar una por defecto basada en la categoría
    if (!normalized.image) {
      const categoryImages: Record<string, string> = {
        'asesoria': '/images/asesoria-blog.jpg',
        'automatizacion': '/images/automatizacion-blog.jpg',
        'diseno-web': '/images/diseno-web-blog.jpg',
        'estrategia': '/images/estrategia-blog.jpg',
        'seo': '/images/seo-blog.jpg'
      };
      
      article.image = categoryImages[category] || '/images/placeholder-blog.jpg';
    }
    
    return article;
  } catch (error) {
    console.error(`Error al analizar el archivo ${filePath}:`, error);
    return null;
  }
}

// Alias para mantener compatibilidad con el código existente
export const getAllBlogArticles = getAllArticles;

// Obtener artículos por categoría
export async function getArticlesByCategory(category: string): Promise<BlogArticle[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase() ||
    article.categoryId?.toLowerCase() === category.toLowerCase()
  );
}

export async function getAllArticles(includeHidden = false): Promise<BlogArticle[]> {
  console.log('Obteniendo artículos, includeHidden:', includeHidden);
  const articlesDir = path.join(process.cwd(), 'content/blog');
  
  // Verificar si el directorio existe
  if (!fs.existsSync(articlesDir)) {
    console.error('El directorio de artículos no existe:', articlesDir);
    return [];
  }
  
  const categories = fs.readdirSync(articlesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const allArticles: BlogArticle[] = [];
  
  for (const category of categories) {
    const categoryDir = path.join(articlesDir, category);
    
    // Verificar si el directorio de categoría existe
    if (!fs.existsSync(categoryDir)) {
      console.warn('El directorio de categoría no existe:', categoryDir);
      continue;
    }
    
    const articleFiles = fs.readdirSync(categoryDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
      .map(dirent => dirent.name);

    for (const file of articleFiles) {
      try {
        const filePath = path.join(categoryDir, file);
        const article = await parseArticleFile(filePath, category);
        
        if (!article) {
          console.warn('No se pudo analizar el artículo:', filePath);
          continue;
        }
        
        // Determinar visibilidad
        const isVisible = isTruthy(article.is_visible);
        
        // Si no se incluyen los ocultos y el artículo está oculto, saltar
        if (!includeHidden && !isVisible) {
          console.log('Omitiendo artículo oculto:', file);
          continue;
        }
        
        allArticles.push(article);
        // El slug ya se crea en parseArticleFile

        // El artículo ya fue procesado por parseArticleFile
        console.log('Artículo cargado:', article.slug, 'Visible:', article.is_visible);
      } catch (error) {
        console.error(`Error al procesar el archivo ${file} en la categoría ${category}:`, error);
      }
    }
  }

  // Ordenar artículos por fecha (más recientes primero)
  return allArticles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Mapeo de artículos específicos (slug personalizado => ruta real)
const ARTICLE_MAPPINGS: Record<string, { category: string; file: string }> = {
  // Marketing Digital
  'estrategias-efectivas-de-marketing-digital-para-2023': {
    category: 'marketing-digital',
    file: 'marketing-digital.md'
  },
  'estrategias-marketing-digital-2023': {
    category: 'marketing-digital',
    file: 'marketing-digital.md'
  },
  'marketing-digital': {
    category: 'marketing-digital',
    file: 'marketing-digital.md'
  },
  
  // Programación
  'programacion': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'programacion-conceptos-basicos': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'programacion:conceptos-basicos': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'programacion-conceptos': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'introduccion-a-la-programacion': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'introduccion-programacion': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'conceptos-basicos-programacion': {
    category: 'programacion',
    file: 'programacion.md'
  },
  'conceptos-programacion': {
    category: 'programacion',
    file: 'programacion.md'
  },
  
  // Menú WhatsApp
  'menu-whatsapp': {
    category: 'desarrollo-web',
    file: 'menu-whatsapp.md'
  },
  'menu%20whatsapp': {
    category: 'desarrollo-web',
    file: 'menu-whatsapp.md'
  },
  'menu_whatsapp': {
    category: 'desarrollo-web',
    file: 'menu-whatsapp.md'
  },
  
  // Menú Digital Rápido
  'menu-digital-rapido': {
    category: 'diseno-web',
    file: 'menu-digital-rapido.md'
  },
  'menudigitalrapido': {
    category: 'diseno-web',
    file: 'menu-digital-rapido.md'
  },
  'menu digital rapido': {
    category: 'diseno-web',
    file: 'menu-digital-rapido.md'
  }
};

// Función para generar variantes de slug para búsqueda
function generateSlugVariants(slug: string): string[] {
  const variants = new Set<string>();
  
  // Añadir el slug original
  variants.add(slug);
  
  // Generar variantes comunes
  const baseVariants = [
    slug,
    slug.toLowerCase(),
    slug.replace(/-/g, ' '),
    slug.replace(/ /g, '-'),
    slug.replace(/-/g, '_'),
    slug.replace(/_/g, '-')
  ];
  
  // Añadir variantes sin tildes
  const withoutAccents = slug
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
    
  if (withoutAccents !== slug) {
    variants.add(withoutAccents);
    variants.add(withoutAccents.toLowerCase());
    variants.add(withoutAccents.replace(/-/g, ' '));
    variants.add(withoutAccents.replace(/ /g, '-'));
  }
  
  // Añadir variantes de mapeo
  for (const variant of baseVariants) {
    variants.add(variant);
    variants.add(variant.toLowerCase());
  }
  
  return Array.from(variants);
}

// Leer un artículo individual
export async function getArticle(category: string, slug: string): Promise<BlogArticle | null> {
  if (!category || !slug) {
    console.warn('Categoría o slug no proporcionados');
    return null;
  }
  
  // Mapeo de categorías de URL a nombres de carpetas
  const categoryMap: Record<string, string> = {
    'asesoria-de-negocios-para-pymes': 'asesoria',
    'articulos-sobre-automatizacion-para-tu-empresa': 'automatizacion',
    'articulos-sobre-diseno-web-para-empresas': 'diseno-web',
    'planificacion-estrategica-para-empresas': 'estrategia',
    'articulos-sobre-seo-y-campanas-de-marketing': 'seo',
    'uncategorized': 'varios'
  };
  
  // Si el slug incluye la categoría, extraerla
  const slugParts = slug.split('/');
  if (slugParts.length > 1) {
    const possibleCategory = slugParts[0];
    if (categoryMap[possibleCategory]) {
      category = possibleCategory;
      slug = slugParts[1] || slug;
    }
  }

  try {
    // Primero intentar con la estructura antigua
    const oldPath = path.join(process.cwd(), "articulos", "articulos_scrapeados_final");
    
    // Verificar si el directorio de artículos antiguos existe
    if (fs.existsSync(oldPath)) {
      // Normalizar el slug para buscar en los nombres de archivo
      const normalizedSlug = slug.toLowerCase()
        .replace(/-/g, '_')
        .replace(/[^\w\s-]/g, '');
      
      // Leer todos los archivos en el directorio
      const files = fs.readdirSync(oldPath);
      
      // Buscar un archivo que coincida con el slug
      const matchingFile = files.find(file => {
        const fileName = file.toLowerCase().replace(/[^\w\s-]/g, '');
        return fileName.includes(normalizedSlug) && file.endsWith('.md');
      });
      
      if (matchingFile) {
        const filePath = path.join(oldPath, matchingFile);
        console.log(`✅ Artículo encontrado en estructura antigua: ${filePath}`);
        return await parseArticleFile(filePath, category);
      }
    }
    
    // Si no se encontró en la estructura antigua, intentar con la nueva
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    
    // Verificar si el directorio de blog existe
    if (!fs.existsSync(blogDir)) {
      console.error('Directorio de blog no encontrado:', blogDir);
      return null;
    }
    
    // Decodificar el slug de la URL
    const decodedSlug = decodeURIComponent(slug).toLowerCase().trim();
    
    // Verificar si hay un mapeo directo para este slug
    if (ARTICLE_MAPPINGS[decodedSlug]) {
      const mapping = ARTICLE_MAPPINGS[decodedSlug];
      const filePath = path.join(blogDir, mapping.category, mapping.file);
      
      if (fs.existsSync(filePath)) {
        console.log(`✅ Artículo encontrado mediante mapeo: ${filePath}`);
        return await parseArticleFile(filePath, mapping.category);
      }
    }
    
    // Si no hay mapeo directo, continuar con la búsqueda normal
    const normalizedSlug = decodedSlug.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    
    // Normalizar la categoría para manejar mayúsculas, espacios y caracteres especiales
    const normalizedCategory = decodeURIComponent(category).toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    // Verificar si el directorio de blog existe
    if (!fs.existsSync(blogDir)) {
      console.error('Directorio de blog no encontrado:', blogDir);
      return null;
    }
    
    // Obtener todas las categorías disponibles
    const allCategories = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
      .map(dirent => dirent.name);
    
    // Función para generar posibles variantes de nombre de archivo
    const getPossibleFilenames = (baseSlug: string) => {
      console.log('Generando variantes para slug:', baseSlug);
      
      // Limpiar el slug de caracteres especiales pero mantener guiones y espacios
      const cleanSlug = baseSlug.toLowerCase()
        .replace(/[^\w\s-:]/g, '')  // Mantener guiones y dos puntos
        .replace(/\s+/g, ' ')        // Reemplazar múltiples espacios por uno solo
        .trim();
      
      console.log('Slug limpio:', cleanSlug);
      
      // Generar variantes comunes
      const variants = new Set<string>();
      
      // Añadir el slug limpio
      variants.add(`${cleanSlug}.md`);
      
      // Añadir variantes con diferentes separadores
      variants.add(`${cleanSlug.replace(/-/g, ' ')}.md`);
      variants.add(`${cleanSlug.replace(/ /g, '-')}.md`);
      variants.add(`${cleanSlug.replace(/:/g, '-')}.md`);  // Reemplazar dos puntos por guión
      variants.add(`${cleanSlug.replace(/:/g, '')}.md`);    // Eliminar dos puntos
      variants.add(`${cleanSlug.replace(/-/g, '_')}.md`);
      variants.add(`${cleanSlug.replace(/ /g, '_')}.md`);
      
      // Añadir variantes sin tildes
      const withoutAccents = cleanSlug
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
        
      console.log('Slug sin acentos:', withoutAccents);
      
      if (withoutAccents !== cleanSlug) {
        variants.add(`${withoutAccents}.md`);
        variants.add(`${withoutAccents.replace(/-/g, ' ')}.md`);
        variants.add(`${withoutAccents.replace(/ /g, '-')}.md`);
      }
      
      // Añadir variantes comunes para artículos
      variants.add('index.md');
      variants.add('readme.md');
      
      return Array.from(variants);
    };
    
    // 1. Primero intentar con la categoría y slug exactos
    let filePath = '';
    const possibleFilenames = getPossibleFilenames(normalizedSlug);
    
    console.log('Buscando artículo con slug:', slug);
    console.log('Slug normalizado:', normalizedSlug);
    console.log('Categoría normalizada:', normalizedCategory);
    console.log('Variantes de slug generadas:', Array.from(possibleFilenames));
    
    // Buscar en la categoría especificada primero
    if (allCategories.includes(normalizedCategory)) {
      console.log(`Buscando en categoría: ${normalizedCategory}`);
      
      // Primero intentar con el nombre de la categoría como nombre de archivo
      const categoryAsFile = `${normalizedCategory}.md`;
      const categoryFilePath = path.join(blogDir, normalizedCategory, categoryAsFile);
      
      console.log('Probando con nombre de categoría como archivo:', categoryFilePath);
      if (fs.existsSync(categoryFilePath)) {
        filePath = categoryFilePath;
        console.log(`✅ Artículo encontrado usando nombre de categoría: ${filePath}`);
        return await parseArticleFile(filePath, normalizedCategory);
      }
      
      // Luego probar con todas las variantes del slug
      for (const filename of possibleFilenames) {
        const testPath = path.join(blogDir, normalizedCategory, filename);
        console.log('Probando ruta:', testPath);
        if (fs.existsSync(testPath)) {
          filePath = testPath;
          console.log(`✅ Artículo encontrado en ruta exacta: ${filePath}`);
          break;
        }
      }
    } else {
      console.warn(`La categoría ${normalizedCategory} no existe. Categorías disponibles:`, allCategories);
    }
    
    // 2. Si no se encuentra, buscar en todas las categorías
    if (!filePath) {
      console.warn(`Artículo no encontrado en ruta exacta. Buscando en todas las categorías...`);
      
      for (const categoryDir of allCategories) {
        // Saltar si ya buscamos en esta categoría
        if (categoryDir === normalizedCategory) continue;
        
        console.log(`Buscando en categoría: ${categoryDir}`);
        
        for (const filename of possibleFilenames) {
          const testPath = path.join(blogDir, categoryDir, filename);
          console.log('Probando ruta:', testPath);
          
          if (fs.existsSync(testPath)) {
            filePath = testPath;
            console.log(`✅ Artículo encontrado en: ${filePath}`);
            break;
          }
        }
        if (filePath) break;
      }
    }
    
    // Si aún no se encuentra, intentar con el nombre de la categoría como archivo en cualquier categoría
    if (!filePath) {
      console.warn('Artículo no encontrado en la categoría especificada. Buscando en todas las categorías...');
      
      // Intentar encontrar el archivo con el nombre de la categoría
      for (const cat of allCategories) {
        const testPath = path.join(blogDir, cat, `${cat}.md`);
        console.log('Probando con nombre de categoría como archivo:', testPath);
        
        if (fs.existsSync(testPath)) {
          // Verificar si el título del artículo coincide con lo que estamos buscando
          try {
            const article = await parseArticleFile(testPath, cat);
            if (article && 
                (article.title.toLowerCase().includes(normalizedSlug.replace(/-/g, ' ')) || 
                 article.slug.toLowerCase() === normalizedSlug)) {
              filePath = testPath;
              console.log(`✅ Artículo encontrado por coincidencia de título: ${filePath}`);
              break;
            }
          } catch (err) {
            console.error(`Error al analizar el artículo en ${testPath}:`, err);
          }
        }
      }
    }
    
    // Si aún no se encuentra, devolver null
    if (!filePath) {
      console.error(`No se pudo encontrar el artículo con slug: ${slug} (decodificado: ${decodedSlug})`);
      console.log('Categorías disponibles:', allCategories);
      
      // Mostrar archivos en las categorías para depuración
      for (const cat of allCategories) {
        try {
          const files = fs.readdirSync(path.join(blogDir, cat));
          console.log(`Archivos en ${cat}:`, files);
        } catch (err) {
          console.error(`Error al leer archivos en ${cat}:`, err);
        }
      }
      
      return null;
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
    
    // Extraer y analizar el frontmatter con manejo de errores
    const frontmatterContent = cleanedContent.slice(4, frontmatterEnd);
    
    let data: any = {};
    try {
      const parsed = matter(`---\n${frontmatterContent}\n---\n`);
      data = parsed.data;
      
      // Validar que los campos requeridos existan
      if (!data.title) {
        console.error('Error: El frontmatter debe contener un título');
        return null;
      }
      
      // Validar formato de fecha
      if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
        console.error(`Error: Formato de fecha inválido: ${data.date}. Debe ser YYYY-MM-DD`);
        return null;
      }
      
      // Validar formato de tags (debe ser un array o string separado por comas)
      if (data.tags && typeof data.tags === 'string' && data.tags.trim().startsWith('[')) {
        try {
          // Intentar parsear como JSON si parece un array
          data.tags = JSON.parse(data.tags.replace(/'/g, '"'));
        } catch (e) {
          // Si falla, convertir a array separando por comas
          data.tags = data.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
        }
      } else if (data.tags && typeof data.tags === 'string') {
        data.tags = data.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
      } else if (data.tags && !Array.isArray(data.tags)) {
        data.tags = [String(data.tags)];
      }
      
    } catch (error) {
      console.error('Error al analizar el frontmatter YAML:', error);
      console.error('Contenido problemático:', frontmatterContent);
      return null;
    }
    
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