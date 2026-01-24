import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const STATS_FILE = path.join(process.cwd(), 'data', 'statistics.json');

// Función para leer las estadísticas
function readStats() {
  try {
    const data = fs.readFileSync(STATS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer estadísticas:', error);
    return {
      totalVisitas: 0,
      visitasHoy: 0,
      articulosPublicados: 0,
      suscriptoresNewsletter: 0,
      ultimasVisitas: [],
      visitasPorDia: {},
      aperturasEmail: {}
    };
  }
}

// Función para escribir las estadísticas
function writeStats(stats: any) {
  try {
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
  } catch (error) {
    console.error('Error al escribir estadísticas:', error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const emailId = searchParams.get('id');
    const email = searchParams.get('email');

    if (!emailId || !email) {
      return new Response('', { status: 200 });
    }

    const stats = readStats();
    
    // Registrar la apertura
    if (!stats.aperturasEmail[emailId]) {
      stats.aperturasEmail[emailId] = {
        email,
        aperturas: 0,
        ultimaApertura: null
      };
    }
    
    stats.aperturasEmail[emailId].aperturas++;
    stats.aperturasEmail[emailId].ultimaApertura = new Date().toISOString();
    
    writeStats(stats);

    // Devolver un pixel de 1x1 transparente
    return new Response(
      Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'),
      {
        headers: {
          'Content-Type': 'image/gif',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
  } catch (error) {
    console.error('Error al registrar apertura de email:', error);
    return new Response('', { status: 200 });
  }
} 