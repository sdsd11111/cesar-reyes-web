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
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cabecera del Modal */}
                <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Agenda tu Llamada Estratégica</h2>
                        <p className="text-gray-400 text-sm mt-1">Selecciona el día y la hora que mejor te convenga</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        aria-label="Cerrar modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Contenedor del Iframe */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video bg-white">
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ26I1xUXME05ewbX_aF1rah4KP__6M_4ggFuYF9PRDFS-QbZdI_ufh8igfJAKUopDDJ8iOl6W0b?gv=true"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        frameBorder="0"
                    />
                </div>

                {/* Footer del Modal (Opcional) */}
                <div className="p-4 bg-gray-900 border-t border-gray-800 text-center">
                    <p className="text-xs text-gray-500">
                        Sincronizado directamente con Google Calendar
                    </p>
                </div>
            </div>
        </div>
    );
}
