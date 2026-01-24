'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type SearchContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  // Sincronizar con la URL cuando se usa el botón de atrás/adelante
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
  }, [pathname]);

  // Actualizar la URL cuando cambia la búsqueda
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    
    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [searchQuery, pathname]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch debe usarse dentro de un SearchProvider');
  }
  return context;
}
