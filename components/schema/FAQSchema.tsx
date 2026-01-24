'use client'

import React, { useEffect } from 'react';

interface FaqItem {
    q: string;
    a: string;
}

interface FAQSchemaProps {
    questions: FaqItem[];
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ questions }) => {
    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": questions.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
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
    }, [questions]);

    return null;
};

export default FAQSchema;
