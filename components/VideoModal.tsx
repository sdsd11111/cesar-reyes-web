'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  thumbnailUrl?: string;
}

// Helper function to convert YouTube URL to embeddable URL with autoplay and mute
const getYouTubeEmbedUrl = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&modestbranding=1`;
  }
  return null;
};

export default function VideoModal({ isOpen, onClose, videoUrl, thumbnailUrl }: VideoModalProps) {
  // Handle modal open/close
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
      id="video-modal-container"
      className="fixed inset-0 z-[9999] bg-black/90 flex items-start justify-center p-4 pt-20 overflow-y-auto"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl mx-auto my-8 relative" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-4 sm:mb-6 md:mb-8 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Mira nuestro video</h2>
          <p className="text-sm sm:text-base text-gray-300">Conoce más sobre nuestro enfoque y cómo podemos ayudarte a hacer crecer tu negocio</p>
        </div>
        
        <div className="relative aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mx-auto">
          <button
            onClick={onClose}
            className="absolute -top-10 sm:-top-12 right-0 sm:right-2 z-50 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar reproductor de video"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {youtubeEmbedUrl ? (
            <>
              <div className="w-full h-full relative">
                <iframe
                  className="w-full h-[70vh] min-h-[400px]"
                  src={youtubeEmbedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </>
          ) : (
            <video
              className="w-full h-full"
              src={videoUrl}
              controls
              autoPlay
              loop
              poster={thumbnailUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
}