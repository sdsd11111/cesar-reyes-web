'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: {
      (action: string, ...args: any[]): any;
      q?: any[];
    };
  }
}

export default function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Código de inicialización de Clarity con tipos seguros
    (function(c: Window, l: Document, a: string, r: string, i: string) {
      const w = c as any;
      w[a] = w[a] || function() {
        (w[a].q = w[a].q || []).push(arguments);
      };
      
      // Crear elemento script con el tipo correcto
      const t = l.createElement('script') as HTMLScriptElement;
      t.async = true;
      t.src = `https://www.clarity.ms/tag/${i}`;
      
      const y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) {
        y.parentNode.insertBefore(t, y);
      }
      
      console.log('✅ Script de Clarity cargado');
    })(window, document, 'clarity', 'script', 'txyt8t6tx4');

    // Verificar que la API esté disponible
    const checkClarity = setInterval(() => {
      if (window.clarity) {
        clearInterval(checkClarity);
        console.log('🔍 Clarity está listo');
        
        // Configuración adicional
        try {
          window.clarity('set', 'projectId', 'txyt8t6tx4');
          console.log('📊 Configuración de Clarity completada');
        } catch (e) {
          console.error('❌ Error en la configuración de Clarity:', e);
        }
      }
    }, 100);
    
    // Limpiar intervalo después de 5 segundos
    const timeoutId = setTimeout(() => {
      clearInterval(checkClarity);
    }, 5000);

    // Limpieza
    return () => {
      clearInterval(checkClarity);
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // No renderiza nada
}
