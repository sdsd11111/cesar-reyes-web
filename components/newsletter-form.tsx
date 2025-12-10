"use client"

import type React from "react"
import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!email || !acceptPolicy) {
      setError("Por favor completa todos los campos requeridos.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al procesar la suscripción")
      }

      setMessage(data.message)
      setEmail("")
      setAcceptPolicy(false)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error al procesar la suscripción")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#1a1a1a] p-0">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        {/* Left side - Text content */}
        <div className="text-white flex-shrink-0" style={{marginLeft: '0', paddingLeft: '0'}}>
          <h2 className="text-2xl font-bold mb-2">Suscríbete a mi Newsletter</h2>
          <p className="text-gray-300">Recibe actualizaciones y contenido exclusivo directamente en tu correo</p>
        </div>
        
        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white w-full sm:w-64"
            required
          />
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="policy"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
              className="w-4 h-4"
              required
            />
            <label htmlFor="policy" className="text-sm text-gray-300">
              Acepto la política de privacidad
            </label>
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Suscribirme"}
          </button>
        </form>
      </div>
      
      {message && <p className="mt-4 text-center text-green-400">{message}</p>}
      {error && <p className="mt-4 text-center text-red-400">{error}</p>}
    </div>
  )
}
