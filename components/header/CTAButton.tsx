// CTAButton.tsx
'use client';

import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CTAButtonProps } from './types';

export const CTAButton = memo<CTAButtonProps>(({ 
  className = '', 
  onClick,
  children = 'Get Quote'
}) => (
  <Button
    className={`
      relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground 
      font-semibold rounded-full px-6 py-2 transition-all duration-300 
      hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group
      focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      active:scale-95
      ${className}
    `}
    onClick={onClick}
    aria-label="Get a quote for electrical services"
  >
    {/* Shimmer effect */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
      aria-hidden="true"
    />
    
    <span className="relative flex items-center gap-2">
      {children}
      <ArrowUpRight 
        className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" 
        aria-hidden="true"
      />
    </span>
  </Button>
));

CTAButton.displayName = 'CTAButton';