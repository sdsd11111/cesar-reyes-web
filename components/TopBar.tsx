"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    console.log("Buscando:", searchQuery);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 text-center py-2 text-sm font-bold z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-light-gray text-dark'
          : 'bg-dark text-white'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1 text-center">
          César Reyes Consultor para Pymes
        </div>

        <div className="relative">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-current hover:opacity-80 transition-opacity"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>

          {isSearchOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
              <form onSubmit={handleSearch} className="flex flex-col gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artículos..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Buscar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
