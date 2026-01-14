"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type RevealVariant = "fade" | "slide-up" | "slide-left" | "slide-right" | "wipe" | "wipe-right"

type AnimatedRevealProps<T extends keyof React.JSX.IntrinsicElements> = {
  as?: T
  className?: string
  children: React.ReactNode
  /** If true, disables animation and renders normally */
  disableAnimation?: boolean
  /** Animation style when entering viewport */
  variant?: RevealVariant
  /** Delay in ms before starting the transition (per element) */
  delayMs?: number
}

export function AnimatedReveal<T extends keyof React.JSX.IntrinsicElements = "div">({
  as,
  className,
  children,
  disableAnimation = false,
  variant = "slide-up",
  delayMs = 0,
}: AnimatedRevealProps<T>) {
  const Comp = (as ?? "div") as any
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(disableAnimation)

  const classes = useMemo(() => {
    const base = "opacity-0"
    switch (variant) {
      case "fade":
        return { from: base, to: "opacity-100" }
      case "slide-left":
        return { from: `${base} translate-x-4`, to: "opacity-100 translate-x-0" }
      case "slide-right":
        return { from: `${base} -translate-x-4`, to: "opacity-100 translate-x-0" }
      case "wipe":
        return {
          from: `${base} [clip-path:inset(0_100%_0_0)]`,
          to: "opacity-100 [clip-path:inset(0_0_0_0)]",
        }
      case "wipe-right":
        return {
          from: `${base} [clip-path:inset(0_0_0_100%)]`,
          to: "opacity-100 [clip-path:inset(0_0_0_0)]",
        }
      case "slide-up":
      default:
        return { from: `${base} translate-y-4`, to: "opacity-100 translate-y-0" }
    }
  }, [variant])

  useEffect(() => {
    if (disableAnimation) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [disableAnimation])

  return (
    <Comp
      ref={ref}
      style={!disableAnimation ? ({ transitionDelay: `${delayMs}ms` } as React.CSSProperties) : undefined}
      className={cn(
        className,
        disableAnimation
          ? ""
          : [
              "overflow-hidden",
              "will-change-transform",
              "transition-all duration-700 ease-out",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
              inView ? classes.to : classes.from,
            ].join(" "),
      )}
    >
      {children}
    </Comp>
  )
}


