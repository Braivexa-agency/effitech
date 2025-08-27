import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Zap, Mail } from "lucide-react";
import { scrollButtonVariants, hoverVariants } from "../footer-animations";

// Types
interface Contact {
  type: string;
  label: string;
  href?: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Certification {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

// FooterLogo Component
interface FooterLogoProps {
  companyName: string;
  tagline: string;
  description: string;
}

export function FooterLogo({ companyName, tagline, description }: FooterLogoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-xl blur opacity-75"></div>
          <div className="relative size-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
            <Zap className="size-6" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {tagline}
            </p>
          </div>
        
        </div>
      </div>
      
      <p className="text-base text-muted-foreground leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  );
}

// ContactInfo Component
interface ContactInfoProps {
  contacts: Contact[];
}

export function ContactInfo({ contacts }: ContactInfoProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold text-foreground mb-4">Contact Information</h4>
      
      <div className="space-y-3">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          
          if (contact.type === "address") {
            return (
              <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="size-4" />
                </div>
                <div>
                  <p>{contact.label}</p>
                  {contact.subtitle && (
                    <p className="text-xs">{contact.subtitle}</p>
                  )}
                </div>
              </div>
            );
          }

          return (
            <a 
              key={index}
              href={contact.href} 
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <IconComponent className="size-4" />
              </div>
              <span>{contact.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Certifications Component
interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold text-foreground">Certifications</h4>
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <Badge key={index} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
              <IconComponent className="size-3 mr-1" />
              {cert.label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

// SocialMedia Component
interface SocialMediaProps {
  links: SocialLink[];
}

export function SocialMedia({ links }: SocialMediaProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-bold text-foreground">Follow Us</h4>
      <div className="flex gap-4">
        {links.map((social) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-muted-foreground ${social.color} transition-all duration-300 group`}
              variants={hoverVariants}
              whileHover="hover"
            >
              <IconComponent className="size-5" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

// Newsletter Component
export function Newsletter() {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-bold text-foreground">Stay Updated</h4>
      <div className="flex gap-2 max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm rounded-lg border border-primary/20 bg-background/50 focus:border-primary/50 focus:outline-none transition-colors"
        />
        <Button size="sm" className="px-4">
          <Mail className="size-4" />
        </Button>
      </div>
    </div>
  );
}

// TrustIndicators Component
interface TrustIndicatorsProps {
  indicators: TrustIndicator[];
}

export function TrustIndicators({ indicators }: TrustIndicatorsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-primary/20">
      {indicators.map((indicator, index) => {
        const IconComponent = indicator.icon;
        return (
          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
            <IconComponent className="size-3 text-primary" />
            <span>{indicator.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ScrollToTopButton Component
interface ScrollToTopButtonProps {
  show: boolean;
  onClick: () => void;
}

export function ScrollToTopButton({ show, onClick }: ScrollToTopButtonProps) {
  if (!show) return null;

  return (
    <motion.div
      variants={scrollButtonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={onClick}
        size="icon"
        className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="size-5" />
      </Button>
    </motion.div>
  );
}

// FooterBackground Component
export function FooterBackground() {
  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.02]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>
    </>
  );
}

// LegalLinks Component
interface LegalLinksProps {
  links: Array<{ name: string; href: string }>;
}

export function LegalLinks({ links }: LegalLinksProps) {
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <Link 
          key={link.name}
          href={link.href} 
          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

// FooterSection Component
interface FooterSectionProps {
  section: FooterSection;
  variants: any;
}

export function FooterSection({ section, variants }: FooterSectionProps) {
  return (
    <motion.div variants={variants} className="space-y-4">
      <h4 className="text-sm font-bold text-foreground">{section.title}</h4>
      <ul className="space-y-3">
        {section.links.map((link) => {
          const IconComponent = link.icon;
          return (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <IconComponent className="size-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}