const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Faltan las variables de entorno de Supabase');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Función para normalizar el slug
function normalizeSlug(slug) {
  if (!slug) return '';
  return slug
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/_/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function updateHiddenSlugs() {
  try {
    console.log('🔍 Buscando artículos ocultos...');
    
    // Obtener solo artículos ocultos (is_visible = false)
    const { data: articles, error: fetchError } = await supabase
      .from('articles')
      .select('id, slug, is_visible, title')
      .eq('is_visible', false);
    
    if (fetchError) {
      throw new Error(`Error al obtener artículos: ${fetchError.message}`);
    }
    
    if (!articles || articles.length === 0) {
      console.log('✅ No se encontraron artículos ocultos para actualizar');
      return;
    }
    
    console.log(`📝 Se encontraron ${articles.length} artículos ocultos para procesar`);
    
    let updatedCount = 0;
    let errorCount = 0;
    let skippedCount = 0;
    
    // Procesar cada artículo oculto
    for (const article of articles) {
      const oldSlug = article.slug;
      const newSlug = normalizeSlug(oldSlug);
      
      // Solo actualizar si el slug ha cambiado
      if (newSlug !== oldSlug) {
        console.log(`\n📌 Título: ${article.title}`);
        console.log(`🔄 Actualizando: "${oldSlug}" -> "${newSlug}"`);
        
        try {
          // Actualizar el slug en la base de datos
          const { error: updateError } = await supabase
            .from('articles')
            .update({ slug: newSlug })
            .eq('id', article.id);
          
          if (updateError) {
            throw updateError;
          }
          
          console.log(`✅ Actualizado correctamente`);
          updatedCount++;
        } catch (error) {
          console.error(`❌ Error al actualizar el artículo ID ${article.id}:`, error.message);
          errorCount++;
        }
      } else {
        console.log(`\n⏭️  Saltado: "${oldSlug}" (ya está en el formato correcto)`);
        skippedCount++;
      }
    }
    
    console.log('\n🎉 Proceso completado:');
    console.log(`- Artículos actualizados: ${updatedCount}`);
    console.log(`- Artículos sin cambios: ${skippedCount}`);
    console.log(`- Errores: ${errorCount}`);
    
  } catch (error) {
    console.error('❌ Error en el proceso:', error.message);
    process.exit(1);
  }
}

// Ejecutar el script
updateHiddenSlugs();
