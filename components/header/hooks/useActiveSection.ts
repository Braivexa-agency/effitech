// hooks/useActiveSection.ts
import { useState, useEffect } from 'react';
import type { NavLink, UseActiveSectionReturn } from '@/components/header/types';
import { SECTION_OFFSET } from '../constants/navigation';

export const useActiveSection = (
  links: readonly NavLink[],
  scrollY: number
): UseActiveSectionReturn => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateActiveSection = () => {
      // Don't set active section when at the very top
      if (scrollY < 100) {
        setActiveSection('');
        return;
      }

      const sections = links
        .map((link) => ({
          id: link.href.substring(1),
          element: document.querySelector(link.href),
        }))
        .filter((section) => section.element);

      const scrollPosition = scrollY + SECTION_OFFSET;
      let currentSection = '';

      for (const section of sections) {
        const element = section.element as HTMLElement;
        
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
  }, [links, scrollY]);

  return { activeSection };
};