"use client";

import { useTheme } from "next-themes";
import LogoScroller, { LogoItem } from "./LogoScroller";
import { motion } from "framer-motion";

const LOGOS: LogoItem[] = [
  { 
    name: "Microsoft", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    website: "https://microsoft.com"
  },
  { 
    name: "Google", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    website: "https://google.com"
  },
  { 
    name: "Amazon", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    website: "https://amazon.com"
  },
  { 
    name: "Meta", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    website: "https://meta.com"
  },
  { 
    name: "Apple", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    website: "https://apple.com"
  },
  { 
    name: "Netflix", 
    logo: "https://images.ctfassets.net/y2ske4ux9b5k/821Nms9kJBqJHDCT4YQQ9G/8ffeab74f9a56e69b4b8f28e3ce1e8b5/netflix-logo.svg",
    website: "https://netflix.com"
  },
  { 
    name: "Spotify", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    website: "https://spotify.com"
  },
  { 
    name: "Slack", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    website: "https://slack.com"
  },
];

export default function LogosSection() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 border-y  bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background   from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          {/* Header */}
          <div className="space-y-2">
            <motion.p 
              className="text-sm font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Trusted by innovative companies worldwide
            </motion.p>
            <motion.h2 
              className="text-lg font-semibold text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join 12,653+ organizations already using our solutions
            </motion.h2>
          </div>

          {/* Logo scroller */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LogoScroller 
              items={LOGOS} 
              speed="normal"
              direction="left"
              pauseOnHover={true}
              showGradient={true}
              className="py-4"
            />
          </motion.div>

          {/* Additional info */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Enterprise Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}