"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HighlightText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "center 0.46"]
  });
  const color = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    reducedMotion ? ["inherit", "inherit", "inherit"] : ["rgba(183,183,176,.62)", "#f0eee8", "#e2a34a"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], reducedMotion ? [1, 1, 1] : [0.68, 1, 1]);

  return (
    <motion.span ref={ref} className="scroll-highlight" style={{ color, opacity }}>
      {children}
    </motion.span>
  );
}
