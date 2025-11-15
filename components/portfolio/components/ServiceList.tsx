import { ServiceCategory, ServiceDetail } from '../types';

interface ServiceListProps {
  category: ServiceCategory;
  onBack: () => void;
  onSelectService: (service: ServiceDetail) => void;
}

const ServiceList = ({ category, onBack, onSelectService }: ServiceListProps) => {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver a categorías
      </button>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
        <p className="text-gray-600 mb-8">{category.description}</p>
        
        <div className="space-y-6">
          {category.services.map((service) => (
            <div 
              key={service.id}
              className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-blue-600 font-medium">
                    {service.price} <span className="text-sm text-gray-500">({service.paymentType})</span>
                  </p>
                </div>
                <button
                  onClick={() => onSelectService(service)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Ver detalles
                </button>
              </div>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
