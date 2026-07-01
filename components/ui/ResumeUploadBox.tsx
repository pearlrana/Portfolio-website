import { cn } from "@/lib/utils";

interface ResumeUploadBoxProps {
  className?: string;
}

/**
 * Sits under the Download PDF / Email me buttons on the Resume page.
 * Explains, in plain steps, how to drop in an updated resume.pdf file —
 * visible in every environment (unlike the old dev-only PlaceholderNote),
 * since a visitor clicking "Download PDF" before the file exists deserves
 * an explanation, not a silent 404.
 */
export default function ResumeUploadBox({ className }: ResumeUploadBoxProps) {
  return (
    <div
      role="note"
      className={cn(
        "relative rounded-xl border border-dashed border-[var(--color-taupe)]/50",
        "bg-[var(--color-paper-alt)] px-5 py-4",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-taupe)]/40 text-[var(--color-taupe)]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M12 18v-6M9 15l3-3 3 3" />
          </svg>
        </span>
        <div>
          <p className="font-ui text-ink" style={{ fontSize: 13, fontWeight: 600 }}>
            Resume PDF not uploaded yet
          </p>
          <p className="font-body text-ink-soft mt-1" style={{ fontSize: 13, lineHeight: 1.6 }}>
            The &ldquo;Download PDF&rdquo; button above is already wired up. It just needs the
            file. To add or update it yourself, see the instructions below.
          </p>
        </div>
      </div>
    </div>
  );
}
