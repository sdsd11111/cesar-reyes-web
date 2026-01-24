"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Props para el componente NavigationHeader
interface NavigationHeaderProps {
  currentPath?: string;
}

// Hook para detectar el contraste de color
export const useContrastColor = () => {
  const [textColor, setTextColor] = useState('text-white');
  const [textShadow, setTextShadow] = useState('0 1px 3px rgba(0,0,0,0.7)');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const checkContrast = () => {
      if (!headerRef.current) return;

      // Obtener el elemento debajo del header
      const headerRect = headerRef.current.getBoundingClientRect();
      const elementBelow = document.elementFromPoint(
        window.innerWidth / 2,
        headerRect.bottom + 10
      ) as HTMLElement;

      if (!elementBelow) return;

      // Obtener el color de fondo del elemento
      const computedStyle = window.getComputedStyle(elementBelow);
      let bgColor = computedStyle.backgroundColor;

      // Si el fondo es transparente, buscar el primer padre no transparente
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        let parent = elementBelow.parentElement;
        while (parent && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') && parent !== document.body) {
          const parentStyle = window.getComputedStyle(parent);
          bgColor = parentStyle.backgroundColor;
          parent = parent.parentElement;
        }
      }

      // Convertir el color a RGB
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        // Calcular el brillo (fórmula de luminosidad relativa)
        const brightness = (parseInt(rgb[0]) * 299 +
          parseInt(rgb[1]) * 587 +
          parseInt(rgb[2]) * 114) / 1000;

        // Determinar el color del texto basado en el brillo del fondo
        if (brightness > 180) {
          setTextColor('text-gray-900');
          setTextShadow('0 1px 3px rgba(255,255,255,0.7)');
        } else if (brightness > 100) {
          setTextColor('text-gray-800');
          setTextShadow('0 1px 3px rgba(0,0,0,0.3)');
        } else {
          setTextColor('text-white');
          setTextShadow('0 1px 3px rgba(0,0,0,0.7)');
        }
      }
    };

    // Verificar el contraste inicial
    checkContrast();

    // Verificar el contraste al hacer scroll
    const handleScroll = () => {
      if (window.scrollY % 50 === 0) { // Verificar cada 50px para mejor rendimiento
        checkContrast();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { textColor, textShadow, headerRef };
};
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MegaMenu from "@/components/mega-menu/MegaMenu";
import MobileMenu from "./MobileMenu";
import serviciosData from "@/data/servicios.json";

const categorias = serviciosData.categorias;


export default function NavigationHeader({ currentPath }: NavigationHeaderProps) {
  const pathname = usePathname();
  const actualPath = currentPath || pathname || '';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { textColor, textShadow, headerRef } = useContrastColor();

  // Usar la ruta actual para resaltar el enlace activo
  const isActive = (path: string) => {
    return actualPath === path ||
      (path !== '/' && actualPath.startsWith(path));
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isDesktop = window.innerWidth >= 768; // md breakpoint de Tailwind

      if (isDesktop) {
        // Comportamiento más drástico en escritorio
        if (currentScrollY > 100) { // Solo empieza a ocultar después de cierto scroll
          setIsVisible(currentScrollY < lastScrollY);
        } else {
          setIsVisible(true);
        }
      } else {
        // Comportamiento original en móvil
        setIsVisible(currentScrollY <= 100 || currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Check if we're on a blog page or article
  const isBlogPage = pathname?.startsWith('/blog') || pathname === '/blog';

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } top-0 md:top-[var(--top-bar-height,48px)]`}
      style={{
        // Asegurar que esté por encima de otros elementos pero por debajo del TopBar
        zIndex: 30, // Menor que el z-index del TopBar (40)
        // Mejorar rendimiento
        willChange: 'transform, color',
        // Fondo transparente
        backgroundColor: 'transparent',
        // Color del texto dinámico
        color: textColor === 'text-white' ? 'white' : '#1a1a1a',
        // Asegurar que el header tenga el ancho completo
        width: '100%',
        // Asegurar que no tenga márgenes ni padding que afecten el posicionamiento
        margin: 0,
        padding: 0,
        // Sombra de texto para mejor legibilidad
        textShadow: textShadow,
      }}
    >
      <div className="container py-3 md:py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl md:text-2xl font-bold ml-4 md:ml-0 ${textColor}`}
          style={{
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            textShadow: textShadow,
            transition: 'color 0.3s ease, text-shadow 0.3s ease'
          }}
        >
          César Reyes
        </Link>

        {/* Navegación de escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              Inicio
            </Link>
            <Link
              href="/menu-digital"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              Menú Digital
            </Link>
            <Link
              href="/motor-reservas-hotel"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              Motor de Reservas
            </Link>
            <Link
              href="/carnavales-2026"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              Promo Carnavales 2026
            </Link>
            <Link
              href="/blog"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              Blog
            </Link>
            <MegaMenu
              categorias={categorias.filter(cat => ["cat1", "cat2", "cat3"].includes(cat.id))}
              isBlogArticle={isBlogPage}
              textColor={textColor}
              textShadow={textShadow}
              label="Servicios"
            />
            <Link
              href="#"
              className={`font-medium px-3 py-2 rounded-md hover:opacity-80 transition-opacity ${textColor}`}
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                textShadow: textShadow,
              }}
            >
              + Páginas
            </Link>
          </nav>
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            className="p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isMenuOpen ? (
              <X size={24} className={textColor} aria-hidden="true" style={{ textShadow }} />
            ) : (
              <Menu size={24} className={textColor} aria-hidden="true" style={{ textShadow }} />
            )}
          </button>
        </div>
      </div>

      {/* Renderiza el nuevo componente de menú móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          top: 'var(--top-bar-height, 48px)', // Justo debajo del header
          height: 'calc(100vh - var(--top-bar-height, 48px) - 60px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          // Ocultar para lectores de pantalla cuando está cerrado
          visibility: isMenuOpen ? 'visible' : 'hidden',
        }}
      >
        <MobileMenu
          categorias={categorias}
          onClose={() => setIsMenuOpen(false)}
          isBlogArticle={isBlogPage}
        />
      </div>
    </header>
  );
}
