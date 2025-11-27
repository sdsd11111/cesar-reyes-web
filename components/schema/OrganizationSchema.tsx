export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "César Reyes - Estratega de Negocios",
        "image": "https://www.cesarreyesjaramillo.com/images/cesar-reyes-perfil.webp",
        "url": "https://www.cesarreyesjaramillo.com",
        "telephone": "+593963410409",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Loja",
            "addressCountry": "EC"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -3.99313,
            "longitude": -79.20422
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
            "https://www.facebook.com/cesarreyesjaramillo"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
