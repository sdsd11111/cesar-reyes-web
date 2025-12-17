import nodemailer from "nodemailer";
import { v4 as uuidv4 } from 'uuid';
import { supabaseRetoAdmin } from "@/lib/supabaseRetoClient";

interface ArticleData {
    title: string;
    excerpt: string;
    category: string;
    slug: string;
    image?: string;
}

export async function sendNewsletterForArticle(article: ArticleData) {
    try {
        const { title, excerpt, category, slug, image } = article;

        // Configurar el transporte de correo
        // Usamos las variables de entorno que ya tienes configuradas en tu .env
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Verificar conexión
        try {
            await transporter.verify();
            console.log('Conexión SMTP exitosa con', process.env.EMAIL_SERVER);
        } catch (verifyError) {
            console.error('Error al verificar conexión SMTP:', verifyError);
            return { success: false, message: 'Error de conexión con el servidor de correos' };
        }

        // Obtener los suscriptores
        let subscribers: string[] = [];

        // Lista de correos manuales para pruebas si no hay base de datos conectada aún
        const manualSubscribers = [
            'automatizotunegocio@gmail.com',
            'cristhopheryeah113@gmail.com',
            'sdxd2677@gmail.com'
        ];

        try {
            // Intentar obtener de Supabase
            const { data, error } = await supabaseRetoAdmin
                .from('newsletter_subscribers')
                .select('email')
                .eq('is_active', true);

            if (error) {
                console.error("Error obteniendo suscriptores:", error);
                throw error;
            }

            if (data && data.length > 0) {
                subscribers = data.map(s => s.email);
            } else {
                console.log('No se encontraron suscriptores en Supabase, usando lista manual de respaldo.');
                subscribers = manualSubscribers;
            }
        } catch (err) {
            console.warn('Error al obtener suscriptores de Supabase:', err);
            console.log('Usando lista manual de respaldo.');
            subscribers = manualSubscribers;
        }

        if (subscribers.length === 0) {
            return { success: false, message: 'No hay suscriptores activos para enviar' };
        }

        console.log(`Enviando newsletter a ${subscribers.length} destinatarios...`);

        // Usar la URL de producción como fallback si la variable de entorno está vacía
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
        const url = `${siteUrl}/blog/${category}/${slug}`;

        // Procesar imagen
        const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : null;

        // Enviar a todos los suscriptores
        let sentCount = 0;
        for (const email of subscribers) {
            try {
                const emailId = uuidv4();
                const trackingPixel = `<img src="${siteUrl}/api/track-email?id=${emailId}&email=${encodeURIComponent(email)}" width="1" height="1" alt="" />`;

                const html = `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                
                ${imageUrl ? `<img src="${imageUrl}" alt="${title}" style="width: 100%; height: auto; max-height: 300px; object-fit: cover; display: block;" />` : ''}
                
                <div style="padding: 40px 30px;">
                    <h2 style="color: #111; margin-top: 0; font-size: 24px;">¡Hola! Tenemos algo nuevo para ti 👋</h2>
                    
                    <h1 style="color: #333; font-size: 28px; margin: 20px 0 10px; line-height: 1.3;">${title}</h1>
                    
                    <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                        ${excerpt}
                    </p>
                    
                    <div style="text-align: center; margin: 35px 0;">
                        <a href="${url}" style="background-color: #000000; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">Leer artículo completo</a>
                    </div>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
                    
                    <p style="font-size: 12px; color: #999; text-align: center;">
                        Has recibido este correo porque eres parte de nuestra comunidad de suscriptores.<br/>
                        <a href="${siteUrl}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #666; text-decoration: underline;">Darte de baja</a> si ya no deseas recibir estos correos.
                    </p>
                </div>
            </div>
             ${trackingPixel}
          </div>
        `;

                await transporter.sendMail({
                    from: process.env.EMAIL_FROM || 'menuobjetivo@cesarreyesjaramillo.com',
                    to: email,
                    subject: `🔥 ${title}`,
                    html,
                });
                sentCount++;
            } catch (err) {
                console.error(`Error enviando a ${email}:`, err);
            }
        }

        return { success: true, count: sentCount, total: subscribers.length };
    } catch (error) {
        console.error("Error general al enviar newsletter:", error);
        return { success: false, error: "Error al procesar el envío" };
    }
}
