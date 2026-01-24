'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Define interface for Logo items
interface LogoItem {
    id: string;
    name: string;
    imageSrc: string; // User will provide images for all
    url: string;
    description?: string;
}

// Data Sets - 17 Projects Total
// Split: 9 in Row 1, 8 in Row 2

const row1Logos: LogoItem[] = [
    { id: 'topdent', name: 'TopDent Cuenca', imageSrc: '/images/logos/topdent.webp', url: 'https://topdentcuenca.com/', description: 'Clínica Dental Especializada' },
    { id: 'diesel', name: 'Reparación Diesel Loja', imageSrc: '/images/logos/reparaciondiesel.webp', url: 'https://reparaciondieselloja.com/', description: 'Mecánica Automotriz Expertos' },
    { id: 'optica', name: 'Óptica y Lentes', imageSrc: '/images/logos/opticaylentes.webp', url: 'https://opticaylentes.com/', description: 'Salud Visual y Moda' },
    { id: 'notaria', name: 'Notaría Octava', imageSrc: '/images/logos/notariaoctava.webp', url: 'https://notariaoctavaloja.com/', description: 'Servicios Notariales y Legales' },
    { id: 'metalca', name: 'MetalcaEC', imageSrc: '/images/logos/metalca.webp', url: 'https://metalcaec.com/', description: 'Estructuras Metálicas de Alta Calidad' },
    { id: 'sartenes', name: 'Los Sartenes', imageSrc: '/images/logos/lossartenes.webp', url: 'https://www.lossartenes.com/', description: 'Restaurante con Menú Digital' },
    { id: 'juliocesar', name: 'Julio César Villavicencio', imageSrc: '/images/logos/juliocesar.webp', url: 'https://juliocesarvillavicencio.ec/', description: 'Marca Personal Profesional' },
    { id: 'mayra', name: 'Ing. Mayra Castillo', imageSrc: '/images/logos/mayracastillo.webp', url: 'https://www.ingmayracastillo.com/', description: 'Ingeniería y Consultoría' },
    { id: 'enloja', name: 'EnLoja / Hotel Puente Roto', imageSrc: '/images/logos/enloja.webp', url: 'https://www.enloja.net/', description: 'Hospitalidad y Turismo' },
];

const row2Logos: LogoItem[] = [
    { id: 'camila', name: 'Camila Reyes', imageSrc: '/images/logos/camilareyes.webp', url: 'https://camilareyesp.com/', description: 'Portafolio Profesional' },
    { id: 'guido', name: 'Dr. Guido Díaz', imageSrc: '/images/logos/guidodiaz.webp', url: 'https://drguidodiazortega.com/', description: 'Servicios Médicos Profesionales' },
    { id: 'energym', name: 'Energym', imageSrc: '/images/logos/energym.webp', url: 'https://energymloja.com/', description: 'Centro de Entrenamiento Físico' },
    { id: 'imper', name: 'Impermeabilisa', imageSrc: '/images/logos/impermeabilisa.webp', url: 'https://impermeabilisa.com/', description: 'Impermeabilización Técnica' },
    { id: '200millas', name: 'Restaurante 200 Millas', imageSrc: '/images/logos/200millas.webp', url: 'https://www.restaurante200millasloja.com/', description: 'Gastronomía del Mar' },
    { id: 'corretec', name: 'Corretec', imageSrc: '/images/logos/corretec.webp', url: 'https://www.corretec.ec/', description: 'Servicios Corporativos' },
    { id: 'cajamedidor', name: 'Caja de Medidor', imageSrc: '/images/logos/cajamedidor.webp', url: 'https://www.cajademedidordeluz.com/', description: 'Soluciones Eléctricas' },
    { id: 'sastreria', name: 'Sastrería Carlos Poma', imageSrc: '/images/logos/sastreriapoma.webp', url: 'https://www.sastreriacarlospoma.com/', description: 'Alta Costura a Medida' },
];

export function DualLogoCarousel() {
    const [selectedLogo, setSelectedLogo] = useState<LogoItem | null>(null);

    const duplicate = (arr: LogoItem[]) => [...arr, ...arr, ...arr]; // Triple duplicate for safer loop on smaller screens

    const LogoCard = ({ logo }: { logo: LogoItem }) => (
        <button
            onClick={() => setSelectedLogo(logo)}
            className="bg-transparent p-0 border-4 border-black box-border hover:border-orange-600 transition-all duration-300 w-full h-44 md:h-52 flex flex-col items-center justify-center group relative overflow-hidden"
        >
            <div className="flex-1 flex items-center justify-center w-full group-hover:scale-110 transition-transform duration-300 relative z-10">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                        src={logo.imageSrc}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 150px, 200px"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20"></div>
        </button>
    );

    return (
        <div className="w-full py-20 bg-[#121212] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Marcas que <span className="text-blue-500">Confían y Crecen</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Portafolio de proyectos que han transformado su presencia digital con nuestra metodología.
                </p>
            </div>

            <div className="flex flex-col">
                {/* Row 1: Moves Left */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    spaceBetween={0}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: false
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    {duplicate(row1Logos).map((logo, index) => (
                        <SwiperSlide key={`r1-${logo.id}-${index}`}>
                            <LogoCard logo={logo} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Row 2: Moves Right */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    spaceBetween={0}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="w-full"
                >
                    {duplicate(row2Logos).map((logo, index) => (
                        <SwiperSlide key={`r2-${logo.id}-${index}`}>
                            <LogoCard logo={logo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox / Modal */}
            <Dialog open={!!selectedLogo} onOpenChange={() => setSelectedLogo(null)}>
                <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-bold text-gray-900 mt-2">{selectedLogo?.name}</DialogTitle>
                        <DialogDescription className="text-center text-gray-500 text-base">
                            {selectedLogo?.description || 'Proyecto destacado'}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl my-6 border border-gray-100">
                        {selectedLogo?.imageSrc && (
                            <div className="relative w-56 h-56">
                                <Image
                                    src={selectedLogo.imageSrc}
                                    alt={selectedLogo.name}
                                    fill
                                    className="object-contain drop-shadow-sm"
                                    priority
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center pb-2">
                        <a
                            href={selectedLogo?.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-[#121212] hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Visitar Sitio Web
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
