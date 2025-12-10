export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "César Reyes Jaramillo - Consultor de Negocios y Estratega Digital",
        "description": "Ingeniero Comercial con 25 años de experiencia ayudando a microempresas en Ecuador a crecer mediante estrategias de negocio basadas en datos, diseño web optimizado y posicionamiento SEO local.",
        "image": "https://www.cesarreyesjaramillo.com/images/cesar-reyes-perfil.webp",
        "url": "https://www.cesarreyesjaramillo.com",
        "telephone": "+593963410409",
        "email": "contacto@cesarreyesjaramillo.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Loja",
            "addressRegion": "Loja",
            "addressCountry": "EC"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -3.99313,
            "longitude": -79.20422
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Loja",
                "containedIn": {
                    "@type": "Country",
                    "name": "Ecuador"
                }
            },
            {
                "@type": "City",
                "name": "Quito",
                "containedIn": {
                    "@type": "Country",
                    "name": "Ecuador"
                }
            },
            {
                "@type": "City",
                "name": "Guayaquil",
                "containedIn": {
                    "@type": "Country",
                    "name": "Ecuador"
                }
            },
            {
                "@type": "City",
                "name": "Cuenca",
                "containedIn": {
                    "@type": "Country",
                    "name": "Ecuador"
                }
            },
            {
                "@type": "Country",
                "name": "Ecuador"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Reingeniería Digital para Turismo",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Motor de Reservas Directas para Hoteles",
                        "description": "Sistema de reservas sin comisiones para hoteles en Ecuador. Deje de pagar 15-20% en comisiones por sus propios clientes y consiga reservas directas.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "César Reyes Jaramillo"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Menú Digital para Restaurantes",
                        "description": "Menú digital interactivo y moderno que aumenta ventas, retención de clientes y elimina dependencia de PDFs estáticos.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "César Reyes Jaramillo"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Consultoría en Reingeniería Digital",
                        "description": "Transformación digital completa para negocios turísticos: hoteles, restaurantes y empresas de servicios en Ecuador.",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "César Reyes Jaramillo"
                        }
                    }
                }
            ]
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.linkedin.com/in/cesar-reyes-jaramillo/",
            "https://www.instagram.com/cesarreyesjaramillo/",
            "https://www.facebook.com/cesarreyesjaramillo",
            "https://www.tiktok.com/@cesarreyesjaramillo"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
