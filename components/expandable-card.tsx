"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface ExpandableCardProps {
  title: string
  content: string
  backgroundImage: string
  link?: string
}

export default function ExpandableCard({ title, content, backgroundImage, link = "#" }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Extract a preview of the content (first 100 characters or so)
  const preview = content.substring(0, 100) + (content.length > 100 ? "..." : "")

  // Show preview on mobile, full content on desktop
  return (
    <div className="card relative" style={{ backgroundImage: `url("${backgroundImage}")` }}>
      <div className="card-content">
        <h3>{title}</h3>

        {/* Desktop view - always show full content */}
        <p className="hidden md:block">{content}</p>

        {/* Mobile view - show preview or full content based on state */}
        <div className="md:hidden">
          <p>{isExpanded ? content : preview}</p>

          <button
            onClick={(e) => {
              e.preventDefault()
              setIsExpanded(!isExpanded)
            }}
            className="text-primary flex items-center mt-2"
          >
            {isExpanded ? "Ver menos" : "Seguir leyendo"}
            <ArrowRight className="ml-1 h-4 w-4 inline" />
          </button>
        </div>

        {/* Desktop view - "Seguir leyendo" links to the full article */}
        <a href={link} className="hidden md:flex text-primary items-center">
          Seguir leyendo <ArrowRight className="ml-1 h-4 w-4 inline" />
        </a>
      </div>
    </div>
  )
}
