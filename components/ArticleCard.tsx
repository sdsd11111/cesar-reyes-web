import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  className?: string;
}

const ArticleCard = ({ title, excerpt, imageUrl, slug, className = '' }: ArticleCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
      {/* Halo effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl -z-10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Image with overlay */}
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-5 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
        >
          Seguir leyendo
          <svg 
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
