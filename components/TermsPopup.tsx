'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function TermsPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted terms
        const hasAccepted = localStorage.getItem('terms_accepted');
        if (!hasAccepted) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('terms_accepted', 'true');
        setIsOpen(false);
    };

    const handleClose = () => {
        // Optional: could allow closing without accepting, but typically for GDPR/Terms you want an explicit action
        // For now we'll allow closing but it will show again next time (since localstorage isn't set)
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 animate-in slide-in-from-bottom-10 duration-500 border border-gray-200 dark:border-gray-800">

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-poiret-one">
                    Aviso de Privacidad y Términos
                </h2>

                <div className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base space-y-3">
                    <p>
                        Bienvenido a <strong>cesarreyesjaramillo.com</strong>.
                    </p>
                    <p>
                        Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Al continuar navegando o al hacer clic en "Aceptar", aceptas nuestros{' '}
                        <Link href="/terminos" className="text-orange-600 font-semibold hover:underline" target="_blank">
                            Términos y Condiciones
                        </Link>{' '}
                        y nuestra{' '}
                        <Link href="/politicas" className="text-orange-600 font-semibold hover:underline" target="_blank">
                            Política de Privacidad
                        </Link>.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                        onClick={handleAccept}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-lg"
                    >
                        Aceptar y Continuar
                    </Button>
                    <Link href="/politicas" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700">
                            Leer Políticas
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
