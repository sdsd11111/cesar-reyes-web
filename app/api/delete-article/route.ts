import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(req: NextRequest) {
  const { category, slug } = await req.json();
  if (!category || !slug) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }
  const filePath = path.join(process.cwd(), "content", "blog", category, `${slug}.md`);
  try {
    await fs.unlink(filePath);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "No se pudo eliminar el artículo" }, { status: 500 });
  }
} 