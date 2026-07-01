"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import OversizedWord from "@/components/ui/OversizedWord";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import PaperCard from "@/components/ui/PaperCard";
import StickyNote from "@/components/ui/StickyNote";
import Divider from "@/components/ui/Divider";
import TechTag from "@/components/ui/TechTag";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { PearlIllustration } from "@/components/illustrations";
import { personal, education, leadership } from "@/data/resume";
import { IconArrowRight } from "@/components/ui/Icons";

export default function AboutSection() {
  return (
    <div className="relative overflow-hidden">
      <PageWrapper>
        {/* ── Oversized background word ─────────────────────────────── */}
        <OversizedWord word="ABOUT" className="top-4 -left-2 -z-[1]" opacity={14} />

        {/* ══════════════════════════════════════════════════════════
             INTRO — heading + bio left, illustration right
           ══════════════════════════════════════════════════════════ */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <FadeIn>
            <HandwrittenNote rotate={-1.5} className="mb-3">
              the person behind the projects
            </HandwrittenNote>

            <h1
              className="font-heading font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              About Me
            </h1>

            <p className="font-body text-ink-soft mt-6 max-w-[52ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              I&apos;m {personal.name.split(" ")[0]}, a {education.institution.split(",")[0]} student
              studying towards a {education.degree}, expected {education.expectedGraduation}. I like
              turning messy, real problems into working software: forecasting demand, querying
              restaurant data at scale, or just making an interface feel like it was made with care.
            </p>

            <p className="font-body text-ink-soft mt-4 max-w-[52ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Outside of coursework, I&apos;ve worked on the technical/R&amp;D side of student events
              and stayed close to the ACM student community. I like being around people who are
              building things too.
            </p>

            <p className="font-body text-ink-soft mt-4 max-w-[52ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              I run on curiosity, Ctrl+C/Ctrl+V, and blind optimism.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="ink" size="md">
                See my work
                <IconArrowRight />
              </Button>
              <Button href={`mailto:${personal.email}`} variant="outline" size="md">
                Say hello
              </Button>
            </div>
          </FadeIn>

          {/* ── Illustration + sticky facts ─────────────────────────── */}
          <FadeIn delay={0.15} className="relative mx-auto md:mx-0">
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: 220, height: 180, background: "var(--color-blush)", opacity: 0.16 }}
              />
              <PearlIllustration pose="hero" width={230} height={320} className="relative" />
            </div>

            <div className="absolute -bottom-6 -left-4 rotate-[-3deg] md:-left-10">
              <StickyNote color="blush" rotate={-4}>
                {personal.year}
                <br />
                <span style={{ fontSize: 13, opacity: 0.75 }}>exp. {education.expectedGraduation}</span>
              </StickyNote>
            </div>
          </FadeIn>
        </div>

        <Divider label="§ 1" />

        {/* ══════════════════════════════════════════════════════════
             EDUCATION
           ══════════════════════════════════════════════════════════ */}
        <FadeIn>
          <HandwrittenNote rotate={-1} className="mb-4">
            where I&apos;m learning
          </HandwrittenNote>

          <PaperCard variant="tape-top" className="p-7 md:p-9">
            <p className="font-ui uppercase text-taupe" style={{ fontSize: 11, letterSpacing: "0.12em" }}>
              Education
            </p>
            <h2 className="font-heading font-medium text-ink mt-2" style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)" }}>
              {education.institution}
            </h2>
            <p className="font-body text-ink-soft mt-1" style={{ fontSize: "1rem" }}>
              {education.degree}
            </p>
            <p className="font-body italic text-ink-soft mt-1" style={{ fontSize: "0.9rem" }}>
              Expected {education.expectedGraduation}
            </p>

            <p className="font-ui uppercase text-taupe mt-6 mb-2" style={{ fontSize: 10, letterSpacing: "0.12em" }}>
              Relevant coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.relevantCoursework.map((course) => (
                <TechTag key={course} label={course} />
              ))}
            </div>
          </PaperCard>
        </FadeIn>

        <Divider label="§ 2" />

        {/* ══════════════════════════════════════════════════════════
             LEADERSHIP / INVOLVEMENT
           ══════════════════════════════════════════════════════════ */}
        <FadeIn>
          <HandwrittenNote rotate={1} className="mb-4">
            beyond the code
          </HandwrittenNote>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {leadership.map((item, i) => (
              <FadeIn key={item.org} delay={i * 0.08}>
                <PaperCard
                  variant={i === 1 ? "folded" : "default"}
                  className="h-full p-6"
                  style={{ transform: `rotate(${i === 0 ? -1 : i === 2 ? 1 : 0}deg)` }}
                >
                  <p className="font-heading font-medium text-ink" style={{ fontSize: "1.15rem" }}>
                    {item.role}
                  </p>
                  <p className="font-ui text-taupe mt-0.5" style={{ fontSize: 12, letterSpacing: "0.04em" }}>
                    {item.org}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="font-body text-ink-soft"
                        style={{ fontSize: "0.88rem", lineHeight: 1.6 }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </PaperCard>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── Footer nav to next page ─────────────────────────────── */}
        <FadeIn className="flex items-center justify-between gap-4 flex-wrap">
          <span className="handwritten text-ink-soft" style={{ fontSize: 18 }}>
            next up: what I&apos;ve built
          </span>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-ui text-sm text-ink hover:text-taupe transition-colors duration-200"
          >
            Projects
            <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </PageWrapper>
    </div>
  );
}
