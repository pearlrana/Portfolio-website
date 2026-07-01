import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  /** "used in X" tooltip shown on hover — passed as title attr */
  usedIn?: string[];
  className?: string;
}

/**
 * A small typographic chip for displaying a technology name.
 * Used in:
 *   - Project write-ups (tech stack line)
 *   - Skills notebook (each skill item)
 *
 * Hover reveals `usedIn` context via a tooltip — no JavaScript needed for
 * the basic case (title attr). The SkillNotebook component adds a richer
 * popover where needed.
 */
export default function TechTag({ label, usedIn, className }: TechTagProps) {
  const tooltip = usedIn && usedIn.length > 0
    ? `Used in: ${usedIn.join(", ")}`
    : undefined;

  return (
    <span
      title={tooltip}
      className={cn(
        "inline-flex items-center",
        "rounded-full border border-[var(--color-hairline)]",
        "bg-[var(--color-paper-alt)] px-3 py-1",
        "font-ui text-xs text-[var(--color-ink-soft)]",
        "transition-all duration-200",
        "hover:border-[var(--color-taupe)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper)]",
        tooltip && "cursor-help",
        className
      )}
    >
      {label}
    </span>
  );
}
