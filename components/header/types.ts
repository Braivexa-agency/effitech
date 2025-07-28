// types.ts
export interface NavLink {
    readonly label: string;
    readonly href: string;
    readonly description: string;
  }
  
  export interface HeaderProps {
    className?: string;
  }
  
  export interface LogoProps {
    isScrolled: boolean;
    className?: string;
  }
  
  export interface NavigationProps {
    links: readonly NavLink[];
    activeSection: string;
    isScrolled: boolean;
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  }
  
  export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: readonly NavLink[];
    activeSection: string;
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  }
  
  export interface ThemeToggleProps {
    isScrolled: boolean;
    className?: string;
  }
  
  export interface CTAButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }
  
  export interface ContactInfoProps {
    phone?: string;
    email?: string;
    className?: string;
  }
  
  export interface UseScrollPositionReturn {
    isScrolled: boolean;
    scrollY: number;
  }
  
  export interface UseActiveSectionReturn {
    activeSection: string;
  }
  
  export interface UseMobileMenuReturn {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
  }