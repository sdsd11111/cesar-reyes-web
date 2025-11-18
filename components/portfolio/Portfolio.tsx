'use client';

import { useState } from 'react';
import { PortfolioData, ServiceCategory, ServiceDetail } from './types';
import PortfolioCategories from './components/PortfolioCategories';
import ServiceList from './components/ServiceList';
import ServiceModal from './components/ServiceModal';
import portfolioData from './data/portfolioData';

const Portfolio = () => {
  const [currentView, setCurrentView] = useState<'categories' | 'services'>('categories');
  const [currentCategory, setCurrentCategory] = useState<ServiceCategory | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategorySelect = (category: { id: string }) => {
    const selected = portfolioData.services.find(cat => cat.id === category.id);
    if (selected) {
      setCurrentCategory(selected);
      setCurrentView('services');
    }
  };

  const handleServiceSelect = (service: ServiceDetail) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setCurrentCategory(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Nuestros Servicios</h2>
      
      {currentView === 'categories' ? (
        <PortfolioCategories 
          categories={portfolioData.categories} 
          onSelectCategory={handleCategorySelect} 
        />
      ) : (
        <ServiceList 
          category={currentCategory!}
          onBack={handleBackToCategories}
          onSelectService={handleServiceSelect}
        />
      )}

      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Portfolio;
