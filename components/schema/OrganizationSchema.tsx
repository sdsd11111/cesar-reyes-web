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
        "areaServed": {
            "@type": "Country",
            "name": "Ecuador"
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
