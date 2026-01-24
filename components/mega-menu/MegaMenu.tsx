import React, { useState, useRef } from "react";
import Link from "next/link";

interface Servicio {
  id: string;
  titulo: string;
  slug: string;
  descripcionCorta: string;
  imagen?: string;
  directPath?: boolean;
}

interface Categoria {
  id: string;
  titulo: string;
  slug: string;
  descripcionCorta: string;
  imagen: string;
  servicios: Servicio[];
}

interface MegaMenuProps {
  categorias: Categoria[];
  isBlogArticle?: boolean;
  textColor?: string;
  textShadow?: string;
  label?: string;
}

export default function MegaMenu({
  categorias = [],
  isBlogArticle = false,
  textColor = 'text-white',
  textShadow = '0 1px 3px rgba(0,0,0,0.7)',
  label = "Servicios"
}: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<Categoria | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const safeCategorias = Array.isArray(categorias) ? categorias : [];

  const handleMouseLeave = (e: React.MouseEvent) => {
    // If relatedTarget is null, it means the mouse left the browser window
    if (!e.relatedTarget) {
      setIsOpen(false);
      setActiveCategory(null);
      return;
    }

    // Check if the related target is a Node and not within our menu
    if (menuRef.current && e.relatedTarget instanceof Node && !menuRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
      setActiveCategory(null);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    // If relatedTarget is null, it means focus moved outside the browser
    if (!e.relatedTarget) {
      setIsOpen(false);
      setActiveCategory(null);
      return;
    }

    // Check if the related target is a Node and not within our menu
    if (menuRef.current && e.relatedTarget instanceof Node && !menuRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
      setActiveCategory(null);
    }
  };

  return (
    <div className="relative" ref={menuRef} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center h-full" onMouseEnter={() => setIsOpen(true)}>
        <button
          type="button"
          onMouseEnter={() => setIsOpen(true)}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
          className={`flex items-center ${textColor} hover:opacity-80 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${textColor === 'text-white' ? 'focus:ring-white' : 'focus:ring-gray-900'}`}
          style={{ textShadow }}
          tabIndex={0}
        >
          {label}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-1/2 top-full z-50 transition-all duration-200"
          style={{ transform: 'translateX(-50%)', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
          }}
        >
          <div
            className="bg-white rounded-xl shadow-2xl overflow-hidden grid border border-gray-200"
            style={{
              gridTemplateColumns: '1fr 1fr 1.5fr',
              width: '90vw',
              maxWidth: '1400px',
              margin: '24px auto',
              padding: '40px 32px',
              gap: '0',
              alignItems: 'stretch',
            }}
          >
            {/* Categorías */}
            <div className="col-span-1 px-6 py-4 border-r border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Categorías</h3>
              <span className="sr-only">Abrir menú de servicios</span>
              <span className="text-black">Servicios</span>
              <div className="space-y-2">
                {safeCategorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeCategory?.id === categoria.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    onMouseEnter={() => setActiveCategory(categoria)}
                    onClick={() => {
                      window.location.href = `/servicios/${categoria.slug}`;
                    }}
                  >
                    {categoria.titulo}
                  </button>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div className="col-span-1 px-6 py-4 border-r border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {activeCategory ? activeCategory.titulo : 'Selecciona una categoría'}
              </h3>
              {activeCategory ? (
                <div className="space-y-2">
                  {activeCategory.servicios.map((servicio) => (
                    <Link
                      key={servicio.id}
                      href={servicio.directPath ? `/servicios/${servicio.slug}` : `/servicios/${activeCategory.slug}/${servicio.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {servicio.titulo}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Selecciona una categoría para ver los servicios</p>
              )}
            </div>

            {/* Vista previa */}
            <div className="col-span-1 flex items-center justify-center bg-gray-50 p-6">
              {activeCategory?.imagen ? (
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img
                    src={activeCategory.imagen}
                    alt={activeCategory.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white text-xl font-semibold">{activeCategory.titulo}</h3>
                      <p className="text-white/80 text-sm mt-1">{activeCategory.descripcionCorta}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <p>Selecciona una categoría para ver más detalles</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
