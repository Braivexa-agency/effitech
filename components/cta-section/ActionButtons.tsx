'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ActionButtonsProps } from './types';

export const ActionButtons = memo<ActionButtonsProps>(({
  onGetConsultation,
  onViewCaseStudies,
  isFormVisible,
  className = '',
}) => {
  if (isFormVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      animate={{ 
        opacity: isFormVisible ? 0 : 1,
        y: isFormVisible ? -20 : 0,
        height: isFormVisible ? 0 : "auto"
      }}
      className={`
        flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 overflow-hidden py-4
        ${className}
      `}
      style={{ 
        marginBottom: isFormVisible ? 0 : undefined 
      }}
    >
      {/* Primary CTA Button - Get Free Consultation */}
      <Button 
        size="lg" 
        onClick={onGetConsultation}
        className="
          relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground 
          px-8 py-4 text-lg font-semibold rounded-full 
          transition-all duration-300 group
          hover:scale-105 hover:shadow-xs hover:shadow-primary/25
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          active:scale-95
        "
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
          aria-hidden="true"
        />
        
        <span className="relative flex items-center gap-3">
          <MessageSquare 
            className="size-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-200" 
            aria-hidden="true"
          />
          Get Free Consultation
        </span>
      </Button>
      
      {/* Secondary Button - View Case Studies */}
      <Button 
        size="lg" 
        variant="outline"
        onClick={onViewCaseStudies}
        className="
          relative overflow-hidden px-8 py-4 text-lg font-semibold rounded-full 
          transition-all duration-300 border-primary/30 
          hover:border-primary/50 hover:bg-primary/5 hover:scale-105 group
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          active:scale-95
        "
      >
        <span className="relative flex items-center gap-3">
          View Case Studies
          <ArrowRight 
            className="size-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200" 
            aria-hidden="true"
          />
        </span>
      </Button>
    </motion.div>
  );
});

ActionButtons.displayName = 'ActionButtons';