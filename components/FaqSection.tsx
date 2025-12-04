import { FaqAccordion } from './FaqAccordion';

interface FaqItem {
  q: string;
  a: string;
  cta: string;
}

interface FaqSectionProps {
  h2: string;
  questions: FaqItem[];
}

export function FaqSection({ h2, questions }: FaqSectionProps) {
  // Schema.org FAQPage structured data - visible to LLMs and search engines
  const faqSchema = {
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

  return (
    <>
      {/* Schema.org structured data for LLMs and SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{h2}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* Interactive accordion - client component */}
            <FaqAccordion questions={questions} />

            {/* Fallback content for non-JS browsers and better crawlability */}
            <noscript>
              <div className="space-y-6">
                {questions.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                    <p className="text-gray-800 mb-4 leading-relaxed">{item.a}</p>
                    <span className="text-blue-600 font-medium">{item.cta}</span>
                  </div>
                ))}
              </div>
            </noscript>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqSection;