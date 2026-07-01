/**
 * components/illustrations/IllustrationFrame.tsx
 *
 * HOW ILLUSTRATIONS WORK IN THIS SITE
 * ─────────────────────────────────────
 * The illustration of Pearl is generated as standalone SVG files and placed in:
 *
 *   /public/illustrations/
 *     pearl-wave.svg       — cover page: waving, long hair loose
 *     pearl-typing.svg     — projects: seated, typing on laptop
 *     pearl-coffee.svg     — about: holding a mug, relaxed
 *     pearl-reading.svg    — skills: cross-legged, reading notes
 *     pearl-thinking.svg   — contact: looking sideways, chin on hand
 *
 * STYLE GUIDE FOR THE ILLUSTRATOR
 * ─────────────────────────────────
 *   Line weight:    1.5–2px, charcoal (#2b2723), soft ends
 *   Fill:           flat, muted — use palette below only
 *   Hair:           long, dark (near-black), straight-to-wavy, loose
 *   Face:           round, warm, minimal — 2-dot eyes, curve mouth, dot nose ring
 *   Clothing:       cosy / casual — think knit sweaters, jeans — keep it implied
 *   Palette:
 *     Skin          #e8c9a8
 *     Hair          #1a1311
 *     Clothing      any of: #c9bba3 / #d9a8ae / #a8907d / #f0d5d8
 *     Background    none (transparent SVG)
 *   NOT: anime, cartoon, over-detailed, photo-realistic, traced from photo
 *   STYLE REFERENCE: minimal fashion editorial sketch, slightly imperfect lines
 *
 * UNTIL ILLUSTRATIONS ARE READY
 * ──────────────────────────────
 * This component shows a clean labelled placeholder that communicates size
 * and position. Replace with a real <img> or inline SVG later by simply
 * dropping files into /public/illustrations/.
 */

import Image from "next/image";
import { cn } from "@/lib/utils";

export type IllustrationPose =
  | "pearl-wave"
  | "pearl-typing"
  | "pearl-coffee"
  | "pearl-reading"
  | "pearl-thinking";

const poseLabels: Record<IllustrationPose, string> = {
  "pearl-wave":     "Pearl — waving (cover)",
  "pearl-typing":   "Pearl — at laptop (projects)",
  "pearl-coffee":   "Pearl — holding coffee (about)",
  "pearl-reading":  "Pearl — reading notes (skills)",
  "pearl-thinking": "Pearl — thinking (contact)",
};

interface IllustrationFrameProps {
  pose: IllustrationPose;
  /** Rendered width in px (used by Next Image + placeholder sizing) */
  width?: number;
  /** Rendered height in px */
  height?: number;
  className?: string;
  /** alt text override — defaults to the pose label above */
  alt?: string;
  /** Set true to show the placeholder even if the SVG file exists (dev mode) */
  forcePlaceholder?: boolean;
}

export default function IllustrationFrame({
  pose,
  width = 220,
  height = 300,
  className,
  alt,
  forcePlaceholder = false,
}: IllustrationFrameProps) {
  const src = `/illustrations/${pose}.svg`;
  const label = alt ?? poseLabels[pose];

  if (forcePlaceholder) {
    return <Placeholder width={width} height={height} label={label} className={className} />;
  }

  // Attempt to render the real SVG. If the file doesn't exist, Next.js will
  // show a broken image — swap to the Placeholder until files are ready.
  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      className={cn("select-none", className)}
      draggable={false}
      // Illustrations are decorative art — don't lazy-load the cover one.
      priority={pose === "pearl-wave"}
    />
  );
}

// ── Dev placeholder ───────────────────────────────────────────────────────────
function Placeholder({
  width,
  height,
  label,
  className,
}: {
  width: number;
  height: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl",
        "border border-dashed border-[var(--color-beige)]",
        "bg-[var(--color-paper-alt)]",
        "text-center text-xs text-[var(--color-taupe)] font-ui",
        className
      )}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {/* Simple line-art silhouette placeholder */}
      <svg
        viewBox="0 0 64 80"
        width={40}
        height={50}
        fill="none"
        stroke="var(--color-beige)"
        strokeWidth="1.5"
        aria-hidden
      >
        {/* head */}
        <circle cx="32" cy="16" r="10" />
        {/* hair — long */}
        <path d="M22 16 Q18 36 20 56" />
        <path d="M42 16 Q46 36 44 56" />
        {/* body */}
        <path d="M24 26 Q28 36 28 50" />
        <path d="M40 26 Q36 36 36 50" />
        {/* arms */}
        <path d="M24 30 Q16 38 14 44" />
        <path d="M40 30 Q48 38 50 44" />
      </svg>
      <span className="px-2 leading-tight opacity-70">{label}</span>
      <span className="opacity-40">
        /public/illustrations/{"{pose}"}.svg
      </span>
    </div>
  );
}
