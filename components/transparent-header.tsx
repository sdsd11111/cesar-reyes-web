"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TopBar from "./TopBar";
import NavigationHeader from "./NavigationHeader";

// Función de debounce para optimizar el rendimiento
const debounce = <F extends (...args: any[]) => void>(func: F, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Componente principal que combina ambos elementos
interface TransparentHeaderProps {
  isScrolled?: boolean;
  currentPath?: string;
}

export default function TransparentHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Guardar la posición del scroll
  const saveScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 10);
      sessionStorage.setItem(`scrollPos_${pathname}`, scrollPos.toString());
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = debounce(saveScrollPosition, 200);

    // Inicializar el estado de scroll
    setIsScrolled(window.scrollY > 10);

    // Restaurar la posición del scroll
    const savedPosition = sessionStorage.getItem(`scrollPos_${pathname}`);
    if (savedPosition) {
      const timer = setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem(`scrollPos_${pathname}`);
      }, 0);
      return () => clearTimeout(timer);
    }

    // Agregar event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      saveScrollPosition();
    };
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <TopBar />
      <NavigationHeader />
    </header>
  );
}
