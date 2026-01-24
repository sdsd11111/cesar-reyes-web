const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Iniciando proceso de compilación...');

// Crear archivo de entorno temporal para la compilación
if (!fs.existsSync('.env')) {
  console.log('Creando archivo .env temporal...');
  fs.writeFileSync(
    '.env',
    `NEXT_PUBLIC_SITE_URL=${process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com'}
NODE_ENV=production`
  );
}

try {
  // Instalar dependencias
  console.log('Instalando dependencias...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  // Construir la aplicación
  console.log('Construyendo la aplicación...');
  execSync('next build', { stdio: 'inherit' });

  // Generar sitemap
  console.log('Generando sitemap...');
  execSync('npx next-sitemap', { stdio: 'inherit' });

  console.log('✅ Compilación completada exitosamente');
  process.exit(0);
} catch (error) {
  console.error('❌ Error durante la compilación:', error);
  process.exit(1);
}
