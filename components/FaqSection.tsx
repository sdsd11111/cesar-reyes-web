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
            {/* All FAQ content is in DOM - visible to LLMs via CSS (not hidden attribute) */}
            <FaqAccordion questions={questions} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqSection;