import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const { title, excerpt, category, slug } = await req.json();
    if (!title || !excerpt || !category || !slug) {
      return NextResponse.json({ error: "Faltan datos del artículo" }, { status: 400 });
    }

    // Leer suscriptores
    const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");
    let subscribers: string[] = [];
    try {
      const content = await fs.readFile(subscribersPath, "utf-8");
      subscribers = JSON.parse(content);
    } catch {
      return NextResponse.json({ error: "No hay suscriptores" }, { status: 400 });
    }
    if (!subscribers.length) {
      return NextResponse.json({ error: "No hay suscriptores" }, { status: 400 });
    }

    // Configurar nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${category}/${slug}`;
    
    // Enviar a todos los suscriptores
    for (const email of subscribers) {
      const emailId = uuidv4();
      const trackingPixel = `<img src="${process.env.NEXT_PUBLIC_SITE_URL}/api/track-email?id=${emailId}&email=${encodeURIComponent(email)}" width="1" height="1" alt="" />`;
      
      const html = `
        <h1>${title}</h1>
        <p>${excerpt}</p>
        <p>Lee el artículo completo aquí: <a href="${url}">${title}</a></p>
        ${trackingPixel}
      `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: `Nuevo artículo: ${title}`,
        html,
      });
    }

    return NextResponse.json({ success: true, message: `Newsletter enviado a ${subscribers.length} suscriptores` });
  } catch (error) {
    console.error("Error al enviar newsletter:", error);
    return NextResponse.json({ error: "Error al enviar newsletter" }, { status: 500 });
  }
} 