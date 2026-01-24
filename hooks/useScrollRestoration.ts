'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useCallback } from 'react';

// Función de debounce para optimizar el rendimiento
const debounce = <F extends (...args: any[]) => void>(func: F, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useScrollRestoration = () => {
  const pathname = usePathname();

  // Guardar la posición del scroll
  const saveScrollPosition = useCallback(() => {
    if (typeof window !== 'undefined') {
      const scrollPos = window.scrollY;
      sessionStorage.setItem(`scrollPos_${pathname}`, scrollPos.toString());
    }
  }, [pathname]);

  // Función para manejar el evento de scroll con debounce
  const handleScroll = useCallback(
    debounce(() => {
      saveScrollPosition();
    }, 200),
    [saveScrollPosition]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Restaurar la posición del scroll
    const savedPosition = sessionStorage.getItem(`scrollPos_${pathname}`);
    if (savedPosition) {
      // Usar setTimeout para asegurar que el DOM esté completamente cargado
      const timer = setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
        // Eliminar la posición guardada después de usarla
        sessionStorage.removeItem(`scrollPos_${pathname}`);
      }, 0);
      return () => clearTimeout(timer);
    }

    // Agregar el event listener para guardar la posición
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Guardar la posición final antes de desmontar
      saveScrollPosition();
    };
  }, [pathname, handleScroll, saveScrollPosition]);

  return null;
};

export default useScrollRestoration;
