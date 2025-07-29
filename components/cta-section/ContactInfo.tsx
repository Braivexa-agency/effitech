// ContactInfo.tsx (Direct contact info section)
'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from './constants/contact';
import type { ContactInfo } from './types';

interface ContactInfoDirectProps {
  contactInfo?: ContactInfo;
  className?: string;
}

export const ContactInfoDirect = memo<ContactInfoDirectProps>(({
  contactInfo = CONTACT_INFO,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`text-center mt-8 pt-6 border-t border-primary/20 ${className}`}
    >
      <motion.p 
        className="text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      >
        Or reach out directly for immediate assistance
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        {/* Phone Link */}
        <motion.a 
          href={`tel:${contactInfo.phone}`}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full 
            bg-primary/5 hover:bg-primary/10 transition-all duration-300 
            text-primary font-semibold group
            focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-primary focus-visible:ring-offset-2
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Phone 
            className="size-4 group-hover:scale-110 transition-transform duration-200" 
            aria-hidden="true"
          />
          <span>{contactInfo.phone}</span>
        </motion.a>
        
        {/* Email Link */}
        <motion.a 
          href={`mailto:${contactInfo.email}`}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full 
            bg-primary/5 hover:bg-primary/10 transition-all duration-300 
            text-primary font-semibold group
            focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-primary focus-visible:ring-offset-2
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Mail 
            className="size-4 group-hover:scale-110 transition-transform duration-200" 
            aria-hidden="true"
          />
          <span>{contactInfo.email}</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
});

ContactInfoDirect.displayName = 'ContactInfoDirect';