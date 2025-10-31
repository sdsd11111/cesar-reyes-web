import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    // No fallar en certificados inválidos (útil para desarrollo)
    rejectUnauthorized: false
  }
});

export const sendWelcomeEmail = async (to: string, nombre: string, restaurante: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
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
