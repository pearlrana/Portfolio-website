"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "@/components/ui/PageWrapper";
import OversizedWord from "@/components/ui/OversizedWord";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import PaperCard from "@/components/ui/PaperCard";
import TiltCard from "@/components/ui/TiltCard";
import TechTag from "@/components/ui/TechTag";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/ui/FadeIn";
import { PearlIllustration } from "@/components/illustrations";
import { projects } from "@/data/resume";
import { IconArrowRight, IconExternal, IconGithub } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <div className="relative overflow-hidden">
      <PageWrapper>
        <OversizedWord word="WORK" className="top-4 -right-4 -z-[1]" opacity={14} />

        {/* ═══════════════════ INTRO ═══════════════════ */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <FadeIn>
            <HandwrittenNote rotate={-1.5} className="mb-3">
              things I actually shipped
            </HandwrittenNote>
            <h1
              className="font-heading font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Projects
            </h1>
            <p className="font-body text-ink-soft mt-6 max-w-[54ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              A few things I&apos;ve built end to end: forecasting pipelines, dashboards, a
              database or two that finally behaves. Tap a card to read the full story, the
              problem, what I built, and what I&apos;d do differently.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="hidden md:flex justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: 200, height: 160, background: "var(--color-blush)", opacity: 0.16 }}
              />
              <PearlIllustration pose="coding" width={190} height={260} className="relative" />
            </div>
          </FadeIn>
        </div>

        <Divider label={`§ ${projects.length} builds`} />

        {/* ═══════════════════ PROJECT GRID ═══════════════════ */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Divider />

        <FadeIn className="flex items-center justify-between gap-4 flex-wrap">
          <span className="handwritten text-ink-soft" style={{ fontSize: 18 }}>
            next up: the toolbox
          </span>
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 font-ui text-sm text-ink hover:text-taupe transition-colors duration-200"
          >
            Skills
            <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </PageWrapper>
    </div>
  );
}

// ─── Individual project card ────────────────────────────────────────────────

type ProjectData = (typeof projects)[number];

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  const tilt = index % 2 === 0 ? -0.6 : 0.6;

  return (
    <FadeIn delay={index * 0.08}>
      <TiltCard maxTilt={5} className="group h-full">
        <PaperCard
          variant={index === 1 ? "tape-top" : "default"}
          noHover
          className="relative flex h-full flex-col overflow-hidden p-7 md:p-8"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          {/* Ghost index number */}
          <span
            aria-hidden
            className="font-display italic absolute -top-3 -right-1 select-none pointer-events-none"
            style={{ fontSize: "5.5rem", color: "var(--color-blush)", opacity: 0.16, lineHeight: 1 }}
          >
            {num}
          </span>

          {/* Handwritten margin note */}
          <span
            className="handwritten absolute top-4 right-6 text-taupe"
            style={{ fontSize: 14, transform: "rotate(-3deg)", opacity: 0.85 }}
          >
            {project.note}
          </span>

          <p className="font-ui uppercase text-taupe" style={{ fontSize: 10.5, letterSpacing: "0.12em" }}>
            Project {num}
          </p>
          <h2 className="font-heading font-medium text-ink mt-1.5" style={{ fontSize: "clamp(1.3rem,2.3vw,1.65rem)", lineHeight: 1.15 }}>
            {project.title}
          </h2>
          <p className="font-body italic text-ink-soft mt-1" style={{ fontSize: "0.85rem" }}>
            {project.stackLine}
          </p>

          <p className="font-body text-ink-soft mt-4" style={{ fontSize: "0.94rem", lineHeight: 1.7 }}>
            {project.overview}
          </p>

          {/* Key features — quick-scan bullets */}
          <ul className="mt-4 space-y-1.5">
            {project.keyFeatures.slice(0, 2).map((f) => (
              <li key={f} className="font-body text-ink-soft flex gap-2" style={{ fontSize: "0.86rem", lineHeight: 1.55 }}>
                <span aria-hidden className="text-blush shrink-0">•</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>

          {/* Expand toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 inline-flex w-fit items-center gap-1.5 font-ui text-sm text-ink hover:text-taupe transition-colors duration-200"
          >
            {open ? "Show less" : "Read the full story"}
            <IconArrowRight
              className={cn("transition-transform duration-300", open ? "rotate-90" : "group-hover:translate-x-1")}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 0.03, 0.26, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-4 border-t border-hairline-soft pt-5">
                  <DetailBlock label="The problem" text={project.problem} />
                  <DetailBlock label="What I built" text={project.solution} />
                  {!project.challenges.startsWith("[Placeholder") && (
                    <DetailBlock label="Hardest part" text={project.challenges} />
                  )}
                  {!project.whatILearned.startsWith("[Placeholder") && (
                    <DetailBlock label="What I learned" text={project.whatILearned} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer links */}
          <div className="mt-6 flex items-center gap-5 pt-5 border-t border-hairline-soft">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-ui text-xs text-ink-soft hover:text-ink transition-colors duration-200"
            >
              <IconGithub size={15} />
              Source
            </a>
            {project.liveDemo && !project.livePlaceholder ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-ui text-xs text-ink-soft hover:text-ink transition-colors duration-200"
              >
                <IconExternal size={13} />
                Live demo
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 font-ui text-xs text-ink-soft/50 cursor-default"
                title="No live demo linked on the resume yet"
              >
                <IconExternal size={13} />
                Not deployed yet
              </span>
            )}
          </div>
        </PaperCard>
      </TiltCard>
    </FadeIn>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-ui uppercase text-taupe" style={{ fontSize: 9.5, letterSpacing: "0.1em" }}>
        {label}
      </p>
      <p className="font-body text-ink-soft mt-1" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>
        {text}
      </p>
    </div>
  );
}
