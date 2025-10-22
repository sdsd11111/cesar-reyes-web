'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Verificar si hay un cambio en la coincidencia
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      
      // Función para manejar cambios en la coincidencia
      const listener = () => setMatches(media.matches);
      
      // Agregar el listener
      media.addEventListener('change', listener);
      
      // Limpiar el listener al desmontar
      return () => media.removeEventListener('change', listener);
    }
  }, [matches, query]);

  return matches;
}
