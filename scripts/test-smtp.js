require('dotenv').config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Permite certificados autofirmados
  },
});

async function main() {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "automatizotunegocio@gmail.com",
      subject: "Prueba de newsletter desde cesarreyesjaramillo.com",
      html: `<h1>¡Hola!</h1><p>Este es un correo de prueba para verificar la configuración SMTP de tu web.</p><p>Si ves este mensaje, ¡todo funciona correctamente! 🚀</p>`
    });
    console.log("Correo enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
}

main(); 