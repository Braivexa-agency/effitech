export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    projectType: string;
    rating: number;
  }
  
export const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      quote: "EFFI TECH transformed our manufacturing facility with their industrial automation solutions. The 45% efficiency increase exceeded our expectations.",
      author: "Ahmed Mansouri",
      role: "Plant Manager",
      company: "Algeria Steel Industries",
      projectType: "Industrial Automation",
      rating: 5,
    },
    {
      id: "testimonial-2", 
      quote: "The renewable energy integration project was flawless. EFFI TECH delivered a 50MW solar installation that reduced our energy costs by 40%.",
      author: "Fatima Benali",
      role: "Energy Director",
      company: "Sonatrach Complex",
      projectType: "Renewable Energy",
      rating: 5,
    },
    {
      id: "testimonial-3",
      quote: "Their electrical safety audit was comprehensive. EFFI TECH's ISO-compliant solutions ensure our facility meets all international standards.",
      author: "Karim Ouali",
      role: "Operations Manager",
      company: "Cevital Group",
      projectType: "Safety Systems",
      rating: 5,
    },
    {
      id: "testimonial-4",
      quote: "The industrial compressor solutions are exceptional. Their eco-friendly technology reduced our energy consumption significantly.",
      author: "Nadia Chebli",
      role: "Technical Director",
      company: "FERTIAL",
      projectType: "Compressor Technology",
      rating: 5,
    },
    {
      id: "testimonial-5",
      quote: "EFFI TECH's systematic approach impressed us. Their precision engineering resulted in a power distribution system that works flawlessly.",
      author: "Youcef Brahimi",
      role: "Facility Manager",
      company: "Condor Electronics",
      projectType: "Power Systems",
      rating: 5,
    },
    {
      id: "testimonial-6",
      quote: "EFFI TECH doesn't just supply products—they implement complete systems that work. Their consulting optimized our entire infrastructure.",
      author: "Amina Kaci",
      role: "Chief Engineer",
      company: "Algerian Petroleum Institute",
      projectType: "Engineering Consulting",
      rating: 5,
    },
    {
      id: "testimonial-7",
      quote: "Outstanding project management and technical expertise. EFFI TECH delivered our electrical upgrade on time and under budget.",
      author: "Hassan Benkhaled",
      role: "Project Director",
      company: "Air Algérie",
      projectType: "Infrastructure Upgrade",
      rating: 5,
    },
    {
      id: "testimonial-8",
      quote: "The maintenance contracts with EFFI TECH give us peace of mind. Their 24/7 support ensures our operations never stop.",
      author: "Leila Zahra",
      role: "Operations Chief",
      company: "Arzew Industrial Complex",
      projectType: "Maintenance Services",
      rating: 5,
    },
  ];