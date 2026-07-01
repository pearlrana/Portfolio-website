import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Every page (About, Projects, Skills, Resume, Contact) wraps its content
 * in this. It provides:
 *   - consistent horizontal gutter
 *   - max-width cap centered on screen
 *   - top padding that clears the JournalNav button
 *   - a relative context so OversizedWord (absolute) sits correctly
 */
export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full",
        "max-w-[var(--content-max)]",
        "px-[var(--page-gutter)]",
        "pt-24 pb-32",
        className
      )}
    >
      {children}
    </div>
  );
}
