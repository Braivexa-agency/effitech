"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import styles from "./logos-scroll.module.css"

export type LogoItem = {
  name: string
  logo: string
}

export default function LogoScroller({ items }: { items: LogoItem[] }) {
  const { theme } = useTheme()
  // Fix hydration: only render theme-dependent filter after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroller}>
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className={styles.logoItem}>
            <Image
              src={item.logo}
              alt={item.name}
              width={120}
              height={60}
              className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              style={mounted && theme === "dark" ? { filter: "invert(1) grayscale(1) opacity(0.7)" } : { filter: "grayscale(1) opacity(0.7)" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.scroller} aria-hidden="true">
        {[...items, ...items].map((item, idx) => (
          <div key={"clone-" + idx} className={styles.logoItem}>
            <Image
              src={item.logo}
              alt=""
              width={120}
              height={60}
              className="h-8 w-auto opacity-70 grayscale"
              style={mounted && theme === "dark" ? { filter: "invert(1) grayscale(1) opacity(0.7)" } : { filter: "grayscale(1) opacity(0.7)" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
