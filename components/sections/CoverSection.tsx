"use client";

import { useEffect, useRef } from "react";
import { useAnimate, stagger } from "framer-motion";
import Link from "next/link";
import { PearlIllustration } from "@/components/illustrations";
import { cn } from "@/lib/utils";

// ─── Inline decorative SVG primitives ────────────────────────────────────────

function WashiTape({ w = 80, color = "#c9bba3", rotate = 0, opacity = 0.6 }: {
  w?: number; color?: string; rotate?: number; opacity?: number;
}) {
  return (
    <svg viewBox={`0 0 ${w} 18`} width={w} height={18} aria-hidden
      style={{ display: "block", transform: `rotate(${rotate}deg)`, opacity }}>
      <rect width={w} height={18} rx={2} fill={color} />
      {[3, 7, 11, 15].map(y => (
        <line key={y} x1={0} y1={y} x2={w} y2={y}
          stroke="rgba(255,255,255,0.35)" strokeWidth={0.8} />
      ))}
    </svg>
  );
}

function CoffeeRing({ size = 88 }: { size?: number }) {
  return (
    <svg viewBox="0 0 110 110" width={size} height={size} aria-hidden style={{ display: "block" }}>
      <circle cx={44} cy={44} r={38} fill="none" stroke="#8b6f52" strokeWidth={3} opacity={0.09} />
      <circle cx={44} cy={44} r={30} fill="none" stroke="#8b6f52" strokeWidth={1.5} opacity={0.06} />
      <circle cx={62} cy={60} r={30} fill="none" stroke="#8b6f52" strokeWidth={2.5} opacity={0.08} />
      <circle cx={62} cy={60} r={22} fill="none" stroke="#8b6f52" strokeWidth={1} opacity={0.05} />
    </svg>
  );
}

function StarDoodle({ size = 16, opacity = 0.45 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} fill="none"
      stroke="var(--color-blush)" strokeWidth={1.3} strokeLinecap="round"
      aria-hidden style={{ display: "block", opacity }}>
      <path d="M10 2 L11.8 7.8 L18 7.8 L13 11.5 L14.8 17.3 L10 13.8 L5.2 17.3 L7 11.5 L2 7.8 L8.2 7.8 Z" />
    </svg>
  );
}

function HandCircle({ size = 68, opacity = 0.35 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} fill="none"
      stroke="var(--color-blush)" strokeWidth={1.8} strokeLinecap="round"
      aria-hidden style={{ display: "block", opacity }}>
      <path d="M40 5 Q67 3 73 30 Q79 57 56 71 Q33 84 13 65 Q-4 47 5 23 Q14 2 40 5 Z" />
    </svg>
  );
}

function TinyArrow({ dir = "right", opacity = 0.7 }: { dir?: "right" | "left" | "down"; opacity?: number }) {
  const d: Record<string, string> = {
    right: "M2 10 Q10 9.5 18 10 M14 6 Q19 10 14 14",
    left:  "M18 10 Q10 9.5 2 10 M6 6 Q1 10 6 14",
    down:  "M10 2 Q9.5 10 10 18 M6 14 Q10 19 14 14",
  };
  return (
    <svg viewBox="0 0 20 20" width={22} height={22} fill="none"
      stroke="var(--color-ink)" strokeWidth={1.4} strokeLinecap="round"
      aria-hidden style={{ display: "inline-block", opacity }}>
      <path d={d[dir]} />
    </svg>
  );
}

function ScatterDots() {
  return (
    <svg viewBox="0 0 70 50" width={70} height={50} aria-hidden style={{ display: "block" }}>
      {[
        [6,6,2.4,0.32],[28,4,1.6,0.22],[58,10,3,0.28],
        [16,32,1.8,0.18],[54,38,2.2,0.26],[4,44,1.4,0.15],
      ].map(([cx,cy,r,op],i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="var(--color-blush)" opacity={op} />
      ))}
    </svg>
  );
}

function HighlightMark({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline", className)}>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-[0.5em] rounded-sm -z-[1]"
        style={{ background: "var(--color-blush)", opacity: 0.28 }} />
      {children}
    </span>
  );
}

// ─── Main Cover Component ─────────────────────────────────────────────────────

export default function CoverSection() {
  const [scope, animate] = useAnimate();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scope.current?.querySelectorAll("[data-e]").forEach((el: Element) => {
        (el as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const run = async () => {
      // 1. Huge name type bleeds in — opaque enough to really feel present
      await animate("[data-e='bg']", { opacity: [0, 1] }, { duration: 1.5, ease: "easeOut" });

      // 2. Illustration settles into the center, overlapping the type
      animate("[data-e='illus']", { opacity: [0, 1], y: [32, 0] },
        { duration: 1.0, ease: [0.22, 0.03, 0.26, 1] });

      // 3. Decorative objects appear (tape, rings, stars, dots…)
      animate("[data-e='decor']", { opacity: [0, 1], scale: [0.88, 1] },
        { duration: 0.55, ease: "easeOut", delay: stagger(0.06) });

      // 4. Text annotations stagger in
      animate("[data-e='txt']", { opacity: [0, 1], y: [14, 0] },
        { duration: 0.6, ease: [0.22, 0.03, 0.26, 1], delay: stagger(0.1) });

      // 5. CTA last
      await animate("[data-e='cta']", { opacity: [0, 1], y: [10, 0] },
        { duration: 0.55, ease: "easeOut" });
    };

    const t = setTimeout(run, 100);
    return () => clearTimeout(t);
  }, [animate, scope]);

  return (
    <section
      ref={scope}
      aria-label="Journal cover, Pearl Rana"
      className="relative w-full overflow-hidden bg-[var(--color-paper)]"
      style={{ minHeight: "100svh" }}
    >

      {/* ── HUGE BACKGROUND TYPE ─────────────────────────────────────────────
           Opacity is intentionally high (~45%) so the name IS the visual.
           Illustration sits above at z-10 and cuts right through it.        */}
      <div data-e="bg" aria-hidden className="pointer-events-none select-none absolute inset-0 overflow-hidden opacity-0">

        {/* "Pearl" — top-left, bleeds off edge */}
        <span className="absolute font-heading font-semibold italic text-[var(--color-blush)]"
          style={{
            fontSize: "clamp(6.5rem,25vw,21rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.03em",
            top: "-1%",
            left: "-1%",
            transform: "rotate(-2deg)",
            opacity: 0.42,
          }}>
          Pearl
        </span>

        {/* "Rana" — bottom-right, bleeds off edge, different font for contrast */}
        <span className="absolute font-display italic text-[var(--color-blush)]"
          style={{
            fontSize: "clamp(6rem,23vw,19rem)",
            lineHeight: 0.82,
            letterSpacing: "-0.02em",
            bottom: "0%",
            right: "-1%",
            transform: "rotate(1.5deg)",
            opacity: 0.38,
          }}>
          Rana
        </span>

        {/* "Builder." — tiny ghost word, mid-right, adds depth */}
        <span className="absolute font-ui uppercase text-[var(--color-blush)]"
          style={{
            fontSize: "clamp(0.6rem,1.2vw,1rem)",
            letterSpacing: "0.3em",
            top: "46%",
            right: "6%",
            opacity: 0.18,
            transform: "rotate(90deg) translateX(-50%)",
            transformOrigin: "right center",
          }}>
          Product · Design · Engineering
        </span>
      </div>

      {/* ── ILLUSTRATION ─────────────────────────────────────────────────────
           Centered, z-10. Overlaps both "Pearl" and "Rana" type.           */}
      <div data-e="illus" className="absolute opacity-0"
        style={{ left: "50%", top: "50%", transform: "translate(-50%,-53%)", zIndex: 10 }}>
        {/* Warm glow beneath */}
        <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
          style={{ width: 260, height: 200, background: "var(--color-blush)", opacity: 0.14 }} />
        <PearlIllustration pose="hero" width={250} height={340} className="relative" />
      </div>

      {/* ── WASHI TAPE STRIPS — pinning the illustration to the page ─────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "10%", left: "46%", zIndex: 15, transform: "rotate(-14deg)" }}>
        <WashiTape w={76} color="#d9a8ae" opacity={0.65} />
      </div>
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "12%", right: "30%", zIndex: 15, transform: "rotate(9deg)" }}>
        <WashiTape w={60} color="#c9bba3" opacity={0.58} />
      </div>
      {/* Bottom tape — holds illustration from below */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ bottom: "22%", left: "44%", zIndex: 15, transform: "rotate(3deg)" }}>
        <WashiTape w={64} color="#d9a8ae" opacity={0.5} />
      </div>

      {/* ── COFFEE RINGS — bottom-left corner ───────────────────────────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ bottom: "9%", left: "3%", zIndex: 4 }}>
        <CoffeeRing size={90} />
      </div>

      {/* ── STAR DOODLES ──────────────────────────────────────────────────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "20%", left: "9%", zIndex: 5, transform: "rotate(12deg)" }}>
        <StarDoodle size={18} opacity={0.5} />
      </div>
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "62%", right: "9%", zIndex: 5, transform: "rotate(-8deg)" }}>
        <StarDoodle size={15} opacity={0.4} />
      </div>
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "45%", left: "28%", zIndex: 5, transform: "rotate(20deg)" }}>
        <StarDoodle size={11} opacity={0.35} />
      </div>

      {/* ── HAND-DRAWN CIRCLE ─────────────────────────────────────────────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "53%", right: "5%", zIndex: 4 }}>
        <HandCircle size={72} opacity={0.38} />
      </div>

      {/* ── SCATTER DOTS ──────────────────────────────────────────────────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "7%", right: "7%", zIndex: 4 }}>
        <ScatterDots />
      </div>
      <div data-e="decor" className="absolute opacity-0"
        style={{ bottom: "28%", right: "22%", zIndex: 4, transform: "scaleX(-1)" }}>
        <ScatterDots />
      </div>

      {/* ── TINY HAND-DRAWN UNDERLINE under "Pearl" ───────────────────────── */}
      <div data-e="decor" className="absolute opacity-0"
        style={{ top: "18%", left: "2%", zIndex: 3 }}>
        <svg viewBox="0 0 120 8" width={120} height={8} fill="none"
          stroke="var(--color-blush)" strokeWidth={1.5} strokeLinecap="round" aria-hidden>
          <path d="M2 6 Q30 2 60 5 Q90 7 118 4" opacity={0.3} />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
           TEXT ANNOTATIONS — absolutely placed, each with its own rotation
         ══════════════════════════════════════════════════════════════════════ */}

      {/* "Hi." — top-left, bold handwritten, very visible */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "6%", left: "6%", zIndex: 25, transform: "rotate(-3deg)" }}>
        <span className="handwritten text-[var(--color-ink)]"
          style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)", display: "block", lineHeight: 1 }}>
          Hi.
        </span>
      </div>

      {/* "since you found this—" — tiny, under the Hi */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "14%", left: "5.5%", zIndex: 25, transform: "rotate(-1deg)" }}>
        <span className="handwritten text-[var(--color-ink-soft)]"
          style={{ fontSize: "clamp(0.9rem,1.6vw,1.25rem)", display: "block" }}>
          since you found this...
        </span>
      </div>

      {/* Primary "I'm Pearl Rana." heading — left side, in front of bg type */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "21%", left: "5%", zIndex: 25, maxWidth: "min(44vw, 500px)" }}>
        <h1 className="font-heading font-semibold text-[var(--color-ink)]"
          style={{
            fontSize: "clamp(2.6rem,5.5vw,4.8rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}>
          I&apos;m{" "}
          <HighlightMark>Pearl Rana.</HighlightMark>
        </h1>
        <p className="font-body italic text-[var(--color-ink-soft)] mt-3"
          style={{ fontSize: "clamp(0.88rem,1.4vw,1.05rem)", lineHeight: 1.65, maxWidth: "28ch" }}>
          CS &amp; Business Systems student building things people love to use.
        </p>
      </div>

      {/* Arrow + "that's me" pointing at illustration */}
      <div data-e="txt" className="absolute opacity-0 flex items-center gap-1"
        style={{ top: "32%", left: "31%", zIndex: 25, transform: "rotate(-4deg)" }}>
        <span className="handwritten text-[var(--color-ink-soft)]" style={{ fontSize: 14 }}>
          that&apos;s me
        </span>
        <TinyArrow dir="right" opacity={0.55} />
      </div>

      {/* "let me show you what I've built" — top-right */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "14%", right: "5%", zIndex: 25, transform: "rotate(2.5deg)", textAlign: "right", maxWidth: 170 }}>
        <span className="handwritten text-[var(--color-ink-soft)]"
          style={{ fontSize: "clamp(0.95rem,1.5vw,1.2rem)", display: "block", lineHeight: 1.5 }}>
          let me show you<br />what I&apos;ve built
        </span>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
          <TinyArrow dir="down" opacity={0.45} />
        </div>
      </div>

      {/* STICKY NOTE — "third-year CS student · TIET Patiala" left-mid */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "55%", left: "3.5%", zIndex: 25, transform: "rotate(-2.5deg)" }}>
        {/* Washi tape pin on sticky */}
        <div aria-hidden style={{
          position: "absolute", top: -9, left: "50%", transform: "translateX(-50%) rotate(3deg)",
          width: 44, height: 14,
          background: "#d9a8ae", opacity: 0.65, borderRadius: 2,
        }} />
        <div style={{
          background: "#f0d5d8",
          padding: "12px 16px",
          minWidth: 148,
          boxShadow: "2px 4px 12px rgba(43,39,35,0.13), 0 1px 2px rgba(43,39,35,0.08)",
        }}>
          <p className="handwritten text-[var(--color-ink)]" style={{ fontSize: 15, lineHeight: 1.5 }}>
            third-year student<br />
            TIET, Patiala<br />
            <span style={{ color: "var(--color-taupe)", fontSize: 13 }}>exp. 2028</span>
          </p>
        </div>
      </div>

      {/* Right-side fact block */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ top: "54%", right: "4%", zIndex: 25, transform: "rotate(1.5deg)", textAlign: "right" }}>
        <p className="font-ui uppercase text-[var(--color-taupe)]"
          style={{ fontSize: 8, letterSpacing: "0.14em", marginBottom: 5, borderBottom: "1px solid var(--color-beige)", paddingBottom: 4 }}>
          currently
        </p>
        <p className="font-body text-[var(--color-ink)]" style={{ fontSize: 12, lineHeight: 1.5 }}>
          B.E. CS &amp; Business Systems
        </p>
        <p className="font-body italic text-[var(--color-ink-soft)]" style={{ fontSize: 11 }}>
          Expected 2028
        </p>
      </div>

      {/* Small "By Pearl Rana" caption — bottom-left, like a magazine byline */}
      <div data-e="txt" className="absolute opacity-0"
        style={{ bottom: "18%", left: "5%", zIndex: 25, transform: "rotate(-1deg)" }}>
        <p className="font-ui uppercase text-[var(--color-taupe)]"
          style={{ fontSize: 9, letterSpacing: "0.12em" }}>
          CS / Product / Builder
        </p>
        <p className="font-body italic text-[var(--color-ink-soft)]" style={{ fontSize: 10.5 }}>
          By Pearl Rana
        </p>
      </div>

      {/* Social icons — bottom-left */}
      <div data-e="txt" className="absolute opacity-0 flex gap-5 items-center"
        style={{ bottom: "11%", left: "5%", zIndex: 25 }}>
        <a href="https://github.com/pearlrana" target="_blank" rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-[var(--color-taupe)] hover:text-[var(--color-ink)] transition-colors duration-200">
          <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" aria-hidden>
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
        <a href="mailto:pearlrana06@icloud.com" aria-label="Email Pearl"
          className="text-[var(--color-taupe)] hover:text-[var(--color-ink)] transition-colors duration-200">
          <svg viewBox="0 0 24 24" width={17} height={17} fill="none"
            stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
          </svg>
        </a>
      </div>

      {/* ── CTA — absolute bottom-center ──────────────────────────────────── */}
      <div data-e="cta" className="absolute opacity-0 flex flex-col items-center gap-3"
        style={{ bottom: "4.5%", left: "50%", transform: "translateX(-50%)", zIndex: 30 }}>

        <span className="handwritten text-[var(--color-ink-soft)]"
          style={{ fontSize: 16, transform: "rotate(-1deg)", display: "block" }}>
          open when ready ↓
        </span>

        <Link href="/about" className={cn(
          "group inline-flex items-center gap-3 rounded-full",
          "border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]",
          "px-8 py-3.5 font-ui text-sm font-medium",
          "transition-all duration-300",
          "hover:bg-transparent hover:text-[var(--color-ink)]",
          "active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-taupe)]"
        )}>
          Open Journal
          <svg viewBox="0 0 20 20" width={16} height={16} fill="none" stroke="currentColor"
            strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1.5">
            <path d="M3 10h14M11 4l6 6-6 6"/>
          </svg>
        </Link>

        {/* Page indicator dots */}
        <div className="flex gap-2 items-center mt-1" aria-hidden>
          <span style={{ display: "block", height: 5, width: 20, borderRadius: 99, background: "var(--color-ink)" }} />
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ display: "block", height: 5, width: 5, borderRadius: "50%", background: "var(--color-beige)" }} />
          ))}
        </div>
      </div>

    </section>
  );
}
