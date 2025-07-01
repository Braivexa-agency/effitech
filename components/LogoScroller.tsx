// LogoScroller.tsx
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";

export interface LogoItem {
  name: string;
  logo: string;
  website?: string;
}

interface LogoScrollerProps {
  items: LogoItem[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  showGradient?: boolean;
  className?: string;
}

// Animation variants for different speeds
const speedVariants = {
  slow: { duration: 60 },
  normal: { duration: 40 },
  fast: { duration: 25 },
};

// Memoized logo item component for performance
const LogoItemComponent = memo(({ item, mounted, theme }: {
  item: LogoItem;
  mounted: boolean;
  theme: string | undefined;
}) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Theme-aware styling
  const getImageStyle = () => {
    if (!mounted) return { filter: "grayscale(1) opacity(0.7)" };
    
    return theme === "dark" 
      ? { filter: "invert(1) grayscale(1) opacity(0.7)" }
      : { filter: "grayscale(1) opacity(0.7)" };
  };

  // Fallback for missing images
  if (imageError) {
    return (
      <div className="flex items-center justify-center h-12 w-24 bg-muted/50 rounded border text-xs text-muted-foreground">
        {item.name}
      </div>
    );
  }

  const ImageElement = (
    <Image
      src={item.logo}
      alt={`${item.name} logo`}
      width={120}
      height={48}
      className="h-8 w-auto object-contain transition-all duration-300 hover:scale-105"
      style={getImageStyle()}
      onError={handleImageError}
      loading="lazy"
      quality={75}
    />
  );

  // Wrap with link if website is provided
  if (item.website) {
    return (
      <a
        href={item.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`Visit ${item.name} website`}
      >
        {ImageElement}
      </a>
    );
  }

  return (
    <div className="flex items-center justify-center p-4 rounded-lg">
      {ImageElement}
    </div>
  );
});

LogoItemComponent.displayName = "LogoItemComponent";

export default function LogoScroller({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  showGradient = true,
  className = "",
}: LogoScrollerProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure we have enough items for seamless scrolling
  const duplicatedItems = items.length < 6 
    ? [...items, ...items, ...items] 
    : [...items, ...items];

  const animationDuration = speedVariants[speed].duration;
  const animationDirection = direction === "left" ? -100 : 100;

  // Scroll animation variants
  const scrollVariants = {
    animate: {
      x: `${animationDirection}%`,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: animationDuration,
          ease: "linear",
        },
      },
    },
    paused: {
      x: `${animationDirection}%`,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: animationDuration * 10, // Much slower when paused
          ease: "linear",
        },
      },
    },
  };

  return (
    <div 
      className={`relative w-full  overflow-hidden ${className} `}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      aria-label="Company logos carousel"
    >
      {/* Gradient overlays for fade effect */}
      {showGradient && (
        <>
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </>
      )}
      
      {/* Main scrolling container */}
      <div className="relative flex">
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8"
          variants={scrollVariants}
          animate={isHovered ? "paused" : "animate"}
          style={{ width: "max-content" }}
        >
          {duplicatedItems.map((item, index) => (
            <LogoItemComponent
              key={`${item.name}-${index}`}
              item={item}
              mounted={mounted}
              theme={theme}
            />
          ))}
        </motion.div>
        
        {/* Duplicate for seamless loop */}
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8"
          variants={scrollVariants}
          animate={isHovered ? "paused" : "animate"}
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {duplicatedItems.map((item, index) => (
            <LogoItemComponent
              key={`duplicate-${item.name}-${index}`}
              item={item}
              mounted={mounted}
              theme={theme}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}