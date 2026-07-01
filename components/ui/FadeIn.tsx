"use client";

import { motion, useInView, type Variant } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

// Precomputed registry of motion-wrapped tags — avoids calling motion()
// (a component factory) during render, which resets internal state on
// every re-render. Extend this map if a new `as` tag is needed.
const motionComponents = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  li: motion.li,
  ul: motion.ul,
  p: motion.p,
} as const;

interface FadeInProps {
  children: ReactNode;
  /** Stagger delay in seconds (0 = no stagger) */
  delay?: number;
  /** y offset to animate from (default 20) */
  from?: number;
  /** Duration (default 0.6s) */
  duration?: number;
  /** Extra class names */
  className?: string;
  /** Root margin for InView trigger */
  margin?: `${string}%` | `${string}px` | string;
  /** HTML element to render (default "div") */
  as?: ElementType;
}

export default function FadeIn({
  children,
  delay = 0,
  from = 20,
  duration = 0.6,
  className,
  margin = "-8% 0px",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: margin as any });

  const hidden: Variant = { opacity: 0, y: from };
  const visible: Variant = { opacity: 1, y: 0 };

  const tagKey = (typeof Tag === "string" ? Tag : "div") as keyof typeof motionComponents;
  const MotionTag = (motionComponents[tagKey] ?? motionComponents.div) as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration, delay, ease: [0.22, 0.03, 0.26, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
