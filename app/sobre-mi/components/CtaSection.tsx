import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function CtaSection({ 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  secondaryCtaText, 
  secondaryCtaLink 
}: CtaSectionProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">{description}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href={ctaLink}
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
          >
            {ctaText}
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link 
              href={secondaryCtaLink}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
