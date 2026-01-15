"use client";

import type React from "react";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** HTML tag to render */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   * Animation mode:
   * - "auto": words on mobile+tablet, chars on desktop (xl+)
   * - "chars": always character-by-character
   * - "words": word-by-word
   */
  mode?: "auto" | "chars" | "words";
  /** Delay before starting (ms) */
  delayMs?: number;
  /** Per-character stagger (ms) */
  staggerMs?: number;
  /** If true, disables animation */
  disableAnimation?: boolean;
};

export function AnimatedText({
  text,
  className,
  as = "span",
  mode = "auto",
  delayMs = 0,
  staggerMs = 35,
  disableAnimation = false,
}: AnimatedTextProps) {
  const Comp = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(disableAnimation);

  // Split by spaces so the browser can wrap normally on responsive layouts,
  // while still animating characters within each word.
  const words = useMemo(() => text.split(" "), [text]);

  const [resolvedMode, setResolvedMode] = useState<"chars" | "words">(() => {
    if (mode === "words") return "words";
    if (mode === "chars") return "chars";
    // default for SSR / first render: words (safer for wrapping)
    return "words";
  });

  useEffect(() => {
    if (mode !== "auto") {
      setResolvedMode(mode === "words" ? "words" : "chars");
      return;
    }
    if (typeof window === "undefined") return;

    // Desktop (xl+) + fine pointer => chars; otherwise => words.
    // This prevents iPads in "desktop width" mode from using desktop animation.
    const mqDesktop = window.matchMedia(
      "(min-width: 1280px) and (pointer: fine)"
    );
    const update = () => setResolvedMode(mqDesktop.matches ? "chars" : "words");
    update();
    mqDesktop.addEventListener?.("change", update);
    return () => mqDesktop.removeEventListener?.("change", update);
  }, [mode]);

  useEffect(() => {
    if (disableAnimation) return;
    const el = ref.current;
    if (!el) return;

    const isVisibleNow = () => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    };

    // Ensure the heading animates even on browsers/devices where IntersectionObserver
    // can be flaky. If it's already visible, reveal after a short delay so the
    // initial "hidden" styles have a chance to paint first.
    let fallbackTimer: number | null = null;
    if (typeof window !== "undefined" && isVisibleNow()) {
      fallbackTimer = window.setTimeout(() => setInView(true), 40);
    }

    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      setInView(true);
      return () => {
        if (fallbackTimer != null) window.clearTimeout(fallbackTimer);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (fallbackTimer != null) window.clearTimeout(fallbackTimer);
    };
  }, [disableAnimation]);

  return (
    <Comp ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {resolvedMode === "words"
        ? words.map((word, wordIndex) => {
            const globalIndex = words.slice(0, wordIndex).length + wordIndex;
            return (
              <span key={`${word}-${wordIndex}`} className="inline">
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-block",
                    disableAnimation
                      ? ""
                      : "will-change-transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                    inView || disableAnimation
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  )}
                  style={
                    disableAnimation
                      ? undefined
                      : ({
                          transitionDelay: `${
                            delayMs + globalIndex * Math.max(staggerMs, 110)
                          }ms`,
                        } as React.CSSProperties)
                  }
                >
                  {word}
                </span>
                {wordIndex < words.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="inline-block w-[0.35em]"
                  />
                ) : null}
              </span>
            );
          })
        : words.map((word, wordIndex) => {
            const chars = Array.from(word);
            const baseCharIndex =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) +
              wordIndex; // + spaces

            return (
              <span key={`${word}-${wordIndex}`} className="inline">
                <span className="inline-block">
                  {chars.map((ch, i) => {
                    const globalIndex = baseCharIndex + i;
                    return (
                      <span
                        key={`${ch}-${wordIndex}-${i}`}
                        aria-hidden="true"
                        className={cn(
                          "inline-block",
                          disableAnimation
                            ? ""
                            : "will-change-transform transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                          inView || disableAnimation
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        )}
                        style={
                          disableAnimation
                            ? undefined
                            : ({
                                transitionDelay: `${
                                  delayMs + globalIndex * staggerMs
                                }ms`,
                              } as React.CSSProperties)
                        }
                      >
                        {ch}
                      </span>
                    );
                  })}
                </span>
                {wordIndex < words.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="inline-block w-[0.35em]"
                  />
                ) : null}
              </span>
            );
          })}
    </Comp>
  );
}
