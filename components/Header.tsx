"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Zap, 
  Phone,
  Mail,
  ArrowUpRight
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

// Navigation configuration
const NAV_LINKS = [
  { label: "Services", href: "#services", description: "Our electrical solutions" },
  { label: "Projects", href: "#projects", description: "Case studies & portfolio" },
  { label: "Testimonials", href: "#testimonials", description: "Client feedback" },
  { label: "FAQ", href: "#faq", description: "" },
  { label: "Contact", href: "#contact", description: "Get in touch" },
] as const;

// Animation variants
const mobileMenuVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Logo component
const Logo = memo(({ isScrolled }: { isScrolled: boolean }) => (
  <Link href="/" className="flex items-center gap-3 group">
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Logo container */}
      <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 group-hover:from-primary/20 group-hover:to-secondary/10 transition-all duration-300">
        <div className="relative">
          <Zap className="size-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex flex-col">
          <span className={`font-bold text-lg leading-none tracking-wider transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-foreground"
          } group-hover:text-primary`}>
            EFFI TECH
          </span>
          <span className="text-xs text-muted-foreground font-medium leading-none">
            Electrical Excellence
          </span>
        </div>
      </div>
    </div>
  </Link>
));

Logo.displayName = "Logo";

// Navigation link component
const NavLink = memo(({ 
  link, 
  isActive, 
  isScrolled, 
  onClick 
}: {
  link: typeof NAV_LINKS[number];
  isActive: boolean;
  isScrolled: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => (
  <Link
    href={link.href}
    className={`
      relative px-3 py-2 text-sm font-medium transition-all duration-300 
      rounded-lg hover:bg-primary/5 group
      ${isScrolled
        ? isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-primary"
        : isActive
        ? "text-primary"
        : "text-foreground hover:text-primary"
      }
    `}
    onClick={(e) => onClick(e, link.href)}
  >
    <span className="relative z-10">{link.label}</span>
    
    {/* Active indicator - modern pill shape */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
    
    {/* Hover indicator */}
    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </Link>
));

NavLink.displayName = "NavLink";

// Theme toggle component
const ThemeToggle = memo(({ isScrolled }: { isScrolled: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`
        relative rounded-full transition-all duration-300 hover:scale-110 group
        ${isScrolled 
          ? "hover:bg-muted/80 text-foreground" 
          : "hover:bg-muted/60 text-foreground"
        }
      `}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      <div className="relative">
        {mounted && (
          <motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
          </motion.div>
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

// CTA Button component
const CTAButton = memo(({ className = "", onClick }: { 
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    className={`
      relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground 
      font-semibold rounded-full px-6 py-2 transition-all duration-300 
      hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group
      ${className}
    `}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    
    <span className="relative flex items-center gap-2">
      Get Quote
      <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </span>
  </Button>
));

CTAButton.displayName = "CTAButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);

          // Section detection logic
          const sections = NAV_LINKS.map((link) => ({
            id: link.href.substring(1),
            element: document.querySelector(link.href),
          })).filter((section) => section.element);

          const scrollPosition = currentScrollY + 100;

          if (currentScrollY < 100) {
            setActiveSection("");
            ticking = false;
            return;
          }

          let currentSection = "";
          for (const section of sections) {
            const element = section.element as HTMLElement;
            if (element) {
              const sectionTop = element.offsetTop;
              const sectionBottom = sectionTop + element.offsetHeight;

              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.id;
                break;
              }
            }
          }

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = useCallback((
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? (header as HTMLElement).offsetHeight : 0;
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - offset - 20;
        
        window.scrollTo({ 
          top, 
          behavior: "smooth" 
        });
        
        setMobileMenuOpen(false);
      }
    }
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 z-50 w-full transition-all duration-500 ease-out
          ${isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-primary/10"
            : "bg-transparent"
          }
        `}
      >
        <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-3 sm:px-4 md:px-6">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <NavLink
                  key={link.href}
                  link={link}
                  isActive={isActive}
                  isScrolled={isScrolled}
                  onClick={handleNavClick}
                />
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex gap-3 items-center">
            <ThemeToggle isScrolled={isScrolled} />
            
            {/* Contact info for larger screens */}
            <div className="hidden xl:flex items-center gap-4 mr-4">
              <a 
                href="tel:+213XXXXXXX" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="size-4" />
                <span className="font-medium">+213 XXX XXX XXX</span>
              </a>
            </div>
            
            <CTAButton />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle isScrolled={isScrolled} />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                relative rounded-full transition-all duration-300 hover:scale-110 group
                ${isScrolled
                  ? "hover:bg-muted/80 text-foreground"
                  : "hover:bg-muted/60 text-foreground"
                }
              `}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                {mobileMenuOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed top-16 sm:top-18 md:top-20 inset-x-3 z-50 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10"
            >
              <div className="p-6">
                {/* Navigation Links */}
                <motion.div className="flex flex-col gap-1 mb-6">
                  {NAV_LINKS.map((link) => {
                    const sectionId = link.href.substring(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.div key={link.href} variants={mobileMenuItemVariants}>
                        <Link
                          href={link.href}
                          className={`
                            group flex items-center justify-between py-4 px-4 rounded-xl 
                            transition-all duration-300 hover:bg-primary/5
                            ${isActive
                              ? "text-primary bg-primary/10 border border-primary/20"
                              : "text-foreground hover:text-primary"
                            }
                          `}
                          onClick={(e) => handleNavClick(e, link.href)}
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold text-base">{link.label}</span>
                            <span className="text-sm text-muted-foreground">
                              {link.description}
                            </span>
                          </div>
                          <ChevronRight className="size-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Contact & CTA Section */}
                <motion.div 
                  variants={mobileMenuItemVariants}
                  className="space-y-4 pt-4 border-t border-primary/20"
                >
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a 
                      href="tel:+213XXXXXXX" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Call us</p>
                        <p className="text-sm font-semibold">+213 XXX XXX XXX</p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:info@effitech.dz" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email us</p>
                        <p className="text-sm font-semibold">info@effitech.dz</p>
                      </div>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <CTAButton 
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}