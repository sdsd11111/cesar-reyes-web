export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "César Reyes Jaramillo",
        "jobTitle": "Estratega de Negocios",
        "description": "Especialista en estrategia de negocios, análisis de datos y desarrollo web",
        "url": "https://www.cesarreyesjaramillo.com",
        "sameAs": [
            "https://www.linkedin.com/in/cesar-reyes-jaramillo/",
            "https://www.instagram.com/cesarreyesjaramillo/",
        ],
        "knowsAbout": ["Estrategia de Negocios", "Análisis de Datos", "Desarrollo Web", "Posicionamiento SEO"],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
