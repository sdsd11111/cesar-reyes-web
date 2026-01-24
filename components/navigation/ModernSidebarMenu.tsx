"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu, X, ChevronRight,
    Instagram, Linkedin, Facebook, ArrowUpRight, Youtube
} from "lucide-react";
import React from "react";

// Mapeo de imágenes para cada sección
const menuItems = [
    {
        title: "Inicio",
        href: "/",
        image: "/images/portada_cesarbn.webp",
        subtitle: "Volver al inicio"
    },
    {
        title: "Menú Digital",
        href: "/menu-digital",
        image: "/images/spot-corporativo.webp",
        subtitle: "Servicios especializados"
    },
    {
        title: "Motor de Reservas",
        href: "/motor-reservas-hotel",
        image: "/images/hotel-objetivo/hero.png",
        subtitle: "Soluciones para hoteles"
    },
    {
        title: "Promo Carnavales 2026",
        href: "/carnavales-2026",
        image: "/images/portada_cesarbn.webp", // Sugerencia de imagen por defecto
        subtitle: "Vive el carnaval con nosotros"
    },
    {
        title: "Blog",
        href: "/blog",
        image: "/images/portada_cesarbn.webp",
        subtitle: "Noticias y artículos recientes"
    },
    {
        title: "Servicios",
        href: "/servicios",
        image: "/images/estrategia_objetivo.webp",
        subtitle: "Consultoría y desarrollo",
        subitems: [
            { title: "Análisis Estratégico", href: "/analisis-estrategico" },
            { title: "Desarrollo Web", href: "/desarrollo-web" },
            { title: "Posicionamiento", href: "/posicionamiento" },
        ]
    },
    {
        title: "+ Páginas",
        href: "#",
        image: "/images/portada_cesarbn.webp",
        subtitle: "Más información",
        subitems: [
            { title: "Sobre Mí", href: "/sobre-mi" },
            { title: "Control Financiero", href: "/sistema-de-contabilidad" },
            { title: "Mensajería", href: "/mensajeria" },
            { title: "Mensajería Objetivo", href: "/mensajeria-objetivo" },
            { title: "Reto de 7 Días", href: "/reto-de-7-dias" },
            { title: "Políticas", href: "/politicas" },
            { title: "Términos", href: "/terminos" },
        ]
    },
];

const defaultImage = "/images/portada_cesarbn.webp";

export default function ModernSidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(defaultImage);
    const [expandedItems, setExpandedItems] = useState<string[]>([]); // New State for mobile toggles
    const pathname = usePathname();

    // Resetear al cerrar o cambiar ruta
    useEffect(() => {
        setIsOpen(false);
        setExpandedItems([]); // Collapse all on close
        setHoveredImage(defaultImage);
    }, [pathname]);

    // Bloquear scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    }, [isOpen]);

    const toggleSubmenu = (title: string) => {
        setExpandedItems(prev =>
            prev.includes(title)
                ? [] // Close if open
                : [title] // Open only this one (Accordion style)
        );
    };

    return (
        <>
            {/* Trigger Button - Floating */}
            <motion.button
                className="fixed top-6 right-6 z-[60] flex items-center gap-3 px-6 py-3 bg-black text-white rounded-none hover:bg-zinc-900 transition-colors shadow-2xl group"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-sm font-bold tracking-[0.2em]">MENU</span>
                <Menu size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            </motion.button>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.2 } }}
                        className="fixed inset-0 z-[70] bg-black text-white flex overflow-hidden font-sans"
                    >
                        {/* ---------------- LEFT PANEL (Navigation) ---------------- */}
                        <motion.div
                            className="w-full lg:w-1/2 relative flex flex-col justify-between p-8 md:p-12 lg:p-20 z-20 bg-black overflow-y-auto"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 md:mb-12">
                                <Link href="/" className="text-2xl font-bold tracking-tight">
                                    CESAR REYES
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                                >
                                    <X size={20} /> Cerrar
                                </button>
                            </div>

                            {/* Main Navigation */}
                            <nav className="flex-1 flex flex-col justify-center space-y-6">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredImage(item.image)}
                                        onMouseLeave={() => setHoveredImage(defaultImage)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono text-gray-600 hidden md:inline-block">0{index + 1}</span>

                                            {/* Link Principal */}
                                            <Link
                                                href={item.href}
                                                className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight hover:text-outline-white text-transparent bg-clip-text bg-white transition-all duration-500 group-hover:pl-4"
                                                style={{
                                                    WebkitTextStroke: "1px transparent",
                                                    fontFamily: "var(--font-poiret-one)"
                                                }}
                                            >
                                                {item.title}
                                            </Link>

                                            {/* Submenu Toggle Button (Visible on Mobile/Always for utility) */}
                                            {item.subitems && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleSubmenu(item.title);
                                                    }}
                                                    className="p-2 text-white/50 hover:text-white transition-colors lg:hidden focus:outline-none"
                                                    aria-label="Toggle submenu"
                                                >
                                                    <ChevronRight
                                                        size={24}
                                                        className={`transition-transform duration-300 ${expandedItems.includes(item.title) ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Subitems List */}
                                        {item.subitems && (
                                            <div className={`overflow-hidden transition-all duration-500 ease-out 
                                                ${expandedItems.includes(item.title) ? 'h-auto opacity-100' : 'h-0 opacity-0 group-hover:h-auto group-hover:opacity-100'}
                                            `}>
                                                <ul className="pl-4 md:pl-12 mt-4 space-y-2 mb-6 border-l border-white/10 ml-5">
                                                    {item.subitems.map((sub) => (
                                                        <li key={sub.title}>
                                                            <Link
                                                                href={sub.href}
                                                                className="text-gray-400 hover:text-[#FF6B00] text-sm md:text-base font-light tracking-wide transition-colors block py-0.5 hover:translate-x-1 duration-300"
                                                            >
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {!item.subitems && item.subtitle && (
                                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 ml-10">
                                                <p className="text-gray-400 text-sm mt-2 font-light tracking-wide">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Footer / CTA */}
                            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8 pb-8 md:pb-0">
                                <div className="flex gap-4">
                                    <Link href="https://www.instagram.com/objetivoemprendo/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Instagram size={20} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/c%C3%A9sar-reyes-jaramillo/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Linkedin size={20} />
                                    </Link>
                                    <Link href="https://www.facebook.com/ObjetivoEmprendo" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Facebook size={20} />
                                    </Link>
                                    <Link href="https://www.youtube.com/@ObjetivoEmprendo" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                        <Youtube size={20} />
                                    </Link>
                                    <Link href="https://www.tiktok.com/@objetivoemprendo" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-tiktok"
                                        >
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                        </svg>
                                    </Link>
                                </div>

                                <Link
                                    href="https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20tus%20servicios"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold tracking-[0.1em] hover:bg-gray-200 transition-colors uppercase"
                                >
                                    Agenda tu llamada <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* ---------------- RIGHT PANEL (Image Preview) ---------------- */}
                        <motion.div
                            className="hidden lg:block w-1/2 absolute right-0 top-0 bottom-0 bg-zinc-900 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={hoveredImage}
                                    src={hoveredImage}
                                    alt="Menu Preview"
                                    className="w-full h-full object-cover opacity-60 filter grayscale hover:grayscale-0 transition-all duration-700"
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.6 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
