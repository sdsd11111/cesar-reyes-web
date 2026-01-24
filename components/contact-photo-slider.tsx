import React, { useState, useEffect } from "react"

const photos = [
  { src: "/images/bn.webp", alt: "César Reyes BN" },
  { src: "/images/sentado.webp", alt: "César Reyes sentado" },
  { src: "/images/reloj.webp", alt: "César Reyes reloj" },
]

interface ContactPhotoSliderProps {
  large?: boolean
}

export default function ContactPhotoSlider({ large = false }: ContactPhotoSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      <div className={`rounded-xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center ${large ? 'w-96 h-96 md:w-[28rem] md:h-[28rem]' : 'w-64 h-64 md:w-80 md:h-80'}`}>
        <img
          src={photos[current].src}
          alt={photos[current].alt}
          className="object-cover w-full h-full aspect-square"
        />
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 w-2.5 rounded-full border border-gray-400 transition-all duration-300 ${idx === current ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Ver foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 