// components/services-section/iconUtils.ts
import {
    Settings,
    Leaf,
    Target,
    Zap,
    Shield,
    Gauge,
    Wrench,
    BarChart,
    Battery,
    Wind,
    Sun,
    Cog,
  } from 'lucide-react';
  import { LucideIcon } from 'lucide-react';
  
  // Icon mapping object
  export const ICON_MAP: Record<string, LucideIcon> = {
    Settings,
    Leaf,
    Target,
    Zap,
    Shield,
    Gauge,
    Wrench,
    BarChart,
    Battery,
    Wind,
    Sun,
    Cog,
  };
  
  // Helper function to get icon component from string name
  export const getIconComponent = (iconName: string): LucideIcon => {
    return ICON_MAP[iconName] || Settings; // Fallback to Settings if icon not found
  };
  
  // Helper function to render icon with className
  export const renderIcon = (iconName: string, className: string = "size-6") => {
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className={className} />;
  };