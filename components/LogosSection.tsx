"use client"

import { useTheme } from "next-themes"
import LogoScroller, { LogoItem } from "./LogoScroller"

const LOGOS: LogoItem[] = [
  { name: "Company 1", logo: "/placeholder-logo.svg" },
  { name: "Company 2", logo: "/placeholder-logo.svg" },
  { name: "Company 3", logo: "/placeholder-logo.svg" },
  { name: "Company 4", logo: "/placeholder-logo.svg" },
  { name: "Company 5", logo: "/placeholder-logo.svg" },
]

export default function LogosSection() {
  const { theme } = useTheme()

  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">Trusted by innovative companies worldwide</p>
          <LogoScroller items={LOGOS} />
        </div>
      </div>
    </section>
  )
}
