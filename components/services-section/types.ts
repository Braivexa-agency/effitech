// components/services-section/types.ts
import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  metric?: string;
}

export interface ServiceTechnology {
  name: string;
  description: string;
  advantage: string;
}

export interface ServiceProject {
  title: string;
  description: string;
  location: string;
  year: string;
  client?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Changed from React.ReactNode to string
  features: string[];
  category: string;
  highlight: string;
  
  // Detailed information for "Learn More"
  detailedDescription: string;
  keyBenefits: ServiceBenefit[];
  technicalFeatures: ServiceFeature[];
  technologies: ServiceTechnology[];
  caseStudies: ServiceProject[];
  
  // Contact form specific
  contactTitle: string;
  contactDescription: string;
  projectTypes: string[];
}

export interface ServicesSectionProps {
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
  className?: string;
}

export interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface UseServicesModalReturn {
  selectedService: Service | null;
  isModalOpen: boolean;
  openServiceModal: (service: Service) => void;
  closeServiceModal: () => void;
}