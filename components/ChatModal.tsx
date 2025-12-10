"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import './ChatModal.css';

// Importación dinámica del componente EmbeddedChat
const EmbeddedChat = dynamic(
  () => import('../embedded-chat-component/src/components/EmbeddedChat').then(mod => mod.default),
  { ssr: false }
);

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Asegurarse de que el componente esté montado antes de renderizar
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

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
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // No renderizar nada si no está montado o no está abierto
  if (!isMounted || !isOpen) return null;

  return (
    <div className="chat-modal-overlay" onClick={onClose}>
      <div className="chat-modal-container" onClick={e => e.stopPropagation()}>
        <div className="chat-modal-header">
          <h2 className="chat-modal-title">Chatea con nosotros</h2>
          <button 
            className="chat-modal-close" 
            onClick={onClose}
            aria-label="Cerrar chat"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="chat-modal-content">
          <EmbeddedChat 
            apiUrl="https://chat-aggregator-backend-v2.onrender.com/webhook"
            welcomeMessage="¡Hola! Soy un asistente virtual. ¿En qué puedo ayudarte a agendar hoy?"
            title="Chat de Asistencia"
            showAudioButton={true}
            showImageButton={true}
            inputPlaceholder="Escribe tu mensaje..."
            sendButtonText="Enviar"
            height="100%"
            onSendMessage={(message) => {
              console.log('Mensaje enviado:', message);
            }}
            onReceiveMessage={(message) => {
              console.log('Mensaje recibido:', message);
            }}
            onConnectionStatusChange={(status) => {
              console.log('Estado de conexión:', status);
            }}
          />
        </div>
      </div>
    </div>
  );
}
