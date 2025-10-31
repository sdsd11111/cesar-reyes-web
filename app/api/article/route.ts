import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json(
      { error: 'Ruta del archivo no proporcionada' },
      { status: 400 }
    );
  }

  try {
    // Construir la ruta completa al archivo
    const fullPath = path.join(process.cwd(), filePath);
    
    // Verificar que el archivo existe
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: 'Artículo no encontrado' },
        { status: 404 }
      );
    }

    // Leer el archivo
    const content = await readFile(fullPath, 'utf8');
    
    // Devolver el contenido como texto plano
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return NextResponse.json(
      { error: 'Error al leer el artículo' },
      { status: 500 }
    );
  }
}
