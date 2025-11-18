import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  try {
    const { category, slug } = await req.json();
    
    if (!category || !slug) {
      return NextResponse.json(
        { success: false, error: "Se requieren category y slug" },
        { status: 400 }
      );
    }

    // 1. Eliminar el archivo local
    const filePath = path.join(
      process.cwd(),
      'content',
      'blog',
      category,
      `${slug}.md`
    );
    
    try {
      await fs.access(filePath);
      await fs.unlink(filePath);
      console.log(`Archivo eliminado: ${filePath}`);
      
      // 2. Eliminar también cualquier archivo en caché
      const cacheDir = path.join(process.cwd(), '.next', 'server', 'app');
      try {
        const cacheFiles = await fs.readdir(cacheDir);
        const cacheFile = cacheFiles.find(file => file.includes(slug));
        if (cacheFile) {
          await fs.unlink(path.join(cacheDir, cacheFile));
          console.log(`Archivo de caché eliminado: ${cacheFile}`);
        }
      } catch (cacheError) {
        console.warn('No se pudo limpiar la caché:', cacheError);
      }
      
      return NextResponse.json({ 
        success: true,
        message: 'Artículo eliminado correctamente' 
      });
      
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
        return NextResponse.json(
          { success: false, error: 'El archivo no existe' },
          { status: 404 }
        );
      }
      throw error;
    }

  } catch (error: unknown) {
    console.error('Error al eliminar el artículo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al eliminar el artículo',
        details: process.env.NODE_ENV === 'development' 
          ? errorMessage 
          : 'Por favor, inténtalo de nuevo más tarde.'
      }, 
      { status: 500 }
    );
  }
}