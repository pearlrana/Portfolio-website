"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyNoteColor = "blush" | "beige" | "taupe" | "paper";

const colorMap: Record<StickyNoteColor, string> = {
  blush:  "bg-[#f0d5d8]",
  beige:  "bg-[#e6ddd1]",
  taupe:  "bg-[#d4c4b0]",
  paper:  "bg-[var(--color-paper-alt)]",
};

interface StickyNoteProps {
  children: React.ReactNode;
  color?: StickyNoteColor;
  /** Initial rotation in degrees */
  rotate?: number;
  className?: string;
}

export default function StickyNote({
  children,
  color = "blush",
  rotate = 2,
  className,
}: StickyNoteProps) {
  return (
    <motion.div
      initial={{ rotate }}
      whileHover={{
        rotate: rotate * -0.5,
        scale: 1.04,
        transition: { type: "spring", stiffness: 300, damping: 18 },
      }}
      className={cn(
        "inline-block rounded-sm px-4 py-3",
        "shadow-[2px_3px_10px_rgba(43,39,35,0.12)]",
        "handwritten text-lg text-ink",
        colorMap[color],
        className
      )}
      // Sticky-note "peeled" top edge using a very faint gradient
      style={{
        backgroundImage:
          color === "blush"
            ? "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 18%)"
            : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}
