"use client";

import Link from "next/link";
import PageWrapper from "@/components/ui/PageWrapper";
import OversizedWord from "@/components/ui/OversizedWord";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import PaperCard from "@/components/ui/PaperCard";
import TechTag from "@/components/ui/TechTag";
import Paperclip from "@/components/ui/Paperclip";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import PlaceholderNote from "@/components/ui/PlaceholderNote";
import ResumeUploadBox from "@/components/ui/ResumeUploadBox";
import FadeIn from "@/components/ui/FadeIn";
import { PearlIllustration } from "@/components/illustrations";
import { personal, education, projects, skills } from "@/data/resume";
import { IconArrowRight, IconDownload, IconGithub, IconLinkedIn, IconMail } from "@/components/ui/Icons";

export default function ResumeSection() {
  return (
    <div className="relative overflow-hidden">
      <PageWrapper>
        <OversizedWord word="RESUME" className="top-4 -right-4 -z-[1]" opacity={14} />

        {/* ═══════════════════ INTRO ═══════════════════ */}
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <FadeIn>
            <HandwrittenNote rotate={-1.5} className="mb-3">
              the official version
            </HandwrittenNote>
            <h1
              className="font-heading font-semibold text-ink"
              style={{ fontSize: "clamp(2.6rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Resume
            </h1>
            <p className="font-body text-ink-soft mt-6 max-w-[52ch]" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
              Everything on this page also lives in the projects and skills sections. This is
              just the condensed, printable version, in case you&apos;d rather skim it in one
              pass.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/resume.pdf" variant="ink" size="md">
                <IconDownload />
                Download PDF
              </Button>
              <Button href={`mailto:${personal.email}`} variant="outline" size="md">
                <IconMail />
                Email me
              </Button>
            </div>
            <div className="mt-4">
              <ResumeUploadBox />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto md:mx-0">
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full blur-3xl"
                style={{ width: 200, height: 170, background: "var(--color-blush)", opacity: 0.16 }}
              />
              <PearlIllustration pose="resume" width={210} height={290} className="relative" />
              <span
                aria-hidden
                className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-[-6deg]"
              >
                <Paperclip size={44} />
              </span>
            </div>
          </FadeIn>
        </div>

        <Divider label="§ 1" className="my-8 md:my-10" />

        {/* ═══════════════════ HEADER CARD ═══════════════════ */}
        <FadeIn className="relative">
          <span aria-hidden className="absolute -top-5 left-8 rotate-[-4deg] z-10">
            <Paperclip size={40} />
          </span>
          <PaperCard variant="folded" className="p-7 md:p-9">
            <h2 className="font-heading font-semibold text-ink" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
              {personal.name}
            </h2>
            <p className="font-body italic text-ink-soft mt-1" style={{ fontSize: "1rem" }}>
              {personal.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-ui text-ink-soft" style={{ fontSize: 13 }}>
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                <IconMail size={14} /> {personal.email}
              </a>
              <span className="inline-flex items-center gap-1.5">{personal.phone}</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                <IconGithub size={14} /> github.com/pearlrana
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                <IconLinkedIn size={14} /> LinkedIn
                {personal.linkedinIsPlaceholder && (
                  <span className="ml-1">
                    <PlaceholderNote message="confirm this LinkedIn URL" />
                  </span>
                )}
              </a>
            </div>
          </PaperCard>
        </FadeIn>

        <Divider label="§ 2" />

        {/* ═══════════════════ EDUCATION ═══════════════════ */}
        <FadeIn>
          <HandwrittenNote rotate={-1} className="mb-4">where I&apos;m learning</HandwrittenNote>
          <PaperCard variant="tape-top" className="p-7 md:p-8">
            <h3 className="font-heading font-medium text-ink" style={{ fontSize: "1.3rem" }}>
              {education.institution}
            </h3>
            <p className="font-body text-ink-soft mt-1" style={{ fontSize: "0.95rem" }}>
              {education.degree}
            </p>
            <p className="font-body italic text-ink-soft mt-1" style={{ fontSize: "0.85rem" }}>
              Expected {education.expectedGraduation}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.relevantCoursework.map((c) => (
                <TechTag key={c} label={c} />
              ))}
            </div>
          </PaperCard>
        </FadeIn>

        <Divider label="§ 3" />

        {/* ═══════════════════ PROJECTS SUMMARY ═══════════════════ */}
        <FadeIn>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <HandwrittenNote rotate={1}>things I&apos;ve built</HandwrittenNote>
            <Link href="/projects" className="font-ui text-xs text-taupe hover:text-ink transition-colors inline-flex items-center gap-1">
              full write-ups <IconArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-4">
            {projects.map((p) => (
              <PaperCard key={p.slug} className="p-6" noHover>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h4 className="font-heading font-medium text-ink" style={{ fontSize: "1.1rem" }}>
                    {p.title}
                  </h4>
                  <span className="font-body italic text-ink-soft" style={{ fontSize: "0.82rem" }}>
                    {p.stackLine}
                  </span>
                </div>
                <p className="font-body text-ink-soft mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {p.overview}
                </p>
              </PaperCard>
            ))}
          </div>
        </FadeIn>

        <Divider label="§ 4" />

        {/* ═══════════════════ SKILLS SUMMARY ═══════════════════ */}
        <FadeIn>
          <HandwrittenNote rotate={-1} className="mb-4">the toolbox</HandwrittenNote>
          <PaperCard className="p-7 md:p-8" noHover>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4">
                  <p className="font-ui uppercase text-taupe shrink-0" style={{ fontSize: 10.5, letterSpacing: "0.1em", width: 110 }}>
                    {group.category}
                  </p>
                  <p className="font-body text-ink-soft" style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {group.items.map((i) => i.name).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </PaperCard>
        </FadeIn>

        <Divider />

        <FadeIn className="flex items-center justify-between gap-4 flex-wrap">
          <span className="handwritten text-ink-soft" style={{ fontSize: 18 }}>
            last page: say hello
          </span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-ui text-sm text-ink hover:text-taupe transition-colors duration-200"
          >
            Contact
            <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </PageWrapper>
    </div>
  );
}
