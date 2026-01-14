"use client";

import type React from "react";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  /** HTML tag to render */
  as?: keyof React.JSX.IntrinsicElements;
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

  useEffect(() => {
    if (disableAnimation) return;
    const el = ref.current;
    if (!el) return;

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
    return () => observer.disconnect();
  }, [disableAnimation]);

  return (
    <Comp ref={ref} className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, wordIndex) => {
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
              <span aria-hidden="true" className="inline-block w-[0.35em]" />
            ) : null}
          </span>
        );
      })}
    </Comp>
  );
}
