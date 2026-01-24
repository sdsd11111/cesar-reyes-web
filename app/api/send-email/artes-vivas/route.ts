import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración del transporte de correo para Artes Vivas
const transporter = nodemailer.createTransport({
  host: 'mail.cesarreyesjaramillo.com',
  port: 465,
  secure: true, // true para 465, false para otros puertos
  auth: {
    user: 'menuobjetivo@cesarreyesjaramillo.com',
    pass: 'CN0Cf9Cwhkcs'
  },
  tls: {
    // No fallar en certificados inválidos (útil para desarrollo)
    rejectUnauthorized: false
  }
});

export async function POST(request: Request) {
  try {
    const { to, nombre, tipo_artesania, whatsapp } = await request.json();
    
    // Validaciones básicas
    if (!to || !nombre || !tipo_artesania) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Plantilla del correo para Artes Vivas
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h1 style="text-align: center; color: #1a365d; font-size: 24px; margin-bottom: 30px;">¡Bienvenido/a a Artes Vivas 2025!</h1>
        
        <div style="text-align: left; margin-bottom: 30px;">
          <p>Hola <strong>${nombre}</strong>,</p>
          <p>¡Gracias por registrarte en Artes Vivas 2025! Estamos emocionados de tenerte con nosotros.</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a365d; margin-top: 0;">Detalles de tu registro:</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${to}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || 'No proporcionado'}</p>
          <p><strong>Tipo de artesanía:</strong> ${tipo_artesania}</p>
        </div>
        
        <p>Pronto nos pondremos en contacto contigo para confirmar los detalles de tu participación.</p>
        
        <p>Si tienes alguna pregunta, no dudes en contactarnos respondiendo a este correo.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
          <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
          <p>© ${new Date().getFullYear()} Artes Vivas - Todos los derechos reservados</p>
        </div>
      </div>
    `;

    // Enviar el correo
    const info = await transporter.sendMail({
      from: '"César Reyes - Artes Vivas" <menuobjetivo@cesarreyesjaramillo.com>',
      to: to,
      replyTo: 'menuobjetivo@cesarreyesjaramillo.com',
      subject: '¡Bienvenido/a a Artes Vivas 2025!',
      html: emailHtml,
      // Configuración adicional para mejorar la entrega
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'X-Mailer': 'Nodemailer',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'Precedence': 'bulk'
      }
    });

    console.log('Mensaje enviado: %s', info.messageId);
    console.log('URL de vista previa: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true,
      message: 'Correo de bienvenida enviado correctamente',
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
    
  } catch (error) {
    console.error('Error al enviar el correo de Artes Vivas:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al procesar la solicitud de envío de correo',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
