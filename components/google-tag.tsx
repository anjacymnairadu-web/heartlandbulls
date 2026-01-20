"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function GoogleTagPageView({ googleTagId }: { googleTagId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!googleTagId) return;
    if (typeof window === "undefined") return;

    const qs = window.location.search || "";
    const page_path = `${pathname}${qs}`;

    window.gtag?.("config", googleTagId, { page_path });
  }, [googleTagId, pathname]);

  return null;
}


