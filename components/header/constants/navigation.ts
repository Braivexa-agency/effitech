// constants/navigation.ts
import type { NavLink } from '@/components/header/types';

export const NAV_LINKS: readonly NavLink[] = [
  { 
    label: "Services", 
    href: "#services", 
    description: "Our electrical solutions" 
  },
  { 
    label: "Projects", 
    href: "#projects", 
    description: "Case studies & portfolio" 
  },
  { 
    label: "Contact", 
    href: "#contact", 
    description: "Get in touch" 
  },
] as const;

export const CONTACT_INFO = {
  phone: "+213662284649",
  email: "info@effi-tech.net",
} as const;

export const SCROLL_THRESHOLD = 20;
export const SECTION_OFFSET = 100;