// components/services-section/constants.ts
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
} from "lucide-react";
import type { Service } from "./types";

export const SERVICES: readonly Service[] = [
  {
    id: "compressor-technology",
    title: "Industrial Compressor Solutions",
    description:
      "High-tech compressor systems and eco-friendly technologies for industrial and commercial applications with energy efficiency focus.",
    icon: "Settings",
    features: [
      "Energy-efficient compressors",
      "Eco-friendly technologies",
      "Custom compressor design",
      "Maintenance solutions",
    ],
    category: "High-Tech Solutions",
    highlight: "Energy Efficient",

    detailedDescription:
      "Our industrial compressor solutions represent the pinnacle of engineering excellence, combining cutting-edge technology with environmental responsibility. We design, install, and maintain energy-efficient compressor systems that reduce operational costs while minimizing environmental impact.",

    keyBenefits: [
      {
        title: "Energy Efficiency",
        description:
          "Reduce energy consumption by up to 40% with our advanced compressor technologies",
        metric: "40% savings",
      },
      {
        title: "Reliability",
        description:
          "99.5% uptime guaranteed with our premium maintenance packages",
        metric: "99.5% uptime",
      },
      {
        title: "Environmental Impact",
        description:
          "Eco-friendly refrigerants and technologies that reduce carbon footprint",
        metric: "50% less CO2",
      },
    ],

    technicalFeatures: [
      {
        title: "Variable Speed Drives",
        description:
          "Advanced VSD technology that adjusts compressor speed based on demand",
        icon: Gauge,
      },
      {
        title: "Smart Controls",
        description:
          "IoT-enabled monitoring and control systems for optimal performance",
        icon: Zap,
      },
      {
        title: "Preventive Maintenance",
        description:
          "Predictive maintenance using AI algorithms to prevent breakdowns",
        icon: Wrench,
      },
    ],

    technologies: [
      {
        name: "Oil-Free Compressors",
        description: "Advanced oil-free technology for critical applications",
        advantage: "100% contaminant-free compressed air",
      },
      {
        name: "Magnetic Bearing Technology",
        description: "Contactless magnetic bearings for maximum efficiency",
        advantage: "Zero maintenance, maximum efficiency",
      },
    ],

    caseStudies: [
      {
        title: "Manufacturing Plant Efficiency Upgrade",
        description:
          "Complete compressor system overhaul reducing energy costs by 45%",
        location: "Algiers Industrial Zone",
        year: "2024",
        client: "Major Manufacturing Facility",
      },
      {
        title: "Food Processing Facility",
        description:
          "Oil-free compressor installation ensuring food safety compliance",
        location: "Oran",
        year: "2023",
        client: "Food Processing Company",
      },
    ],

    contactTitle: "Ready to Optimize Your Compressor Systems?",
    contactDescription:
      "Get a free assessment of your current setup and discover how much you can save with our energy-efficient solutions.",
    projectTypes: [
      "New compressor installation",
      "System upgrade/retrofit",
      "Maintenance contract",
      "Energy efficiency audit",
      "Emergency repair service",
    ],
  },

  {
    id: "renewable-energy",
    title: "Renewable Energy Integration",
    description:
      "Leading the transition to clean energy with cutting-edge solar, wind, and hybrid power solutions for sustainable development.",
    icon: "Leaf",
    features: [
      "Solar installation systems",
      "Wind power integration",
      "Energy storage solutions",
      "Hybrid power systems",
    ],
    category: "Green Technology",
    highlight: "Sustainable Solutions",

    detailedDescription:
      "As Algeria moves toward a sustainable energy future, EFFI TECH is at the forefront of renewable energy integration. Our comprehensive solutions encompass solar photovoltaic systems, wind power integration, energy storage solutions, and smart grid technologies.",

    keyBenefits: [
      {
        title: "Energy Independence",
        description:
          "Reduce reliance on grid electricity with self-sufficient renewable systems",
        metric: "80% independence",
      },
      {
        title: "Cost Savings",
        description: "Significant reduction in electricity bills with fast ROI",
        metric: "3-5 year ROI",
      },
      {
        title: "Environmental Impact",
        description: "Dramatically reduce carbon footprint with clean energy",
        metric: "Zero emissions",
      },
    ],

    technicalFeatures: [
      {
        title: "Solar PV Systems",
        description:
          "High-efficiency photovoltaic panels with maximum power point tracking",
        icon: Sun,
      },
      {
        title: "Wind Power Integration",
        description:
          "Small to medium-scale wind turbines for optimal energy harvesting",
        icon: Wind,
      },
      {
        title: "Battery Storage",
        description: "Advanced lithium-ion and flow battery storage solutions",
        icon: Battery,
      },
    ],

    technologies: [
      {
        name: "Bifacial Solar Panels",
        description: "Advanced panels that capture light from both sides",
        advantage: "Up to 30% more energy generation",
      },
      {
        name: "Energy Management Systems",
        description:
          "AI-powered optimization of energy production and consumption",
        advantage: "Intelligent load management",
      },
    ],

    caseStudies: [
      {
        title: "Commercial Solar Installation",
        description: "500kW solar array providing 70% of facility energy needs",
        location: "Constantine Business Park",
        year: "2024",
        client: "Commercial Complex",
      },
      {
        title: "Hybrid Wind-Solar System",
        description:
          "Combined renewable system for rural community electrification",
        location: "Tamanrasset Region",
        year: "2023",
        client: "Rural Development Project",
      },
    ],

    contactTitle: "Ready to Go Renewable?",
    contactDescription:
      "Discover how renewable energy can reduce your costs and environmental impact. Get a free site assessment today.",
    projectTypes: [
      "Solar PV installation",
      "Wind power system",
      "Hybrid renewable system",
      "Energy storage addition",
      "Grid-tie system upgrade",
    ],
  },

  {
    id: "consulting",
    title: "Engineering Consulting",
    description:
      "Expert electrical engineering consultation services helping businesses make informed decisions about their electrical infrastructure.",
    icon: "Target",
    features: [
      "System design consultation",
      "Energy efficiency audits",
      "Technical feasibility studies",
      "Project management",
    ],
    category: "Expert Services",
    highlight: "Professional Expertise",

    detailedDescription:
      "EFFI TECH's engineering consulting services provide businesses with the expert guidance needed to navigate complex electrical infrastructure decisions. Our team of certified electrical engineers brings decades of combined experience to help you optimize your electrical systems.",

    keyBenefits: [
      {
        title: "Expert Knowledge",
        description:
          "Access to specialized electrical engineering expertise and industry insights",
        metric: "10+ years experience",
      },
      {
        title: "Cost Optimization",
        description:
          "Identify cost-saving opportunities and avoid expensive mistakes",
        metric: "20-40% savings",
      },
      {
        title: "Risk Mitigation",
        description:
          "Identify and address potential issues before they become problems",
        metric: "Risk-free projects",
      },
    ],

    technicalFeatures: [
      {
        title: "Load Analysis",
        description:
          "Comprehensive electrical load analysis and demand forecasting",
        icon: BarChart,
      },
      {
        title: "System Design",
        description:
          "Detailed electrical system design and engineering drawings",
        icon: Cog,
      },
      {
        title: "Safety Assessment",
        description: "Electrical safety audits and arc flash studies",
        icon: Shield,
      },
    ],

    technologies: [
      {
        name: "ETAP Power Systems",
        description:
          "Advanced electrical system analysis and modeling software",
        advantage: "Precise load flow and fault analysis",
      },
      {
        name: "Energy Monitoring Systems",
        description: "Real-time energy monitoring and analysis tools",
        advantage: "Data-driven efficiency insights",
      },
    ],

    caseStudies: [
      {
        title: "Industrial Facility Power Study",
        description:
          "Comprehensive electrical system analysis reducing downtime by 80%",
        location: "Skikda Industrial Complex",
        year: "2024",
        client: "Petrochemical Facility",
      },
      {
        title: "Hospital Electrical Upgrade",
        description: "Critical power system design ensuring 99.99% reliability",
        location: "Algiers Medical Center",
        year: "2023",
        client: "Healthcare Facility",
      },
    ],

    contactTitle: "Need Expert Electrical Engineering Advice?",
    contactDescription:
      "Get professional consultation from our certified electrical engineers. Schedule a consultation to discuss your project needs.",
    projectTypes: [
      "Feasibility study",
      "System design consultation",
      "Energy efficiency audit",
      "Safety assessment",
      "Project management",
      "Regulatory compliance review",
    ],
  },
] as const;
