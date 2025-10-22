
"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

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
}

export default function MobileMenu({ categorias, onClose }: MobileMenuProps) {
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
    <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 space-y-4">
        <Link href="/" className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded" onClick={onClose}>
          Inicio
        </Link>
        
        <div>
          <button
            onClick={toggleServicesMenu}
            className="flex items-center justify-between w-full py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
          >
            <span>Servicios</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus['servicios'] ? 'rotate-180' : ''}`} />
          </button>

          {expandedMenus['servicios'] && (
            <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4 py-1">
              {categorias.map((categoria) => (
                <div key={categoria.id} className="mb-1">
                  <button
                    onClick={() => handleCategoryInteraction(categoria.id, categoria.slug)}
                    className={`flex items-center justify-between w-full py-2 text-left font-medium rounded-md px-2 transition-colors ${
                      expandedMenus[categoria.id] ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{categoria.titulo}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus[categoria.id] ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedMenus[categoria.id] && (
                    <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3 py-1">
                      {categoria.servicios.map((servicio) => (
                        <Link
                          key={servicio.id}
                          href={`/servicios/${categoria.slug}/${servicio.slug}`}
                          className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 -mx-2 px-2 rounded"
                          onClick={onClose}
                        >
                          {servicio.titulo}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          )}
        </div>

        <Link href="/blog" className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded" onClick={onClose}>
          Blog
        </Link>
        <Link href="/MenuObjetivo" className="block bg-[#FF6B00] text-white font-bold py-2 px-4 rounded hover:bg-[#E66000] transition-colors text-center" onClick={onClose}>
          Menú Objetivo
        </Link>
      </div>
    </div>
  );
}
