import fs from "fs";
import path from "path";
import matter from "gray-matter";

function normalizeFrontmatter(data: any) {
  const result: Record<string, string> = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      result[key] = typeof data[key] === "string" ? data[key] : String(data[key]);
    }
  }
  return result;
}

// Definición de tipo para artículos
export type BlogArticle = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string;
  slug: string;
  category: string;
  [key: string]: any;
};

export const getAllBlogArticles = () => {
  return [
    {
      title: "Cómo la automatización puede transformar tu negocio",
      excerpt: "Descubre las ventajas competitivas que la automatización de procesos puede aportar a tu empresa.",
      category: "Automatización",
      categoryId: "automatizacion-para-tu-empresa",
      date: "15 Abr 2023",
      slug: "como-la-automatizacion-puede-transformar-tu-negocio",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Tendencias de diseño web para 2023",
      excerpt: "Conoce las últimas tendencias en diseño web que deberías implementar en tu sitio este año.",
      category: "Diseño Web",
      categoryId: "diseno-web-para-empresas",
      date: "28 Mar 2023",
      slug: "tendencias-de-diseno-web-para-2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Estrategias de SEO efectivas para pequeñas empresas",
      excerpt: "Aprende cómo implementar estrategias de SEO que funcionen para negocios con presupuestos limitados.",
      category: "SEO",
      categoryId: "seo-y-campanas-de-marketing",
      date: "10 Mar 2023",
      slug: "estrategias-de-seo-efectivas-para-pequenas-empresas",
      image: "/placeholder.svg?height=300&width=500",
    }
  ]
}

// Leer todos los artículos de una categoría
export function getArticlesByCategory(category: string): BlogArticle[] {
  const dir = path.join(process.cwd(), "content", "blog", category);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
  return files.map(filename => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const normalized = normalizeFrontmatter(data);
    return {
      title: normalized.title || "",
      excerpt: normalized.excerpt || "",
      image: normalized.image || "",
      date: normalized.date || "",
      author: normalized.author || "",
      ...normalized,
      content,
      slug: filename.replace(/\.md$/, ""),
      category,
    };
  });
}

// Leer un artículo individual
export function getArticle(category: string, slug: string): BlogArticle | null {
  const filePath = path.join(process.cwd(), "content", "blog", category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const normalized = normalizeFrontmatter(data);
  return {
    title: normalized.title || "",
    excerpt: normalized.excerpt || "",
    image: normalized.image || "",
    date: normalized.date || "",
    author: normalized.author || "",
    ...normalized,
    content,
    slug,
    category,
  };
}

// Leer todos los artículos de todas las categorías
export function getAllArticles() {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  const categories = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
  let all = [];
  for (const category of categories) {
    const dir = path.join(blogDir, category);
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));
    for (const filename of files) {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const normalized = normalizeFrontmatter(data);
      all.push({
        ...normalized,
        content,
        slug: filename.replace(/\.md$/, ""),
        category,
      });
    }
  }
  return all;
} 