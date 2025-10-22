import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendNewsletter(article: any) {
  try {
    // Leer la lista de suscriptores
    const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");
    const subscribersContent = await fs.readFile(subscribersPath, "utf-8");
    const subscribers = JSON.parse(subscribersContent);

    // Crear el contenido del email
    const emailContent = `
      <h1>${article.title}</h1>
      <p>${article.excerpt}</p>
      <p>Lee el artículo completo aquí: <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.category}/${article.slug}">${article.title}</a></p>
    `;

    // Enviar el email a cada suscriptor
    for (const email of subscribers) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: `Nuevo artículo: ${article.title}`,
        html: emailContent,
      });
    }

    console.log(`Newsletter enviado exitosamente a ${subscribers.length} suscriptores`);
  } catch (error) {
    console.error("Error al enviar el newsletter:", error);
    throw error;
  }
}

// Exportar la función para usarla en otros archivos
export { sendNewsletter }; 