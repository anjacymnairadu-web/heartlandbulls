"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type AnimationVariant =
  | "fade"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "flip"
  | "wipe"
  | "wipe-right"

type AnimatedImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "loading"> & {
  /** If true, disables animation and renders normally */
  disableAnimation?: boolean
  /** Subtle animation style when entering viewport */
  variant?: AnimationVariant
  /** Classes applied to the animated wrapper (use this for borders/rounded/bg so the frame animates too) */
  containerClassName?: string
}

export function AnimatedImage({
  className,
  disableAnimation = false,
  variant = "wipe",
  containerClassName,
  ...props
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(disableAnimation)

  const variantClasses = useMemo(() => {
    const base = "opacity-0"
    switch (variant) {
      case "fade":
        return { wrapperFrom: base, wrapperTo: "opacity-100", imgFrom: "", imgTo: "" }
      case "slide-left":
        return {
          wrapperFrom: `${base} translate-x-4`,
          wrapperTo: "opacity-100 translate-x-0",
          imgFrom: "",
          imgTo: "",
        }
      case "slide-right":
        return {
          wrapperFrom: `${base} -translate-x-4`,
          wrapperTo: "opacity-100 translate-x-0",
          imgFrom: "",
          imgTo: "",
        }
      case "flip":
        // Perspective helps the rotation feel natural; keep it subtle.
        return {
          wrapperFrom: `${base} [transform:perspective(900px)_rotateY(-10deg)]`,
          wrapperTo: "opacity-100 [transform:perspective(900px)_rotateY(0deg)]",
          imgFrom: "",
          imgTo: "",
        }
      case "wipe":
        return {
          wrapperFrom: `${base} [clip-path:inset(0_100%_0_0)]`,
          wrapperTo: "opacity-100 [clip-path:inset(0_0_0_0)]",
          imgFrom: "scale-[1.02]",
          imgTo: "scale-100",
        }
      case "wipe-right":
        return {
          wrapperFrom: `${base} [clip-path:inset(0_0_0_100%)]`,
          wrapperTo: "opacity-100 [clip-path:inset(0_0_0_0)]",
          imgFrom: "scale-[1.02]",
          imgTo: "scale-100",
        }
      case "slide-up":
      default:
        return {
          wrapperFrom: `${base} translate-y-4`,
          wrapperTo: "opacity-100 translate-y-0",
          imgFrom: "",
          imgTo: "",
        }
    }
  }, [variant])

  useEffect(() => {
    if (disableAnimation) return
    // Safety: if IntersectionObserver isn't available, just show immediately.
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setInView(true)
      return
    }
    const el = ref.current
    if (!el) return

    const isVisible = () => {
      const rect = el.getBoundingClientRect()
      return rect.bottom > 0 && rect.top < window.innerHeight
    }

    // If the element is already in the viewport on first paint, reveal immediately (still animates via transitions).
    // This avoids "invisible forever" issues when IntersectionObserver is flaky.
    if (isVisible()) {
      requestAnimationFrame(() => setInView(true))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    )

    observer.observe(el)

    // Extra safety: scroll/resize fallback (some environments throttle/skip IntersectionObserver callbacks).
    let raf: number | null = null
    const onScrollOrResize = () => {
      if (raf != null) return
      raf = window.requestAnimationFrame(() => {
        raf = null
        if (isVisible()) {
          setInView(true)
          cleanup()
        }
      })
    }

    const cleanup = () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScrollOrResize, { passive: true } as any)
      window.removeEventListener("resize", onScrollOrResize)
      window.removeEventListener("orientationchange", onScrollOrResize)
      if (raf != null) window.cancelAnimationFrame(raf)
      raf = null
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true } as any)
    window.addEventListener("resize", onScrollOrResize)
    window.addEventListener("orientationchange", onScrollOrResize)

    return cleanup
  }, [disableAnimation])

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full overflow-hidden",
        containerClassName,
        disableAnimation
          ? ""
          : [
              "will-change-transform",
              "transition-[clip-path,opacity,transform] duration-700 ease-out",
              "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
              inView ? variantClasses.wrapperTo : variantClasses.wrapperFrom,
            ].join(" "),
      )}
    >
      <img
        loading="lazy"
        decoding="async"
        className={cn(
          className,
          disableAnimation
            ? ""
            : [
                "will-change-transform",
                "transition-transform duration-700 ease-out",
                "motion-reduce:transition-none motion-reduce:transform-none",
                inView ? variantClasses.imgTo : variantClasses.imgFrom,
              ].join(" "),
        )}
        {...props}
      />
    </div>
  )
}


