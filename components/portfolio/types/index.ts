export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  price: string;
  paymentType: string;
  description: string;
  benefits: ServiceBenefit[];
  videoUrl?: string;
  examples?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: ServiceDetail[];
}

export interface PortfolioData {
  categories: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  services: ServiceCategory[];
}

export interface PortfolioCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
  className?: string;
}

export interface ServiceCardProps {
  service: ServiceDetail;
  onSelect: (service: ServiceDetail) => void;
}

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export interface ServiceListProps {
  categoryId: string;
  onBack: () => void;
  onSelectService: (service: ServiceDetail) => void;
}
