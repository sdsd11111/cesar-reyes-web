import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)
  // Mostrar solo un resumen en móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const shortDesc = description.length > 80 ? description.slice(0, 80) + "..." : description
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-4 p-4 flex flex-col justify-between">
      <div className="flex items-center mb-2">
        <div className="bg-primary/10 p-3 rounded-full mr-3">
          <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} className="text-primary" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2 text-sm">
        {isMobile && !expanded ? shortDesc : description}
      </p>
      {isMobile && description.length > 80 && (
        <button
          className="text-primary underline text-xs mb-2"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Mostrar menos" : "Seguir leyendo"}
        </button>
      )}
      <Link href={link} className="text-primary font-medium hover:underline text-sm mt-auto">
        Conocer más →
      </Link>
    </div>
  )
}
