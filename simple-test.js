// simple-test.js
console.log('=== Prueba de Node.js ===');
console.log('Versión de Node:', process.version);
console.log('Variables de entorno:');
console.log('- NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'OK' : 'No definida');
console.log('- NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'OK' : 'No definida');
