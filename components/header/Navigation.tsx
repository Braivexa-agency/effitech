// Navigation.tsx
'use client';

import Link from 'next/link';
import { memo } from 'react';
import { motion } from 'framer-motion';
import type { NavigationProps } from './types';

const NavLink = memo<{
  link: NavigationProps['links'][number];
  isActive: boolean;
  isScrolled: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}>(({ link, isActive, isScrolled, onClick }) => (
  <Link
    href={link.href}
    className={`
      relative px-3 py-2 text-sm font-medium transition-all duration-300 
      rounded-lg hover:bg-primary/5 group focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      ${isScrolled
        ? isActive
          ? 'text-primary'
          : 'text-muted-foreground hover:text-primary'
        : isActive
        ? 'text-primary'
        : 'text-foreground hover:text-primary'
      }
    `}
    onClick={(e) => onClick(e, link.href)}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className="relative z-10">{link.label}</span>
    
    {/* Active indicator */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      aria-hidden="true"
    />
    
    {/* Hover indicator */}
    <div 
      className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
      aria-hidden="true"
    />
  </Link>
));

NavLink.displayName = 'NavLink';

export const Navigation = memo<NavigationProps>(({ 
  links, 
  activeSection, 
  isScrolled, 
  onNavClick 
}) => (
  <nav 
    className="hidden lg:flex items-center gap-1"
    role="navigation"
    aria-label="Main navigation"
  >
    {links.map((link) => {
      const sectionId = link.href.substring(1);
      const isActive = activeSection === sectionId;

      return (
        <NavLink
          key={link.href}
          link={link}
          isActive={isActive}
          isScrolled={isScrolled}
          onClick={onNavClick}
        />
      );
    })}
  </nav>
));

Navigation.displayName = 'Navigation';