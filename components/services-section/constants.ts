// components/services-section/constants.ts
import {
  Gauge,
  Zap,
  Wrench,
  BarChart,
  Battery,
  Wind,
  Sun,
  Cog,
  Shield,
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
    ],

    caseStudies: [
     
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
      "As Algeria moves toward a sustainable energy future, EFFI TECH is at the forefront of renewable energy integration. Our comprehensive solutions encompass advanced energy storage systems, smart grid technologies, and innovative power management solutions",

    keyBenefits: [
      {
        title: "Energy Independence",
        description:
          "Lower reliance on grid electricity through efficient systems that maximize performance and minimize consumption.",
        metric: "Reduced Grid Dependence",
      },
      {
        title: "Cost Savings",
        description: "Significant reduction in electricity bills with fast ROI",
        metric: "3-5 year ROI",
      },
      {
        title: "Environmental Impact",
        description: "Significantly reduce carbon footprint through cleaner, more efficient energy solutions.",
        metric: "Environmental Impact",
      },
    ],

    technicalFeatures: [
      {
        title: "High-Efficiency Power Systems",
        description:
          "Advanced energy generation technologies designed for maximum performance and minimal losses.",
        icon: Sun,
      },
      {
        title: "Low-Maintenance Operation Durable",
        description:
          "Streamlined systems engineered to reduce servicing needs and downtime.",
        icon: Wind,
      },
      {
        title: "Cost-Optimized Performance",
        description: "Solutions that lower operating expenses over time through improved efficiency and extended lifespan.",
        icon: Battery,
      },
    ],

    technologies: [
      // {
      //   name: "Bifacial Solar Panels",
      //   description: "Advanced panels that capture light from both sides",
      //   advantage: "Up to 30% more energy generation",
      // },
      // {
      //   name: "Energy Management Systems",
      //   description:
      //     "AI-powered optimization of energy production and consumption",
      //   advantage: "Intelligent load management",
      // },
    ],

    caseStudies: [
      // {
      //   title: "Commercial Solar Installation",
      //   description: "500kW solar array providing 70% of facility energy needs",
      //   location: "Constantine Business Park",
      //   year: "2024",
      //   client: "Commercial Complex",
      // },
      // {
      //   title: "Hybrid Wind-Solar System",
      //   description:
      //     "Combined renewable system for rural community electrification",
      //   location: "Tamanrasset Region",
      //   year: "2023",
      //   client: "Rural Development Project",
      // },
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
     
    ],

    caseStudies: [
    
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
