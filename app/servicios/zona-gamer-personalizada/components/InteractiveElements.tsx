'use client';

import { useState } from 'react';

interface InteractiveTabsProps {
    onTabChange: (tab: string) => void;
    activeTab: string;
}

export function ProblemTabs({ onTabChange, activeTab }: InteractiveTabsProps) {
    return (
        <div className="flex flex-wrap border-b border-gray-200">
            {[
                { id: 'problema', label: 'El Problema', icon: '🔍' },
                { id: 'impacto', label: 'El Impacto', icon: '📉' },
                { id: 'solucion', label: 'La Solución', icon: '✨' }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`px-6 py-4 font-medium text-lg flex items-center transition-all ${activeTab === tab.id
                            ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                >
                    <span className="mr-2 text-xl">{tab.icon}</span>
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export function GamesTabs({ onTabChange, activeTab }: InteractiveTabsProps) {
    return (
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            <button
                className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${activeTab === 'juegos'
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                onClick={() => onTabChange('juegos')}
            >
                🎮 Catálogo de Juegos
            </button>
            <button
                className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${activeTab === 'personalizacion'
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                onClick={() => onTabChange('personalizacion')}
            >
                🎨 Personalización Total
            </button>
        </div>
    );
}

export function ExpandableText({
    shortText,
    fullText,
    buttonText = 'Seguir leyendo'
}: {
    shortText: string;
    fullText: string;
    buttonText?: string;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <p>{shortText}</p>
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="mt-4 text-orange-300 hover:text-orange-400 font-medium text-lg flex items-center justify-center mx-auto transition-colors duration-200"
                >
                    {buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
            {isExpanded && (
                <div className="mt-4 text-lg text-gray-200 animate-fadeIn">
                    <p>{fullText}</p>
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="mt-3 text-orange-300 hover:text-orange-400 font-medium text-base flex items-center justify-center mx-auto transition-colors duration-200"
                    >
                        Mostrar menos
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
