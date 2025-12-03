'use client';

import React, { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface DemoFacadeProps {
    src: string;
    title: string;
    className?: string;
    previewImage?: string; // Optional custom preview image
    buttonText?: string;
}

const DemoFacade = ({ src, title, className = "", previewImage, buttonText = "Cargar Demo" }: DemoFacadeProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoad = () => {
        setIsLoading(true);
        setIsLoaded(true);
    };

    if (isLoaded) {
        return (
            <div className={`relative w-full h-full bg-gray-100 ${className}`}>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <Loader2 className="w-8 h-8 text-[#FF6B00] animate-spin" />
                    </div>
                )}
                <iframe
                    src={src}
                    title={title}
                    className="w-full h-full"
                    onLoad={() => setIsLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div
            className={`relative w-full h-full bg-gray-900 flex flex-col items-center justify-center cursor-pointer group overflow-hidden ${className}`}
            onClick={handleLoad}
        >
            {/* Background Pattern or Image */}
            {previewImage ? (
                <img
                    src={previewImage}
                    alt={`${title} preview`}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-100">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                </div>
            )}

            {/* Play Button / Action Call */}
            <div className="relative z-10 flex flex-col items-center transform transition-transform duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:bg-[#E66000] transition-colors">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide">{buttonText}</span>
                <span className="text-gray-300 text-sm mt-2">Clic para interactuar</span>
            </div>
        </div>
    );
};

export default DemoFacade;
