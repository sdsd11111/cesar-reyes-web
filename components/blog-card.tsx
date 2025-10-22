import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  image: string
}

export default function BlogCard({ title = "Sin título", excerpt = "", category = "", date = "", slug = "", image = "/placeholder.svg" }: Partial<BlogCardProps> & { category?: string, slug?: string }) {
  // Formateo de fecha
  let fechaFormateada = "";
  if (date) {
    try {
      const d = new Date(date);
      if (!isNaN(d.getTime())) {
        fechaFormateada = format(d, "d 'de' MMMM /yy", { locale: es });
      } else {
        fechaFormateada = date;
      }
    } catch {
      fechaFormateada = date;
    }
  }
  // Construcción de URL
  const url = category && slug ? `/blog/${category}/${slug}` : "/blog";
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs text-white bg-primary px-2 py-1 rounded-full">{category}</span>
          <span className="text-xs text-gray-500 ml-2">{fechaFormateada}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href={url} className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
          Leer más →
        </a>
      </div>
    </div>
  )
}
