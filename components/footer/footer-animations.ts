import { Variants } from "framer-motion";

// Animation variants for staggered reveals
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scrollButtonVariants: Variants = {
    initial: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

export const hoverVariants: Variants = {
  hover: { 
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};