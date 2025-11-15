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
      visitasPorDia: {}
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

// Función para obtener las estadísticas
export async function GET() {
  try {
    const stats = readStats();
    
    // Obtener el número de artículos publicados
    const articlesDir = path.join(process.cwd(), 'content', 'blog');
    const categories = fs.readdirSync(articlesDir);
    let totalArticles = 0;
    
    for (const category of categories) {
      const categoryPath = path.join(articlesDir, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const articles = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));
        totalArticles += articles.length;
      }
    }
    
    stats.articulosPublicados = totalArticles;
    
    // Obtener el número de suscriptores
    const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.json');
    if (fs.existsSync(subscribersFile)) {
      const subscribers = JSON.parse(fs.readFileSync(subscribersFile, 'utf8'));
      stats.suscriptoresNewsletter = subscribers.length;
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
}

// Función para registrar una nueva visita
export async function POST(request: Request) {
  try {
    const { pagina } = await request.json();
    const stats = readStats();
    
    // Actualizar contadores
    stats.totalVisitas++;
    stats.visitasHoy++;
    
    // Registrar la visita
    const fecha = new Date().toISOString().split('T')[0];
    if (!stats.visitasPorDia[fecha]) {
      stats.visitasPorDia[fecha] = 0;
    }
    stats.visitasPorDia[fecha]++;
    
    // Actualizar últimas visitas
    stats.ultimasVisitas.unshift({
      fecha: new Date().toISOString().split('T')[0],
      pagina,
      visitas: 1
    });
    
    // Mantener solo las últimas 10 visitas
    if (stats.ultimasVisitas.length > 10) {
      stats.ultimasVisitas = stats.ultimasVisitas.slice(0, 10);
    }
    
    writeStats(stats);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al registrar visita:', error);
    return NextResponse.json(
      { error: 'Error al registrar visita' },
      { status: 500 }
    );
  }
} 