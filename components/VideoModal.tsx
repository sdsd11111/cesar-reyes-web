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
  // Handle YouTube Shorts URL
  if (url.includes('youtube.com/shorts/')) {
    const videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&controls=1&showinfo=0&modestbranding=1`;
  }
  
  // Handle standard YouTube URLs
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
      className="fixed inset-0 z-[9999] bg-black/90 flex items-start justify-center p-0 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div className="w-full h-full sm:h-auto sm:max-w-4xl mx-auto relative" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-2 sm:mb-4 px-2 pt-4 sm:pt-0">
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Mira nuestro video</h2>
          <p className="text-xs sm:text-sm text-gray-300">Conoce más sobre nuestro enfoque y cómo podemos ayudarte</p>
        </div>
        
        <div className="relative bg-black overflow-hidden w-full h-[calc(100vh-120px)] sm:h-auto sm:aspect-video sm:rounded-lg shadow-2xl mx-auto">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 z-50 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar reproductor de video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {youtubeEmbedUrl ? (
            <>
              <div className="w-full h-full relative">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
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