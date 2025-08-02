// components/services-section/ServiceDetailModal.tsx
'use client';

import { memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/cta-section';
import { useState } from 'react';
import type { ServiceDetailModalProps } from './types';
import { renderIcon } from './icons-utils';

export const ServiceDetailModal = memo<ServiceDetailModalProps>(({ 
  service, 
  isOpen, 
  onClose 
}) => {
  const [showContactForm, setShowContactForm] = useState(false);

  // Close modal on escape key
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
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl shadow-2xl border border-primary/20 overflow-hidden">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 size-10 rounded-full hover:bg-muted/80"
              >
                <X className="size-5" />
              </Button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="p-6 pb-4 border-b border-border/40">
                  <div className="flex items-start gap-4">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      {renderIcon(service.icon, "size-6")}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">
                        {service.category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {service.detailedDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                  {/* Key Benefits */}
                  <section>
                    <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {service.keyBenefits.map((benefit, index) => (
                        <Card key={index} className="text-center">
                          <CardContent className="pt-4">
                            <div className="text-2xl font-bold text-primary mb-2">
                              {benefit.metric}
                            </div>
                            <h4 className="font-semibold mb-1">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {benefit.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Technical Features */}
                  <section>
                    <h3 className="text-xl font-bold mb-4">Technical Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.technicalFeatures.map((feature, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                {feature.icon && <feature.icon className="size-5" />}
                              </div>
                              <div>
                                <h4 className="font-semibold mb-1">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Technologies */}
                  {service.technologies.length > 0 && (
                    <section>
                      <h3 className="text-xl font-bold mb-4">Technologies</h3>
                      <div className="space-y-3">
                        {service.technologies.map((tech, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{tech.name}</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {tech.description}
                                  </p>
                                </div>
                                <Badge variant="outline" className="ml-4 text-xs">
                                  {tech.advantage}
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Case Studies */}
                  {service.caseStudies.length > 0 && (
                    <section>
                      <h3 className="text-xl font-bold mb-4">Success Stories</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.caseStudies.map((project, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">{project.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">
                                {project.description}
                              </p>
                              <div className="space-y-1 text-xs">
                                <div className="flex items-center gap-2">
                                  <MapPin className="size-3 text-primary" />
                                  <span>{project.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="size-3 text-primary" />
                                  <span>{project.year}</span>
                                </div>
                                {project.client && (
                                  <div className="flex items-center gap-2">
                                    <Users className="size-3 text-primary" />
                                    <span>{project.client}</span>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Contact Section */}
                  <section className="bg-muted/20 -mx-6 -mb-6 p-6 mt-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{service.contactTitle}</h3>
                      <p className="text-muted-foreground mb-4">{service.contactDescription}</p>
                      
                      {!showContactForm ? (
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button 
                            onClick={() => setShowContactForm(true)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            Get Free Consultation
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                          <Button variant="outline">
                            <Phone className="mr-2 size-4" />
                            Call +213 662 28 46 49
                          </Button>
                        </div>
                      ) : (
                        <div className="max-w-2xl mx-auto">
                          <ContactForm
                            onSubmit={async (data) => {
                              console.log('Service contact form:', { service: service.id, ...data });
                              // Handle form submission
                              setShowContactForm(false);
                            }}
                            isVisible={showContactForm}
                            onCancel={() => setShowContactForm(false)}
                            projectTypes={service.projectTypes.map(type => ({ 
                              value: type.toLowerCase().replace(/\s+/g, '-'), 
                              label: type 
                            }))}
                          />
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

ServiceDetailModal.displayName = 'ServiceDetailModal';