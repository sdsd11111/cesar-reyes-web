'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Check, ArrowRight, ChevronRight, ChevronDown, CalendarDays } from 'lucide-react';

export default function TraficoTibioCaliente() {
  const [activeTab, setActiveTab] = useState('google-maps');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({ 0: false, 1: false, 2: false });
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  
  // Ensure Google Maps tab is always shown by default on mount
  useEffect(() => {
    setActiveTab('google-maps');
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (error) {
          console.error('Error al hacer scroll:', error);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={`min-h-screen bg-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
          <img 
            src="/images/hero-bg.jpg" 
            alt="Fondo hero" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9Ijk2MCIgdmlld0JveD0iMCAwIDE2MDAgOTYwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5NjAiIGZpbGw9IiNmNGY0ZjQiLz48cGF0aCBkPSJNLTQwLTQwaDE2ODBjMCAwLTQwMCAyNjYuMzItNDAwIDUwMHM0MDAgNTAwIDQwMCA1MDBILTQwVjQ2MCIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg==';
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tráfico Tibio a Clientes Calientes
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Convierte visitantes en clientes con nuestra estrategia de marketing de conversión probada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-6 rounded-full shadow-lg transform transition-all hover:scale-105"
                size="lg"
              >
                <Link href="#contacto" className="flex items-center justify-center">
                  Quiero más clientes <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg font-bold px-8 py-6 rounded-full backdrop-blur-sm hover:backdrop-blur transition-all hover:scale-105"
                size="lg"
              >
                <Link href="#como-funciona" className="flex items-center justify-center">
                  Cómo funciona <ChevronDown className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aquí puedes agregar más secciones según sea necesario */}
      
      {/* Sección de contacto */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para convertir más visitantes en clientes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a aumentar tus conversiones.
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-bold px-8 py-6 rounded-full shadow-lg transform transition-all hover:scale-105"
            size="lg"
          >
            <Link href="/contacto" className="flex items-center justify-center mx-auto w-full sm:w-auto">
              Solicitar información <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
