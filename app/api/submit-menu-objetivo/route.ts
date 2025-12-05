import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Initialize Supabase client with SERVICE_ROLE_KEY to bypass RLS
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_RETO_URL;
const supabaseKey = process.env.SUPABASE_RETO_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, tipo_restaurante, terminos } = await request.json();

    // Validate required fields
    if (!nombre || !email || !telefono || !tipo_restaurante) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    if (!terminos) {
      return NextResponse.json(
        { error: 'Debes aceptar los términos y condiciones' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('reservas_restaurantes')
      .insert([
        {
          nombre,
          email,
          telefono,
          tipo_restaurante,
          terminos_aceptados: terminos,
        },
      ])
      .select();

    if (error) {
      console.error('=== SUPABASE ERROR DETAILS ===');
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
      console.error('Supabase URL:', supabaseUrl);
      console.error('Has Anon Key:', !!supabaseKey);
      console.error('Anon Key length:', supabaseKey?.length);
      console.error('==============================');

      return NextResponse.json(
        {
          error: 'Error al guardar los datos. Por favor, intenta nuevamente.',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }


    // Send confirmation email to user
    try {
      console.log('=== ATTEMPTING TO SEND EMAIL ===');
      console.log('To:', email);
      console.log('From:', process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com');
      console.log('SMTP Host:', process.env.EMAIL_SERVER);
      console.log('SMTP Port:', process.env.EMAIL_PORT);
      console.log('SMTP User:', process.env.EMAIL_USER);
      console.log('Has Password:', !!process.env.EMAIL_PASSWORD);

      const mailOptions = {
        from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
        to: email,
        subject: 'Confirmación de Reserva - MenúObjetivo',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
            <!-- Header -->
            <h1 style="text-align: center; color: #FF6B00; font-size: 28px; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 2px solid #FF6B00;">
              MenúObjetivo - César Reyes
            </h1>
            
            <!-- Greeting -->
            <p>Hola <strong>${nombre}</strong>,</p>
            
            <p style="font-size: 18px; font-weight: bold; color: #FF6B00; margin: 25px 0;">
              ¡Gracias por reservar tu cupo!
            </p>
            
            <p>Acabamos de recibir tu solicitud para la promoción exclusiva de MenúObjetivo.</p>
            
            <!-- Important Section -->
            <div style="border-left: 4px solid #FF6B00; padding-left: 15px; margin: 25px 0; background-color: #FFF5F0; padding: 15px;">
              <h3 style="color: #FF6B00; margin-top: 0;">📞 Te contactaremos pronto</h3>
              <p>En las próximas <strong>24 horas</strong> nos pondremos en contacto contigo para:</p>
              <ul style="padding-left: 20px;">
                <li>Confirmar todos los detalles de tu menú digital</li>
                <li>Resolver cualquier duda que tengas</li>
                <li>Explicarte el proceso paso a paso</li>
                <li>Coordinar el método de pago</li>
              </ul>
            </div>
            
            <!-- Summary -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 15px; margin: 25px 0;">
              <h3 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">📋 Datos de tu reserva:</h3>
              <ul style="padding-left: 20px;">
                <li><strong>Nombre:</strong> ${nombre}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>WhatsApp:</strong> ${telefono}</li>
                <li><strong>Tipo de restaurante:</strong> ${tipo_restaurante}</li>
              </ul>
            </div>
            
            <!-- Contact Section -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="font-weight: bold; margin-bottom: 15px;">❓ ¿Tienes dudas urgentes?</p>
              <p>Escríbenos por WhatsApp:</p>
              <a href="https://wa.me/593963410409?text=Hola,%20acabo%20de%20reservar%20mi%20cupo%20para%20MenúObjetivo" 
                 style="background-color: #25D366; color: white; padding: 12px 24px; 
                        text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;
                        font-size: 16px; margin: 10px 0 20px;">
                📱 593 96 341 0409
              </a>
            </div>
            
            <!-- Closing -->
            <p style="text-align: center; font-style: italic; margin: 25px 0;">
              Nos vemos pronto, <strong>${nombre.split(' ')[0]}</strong>.
            </p>
            
            <p style="text-align: center; font-weight: bold; font-size: 18px; color: #FF6B00; margin: 30px 0;">
              Tu restaurante merece ser encontrado.
            </p>
            
            <!-- Signature -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 5px 0; font-weight: bold;">César Reyes</p>
              <p style="margin: 5px 0; color: #FF6B00;">Fundador | Objetivo</p>
              <p style="margin: 5px 0;">
                <a href="https://cesarreyesjaramillo.com" style="color: #FF6B00; text-decoration: none;">www.cesarreyesjaramillo.com</a>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;
                      font-size: 12px; color: #94a3b8;">
              <p style="margin: 5px 0; font-weight: bold; color: #475569;">MenúObjetivo - Desarrollo Web Profesional</p>
              <p style="margin: 5px 0;">Loja, Ecuador</p>
              <p style="margin: 5px 0;">WhatsApp: 0963410409</p>
              <p style="margin: 5px 0;">Email: menuobjetivo@cesarreyesjaramillo.com</p>
            </div>
          </div>
        `,
      };

      console.log('Sending email with nodemailer...');
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully!');
      console.log('Message ID:', info.messageId);
      console.log('Response:', info.response);
      console.log('===============================');
    } catch (emailError: any) {
      console.error('=== EMAIL ERROR ===');
      console.error('Error type:', emailError.constructor.name);
      console.error('Error message:', emailError.message);
      console.error('Error code:', emailError.code);
      console.error('Full error:', emailError);
      console.error('===================');
      // Don't fail the request if email fails - data is already saved
      return NextResponse.json({
        success: true,
        message: 'Reserva guardada correctamente, pero hubo un problema al enviar el correo de confirmación.',
        data: data[0],
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Reserva guardada correctamente. Te hemos enviado un correo de confirmación.',
      data: data[0],
    });
  } catch (error) {
    console.error('Error processing reservation:', error);
    return NextResponse.json(
      { error: 'Error al procesar la reserva. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  }
}
