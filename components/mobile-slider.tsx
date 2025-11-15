"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MobileSliderProps {
  children: ReactNode[]
  className?: string
}

export default function MobileSlider({ children, className = "" }: MobileSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = children.length
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  // Automatic sliding (opcional, solo en móvil)
  useEffect(() => {
    if (window.innerWidth > 768) return // Solo en móvil
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  // Soporte para touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > 50) prevSlide()
    else if (deltaX < -50) nextSlide()
    touchStartX.current = null
  }

  return (
    <div className={`relative overflow-x-hidden ${className} pb-8`}>
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 px-2 flex flex-col justify-center items-center h-full"
          >
            <div className="flex flex-col h-full w-full max-w-4xl aspect-square mx-auto bg-transparent rounded-lg shadow-lg p-4 text-center break-words overflow-hidden">
              {child}
            </div>
          </div>
        ))}
      </div>
      {/* Dots de navegación */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full border ${index === currentSlide ? "bg-primary border-primary" : "bg-white/60 border-gray-300"}`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
