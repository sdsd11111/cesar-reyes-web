import { supabase } from './lib/supabase';

async function testSupabase() {
  console.log('=== Probando conexión con Supabase ===');
  
  // 1. Probar autenticación
  console.log('1. Probando autenticación...');
  const { data: { session }, error: authError } = await supabase.auth.getSession();
  
  if (authError) {
    console.error('Error de autenticación:', authError.message);
    return;
  }
  
  console.log('Autenticación exitosa');
  console.log('Usuario:', session?.user?.email || 'No hay sesión activa');
  
  // 2. Probar consulta a artículos
  console.log('\n2. Probando consulta a artículos...');
  const { data: articles, error: articlesError } = await supabase
    .from('articles')
    .select('*')
    .limit(2);
  
  if (articlesError) {
    console.error('Error al consultar artículos:', articlesError.message);
    return;
  }
  
  console.log('Se encontraron', articles.length, 'artículos');
  console.log('Primeros artículos:', articles.map(a => ({ id: a.id, title: a.title })));
  
  // 3. Probar inserción (solo si hay sesión)
  if (session?.user) {
    console.log('\n3. Probando inserción de artículo de prueba...');
    const testArticle = {
      title: 'Artículo de prueba ' + new Date().toISOString(),
      slug: 'test-' + Date.now(),
      content: 'Este es un artículo de prueba',
      published: false
    };
    
    const { data: newArticle, error: insertError } = await supabase
      .from('articles')
      .insert(testArticle)
      .select()
      .single();
    
    if (insertError) {
      console.log('No se pudo insertar artículo (puede ser por permisos):', insertError.message);
    } else {
      console.log('Artículo de prueba creado con ID:', newArticle.id);
      
      // Opcional: Eliminar el artículo de prueba
      console.log('\nEliminando artículo de prueba...');
      await supabase.from('articles').delete().eq('id', newArticle.id);
      console.log('Artículo de prueba eliminado');
    }
  } else {
    console.log('\nNo hay sesión activa, omitiendo prueba de inserción');
  }
  
  console.log('\n=== Todas las pruebas completadas ===');
}

testSupabase().catch(console.error);
