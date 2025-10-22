'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Sprout, Droplets, Grip, Activity, Scale, Award, Dumbbell, Coffee, Tv, Car, RollerCoaster } from 'lucide-react';

const logos = [
  { 
    id: 'aroma-montana', 
    name: 'Aroma de Montaña', 
    icon: <Coffee className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'incahd', 
    name: 'IncaHD', 
    icon: <Tv className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'carone', 
    name: 'CarOne', 
    icon: <Car className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'espumas-austro', 
    name: 'Espumas del Austro', 
    icon: <RollerCoaster className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'austroriego', 
    name: 'Austroriego', 
    icon: <Sprout className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'impermeabilisa', 
    name: 'Impermeabilisa', 
    icon: <Droplets className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'metalcaec', 
    name: 'MetalcaEC', 
    icon: <Grip className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'topdentcuenca', 
    name: 'Topdent Cuenca', 
    icon: <Activity className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'notariaoctava', 
    name: 'Notaría Octava', 
    icon: <Scale className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'franksimbana', 
    name: 'Frank Simbaña', 
    icon: <Award className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
  { 
    id: 'energym', 
    name: 'Energym', 
    icon: <Dumbbell className="h-16 w-16 md:h-16 md:w-16 text-black" /> 
  },
];

export function LogoSlider() {
  // Duplicar los logos para crear un efecto de loop infinito más suave
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-8">
      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 3, spaceBetween: 25 },
          640: { slidesPerView: 4, spaceBetween: 25 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 35 },
          1280: { slidesPerView: 6, spaceBetween: 40 },
        }}
        className="w-full"
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide key={`${logo.id}-${index}`} className="!w-auto">
            <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-48 w-36 md:h-48 md:w-40 group">
              <div className="flex-1 flex items-center justify-center mb-2 w-full group-hover:scale-110 transition-transform duration-300">
                {logo.icon}
              </div>
              <p className="text-sm font-medium text-center text-gray-700 mt-2">{logo.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
