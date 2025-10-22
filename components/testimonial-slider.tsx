import React, { useState, useEffect } from "react"

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const testimonials = [
  {
    img: "/images/testimonios/Patricio_Reyes_Polit.png",
    name: "Patricio Reyes Polit",
    text: "Excelente. Te asesora y permite mejorar tus productos",
    rating: 5
  },
  {
    img: "/images/testimonios/dr_guifo_diaz_ortega.png",
    name: "Dr. Guido Días Ortega",
    text: "Excelente empresa para publicidad, les recomiendo",
    rating: 5
  },
  {
    img: "/images/testimonios/camila-reyes.png",
    name: "Arq. Camila Reyes",
    text: "Servicio recomendadísimo para eficiencia en el tiempo, me sirvió para mis respuestas inmediatas",
    rating: 5
  },
  {
    img: "/images/testimonios/piedra_luna.png",
    name: "Spa Piedra Luna",
    text: "Empresa seria con mucho profesionalismo, el trabajo muy bien realizado, me gustó bastante y sobre todo muy útil para nuestros negocios. Recomendado!",
    rating: 5
  },
  {
    img: "/images/testimonios/viviana_novillo.png",
    name: "TopDent Cuenca",
    text: "Lindo trabajo y su atención siempre amable, recomendados!",
    rating: 5
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full flex flex-col md:flex-row bg-[#18191b] rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500">
        {/* Imagen */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#18191b] p-8">
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="rounded-xl object-cover w-64 h-64 md:w-80 md:h-80 shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] border-4 border-[#232323] bg-[#232323]"
          />
        </div>

        {/* Contenido */}
        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <StarRating rating={testimonials[current].rating} />
          </div>
          <p className="text-gray-300 text-lg md:text-xl mb-6 italic">"{testimonials[current].text}"</p>
          <div className="mt-auto">
            <h3 className="text-2xl font-bold text-white">{testimonials[current].name}</h3>
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-white w-8' : 'bg-gray-500'
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}