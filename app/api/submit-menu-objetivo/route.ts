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
    const requestBody = await request.json();
    const { nombre, email, telefono, tipo_restaurante, terminos, campaign } = requestBody;

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
          // Guardamos también la campaña si la tabla tiene esa columna (opcional pero recomendado)
          // campaign: campaign || 'default' 
        },
      ])
      .select();

    if (error) {
      console.error('=== SUPABASE ERROR DETAILS ===');
      console.error('Error message:', error.message);
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
      console.log('Campaign:', campaign);

      let mailOptions: any = {
        from: process.env.EMAIL_FROM || 'negocios@cesarreyesjaramillo.com',
        to: email,
        subject: 'Confirmación de Solicitud - César Reyes',
        html: `<p>Hola ${nombre}, hemos recibido tu solicitud.</p>`
      };

      // === CAMPAIGN LOGIC ===
      if (campaign === 'sistema-de-contabilidad') {
        // Plantilla SISTEMA DE CONTABILIDAD
        mailOptions = {
          from: process.env.EMAIL_FROM || 'negocios@cesarreyesjaramillo.com',
          to: email,
          subject: '📊 Solicitud Recibida — Control Financiero para Hosterías',
          html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
                
                <!-- Header Image -->
                <div style="text-align: center; margin-bottom: 20px;">
                   <img src="https://www.cesarreyesjaramillo.com/images/sistema-contabilidad/hero-dashboard.jpeg" alt="Control Financiero" style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <h1 style="text-align: center; color: #e78c23; font-size: 24px; border-bottom: 2px solid #e78c23; padding-bottom: 15px; text-transform: uppercase;">
                  CONTROL FINANCIERO - REINGENIERÍA
                </h1>
                
                <p>Hola <strong>${nombre}</strong>,</p>
                
                <p>¡Gracias por tu interés en profesionalizar el control de tu hostería! 📈</p>
                
                <p>Hemos recibido correctamente tu solicitud para el <strong>Módulo de Control Financiero Local</strong>.</p>
                
                <div style="background-color: #FFF9F2; padding: 15px; border-left: 4px solid #e78c23; margin: 25px 0;">
                  <h3 style="color: #e78c23; margin-top: 0;">🚀 Siguientes pasos</h3>
                  <p>César o alguien de su equipo se pondrá en contacto contigo en las próximas <strong>24 horas</strong> para:</p>
                  <ul style="padding-left: 20px;">
                    <li>✅ Realizar un breve diagnóstico de tus necesidades.</li>
                    <li>✅ Mostrarte una demo en vivo del Dashboard para Hosterías.</li>
                    <li>✅ Explicarte el proceso de instalación local y capacitación.</li>
                  </ul>
                </div>
                
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e2e8f0;">
                  <h3 style="margin-top: 0; color: #1e293b;">📋 Resumen de tu contacto:</h3>
                  <ul style="list-style: none; padding: 0; line-height: 1.8;">
                    <li><strong>Nombre:</strong> ${nombre}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>WhatsApp:</strong> ${telefono}</li>
                    <li><strong>Servicio:</strong> Módulo de Control Financiero</li>
                  </ul>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <h3>❓ ¿Quieres agilizar el proceso?</h3>
                  <p>Puedes escribirnos directamente indicando tu nombre:</p>
                  <a href="https://wa.me/593963410409?text=Hola%20C%C3%A9sar,%20acabo%20de%20solicitar%20info%20sobre%20el%20sistema%20de%20contabilidad" 
                     style="background-color: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px;">
                    Chatear por WhatsApp
                  </a>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
                
                <div style="text-align: center; color: #666; font-size: 14px;">
                  <p style="font-weight: bold; color: #333;">César Reyes</p>
                  <p style="color: #e78c23;">Reingeniería Digital | Hotel Objetivo</p>
                  <p><a href="https://www.cesarreyesjaramillo.com" style="color: #666;">www.cesarreyesjaramillo.com</a></p>
                </div>
              </div>
            `
        };
      } else if (campaign === 'Carnavales 2026') {
        // Plantilla CARNAVALES 2026
        const websiteLink = (data: any) => data.website ? `<li><strong>Sitio Web:</strong> ${data.website}</li>` : '';
        const datosCaptura = (data: any) => data.datos_captura ? `<li><strong>Datos a capturar:</strong> ${data.datos_captura}</li>` : '';
        const wsAtencion = (data: any) => data.whatsapp_atencion ? `<li><strong>WhatsApp Atención:</strong> ${data.whatsapp_atencion}</li>` : '';

        // Usamos el request.json() object que ya tenemos pero como variables sueltas, así que accedemos directamente
        // Nota: En la función principal destructuramos, así que agregamos las nuevas variables al destructuring arriba

        mailOptions = {
          from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
          to: email,
          subject: '🎭 Cupo confirmado — Promoción especial Carnavales 2026',
          html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
                
                <!-- Header Image -->
                <div style="text-align: center; margin-bottom: 20px;">
                   <img src="https://www.cesarreyesjaramillo.com/images/carnavales-2026.webp" alt="Carnavales 2026" style="max-width: 100%; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <h1 style="text-align: center; color: #FF6B00; font-size: 24px; border-bottom: 2px solid #FF6B00; padding-bottom: 15px; text-transform: uppercase;">
                  PROMOCIÓN CARNAVALES 2026
                </h1>
                
                <p>Hola <strong>${nombre}</strong>,</p>
                
                <p>¡Gracias por reservar tu cupo! 🎉</p>
                
                <p>Hemos recibido correctamente tu solicitud para la <strong>promoción especial de Carnavales 2026</strong>.</p>
                
                <div style="background-color: #FFF5F0; padding: 15px; border-left: 4px solid #FF6B00; margin: 25px 0;">
                  <h3 style="color: #FF6B00; margin-top: 0;">📞 Siguientes pasos</h3>
                  <p>En las próximas <strong>24 horas</strong> nos pondremos en contacto contigo para:</p>
                  <ul style="padding-left: 20px;">
                    <li>✅ Confirmar los detalles de la promoción</li>
                    <li>✅ Validar la información de tu negocio</li>
                    <li>✅ Coordinar el método de pago y arranque</li>
                  </ul>
                </div>
                
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e2e8f0;">
                  <h3 style="margin-top: 0; color: #1e293b;">📋 Datos de tu registro:</h3>
                  <ul style="list-style: none; padding: 0; line-height: 1.8;">
                    <li><strong>Nombre:</strong> ${nombre}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>WhatsApp Contacto:</strong> ${telefono}</li>
                    <li><strong>Tipo de negocio:</strong> ${tipo_restaurante}</li>
                    ${requestBody.website ? `<li><strong>Sitio Web:</strong> ${requestBody.website}</li>` : ''}
                    ${requestBody.datos_captura ? `<li><strong>Info a capturar:</strong> ${requestBody.datos_captura}</li>` : ''}
                    ${requestBody.whatsapp_atencion ? `<li><strong>WhatsApp Clientes:</strong> ${requestBody.whatsapp_atencion}</li>` : ''}
                  </ul>
                  <p style="font-size: 12px; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
                    (Si algún dato es incorrecto, por favor responde a este correo).
                  </p>
                </div>
                
                <div style="text-align: center; margin: 30px 0;">
                  <h3>❓ ¿Dudas urgentes?</h3>
                  <a href="https://wa.me/593963410409" style="background-color: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px;">
                    Chatear por WhatsApp
                  </a>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
                
                <div style="text-align: center; color: #666; font-size: 14px;">
                  <p style="font-weight: bold; color: #333;">César Reyes</p>
                  <p style="color: #FF6B00;">Estratega Digital | Objetivo</p>
                  <p><a href="https://www.cesarreyesjaramillo.com" style="color: #666;">www.cesarreyesjaramillo.com</a></p>
                </div>
              </div>
            `
        };
      } else {
        // === DEFAULT TEMPLATE (Menú Objetivo) ===
        mailOptions = {
          from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
          to: email,
          subject: 'Confirmación de Reserva - MenúObjetivo',
          html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
                <h1 style="text-align: center; color: #FF6B00; font-size: 28px; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 2px solid #FF6B00;">
                  MenúObjetivo - César Reyes
                </h1>
                <p>Hola <strong>${nombre}</strong>,</p>
                <p style="font-size: 18px; font-weight: bold; color: #FF6B00; margin: 25px 0;">
                  ¡Gracias por reservar tu cupo!
                </p>
                <p>Acabamos de recibir tu solicitud para la promoción exclusiva de MenúObjetivo.</p>
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
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 15px; margin: 25px 0;">
                  <h3 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">📋 Datos de tu reserva:</h3>
                  <ul style="padding-left: 20px;">
                    <li><strong>Nombre:</strong> ${nombre}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>WhatsApp:</strong> ${telefono}</li>
                    <li><strong>Tipo de restaurante:</strong> ${tipo_restaurante}</li>
                  </ul>
                </div>
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
                <p style="text-align: center; font-style: italic; margin: 25px 0;">
                  Nos vemos pronto, <strong>${nombre.split(' ')[0]}</strong>.
                </p>
                <p style="text-align: center; font-weight: bold; font-size: 18px; color: #FF6B00; margin: 30px 0;">
                  Tu restaurante merece ser encontrado.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <p style="margin: 5px 0; font-weight: bold;">César Reyes</p>
                  <p style="margin: 5px 0; color: #FF6B00;">Fundador | Objetivo</p>
                  <p style="margin: 5px 0;">
                    <a href="https://cesarreyesjaramillo.com" style="color: #FF6B00; text-decoration: none;">www.cesarreyesjaramillo.com</a>
                  </p>
                </div>
                <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;
                          font-size: 12px; color: #94a3b8;">
                  <p style="margin: 5px 0; font-weight: bold; color: #475569;">MenúObjetivo - Desarrollo Web Profesional</p>
                  <p style="margin: 5px 0;">Loja, Ecuador</p>
                  <p style="margin: 5px 0;">WhatsApp: 0963410409</p>
                  <p style="margin: 5px 0;">Email: menuobjetivo@cesarreyesjaramillo.com</p>
                </div>
              </div>
            `
        };
      }

      console.log('Sending email with nodemailer...');
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully!');
      if (info && typeof info === 'object' && 'messageId' in info) {
        console.log('Message ID:', info.messageId);
      }

    } catch (emailError: any) {
      console.error('=== EMAIL ERROR ===');
      console.error('Error type:', emailError.constructor.name);
      console.error('Error message:', emailError.message);
      // Don't fail the request if email fails - data is already saved
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
