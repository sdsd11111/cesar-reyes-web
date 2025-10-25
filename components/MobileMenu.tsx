
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
}

export default function MobileMenu({ categorias, onClose, isBlogArticle = false }: MobileMenuProps) {
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
    <div className={`md:hidden bg-white fixed inset-0 z-50 overflow-y-auto`}>
      {/* Encabezado fijo */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Menú</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Contenido del menú */}
      <div className="container mx-auto px-4 py-4 space-y-2">
        {/* Botón Volver al sitio */}
        <Link 
          href="/" 
          className="block w-full py-3 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-center space-x-2 border border-gray-200"
          onClick={onClose}
        >
          <span>←</span>
          <span>Volver al inicio</span>
        </Link>

        {/* Enlaces principales */}
        <div className="space-y-1 mt-4">
          <Link 
            href="/" 
            className="block py-3 px-4 text-gray-800 hover:bg-gray-50 rounded-lg font-medium border border-gray-100"
            onClick={onClose}
          >
            Inicio
          </Link>
          
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={toggleServicesMenu}
              className="flex items-center justify-between w-full py-3 px-4 text-gray-800 hover:bg-gray-50 font-medium"
            >
              <span>Servicios</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus['servicios'] ? 'rotate-180' : ''}`} />
            </button>

            {expandedMenus['servicios'] && (
              <div className="bg-gray-50 border-t border-gray-100">
                {categorias.map((categoria) => (
                  <div key={categoria.id} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => handleCategoryInteraction(categoria.id, categoria.slug)}
                      className={`flex items-center justify-between w-full py-3 px-6 text-left font-medium transition-colors ${
                        expandedMenus[categoria.id] 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{categoria.titulo}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus[categoria.id] ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedMenus[categoria.id] && (
                      <div className="bg-white pl-6 pr-2 py-2 space-y-1">
                        {categoria.servicios.map((servicio) => (
                          <Link
                            key={servicio.id}
                            href={`/servicios/${categoria.slug}/${servicio.slug}`}
                            className="block py-2.5 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
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

          <Link 
            href="/blog" 
            className="block py-3 px-4 text-gray-800 hover:bg-gray-50 rounded-lg font-medium border border-gray-100"
            onClick={onClose}
          >
            Blog
          </Link>
          
          <Link 
            href="/MenuObjetivo" 
            className="block py-3 px-4 bg-[#FF6B00] text-white font-bold hover:bg-[#E66000] rounded-lg text-center transition-colors" 
            onClick={onClose}
          >
            Menú Objetivo
          </Link>
        </div>
      </div>
    </div>
  );
}
