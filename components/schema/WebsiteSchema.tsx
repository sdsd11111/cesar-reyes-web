export default function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "César Reyes | Estratega de Negocios",
        "url": "https://www.cesarreyesjaramillo.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.cesarreyesjaramillo.com/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
