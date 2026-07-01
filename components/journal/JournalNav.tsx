"use client";

import { useState, useId, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navPages } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function JournalNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed top-5 right-5 z-50 flex items-center gap-2 rounded-full",
          "bg-paper-alt/90 backdrop-blur px-4 py-2.5 shadow-paper",
          "border border-[var(--color-hairline)]",
          "font-ui text-sm text-ink hover:shadow-paper-lifted transition-shadow duration-300"
        )}
      >
        <span className="font-hand text-lg leading-none -mt-0.5">
          {open ? "close" : "contents"}
        </span>
        <span
          className={cn(
            "relative block h-3 w-4 shrink-0 transition-transform duration-300",
            open && "rotate-90"
          )}
          aria-hidden
        >
          <span className="absolute inset-x-0 top-0 h-[1.5px] bg-ink" />
          <span className="absolute inset-x-0 top-1.5 h-[1.5px] bg-ink" />
          <span className="absolute inset-x-0 top-3 h-[1.5px] bg-ink" />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={menuId}
            aria-label="Journal pages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-paper"
          >
            <div className="paper-grain" />
            <ul className="relative z-10 flex h-full flex-col items-start justify-center gap-2 px-[var(--page-gutter)]">
              {navPages.map((page, i) => {
                const isActive = pathname === page.href;
                return (
                  <motion.li
                    key={page.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={page.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-baseline gap-4 font-heading text-[clamp(2.5rem,7vw,5rem)]",
                        "leading-[1.05] text-ink hover:text-taupe transition-colors duration-300",
                        isActive && "text-taupe"
                      )}
                    >
                      <span className="font-ui text-sm text-ink-soft self-center">
                        0{i + 1}
                      </span>
                      {page.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
