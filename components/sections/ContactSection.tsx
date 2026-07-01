"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/ui/FadeIn";
import { PearlIllustration } from "@/components/illustrations";
import { personal } from "@/data/resume";
import { IconArrowRight, IconGithub, IconLinkedIn, IconMail } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

// ─── Envelope with a peeking handwritten note — the closing visual ─────────
function EnvelopeNote() {
  return (
    <div className="relative mx-auto" style={{ width: 260 }}>
      {/* Note peeking out the top */}
      <div
        className="absolute left-1/2 z-0 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-[var(--color-paper-alt)] px-5 py-4 shadow-paper"
        style={{ top: -46, width: 220 }}
      >
        <p className="handwritten text-ink" style={{ fontSize: 15, lineHeight: 1.5 }}>
          Thanks so much for reading all the way through my journal.
          <br />
          If you&apos;re hiring, collaborating, or just want to say hi,
          <br />
          I&apos;d genuinely love to hear from you.
        </p>
        <p className="handwritten text-taupe mt-2 text-right" style={{ fontSize: 17 }}>
          Pearl
        </p>
      </div>

      {/* Envelope body */}
      <svg
        viewBox="0 0 260 170"
        width="100%"
        height="auto"
        className="relative z-10 block"
        aria-hidden
      >
        <rect x="4" y="10" width="252" height="156" rx="6" fill="var(--color-blush)" opacity="0.9" />
        <path d="M 4 16 L 130 105 L 256 16" fill="none" stroke="var(--color-paper)" strokeWidth="3" opacity="0.5" />
        <path d="M 4 16 Q 130 95 256 16 L 256 22 Q 130 100 4 22 Z" fill="#c98d95" opacity="0.6" />
        <rect x="4" y="10" width="252" height="156" rx="6" fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.12" />
      </svg>
    </div>
  );
}

const contactLinks = [
  {
    label: personal.email,
    href: `mailto:${personal.email}`,
    icon: IconMail,
  },
  {
    label: "GitHub",
    href: personal.github,
    icon: IconGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: IconLinkedIn,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden">
      <PageWrapper className="pb-16">
        {/* ═══════════════════ INTRO ═══════════════════ */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <FadeIn>
            <HandwrittenNote rotate={-1.5} className="mb-3">
              you made it to the last page
            </HandwrittenNote>
            <h1
              className="font-heading font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Let&apos;s talk
            </h1>
            <p className="font-body text-ink-soft mt-6 max-w-[50ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Internships, collaborations, or just a good conversation about something you
              built. My inbox is open, and I usually reply within a day or two.
            </p>

            <div className="mt-8 flex flex-col gap-3 max-w-[340px]">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group flex items-center justify-between gap-3 rounded-xl",
                    "border border-hairline-soft bg-[var(--color-paper-alt)] px-5 py-3.5",
                    "font-ui text-sm text-ink transition-all duration-200",
                    "hover:border-[var(--color-taupe)] hover:shadow-paper"
                  )}
                >
                  <span className="inline-flex items-center gap-3">
                    <link.icon size={17} className="text-taupe" />
                    {link.label}
                  </span>
                  <IconArrowRight className="text-taupe transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Button href={`mailto:${personal.email}`} variant="ink" size="lg">
                Say hello
                <IconArrowRight />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto md:mx-0">
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: 210, height: 180, background: "var(--color-blush)", opacity: 0.16 }}
              />
              <PearlIllustration pose="waving" width={220} height={300} className="relative" />
            </div>
          </FadeIn>
        </div>

        <Divider />

        {/* ═══════════════════ CLOSING — "and that's a wrap" ═══════════════════ */}
        <FadeIn className="relative mt-4 flex flex-col items-center text-center">
          <span
            aria-hidden
            className="font-display italic select-none"
            style={{
              fontSize: "clamp(3.2rem,11vw,7.5rem)",
              lineHeight: 0.9,
              color: "var(--color-blush)",
              letterSpacing: "-0.02em",
            }}
          >
            and that&apos;s
            <br />
            a wrap.
          </span>

          <div className="mt-10 mb-4">
            <EnvelopeNote />
          </div>

          <p className="font-body italic text-ink-soft mt-14 max-w-[36ch]" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
            {personal.tagline}. Currently based near {personal.location.split(",")[0]}.
          </p>

          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 font-ui text-sm text-ink-soft hover:text-ink transition-colors duration-200"
          >
            <IconArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to the cover
          </Link>

          {/* Page indicator dots, matching the cover's rhythm */}
          <div className="flex gap-2 items-center mt-8" aria-hidden>
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                style={{ display: "block", height: 5, width: 5, borderRadius: "50%", background: "var(--color-beige)" }}
              />
            ))}
            <span style={{ display: "block", height: 5, width: 20, borderRadius: 99, background: "var(--color-ink)" }} />
          </div>
        </FadeIn>
      </PageWrapper>
    </div>
  );
}
