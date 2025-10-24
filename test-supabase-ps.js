// test-supabase-ps.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Cargar variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: No se encontraron las variables de entorno necesarias');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  console.log('=== Probando conexión con Supabase ===');
  console.log('URL:', supabaseUrl);
  console.log('Clave (inicio):', supabaseKey.substring(0, 10) + '...');
  
  try {
    // 1. Probar conexión básica
    console.log('\n1. Probando conexión...');
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    
    console.log('Conexión exitosa');
    console.log('Datos de prueba:', data ? 'OK' : 'Sin datos');
    
    // 2. Probar autenticación
    console.log('\n2. Probando autenticación...');
    const { data: { session } } = await supabase.auth.getSession();
    console.log('Sesión activa:', session ? 'Sí' : 'No');
    
    if (session) {
      console.log('Usuario:', session.user.email);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log('\n=== Prueba completada ===');
}

testSupabase();
