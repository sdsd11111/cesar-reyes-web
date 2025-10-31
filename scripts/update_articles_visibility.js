const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Configuración
const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');

// Función para actualizar un archivo
async function updateArticle(filePath) {
  try {
    // Leer el contenido actual
    let content = await readFile(filePath, 'utf8');
    
    // Verificar si ya tiene frontmatter
    if (!content.startsWith('---\n')) {
      // Si no tiene frontmatter, agregarlo
      const fileName = path.basename(filePath, '.md');
      const title = fileName
        .replace(/[-_]/g, ' ') // Reemplazar guiones y guiones bajos por espacios
        .replace(/\b\w/g, l => l.toUpperCase()) // Capitalizar primera letra de cada palabra
        .replace(/\s+/g, ' ') // Eliminar espacios múltiples
        .trim();
      
      const newContent = `---
title: "${title}"
date: ${new Date().toISOString()}
draft: true
---

${content}`;
      
      await writeFile(filePath, newContent, 'utf8');
      console.log(`✅ Actualizado: ${filePath}`);
      return 'updated';
    } else {
      // Si ya tiene frontmatter, verificar si necesita actualización
      const frontmatterEnd = content.indexOf('---', 3);
      const frontmatter = content.substring(0, frontmatterEnd + 3);
      
      // Verificar si ya tiene draft: true
      if (!frontmatter.includes('draft:') && !frontmatter.includes('draft :')) {
        // Insertar draft: true después de la primera línea del frontmatter
        const firstLineEnd = content.indexOf('\n');
        const newContent = 
          content.substring(0, firstLineEnd + 1) + 
          'draft: true\n' + 
          content.substring(firstLineEnd + 1);
        
        await writeFile(filePath, newContent, 'utf8');
        console.log(`✅ Actualizado: ${filePath}`);
        return 'updated';
      } else if (frontmatter.includes('draft: false')) {
        // Cambiar draft: false a draft: true
        const newContent = content.replace('draft: false', 'draft: true');
        await writeFile(filePath, newContent, 'utf8');
        console.log(`✅ Actualizado: ${filePath}`);
        return 'updated';
      } else {
        console.log(`⏭️  Ya tiene draft:true: ${filePath}`);
        return 'skipped';
      }
    }
  } catch (error) {
    console.error(`❌ Error al procesar ${filePath}:`, error.message);
    return 'error';
  }
}

// Función para recorrer directorios y archivos
async function processDirectory(directory) {
  const results = {
    updated: 0,
    skipped: 0,
    errors: 0
  };

  try {
    const items = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(directory, item.name);
      
      if (item.isDirectory()) {
        // Procesar subdirectorio
        const subResults = await processDirectory(fullPath);
        results.updated += subResults.updated;
        results.skipped += subResults.skipped;
        results.errors += subResults.errors;
      } else if (item.name.endsWith('.md')) {
        // Procesar archivo markdown
        const result = await updateArticle(fullPath);
        
        if (result === 'updated') results.updated++;
        else if (result === 'skipped') results.skipped++;
        else results.errors++;
      }
    }
  } catch (error) {
    console.error(`❌ Error al leer el directorio ${directory}:`, error.message);
    results.errors++;
  }
  
  return results;
}

// Función principal
async function main() {
  console.log('🚀 Iniciando actualización de artículos...');
  
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`❌ No se encontró el directorio: ${BLOG_DIR}`);
    process.exit(1);
  }
  
  console.log(`📂 Procesando artículos en: ${BLOG_DIR}`);
  
  const results = await processDirectory(BLOG_DIR);
  
  console.log('\n🎉 Proceso completado!');
  console.log(`✅ ${results.updated} artículos actualizados`);
  console.log(`⏭️ ${results.skipped} artículos ya estaban configurados`);
  console.log(`❌ ${results.errors} errores`);
}

// Ejecutar el script
main().catch(error => {
  console.error('❌ Error en el proceso principal:', error);
  process.exit(1);
});
