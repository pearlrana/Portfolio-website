"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Tape strip decoration (washi-tape style) ──────────────────────────────────
// Position with absolute on the parent (PaperCard is position:relative).
function TapeStrip({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute z-10 block h-5 w-14 rounded-[2px] opacity-60",
        "bg-[var(--color-beige)]",
        // subtle diagonal weave texture via a repeated svg
        className
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)",
      }}
    />
  );
}

// ── Folded corner (origami-paper feel) ───────────────────────────────────────
function FoldedCorner({ corner = "tr" }: { corner?: "tr" | "br" }) {
  const pos =
    corner === "tr"
      ? "top-0 right-0 border-b-[var(--color-paper)] border-l-[var(--color-beige)]"
      : "bottom-0 right-0 border-t-[var(--color-paper)] border-l-[var(--color-beige)]";
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-10 h-8 w-8",
        "border-[16px] border-solid border-transparent",
        pos
      )}
      style={{
        filter: "drop-shadow(-2px 2px 2px rgba(43,39,35,0.10))",
      }}
    />
  );
}

// ── PaperCard ────────────────────────────────────────────────────────────────
export type PaperCardVariant = "default" | "tape-top" | "tape-side" | "folded";

interface PaperCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: PaperCardVariant;
  /** disable the lift-on-hover animation entirely */
  noHover?: boolean;
  className?: string;
}

export default function PaperCard({
  children,
  variant = "default",
  noHover = false,
  className,
  ...rest
}: PaperCardProps) {
  return (
    <motion.div
      whileHover={
        noHover
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.28, ease: "easeOut" },
            }
      }
      className={cn(
        "relative rounded-2xl bg-[var(--color-paper-alt)] shadow-paper",
        "transition-shadow duration-300 hover:shadow-paper-lifted",
        "border border-[var(--color-hairline-soft)]",
        className
      )}
      {...rest}
    >
      {/* Tape strip decoration */}
      {variant === "tape-top" && (
        <TapeStrip className="-top-2 left-1/2 -translate-x-1/2 rotate-[-1.5deg]" />
      )}
      {variant === "tape-side" && (
        <TapeStrip className="top-6 -left-3 rotate-90" />
      )}

      {/* Folded corner */}
      {variant === "folded" && <FoldedCorner corner="tr" />}

      {children}
    </motion.div>
  );
}
