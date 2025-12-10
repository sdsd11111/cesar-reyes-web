interface ServiceSchemaProps {
    serviceName: string;
    description: string;
    serviceType?: string;
}

export default function ServiceSchema({
    serviceName,
    description,
    serviceType = "ProfessionalService"
}: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceType,
        "name": serviceName,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "César Reyes Jaramillo - Consultoría Digital",
            "url": "https://www.cesarreyesjaramillo.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Ecuador"
        },
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://www.cesarreyesjaramillo.com",
            "servicePhone": "+593963410409",
            "availableLanguage": {
                "@type": "Language",
                "name": "Spanish"
            }
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
