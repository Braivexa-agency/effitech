// constants/contact.ts
import { 
    Users, 
    Clock, 
    Shield, 
    Award,
    Zap,
    CheckCircle
  } from 'lucide-react';
  import type { ProjectType, TrustIndicator, ContactInfo, EmailServiceConfig } from '@/components/cta-section/types';
  
  export const PROJECT_TYPES: readonly ProjectType[] = [
    { 
      value: "power-systems", 
      label: "Power Systems Design",
      description: "Electrical power distribution and generation systems"
    },
    { 
      value: "industrial-automation", 
      label: "Industrial Automation",
      description: "Process control and automation solutions"
    },
    { 
      value: "renewable-energy", 
      label: "Renewable Energy",
      description: "Solar, wind, and sustainable energy systems"
    },
    { 
      value: "building-electrical", 
      label: "Building Electrical Systems",
      description: "Commercial and residential electrical installations"
    },
    { 
      value: "maintenance", 
      label: "Maintenance & Support",
      description: "Ongoing maintenance and technical support"
    },
    { 
      value: "consultation", 
      label: "Technical Consultation",
      description: "Expert advice and system analysis"
    },
    { 
      value: "other", 
      label: "Other",
      description: "Custom electrical engineering solutions"
    },
  ] as const;
  
  export const TRUST_INDICATORS: readonly TrustIndicator[] = [
    { 
      icon: Users, 
      text: "Expert Engineers", 
      color: "text-green-500",
      description: "Certified electrical engineers with 10+ years experience"
    },
    { 
      icon: Clock, 
      text: "24/7 Support", 
      color: "text-orange-500",
      description: "Round-the-clock technical support and emergency services"
    },
    { 
      icon: Shield, 
      text: "Safety Compliant", 
      color: "text-purple-500",
      description: "All installations meet international safety standards"
    },
    { 
      icon: Award, 
      text: "Quality Assured", 
      color: "text-blue-500",
      description: "ISO certified processes and premium components"
    },
  ] as const;
  
  export const CONTACT_INFO: ContactInfo = {
    phone: "+213662284649",
    email: "info@effi-tech.net",
    address: "Blida, Algeria"
  } as const;
  
  // Email service configuration
  export const EMAIL_CONFIG: EmailServiceConfig = {
    provider: 'emailjs', // Change to your preferred provider
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    apiKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  } as const;
  
  // Form validation patterns
  export const VALIDATION_PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+213|0)[5-7][0-9]{8}$/, // Algerian phone numbers
    name: /^[a-zA-ZÀ-ÿ\s]{2,50}$/, // Allow accented characters
  } as const;
  
  // Form field constraints
  export const FIELD_CONSTRAINTS = {
    name: { minLength: 2, maxLength: 50 },
    email: { maxLength: 100 },
    phone: { maxLength: 20 },
    company: { maxLength: 100 },
    message: { minLength: 10, maxLength: 1000 },
  } as const;
  
  // Rate limiting
  export const RATE_LIMIT = {
    maxSubmissions: 3,
    timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
  } as const;
  
  // Google Sheets configuration (optional)
  export const GOOGLE_SHEETS_CONFIG = {
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY,
    range: 'Contact Form!A:G', // Adjust based on your sheet
  } as const;