// CTASection.tsx
'use client';

import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ActionButtons } from './ActionButtons';
import { TrustIndicators } from './TrustIndicators';
import { ContactInfoDirect } from './ContactInfo';
import type { CTASectionProps, FormData } from './types';

export const CTASection = memo<CTASectionProps>(({
  className = '',
  showTrustIndicators = true,
  showContactInfo = true,
  customProjectTypes,
  onFormSubmit,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleGetConsultation = useCallback(() => {
    setShowForm(true);
    
    // Smooth scroll to form when it appears
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, []);

  const handleViewCaseStudies = useCallback(() => {
    // Navigate to case studies section or page
    const caseStudiesSection = document.getElementById('projects');
    if (caseStudiesSection) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = caseStudiesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // If no projects section, you could navigate to a dedicated page
      window.location.href = '/projects';
    }
  }, []);

  const handleFormSubmit = useCallback(async (data: FormData) => {
    if (onFormSubmit) {
      await onFormSubmit(data);
    }
  }, [onFormSubmit]);

  const handleFormCancel = useCallback(() => {
    setShowForm(false);
    
    // Scroll to top of contact section when form is closed
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 40;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure form closing animation starts
  }, []);

  return (
    <section 
      id="contact" 
      className={`w-full py-20 md:py-32 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"
        aria-hidden="true"
      />
      
      {/* Floating elements */}
      <div 
        className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Enhanced glassmorphism container */}
          <div className="relative group">
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"
              aria-hidden="true"
            />
            
            <div className="relative bg-gradient-to-br from-background/95 to-muted/40 backdrop-blur-xl rounded-3xl border border-primary/20 hover:border-primary/30 transition-all duration-500 p-8 md:p-12">
              
              {/* Header Section */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary mb-6"
                >
                  <Zap className="size-5" aria-hidden="true" />
                  <span className="font-semibold">Ready to Get Started?</span>
                </motion.div>

                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-[1.2] pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Transform Your Electrical Infrastructure
                </motion.h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Partner with EFFI TECH for reliable, efficient, and innovative electrical engineering solutions. 
                  We don't just supply products – we implement complete systems that work.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <ActionButtons
                onGetConsultation={handleGetConsultation}
                onViewCaseStudies={handleViewCaseStudies}
                isFormVisible={showForm}
              />

              {/* Contact Form */}
              <ContactForm
                onSubmit={handleFormSubmit}
                isVisible={showForm}
                onCancel={handleFormCancel}
                projectTypes={customProjectTypes}
                className="mb-8"
              />

              {/* Trust Indicators */}
              {showTrustIndicators && (
                <TrustIndicators />
              )}

              {/* Contact Info */}
              {showContactInfo && (
                <ContactInfoDirect />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';