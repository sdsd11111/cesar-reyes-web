import { NextRequest, NextResponse } from 'next/server';

// Bunny.net config: usa variables de entorno en .env.local
const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || '';
const BUNNY_API_KEY = process.env.BUNNY_STORAGE_API_KEY || '';
const BUNNY_STORAGE_HOST = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';
const BUNNY_PULLZONE_URL = process.env.BUNNY_PULLZONE_URL || '';

export async function POST(req: NextRequest) {
  // Chequeo de variables de entorno críticas
  if (!BUNNY_STORAGE_ZONE || !BUNNY_API_KEY || !BUNNY_STORAGE_HOST || !BUNNY_PULLZONE_URL) {
    console.error('Faltan variables de entorno en el servidor:', {
      BUNNY_STORAGE_ZONE,
      BUNNY_API_KEY,
      BUNNY_STORAGE_HOST,
      BUNNY_PULLZONE_URL,
    });
    return NextResponse.json({ error: 'Faltan variables de entorno en el servidor.', vars: {
      BUNNY_STORAGE_ZONE,
      BUNNY_API_KEY: BUNNY_API_KEY ? '***' : '',
      BUNNY_STORAGE_HOST,
      BUNNY_PULLZONE_URL,
    } }, { status: 500 });
  }
  console.log('Entrando a /api/upload-image');
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const alt = formData.get('alt') as string | null;
    const title = formData.get('title') as string | null;

    if (!file || !file.name) {
      console.error('No file uploaded');
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Renombrar archivo para evitar colisiones
    const ext = file.name.split('.').pop();
    const safeName = file.name.replace(/[^a-zA-Z0-9-_\.]/g, '_');
    const filename = `${Date.now()}-${safeName}`;
    const bunnyPath = `articulos/${filename}`;

    // Leer el archivo como ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('Subiendo a Bunny.net:', bunnyPath);
    // Subir a Bunny.net Storage API
    const uploadRes = await fetch(`https://${BUNNY_STORAGE_HOST}/${BUNNY_STORAGE_ZONE}/${bunnyPath}`, {
      method: 'PUT',
      headers: {
        AccessKey: BUNNY_API_KEY,
        'Content-Type': file.type || 'application/octet-stream',
      },
      body: buffer,
    });

    if (!uploadRes.ok) {
      const errorText = await uploadRes.text();
      console.error('Error uploading to Bunny.net:', errorText);
      return NextResponse.json({ error: 'Error uploading to Bunny.net', details: errorText }, { status: 500 });
    }

    // Construir URL pública
    const publicUrl = `${BUNNY_PULLZONE_URL}/articulos/${filename}`;

    console.log('Imagen subida correctamente:', publicUrl);

    // (Opcional) Guardar metadatos en un JSON local o base de datos
    // ...

    return NextResponse.json({
      url: publicUrl,
      alt,
      title,
      filename,
    });
  } catch (err: any) {
    console.error('Error en /api/upload-image:', err);
    return NextResponse.json({ error: 'Server error', details: err?.message || String(err) }, { status: 500 });
  }
}