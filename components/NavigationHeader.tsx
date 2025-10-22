"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/mega-menu/MegaMenu";
import MobileMenu from "./MobileMenu";
import serviciosData from "@/data/servicios.json";

const categorias = serviciosData.categorias;

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-transparent fixed top-8 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-white">César Reyes</span>
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {pathname !== '/' && (
              <Link href="/" className="font-medium text-white hover:text-gray-200">
                Inicio
              </Link>
            )}
            <MegaMenu categorias={categorias} />
            <Link href="/blog" className="font-medium text-white hover:text-gray-200">
              Blog
            </Link>
            <Link href="/MenuObjetivo" className="bg-[#FF6B00] text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#E66000] transition-colors">
              Menú Objetivo
            </Link>
          </nav>
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Renderiza el nuevo componente de menú móvil */}
      {isMenuOpen && <MobileMenu categorias={categorias} onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
