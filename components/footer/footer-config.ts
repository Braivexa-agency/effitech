import { 
    Zap, 
    Mail, 
    Phone, 
    MapPin, 
    Facebook, 
    Linkedin, 
    Instagram, 
    Twitter,
    Award,
    Shield,
    Clock,
    Building2,
    Users,
    Settings,
    Leaf,
    Target
  } from "lucide-react";
  
  // Main configuration object
  export const footerConfig = {
    companyName: "EFFI TECH",
    tagline: "Electrical Engineering Excellence",
    description: "Leading electrical engineering solutions for industrial projects across Algeria. We deliver innovative, sustainable, and reliable electrical systems and solutions for industrial projects.",
    foundedYear: 2025,
    brandIcon: Shield,
    
    contacts: [
      {
        type: "phone",
        label: "+213 662 28 46 49",
        href: "tel:+213662284649",
        icon: Phone
      },
      {
        type: "email", 
        label: "info@effi-tech.net",
        href: "mailto:info@effi-tech.net",
        icon: Mail
      },
      {
        type: "address",
        label: "Algiers, Algeria",
        subtitle: "Serving all major cities across Algeria",
        icon: MapPin
      }
    ],
  
    certifications: [
      {
        label: "Safety Certified",
        icon: Shield
      },
      {
        label: "Licensed Engineers", 
        icon: Zap
      }
    ],
  
    legalLinks: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Safety Policy", href: "#safety" }
    ],
  
    trustIndicators: [
      {
        icon: Clock,
        label: "Professional Support"
      },
      {
        icon: Shield,
        label: "Safety First Approach"
      },
      {
        icon: Award,
        label: "Expert Engineers"
      },
      {
        icon: Zap,
        label: "Sustainable Solutions"
      }
    ]
  };
  
  // Social media links
  export const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61578930523459", 
      color: "hover:text-blue-600" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/108296264/admin/dashboard/", 
      color: "hover:text-blue-500" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com/effitech", 
      color: "hover:text-pink-500" 
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://twitter.com/effitech", 
      color: "hover:text-blue-400" 
    },
  ];
  
  // Footer navigation sections
  export const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Industrial Compressor Solutions", href: "#services", icon: Settings },
        { name: "Renewable Energy Integration", href: "#services", icon: Leaf },
        { name: "Engineering Consulting", href: "#services", icon: Target },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about", icon: Users },
        { name: "Our Team", href: "#team", icon: Users },
        { name: "Certifications", href: "#certifications", icon: Award },
        { name: "Careers", href: "#careers", icon: Building2 },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Technical Documentation", href: "#docs", icon: Building2 },
        { name: "Project Portfolio", href: "#portfolio", icon: Award },
        { name: "Industry News", href: "#news", icon: Building2 },
        { name: "Support Center", href: "#support", icon: Clock },
        { name: "Contact Us", href: "#contact", icon: Mail },
      ]
    }
  ];