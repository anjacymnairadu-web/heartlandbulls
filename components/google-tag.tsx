"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function GoogleTagPageView({ googleTagId }: { googleTagId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!googleTagId) return;
    if (typeof window === "undefined") return;

    const qs = searchParams?.toString();
    const page_path = qs ? `${pathname}?${qs}` : pathname;

    window.gtag?.("config", googleTagId, { page_path });
  }, [googleTagId, pathname, searchParams]);

  return null;
}


