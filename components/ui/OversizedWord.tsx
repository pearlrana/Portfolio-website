"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface OversizedWordProps {
  word: string;
  /** Extra Tailwind classes — positioning, z-index, top/left adjustments */
  className?: string;
  /** 0–100: lower = more transparent. Default 18 */
  opacity?: number;
  /** Delay the fade-in (seconds). Default 0.1 */
  delay?: number;
}

/**
 * The large dusty-pink italic editorial word that sits *behind* section
 * content. Rendered absolutely — wrap in a `relative` positioned parent.
 *
 * It fades in gently when it enters the viewport, respects reduced-motion.
 *
 * Example:
 *   <div className="relative">
 *     <OversizedWord word="PROJECTS" className="top-0 left-0" />
 *     … real section content …
 *   </div>
 */
export default function OversizedWord({
  word,
  className,
  opacity = 18,
  delay = 0.1,
}: OversizedWordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.span
      ref={ref}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: opacity / 100 } : { opacity: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className={cn(
        "oversized-word absolute select-none pointer-events-none",
        // Responsive font-size: large on desktop, readable on mobile
        "text-[clamp(4rem,20vw,16rem)]",
        className
      )}
    >
      {word}
    </motion.span>
  );
}
