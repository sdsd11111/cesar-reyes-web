import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

export default function HeroSection({ title, subtitle, description, cta, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      {/* Fondo */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/sobre-mi/portada sobre mi.webp"
          alt="César Reyes Jaramillo"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white py-12 sm:py-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">{title}</h1>
        <p className="text-lg sm:text-2xl md:text-3xl font-medium text-primary-300 mb-4 sm:mb-6">{subtitle}</p>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">{description}</p>
        <Link 
          href={ctaLink}
          className="inline-block border-2 border-white hover:bg-white hover:text-black text-white font-medium px-8 py-3 rounded-full transition-all duration-300 text-base sm:text-lg"
        >
          {cta}
        </Link>
      </div>
      
      {/* Flecha indicadora de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
