import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/utils-node";

export async function GET() {
  const articles = getAllArticles();
  return NextResponse.json(articles);
} 