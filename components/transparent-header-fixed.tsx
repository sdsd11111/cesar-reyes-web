"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import MegaMenu from "@/components/mega-menu/MegaMenu"
import serviciosData from "@/data/servicios.json"
import TopBar from "./TopBar"
import NavigationHeader from "./NavigationHeader"

const categorias = serviciosData.categorias

// Componente principal
const TransparentHeaderFixed = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<{[key: string]: boolean}>({
    servicios: false
  })

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">TuLogo</span>
            </Link>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {pathname !== '/' && (
              <Link href="/" className="text-gray-700 hover:text-gray-900">Inicio</Link>
            )}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <span>Servicios</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <MegaMenu categorias={categorias} />
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
                        <Link href="/menuobjetivo" className="bg-[#FF6B00] text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#E66000] transition-colors">Menú Objetivo</Link>
          </div>

          {/* Botón de menú móvil */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="pt-2 pb-3 space-y-1">
            {pathname !== '/' && (
              <Link 
                href="/" 
                className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            )}
            <div>
              <button
                onClick={() => toggleMenu('servicios')}
                className="flex items-center justify-between w-full py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              >
                <span>Servicios</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMenus['servicios'] ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenus['servicios'] && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4 py-1">
                  {categorias.map((categoria) => (
                    <div key={categoria.id} className="mb-2">
                      <Link
                        href={`/servicios/${categoria.slug}`}
                        className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setExpandedMenus({})
                        }}
                      >
                        {categoria.titulo}
                      </Link>
                      {categoria.servicios.length > 0 && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-3">
                          {categoria.servicios.map((servicio) => (
                            <Link
                              key={servicio.id}
                              href={`/servicios/${categoria.slug}/${servicio.slug}`}
                              className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 -mx-2 px-2 rounded"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setExpandedMenus({})
                              }}
                            >
                              {servicio.titulo}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/servicios"
                    className="block py-2 text-blue-600 font-medium hover:bg-blue-50 -mx-3 px-3 rounded text-sm mt-2"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setExpandedMenus({})
                    }}
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/blog" 
              className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/menuobjetivo" 
              className="block py-2 text-gray-800 hover:bg-gray-100 px-4 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu Objetivo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

// ... (resto del código del archivo original)

export default function TransparentHeader() {
  return (
    <>
      <TopBar />
      <NavigationHeader />
    </>
  )
}
