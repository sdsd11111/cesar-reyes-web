import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    // No fallar en certificados inválidos
    rejectUnauthorized: false
  },
  debug: true, // Habilitar depuración
  logger: true  // Registrar actividad
});

export const sendWelcomeEmail = async (to: string, nombre: string, restaurante: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
      to: to,
      subject: `${restaurante}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="text-align: center; color: #1a365d; font-size: 24px; margin-bottom: 30px;">${restaurante.toUpperCase()}</h1>
          
          <div style="text-align: left; margin-bottom: 30px;">
            <h2>Hola <strong>${nombre}</strong>, te damos la bienvenida al Reto de 7 Días para Impulsar tu Restaurante.</h2>
          </div>
          
          <p>Escríbenos a nuestro número de WhatsApp para recibir las tareas diarias:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/593963425323?text=Hola%2C%20vengo%20de%20su%20landing%20page%20quiero%20participar%20en%20el%20Reto%20de%20los%207%20dias." 
               style="background-color: #25D366; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;
                      font-size: 16px;">
              📱 593 96 342 5323
            </a>
          </div>
          
          <p>En los próximos 7 días recibirás:</p>
          <ul style="margin-top: 10px; padding-left: 20px; line-height: 1.6;">
            <li style="margin-bottom: 10px;">A las 9 am la pregunta del día, misma que contiene información relevante acerca de nuestros productos.</li>
            <li style="margin-bottom: 10px;">Las respuestas podrán ser investigadas con palabras clave según la pregunta.</li>
            <li style="margin-bottom: 10px;">Asegúrate de contestar correctamente para que te lleves tu 50% de descuento en la plataforma digital.</li>
          </ul>
          
          <p style="font-weight: bold; margin-top: 30px;">¡Prepárate para transformar tu negocio!</p>
          
          <p>Saludos,<br><strong>César Reyes</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #777; text-align: center;">
            Si no te has registrado en nuestro reto, por favor ignora este correo.
          </p>
        </div>
      `,
    });

    console.log('Mensaje enviado: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return { success: false, error };
  }
};

export const sendArtesVivasEmail = async (to: string, nombre: string, tipoArtesania: string, whatsapp: string, tipoPersonalizado?: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
      to: to,
      subject: `Confirmación de Registro - Artes Vivas Loja 2025`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://cesarreyesjaramillo.com/images/logo-cesar-reyes.png" alt="César Reyes - Objetivo" style="max-width: 200px; height: auto;" />
          </div>
          
          <h1 style="text-align: center; color: #1a365d; font-size: 24px; margin-bottom: 30px;">¡Gracias por registrarte en Artes Vivas Loja 2025!</h1>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 25px;">
            <h2 style="color: #1e40af; margin-top: 0;">Hola ${nombre},</h2>
            <p>Hemos recibido tu registro para el programa de páginas web para artesanos del Festival Artes Vivas Loja 2025.</p>
          </div>
          
          <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
            <h3 style="color: #0369a1; margin-top: 0; border-bottom: 1px solid #bae6fd; padding-bottom: 10px;">Detalles de tu registro:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo electrónico:</strong> ${to}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p><strong>Tipo de artesanía:</strong> ${tipoArtesania}</p>
            ${tipoPersonalizado ? `<p><strong>Especificación:</strong> ${tipoPersonalizado}</p>` : ''}
          </div>
          
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
            <h3 style="color: #166534; margin-top: 0;">¿Qué sigue?</h3>
            <p>Nuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas para continuar con el proceso de creación de tu página web.</p>
            <p>Mientras tanto, si tienes alguna pregunta, no dudes en contactarnos respondiendo a este correo o escribiéndonos a:</p>
            <p style="text-align: center; margin: 20px 0;">
              <a href="mailto:info@cesarreyesjaramillo.com" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                info@cesarreyesjaramillo.com
              </a>
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p>También puedes contactarnos por WhatsApp:</p>
            <a href="https://wa.me/593963425323" 
               style="background-color: #25D366; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;
                      font-size: 16px; margin-top: 10px;">
              📱 593 96 342 5323
            </a>
          </div>
          
          <p style="text-align: center; font-size: 14px; color: #6b7280; margin-top: 30px;">
            Este es un correo automático, por favor no respondas directamente a este mensaje.
          </p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;
                    font-size: 12px; color: #9ca3af;">
            <p>© ${new Date().getFullYear()} César Reyes - Objetivo. Todos los derechos reservados.</p>
            <p style="margin-top: 5px;">
              <a href="https://cesarreyesjaramillo.com" style="color: #3b82f6; text-decoration: none;">Visita nuestro sitio web</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log('Mensaje de Artes Vivas enviado: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo de Artes Vivas:', error);
    return { success: false, error };
  }
};
