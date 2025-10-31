
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';

// Definición de tipos para los datos del menú
interface Servicio {
  id: string;
  titulo: string;
  slug: string;
}

interface Categoria {
  id: string;
  titulo: string;
  slug: string;
  servicios: Servicio[];
}

interface MobileMenuProps {
  categorias: Categoria[];
  onClose: () => void; // Función para cerrar el menú desde el padre
  isBlogArticle?: boolean; // Propiedad para estilos del blog
  textColor?: string;
  textShadow?: string;
}

export default function MobileMenu({ 
  categorias, 
  onClose, 
  isBlogArticle = false,
  textColor = 'text-white',
  textShadow = '0 1px 3px rgba(0,0,0,0.7)' 
}: MobileMenuProps) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const router = useRouter();
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Limpia el timer si el componente se desmonta
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleCategoryInteraction = (catId: string, catSlug: string) => {
    if (clickTimeoutRef.current) {
      // Si hay un timer, es un doble clic
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      // Acción de doble clic: navegar y cerrar menú
      router.push(`/servicios/${catSlug}`);
      onClose();
    } else {
      // Si no hay timer, es un posible primer clic
      clickTimeoutRef.current = setTimeout(() => {
        // Acción de un solo clic: abrir/cerrar submenú
        setExpandedMenus(prev => {
          const isAlreadyOpen = !!prev[catId];
          // Lógica para que solo una categoría esté abierta a la vez
          const newState: Record<string, boolean> = { servicios: true };
          if (!isAlreadyOpen) {
            newState[catId] = true;
          }
          return newState;
        });
        clickTimeoutRef.current = null;
      }, 250); // 250ms de espera para un segundo clic
    }
  };

  const toggleServicesMenu = () => {
    setExpandedMenus(prev => ({ ...prev, servicios: !prev.servicios }));
  };

  return (
    <div 
      className="md:hidden bg-white fixed inset-0 z-50 overflow-y-auto overscroll-contain"
      style={{
        // Mejora el desplazamiento en iOS
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Encabezado fijo con sombra sutil */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Menú</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 rounded-full active:bg-gray-100 transition-colors touch-manipulation"
            aria-label="Cerrar menú"
            style={{
              // Asegura que el área táctil sea lo suficientemente grande
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Contenido del menú con padding inferior para evitar el notch */}
      <div className="container mx-auto px-4 py-4 space-y-3 pb-8">
        {/* Botón Volver al inicio con mejor feedback táctil */}
        <Link 
          href="/" 
          className="block w-full py-4 px-4 bg-gray-50 text-gray-700 active:bg-gray-100 rounded-lg font-medium flex items-center justify-center space-x-2 border border-gray-200 transition-colors touch-manipulation"
          onClick={onClose}
          style={{
            minHeight: '48px', // Tamaño mínimo para toques
          }}
        >
          <span>←</span>
          <span>Volver al inicio</span>
        </Link>

        {/* Enlaces principales */}
        <div className="space-y-2 mt-4">
          <Link 
            href="/" 
            className="block py-4 px-4 text-gray-800 active:bg-gray-50 rounded-lg font-medium border border-gray-100 transition-colors touch-manipulation"
            onClick={onClose}
            style={{
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Inicio
          </Link>
          
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={toggleServicesMenu}
              className="flex items-center justify-between w-full py-4 px-4 text-gray-800 active:bg-gray-50 font-medium transition-colors touch-manipulation"
              style={{
                minHeight: '48px',
              }}
              aria-expanded={expandedMenus['servicios']}
              aria-controls="servicios-menu"
            >
              <span>Servicios</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${expandedMenus['servicios'] ? 'rotate-180' : ''}`} 
                aria-hidden="true"
              />
            </button>

            <div 
              id="servicios-menu"
              className={`bg-gray-50 border-t border-gray-100 transition-all duration-200 overflow-hidden ${
                expandedMenus['servicios'] ? 'max-h-[2000px]' : 'max-h-0'
              }`}
            >
              {categorias.map((categoria) => (
                <div key={categoria.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => handleCategoryInteraction(categoria.id, categoria.slug)}
                    className={`flex items-center justify-between w-full py-4 px-6 text-left font-medium transition-colors touch-manipulation ${
                      expandedMenus[categoria.id] 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 active:bg-gray-50'
                    }`}
                    style={{
                      minHeight: '48px',
                    }}
                    aria-expanded={expandedMenus[categoria.id]}
                    aria-controls={`submenu-${categoria.id}`}
                  >
                    <span>{categoria.titulo}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedMenus[categoria.id] ? 'rotate-180' : ''
                      }`} 
                      aria-hidden="true"
                    />
                  </button>

                  <div 
                    id={`submenu-${categoria.id}`}
                    className={`bg-white transition-all duration-200 overflow-hidden ${
                      expandedMenus[categoria.id] 
                        ? 'max-h-[1000px] border-t border-gray-100' 
                        : 'max-h-0'
                    }`}
                  >
                    <div className="pl-6 pr-2 py-2 space-y-1">
                      {categoria.servicios.map((servicio) => (
                        <Link
                          key={servicio.id}
                          href={`/servicios/${categoria.slug}/${servicio.slug}`}
                          className="block py-3 px-2 text-sm text-gray-600 active:text-blue-600 active:bg-blue-50 rounded transition-colors touch-manipulation"
                          onClick={onClose}
                          style={{
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {servicio.titulo}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link 
            href="/blog" 
            className="block py-4 px-4 text-gray-800 active:bg-gray-50 rounded-lg font-medium border border-gray-100 transition-colors touch-manipulation"
            onClick={onClose}
            style={{
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Blog
          </Link>
          
          <Link 
            href="/MenuObjetivo" 
            className="block py-4 px-4 bg-[#FF6B00] text-white font-bold active:bg-[#E66000] rounded-lg text-center transition-colors touch-manipulation" 
            onClick={onClose}
            style={{
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Menú Objetivo
          </Link>
        </div>
      </div>
    </div>
  );
}
