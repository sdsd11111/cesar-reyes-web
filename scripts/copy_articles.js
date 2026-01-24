const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Configuración
const SOURCE_DIR = path.join(__dirname, '..', 'articulos', 'articulos_scrapeados_final');
const TARGET_DIR = path.join(__dirname, '..', 'content', 'blog');

// Mapeo de palabras clave a categorías
const CATEGORY_MAP = {
  'asesor': 'asesoria',
  'pyme': 'asesoria',
  'emprendedor': 'asesoria',
  'negocio': 'asesoria',
  'automatiza': 'automatizacion',
  'automatización': 'automatizacion',
  'diseño': 'diseno-web',
  'web': 'diseno-web',
  'página': 'diseno-web',
  'sitio': 'diseno-web',
  'seo': 'seo',
  'marketing': 'seo',
  'redes': 'seo',
  'facebook': 'seo',
  'estrategia': 'estrategia',
  'plan': 'estrategia',
  'competidor': 'estrategia',
  'mercado': 'estrategia',
};

// Función para determinar la categoría basada en el nombre del archivo
function determineCategory(filename) {
  const lowerName = filename.toLowerCase();
  
  for (const [keyword, category] of Object.entries(CATEGORY_MAP)) {
    if (lowerName.includes(keyword)) {
      return category;
    }
  }
  
  return 'varios';
}

// Función para generar un slug a partir del nombre del archivo
function generateSlug(filename) {
  // Eliminar la extensión .md y el sufijo _césar_reyes si existe
  let slug = filename
    .replace(/\.md$/, '')
    .replace(/_-_césar_reyes$/, '')
    .replace(/_-_cesar_reyes$/, '');
  
  // Convertir a minúsculas y reemplazar caracteres especiales
  return slug
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales
    .replace(/\s+/g, '-')       // Reemplazar espacios con guiones
    .replace(/-+/g, '-')        // Eliminar guiones múltiples
    .replace(/^-+|-+$/g, '');   // Eliminar guiones al inicio y final
}

// Función para copiar un archivo si no existe
async function copyArticleIfNotExists(sourceFile) {
  try {
    const filename = path.basename(sourceFile);
    const category = determineCategory(filename);
    const slug = generateSlug(filename);
    const targetDir = path.join(TARGET_DIR, category);
    const targetFile = path.join(targetDir, `${slug}.md`);
    
    // Verificar si el archivo de destino ya existe
    try {
      await access(targetFile, fs.constants.F_OK);
      console.log(`✅ Archivo ya existe: ${targetFile}`);
      return { success: false, reason: 'already_exists', targetFile };
    } catch (e) {
      // El archivo no existe, podemos continuar
    }
    
    // Crear el directorio de destino si no existe
    if (!fs.existsSync(targetDir)) {
      await mkdir(targetDir, { recursive: true });
      console.log(`📁 Directorio creado: ${targetDir}`);
    }
    
    // Leer el contenido del archivo fuente
    const content = await readFile(sourceFile, 'utf8');
    
    // Escribir el archivo de destino
    await writeFile(targetFile, content, 'utf8');
    console.log(`✅ Copiado: ${sourceFile} -> ${targetFile}`);
    
    return { success: true, targetFile };
  } catch (error) {
    console.error(`❌ Error al copiar ${sourceFile}:`, error.message);
    return { success: false, reason: 'error', error };
  }
}

// Función principal
async function main() {
  try {
    console.log('🚀 Iniciando copia de artículos...');
    console.log(`🔍 Buscando en: ${SOURCE_DIR}`);
    
    // Leer todos los archivos .md en el directorio fuente
    const files = fs.readdirSync(SOURCE_DIR)
      .filter(file => file.endsWith('.md'));
    
    console.log(`📄 Encontrados ${files.length} artículos`);
    
    // Procesar cada archivo
    const results = [];
    for (const file of files) {
      const sourceFile = path.join(SOURCE_DIR, file);
      const result = await copyArticleIfNotExists(sourceFile);
      results.push({
        file,
        ...result
      });
    }
    
    // Mostrar resumen
    const successCount = results.filter(r => r.success).length;
    const skippedCount = results.filter(r => r.reason === 'already_exists').length;
    const errorCount = results.length - successCount - skippedCount;
    
    console.log('\n🎉 Proceso completado!');
    console.log(`✅ ${successCount} artículos copiados exitosamente`);
    console.log(`⏩ ${skippedCount} artículos ya existentes (no se sobrescribieron)`);
    console.log(`❌ ${errorCount} errores`);
    
  } catch (error) {
    console.error('❌ Error en el proceso principal:', error);
    process.exit(1);
  }
}

// Ejecutar el script
main();
