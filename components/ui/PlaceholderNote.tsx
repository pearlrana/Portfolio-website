interface PlaceholderNoteProps {
  message: string;
}

/**
 * Renders a clearly visible editorial flag wherever content from the resume
 * is missing. This makes placeholders obvious at a glance during development
 * so nothing is silently omitted or invented.
 *
 * Remove + replace with real content before deploying.
 */
export default function PlaceholderNote({ message }: PlaceholderNoteProps) {
  if (process.env.NODE_ENV === "production") {
    // In production, render nothing rather than showing dev markers to visitors.
    return null;
  }

  return (
    <span
      className="inline-flex items-start gap-1 rounded bg-amber-50 border border-amber-300 px-2 py-1 font-ui text-xs text-amber-700 leading-snug"
      role="note"
    >
      <span aria-hidden>✏️</span>
      <span>{message}</span>
    </span>
  );
}
