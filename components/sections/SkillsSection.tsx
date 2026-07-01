"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import OversizedWord from "@/components/ui/OversizedWord";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import PaperCard from "@/components/ui/PaperCard";
import TechTag from "@/components/ui/TechTag";
import StickyNote from "@/components/ui/StickyNote";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/ui/FadeIn";
import { PearlIllustration } from "@/components/illustrations";
import { skills } from "@/data/resume";
import { IconArrowRight } from "@/components/ui/Icons";

const cardRotations = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.6];

export default function SkillsSection() {
  return (
    <div className="relative overflow-hidden">
      <PageWrapper>
        <OversizedWord word="SKILLS" className="top-4 -left-2 -z-[1]" opacity={14} />

        {/* ═══════════════════ INTRO ═══════════════════ */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <FadeIn>
            <HandwrittenNote rotate={-1.5} className="mb-3">
              the toolbox, honestly labelled
            </HandwrittenNote>
            <h1
              className="font-heading font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Skills
            </h1>
            <p className="font-body text-ink-soft mt-6 max-w-[52ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Everything below is something I&apos;ve genuinely worked with, in real projects and
              coursework. Hover a tag to see where I used it.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto md:mx-0">
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: 200, height: 170, background: "var(--color-blush)", opacity: 0.16 }}
              />
              <PearlIllustration pose="thinking" width={210} height={290} className="relative" />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-right-8">
              <StickyNote color="beige" rotate={3}>
                still learning<br />
                <span style={{ fontSize: 13, opacity: 0.75 }}>always, honestly</span>
              </StickyNote>
            </div>
          </FadeIn>
        </div>

        <Divider label="§ index" />

        {/* ═══════════════════ SKILL CARDS ═══════════════════ */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.06}>
              <PaperCard
                variant={i % 3 === 0 ? "tape-top" : i % 3 === 1 ? "tape-side" : "default"}
                className="h-full p-6"
                style={{ transform: `rotate(${cardRotations[i % cardRotations.length]}deg)` }}
              >
                <p className="font-ui uppercase text-taupe" style={{ fontSize: 10.5, letterSpacing: "0.12em" }}>
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechTag key={item.name} label={item.name} usedIn={item.usedIn} />
                  ))}
                </div>
              </PaperCard>
            </FadeIn>
          ))}
        </div>

        <Divider />

        <FadeIn className="flex items-center justify-between gap-4 flex-wrap">
          <span className="handwritten text-ink-soft" style={{ fontSize: 18 }}>
            next up: the resume itself
          </span>
          <Link
            href="/resume"
            className="group inline-flex items-center gap-2 font-ui text-sm text-ink hover:text-taupe transition-colors duration-200"
          >
            Resume
            <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </PageWrapper>
    </div>
  );
}
