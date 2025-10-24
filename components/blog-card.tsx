"use client"

import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import { formatCategory } from "@/lib/format-utils"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  image: string
  className?: string
}

export default function BlogCard({ 
  title = "Sin título", 
  excerpt = "", 
  category = "Sin categoría", 
  date = new Date().toISOString(), 
  slug = "#", 
  image = "/placeholder.svg",
  className = ""
}: BlogCardProps) {
  // Formateo de fecha
  const fechaFormateada = (() => {
    try {
      const d = parseISO(date)
      return format(d, "d 'de' MMMM /yy", { locale: es })
    } catch (error) {
      console.error("Error formateando la fecha:", error)
      return "Fecha no disponible"
    }
  })()

  return (
    <article className={`group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl ${className}`}>
      <Link href={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}/${slug}`} className="block h-full">
        <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="inline-flex items-center justify-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
              {formatCategory(category)}
            </span>
          </div>
        </div>
        
        <div className="flex h-full flex-col bg-white p-6">
          <time dateTime={date} className="mb-2 block text-sm text-gray-500">
            {fechaFormateada}
          </time>
          <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 flex-1 text-gray-600">
            {excerpt || "Descripción del artículo. Haz clic para leer más..."}
          </p>
          <div className="inline-flex items-center font-medium text-primary transition-colors duration-200 group-hover:text-primary/80">
            Leer más
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
            <span className="sr-only">Leer artículo: {title}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
