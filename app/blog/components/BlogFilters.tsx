'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useSearch } from "@/context/SearchContext";
import { useEffect, useState } from 'react';

export default function BlogFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { searchQuery, setSearchQuery } = useSearch();
    const [localSearch, setLocalSearch] = useState(searchParams.get('q') || '');

    // Sync context with URL on mount
    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setSearchQuery(q);
            setLocalSearch(q);
        }
    }, [searchParams, setSearchQuery]);

    const handleSearch = (term: string) => {
        setLocalSearch(term);
        setSearchQuery(term);
        const params = new URLSearchParams(searchParams.toString());
        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }
        router.push(`/blog?${params.toString()}`);
    };

    const handleCategory = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === 'Todas') {
            params.delete('category');
        } else {
            params.set('category', category);
        }
        router.push(`/blog?${params.toString()}`);
    };

    const currentCategory = searchParams.get('category') || 'Todas';

    const categoryMapping: Record<string, string> = {
        'todas': 'Todas',
        'menu-objetivo': 'Menú Objetivo',
        'automatizacion': 'Automatización',
        'diseno-web': 'Diseño Web',
        'marketing-digital': 'Marketing Digital',
        'asesoria': 'Asesoría',
        'analisis-estrategico': 'Análisis Estratégico',
        'desarrollo-web': 'Desarrollo Web',
        'posicionamiento-marca': 'Posicionamiento de Marca'
    };

    const categoriesList = Object.values(categoryMapping);

    return (
        <>
            {/* Barra de búsqueda */}
            <div className="w-full mb-8">
                <div className="relative group max-w-2xl mx-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Buscar artículos por título, contenido o categoría..."
                        className="w-full pl-12 pr-10 py-3 bg-black text-white border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 transition-all duration-200 text-base"
                        value={localSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                        aria-label="Buscar artículos"
                    />
                    {localSearch && (
                        <button
                            type="button"
                            onClick={() => handleSearch('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Limpiar búsqueda"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
            </div>

            {/* Título de la sección */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Todos los artículos</h2>

            {/* Filtros por categoría */}
            <div className="w-full mb-8">
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                    {categoriesList.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${currentCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
