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
  gridOnDesktop?: boolean;
}

export function CardSlider({ children, className = '', gridOnDesktop = false }: CardSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const sliderContent = (
    <div className={`relative ${!gridOnDesktop ? className : ''}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: false,
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
      {/* Navigation Buttons - Visible on all devices now */}
      <button
        ref={prevRef}
        className="flex absolute left-1 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 md:bg-white shadow-lg items-center justify-center text-[#FF6B00] hover:bg-gray-100 transition-colors"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="flex absolute right-1 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 md:bg-white shadow-lg items-center justify-center text-[#FF6B00] hover:bg-gray-100 transition-colors"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Pagination - Only visible on mobile */}
      <div className="swiper-pagination mt-6 flex justify-center md:hidden" />
    </div>
  );

  if (gridOnDesktop) {
    return (
      <div className={className}>
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
          {children}
        </div>
        {/* Mobile Slider */}
        <div className="md:hidden">
          {sliderContent}
        </div>
      </div>
    );
  }

  return sliderContent;
}
