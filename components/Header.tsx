"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50); // Increased threshold to prevent flickering

      // Get all sections
      const sections = NAV_LINKS.map((link) => ({
        id: link.href.substring(1), // Remove # from href
        element: document.querySelector(link.href),
      })).filter((section) => section.element);

      // Find which section is currently in view
      const scrollPosition = currentScrollY + 120; // Offset for header + buffer

      // If we're at the very top (hero section), don't highlight any nav item
      if (currentScrollY < 200) {
        // Increased threshold for hero section
        setActiveSection("");
        return;
      }

      let currentSection = "";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = section.element as HTMLElement;

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with header offset
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? (header as HTMLElement).offsetHeight : 0;
        const top =
          (el as HTMLElement).getBoundingClientRect().top +
          window.scrollY -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {/* EFFITECH Logo Design - Theme aware */}
            <div className="relative">
              <div className="w-8 h-6 bg-primary rounded-sm flex items-center justify-center">
                <div className="w-5 h-0.5 bg-primary-foreground"></div>
              </div>
              <div className="w-6 h-0.5 bg-primary absolute -bottom-1 left-1"></div>
              <div className="w-4 h-0.5 bg-primary absolute -bottom-2 left-2"></div>
            </div>
          </div>
          <span
            className={`font-bold text-lg tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-foreground"
            }`}
          >
            EFFITECH
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1); // Remove # from href
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isScrolled
                    ? isActive
                      ? "text-primary"
                      : "text-muted-foreground"
                    : isActive
                    ? "text-primary"
                    : "text-foreground"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                {/* Active indicator */}
                <div
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-50"
                  }`}
                ></div>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`rounded-full transition-colors duration-300 ${
              isScrolled 
                ? "hover:bg-muted text-foreground" 
                : "hover:bg-muted text-foreground"
            }`}
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`rounded-full transition-colors duration-300 ${
              isScrolled
                ? "hover:bg-muted text-foreground"
                : "hover:bg-muted text-foreground"
            }`}
          >
            {mounted && theme === "dark" ? (
              <Sun className="size-[18px]" />
            ) : (
              <Moon className="size-[18px]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`transition-colors duration-300 ${
              isScrolled
                ? "hover:bg-muted text-foreground"
                : "hover:bg-muted text-foreground"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-20 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-border/20"
        >
          <div className="container py-6 px-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-border/20">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}