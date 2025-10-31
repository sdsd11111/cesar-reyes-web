import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, html } = await request.json();

    // Validar los campos requeridos
    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Crear un transportador reutilizable usando el SMTP de Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para el puerto 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de Gmail
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña de aplicación de Gmail
      },
    });

    // Configurar los datos del correo electrónico
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Sitio Web'}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Correo enviado correctamente',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud de contacto' },
      { status: 500 }
    );
  }
}
