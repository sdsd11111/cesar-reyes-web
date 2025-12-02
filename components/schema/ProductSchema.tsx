import React from 'react';

const ProductSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MenúObjetivo",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "description": "Plataforma de menú digital para restaurantes en Ecuador. Actualiza tu menú en tiempo real, genera códigos QR y posiciona tus platos en Google.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "24"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ProductSchema;
