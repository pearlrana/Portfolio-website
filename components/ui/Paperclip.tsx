import { cn } from "@/lib/utils";

interface PaperclipProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * A realistic-ish paper clip SVG path used as decoration on the Resume page
 * and any card that benefits from the "pinned paper" feel.
 */
export default function Paperclip({
  className,
  color = "var(--color-taupe)",
  size = 48,
}: PaperclipProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 60"
      width={size * 0.4}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("select-none pointer-events-none shrink-0", className)}
    >
      {/* Outer U-bend */}
      <path d="M6 8 Q6 2 12 2 Q18 2 18 8 L18 44 Q18 54 12 54 Q6 54 6 44 L6 14" />
      {/* Inner bar */}
      <path d="M10 14 L10 44 Q10 50 12 50 Q14 50 14 44 L14 14" />
    </svg>
  );
}
