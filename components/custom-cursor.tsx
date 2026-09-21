"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "interactive" | "view";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -40, y: -40 });
  const current = useRef({ x: -40, y: -40 });
  const frame = useRef<number | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches || navigator.maxTouchPoints > 0;

    if (reducedMotion || touchDevice) return;

    document.body.classList.add("custom-cursor-active");

    const handlePointerMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      const interactive = (event.target as Element | null)?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      );
      const nextMode = interactive?.getAttribute("data-cursor") === "view" ? "view" : interactive ? "interactive" : "default";
      setMode((previous) => (previous === nextMode ? previous : nextMode));
    };

    const handlePointerLeave = () => {
      target.current.x = -40;
      target.current.y = -40;
      setMode("default");
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      cursorRef.current?.style.setProperty(
        "transform",
        `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      );
      frame.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    frame.current = window.requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor custom-cursor-${mode}`} aria-hidden="true">
      {mode === "view" ? <span>View</span> : null}
    </div>
  );
}
