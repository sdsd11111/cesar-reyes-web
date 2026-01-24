const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

// Ruta a la carpeta de artículos
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Función para renombrar archivos
async function renameFiles(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  let renamedCount = 0;
  let errorCount = 0;

  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    
    try {
      // Si es un directorio, recorrerlo recursivamente
      if (item.isDirectory()) {
        await renameFiles(itemPath);
      } 
      // Si es un archivo .md con guiones bajos
      else if (item.name.endsWith('.md') && item.name.includes('_')) {
        const newName = item.name.replace(/_/g, '-');
        const newPath = path.join(dir, newName);
        
        // Verificar si el archivo ya existe para evitar sobrescribir
        if (fs.existsSync(newPath)) {
          console.warn(`⚠️  El archivo ${newName} ya existe. Omitiendo...`);
          errorCount++;
          continue;
        }

        console.log(`✅ Renombrando: ${item.name} -> ${newName}`);
        await rename(itemPath, newPath);
        renamedCount++;
      }
    } catch (error) {
      console.error(`❌ Error al renombrar ${itemPath}:`, error.message);
      errorCount++;
    }
  }

  return { renamedCount, errorCount };
}

// Mostrar un resumen al final
async function main() {
  console.log('🚀 Iniciando el proceso de renombrado...\n');
  
  try {
    const { renamedCount, errorCount } = await renameFiles(BLOG_DIR);
    
    console.log('\n✅ Proceso completado:');
    console.log(`- Archivos renombrados: ${renamedCount}`);
    console.log(`- Errores: ${errorCount}`);
    
    if (errorCount > 0) {
      console.log('\n⚠️  Algunos archivos no se pudieron renombrar. Verifica los mensajes de advertencia.');
    }
  } catch (error) {
    console.error('\n❌ Error durante el proceso:', error.message);
    process.exit(1);
  }
}

// Ejecutar el script
main();
