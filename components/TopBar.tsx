"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useSearch } from "@/context/SearchContext";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery, clearSearch } = useSearch();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery && searchQuery.trim()) {
      // Redirigir a la página del blog con el término de búsqueda
      router.push(`/blog?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // Si no hay término de búsqueda, ir al blog sin filtros
      router.push('/blog');
    }
    setIsSearchOpen(false);
  };

  // Cerrar el panel de búsqueda al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isSearchOpen && !target.closest('#search-panel') && !target.closest('button[aria-label="Buscar"]')) {
        // No limpiar la búsqueda al cerrar el panel
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Manejar la tecla Escape para cerrar el panel de búsqueda
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        // No limpiar la búsqueda al presionar Escape
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSearchOpen]);

  return (
    <div>
      <div
        className={`fixed left-0 right-0 text-center py-2 text-sm font-bold transition-all duration-300 ${
          isScrolled
            ? 'bg-light-gray text-dark shadow-md'
            : 'bg-dark text-white'
        } sm:top-0 sm:bottom-auto bottom-0`}
        style={{
          willChange: 'transform, background-color',
          height: 'var(--top-bar-height, 48px)',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 40,
        }}
      >
        <div className="container mx-auto flex items-center justify-center px-4 h-full relative">
          {/* Título centrado */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className="hidden sm:inline">César Reyes Consultor para Pymes</span>
              <span className="sm:hidden">Consultas para Pymes</span>
            </div>
          </div>
          
          {/* Botón de búsqueda */}
          <div className="absolute right-4">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-current hover:opacity-80 transition-opacity p-2 -mr-2"
                aria-label="Buscar"
                aria-expanded={isSearchOpen}
                aria-controls="search-panel"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Search size={20} aria-hidden="true" />
              </button>

              {/* Panel de búsqueda */}
              {isSearchOpen && (
                <div 
                  id="search-panel"
                  role="region"
                  aria-label="Panel de búsqueda"
                  className="fixed inset-0 bg-white z-50 transition-all duration-200 transform md:absolute md:inset-auto md:right-0 md:mt-2 md:w-[90vw] md:max-w-sm md:rounded-lg md:shadow-xl p-4"
                  style={{
                    paddingTop: 'calc(var(--top-bar-height, 48px) + 1rem)',
                    paddingBottom: 'env(safe-area-inset-bottom, 1rem)',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    willChange: 'opacity, transform',
                    overflowY: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    zIndex: 1000,
                  }}
                >
                  <div className="max-w-2xl mx-auto w-full h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4 p-4 border-b border-gray-200">
                      <h2 className="text-xl font-bold text-gray-900">Buscar</h2>
                      <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="p-2 -mr-2 text-gray-500 hover:text-gray-700"
                        aria-label="Cerrar búsqueda"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="p-4 flex-1">
                      <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery || ''}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSearch(e);
                              }
                            }}
                            placeholder="Buscar artículos por título o extracto..."
                            className="w-full px-4 py-2 pl-10 pr-12 bg-white border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            autoFocus
                            aria-label="Buscar artículos"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => {
                                setSearchQuery('');
                                const input = document.querySelector('input[aria-label="Buscar artículos"]') as HTMLInputElement;
                                if (input) input.focus();
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                              aria-label="Limpiar búsqueda"
                            >
                              <X size={18} />
                            </button>
                          )}
                        </div>
                        
                        <button
                          type="submit"
                          className="md:hidden w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                        >
                          Buscar
                        </button>
                      </form>
                      
                      {searchQuery && (
                        <div className="mt-4 text-sm text-gray-500">
                          Buscando: <span className="font-medium">{searchQuery}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
