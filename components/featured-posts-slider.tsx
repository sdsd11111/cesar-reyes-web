'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { formatCategory } from '@/lib/format-utils';

interface FeaturedPost {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
  date: string;
}

interface FeaturedPostsSliderProps {
  posts: FeaturedPost[];
}

export default function FeaturedPostsSlider({ posts }: FeaturedPostsSliderProps) {
  return (
    <div className="relative w-full py-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true
        }}
        loop={true}
        speed={800}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="featured-slider"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <Link 
              href={`/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}/${post.slug}`} 
              className="block group"
            >
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.image || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-primary/90 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {formatCategory(post.category)}
                    </span>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 text-sm text-gray-300 flex items-center">
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary font-medium group-hover:underline">Leer más</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        /* Estilos para los puntos de paginación */
        .featured-slider .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        
        .featured-slider .swiper-pagination-bullets-dynamic {
          overflow: hidden;
        }
        .featured-slider .swiper-pagination-bullet {
          background: #9CA3AF;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        
        .featured-slider .swiper-pagination-bullet-active {
          background: #3B82F6;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        
        .featured-slider .swiper-pagination-bullet-active-main {
          transform: none !important;
        }
        
        .featured-slider .swiper-pagination-bullet-active-prev,
        .featured-slider .swiper-pagination-bullet-active-next {
          transform: none !important;
        }
      `}</style>
    </div>
  );
}
