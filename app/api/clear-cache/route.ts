import { NextResponse } from 'next/server';
import { articleCache } from '@/lib/cache-utils';

export async function POST() {
  try {
    articleCache.clear();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al limpiar la caché:', error);
    return NextResponse.json(
      { error: 'Error al limpiar la caché' },
      { status: 500 }
    );
  }
}
