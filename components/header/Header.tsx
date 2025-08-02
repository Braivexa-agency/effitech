// Header.tsx
"use client";

import { useCallback, memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { MobileMenu, MobileMenuToggle } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { CTAButton } from "./CTAButton";
import { ContactInfo } from "./ContactInfo";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useActiveSection } from "./hooks/useActiveSection";
import { useMobileMenu } from "./hooks/useMobileMenu";
import { NAV_LINKS } from "./constants/navigation";
import type { HeaderProps } from "./types";

export const Header = memo<HeaderProps>(({ className = "" }) => {
  const { isScrolled, scrollY } = useScrollPosition();
  const { activeSection } = useActiveSection(NAV_LINKS, scrollY);
  const mobileMenu = useMobileMenu();

  // Smooth scroll handler
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;
        const offset = 20; // Additional offset for better UX

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        mobileMenu.close();

        // Update focus for accessibility
        setTimeout(() => {
          (targetElement as HTMLElement).focus({ preventScroll: true });
        }, 100);
      }
    },
    [mobileMenu]
  );

  return (
    <>
      <header
        className={`
          fixed top-0 z-50 w-full transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-primary/10"
              : "bg-transparent"
          }
          ${className}
        `}
        role="banner"
      >
        <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-3 sm:px-4 md:px-6">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <Navigation
            links={NAV_LINKS}
            activeSection={activeSection}
            isScrolled={isScrolled}
            onNavClick={handleNavClick}
          />

          {/* Desktop Actions */}
          <div className="hidden lg:flex gap-3 items-center">
            <ThemeToggle isScrolled={isScrolled} />

            {/* Contact info for larger screens */}
            <ContactInfo className="hidden xl:flex mr-4" />

            <CTAButton
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle isScrolled={isScrolled} />

            <MobileMenuToggle
              isOpen={mobileMenu.isOpen}
              onToggle={mobileMenu.toggle}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenu.isOpen}
        onClose={mobileMenu.close}
        links={NAV_LINKS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
});

Header.displayName = "Header";
