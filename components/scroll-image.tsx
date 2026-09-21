"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";

export function ScrollImage({
  className,
  label,
  src
}: {
  className: string;
  label: ReactNode;
  src?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [1, 1, 1] : [0.96, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [22, -22]);

  return (
    <motion.div ref={ref} className={className} style={{ scale, y }}>
      {src ? <Image className="project-image" src={src} alt={typeof label === "string" ? label : ""} fill sizes="(max-width: 700px) 100vw, 50vw" /> : null}
      {!src ? <span>{label}</span> : null}
      {!src ? <small>Replace with final image</small> : null}
    </motion.div>
  );
}
