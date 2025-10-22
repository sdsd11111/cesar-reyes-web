'use client';

import { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  name: string;
  href: string;
  image: string;
  description: string;
  submenu?: ServiceItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  submenu?: ServiceItem[];
}

export default function Header() {
  console.log('Header se está renderizando');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Verificar si el menú está siendo renderizado
  if (typeof window !== 'undefined') {
    console.log('Ruta actual:', window.location.pathname);
  }
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<ServiceItem | null>(null);

  const toggleMenu = (e: React.MouseEvent, menuName: string, hasSubmenu: boolean, href: string) => {
    if (hasSubmenu) {
      e.preventDefault();
      setExpandedMenus(prev => ({
        ...prev,
        [menuName]: !prev[menuName]
      }));
    } else {
      setMobileMenuOpen(false);
      // Navegar al hacer clic en un ítem sin submenú
      window.location.href = href;
    }
  };

  const renderMobileMenu = (items: ServiceItem[], level = 0) => {
    return items.map((item) => (
      <div key={`${item.name}-${level}`} className={level > 0 ? 'pl-4' : ''}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <a
              href={item.href}
              className={`block py-2 font-medium ${
                level === 0 ? 'text-base text-gray-900' : 'text-sm text-gray-700'
              }`}
              onClick={(e) => {
                const hasSubmenu = !!(item.submenu && item.submenu.length > 0);
                toggleMenu(e, item.name, hasSubmenu, item.href);
              }}
            >
              {item.name}
            </a>
            {item.submenu && item.submenu.length > 0 && (
              <button
                type="button"
                className="p-2 -mr-2 text-gray-700"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setExpandedMenus(prev => ({
                    ...prev,
                    [item.name]: !prev[item.name]
                  }));
                }}
              >
                <svg
                  className={`h-5 w-5 transition-transform ${
                    expandedMenus[item.name] ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
          {item.submenu && item.submenu.length > 0 && expandedMenus[item.name] && (
            <div className="mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
              {renderMobileMenu(item.submenu, level + 1)}
            </div>
          )}
        </div>
      </div>
    ));
  };

  const services: ServiceItem[] = [
    { 
      name: 'Análisis Estratégico', 
      href: '/servicios/analisis-estrategico',
      image: '/images/analisis-estrategico.webp',
      description: 'Análisis detallado para el crecimiento de tu negocio',
      submenu: [
        { 
          name: 'Análisis de Competencia', 
          href: '/servicios/analisis-estrategico/analisis-competencia',
          image: '/images/analisis-estrategico.webp',
          description: 'Análisis detallado de la competencia'
        },
        { 
          name: 'Consultoría Empresarial', 
          href: '/servicios/analisis-estrategico/consultoria-empresarial',
          image: '/images/analisis-estrategico.webp',
          description: 'Asesoría experta para tu negocio'
        },
        { 
          name: 'Estrategia para Ganar Clientes', 
          href: '/servicios/analisis-estrategico/estrategia-ganar-clientes',
          image: '/images/analisis-estrategico.webp',
          description: 'Estrategias efectivas para atraer más clientes'
        },
        { 
          name: 'Estudio de Factibilidad', 
          href: '/servicios/analisis-estrategico/estudio-factibilidad',
          image: '/images/analisis-estrategico.webp',
          description: 'Análisis de viabilidad de proyectos'
        },
        { 
          name: 'Plan para Salir en Google', 
          href: '/servicios/analisis-estrategico/plan-salir-google',
          image: '/images/analisis-estrategico.webp',
          description: 'Estrategia de visibilidad en buscadores'
        },
        { 
          name: 'Reingeniería de Procesos', 
          href: '/servicios/analisis-estrategico/reingenieria-procesos',
          image: '/images/analisis-estrategico.webp',
          description: 'Optimización de procesos empresariales'
        },
      ]
    },
    { 
      name: 'Diseño y Desarrollo Web', 
      href: '/servicios/desarrollo-web',
      image: '/images/Diseño Web.webp',
      description: 'Sitios web profesionales a la medida',
      submenu: [
        { 
          name: 'GO 2025', 
          href: '/servicios/desarrollo-web/go-2025',
          image: '/images/Diseño Web.webp',
          description: 'Solución web avanzada para tu negocio'
        },
        { 
          name: 'Tarjeta Digital', 
          href: '/servicios/desarrollo-web/tarjeta-digital',
          image: '/images/Diseño Web.webp',
          description: 'Tu tarjeta de presentación digital'
        },
        { 
          name: 'Tu Contacto Profesional', 
          href: '/servicios/desarrollo-web/tu-contacto-profesional',
          image: '/images/Diseño Web.webp',
          description: 'Presencia profesional en línea'
        },
        { 
          name: 'Tu Empresa Online', 
          href: '/servicios/desarrollo-web/tu-empresa-online',
          image: '/images/Diseño Web.webp',
          description: 'Sitio web corporativo profesional'
        },
        { 
          name: 'Tu Negocio 24/7', 
          href: '/servicios/desarrollo-web/tu-negocio-24-7',
          image: '/images/Diseño Web.webp',
          description: 'Presencia en línea permanente'
        },
      ]
    },
    { 
      name: 'Posicionamiento SEO', 
      href: '/servicios/posicionamiento',
      image: '/images/busquedas_mensuales.webp',
      description: 'Mejora tu visibilidad en buscadores',
      submenu: [
        { 
          name: 'Posicionamiento Básico', 
          href: '/servicios/posicionamiento/basico',
          image: '/images/busquedas_mensuales.webp',
          description: 'Estrategias iniciales de posicionamiento'
        },
        { 
          name: 'Posicionamiento Avanzado', 
          href: '/servicios/posicionamiento/avanzado',
          image: '/images/busquedas_mensuales.webp',
          description: 'Estrategias avanzadas de SEO'
        }
      ]
    },
  ];

  const navigation: NavigationItem[] = [
    { name: 'Inicio', href: '/' },
    { 
      name: 'Servicios', 
      href: '/servicios',
      submenu: services
    },
    { 
      name: 'Blog', 
      href: '/blog',
      submenu: [
        { 
          name: 'Todos los artículos', 
          href: '/blog',
          image: '/images/blog_cesar_bn.webp',
          description: 'Artículos sobre marketing digital y desarrollo web'
        },
        { 
          name: 'Marketing Digital', 
          href: '/blog/marketing-digital',
          image: '/images/busquedas_mensuales.webp',
          description: 'Estrategias de marketing digital para tu negocio'
        },
        { 
          name: 'Desarrollo Web', 
          href: '/blog/desarrollo-web',
          image: '/images/Diseño Web.webp',
          description: 'Consejos y tendencias en desarrollo web'
        },
      ]
    },
    { 
      name: 'Menu Objetivo', 
      href: '/menuobjetivo'
    },
    { 
      name: 'Mensajería', 
      href: '/mensajeria',
      submenu: [
        { 
          name: 'Mensajería', 
          href: '/mensajeria',
          image: '/images/mensajeria.webp',
          description: 'Solución de mensajería para tu negocio'
        },
        { 
          name: 'Mensajería Objetivo', 
          href: '/mensajeria-objetivo',
          image: '/images/mensajeria-objetivo.webp',
          description: 'Mensajería con objetivos claros'
        },
      ]
    },
    { 
      name: 'Más Pacientes', 
      href: '/maspacientes',
      submenu: [
        { 
          name: 'Estrategias', 
          href: '/maspacientes#estrategias',
          image: '/images/analisis-estrategico.webp',
          description: 'Estrategias para conseguir más pacientes'
        },
        { 
          name: 'Testimonios', 
          href: '/maspacientes#testimonios',
          image: '/images/testimonios.webp',
          description: 'Lo que dicen nuestros clientes'
        },
      ]
    },
    { 
      name: 'Legal', 
      href: '#',
      submenu: [
        { 
          name: 'Políticas de Privacidad', 
          href: '/politicas',
          image: '/images/politicas.webp',
          description: 'Nuestras políticas de privacidad'
        },
        { 
          name: 'Términos y Condiciones', 
          href: '/terminos',
          image: '/images/terminos.webp',
          description: 'Términos y condiciones de uso'
        },
      ]
    },
  ];

  const handleServiceHover = (service: ServiceItem) => {
    setActiveService(service);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    setIsServicesOpen(false);
    setActiveService(null);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">César Reyes</span>
            <Image
              className="h-8 w-auto"
              src="/images/logo.png"
              alt="César Reyes"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <div 
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={handleServicesLeave}
                >
                  {item.name}
                  <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

        </div>
      </nav>

      {/* Menú desplegable de servicios */}
      {/* Menú desplegable de servicios */}
      <div 
        className={`absolute left-0 right-0 z-10 bg-white shadow-lg transition-all duration-200 ${
          isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={handleServicesLeave}
      >
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className={`group relative flex items-start gap-4 p-4 rounded-lg transition-colors ${
                    activeService?.name === service.name ? 'bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => handleServiceHover(service)}
                >
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white transition-colors">
                    <div className="relative h-6 w-6">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Link 
                      href={service.href} 
                      className="block font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative h-80 rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
              {activeService ? (
                <Image
                  src={activeService.image}
                  alt={activeService.name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400">Selecciona un servicio</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">César Reyes</span>
              <Image
                className="h-8 w-auto"
                src="/images/logo.png"
                alt="César Reyes"
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="w-full">
                    {item.submenu ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <a
                            href={item.href}
                            className="block py-2 text-base font-medium text-gray-900"
                            onClick={(e) => {
                              const hasSubmenu = !!(item.submenu && item.submenu.length > 0);
                              toggleMenu(e, item.name, hasSubmenu, item.href);
                            }}
                          >
                            {item.name}
                          </a>
                          <button
                            type="button"
                            className="p-2 -mr-2 text-gray-700"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setExpandedMenus(prev => ({
                                ...prev,
                                [item.name]: !prev[item.name]
                              }));
                            }}
                          >
                            <svg
                              className={`h-5 w-5 transition-transform ${
                                expandedMenus[item.name] ? 'rotate-180' : ''
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        {expandedMenus[item.name] && item.submenu && (
                          <div className="mt-1 space-y-1 pl-4 border-l-2 border-gray-200">
                            {renderMobileMenu(item.submenu, 1)}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
