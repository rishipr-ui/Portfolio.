"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.08 });
    return () => lenis.destroy();
  }, []);

  return null;
}
