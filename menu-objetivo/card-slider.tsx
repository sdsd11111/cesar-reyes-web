'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CardSliderProps {
  children: ReactNode[];
  className?: string;
}

export function CardSlider({ children, className = '' }: CardSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: (_, className) => {
            return `<span class="${className} bg-[#FF6B00] opacity-20 w-3 h-3 mx-1 rounded-full inline-block"></span>`;
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="h-auto">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Hidden on mobile */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#FF6B00] hover:bg-gray-100 transition-colors"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-[#FF6B00] hover:bg-gray-100 transition-colors"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Pagination - Only visible on mobile */}
      <div className="swiper-pagination mt-6 flex justify-center md:hidden" />
    </div>
  );
}
