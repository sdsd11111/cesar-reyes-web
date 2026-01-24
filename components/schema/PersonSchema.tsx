export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "César Reyes Jaramillo",
        "jobTitle": "Estratega de Negocios",
        "description": "Estratega de negocios y posicionamiento web con más de 24 años de experiencia ayudando a emprendedores y empresarios a hacer crecer sus negocios de manera sostenible.",
        "url": "https://www.cesarreyesjaramillo.com",
        "image": "https://www.cesarreyesjaramillo.com/images/cesar-reyes-perfil.webp",
        "sameAs": [
            "https://www.linkedin.com/in/cesar-reyes-jaramillo/",
            "https://www.instagram.com/cesarreyesjaramillo/",
            "https://www.facebook.com/cesarreyesjaramillo",
            "https://www.youtube.com/@cesarreyesjaramillo"
        ],
        "knowsAbout": [
            "Estrategia de Negocios",
            "Análisis de Datos",
            "Desarrollo Web",
            "Posicionamiento SEO",
            "Marketing Digital",
            "Automatización de Procesos"
        ],
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidad Nacional de Loja"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "Objetivo"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Loja",
            "addressCountry": "EC"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
