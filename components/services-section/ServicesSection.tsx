// components/services-section/ServicesSection.tsx
'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { SERVICES } from './constants';
import type { Service, ServicesSectionProps } from './types';

export function ServicesSection({ className = '' }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening service modal
  const handleLearnMore = useCallback((service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  // Handle closing service modal
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing selected service to allow exit animation
    setTimeout(() => setSelectedService(null), 300);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section 
        id="services" 
        className={`w-full py-20 md:py-20 relative overflow-hidden ${className}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <div className="container px-4 md:px-6 lg:px-8 relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge 
              className="rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6" 
              variant="secondary"
            >
              Our Services
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              Transforming Technology into Power Solutions
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We deliver high-performance, energy-efficient solutions by integrating advanced electrical systems 
              and eco-friendly technologies. From industrial compressor solutions to renewable energy, we provide complete 
              systems that work.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <ServiceCard
                  service={service}
                  onLearnMore={handleLearnMore}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Background decorative elements */}
          <div className="absolute top-1/4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}