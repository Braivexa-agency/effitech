// index.ts - Export barrel
export { Header } from './Header';
export { Logo } from './Logo';
export { Navigation } from './Navigation';
export { MobileMenu, MobileMenuToggle } from './MobileMenu';
export { ThemeToggle } from './ThemeToggle';
export { CTAButton } from './CTAButton';
export { ContactInfo } from './ContactInfo';

// Export types
export type * from './types';

// Export hooks for external usage if needed
export { useScrollPosition } from './hooks/useScrollPosition';
export { useActiveSection } from './hooks/useActiveSection';
export { useMobileMenu } from './hooks/useMobileMenu';

// Export constants
export { NAV_LINKS, CURRENT_VERSION, CONTACT_INFO } from './constants/navigation';