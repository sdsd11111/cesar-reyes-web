import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configura el transporte de correo
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
    const { to, nombre, tipoArtesania, whatsapp, tipoPersonalizado } = await request.json();

    // Validaciones básicas
    if (!to || !nombre || !tipoArtesania || !whatsapp) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar el correo
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
      to,
      subject: `Confirmación de Registro - Artes Vivas Loja 2025`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
          <!-- Título -->
          <h1 style="text-align: center; color: #1a365d; font-size: 28px; margin-bottom: 25px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
            César Reyes - Objetivo
          </h1>
          
          <!-- Saludo personalizado -->
          <p>Hola <strong>${nombre}</strong>,</p>
          
          <p>Acabamos de recibir tu solicitud para la promoción exclusiva de Artes Vivas 2025.</p>
          
          <p style="text-align: center; font-size: 18px; font-weight: bold; color: #1a365d; margin: 25px 0;">
            🎯 RECUERDA la promoción es sólo para 20 participantes.
          </p>
          
          <p>Ahora viene lo importante:</p>
          
          <!-- Sección de llamada -->
          <div style="border-left: 4px solid #3b82f6; padding-left: 15px; margin: 25px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">📞 TE LLAMAREMOS EN LAS PRÓXIMAS 24 HORAS</h3>
            
            <p>¿Por qué? Porque no eres un número de pedido. Eres una persona con un negocio real.</p>
            
            <p>Vamos a:</p>
            <ul style="padding-left: 20px;">
              <li>Confirmar que entendiste TODO lo que incluye</li>
              <li>Resolver cualquier duda que tengas</li>
              <li>Explicarte el proceso paso a paso</li>
              <li>Darte las instrucciones claras de pago</li>
            </ul>
          </div>
          
          <!-- Sección de preparación -->
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 15px; margin: 25px 0;">
            <h3 style="color: #1e40af; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">⏱️ MIENTRAS TANTO, PREPARA ESTO:</h3>
            
            <p>Para que tu entrega sea rápida una vez que pagues, ten listo:</p>
            
            <ul style="padding-left: 20px;">
              <li><strong>Fotos de tus productos</strong><br>
                <span style="color: #64748b; font-size: 14px;">(Las del celular sirven, no necesitan ser profesionales)</span></li>
              
              <li><strong>Descripción corta de tu negocio</strong><br>
                <span style="color: #64748b; font-size: 14px;">(Qué vendes, qué te hace diferente, dónde estás)</span></li>
              
              <li><strong>3 opciones de nombre para tu dominio</strong><br>
                <span style="color: #64748b; font-size: 14px;">Ejemplo: www.tuartesania.com<br>
                (Por si la primera opción ya está ocupada)</span></li>
              
              <li><strong>Tu número de WhatsApp para ventas</strong><br>
                <span style="color: #64748b; font-size: 14px;">(El que usas actualmente para tu negocio)</span></li>
            </ul>
          </div>
          
          <!-- Sección de beneficios -->
          <div style="background-color: #f0fdf4; border-radius: 8px; padding: 15px; margin: 25px 0;">
            <h3 style="color: #166534; margin-top: 0; border-bottom: 1px solid #bbf7d0; padding-bottom: 10px;">📋 RECAPITULEMOS LO QUE RECIBIRÁS:</h3>
            
            <ul style="padding-left: 20px;">
              <li>✅ Sitio web profesional personalizado (3 secciones)</li>
              <li>✅ Dominio .com por 1 año (Ejemplo: www.tunegocio.com)</li>
              <li>✅ Hosting premium incluido (tu página carga en menos de 2 seg)</li>
              <li>✅ Configuración SEO (para aparecer en Google)</li>
              <li>✅ Correo corporativo (contacto@tunegocio.com)</li>
              <li>✅ Botón WhatsApp directo para ventas</li>
              <li>✅ 3 meses de soporte técnico GRATIS</li>
              <li>✅ Entrega en máximo 6 días (según tu posición)</li>
            </ul>
            
            <p style="text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0 10px;">
              INVERSIÓN: <span style="color: #166534;">$150</span> (Pago único)<br>
              <span style="font-size: 14px; color: #64748b; font-weight: normal;">Precio regular: <s>$250</s></span>
            </p>
          </div>
          
          <!-- Sección de contacto -->
          <div style="text-align: center; margin: 30px 0;">
            <p style="font-weight: bold; margin-bottom: 15px;">❓ ¿TIENES DUDAS ANTES DE LA LLAMADA?</p>
            
            <p>Escríbeme directo por WhatsApp:</p>
            <a href="https://wa.me/593963410409?text=Hola,%20quiero%20participar%20en%20la%20promo%20por%20las%20artes%20vivas" 
               style="background-color: #25D366; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;
                      font-size: 16px; margin: 10px 0 20px;">
              📱 593 96 341 0409
            </a>
          </div>
          
          <!-- Despedida -->
          <p style="text-align: center; font-style: italic; margin: 25px 0;">
            Nos hablamos pronto, <strong>${nombre.split(' ')[0]}</strong>.
          </p>
          
          <p style="text-align: center; font-weight: bold; font-size: 18px; color: #1e40af; margin: 30px 0;">
            Tu negocio merece ser encontrado.
          </p>
          
          <!-- Firma -->
          <div style="text-align: center; margin: 30px 0;">
            <p style="margin: 5px 0; font-weight: bold;">César Reyes</p>
            <p style="margin: 5px 0; color: #3b82f6;">Fundador | Objetivo</p>
            <p style="margin: 5px 0;">
              <a href="https://cesarreyesjaramillo.com" style="color: #3b82f6; text-decoration: none;">www.cesarreyesjaramillo.com</a>
            </p>
          </div>
          
          <!-- PS -->
          <div style="font-size: 14px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 25px;">
            <p><strong>PD:</strong> Si por alguna razón NO quieres seguir adelante, avísame YA para liberar tu cupo. Hay más artesanos esperando.</p>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;
                    font-size: 12px; color: #94a3b8;">
            <p style="margin: 5px 0; font-weight: bold; color: #475569;">Objetivo - Desarrollo Web Profesional</p>
            <p style="margin: 5px 0;">Loja, Ecuador | Fundado en 2020</p>
            <p style="margin: 5px 0;">WhatsApp: 0963410409</p>
            <p style="margin: 5px 0;">Email: contacto@objetivo.com</p>
          </div>
        </div>
      `,
    });

    console.log('Correo enviado:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
