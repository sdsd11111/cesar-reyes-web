import { NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/app/utils/emailService';

export async function POST(request: Request) {
  try {
    const { to, nombre, restaurante } = await request.json();
    
    // Validaciones básicas
    if (!to || !nombre || !restaurante) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    const result = await sendWelcomeEmail(to, nombre, restaurante);
    
    if (!result.success) {
      console.error('Error al enviar el correo:', result.error);
      return NextResponse.json(
        { error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error en la API de correo:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
