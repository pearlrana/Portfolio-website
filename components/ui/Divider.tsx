import { cn } from "@/lib/utils";

interface DividerProps {
  label?: string;
  className?: string;
}

/**
 * A thin hairline rule — the editorial "breath" between blocks.
 * Optionally shows a small centred label (e.g. "§" or a page number).
 */
export default function Divider({ label, className }: DividerProps) {
  if (!label) {
    return (
      <hr
        className={cn(
          "border-none h-px bg-[var(--color-hairline)]",
          "my-12 md:my-16",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative my-12 md:my-16 flex items-center gap-4",
        className
      )}
    >
      <span className="flex-1 h-px bg-[var(--color-hairline)]" />
      <span className="handwritten text-base text-[var(--color-taupe)] shrink-0">
        {label}
      </span>
      <span className="flex-1 h-px bg-[var(--color-hairline)]" />
    </div>
  );
}
