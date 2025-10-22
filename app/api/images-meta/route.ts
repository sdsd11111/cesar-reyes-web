import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const metaPath = path.join(process.cwd(), "public", "uploads", "images-meta.json");
  try {
    const metaRaw = await fs.readFile(metaPath, "utf-8");
    const metaArr = JSON.parse(metaRaw);
    return NextResponse.json(metaArr);
  } catch {
    return NextResponse.json([]);
  }
} 