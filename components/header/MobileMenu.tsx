// MobileMenu.tsx
'use client';

import Link from 'next/link';
import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Phone, Mail, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from './CTAButton';
import { CONTACT_INFO } from './constants/navigation';
import type { MobileMenuProps } from './types';

// Animation variants
const mobileMenuVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Mobile Menu Toggle Button
export interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  isScrolled: boolean;
}

export const MobileMenuToggle = memo<MobileMenuToggleProps>(
  ({ isOpen, onToggle, isScrolled }) => (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className={`
        relative rounded-full transition-all duration-300 hover:scale-110 group
        focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isScrolled
          ? 'hover:bg-muted/80 text-foreground'
          : 'hover:bg-muted/60 text-foreground'
        }
      `}
      aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        aria-hidden="true"
      />
      
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative"
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </motion.div>
    </Button>
  )
);
MobileMenuToggle.displayName = 'MobileMenuToggle';

// Main Mobile Menu Component
export const MobileMenu = memo<MobileMenuProps>(({ 
  isOpen, 
  onClose, 
  links, 
  activeSection, 
  onNavClick 
}) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lg:hidden fixed top-16 sm:top-18 md:top-20 inset-x-3 z-50 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/10">
              <div className="flex items-center gap-2">
                <span 
                  id="mobile-menu-title"
                  className="text-sm font-medium text-muted-foreground"
                >
                  EFFI TECH
                </span>
            
              </div>
            </div>

            {/* Navigation Links */}
            <motion.div className="flex flex-col gap-1 mb-6">
              {links.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.div key={link.href} variants={mobileMenuItemVariants}>
                    <Link
                      href={link.href}
                      className={`
                        group flex items-center justify-between py-4 px-4 rounded-xl 
                        transition-all duration-300 hover:bg-primary/5
                        focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-primary focus-visible:ring-offset-2
                        ${isActive
                          ? 'text-primary bg-primary/10 border border-primary/20'
                          : 'text-foreground hover:text-primary'
                        }
                      `}
                      onClick={(e) => onNavClick(e, link.href)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">{link.label}</span>
                        <span className="text-sm text-muted-foreground">
                          {link.description}
                        </span>
                      </div>
                      <ChevronRight 
                        className="size-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" 
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact & CTA Section */}
            <motion.div 
              variants={mobileMenuItemVariants}
              className="space-y-4 pt-4 border-t border-primary/20"
            >
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Call us at ${CONTACT_INFO.phone}`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call us</p>
                    <p className="text-sm font-semibold">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="size-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email us</p>
                    <p className="text-sm font-semibold">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <CTAButton 
                className="w-full justify-center"
                onClick={onClose}
              />
            </motion.div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
));