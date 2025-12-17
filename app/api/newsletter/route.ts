import { NextRequest, NextResponse } from "next/server";
import { supabaseRetoClient } from "@/lib/supabaseRetoClient";

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

    // Guardar el email en Supabase
    const { error } = await supabaseRetoClient
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (error) {
      // Si el error es por duplicado (código 23505 en Postgres/Supabase), lo manejamos gracefuly
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "Este email ya está suscrito" },
          { status: 400 }
        );
      }
      throw error;
    }

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