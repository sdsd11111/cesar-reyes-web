"use client"

import Link from "next/link"
import Image from "next/image"
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import { formatCategory } from "@/lib/format-utils"

interface BlogCardProps {
  title: string
  excerpt?: string
  category: string
  date: string
  slug: string
  image?: string
  className?: string
  imageOnly?: boolean
}

export default function BlogCard({ 
  title = "Sin título", 
  excerpt = "", 
  category = "Sin categoría", 
  date = new Date().toISOString(), 
  slug = "#", 
  image = "/images/placeholder-blog.jpg",
  className = "",
  imageOnly = false
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
  
  // Validar y formatear la URL de la imagen
  const getValidImageUrl = (imgUrl: string): string => {
    try {
      // Si la imagen no tiene extensión o es inválida, usar placeholder
      if (!imgUrl || 
          imgUrl === 'undefined' || 
          !/\.(jpg|jpeg|png|webp|avif|gif)$/i.test(imgUrl)) {
        return '/images/placeholder-blog.jpg';
      }
      
      // Si la URL no comienza con / o http, agregar /
      if (!imgUrl.startsWith('/') && !/^https?:\/\//.test(imgUrl)) {
        return `/${imgUrl}`;
      }
      
      return imgUrl;
    } catch (error) {
      console.error('Error procesando imagen:', error);
      return '/images/placeholder-blog.jpg';
    }
  };
  
  const imageUrl = getValidImageUrl(image);

  if (imageOnly) {
    return (
      <div className="relative w-full h-full">
        <Image 
          src={getValidImageUrl(image)}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/images/placeholder-blog.jpg';
          }}
        />
      </div>
    );
  }

  return (
    <article className={`group block overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl bg-white ${className}`}>
      <Link href={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}/${slug}`} className="block h-full">
        <div className="relative h-60 w-full overflow-hidden rounded-t-xl">
          <div className="relative w-full h-full">
            <Image 
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              loading="lazy"
              onError={(e) => {
                // Fallback a placeholder si hay error al cargar la imagen
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder-blog.jpg';
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="inline-flex items-center justify-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
              {formatCategory(category)}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col bg-white p-6 flex-1">
          <div className="flex-1">
            <time dateTime={date} className="mb-2 block text-sm text-gray-500">
              {fechaFormateada}
            </time>
            <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 min-h-[3rem]">
              {title}
            </h3>
            <p className="mb-4 line-clamp-3 text-gray-600 min-h-[4.5rem]">
              {excerpt || "Descripción del artículo. Haz clic para leer más..."}
            </p>
          </div>
          <div className="mt-4 pt-2 border-t border-gray-200">
            <button className="w-full flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Seguir leyendo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-2 h-4 w-4" 
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
              <span className="sr-only">Seguir leyendo: {title}</span>
            </button>
          </div>
        </div>
      </Link>
    </article>
  )
}
