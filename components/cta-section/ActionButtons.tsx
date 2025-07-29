// ActionButtons.tsx
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
        flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 overflow-hidden
        ${className}
      `}
      style={{ 
        marginBottom: isFormVisible ? 0 : undefined 
      }}
    >
      {/* Primary CTA Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Button 
          size="lg" 
          onClick={onGetConsultation}
          className="
            bg-primary hover:bg-primary/90 text-primary-foreground 
            px-8 py-4 text-lg font-semibold rounded-full 
            hover:shadow-xl hover:shadow-primary/25 
            transition-all duration-300 group
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          "
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <MessageSquare 
              className="size-5 group-hover:scale-110 transition-transform duration-200" 
            />
            Get Free Consultation
          </motion.div>
          
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
            aria-hidden="true"
          />
        </Button>
      </motion.div>
      
      {/* Secondary Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Button 
          size="lg" 
          variant="outline"
          onClick={onViewCaseStudies}
          className="
            px-8 py-4 text-lg font-semibold rounded-full 
            transition-all duration-300 border-primary/30 
            hover:border-primary/50 hover:bg-primary/5 group
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          "
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: 0 }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            View Case Studies
            <ArrowRight 
              className="size-5 group-hover:translate-x-1 transition-transform duration-200" 
            />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
});

ActionButtons.displayName = 'ActionButtons';