'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScrollRestoration = () => {
  const pathname = usePathname();

  // Guardar la posición del scroll
  const saveScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const scrollPos = window.scrollY;
      sessionStorage.setItem(`scrollPos_${pathname}`, scrollPos.toString());
    }
  };

  // Función de debounce
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = debounce(saveScrollPosition, 200);

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      saveScrollPosition();
    };
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
