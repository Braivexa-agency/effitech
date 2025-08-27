// Logo.tsx
'use client';

import Link from 'next/link';
import { memo } from 'react';
import { Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { LogoProps } from './types';

export const Logo = memo<LogoProps>(({ isScrolled, className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <Link 
      href="/" 
      className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      aria-label="EFFI TECH - Electrical Excellence"
    >
      <div className="relative">
        {/* Glow effect */}
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          aria-hidden="true"
        />
        
        {/* Logo container */}
        <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300">
          <div className="relative">
            <Zap 
              className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" 
              aria-hidden="true"
            />
            <div 
              className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              aria-hidden="true"
            />
          </div>
          
          <div className="flex flex-col">
            <span className={`
              font-bold text-lg leading-none tracking-wider transition-colors duration-300 
              ${isScrolled ? 'text-foreground' : 'text-foreground'} 
              group-hover:text-primary
            `}>
              EFFI TECH
            </span>
            <span className="text-xs text-muted-foreground font-medium leading-none">
              Electrical Excellence
            </span>
          </div>
        </div>
      </div>
    </Link>
  </div>
));

Logo.displayName = 'Logo';