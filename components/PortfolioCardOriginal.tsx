import React from 'react';

interface PortfolioCardOriginalProps {
    onOpen: () => void;
}

export default function PortfolioCardOriginal({ onOpen }: PortfolioCardOriginalProps) {
    return (
        <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
            <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mb-6 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 transition-colors">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ver Portafolio</h3>
                <p className="text-gray-400 mb-6">Descubre los proyectos exitosos que hemos realizado para nuestros clientes.</p>
                <button
                    onClick={onOpen}
                    className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors cursor-pointer"
                >
                    Ver proyectos
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
