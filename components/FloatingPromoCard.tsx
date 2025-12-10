'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

export default function FloatingPromoCard() {
  // Promo card temporarily hidden
  return null;
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();
  const SESSION_STORAGE_KEY = 'promoCardLastDismissed';

  useEffect(() => {
    // Only run on client side
    setIsMounted(true);

    // Check if user has dismissed the card in the current session
    const lastDismissed = sessionStorage?.getItem(SESSION_STORAGE_KEY);
    const isPermanentlyDismissed = localStorage?.getItem('promoCardPermanentlyDismissed');

    // Show the card if it hasn't been permanently dismissed
    if (!isPermanentlyDismissed) {
      // Small delay to show the animation after page load
      const timer = setTimeout(() => {
        // Only show if not dismissed in this session or if it's a different page
        if (!lastDismissed || lastDismissed !== pathname) {
          setIsVisible(true);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);

    // Store dismissal in sessionStorage for the current page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_STORAGE_KEY, pathname);
      // Also store in localStorage to persist across sessions
      localStorage.setItem('promoCardLastDismissed', new Date().toISOString());
    }
  };

  // Don't render anything during SSR or if not mounted yet
  if (!isMounted) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ease-in-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      style={{
        bottom: '1rem',
        right: '1rem',
        maxWidth: 'calc(100% - 2rem)'
      }}
    >
      <div
        className={`relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${isVisible ? 'animate-urgent-bounce' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-1.5 right-1.5 text-gray-300 hover:text-white transition-colors z-10 bg-gray-800/80 rounded-full p-1 hover:bg-gray-700"
          aria-label="Cerrar promoción"
        >
          <X size={14} />
        </button>

        <Link
          href="/servicios/promo-artes-vivas"
          className="block p-3 pr-7 hover:bg-gray-800/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-bold text-white text-xs sm:text-sm bg-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                  ¡OFERTA ESPECIAL!
                </h3>
                <span className="text-[10px] sm:text-xs bg-amber-400 text-gray-900 px-2 py-0.5 rounded-full font-bold animate-pulse whitespace-nowrap">
                  ¡HAZ CLIC AQUÍ!
                </span>
              </div>
              <p className="text-white text-xs sm:text-sm mt-0.5 font-medium leading-tight">
                Promoción Festival Artes Vivas 2025
              </p>
              <div className="flex items-center mt-0.5">
                <span className="text-[10px] bg-gray-800 text-orange-300 px-1.5 py-0.5 rounded-full">
                  Tiempo limitado
                </span>
                {isHovering && (
                  <ArrowRight className="ml-1.5 h-3 w-3 text-orange-400" />
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes urgent-bounce {
          0%, 100% { 
            transform: translateY(0); 
            box-shadow: 0 4px 16px rgba(249, 115, 22, 0.3);
          }
          50% { 
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(249, 115, 22, 0.5);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(0.98);
          }
        }
        
        .animate-urgent-bounce {
          animation: urgent-bounce 1.5s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
