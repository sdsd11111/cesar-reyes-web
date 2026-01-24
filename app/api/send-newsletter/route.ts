import { NextRequest, NextResponse } from "next/server";
import { sendNewsletterForArticle } from "@/lib/newsletterService";

export async function POST(req: NextRequest) {
  try {
    const { title, excerpt, category, slug, image } = await req.json();
    if (!title || !excerpt || !category || !slug) {
      return NextResponse.json({ error: "Faltan datos del artículo" }, { status: 400 });
    }

    const result = await sendNewsletterForArticle({ title, excerpt, category, slug, image });

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Error al enviar" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: `Newsletter enviado a ${result.count} de ${result.total} suscriptores`
    });
  } catch (error) {
    console.error("Error al enviar newsletter:", error);
    return NextResponse.json({ error: "Error al enviar newsletter" }, { status: 500 });
  }
}