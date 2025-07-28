// ThemeToggle.tsx
'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { ThemeToggleProps } from './types';

export const ThemeToggle = memo<ThemeToggleProps>(({ isScrolled, className = '' }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [theme, setTheme]);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`
          relative rounded-full transition-all duration-300 opacity-50
          ${isScrolled 
            ? 'hover:bg-muted/80 text-foreground' 
            : 'hover:bg-muted/60 text-foreground'
          }
          ${className}
        `}
        disabled
        aria-label="Loading theme toggle"
      >
        <div className="size-[18px]" />
      </Button>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`
        relative rounded-full transition-all duration-300 hover:scale-110 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isScrolled 
          ? 'hover:bg-muted/80 text-foreground' 
          : 'hover:bg-muted/60 text-foreground'
        }
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        aria-hidden="true"
      />
      
      <div className="relative">
        <motion.div
          key={currentTheme}
          initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            type: 'spring',
            stiffness: 200,
            damping: 15
          }}
        >
          {isDark ? (
            <Sun className="size-[18px]" aria-hidden="true" />
          ) : (
            <Moon className="size-[18px]" aria-hidden="true" />
          )}
        </motion.div>
      </div>
    </Button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';