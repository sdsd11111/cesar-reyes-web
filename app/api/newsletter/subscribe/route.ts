import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Leer el archivo de suscriptores
    const subscribersPath = path.join(process.cwd(), 'data', 'subscribers.json');
    let subscribers: string[] = [];

    try {
      const fileContent = fs.readFileSync(subscribersPath, 'utf-8');
      subscribers = JSON.parse(fileContent);
    } catch (error) {
      // Si el archivo no existe, se creará con el nuevo suscriptor
    }

    // Verificar si el email ya está suscrito
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { error: 'Este email ya está suscrito' },
        { status: 400 }
      );
    }

    // Agregar el nuevo suscriptor
    subscribers.push(email);

    // Guardar la lista actualizada
    fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));

    return NextResponse.json(
      { message: 'Suscripción exitosa' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar la suscripción:', error);
    return NextResponse.json(
      { error: 'Error al procesar la suscripción' },
      { status: 500 }
    );
  }
} 