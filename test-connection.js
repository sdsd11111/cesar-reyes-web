// test-connection.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Faltan variables de entorno de Supabase');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('=== Probando conexión con Supabase ===');
  
  // 1. Probar conexión básica
  console.log('1. Probando conexión...');
  const { data, error } = await supabase.from('articles').select('*').limit(1);
  
  if (error) {
    console.error('Error de conexión:', error.message);
    return;
  }
  
  console.log('✅ Conexión exitosa');
  console.log('Datos de prueba:', data ? 'OK' : 'Sin datos');
  
  // 2. Probar autenticación
  console.log('\n2. Probando autenticación...');
  const { data: { session } } = await supabase.auth.getSession();
  console.log('Sesión activa:', session ? 'Sí' : 'No');
  
  if (session) {
    console.log('Usuario:', session.user.email);
  }
  
  console.log('\n=== Prueba completada ===');
}

testConnection().catch(console.error);
