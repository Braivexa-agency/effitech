// TrustIndicators.tsx
'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { TRUST_INDICATORS } from './constants/contact';
import type { TrustIndicatorsProps } from './types';

export const TrustIndicators = memo<TrustIndicatorsProps>(({
  indicators = TRUST_INDICATORS,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
        pt-8 px-8 border-t border-primary/20 
        ${className}
      `}
    >
      {indicators.map((indicator, index) => {
        const IconComponent = indicator.icon;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1 * index,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-3">
              {/* Glow effect */}
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                aria-hidden="true"
              />
              
              {/* Icon container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 400, 
                  damping: 10 
                }}
                className="relative p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300 shadow-sm"
              >
                <IconComponent 
                  className={`size-6 ${indicator.color} transition-transform duration-300`}
                  aria-hidden="true"
                />
              </motion.div>
            </div>
            
            <motion.span
              className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {indicator.text}
            </motion.span>
            
            {indicator.description && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="text-xs text-muted-foreground mt-1 text-center overflow-hidden"
              >
                {indicator.description}
              </motion.p>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
});

TrustIndicators.displayName = 'TrustIndicators';