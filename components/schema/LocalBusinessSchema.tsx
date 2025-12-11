'use client'

import { useEffect } from 'react'

const LocalBusinessSchema = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Consultoría Digital",
      "description": "Solución todo en uno para hoteles y restaurantes en Ecuador. Motor de reservas y menú digital con 0% de comisión.",
      "url": "https://www.cesarreyesjaramillo.com",
      "telephone": "+593998521447",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Loja",
        "addressRegion": "Loja",
        "addressCountry": "EC"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-4.0079",
        "longitude": "-79.2153"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "USD",
      "areaServed": [
        "Quito",
        "Guayaquil", 
        "Cuenca",
        "Loja"
      ],
      "serviceType": [
        "Consultoría Digital",
        "Motor de Reservas",
        "Menú Digital",
        "SEO para Hoteles",
        "SEO para Restaurantes"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios para Hoteles y Restaurantes",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Motor de Reservas para Hoteles",
              "description": "Sistema de reservas directas sin comisiones para hoteles en Ecuador"
            },
            "price": "Consultar",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Menú Digital para Restaurantes",
              "description": "Menú digital interactivo para restaurantes con sistema de pedidos"
            },
            "price": "Consultar",
            "priceCurrency": "USD"
          }
        ]
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(localBusinessSchema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

export default LocalBusinessSchema
