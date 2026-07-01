"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Small hand-drawn SVG arrow variants
function ArrowSvg({ direction = "down" }: { direction?: "down" | "right" | "left" | "up" }) {
  const paths: Record<string, string> = {
    down:  "M8 2 Q8 14 8 20 M4 16 Q8 22 12 16",
    right: "M2 10 Q14 10 20 10 M16 6 Q22 10 16 14",
    left:  "M22 10 Q10 10 4 10 M8 6 Q2 10 8 14",
    up:    "M8 22 Q8 10 8 4 M4 8 Q8 2 12 8",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
      className="inline-block shrink-0"
    >
      <path d={paths[direction]} />
    </svg>
  );
}

// Each note gets a stable small rotation based on its `rotate` prop so
// re-renders don't make it jump. Caller passes the value explicitly.
interface HandwrittenNoteProps {
  children: React.ReactNode;
  /** signed degrees, e.g. -2 or 3 */
  rotate?: number;
  arrow?: "down" | "right" | "left" | "up" | false;
  arrowPosition?: "before" | "after";
  className?: string;
  /** animate reveal on enter viewport? */
  animate?: boolean;
  delay?: number;
}

export default function HandwrittenNote({
  children,
  rotate = -1.5,
  arrow = false,
  arrowPosition = "after",
  className,
  animate = true,
  delay = 0,
}: HandwrittenNoteProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  const inner = (
    <span className="flex items-center gap-1.5 leading-snug">
      {arrow && arrowPosition === "before" && <ArrowSvg direction={arrow} />}
      <span>{children}</span>
      {arrow && arrowPosition === "after" && <ArrowSvg direction={arrow} />}
    </span>
  );

  if (!animate) {
    return (
      <span
        className={cn("handwritten inline-block text-xl text-ink", className)}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        {inner}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn("handwritten inline-block text-xl text-ink", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {inner}
    </motion.span>
  );
}
