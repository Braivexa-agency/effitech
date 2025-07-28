// hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';
import type { UseScrollPositionReturn } from '@/components/header/types';
import { SCROLL_THRESHOLD } from '../constants/navigation';

export const useScrollPosition = (): UseScrollPositionReturn => {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    scrollY: 0,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setScrollState(prev => {
            const newIsScrolled = currentScrollY > SCROLL_THRESHOLD;
            
            // Only update if there's a meaningful change
            if (prev.isScrolled !== newIsScrolled || Math.abs(prev.scrollY - currentScrollY) > 10) {
              return {
                isScrolled: newIsScrolled,
                scrollY: currentScrollY,
              };
            }
            
            return prev;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
};