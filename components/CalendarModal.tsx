'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
    // Manejar el cierre con la tecla Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
            onClick={onClose}
        >
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* 
                AJUSTE TIGHT (Recorte Lateral):
                - max-w-[820px]: Ancho calculado para "abrazar" el contenido real (scale 0.75) sin dejar franjas blancas sobrantes a los lados.
                - mx-auto: Centrado horizontal.
                - h-[95vh]: Altura máxima.
            */}
            <div
                className="w-full max-w-[820px] h-[95vh] bg-white rounded-xl shadow-2xl relative overflow-hidden flex flex-col mx-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón de cierre flotante */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-50 p-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-all shadow-sm border border-gray-200"
                    aria-label="Cerrar modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Wrapper extra para forzar overflow hidden */}
                <div className="flex-1 w-full h-full relative overflow-hidden bg-white scrollbar-hide">
                    {/* 
                        Centrado Perfecto + Escala 0.75:
                        - left: 50% + translateX(-50%): Centra el iframe pase lo que pase.
                        - scale(0.75): Tamaño grande/legible.
                        - width: 133.33%: Compensación para llenar el contenedor de 820px.
                    */}
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ26I1xUXME05ewbX_aF1rah4KP__6M_4ggFuYF9PRDFS-QbZdI_ufh8igfJAKUopDDJ8iOl6W0b?gv=true"
                        className="absolute top-0 left-1/2 scrollbar-hide"
                        style={{
                            border: 0,
                            width: '133.33%',
                            height: '133.33%',
                            transform: 'translateX(-50%) scale(0.75)',
                            transformOrigin: 'top center'
                        }}
                        frameBorder="0"
                    />
                </div>
            </div>
        </div>
    );
}
