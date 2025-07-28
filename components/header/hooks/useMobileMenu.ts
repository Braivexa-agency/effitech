// hooks/useMobileMenu.ts
import { useState, useEffect, useCallback } from 'react';
import type { UseMobileMenuReturn } from '@/components/header/types';

export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Prevent scroll restoration when menu opens
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    } else {
      document.body.style.overflow = '';
      
      // Restore scroll behavior
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  // Close menu on route change (if using Next.js router)
  useEffect(() => {
    const handleRouteChange = () => {
      close();
    };

    // You can uncomment this if using Next.js router
    // router.events?.on('routeChangeStart', handleRouteChange);
    
    return () => {
      // router.events?.off('routeChangeStart', handleRouteChange);
    };
  }, [close]);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
};