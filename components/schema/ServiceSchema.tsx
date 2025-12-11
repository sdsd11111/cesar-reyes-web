'use client'

import { useEffect } from 'react';

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
    useEffect(() => {
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

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script)
            }
        }
    }, [serviceName, description, serviceType]);

    return null;
}
