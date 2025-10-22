'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('/api/statistics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pagina: pathname }),
        });
      } catch (error) {
        console.error('Error al registrar visita:', error);
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
} 