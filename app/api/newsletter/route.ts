import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "El email es requerido" },
        { status: 400 }
      );
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      );
    }

    // Guardar el email en un archivo JSON
    const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");
    let subscribers = [];

    try {
      const fileContent = await fs.readFile(subscribersPath, "utf-8");
      subscribers = JSON.parse(fileContent);
    } catch (error) {
      // Si el archivo no existe, se creará con el primer suscriptor
    }

    // Verificar si el email ya está suscrito
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { error: "Este email ya está suscrito" },
        { status: 400 }
      );
    }

    // Añadir el nuevo suscriptor
    subscribers.push(email);
    await fs.writeFile(subscribersPath, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({
      message: "¡Gracias por suscribirte a nuestro newsletter!",
    });
  } catch (error) {
    console.error("Error al procesar la suscripción:", error);
    return NextResponse.json(
      { error: "Error al procesar la suscripción" },
      { status: 500 }
    );
  }
} 