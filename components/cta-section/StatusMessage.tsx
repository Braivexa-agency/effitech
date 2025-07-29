// StatusMessage.tsx
'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { StatusMessageProps } from './types';

export const StatusMessage = memo<StatusMessageProps>(({
  status,
  successMessage = "Thank you for reaching out! Our engineering team will contact you within 24 hours to discuss your project.",
  errorMessage = "There was an error sending your message. Please try again or contact us directly at info@effi-tech.net",
  className = '',
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'submitting':
        return {
          icon: Loader2,
          title: 'Sending Message...',
          message: 'Please wait while we process your request.',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600',
          iconClass: 'animate-spin',
        };
      
      case 'success':
        return {
          icon: CheckCircle,
          title: 'Message Sent Successfully!',
          message: successMessage,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600',
          iconClass: '',
        };
      
      case 'error':
        return {
          icon: AlertCircle,
          title: 'Message Failed to Send',
          message: errorMessage,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
          iconClass: '',
        };
      
      default:
        return null;
    }
  };

  const config = getStatusConfig();

  if (!config || status === 'idle') {
    return null;
  }

  const { icon: Icon, title, message, bgColor, borderColor, textColor, iconColor, iconClass } = config;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1],
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        className={`
          text-center p-6 rounded-xl border backdrop-blur-sm
          ${bgColor} ${borderColor} ${className}
        `}
        role="alert"
        aria-live="polite"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.1, 
            type: 'spring', 
            stiffness: 400, 
            damping: 20 
          }}
          className="flex justify-center mb-3"
        >
          <div className={`
            p-2 rounded-full bg-white/50 backdrop-blur-sm border ${borderColor}
          `}>
            <Icon 
              className={`size-8 ${iconColor} ${iconClass}`} 
              aria-hidden="true"
            />
          </div>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={`text-lg font-semibold ${textColor} mb-2`}
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className={`${textColor.replace('800', '700')} leading-relaxed`}
        >
          {message}
        </motion.p>

        {/* Progress indicator for submitting state */}
        {status === 'submitting' && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="mt-4 h-1 bg-blue-200 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: 'easeInOut' 
              }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
});

StatusMessage.displayName = 'StatusMessage';