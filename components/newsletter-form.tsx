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
    <div className="text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Suscríbete a mi Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
              className="mr-2"
              required
            />
            <span>Acepto la política de privacidad</span>
          </label>
        </div>

        <button type="submit" className="btn w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Suscribirme"}
        </button>

        {message && <p className="mt-4 text-center text-green-400">{message}</p>}
        {error && <p className="mt-4 text-center text-red-400">{error}</p>}
      </form>
    </div>
  )
}
