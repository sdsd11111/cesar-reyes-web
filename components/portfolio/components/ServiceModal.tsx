import { ServiceDetail } from '../types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
          <div className="flex justify-between items-start">
            <div className="pr-4">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-blue-100">{service.price} <span className="text-blue-200">({service.paymentType})</span></p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-100 transition-colors flex-shrink-0"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {/* Video */}
          {service.videoUrl && (
            <div className="mb-6">
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src={service.videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={service.title}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Descripción del servicio</h3>
            <p className="text-gray-700 whitespace-pre-line">{service.description}</p>
          </div>

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficios</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">{benefit.title}</p>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Examples */}
          {service.examples && service.examples.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ejemplos de trabajos realizados</h3>
              <div className="space-y-3">
                {service.examples.map((example, index) => (
                  <a
                    key={index}
                    href={example}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <span className="text-blue-600 hover:underline truncate">
                        {new URL(example).hostname.replace('www.', '')}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="p-6 pt-0 text-center">
            <a
              href={`https://wa.me/593963410409?text=Hola%20César,%20estoy%20interesado%20en%20el%20servicio:%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto"
              onClick={onClose}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Solicitar este servicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
