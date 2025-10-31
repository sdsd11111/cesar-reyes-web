'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

// Helper function to convert YouTube URL to embeddable URL
const getYouTubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
  }
  return null;
};

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Close with Escape key
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

  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mira nuestro video</h2>
          <p className="text-lg text-gray-300">Conoce más sobre nuestro enfoque y cómo podemos ayudarte a hacer crecer tu negocio</p>
        </div>
        
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 z-50 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar reproductor de video"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {youtubeEmbedUrl ? (
            <iframe
              className="w-full h-full"
              src={youtubeEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              className="w-full h-full"
              src={videoUrl}
              controls
              autoPlay
              loop
            />
          )}
        </div>
      </div>
    </div>
  );
}